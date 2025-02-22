---
title: 以ABS宏为例说说Clang中的宏定义方式技巧
date: 2016-07-25 17:25:56
tags: [iOS]
---

我们在iOS开发的时候经常使用宏定义,最常用的宏肯定是`DEBUG`,像下面这样:)

~~~objectivec
#if DEBUG
...
#endif

#if __has_feature(objc_arc_weak)
...
#elif __has_feature(objc_arc)
...
#else
...
#endif

#if (TARGET_OS_MAC || TARGET_OS_IPHONE)
...
#endif
~~~

记录下我对Clang中定义的宏`ABS`的理解(从零开始的理解),它的作用很简单:`得到一个数的绝对值`。


<!-- truncate -->
# 宏的类型

宏分为对象宏(object-like macro)和函数宏(function-like macro)。

## 对象宏

对象宏就是我们定义的一些固定值,就像苹果的定义:

~~~objectivec
/*  Even though these might be more useful as long doubles, POSIX requires
    that they be double-precision literals.                                   */
#define M_E         2.71828182845904523536028747135266250   /* e              */
#define M_LOG2E     1.44269504088896340735992468100189214   /* log2(e)        */
#define M_LOG10E    0.434294481903251827651128918916605082  /* log10(e)       */
#define M_LN2       0.693147180559945309417232121458176568  /* loge(2)        */
#define M_LN10      2.30258509299404568401799145468436421   /* loge(10)       */
#define M_PI        3.14159265358979323846264338327950288   /* pi             */
#define M_PI_2      1.57079632679489661923132169163975144   /* pi/2           */
#define M_PI_4      0.785398163397448309615660845819875721  /* pi/4           */
#define M_1_PI      0.318309886183790671537767526745028724  /* 1/pi           */
#define M_2_PI      0.636619772367581343075535053490057448  /* 2/pi           */
#define M_2_SQRTPI  1.12837916709551257389615890312154517   /* 2/sqrt(pi)     */
#define M_SQRT2     1.41421356237309504880168872420969808   /* sqrt(2)        */
#define M_SQRT1_2   0.707106781186547524400844362104849039  /* 1/sqrt(2)      */
~~~

理解成简单的替换代码就好。

## 函数宏

函数宏就像函数一样接受参数,就像上文中说到的`ABS`宏

# 定义ABS宏

我们尝试自己定义一个宏`ABS`,功能和`Clang`的一样,得到一个数的绝对值。

~~~objectivec
//version 1
#define ABS(A) A < 0 ? - A : A
~~~

然后使用

~~~objectivec
NSLog(@"%d",ABS(-1)); //1
~~~

好简单,完成了。别人拿去一用马上出问题了,只能说还是太年轻了:)

~~~objectivec
NSLog(@"%d",ABS(-1) + 1); //1 error
//NSLog(@"%d",-1 < 0 ? 1 : 1 + 1)
~~~

把上面的宏展开就明显看出结果是`1`,我们应该把表达式的结果作为结果替换宏,
so我们修复我们的宏:

~~~objectivec
//version 2
#define ABS(A) (A < 0 ? - A : A)
~~~

以为天下太平了? `No`,如果像下面这样用呢?

~~~objectivec
NSLog(@"%d",ABS(2 < 3 ? -1 < 0 ? -1 : -2 : -2)); //-1 error
//NSLog(@"%d",2 < 3 ? -1 : -2 < 0 ? - 2 < 3 ? -1 : -2 : 2 < 3 ? -1 : -2);
//NSLog(@"%d",(2 < 3 ? -1 : -2 ) < 0 ? (- 2 < 3 ? -1 : -2) : (2 < 3 ? -1 : -2));
~~~

哈哈，是不是被运算符优先级吓到了? 其实我们需要保证我们参数可以是表达式。

~~~objectivec
//version 3
#define ABS(A) ((A) < 0 ? - (A) : (A))
~~~

现在这个宏基本胜任了大部分地方,但是过几天某大牛突然过来找你,说你提供的宏有问题!

~~~objectivec
int a = -1;
NSLog(@"%d",ABS(a++)); //0 error
NSLog(@"%d",a);//1 error
~~~

你看到这代码的第一反应可能是,卧槽,为什么一定要用`a++`就不能用完了再`+1`嘛！可是大牛说他就爱这样写,代码简洁...
好！我们还是老实的展开这个宏

~~~objectivec
NSLog(@"%d",((a++) < 0 ? - (a++) : (a++)));
NSLog(@"%d",a);
~~~

`a++`表示先使用`a`的值,然后对`a`进行自加1,上面的展开的宏中,第一次`a`和`0`比较过后进行了自加`1`变成了`0`,后面返回`0`后又自加`1`，所以`a`最后的值变成了`1`!
为了解决这个问题我们先算出表达式`A`的值,保证它只被计算一次。

~~~objectivec
//version 4
#define ABS(A) ({__typeof__ (A) __a = (A); __a < 0 ? - __a : __a;})
~~~

`({...})`是语句表达式,GNU C 把包含在括号中的复合语句看做是一个表达式，称为语句表达式，它可以出现在任何允许表达式的地方，你可以在语句表达式中使用循环、局部变量等，原本只能在复合语句中使用。

# 苹果定义的ABS

最后我们来看看苹果定义的`ABS`宏:

~~~objectivec
#define __NSX_PASTE__(A,B) A##B
#if !defined(ABS)
#define __NSABS_IMPL__(A,L) ({ __typeof__(A) __NSX_PASTE__(__a,L) = (A); (__NSX_PASTE__(__a,L) < 0) ? - __NSX_PASTE__(__a,L) : __NSX_PASTE__(__a,L); })
#define ABS(A) __NSABS_IMPL__(A,__COUNTER__)
#endif
~~~

看起来和我们自己定义的`ABS`整体架构差不多,`__NSX_PASTE__`中的`##`是特殊符号用来连接两个参数。比如上面是`__a`和`L`，而`L`传入的是`__COUNTER__`，它是使用一次后便会自加1的特殊宏.也就是为了给我们的变量加了后缀。这是为了确保在这个作用域中宏不会出现相同变量。
像我们自己定义的宏一样简单的使用`__a`变量,如果代码的作用域中有重复的`__a`变量就悲剧了... 比如我们像下面这样使用我们先前自己定义的`ABS`宏(version 4)就会发现错误了...

~~~objectivec
int __a = -1;
NSLog(@"%d",ABS(__a++)); //32767 error
NSLog(@"%d",__a); // -1
~~~

你看了上面苹果的定义后应该知道怎么修改我们的定义了吧
:) end
