"use strict";(self.webpackChunkdannyjiajia_github_io=self.webpackChunkdannyjiajia_github_io||[]).push([[9164],{950:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var a=n(4164);const r={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var o=n(4848);function s(e){let{children:t,minHeight:n,url:s="http://localhost:3000",style:i,bodyStyle:l}=e;return(0,o.jsxs)("div",{className:r.browserWindow,style:{...i,minHeight:n},children:[(0,o.jsxs)("div",{className:r.browserWindowHeader,children:[(0,o.jsxs)("div",{className:r.buttons,children:[(0,o.jsx)("span",{className:r.dot,style:{background:"#f25f58"}}),(0,o.jsx)("span",{className:r.dot,style:{background:"#fbbe3c"}}),(0,o.jsx)("span",{className:r.dot,style:{background:"#58cb42"}})]}),(0,o.jsx)("div",{className:(0,a.A)(r.browserWindowAddressBar,"text--truncate"),children:s}),(0,o.jsx)("div",{className:r.browserWindowMenuIcon,children:(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:r.bar}),(0,o.jsx)("span",{className:r.bar}),(0,o.jsx)("span",{className:r.bar})]})})]}),(0,o.jsx)("div",{className:r.browserWindowBody,style:l,children:t})]})}},1666:e=>{e.exports=JSON.parse('{"permalink":"/2025/03/05/deepseek-r1-distill-function-call-fine-tune","source":"@site/blog/2025/03-05-deepseek-r1-distill-function-call-fine-tune.mdx","title":"\u5fae\u8c03deepseek-r1\u84b8\u998f\u7248\u5de5\u5177\u8c03\u7528","description":"\u6709\u5173deepseek-r1\u84b8\u998f\u7248\u7684\u5fae\u8c03\u65b9\u6848\uff0c\u76ee\u524d\u4e3b\u6d41\u5728\u7528``\u7684\u5f62\u5f0f\u7ec4\u7ec7\u76f8\u5173\u8bed\u6599\u6837\u672c\uff0c\u76ee\u524d\u8fd8\u672a\u6d89\u53ca\u5230\u5de5\u5177\u8c03\u7528(Function-Call)\u7684\u5f62\u5f0f\uff0c","date":"2025-03-05T00:00:00.000Z","tags":[{"inline":true,"label":"deepseek","permalink":"/tags/deepseek"},{"inline":true,"label":"nlp","permalink":"/tags/nlp"},{"inline":true,"label":"llm","permalink":"/tags/llm"}],"readingTime":5.305,"hasTruncateMarker":true,"authors":[{"name":"Danny He","title":"Developer in ChengDu,China","url":"https://dannyjiajia.github.io/","socials":{"github":"https://github.com/dannyjiajia"},"imageURL":"https://avatars.githubusercontent.com/u/2572540","key":"dannyhe","page":null}],"frontMatter":{"title":"\u5fae\u8c03deepseek-r1\u84b8\u998f\u7248\u5de5\u5177\u8c03\u7528","authors":"dannyhe","tags":["deepseek","nlp","llm"]},"unlisted":false,"prevItem":{"title":"Transformer \u7f51\u7edc\u53ca\u4efb\u52a1\u5206\u7c7b","permalink":"/2025/03/12/transformer-task"},"nextItem":{"title":"\u591a\u4e2adocker-compose\u914d\u7f6e\u7684\u7ba1\u7406\u601d\u8def","permalink":"/2025/02/27/docker-compose-files"}}')},5537:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(6540),r=n(4164),o=n(5627),s=n(6347),i=n(372),l=n(604),c=n(1861),u=n(8749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,d]=m({queryString:n,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),k=(()=>{const e=c??f;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{k&&l(k)}),[k]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=n(9136);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function _(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...o,className:(0,r.A)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function v(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",k.tabList),children:[(0,b.jsx)(_,{...t,...e}),(0,b.jsx)(y,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,b.jsx)(v,{...e,children:d(e.children)},String(t))}},8818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var a=n(1666),r=n(4848),o=n(8453),s=n(950),i=(n(8069),n(5537)),l=n(9329);const c={title:"\u5fae\u8c03deepseek-r1\u84b8\u998f\u7248\u5de5\u5177\u8c03\u7528",authors:"dannyhe",tags:["deepseek","nlp","llm"]},u=void 0,d={authorsImageUrls:[void 0]},p=[];function h(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["\u6709\u5173deepseek-r1\u84b8\u998f\u7248\u7684\u5fae\u8c03\u65b9\u6848\uff0c\u76ee\u524d\u4e3b\u6d41\u5728\u7528",(0,r.jsx)(t.code,{children:"<think></think>"}),"\u7684\u5f62\u5f0f\u7ec4\u7ec7\u76f8\u5173\u8bed\u6599\u6837\u672c\uff0c\u76ee\u524d\u8fd8\u672a\u6d89\u53ca\u5230\u5de5\u5177\u8c03\u7528(Function-Call)\u7684\u5f62\u5f0f\uff0c\n\u521a\u597d\u540c\u4e8b\u9700\u8981\u57fa\u4e8e",(0,r.jsx)(t.a,{href:"https://github.com/hiyouga/LLaMA-Factory",children:"LLaMA-Factory"}),"\u6784\u5efa\u601d\u7ef4\u94fe\u7684\u5de5\u5177\u8c03\u7528\u8bed\u6599\uff0c\u4e8e\u662f\u6211\u987a\u4fbf\u8865\u5145\u4e86\u4e00\u4e0bLLaMA-Factory\u5173\u4e8e",(0,r.jsx)(t.code,{children:"chat template"}),"\u7684\u5355\u5143\u6d4b\u8bd5\uff0c\u4ee5\u63a8\u5bfc\u51faLLaMA-Factory\u4e2d\u5173\u4e8e\u6837\u672c\u96c6\u5904\u7406\u4ee5\u53ca\u629b\u5f00",(0,r.jsx)(t.code,{children:"JSON"}),"\u683c\u5f0f\u7406\u89e3\u672c\u8d28",(0,r.jsx)(t.code,{children:"chat template"}),"\u3002\n\u601d\u7ef4\u4e0d\u8981\u56fa\u5316\u3002"]}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsxs)(i.A,{children:[(0,r.jsx)(l.A,{value:"json",label:"tools_dr1.json",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:"[\n    {\n        \"conversations\": [\n          {\n            \"value\": \"Hi, can you tell me the current stock price of Apple?\",\n            \"from\": \"human\"\n        },\n        {\n            \"value\": \"<think>Alright, the user asked for the current stock price of Apple. Looking at the tools available, there's a function called get_stock_price which exactly fits this request. I'll need to call this function with the parameter company set to 'Apple' to retrieve the information the user is asking for. This seems like the most straightforward and appropriate action to take.\\n</think><tool_call>\\n{'name': 'get_stock_price', 'arguments': {'company': 'Apple'}}\\n</tool_call>\",\n            \"from\": \"gpt\"\n        },\n        {\n            \"value\": \"<tool_response>\\n{'stock_price': '$150.75'}\\n</tool_response>\",\n            \"from\": \"human\"\n        },\n        {\n            \"value\": \"The current stock price of Apple is $150.75.\",\n            \"from\": \"gpt\"\n        },\n        {\n            \"value\": \"That's great. Can you also tell me the stock price for Microsoft?\",\n            \"from\": \"human\"\n        },\n        {\n            \"value\": \"<think>Alright, let me try to figure out how to handle this user's request. The user first asked about Apple's stock price, and I responded by calling the get_stock_price function with 'Apple' as the argument. The tool provided the price, and I passed that information back to the user.\\n\\nNow, the user is asking for the stock price of Microsoft. I need to determine the appropriate action here. Looking at the tools available, there's still the get_stock_price function, which is designed to fetch current stock prices. Since the user is requesting another company's stock price, it makes sense to use the same function again but with the company name changed to Microsoft. \\n\\nI shouldn't assume any other tools are needed because the available functions are specifically tailored for stock prices and movie details. In this case, the relevant function is get_stock_price. I should ensure that the function is called with the correct parameter, 'Microsoft' in this case, to retrieve the accurate information the user is seeking. This approach is efficient and aligns directly with the user's request without making unnecessary assumptions or using unrelated tools.\\n</think><tool_call>\\n{'name': 'get_stock_price', 'arguments': {'company': 'Microsoft'}}\\n</tool_call>\",\n            \"from\": \"gpt\"\n        },\n        {\n            \"value\": \"<tool_response>\\n{'stock_price': '$210.22'}\\n</tool_response>\",\n            \"from\": \"human\"\n        },\n        {\n            \"value\": \"The current stock price of Microsoft is $210.22.\",\n            \"from\": \"gpt\"\n        },\n        {\n            \"value\": \"Thank you for the information.\",\n            \"from\": \"human\"\n        },\n        {\n            \"value\": \"You're welcome! If you have any other questions, feel free to ask.\",\n            \"from\": \"gpt\"\n        }\n        ],\n        \"system\": \"You are a function calling AI model. You are provided with function signatures within <tools></tools> XML tags.You may call one or more functions to assist with the user query. Don't make assumptions about what values to plug into functions.Here are the available tools:<tools> [{'type': 'function', 'function': {'name': 'get_stock_price', 'description': 'Get the current stock price of a company', 'parameters': {'type': 'object', 'properties': {'company': {'type': 'string', 'description': 'The name of the company'}}, 'required': ['company']}}}, {'type': 'function', 'function': {'name': 'get_movie_details', 'description': 'Get details about a movie', 'parameters': {'type': 'object', 'properties': {'title': {'type': 'string', 'description': 'The title of the movie'}}, 'required': ['title']}}}] </tools>Use the following pydantic model json schema for each tool call you will make: {'title': 'FunctionCall', 'type': 'object', 'properties': {'arguments': {'title': 'Arguments', 'type': 'object'}, 'name': {'title': 'Name', 'type': 'string'}}, 'required': ['arguments', 'name']}For each function call return a json object with function name and arguments within <tool_call></tool_call> XML tags as follows:\\n<tool_call>\\n{tool_call}\\n</tool_call>\",\n      }\n]\n"})})}),(0,r.jsx)(l.A,{value:"python",label:"test_dataset.py",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import os\nfrom typing import TYPE_CHECKING, Sequence\n\nimport pytest\nDEEPSEEK_DISTILL_QWEN_MODEL = os.getenv(\"DEEPSEEK_DISTILL_QWEN_PATH\")\nfrom transformers import AutoTokenizer\n\nfrom llamafactory.data import get_template_and_fix_tokenizer\nfrom llamafactory.data.template import parse_template\nfrom llamafactory.hparams import DataArguments,ModelArguments,TrainingArguments\nfrom llamafactory.data.loader import get_dataset\n@pytest.mark.skipif(not DEEPSEEK_DISTILL_QWEN_MODEL, reason=\"Gated model.\")\ndef test_tools_deepseek3_without_function_call() -> None:\n    tokenizer = AutoTokenizer.from_pretrained(DEEPSEEK_DISTILL_QWEN_MODEL)\n    template = get_template_and_fix_tokenizer(tokenizer, DataArguments(template=\"deepseek3\"))\n    dataset_module = get_dataset(template, ModelArguments(model_name_or_path=DEEPSEEK_DISTILL_QWEN_MODEL), \n                                 DataArguments(template=\"deepseek3\",dataset=\"tool_zh_dr1\"), \n                                 TrainingArguments(), stage=\"sft\", tokenizer=tokenizer)\n    assert 'train_dataset' in dataset_module\n    dataset = dataset_module['train_dataset']\n    assert len(dataset) == 1\n    expect_input = \"\"\"<\uff5cbegin\u2581of\u2581sentence\uff5c><\uff5cUser\uff5c>Hi, can you tell me the current stock price of Apple?<\uff5cAssistant\uff5c><think>Alright, the user asked for the current stock price of Apple. Looking at the tools available, there's a function called get_stock_price which exactly fits this request. I'll need to call this function with the parameter company set to 'Apple' to retrieve the information the user is asking for. This seems like the most straightforward and appropriate action to take.\n</think><tool_call>\n{'name': 'get_stock_price', 'arguments': {'company': 'Apple'}}\n</tool_call><\uff5cend\u2581of\u2581sentence\uff5c><\uff5cUser\uff5c><tool_response>\n{'stock_price': '$150.75'}\n</tool_response><\uff5cAssistant\uff5c>The current stock price of Apple is $150.75.<\uff5cend\u2581of\u2581sentence\uff5c><\uff5cUser\uff5c>That's great. Can you also tell me the stock price for Microsoft?<\uff5cAssistant\uff5c><think>Alright, let me try to figure out how to handle this user's request. The user first asked about Apple's stock price, and I responded by calling the get_stock_price function with 'Apple' as the argument. The tool provided the price, and I passed that information back to the user.\n\nNow, the user is asking for the stock price of Microsoft. I need to determine the appropriate action here. Looking at the tools available, there's still the get_stock_price function, which is designed to fetch current stock prices. Since the user is requesting another company's stock price, it makes sense to use the same function again but with the company name changed to Microsoft. \n\nI shouldn't assume any other tools are needed because the available functions are specifically tailored for stock prices and movie details. In this case, the relevant function is get_stock_price. I should ensure that the function is called with the correct parameter, 'Microsoft' in this case, to retrieve the accurate information the user is seeking. This approach is efficient and aligns directly with the user's request without making unnecessary assumptions or using unrelated tools.\n</think><tool_call>\n{'name': 'get_stock_price', 'arguments': {'company': 'Microsoft'}}\n</tool_call><\uff5cend\u2581of\u2581sentence\uff5c><\uff5cUser\uff5c><tool_response>\n{'stock_price': '$210.22'}\n</tool_response><\uff5cAssistant\uff5c>The current stock price of Microsoft is $210.22.<\uff5cend\u2581of\u2581sentence\uff5c><\uff5cUser\uff5c>Thank you for the information.<\uff5cAssistant\uff5c>You're welcome! If you have any other questions, feel free to ask.<\uff5cend\u2581of\u2581sentence\uff5c>\"\"\"\n    input = tokenizer.decode(dataset[0]['input_ids'], skip_special_tokens=False)\n    assert expect_input == input\n"})})})]})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var o=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}}}]);