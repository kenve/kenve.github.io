"use strict";(self.webpackChunkkenve_github_io=self.webpackChunkkenve_github_io||[]).push([[3827],{5664:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>t,metadata:()=>p,toc:()=>o});var r=s(5893),i=s(1151);const t={slug:"build-npm-private-service",title:"\u4f7f\u7528 Nexus Repository Manager OSS \u642d\u5efa NPM \u79c1\u670d",tags:["npm","nexus"]},l=void 0,p={permalink:"/build-npm-private-service",source:"@site/blog/2018-04-15-build-npm-private-service.md",title:"\u4f7f\u7528 Nexus Repository Manager OSS \u642d\u5efa NPM \u79c1\u670d",description:"\u5e38\u7528\u7684\u51e0\u79cd\u642d\u5efa\u65b9\u5f0f",date:"2018-04-15T00:00:00.000Z",formattedDate:"2018\u5e744\u670815\u65e5",tags:[{label:"npm",permalink:"/tags/npm"},{label:"nexus",permalink:"/tags/nexus"}],readingTime:3.83,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"build-npm-private-service",title:"\u4f7f\u7528 Nexus Repository Manager OSS \u642d\u5efa NPM \u79c1\u670d",tags:["npm","nexus"]},unlisted:!1,prevItem:{title:"\u5199\u4e00\u4e2a Webpack \u7684\u63d2\u4ef6",permalink:"/write-a-webpack-plugin"},nextItem:{title:"\u6027\u80fd\u4f18\u5316\u4e4b\u4f7f\u7528\u539f\u751f API",permalink:"/optimization-use-native-api"}},a={authorsImageUrls:[]},o=[{value:"\u5e38\u7528\u7684\u51e0\u79cd\u642d\u5efa\u65b9\u5f0f",id:"\u5e38\u7528\u7684\u51e0\u79cd\u642d\u5efa\u65b9\u5f0f",level:2},{value:"\u65b9\u5f0f\u9009\u62e9",id:"\u65b9\u5f0f\u9009\u62e9",level:2},{value:"\u5728 Nexus Repository Manager(v2)\u4e2d\u642d\u5efa NPM \u79c1\u670d",id:"\u5728-nexus-repository-managerv2\u4e2d\u642d\u5efa-npm-\u79c1\u670d",level:2},{value:"\u642d\u5efa",id:"\u642d\u5efa",level:3},{value:"\u767b\u5f55",id:"\u767b\u5f55",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"Proxying npm Registries\uff08\u4ee3\u7406\uff09",id:"proxying-npm-registries\u4ee3\u7406",level:4},{value:"Private npm Registries\uff08\u79c1\u6709\uff09",id:"private-npm-registries\u79c1\u6709",level:4},{value:"Grouping npm Registries\uff08\u7ec4\uff09",id:"grouping-npm-registries\u7ec4",level:4},{value:"Configuring npm",id:"configuring-npm",level:4},{value:"Publishing npm Packages(\u53d1\u5e03\u672c\u5730\u5305\u6a21\u5757\u5230 npm \u79c1\u670d)",id:"publishing-npm-packages\u53d1\u5e03\u672c\u5730\u5305\u6a21\u5757\u5230-npm-\u79c1\u670d",level:4},{value:"\u6d4b\u8bd5\u4e0b\u8f7d\u5730\u5740\u662f\u5426\u4e3a\u914d\u7f6e\u7684\u6ce8\u518c\u5730\u5740",id:"\u6d4b\u8bd5\u4e0b\u8f7d\u5730\u5740\u662f\u5426\u4e3a\u914d\u7f6e\u7684\u6ce8\u518c\u5730\u5740",level:4},{value:"\u5751",id:"\u5751",level:2},{value:"\u8fc1\u79fb",id:"\u8fc1\u79fb",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u5e38\u7528\u7684\u51e0\u79cd\u642d\u5efa\u65b9\u5f0f",children:"\u5e38\u7528\u7684\u51e0\u79cd\u642d\u5efa\u65b9\u5f0f"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/rlidwka/sinopia",children:"sinopia"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/verdaccio/verdaccio",children:"verdaccio"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/cnpm/cnpmjs.org",children:"cnpm"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.sonatype.com/docs",children:"Nexus Repository Manager"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u65b9\u5f0f\u9009\u62e9",children:"\u65b9\u5f0f\u9009\u62e9"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u524d\u4e24\u79cd\u76f8\u5bf9\u6765\u8bf4\u642d\u5efa\u6b65\u9aa4\u6bd4\u8f83\u7b80\u5355\u5feb\u901f\uff0c\u540c\u65f6 verdaccio \u4f9d\u8d56\u4e86 sinopia \u6a21\u5757\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u540e\u4e24\u79cd\u76f8\u5bf9\u590d\u6742\uff0c\u9700\u8981\u4f9d\u8d56\u5176\u4ed6\u8f6f\u4ef6\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5efa\u8bae\u9009\u62e9\u524d\u4e24\u79cd\uff0c\u7531\u4e8e\u56e2\u961f\u4e4b\u524d\u6709\u642d\u5efa\u8fc7 Nexus Repository Manager\uff08v2\uff09\u4f5c\u4e3a Maven \u79c1\u670d\uff0c\u6240\u4ee5\u8fd9\u91cc\u9009\u62e9 Nexus Repository Manager\uff08v2\uff09\u8fd9\u79cd\u65b9\u5f0f\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5728-nexus-repository-managerv2\u4e2d\u642d\u5efa-npm-\u79c1\u670d",children:"\u5728 Nexus Repository Manager(v2)\u4e2d\u642d\u5efa NPM \u79c1\u670d"}),"\n",(0,r.jsx)(n.h3,{id:"\u642d\u5efa",children:"\u642d\u5efa"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528\u5b98\u65b9\u7684 Docker \u955c\u50cf ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/sonatype/nexus/",children:"sonatype/nexus"})," \u8fdb\u884c\u642d\u5efa\u3002\uff08\u7565\uff09"]}),"\n",(0,r.jsx)(n.h3,{id:"\u767b\u5f55",children:"\u767b\u5f55"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u670d\u52a1\u5668\u5730\u5740\uff1a",(0,r.jsx)(n.a,{href:"http://127.0.0.1:8081",children:"http://127.0.0.1:8081"}),"\uff0c\u8bf7\u628a\u5730\u5740\u6539\u4e3a\u4f60\u7684\u670d\u52a1\u5668\u5730\u5740\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u9ed8\u8ba4\u7528\u6237\u540d\uff1aadmin"}),"\n",(0,r.jsx)(n.li,{children:"\u9ed8\u8ba4\u5bc6\u7801\uff1aadmin123"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,r.jsx)(n.h4,{id:"proxying-npm-registries\u4ee3\u7406",children:"Proxying npm Registries\uff08\u4ee3\u7406\uff09"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6dfb\u52a0\u4e00\u4e2a Proxy Repository"}),"\n",(0,r.jsxs)(n.li,{children:["\u914d\u7f6e Repository ID\uff08\u4ed3\u5e93 ID\uff09\u3001Repository Name(\u4ed3\u5e93\u540d)\u3001Provider(\u63d0\u4f9b\u5546\u9009\u62e9 npm)\u3001Remote Storage Location(\u5916\u90e8\u4ee3\u7406\u6e90\u5730\u5740\uff1a\u5982\uff1a",(0,r.jsx)(n.a,{href:"https://registry.npmjs.org",children:"https://registry.npmjs.org"}),"\u3001",(0,r.jsx)(n.a,{href:"https://registry.npm.taobao.org",children:"https://registry.npm.taobao.org"}),")\u3001\u5176\u4ed6\u9ed8\u8ba4\u6216\u6839\u636e\u9700\u8981\u81ea\u884c\u8bbe\u7f6e\u5373\u53ef\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"\u914d\u7f6e\u4ee3\u7406",src:s(2386).Z+"",width:"742",height:"349"})}),"\n",(0,r.jsx)(n.h4,{id:"private-npm-registries\u79c1\u6709",children:"Private npm Registries\uff08\u79c1\u6709\uff09"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6dfb\u52a0\u4e00\u4e2a Hosted Repository"}),"\n",(0,r.jsx)(n.li,{children:"\u586b\u5199\u5e38\u7528\u7684\u914d\u7f6e Repository ID\uff08\u4ed3\u5e93 ID\uff09\u3001Repository Name(\u4ed3\u5e93\u540d)\u3001Provider(\u63d0\u4f9b\u5546\u9009\u62e9 npm)\u3001Deployment Policy \u7b49\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"hosts\u914d\u7f6e",src:s(3014).Z+"",width:"666",height:"384"})}),"\n",(0,r.jsx)(n.h4,{id:"grouping-npm-registries\u7ec4",children:"Grouping npm Registries\uff08\u7ec4\uff09"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u521b\u5efa Repository Group"}),"\n",(0,r.jsx)(n.li,{children:"\u586b\u5145\u914d\u7f6e Repository ID\uff08\u4ed3\u5e93 ID\uff09\u3001Repository Name(\u4ed3\u5e93\u540d)\u3001Provider(\u63d0\u4f9b\u5546\u9009\u62e9 npm)\u7b49"}),"\n",(0,r.jsx)(n.li,{children:"\u5408\u5e76\u4e24\u4e2a\u5e93\u524d\u9762\u521b\u5efa\u7684 proxy\u3001hosted \u5e93"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"group\u914d\u7f6e",src:s(1726).Z+"",width:"637",height:"388"})}),"\n",(0,r.jsx)(n.h4,{id:"configuring-npm",children:"Configuring npm"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u751f\u6210 ",(0,r.jsx)(n.code,{children:".npmrc"})," \u6587\u4ef6"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"#npm config set registry `group address`\nnpm config set registry http://127.0.0.1:8081/content/groups/npm-fe-group/\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u914d\u7f6e.npmrc \u6587\u4ef6"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# npm\u6ce8\u518c\u5730\u5740\uff0c\u4e0a\u9762\u8bbe\u7f6e\u7684\u79c1\u670d\u5730\u5740\nregistry=http://127.0.0.1:8081/content/groups/npm-fe-group/\n# an email is required to publish npm packages\nemail=yourname@gmail.com\n# \u6388\u6743\nalways-auth=true\n# \u9274\u6743\uff0c\u503c\u4e3a\u7528\u6237\u540d\uff1a\u5bc6\u7801\u7684base64\u7f16\u7801\uff0c\u5982\u4e0b\u4e3a`admin:admin123`\u7684base64\u7f16\u7801\u540e\u7684\u5b57\u7b26\u4e32\n_auth=YWRtaW46YWRtaW4xMjM=\n"})}),"\n",(0,r.jsx)(n.h4,{id:"publishing-npm-packages\u53d1\u5e03\u672c\u5730\u5305\u6a21\u5757\u5230-npm-\u79c1\u670d",children:"Publishing npm Packages(\u53d1\u5e03\u672c\u5730\u5305\u6a21\u5757\u5230 npm \u79c1\u670d)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u65b9\u5f0f\u4e00"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u590d\u5236\u751f\u6210\u7684hosted\u5730\u5740\uff0c\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u8fd0\u884c\u547d\u4ee4\uff08\u5fc5\u987b\u5b58\u5728package.json\u6587\u4ef6\uff09\nnpm publish --registry http://127.0.0.1:8081/content/repositories/fe-npm/\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u65b9\u5f0f\u4e8c(\u5728 package.json \u6587\u4ef6\u4e2d\uff0c\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e,\u7136\u540e\u6839\u76ee\u5f55\u4e0b\u8fd0\u884c ",(0,r.jsx)(n.code,{children:"npm publish"})," \u547d\u4ee4)"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"publishConfig" : {\n    "registry" : "http://127.0.0.1:8081/content/repositories/fe-npm/"\n  },\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u6d4b\u8bd5\u4e0b\u8f7d\u5730\u5740\u662f\u5426\u4e3a\u914d\u7f6e\u7684\u6ce8\u518c\u5730\u5740",children:"\u6d4b\u8bd5\u4e0b\u8f7d\u5730\u5740\u662f\u5426\u4e3a\u914d\u7f6e\u7684\u6ce8\u518c\u5730\u5740"}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d\u4e0b\u8f7d\u6a21\u5757\u7684\uff08fetch\uff09\u5730\u5740\u662f\u5426\u4e3a\u914d\u7f6e\u7684 registry \u5730\u5740\uff0c\u4e0b\u8f7d\u63d0\u4ea4\u79c1\u670d npm \u7684\u6a21\u5757\u662f\u5426\u6b63\u786e\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u5728.npmrc\u4e2d\u914d\u7f6e\u4e86registry\nnpm --loglevel info install moment\n# \u6ca1\u6709\u914d\u7f6e\uff0c\u9700\u6bcf\u6b21\u5e26\u4e0aregistry\u53c2\u6570\nnpm --loglevel info install moment --registry=http://127.0.0.1:8081/content/groups/npm-fe-group/\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5751",children:"\u5751"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u67d0\u4e9b\u7248\u672c\u4e0d\u80fd\u5b89\u88c5 ",(0,r.jsx)(n.code,{children:"@"})," \u5f00\u5934\u7684 npm \u5305"]}),"\n",(0,r.jsx)(n.li,{children:"\u67d0\u4e9b\u7248\u672c\u65e0\u6cd5\u4f7f\u7528\u6dd8\u5b9d\u6e90"}),"\n",(0,r.jsx)(n.li,{children:"\u67d0\u4e9b\u7248\u672c\u65e0\u6cd5\u5b89\u88c5\u67d0\u4e9b npm \u5305\uff0c\u6bd4\u5982\uff1arc-select"}),"\n",(0,r.jsx)(n.li,{children:"\u6709\u65f6\u95f4 npm \u4e0a\u5c0f\u65f6\u524d\u66f4\u65b0\u4e86\u7684\u5305\uff0c\u5728\u79c1\u670d\u627e\u4e0d\u5230\u3002\u53ef\u4ee5\u5728 proxy \u7684 Expiration setting \u4e2d\u8bbe\u7f6e Not Found Cache TTL \u7684\u65f6\u95f4 \u7f29\u77ed\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7ecf\u8fc7\u4f7f\u7528\u4e86\u5341\u51e0\u4e2a\u7248\u672c\u7684 ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/sonatype/nexus/",children:"Docker nexus \u955c\u50cf"})," \u8fdb\u884c\u6d4b\u8bd5\uff0c\u7ec8\u4e8e\u6d4b\u8bd5\u5230\u6709\u4e00\u4e2a\u7248\u672c\u80fd\u591f\u5b8c\u7f8e\u652f\u6301\u7684\uff0c \u5373 ",(0,r.jsx)(n.strong,{children:"2.14.5-02"}),"\u3002","\ud83d\ude02"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fc1\u79fb",children:"\u8fc1\u79fb"}),"\n",(0,r.jsxs)(n.p,{children:["\u56e0\u4e3a\u914d\u7f6e\u4e86 Nexus Repository Manager OSS \u7684 Docker \u955c\u50cf\u628a\u76f8\u5173\u6570\u636e\u5199\u5230\u5916\u90e8\u7684\u7269\u7406\u786c\u76d8\u4e2d\uff0c\u6240\u4ee5\u53ea\u9700\u4fee\u6539\u76f8\u5e94\u7684\u8def\u5f84\u5730\u5740\u5373\u53ef\uff0c\u5177\u4f53\u914d\u7f6e\u53c2\u8003",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/sonatype/nexus/",children:"\u5b98\u65b9\u6587\u6863"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.sonatype.com/repomanager2/node-packaged-modules-and-npm-registries#NodePackagedModulesandnpmRegistries-Configuringnpm",children:"Node Packaged Modules and npm Registries v2"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.npmjs.com/",children:"npm docs"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1726:(e,n,s)=>{s.d(n,{Z:()=>r});const r="data:image/png;base64,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"},3014:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/hosts-f2f98f7d402d8ea699e4b7fca00566d7.png"},2386:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/proxy-14a85ed5f8f3ddf697a16b5d59607a45.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>p,a:()=>l});var r=s(7294);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);