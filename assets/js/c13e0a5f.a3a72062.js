"use strict";(self.webpackChunkkenve_github_io=self.webpackChunkkenve_github_io||[]).push([[2776],{1884:(I,i,g)=>{g.r(i),g.d(i,{assets:()=>A,contentTitle:()=>l,default:()=>s,frontMatter:()=>e,metadata:()=>c,toc:()=>C});var n=g(5893),d=g(1151);const e={id:"greedy",title:"\u8d2a\u5fc3\u7b97\u6cd5",keywords:["JavaScript","\u7b97\u6cd5","\u8d2a\u5fc3\u7b97\u6cd5"]},l=void 0,c={id:"knowledge/algorithms/greedy",title:"\u8d2a\u5fc3\u7b97\u6cd5",description:"\u8d2a\u5fc3\u7b97\u6cd5\uff08greedy algorithm\uff09\uff0c\u53c8\u79f0\u8d2a\u5a6a\u7b97\u6cd5\uff0c\u662f\u4e00\u79cd\u5728\u6bcf\u4e00\u6b65\u9009\u62e9\u4e2d\u90fd\u91c7\u53d6\u5728\u5f53\u524d\u72b6\u6001\u4e0b\u6700\u597d\u6216\u6700\u4f18\uff08\u5373\u6700\u6709\u5229\uff09\u7684\u9009\u62e9\uff0c\u4ece\u800c\u5e0c\u671b\u5bfc\u81f4\u7ed3\u679c\u662f\u6700\u597d\u6216\u6700\u4f18\u7684\u7b97\u6cd5\u3002\u6bd4\u5982\uff1a\u5728\u65c5\u884c\u63a8\u9500\u5458\u95ee\u9898\u4e2d\uff0c\u5982\u679c\u65c5\u884c\u5458\u6bcf\u6b21\u90fd\u9009\u62e9\u6700\u8fd1\u7684\u57ce\u5e02\uff0c\u90a3\u8fd9\u5c31\u662f\u4e00\u79cd\u8d2a\u5fc3\u7b97\u6cd5\u3002",source:"@site/docs/knowledge/algorithms/greedy.md",sourceDirName:"knowledge/algorithms",slug:"/knowledge/algorithms/greedy",permalink:"/docs/knowledge/algorithms/greedy",draft:!1,unlisted:!1,editUrl:"https://github.com/kenve/kenve.github.io/edit/docusaurus/docs/knowledge/algorithms/greedy.md",tags:[],version:"current",frontMatter:{id:"greedy",title:"\u8d2a\u5fc3\u7b97\u6cd5",keywords:["JavaScript","\u7b97\u6cd5","\u8d2a\u5fc3\u7b97\u6cd5"]},sidebar:"knowledgeSideBar",previous:{title:"\u52a8\u6001\u89c4\u5212",permalink:"/docs/knowledge/algorithms/dp"},next:{title:"\u56de\u6eaf\u7b97\u6cd5",permalink:"/docs/knowledge/algorithms/backtracking"}},A={},C=[{value:"\u6700\u5c11\u786c\u5e01\u627e\u96f6\u95ee\u9898",id:"\u6700\u5c11\u786c\u5e01\u627e\u96f6\u95ee\u9898",level:2},{value:"\u5206\u6570\u80cc\u5305\u95ee\u9898",id:"\u5206\u6570\u80cc\u5305\u95ee\u9898",level:2}];function t(I){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...I.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"\u8d2a\u5fc3\u7b97\u6cd5"}),"\uff08greedy algorithm\uff09\uff0c\u53c8\u79f0",(0,n.jsx)(i.strong,{children:"\u8d2a\u5a6a\u7b97\u6cd5"}),"\uff0c\u662f\u4e00\u79cd\u5728\u6bcf\u4e00\u6b65\u9009\u62e9\u4e2d\u90fd\u91c7\u53d6\u5728\u5f53\u524d\u72b6\u6001\u4e0b\u6700\u597d\u6216\u6700\u4f18\uff08\u5373\u6700\u6709\u5229\uff09\u7684\u9009\u62e9\uff0c\u4ece\u800c\u5e0c\u671b\u5bfc\u81f4\u7ed3\u679c\u662f\u6700\u597d\u6216\u6700\u4f18\u7684\u7b97\u6cd5\u3002\u6bd4\u5982\uff1a\u5728\u65c5\u884c\u63a8\u9500\u5458\u95ee\u9898\u4e2d\uff0c\u5982\u679c\u65c5\u884c\u5458\u6bcf\u6b21\u90fd\u9009\u62e9\u6700\u8fd1\u7684\u57ce\u5e02\uff0c\u90a3\u8fd9\u5c31\u662f\u4e00\u79cd\u8d2a\u5fc3\u7b97\u6cd5\u3002"]}),"\n",(0,n.jsx)(i.p,{children:"\u5b83\u9075\u5faa\u4e00\u79cd\u8fd1\u4f3c\u89e3\u51b3\u95ee\u9898\u7684\u6280\u672f\uff0c\u671f\u76fc\u901a\u8fc7\u6bcf\u4e2a\u9636\u6bb5\u7684\u5c40\u90e8\u6700\u4f18\u9009\u62e9(\u5f53\u524d\u6700\u597d\u7684\u89e3)\uff0c\u4ece\u800c\u8fbe\u5230\u5168\u5c40\u7684\u6700\u4f18\uff08\u5168\u5c40\u6700\u4f18\u89e3\uff09\u3002\u5b83\u4e0d\u50cf\u52a8\u6001\u89c4\u5212\u7b97\u6cd5\u90a3\u6837\u8ba1\u7b97\u66f4\u5927\u7684\u683c\u5c40\u3002\u4e0b\u9762\u6765\u770b\u770b\u7528\u8d2a\u5fc3\u7b97\u6cd5\u89e3\u51b3\u52a8\u6001\u89c4\u5212\u8bdd\u9898\u4e2d\u6700\u5c11\u786c\u5e01\u627e\u96f6\u95ee\u9898\u548c\u80cc\u5305\u95ee\u9898\u3002"}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["\u5176\u4ed6\u7684\u8d2a\u5fc3\u7b97\u6cd5\uff0c\u6bd4\u5982 ",(0,n.jsx)(i.a,{href:"/docs/knowledge/data-structure/graph#dijkstra-%E7%AE%97%E6%B3%95",children:"Dijkstra \u7b97\u6cd5"}),"\u3001",(0,n.jsx)(i.a,{href:"/docs/knowledge/data-structure/graph#prim-%E7%AE%97%E6%B3%95",children:"Prim \u7b97\u6cd5"}),"\u548c ",(0,n.jsx)(i.a,{href:"/docs/knowledge/data-structure/graph#kruskal-%E7%AE%97%E6%B3%95",children:"Kruskal \u7b97\u6cd5"}),"\u3002"]})}),"\n",(0,n.jsx)(i.h2,{id:"\u6700\u5c11\u786c\u5e01\u627e\u96f6\u95ee\u9898",children:"\u6700\u5c11\u786c\u5e01\u627e\u96f6\u95ee\u9898"}),"\n",(0,n.jsxs)(i.p,{children:["\u6211\u4eec\u77e5\u9053\u80fd\u591f\u4f7f\u7528\u52a8\u6001\u89c4\u5212\u89e3\u51b3",(0,n.jsx)(i.a,{href:"/docs/knowledge/algorithms/dp#%E6%9C%80%E5%B0%91%E7%A1%AC%E5%B8%81%E6%89%BE%E9%9B%B6%E9%97%AE%E9%A2%98",children:"\u6700\u5c11\u786c\u5e01\u627e\u96f6\u95ee\u9898"}),"\uff0c\u800c\u6700\u5c11\u786c\u5e01\u627e\u96f6\u95ee\u9898\u4e5f\u80fd\u7528\u8d2a\u5fc3\u7b97\u6cd5\u89e3\u51b3\uff0c\u4ee3\u7801\u5b9e\u73b0\u4e5f\u6bd4\u52a8\u6001\u89c4\u5212\u7b80\u5355\u3002\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u7684\u7ed3\u679c\u662f\u6700\u4f18\u7684\uff0c\u4e0d\u8fc7\u5bf9\u6709\u4e9b\u9762\u989d\u800c\u8a00\uff0c\u7ed3\u679c\u4e0d\u4f1a\u662f\u6700\u4f18\u7684\u3002"]}),"\n",(0,n.jsx)(i.p,{children:"\u7b97\u6cd5\u601d\u8def\u662f\uff1a\u4ece\u6700\u5927\u9762\u989d\u7684\u786c\u5e01\u5f00\u59cb\uff0c\u62ff\u5c3d\u53ef\u80fd\u591a\u7684\u8fd9\u79cd\u786c\u5e01\u627e\u96f6\u3002\u5f53 \u65e0\u6cd5\u518d\u62ff\u66f4\u591a\u8fd9\u79cd\u4ef7\u503c\u7684\u786c\u5e01\u65f6\uff0c\u5f00\u59cb\u62ff\u7b2c\u4e8c\u5927\u4ef7\u503c\u7684\u786c\u5e01\uff0c\u4f9d\u6b21\u7ee7\u7eed\u3002\u4e0b\u9762\u6765\u770b\u770b\u7b97\u6cd5\u4ee3\u7801\uff1a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-js",children:"function minCoinChange(coins, amount) {\n  const change = [];\n  let total = 0;\n  for (let i = coins.length; i >= 0; i--) {\n    const coin = coins[i];\n    // \u5bf9\u6bcf\u4e2a\u9762\u989d\uff08\u4ece\u5927\u5230\u5c0f\uff09\uff0c\u628a\u5b83\u7684\u503c\u548c total \u76f8\u52a0\u540e\uff0ctotal \u9700\u8981\u5c0f\u4e8e amount\n    while (total + coin <= amount) {\n      // \u5c06\u5f53\u524d\u9762\u989d coin \u6dfb\u52a0\u5230\u7ed3\u679c\u4e2d\n      change.push(coin);\n      // \u5c06\u5b83\u548c total \u76f8\u52a0\n      total += coin;\n    }\n  }\n  return change;\n}\n"})}),"\n",(0,n.jsx)(i.p,{children:"\u7b97\u6cd5\u6d4b\u8bd5\uff1a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-js",children:"console.log(minCoinChange([1, 5, 10, 20], 35)); // \u8f93\u51fa [20, 10, 5]\n"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"\u6700\u5c11\u786c\u5e01\u627e\u96f6\u95ee\u9898",src:g(8386).Z+"",width:"496",height:"295"})}),"\n",(0,n.jsx)(i.p,{children:"\u4e0a\u56fe\u9610\u91ca\u4e86\u7b97\u6cd5\u7684\u6267\u884c\u8fc7\u7a0b\uff0c\u7ed3\u679c\u548c DP \u7b97\u6cd5\u7684\u7ed3\u679c\u76f8\u540c"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-js",children:"// \u5f53\u8f93\u5165\u6570\u7ec4 [1, 3, 4]\nconsole.log(minCoinChange([1, 3, 4], 6)); // \u8f93\u51fa [4, 1, 1]\n"})}),"\n",(0,n.jsxs)(i.p,{children:["\u5982\u679c\u7528 ",(0,n.jsx)(i.code,{children:"[1, 3, 4]"})," \u9762\u989d\u6267\u884c\u8d2a\u5fc3\u7b97\u6cd5\uff0c\u4f1a\u5f97\u5230\u7ed3\u679c ",(0,n.jsx)(i.code,{children:"[4, 1, 1]"}),"\u3002\u5982\u679c\u7528\u52a8\u6001\u89c4\u5212\u7684\u89e3\u6cd5\uff0c\u4f1a\u5f97\u5230\u6700\u4f18\u7684\u7ed3\u679c ",(0,n.jsx)(i.code,{children:"[3, 3]"}),"\u3002"]}),"\n",(0,n.jsx)(i.p,{children:"\u6bd4\u8d77\u52a8\u6001\u89c4\u5212\u7b97\u6cd5\u800c\u8a00\uff0c\u8d2a\u5fc3\u7b97\u6cd5\u66f4\u7b80\u5355\u3001\u66f4\u5feb\u3002\u7136\u800c\uff0c\u5b83\u5e76\u4e0d\u603b\u662f\u5f97\u5230\u6700\u4f18\u7b54\u6848\u3002\u4f46\u662f\u7efc\u5408\u6765\u770b\uff0c\u5b83\u76f8\u5bf9\u6267\u884c\u65f6\u95f4\u6765\u8bf4\uff0c\u8f93\u51fa\u4e86\u4e00\u4e2a\u53ef\u4ee5\u63a5\u53d7\u7684\u89e3\u3002"}),"\n",(0,n.jsx)(i.h2,{id:"\u5206\u6570\u80cc\u5305\u95ee\u9898",children:"\u5206\u6570\u80cc\u5305\u95ee\u9898"}),"\n",(0,n.jsxs)(i.p,{children:["\u6c42\u89e3\u5206\u6570\u80cc\u5305\u95ee\u9898\u7684\u7b97\u6cd5\u4e0e",(0,n.jsx)(i.a,{href:"/docs/knowledge/algorithms/dp#%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98",children:"\u52a8\u6001\u89c4\u5212\u7248\u672c"}),"\u7a0d\u6709\u4e0d\u540c\u3002\u5728 0-1 \u80cc\u5305\u95ee\u9898\u4e2d\uff0c\u53ea\u80fd\u5411\u80cc\u5305\u91cc\u88c5\u5165\u5b8c\u6574\u7684\u7269\u54c1\uff0c\u800c\u5728\u5206\u6570\u80cc\u5305\u95ee\u9898\u4e2d\uff0c\u53ef\u4ee5\u88c5\u5165\u5206\u6570\u7684\u7269\u54c1\u3002\u6211\u4eec\u7528\u524d\u9762\u7528\u8fc7\u7684\u4f8b\u5b50\u6765\u6bd4\u8f83\u4e24\u8005\u7684\u5dee\u5f02\uff0c\u5982\u4e0b\u6240\u793a\u3002"]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"\u7269\u54c1"}),(0,n.jsx)(i.th,{children:"\u91cd\u91cf"}),(0,n.jsx)(i.th,{children:"\u4ef7\u503c"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"1"}),(0,n.jsx)(i.td,{children:"2"}),(0,n.jsx)(i.td,{children:"3"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"2"}),(0,n.jsx)(i.td,{children:"3"}),(0,n.jsx)(i.td,{children:"4"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"3"}),(0,n.jsx)(i.td,{children:"4"}),(0,n.jsx)(i.td,{children:"5"})]})]})]}),"\n",(0,n.jsx)(i.p,{children:"\u5728\u52a8\u6001\u89c4\u5212\u7684\u4f8b\u5b50\u91cc\uff0c\u6211\u4eec\u8003\u8651\u80cc\u5305\u80fd\u591f\u643a\u5e26\u7684\u91cd\u91cf\u53ea\u6709 5\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u91cc\uff0c\u6211\u4eec\u53ef\u4ee5\u8bf4\u6700\u4f73\u89e3\u51b3\u65b9\u6848\u662f\u5f80\u80cc\u5305\u91cc\u88c5\u5165\u7269\u54c1 1 \u548c\u7269\u54c1 2\uff0c\u603b\u91cd\u91cf\u4e3a 5\uff0c\u603b\u4ef7\u503c\u4e3a 7\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u5982\u679c\u5728\u5206\u6570\u80cc\u5305\u95ee\u9898\u4e2d\u8003\u8651\u76f8\u540c\u7684\u5bb9\u91cf\uff0c\u5f97\u5230\u7684\u7ed3\u679c\u662f\u4e00\u6837\u7684\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u8003\u8651\u5bb9\u91cf\u4e3a 6 \u7684\u60c5\u51b5\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u89e3\u51b3\u65b9\u6848\u662f\u88c5\u5165\u7269\u54c1 1 \u548c\u7269\u54c1 2\uff0c\u8fd8\u6709 25% \u7684\u7269\u54c1 3\u3002\u8fd9\u6837\uff0c\u91cd\u91cf\u4e3a 6 \u7684\u7269\u54c1\u603b\u4ef7\u503c\u4e3a 8.25\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u4ee3\u7801\u5b9e\u73b0\u7b97\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-js",children:"function knapSack(capacity, weights, values) {\n  const n = values.length;\n  let load = 0;\n  let val = 0;\n  // \u8fed\u4ee3\u7269\u54c1\n  for (let i = 0; i < n && load < capacity; i++) {\n    // \u5982\u679c\u7269\u54c1\u53ef\u4ee5\u5b8c\u6574\u5730\u88c5\u5165\u80cc\u5305\uff08\u5c0f\u4e8e\u7b49\u4e8e\u80cc\u5305\u5bb9\u91cf\uff09\n    if (weights[i] <= capacity - load) {\n      // \u5c31\u5c06\u5176\u4ef7\u503c\u548c\u91cd\u91cf\u5206\u522b\u8ba1\u5165\u80cc\u5305\u5df2\u88c5\u5165\u7269\u54c1\u7684\u603b\u4ef7\u503c\uff08val\uff09\u548c\u603b\u91cd\u91cf\uff08load\uff09\n      val += values[i];\n      load += weights[i];\n      // \u8f93\u51fa\u7269\u54c1\n      // console.log('using item ' + (i + 1) + ' for the solution');\n    } else {\n      // \u5982\u679c\u7269\u54c1\u4e0d\u80fd\u5b8c\u6574\u5730\u88c5\u5165\u80cc\u5305\uff0c\u8ba1\u7b97\u80fd\u591f\u88c5\u5165\u90e8\u5206\u7684\u6bd4\u4f8b\uff08r)\uff08\u53ef\u4ee5\u5e26\u7684\u5206\u6570\uff09\n      const r = (capacity - load) / weights[i];\n      val += r * values[i];\n      load += weights[i];\n      // \u8f93\u51fa\u7269\u54c1\u53ca\u6bd4\u4f8b\n      // console.log('using ratio of ' + r + ' for item ' + (i + 1) + ' for the solution');\n    }\n  }\n  return val;\n}\n"})})]})}function s(I={}){const{wrapper:i}={...(0,d.a)(),...I.components};return i?(0,n.jsx)(i,{...I,children:(0,n.jsx)(t,{...I})}):t(I)}},8386:(I,i,g)=>{g.d(i,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHZpZXdCb3g9IjE1NSAxNDIgNDk2IDI5NSIgd2lkdGg9IjQ5NiIgaGVpZ2h0PSIyOTUiPgogIDxkZWZzPgogICAgPGZvbnQtZmFjZSBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIHBhbm9zZS0xPSIyIDAgNSAzIDAgMCAwIDIgMCA0IiB1bml0cy1wZXItZW09IjEwMDAiIHVuZGVybGluZS1wb3NpdGlvbj0iLTEwMCIgdW5kZXJsaW5lLXRoaWNrbmVzcz0iNTAiIHNsb3BlPSIwIiB4LWhlaWdodD0iNTE3IiBjYXAtaGVpZ2h0PSI3MTQiIGFzY2VudD0iOTUxLjk5NTgiIGRlc2NlbnQ9Ii0yMTIuOTk3NDQiIGZvbnQtd2VpZ2h0PSI0MDAiPgogICAgICA8Zm9udC1mYWNlLXNyYz4KICAgICAgICA8Zm9udC1mYWNlLW5hbWUgbmFtZT0iSGVsdmV0aWNhTmV1ZSIvPgogICAgICA8L2ZvbnQtZmFjZS1zcmM+CiAgICA8L2ZvbnQtZmFjZT4KICA8L2RlZnM+CiAgPG1ldGFkYXRhPiBQcm9kdWNlZCBieSBPbW5pR3JhZmZsZSA3LjExLjUgCiAgICA8ZGM6ZGF0ZT4yMDIwLTA1LTA2IDE1OjQ3OjQyICswMDAwPC9kYzpkYXRlPgogIDwvbWV0YWRhdGE+CiAgPGcgaWQ9ImdyZWVkeS1taW4tY29pbi1jaGFuZ2UiIHN0cm9rZT0ibm9uZSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWRhc2hhcnJheT0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2Utb3BhY2l0eT0iMSI+CiAgICA8dGl0bGU+Z3JlZWR5LW1pbi1jb2luLWNoYW5nZTwvdGl0bGU+CiAgICA8cmVjdCBmaWxsPSJ3aGl0ZSIgeD0iMTU1IiB5PSIxNDIiIHdpZHRoPSI0OTYiIGhlaWdodD0iMjk1Ii8+CiAgICA8ZyBpZD0iZ3JlZWR5LW1pbi1jb2luLWNoYW5nZTogTGF5ZXIgMSI+CiAgICAgIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTU0Ij4KICAgICAgICA8cmVjdCB4PSIxNTUiIHk9IjE0MiIgd2lkdGg9IjQ5NS41IiBoZWlnaHQ9IjI5NSIgZmlsbD0iI2VhZjNmNSIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzE4NyI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkyIDIwMS43NzYpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNDAwIiBmaWxsPSJibGFjayIgeD0iMjYuNzU0IiB5PSIxNSI+MzYgLSAyNSA9IDExPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTg4Ij4KICAgICAgICA8Y2lyY2xlIGN4PSI0MDIiIGN5PSIyMTEiIHI9IjI1LjAwMDAzOTk0NzU0NzQiIGZpbGw9IiNjY2MiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI0MDIiIGN5PSIyMTEiIHI9IjI1LjAwMDAzOTk0NzU0NzQiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzg3IDIwMS43NzYpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNDAwIiBmaWxsPSJibGFjayIgeD0iNi4xMDQiIHk9IjE1Ij4yNTwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcmFwaGljXzE5MCI+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkyIDI3Ny43NzYpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNDAwIiBmaWxsPSJibGFjayIgeD0iMzEuMjAyIiB5PSIxNSI+MTEgLSAxMCA9IDE8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xODkiPgogICAgICAgIDxjaXJjbGUgY3g9IjQwMiIgY3k9IjI4NyIgcj0iMjUuMDAwMDM5OTQ3NTQ3NSIgZmlsbD0iI2NjYyIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQwMiIgY3k9IjI4NyIgcj0iMjUuMDAwMDM5OTQ3NTQ3NSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzODcgMjc3Ljc3NikiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSI2LjEwNCIgeT0iMTUiPjI1PC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTkyIj4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTIgMzUzLjc3NikiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSI0MC4wOTgiIHk9IjE1Ij4xIC0gMSA9IDA8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xOTEiPgogICAgICAgIDxjaXJjbGUgY3g9IjQwMiIgY3k9IjM2MyIgcj0iMjUuMDAwMDM5OTQ3NTQ3NSIgZmlsbD0iI2NjYyIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQwMiIgY3k9IjM2MyIgcj0iMjUuMDAwMDM5OTQ3NTQ3NSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzODcgMzUzLjc3NikiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSI2LjEwNCIgeT0iMTUiPjI1PC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTkzIj4KICAgICAgICA8Y2lyY2xlIGN4PSI0ODkiIGN5PSIyODkuNSIgcj0iMjIuNTAwMDM1OTUyNzkyNyIgZmlsbD0iI2NjYyIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQ4OSIgY3k9IjI4OS41IiByPSIyMi41MDAwMzU5NTI3OTI3IiBzdHJva2U9ImJsYWNrIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICAgIDx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3NiAyODAuMjc2KSIgZmlsbD0iYmxhY2siPgogICAgICAgICAgPHRzcGFuIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EgTmV1ZSIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjQwMCIgZmlsbD0iYmxhY2siIHg9IjQuMTA0IiB5PSIxNSI+MTA8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JhcGhpY18xOTQiPgogICAgICAgIDxjaXJjbGUgY3g9IjQ4OSIgY3k9IjM2MyIgcj0iMjIuNTAwMDM1OTUyNzkyNyIgZmlsbD0iI2NjYyIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQ4OSIgY3k9IjM2MyIgcj0iMjIuNTAwMDM1OTUyNzkyNyIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzYgMzUzLjc3NikiIGZpbGw9ImJsYWNrIj4KICAgICAgICAgIDx0c3BhbiBmb250LWZhbWlseT0iSGVsdmV0aWNhIE5ldWUiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI0MDAiIGZpbGw9ImJsYWNrIiB4PSI0LjEwNCIgeT0iMTUiPjEwPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9IkdyYXBoaWNfMTk1Ij4KICAgICAgICA8Y2lyY2xlIGN4PSI1NzEiIGN5PSIzNjMiIHI9IjIwLjAwMDAzMTk1ODAzNzkiIGZpbGw9IiNjY2MiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI1NzEiIGN5PSIzNjMiIHI9IjIwLjAwMDAzMTk1ODAzNzkiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgICAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTYwIDM1My43NzYpIiBmaWxsPSJibGFjayI+CiAgICAgICAgICA8dHNwYW4gZm9udC1mYW1pbHk9IkhlbHZldGljYSBOZXVlIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNDAwIiBmaWxsPSJibGFjayIgeD0iNi41NTIiIHk9IjE1Ij4xPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="},1151:(I,i,g)=>{g.d(i,{Z:()=>c,a:()=>l});var n=g(7294);const d={},e=n.createContext(d);function l(I){const i=n.useContext(e);return n.useMemo((function(){return"function"==typeof I?I(i):{...i,...I}}),[i,I])}function c(I){let i;return i=I.disableParentContext?"function"==typeof I.components?I.components(d):I.components||d:l(I.components),n.createElement(e.Provider,{value:i},I.children)}}}]);