"use strict";(self.webpackChunkdannyjiajia_github_io=self.webpackChunkdannyjiajia_github_io||[]).push([[2784],{950:(e,t,r)=>{r.d(t,{A:()=>l});r(6540);var a=r(4164);const n={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var s=r(4848);function l(e){let{children:t,minHeight:r,url:l="http://localhost:3000",style:o,bodyStyle:i}=e;return(0,s.jsxs)("div",{className:n.browserWindow,style:{...o,minHeight:r},children:[(0,s.jsxs)("div",{className:n.browserWindowHeader,children:[(0,s.jsxs)("div",{className:n.buttons,children:[(0,s.jsx)("span",{className:n.dot,style:{background:"#f25f58"}}),(0,s.jsx)("span",{className:n.dot,style:{background:"#fbbe3c"}}),(0,s.jsx)("span",{className:n.dot,style:{background:"#58cb42"}})]}),(0,s.jsx)("div",{className:(0,a.A)(n.browserWindowAddressBar,"text--truncate"),children:l}),(0,s.jsx)("div",{className:n.browserWindowMenuIcon,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:n.bar}),(0,s.jsx)("span",{className:n.bar}),(0,s.jsx)("span",{className:n.bar})]})})]}),(0,s.jsx)("div",{className:n.browserWindowBody,style:i,children:t})]})}},1666:e=>{e.exports=JSON.parse('{"permalink":"/2025/03/05/deepseek-r1-distill-function-call-fine-tune","source":"@site/blog/2025/03-05-deepseek-r1-distill-function-call-fine-tune.mdx","title":"\u5fae\u8c03deepseek-r1\u84b8\u998f\u7248\u5de5\u5177\u8c03\u7528","description":"\u6709\u5173deepseek-r1\u84b8\u998f\u7248\u7684\u5fae\u8c03\u65b9\u6848\uff0c\u76ee\u524d\u4e3b\u6d41\u5728\u7528``\u7684\u5f62\u5f0f\u7ec4\u7ec7\u76f8\u5173\u8bed\u6599\u6837\u672c\uff0c\u76ee\u524d\u8fd8\u672a\u6d89\u53ca\u5230\u5de5\u5177\u8c03\u7528(Function-Call)\u7684\u5f62\u5f0f\uff0c","date":"2025-03-05T00:00:00.000Z","tags":[{"inline":true,"label":"deepseek","permalink":"/tags/deepseek"},{"inline":true,"label":"nlp","permalink":"/tags/nlp"},{"inline":true,"label":"llm","permalink":"/tags/llm"}],"readingTime":5.305,"hasTruncateMarker":true,"authors":[{"name":"Danny He","title":"Developer in ChengDu,China","url":"https://dannyjiajia.github.io/","socials":{"github":"https://github.com/dannyjiajia"},"imageURL":"https://avatars.githubusercontent.com/u/2572540","key":"dannyhe","page":null}],"frontMatter":{"title":"\u5fae\u8c03deepseek-r1\u84b8\u998f\u7248\u5de5\u5177\u8c03\u7528","authors":"dannyhe","tags":["deepseek","nlp","llm"]},"unlisted":false,"prevItem":{"title":"Transformer \u7f51\u7edc\u53ca\u4efb\u52a1\u5206\u7c7b","permalink":"/2025/03/12/transformer-task"},"nextItem":{"title":"\u591a\u4e2adocker-compose\u914d\u7f6e\u7684\u7ba1\u7406\u601d\u8def","permalink":"/2025/02/27/docker-compose-files"}}')},5537:(e,t,r)=>{r.d(t,{A:()=>j});var a=r(6540),n=r(4164),s=r(5627),l=r(6347),o=r(372),i=r(604),u=r(1861),c=r(8749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,d]=p({queryString:r,groupId:n}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),g=(()=>{const e=u??m;return b({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=r(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function w(e){let{className:t,block:r,selectedValue:a,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),n=o[r].value;n!==a&&(u(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...s,className:(0,n.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function k(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,v.jsx)(w,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function j(e){const t=(0,f.A)();return(0,v.jsx)(k,{...e,children:d(e.children)},String(t))}},5606:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var a=r(1666),n=r(4848),s=r(8453);r(950),r(8069),r(5537),r(9329);const l={title:"\u5fae\u8c03deepseek-r1\u84b8\u998f\u7248\u5de5\u5177\u8c03\u7528",authors:"dannyhe",tags:["deepseek","nlp","llm"]},o=void 0,i={authorsImageUrls:[void 0]},u=[];function c(e){const t={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(t.p,{children:["\u6709\u5173deepseek-r1\u84b8\u998f\u7248\u7684\u5fae\u8c03\u65b9\u6848\uff0c\u76ee\u524d\u4e3b\u6d41\u5728\u7528",(0,n.jsx)(t.code,{children:"<think></think>"}),"\u7684\u5f62\u5f0f\u7ec4\u7ec7\u76f8\u5173\u8bed\u6599\u6837\u672c\uff0c\u76ee\u524d\u8fd8\u672a\u6d89\u53ca\u5230\u5de5\u5177\u8c03\u7528(Function-Call)\u7684\u5f62\u5f0f\uff0c\n\u521a\u597d\u540c\u4e8b\u9700\u8981\u57fa\u4e8e",(0,n.jsx)(t.a,{href:"https://github.com/hiyouga/LLaMA-Factory",children:"LLaMA-Factory"}),"\u6784\u5efa\u601d\u7ef4\u94fe\u7684\u5de5\u5177\u8c03\u7528\u8bed\u6599\uff0c\u4e8e\u662f\u6211\u987a\u4fbf\u8865\u5145\u4e86\u4e00\u4e0bLLaMA-Factory\u5173\u4e8e",(0,n.jsx)(t.code,{children:"chat template"}),"\u7684\u5355\u5143\u6d4b\u8bd5\uff0c\u4ee5\u63a8\u5bfc\u51faLLaMA-Factory\u4e2d\u5173\u4e8e\u6837\u672c\u96c6\u5904\u7406\u4ee5\u53ca\u629b\u5f00",(0,n.jsx)(t.code,{children:"JSON"}),"\u683c\u5f0f\u7406\u89e3\u672c\u8d28",(0,n.jsx)(t.code,{children:"chat template"}),"\u3002\n\u601d\u7ef4\u4e0d\u8981\u56fa\u5316\u3002"]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},9329:(e,t,r)=>{r.d(t,{A:()=>l});r(6540);var a=r(4164);const n={tabItem:"tabItem_Ymn6"};var s=r(4848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,l),hidden:r,children:t})}}}]);