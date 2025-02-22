"use strict";(self.webpackChunkdannyjiajia_github_io=self.webpackChunkdannyjiajia_github_io||[]).push([[4085],{1962:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>x});var r=e(5703),s=e(4848),o=e(8453);const i={title:"WindowsPhone\u7684TextBox\u591a\u884c\u652f\u6301\u53ca\u7591\u95ee",date:new Date("2016-07-20T14:57:34.000Z"),tags:["Cocos2dx","Windows Phone"]},c=void 0,d={authorsImageUrls:[]},x=[];function l(t){const n={a:"a",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u6700\u8fd1\u5728\u4f7f\u75282dx\u7684\u65f6\u5019\u6539\u9020\u4e86\u4e00\u4e2a",(0,s.jsx)(n.a,{href:"https://github.com/cocos2d/cocos2d-x/blob/v3/cocos/ui/UIEditBox/UIEditBoxImpl-winrt.cpp",children:"UIEditBox"}),",\u4f7f\u5176\u652f\u6301\u591a\u884c\u8f93\u5165,\u56e0\u4e3a\u5728Windows Phone\u4e0a\u5355\u884c\u548c\u591a\u884c\u8f93\u5165\u90fd\u662f\u4f7f\u7528\u540c\u4e00\u4e2a\u7cfb\u7edf\u63a7\u4ef6",(0,s.jsx)(n.code,{children:"TextBox"}),",\u5173\u4e8e\u5982\u4f55\u4f7f\u7528\u591a\u884c\u8f93\u5165,\u53ef\u4ee5\u53c2\u8003\u5fae\u8f6f\u7684",(0,s.jsx)(n.a,{href:"https://msdn.microsoft.com/en-us/library/ms742157.aspx",children:"\u6587\u6863"})]}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u7136Cocos2dx\u57283.5\u4ee5\u4e0a\u7684\u7248\u672c\u4e2d\u5df2\u7ecf\u662f\u4f7f\u7528cpp(cx)\u7684\u5f00\u53d1\u6a21\u677f,\u5927\u610f\u7684\u4ee3\u7801\u5982\u4e0b:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"m_textBox->TextWrapping = Windows::UI::Xaml::TextWrapping::Wrap;\nm_textBox->AcceptsReturn = true;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u65b0\u52a0\u4e86\u4e00\u4e2a\u7c7b",(0,s.jsx)(n.code,{children:"UITextViewWinRT"}),"\u63d0\u4f9b\u7cfb\u7edf\u7684\u591a\u884c\u8f93\u5165\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'void UITextViewWinRT::SetupTextBox()\n{\n\tRemoveTextBox();\n\tm_textBox = ref new TextBox;\n\t\n\tm_textBox->Name = "cocos2d_editbox_textbox";\n\tm_textBox->MinWidth = 200;\n\tm_textBox->PlaceholderText = m_strPlaceholder;\n\tm_textBox->Select(m_textBox->Text->Length(), 0);\n\tm_textBox->MaxLength = m_maxLength < 0 ? 0 : m_maxLength;\n\tm_textBox->MinHeight = 100;\n\tm_textBox->MaxHeight = 200;\n\tm_textBox->TextWrapping = Windows::UI::Xaml::TextWrapping::Wrap;\n\tm_textBox->AcceptsReturn = true;\n\n\tSetInputScope(m_textBox, m_inputMode);\n\tm_textBox->Text = m_strText; //\u6ce8\u610f\u8fd9\u884c\n\tauto g = findXamlElement(m_flyout->Content, "cocos2d_editbox_grid");\n\tauto grid = dynamic_cast<Grid^>(g);\n\tgrid->Children->InsertAt(0, m_textBox);\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u9605\u8bfb\u8fc7\u5b98\u65b9\u7684",(0,s.jsx)(n.code,{children:"UIEditBoxImpl-winrt.cpp"}),"\u52a0\u4e0a\u7ec6\u5fc3\u7684\u540c\u5b66\u4f1a\u6ce8\u610f",(0,s.jsx)(n.code,{children:"m_textBox->Text = m_strText; //\u6ce8\u610f\u8fd9\u884c"}),"\u8fd9\u884c\u4ee3\u7801,\u56e0\u4e3a\u6211\u5c06\u8fd9\u6bb5\u4ee3\u7801\u653e\u5230\u8bbe\u7f6e",(0,s.jsx)(n.code,{children:"TextBox"}),"\u652f\u6301\u591a\u884c\u8f93\u51fa\u7684\u4ee3\u7801\u540e\u9762\u4e86\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["\u5982\u679c\u4e0d\u8fd9\u6837\u7684\u7684\u8bdd,\u5982\u679c\u4f60\u7ed9",(0,s.jsx)(n.code,{children:"TextBox"}),"\u8bbe\u7f6e\u591a\u884c\u6587\u672c\u7684\u65f6\u5019\u662f\u65e0\u6548\u7684"]}),",\u731c\u60f3\u53ef\u80fd\u662f\u7cfb\u7edf\u5728\u8bbe\u7f6e\u5176\u6587\u672c\u5c5e\u6027\u7684\u65f6\u5019\u8ba1\u7b97\u4e86\u6587\u672c\u7684\u6446\u653e\u7684\u7ed3\u6784,\u5f53\u6e32\u67d3\u7684\u65f6\u5019\u8fdb\u884c\u6e32\u67d3.\nWindows Phone\u7684\u6362\u884c\u7b26\u4e3a",(0,s.jsx)(n.code,{children:"\\r\\n"}),"\u4e0d\u662f\u4e00\u822c\u7684",(0,s.jsx)(n.code,{children:"\\n"}),",\u8fd9\u4f1a\u5f15\u8d77\u65b0\u7684\u95ee\u9898,2dx\u91cc\u5c06",(0,s.jsx)(n.code,{children:"unicode"}),"\u7801\u8f6c\u5316\u6210",(0,s.jsx)(n.code,{children:"UTF8"}),"\u5728",(0,s.jsx)(n.code,{children:"Label"}),"\u91cc\u663e\u793a",(0,s.jsx)(n.code,{children:"\\r"}),"\u4f1a\u88ab\u663e\u793a\u4e3a\u4e71\u7801\uff01"]}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u7684\u4fee\u6539\u65b9\u6848\u662f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Platform::String(unicode)\u8f6c\u4e3astd::string(UTF8)\u7684\u65f6\u5019\u79fb\u9664",(0,s.jsx)(n.code,{children:"\\r"}),",\u56e0\u4e3a\u57282dx\u7684",(0,s.jsx)(n.code,{children:"Label"}),"\u91cc",(0,s.jsx)(n.code,{children:"\\n"}),"\u5c31\u662f\u8868\u793a\u6362\u884c"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["std::string\u8f6c\u4e3aPlatform::String\u7684\u65f6\u5019\u5c06",(0,s.jsx)(n.code,{children:"\\n"}),"\u66ff\u6362\u4e3a",(0,s.jsx)(n.code,{children:"\\r\\n"}),",\u8ba9\u7cfb\u7edf\u63a7\u4ef6\u8bc6\u522b\u6362\u884c"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'static std::string&   replace_all_distinct(std::string&   str, const   std::string&   old_value, const  std::string&   new_value)\n{\n\tfor (std::string::size_type pos(0); pos != std::string::npos; pos += new_value.length())   {\n\t\tif ((pos = str.find(old_value, pos)) != std::string::npos)\n\t\t\tstr.replace(pos, old_value.length(), new_value);\n\t\telse   break;\n\t}\n\treturn   str;\n}\n\nPlatform::String^ UITextViewImplWinrt::stringToPlatformString(std::string strSrc)\n{\n\tstd::string newSrc = replace_all_distinct(strSrc, "\\n", "\\r\\n");\n\t// to wide char\n\tint nStrLen = MultiByteToWideChar(CP_UTF8, 0, newSrc.c_str(), -1, NULL, 0);\n\twchar_t* pWStr = new wchar_t[nStrLen + 1];\n\tmemset(pWStr, 0, nStrLen + 1);\n\tMultiByteToWideChar(CP_UTF8, 0, newSrc.c_str(), -1, pWStr, nStrLen);\n\tPlatform::String^ strDst = ref new Platform::String(pWStr);\n\tdelete[] pWStr;\n\treturn strDst;\n}\n\nstd::string UITextViewImplWinrt::PlatformStringTostring(Platform::String^ strSrc)\n{\n\tconst wchar_t* pWStr = strSrc->Data();\n\tint nStrLen = WideCharToMultiByte(CP_UTF8, 0, pWStr, -1, NULL, 0, NULL, NULL);\n\tchar* pStr = new char[nStrLen + 1];\n\tmemset(pStr, 0, nStrLen + 1);\n\tWideCharToMultiByte(CP_UTF8, 0, pWStr, -1, pStr, nStrLen, NULL, NULL);;\n\n\tstd::string strDst = std::string(pStr);\n\n\tdelete[] pStr;\n\tstd::string ret = replace_all_distinct(strDst, "\\r\\n", "\\n");\n\treturn ret;\n}\n'})})]})}function a(t={}){const{wrapper:n}={...(0,o.R)(),...t.components};return n?(0,s.jsx)(n,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},5703:t=>{t.exports=JSON.parse('{"permalink":"/2016/multiline-textbox-wp8-1","source":"@site/blog/2016/multiline-textbox-wp8-1.md","title":"WindowsPhone\u7684TextBox\u591a\u884c\u652f\u6301\u53ca\u7591\u95ee","description":"\u6700\u8fd1\u5728\u4f7f\u75282dx\u7684\u65f6\u5019\u6539\u9020\u4e86\u4e00\u4e2aUIEditBox,\u4f7f\u5176\u652f\u6301\u591a\u884c\u8f93\u5165,\u56e0\u4e3a\u5728Windows Phone\u4e0a\u5355\u884c\u548c\u591a\u884c\u8f93\u5165\u90fd\u662f\u4f7f\u7528\u540c\u4e00\u4e2a\u7cfb\u7edf\u63a7\u4ef6TextBox,\u5173\u4e8e\u5982\u4f55\u4f7f\u7528\u591a\u884c\u8f93\u5165,\u53ef\u4ee5\u53c2\u8003\u5fae\u8f6f\u7684\u6587\u6863","date":"2016-07-20T14:57:34.000Z","tags":[{"inline":true,"label":"Cocos2dx","permalink":"/tags/cocos-2-dx"},{"inline":true,"label":"Windows Phone","permalink":"/tags/windows-phone"}],"readingTime":2.78,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"WindowsPhone\u7684TextBox\u591a\u884c\u652f\u6301\u53ca\u7591\u95ee","date":"2016-07-20T14:57:34.000Z","tags":["Cocos2dx","Windows Phone"]},"unlisted":false,"prevItem":{"title":"\u7528Lua\u5b9e\u73b0A*\u5bfb\u8def\u7b97\u6cd5","permalink":"/2016/findWay"},"nextItem":{"title":"Cocos2dx\u4f7f\u7528ETC1+Alpha\u538b\u7f29\u7eb9\u7406","permalink":"/2016/etc1-alpha-on-android-cocos2dx"}}')},8453:(t,n,e)=>{e.d(n,{R:()=>i,x:()=>c});var r=e(6540);const s={},o=r.createContext(s);function i(t){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),r.createElement(o.Provider,{value:n},t.children)}}}]);