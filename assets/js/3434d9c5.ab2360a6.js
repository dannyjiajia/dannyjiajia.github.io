"use strict";(self.webpackChunkdannyjiajia_github_io=self.webpackChunkdannyjiajia_github_io||[]).push([[8706],{950:(e,s,n)=>{n.d(s,{A:()=>d});n(6540);var r=n(4164);const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var c=n(4848);function d(e){let{children:s,minHeight:n,url:d="http://localhost:3000",style:t,bodyStyle:a}=e;return(0,c.jsxs)("div",{className:o.browserWindow,style:{...t,minHeight:n},children:[(0,c.jsxs)("div",{className:o.browserWindowHeader,children:[(0,c.jsxs)("div",{className:o.buttons,children:[(0,c.jsx)("span",{className:o.dot,style:{background:"#f25f58"}}),(0,c.jsx)("span",{className:o.dot,style:{background:"#fbbe3c"}}),(0,c.jsx)("span",{className:o.dot,style:{background:"#58cb42"}})]}),(0,c.jsx)("div",{className:(0,r.A)(o.browserWindowAddressBar,"text--truncate"),children:d}),(0,c.jsx)("div",{className:o.browserWindowMenuIcon,children:(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{className:o.bar}),(0,c.jsx)("span",{className:o.bar}),(0,c.jsx)("span",{className:o.bar})]})})]}),(0,c.jsx)("div",{className:o.browserWindowBody,style:a,children:s})]})}},1944:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var r=n(6659),o=n(4848),c=n(8453),d=n(950);n(8069),n(4911),n(9329);const t={title:"\u591a\u4e2adocker-compose\u914d\u7f6e\u7684\u7ba1\u7406\u601d\u8def",authors:"dannyhe"},a=void 0,i={authorsImageUrls:[void 0]},l=[];function p(e){const s={a:"a",code:"code",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:["\u670d\u52a1\u4e0a\u7ecf\u5e38\u90e8\u7f72\u591a\u4e2adocker-compose\u914d\u7f6e\u6587\u4ef6\u7684\u9879\u76ee,\u6bd4\u5982\u7b97\u6cd5\u670d\u52a1\u5668\u540c\u4e8b\u90e8\u7f72\u4e86",(0,o.jsx)(s.code,{children:"ragflow"}),"\u3001",(0,o.jsx)(s.code,{children:"vllm"}),"\u3001",(0,o.jsx)(s.code,{children:"whisper"}),"\u7b49\u9879\u76ee,\u7ecf\u5e38\u9700\u8981\u91cd\u542f\u6216\u5173\u95ed,\u7b97\u529b\u6709\u9650:(\n\u8fd9\u91cc\u63d0\u4f9b\u4e00\u4e2a\u7ba1\u7406\u591a\u4e2adocker-compose\u914d\u7f6e\u6587\u4ef6\u7684\u601d\u8def."]}),"\n",(0,o.jsxs)(s.p,{children:["\u6574\u4f53\u4f7f\u7528",(0,o.jsx)(s.code,{children:"yaml"})," + ",(0,o.jsx)(s.a,{href:"https://taskfile.dev",children:(0,o.jsx)(s.code,{children:"task"})})," + ",(0,o.jsx)(s.a,{href:"https://github.com/mikefarah/yq",children:(0,o.jsx)(s.code,{children:"yq"})}),"\u7684\u65b9\u5f0f\u7ba1\u7406\u670d\u52a1,\n\u9996\u5148\u9700\u8981\u5c06\u591a\u4e2adocker-compose\u7684\u914d\u7f6e\u6587\u4ef6\u7ba1\u7406\u8d77\u6765\uff0c\u7136\u540e\u901a\u8fc7\u7f16\u5199task\u7684\u914d\u7f6e\u6587\u4ef6\u5c06\u4e0d\u540c\u7684docker-compose\u914d\u7f6e\u6587\u4ef6\u6ce8\u5165\u5230\u547d\u4ee4\u4e2d\u3002"]}),"\n",(0,o.jsx)(d.A,{children:(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-yml",metastring:'title="docker-compose.servers.yml"',children:"projects:\n  one-api:\n    path: /home/one-api/docker-compose.yml\n  apisix:\n    path: /home/new/apisix/docker-compose.yml\n"})})}),"\n",(0,o.jsx)(d.A,{children:(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-yml",metastring:'title="Taskfile.yml"',children:'version: \'3\'\n\nvars:\n  COMPOSE_LIST:\n    sh: yq e \'.projects | keys\' docker-compose.servers.yml\n\ntasks:\n  status:\n    silent: true\n    desc: \u663e\u793a\u6240\u6709\u9879\u76ee\u72b6\u6001\n    cmds:\n      - for: { var: COMPOSE_LIST }\n        cmd: |\n          if [ "-" != "{{ .ITEM }}" ]; then\n            docker-compose -f `yq e ".projects.{{.ITEM}}.path" docker-compose.servers.yml` ps\n          fi \n  default:\n    silent: true\n    desc: \u5217\u51fa\u6240\u6709\u53ef\u7528\u7684\u9879\u76ee\n    cmds:\n      - for: { var: COMPOSE_LIST }\n        cmd: |\n          if [ "-" != "{{ .ITEM }}" ]; then\n            echo {{ .ITEM }}\n          fi \n    \n  up-*:\n    desc: \u542f\u52a8\u6307\u5b9a\u9879\u76ee\n    deps: \n      - task: check-project\n        vars:\n          PROJECT: \n            ref: .PROJECT\n    vars:\n      PROJECT: \'{{index .MATCH 0}}\'\n      COMPOSE_PATH:\n          sh: yq e ".projects.{{.PROJECT}}.path" docker-compose.servers.yml\n    cmds:\n      - docker-compose -f {{.COMPOSE_PATH}} up -d {{.CLI_ARGS}}\n\n  down-*:\n    desc: \u505c\u6b62\u6307\u5b9a\u9879\u76ee\n    deps: \n      - task: check-project\n        vars:\n          PROJECT: \n            ref: .PROJECT\n    vars:\n      PROJECT: \'{{index .MATCH 0}}\'\n      COMPOSE_PATH:\n          sh: yq e ".projects.{{.PROJECT}}.path" docker-compose.servers.yml\n    cmds:\n      - docker-compose -f {{.COMPOSE_PATH}} down {{.CLI_ARGS}}\n\n  ps-*:\n    desc: \u67e5\u770b\u9879\u76ee\u72b6\u6001\n    deps: \n      - task: check-project\n        vars:\n          PROJECT: \n            ref: .PROJECT\n    vars:\n      PROJECT: \'{{index .MATCH 0}}\'\n      COMPOSE_PATH:\n          sh: yq e ".projects.{{.PROJECT}}.path" docker-compose.servers.yml\n    cmds:\n      - docker-compose -f {{.COMPOSE_PATH}} ps\n      \n\n  logs-*:\n    desc: \u67e5\u770b\u6307\u5b9a\u9879\u76ee\u65e5\u5fd7\n    deps: \n      - task: check-project\n        vars:\n          PROJECT: \n            ref: .PROJECT\n    vars:\n      PROJECT: \'{{index .MATCH 0}}\'\n      COMPOSE_PATH:\n          sh: yq e ".projects.{{.PROJECT}}.path" docker-compose.servers.yml\n    cmds:\n      - docker-compose -f {{.COMPOSE_PATH}} logs {{.CLI_ARGS}}\n\n  check-project:\n    internal: true\n    preconditions:\n      - sh: test -n "{{.PROJECT}}"\n        msg: "\u8bf7\u6307\u5b9a\u9879\u76ee\u540d\u79f0"\n      - sh: yq e ".projects.{{.PROJECT}}" docker-compose.servers.yml | grep -q "^path:"\n        msg: "\u9879\u76ee {{.PROJECT}} \u4e0d\u5b58\u5728"\n'})})})]})}function h(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},4911:(e,s,n)=>{n(6540),n(9136);n(4848)},6659:e=>{e.exports=JSON.parse('{"permalink":"/2025/02/27/docker-compose-files","source":"@site/blog/2025/02-27-docker-compose-files.mdx","title":"\u591a\u4e2adocker-compose\u914d\u7f6e\u7684\u7ba1\u7406\u601d\u8def","description":"\u670d\u52a1\u4e0a\u7ecf\u5e38\u90e8\u7f72\u591a\u4e2adocker-compose\u914d\u7f6e\u6587\u4ef6\u7684\u9879\u76ee,\u6bd4\u5982\u7b97\u6cd5\u670d\u52a1\u5668\u540c\u4e8b\u90e8\u7f72\u4e86ragflow\u3001vllm\u3001whisper\u7b49\u9879\u76ee,\u7ecf\u5e38\u9700\u8981\u91cd\u542f\u6216\u5173\u95ed,\u7b97\u529b\u6709\u9650:(","date":"2025-02-27T00:00:00.000Z","tags":[],"readingTime":2.125,"hasTruncateMarker":true,"authors":[{"name":"Danny He","title":"Developer in China","url":"https://dannyjiajia.github.io/","socials":{"github":"https://github.com/dannyjiajia"},"imageURL":"https://avatars.githubusercontent.com/u/2572540","key":"dannyhe","page":null}],"frontMatter":{"title":"\u591a\u4e2adocker-compose\u914d\u7f6e\u7684\u7ba1\u7406\u601d\u8def","authors":"dannyhe"},"unlisted":false,"nextItem":{"title":"docker\u901a\u8fc7\u4ee3\u7406pull\u955c\u50cf","permalink":"/2025/02/22/docker-proxy-pull"}}')},9329:(e,s,n)=>{n(6540);n(4848)}}]);