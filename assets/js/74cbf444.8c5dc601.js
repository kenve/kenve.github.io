"use strict";(self.webpackChunkkenve_github_io=self.webpackChunkkenve_github_io||[]).push([[3919],{9075:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var s=t(5893),i=t(1151);const o={id:"deque",title:"\u53cc\u7aef\u961f\u5217 Deque",keywords:["JavaScript","\u6570\u636e\u7ed3\u6784","Deque","\u53cc\u7aef\u961f\u5217"]},r=void 0,l={id:"knowledge/data-structure/deque",title:"\u53cc\u7aef\u961f\u5217 Deque",description:"\u53cc\u7aef\u961f\u5217\uff08deque\uff0c\u5168\u540d double-ended queue\uff09\u662f\u4e00\u79cd\u5177\u6709\u961f\u5217\u548c\u6808\u6027\u8d28\u7684\u62bd\u8c61\u6570\u636e\u7c7b\u578b\u3002\u53cc\u7aef\u961f\u5217\u4e2d\u7684\u5143\u7d20\u53ef\u4ee5\u4ece\u4e24\u7aef\u5f39\u51fa\uff0c\u5373\u53ef\u4ee5\u540c\u65f6\u4ece\u524d\u7aef\u548c\u540e\u7aef\u6dfb\u52a0\u548c\u79fb\u9664\u5143\u7d20\u3002",source:"@site/docs/knowledge/data-structure/deque.md",sourceDirName:"knowledge/data-structure",slug:"/knowledge/data-structure/deque",permalink:"/docs/knowledge/data-structure/deque",draft:!1,unlisted:!1,editUrl:"https://github.com/kenve/kenve.github.io/edit/docusaurus/docs/knowledge/data-structure/deque.md",tags:[],version:"current",frontMatter:{id:"deque",title:"\u53cc\u7aef\u961f\u5217 Deque",keywords:["JavaScript","\u6570\u636e\u7ed3\u6784","Deque","\u53cc\u7aef\u961f\u5217"]},sidebar:"knowledgeSideBar",previous:{title:"\u961f\u5217 Queue",permalink:"/docs/knowledge/data-structure/queue"},next:{title:"\u94fe\u8868 LinkedList",permalink:"/docs/knowledge/data-structure/linked-list"}},d={},u=[{value:"\u521b\u5efa Deque \u7c7b",id:"\u521b\u5efa-deque-\u7c7b",level:2},{value:"\u4f7f\u7528 Deque \u7c7b",id:"\u4f7f\u7528-deque-\u7c7b",level:2},{value:"\u89e3\u51b3\u95ee\u9898",id:"\u89e3\u51b3\u95ee\u9898",level:2},{value:"\u56de\u6587\u68c0\u67e5\u5668",id:"\u56de\u6587\u68c0\u67e5\u5668",level:3}];function c(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u53cc\u7aef\u961f\u5217"}),"\uff08deque\uff0c\u5168\u540d double-ended queue\uff09\u662f\u4e00\u79cd\u5177\u6709\u961f\u5217\u548c\u6808\u6027\u8d28\u7684\u62bd\u8c61\u6570\u636e\u7c7b\u578b\u3002\u53cc\u7aef\u961f\u5217\u4e2d\u7684\u5143\u7d20\u53ef\u4ee5\u4ece\u4e24\u7aef\u5f39\u51fa\uff0c\u5373\u53ef\u4ee5\u540c\u65f6\u4ece\u524d\u7aef\u548c\u540e\u7aef\u6dfb\u52a0\u548c\u79fb\u9664\u5143\u7d20\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u53cc\u7aef\u961f\u5217\u5728\u73b0\u5b9e\u751f\u6d3b\u4e2d\u7684\u4f8b\u5b50\uff1a\u4e00\u4e2a\u521a\u4e70\u4e86\u7968\u7684\u4eba\u5982\u679c\u53ea\u662f\u8fd8\u9700\u8981\u518d\u95ee\u4e00\u4e9b\u7b80\u5355\u7684\u4fe1\u606f\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u56de\u5230\u961f\u4f0d\u7684\u5934\u90e8\u3002\u53e6\u5916\uff0c\u5728\u961f\u4f0d\u672b\u5c3e\u7684\u4eba\u5982\u679c\u8d76\u65f6\u95f4\uff0c\u4ed6\u53ef\u4ee5\u76f4\u63a5\u79bb\u5f00\u961f\u4f0d\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u8ba1\u7b97\u673a\u79d1\u5b66\u4e2d\uff0c\u53cc\u7aef\u961f\u5217\u7684\u4e00\u4e2a\u5e38\u89c1\u5e94\u7528\u662f\u5b58\u50a8\u4e00\u7cfb\u5217\u7684\u64a4\u9500\u64cd\u4f5c\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"\u53cc\u7aef\u961f\u5217\u56fe",src:t(3647).Z+"",width:"1494",height:"1014"})}),"\n",(0,s.jsx)(n.h2,{id:"\u521b\u5efa-deque-\u7c7b",children:"\u521b\u5efa Deque \u7c7b"}),"\n",(0,s.jsxs)(n.p,{children:["\u53cc\u7aef\u961f\u5217\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u961f\u5217\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u5176\u6784\u9020\u51fd\u6570\u4e2d\u7684\u90e8\u5206\u4ee3\u7801\u548c\u961f\u5217\u76f8\u540c\uff0c\u5305\u62ec\u76f8\u540c\u7684\u5185\u90e8\u5c5e\u6027\u548c\u4ee5\u4e0b\u65b9\u6cd5\uff1a",(0,s.jsx)(n.code,{children:"isEmpty"}),"\u3001",(0,s.jsx)(n.code,{children:"clear"}),"\u3001",(0,s.jsx)(n.code,{children:"size"})," \u548c ",(0,s.jsx)(n.code,{children:"toString"}),"\u3002\u7531\u4e8e\u53cc\u7aef\u961f\u5217\u5141\u8bb8\u5728\u4e24\u7aef\u6dfb\u52a0\u548c\u79fb\u9664\u5143\u7d20\uff0c\u8fd8\u4f1a\u6709\u4e0b\u9762\u51e0\u4e2a\u65b9\u6cd5\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"addFront(element)"}),"\uff1a\u8be5\u65b9\u6cd5\u5728\u53cc\u7aef\u961f\u5217\u524d\u7aef\u6dfb\u52a0\u65b0\u7684\u5143\u7d20\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"addBack(element)"}),"\uff1a\u8be5\u65b9\u6cd5\u5728\u53cc\u7aef\u961f\u5217\u540e\u7aef\u6dfb\u52a0\u65b0\u7684\u5143\u7d20(\u5b9e\u73b0\u65b9\u6cd5\u548c Queue \u7c7b\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"enqueue"})," \u65b9\u6cd5\u76f8\u540c)\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"removeFront()"}),"\uff1a\u8be5\u65b9\u6cd5\u4f1a\u4ece\u53cc\u7aef\u961f\u5217\u524d\u7aef\u79fb\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20(\u5b9e\u73b0\u65b9\u6cd5\u548c Queue \u7c7b\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"dequeue"})," \u65b9\u6cd5\u76f8\u540c)\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"removeBack()"}),"\uff1a\u8be5\u65b9\u6cd5\u4f1a\u4ece\u53cc\u7aef\u961f\u5217\u540e\u7aef\u79fb\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20(\u5b9e\u73b0\u65b9\u6cd5\u548c Stack \u7c7b\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"pop"})," \u65b9\u6cd5\u4e00\u6837)\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"peekFront()"}),"\uff1a\u8be5\u65b9\u6cd5\u8fd4\u56de\u53cc\u7aef\u961f\u5217\u524d\u7aef\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20(\u5b9e\u73b0\u65b9\u6cd5\u548c Queue \u7c7b\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"peek"})," \u65b9\u6cd5\u4e00\u6837)\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"peekBack()"}),"\uff1a\u8be5\u65b9\u6cd5\u8fd4\u56de\u53cc\u7aef\u961f\u5217\u540e\u7aef\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20(\u5b9e\u73b0\u65b9\u6cd5\u548c Stack \u7c7b\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"peek"})," \u65b9\u6cd5\u4e00\u6837)\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"class Deque {\n  constructor() {\n    this.count = 0;\n    this.lowestCount = 0;\n    this.items = {};\n  }\n\n  // \u524d\u7aef\u6dfb\u52a0\u5143\u7d20\n  addFront(element) {\n    if (this.isEmpty()) {\n      // \u7b2c\u4e00\u79cd\u573a\u666f\u662f\u8fd9\u4e2a\u53cc\u7aef\u961f\u5217\u4e3a\u7a7a\u65f6\uff0c\u53ef\u4ee5\u6267\u884c addBack \u65b9\u6cd5\u3002\n      // \u5143\u7d20\u4f1a\u88ab\u6dfb\u52a0\u5230\u53cc\u7aef\u961f\u5217\u7684\u540e\u7aef\uff0c\u4e5f\u662f\u53cc\u7aef\u961f\u5217\u7684\u524d\u7aef\u3002\n      // addBack \u65b9\u6cd5\u5df2\u7ecf\u6709\u4e86\u589e\u52a0 count \u5c5e\u6027\u503c\u7684\u903b\u8f91\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u590d\u7528\u5b83\u6765\u907f\u514d\u91cd\u590d\u7f16\u5199\u4ee3\u7801\u3002\n      this.addBack(element);\n    } else if (this.lowestCount > 0) {\n      // \u7b2c\u4e8c\u79cd\u573a\u666f\u662f\u4e00\u4e2a\u5143\u7d20\u5df2\u7ecf\u88ab\u4ece\u53cc\u7aef\u961f\u5217\u7684\u524d\u7aef\u79fb\u9664\uff0c\u4e5f\u5c31\u662f\u8bf4 lowestCount \u5c5e\u6027\u4f1a\u5927\u4e8e\u7b49\u4e8e 1\u3002\n      // \u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5c06 lowestCount \u5c5e\u6027\u51cf 1 \u5e76\u5c06\u65b0\u5143\u7d20\u7684\u503c\u653e\u5728\u8fd9\u4e2a\u952e\u7684\u4f4d\u7f6e\u4e0a\u5373\u53ef\u3002\n      this.lowestCount--;\n      this.items[this.lowestCount] = element;\n    } else {\n      for (let i = this.count; i > 0; i--) {\n        // \u7b2c\u4e09\u79cd\u4e5f\u662f\u6700\u540e\u4e00\u79cd\u573a\u666f\u662f lowestCount \u4e3a 0 \u7684\u60c5\u51b5\u3002\n        // \u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u8d1f\u503c\u7684\u952e\uff0c\u540c\u65f6\u66f4\u65b0\u7528\u4e8e\u8ba1\u7b97\u53cc\u7aef\u961f\u5217\u957f\u5ea6\u7684\u903b\u8f91\uff0c\u4f7f\u5176\u4e5f\u80fd\u5305\u542b\u8d1f\u952e\u503c\u3002\n        // \u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6dfb\u52a0\u4e00\u4e2a\u65b0\u5143\u7d20\u7684\u64cd\u4f5c\u4ecd\u7136\u80fd\u4fdd\u6301\u6700\u4f4e\u7684\u8ba1\u7b97\u6210\u672c\u3002\u4e3a\u4e86\u4fbf\u4e8e\u6f14\u793a\uff0c\u6211\u4eec\u628a\u672c\u573a\u666f\u770b\u4f5c\u4f7f\u7528\u6570\u7ec4\u3002\n        // \u8981\u5728\u7b2c\u4e00\u4f4d\u6dfb\u52a0\u4e00\u4e2a\u65b0\u5143\u7d20\uff0c\u6211\u4eec\u9700\u8981\u5c06\u6240\u6709\u5143\u7d20\u540e\u79fb\u4e00\u4f4d\u6765\u7a7a\u51fa\u7b2c\u4e00\u4e2a\u4f4d\u7f6e\u3002\n        // \u7531\u4e8e\u6211\u4eec\u4e0d\u60f3\u4e22\u5931\u4efb\u4f55\u5df2\u6709\u7684\u503c\uff0c\u9700\u8981\u4ece\u6700\u540e\u4e00\u4f4d\u5f00\u59cb\u8fed\u4ee3\u6240\u6709\u7684\u503c\uff0c\u5e76\u4e3a\u5143\u7d20\u8d4b\u4e0a\u7d22\u5f15\u503c\u51cf 1 \u4f4d\u7f6e\u7684\u503c\u3002\n        this.items[i] = this.items[i - 1];\n      }\n      this.count++;\n      this.lowestCount = 0;\n      // \u5728\u6240\u6709\u7684\u5143\u7d20\u90fd\u5b8c\u6210\u79fb\u52a8\u540e\uff0c\u7b2c\u4e00\u4f4d\u5c06\u662f\u7a7a\u95f2\u72b6\u6001\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u7528\u9700\u8981\u6dfb\u52a0\u7684\u65b0\u5143\u7d20\u6765\u8986\u76d6\u5b83\u4e86\u3002\n      this.items[0] = element; // {4}\n    }\n  }\n\n  // \u5411\u540e\u7aef\u6dfb\u52a0\u5143\u7d20\n  addBack(element) {\n    this.items[this.count] = element;\n    this.count++;\n  }\n\n  // \u4ece\u524d\u7aef\u79fb\u9664\u5143\u7d20\n  removeFront() {\n    if (this.isEmpty()) {\n      return undefined;\n    }\n    const result = this.items[this.lowestCount];\n    delete this.items[this.lowestCount];\n    this.lowestCount++;\n    return result;\n  }\n\n  // \u4ece\u540e\u7aef\u79fb\u9664\u5143\u7d20\n  removeBack() {\n    if (this.isEmpty()) {\n      return undefined;\n    }\n    this.count--;\n    const result = this.items[this.count];\n    delete this.items[this.count];\n    return result;\n  }\n\n  // \u67e5\u770b\u7b2c\u4e00\u4e2a\u5143\u7d20\n  peekFront() {\n    if (this.isEmpty()) {\n      return undefined;\n    }\n    return this.items[this.lowestCount];\n  }\n\n  // \u67e5\u770b\u6700\u540e\u4e00\u4e2a\u5143\u7d20\n  peekBack() {\n    if (this.isEmpty()) {\n      return undefined;\n    }\n    return this.items[this.count - 1];\n  }\n\n  // \u662f\u5426\u4e3a\u7a7a\n  isEmpty() {\n    return this.size() === 0;\n  }\n\n  // \u6e05\u7a7a\n  clear() {\n    this.items = {};\n    this.count = 0;\n    this.lowestCount = 0;\n  }\n\n  size() {\n    return this.count - this.lowestCount;\n  }\n\n  // \u8f6c\u5b57\u7b26\u4e32\n  toString() {\n    if (this.isEmpty()) {\n      return '';\n    }\n    let objString = `${this.items[this.lowestCount]}`;\n    for (let i = this.lowestCount + 1; i < this.count; i++) {\n      objString = `${objString}, ${this.items[i]}`;\n    }\n    return objString;\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528-deque-\u7c7b",children:"\u4f7f\u7528 Deque \u7c7b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const deque = new Deque();\nconsole.log(deque.isEmpty()); // \u8f93\u51fatrue\ndeque.addBack('zhangsan');\ndeque.addBack('lisi');\nconsole.log(deque.toString()); // zhangsan, lisi\ndeque.addBack('wangwu');\nconsole.log(deque.toString()); // zhangsan, lisi, wangwu\nconsole.log(deque.size()); // \u8f93\u51fa 3\nconsole.log(deque.isEmpty()); // \u8f93\u51fa false\ndeque.removeFront(); // \u79fb\u9664 wangwu\nconsole.log(deque.toString()); // zhangsan, lisi\ndeque.removeBack(); // lisi \u51b3\u5b9a\u79bb\u5f00\nconsole.log(deque.toString()); // zhangsan\ndeque.addFront('lisi'); // lisi \u56de\u6765\u8be2\u95ee\u4e00\u4e9b\u4fe1\u606f\nconsole.log(deque.toString()); // lisi, zhangsan\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u89e3\u51b3\u95ee\u9898",children:"\u89e3\u51b3\u95ee\u9898"}),"\n",(0,s.jsx)(n.h3,{id:"\u56de\u6587\u68c0\u67e5\u5668",children:"\u56de\u6587\u68c0\u67e5\u5668"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u56de\u6587\u662f\u6b63\u53cd\u90fd\u80fd\u8bfb\u901a\u7684\u5355\u8bcd\u3001\u8bcd\u7ec4\u3001\u6570\u6216\u4e00\u7cfb\u5217\u5b57\u7b26\u7684\u5e8f\u5217\uff0c\u4f8b\u5982 madam \u6216 racecar\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u4e0d\u540c\u7684\u7b97\u6cd5\u53ef\u4ee5\u68c0\u67e5\u4e00\u4e2a\u8bcd\u7ec4\u6216\u5b57\u7b26\u4e32\u662f\u5426\u4e3a\u56de\u6587\u3002\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u662f\u5c06\u5b57\u7b26\u4e32\u53cd\u5411\u6392\u5217\u5e76\u68c0\u67e5\u5b83\u548c\u539f\u5b57\u7b26\u4e32\u662f\u5426\u76f8\u540c\u3002\u5982\u679c\u4e24\u8005\u76f8\u540c\uff0c\u90a3\u4e48\u5b83\u5c31\u662f\u4e00\u4e2a\u56de\u6587\u3002\u6211\u4eec\u4e5f\u53ef\u4ee5\u7528\u6808\u6765\u5b8c\u6210\uff0c\u4f46\u662f\u5229\u7528\u6570\u636e\u7ed3\u6784\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\u6700\u7b80\u5355\u65b9\u6cd5\u662f\u4f7f\u7528\u53cc\u7aef\u961f\u5217\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"\u56de\u6587\u68c0\u67e5\u56fe",src:t(7127).Z+"",width:"1438",height:"764"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function palindromeChecker(aString) {\n  // \u68c0\u67e5\u4f20\u5165\u7684\u5b57\u7b26\u4e32\u53c2\u6570\u662f\u5426\u5408\u6cd5\uff0c\u4e0d\u5408\u6cd5\u8fd4\u56de false\n  if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {\n    return false;\n  }\n  const deque = new Deque();\n  // \u5c06\u6240\u6709\u5b57\u6bcd\u8f6c\u5316\u4e3a\u5c0f\u5199\uff0c\u540c\u65f6\u79fb\u9664\u6240\u6709\u7684\u7a7a\u683c\uff08\u79fb\u9664\u6240\u6709\u7684\u7279\u6b8a\u5b57\u7b26\uff09\n  const lowerString = aString.toLocaleLowerCase().split(' ').join('');\n  let isEqual = true;\n  let firstChar, lastChar;\n  for (let i = 0; i < lowerString.length; i++) {\n    // \u5bf9\u5b57\u7b26\u4e32\u4e2d\u7684\u6240\u6709\u5b57\u7b26\u6267\u884c enqueue \u64cd\u4f5c\n    deque.addBack(lowerString.charAt(i));\n  }\n  while (deque.size() > 1 && isEqual) {\n    // \u5982\u679c\u6240\u6709\u5143\u7d20\u90fd\u5728\u53cc\u7aef\u961f\u5217\u4e2d(\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u5b57\u7b26\u7684\u8bdd\uff0c\u90a3\u5b83\u80af\u5b9a\u662f\u56de\u6587)\n    // \u5e76\u4e14\u9996\u5c3e\u5b57\u7b26\u76f8\u540c\u7684\u8bdd\u5373\u53ef\u8ba4\u4e3a\u662f\u56de\u6587\n    // \u4ece\u524d\u7aef\u79fb\u9664\u4e00\u4e2a\u5143\u7d20\n    firstChar = deque.removeFront();\n    // \u518d\u4ece\u540e\u7aef\u79fb\u9664\u4e00\u4e2a\u5143\u7d20\n    lastChar = deque.removeBack();\n    // \u8981\u4f7f\u5b57\u7b26\u4e32\u4e3a\u56de\u6587\uff0c\u79fb\u9664\u7684\u4e24\u4e2a\u5b57\u7b26\u5fc5\u987b\u76f8\u540c\n    if (firstChar !== lastChar) {\n      // \u5982\u679c\u5b57\u7b26\u4e0d\u540c\u7684\u8bdd\uff0c\u8fd9\u4e2a\u5b57\u7b26\u4e32\u5c31\u4e0d\u662f\u4e00\u4e2a\u56de\u6587\n      isEqual = false;\n    }\n  }\n  return isEqual;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u9a8c\u8bc1\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"console.log('a', palindromeChecker('a')); // a true\nconsole.log('abc', palindromeChecker('abc')); // abc false\nconsole.log('level', palindromeChecker('level')); // level true\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3647:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/deque-c49a6a703d2daf13429251c6bb4da0da.png"},7127:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/palindrome-5471c0be3186a116d2932ff49e14135b.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var s=t(7294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);