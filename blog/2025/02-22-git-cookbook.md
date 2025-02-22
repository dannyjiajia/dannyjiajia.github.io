---
title: git使用技巧汇总
authors: dannyhe
tags:
  - git
---

# Git Cookbook

## 别名:更方便的使用命令

配置git使用别名
~~~shell
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.br branch
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
~~~

也可直接编辑Git的全局配置文件`.gitconfig`
~~~ini
[alias]
st = status
co = checkout
ci = commit
br = branch
lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
~~~

即可使用
~~~
git co -b dev
~~~

:::tip
这里是以创建新的本地分支`dev`为例演示`checkout`的别名`co`
:::

## Git lfs 大文件容易超时

加大活跃时间
~~~
git config lfs.activitytimeout 60
~~~
