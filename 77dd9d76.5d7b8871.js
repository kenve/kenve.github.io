(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return o}));var r=n(1),a=n(9),i=(n(0),n(201)),u={id:"queue",title:"\u961f\u5217 Queue"},l={id:"interview/data-structure/queue",title:"\u961f\u5217 Queue",description:"**\u961f\u5217**\uff0c\u53c8\u79f0\u4e3a**\u4f2b\u5217**\uff08Queue\uff09\uff0c\u9075\u5faa**\u5148\u8fdb\u5148\u51fa**\uff08FIFO, First-In-First-Out\uff09\u539f\u5219\u7684[\u7ebf\u6027\u8868](https://zh.wikipedia.org/wiki/%E7%BA%BF%E6%80%A7%E8%A1%A8)\u3002\u961f\u5217\u53ea\u5141\u8bb8\u5728\u540e\u7aef\uff08\u79f0\u4e3a rear\uff09\u8fdb\u884c\u63d2\u5165\u64cd\u4f5c\uff0c\u5728\u524d\u7aef\uff08\u79f0\u4e3a front\uff09\u8fdb\u884c\u5220\u9664\u64cd\u4f5c\u3002\u6700\u65b0\u6dfb\u52a0\u7684\u5143\u7d20\u5fc5\u987b\u6392\u5728\u961f\u5217\u7684\u672b\u5c3e\u3002",source:"@site/docs/interview/data-structure/queue.md",permalink:"/docs/interview/data-structure/queue",editUrl:"https://github.com/kenve/kenve.github.io/edit/docusaurus/docs/interview/data-structure/queue.md",sidebar:"interviewSideBar",previous:{title:"\u6808 Stack",permalink:"/docs/interview/data-structure/stack"},next:{title:"\u53cc\u7aef\u961f\u5217 Deque",permalink:"/docs/interview/data-structure/deque"}},c=[{value:"JavaScript \u4efb\u52a1\u961f\u5217",id:"javascript-\u4efb\u52a1\u961f\u5217",children:[]},{value:"\u521b\u5efa\u961f\u5217",id:"\u521b\u5efa\u961f\u5217",children:[]},{value:"\u4f7f\u7528\u961f\u5217",id:"\u4f7f\u7528\u961f\u5217",children:[]},{value:"\u65f6\u95f4\u590d\u6742\u5ea6",id:"\u65f6\u95f4\u590d\u6742\u5ea6",children:[]},{value:"\u5b9e\u8df5",id:"\u5b9e\u8df5",children:[{value:"\u5faa\u73af\u961f\u5217\u2014\u2014\u51fb\u9f13\u4f20\u82b1\u6e38\u620f",id:"\u5faa\u73af\u961f\u5217\u51fb\u9f13\u4f20\u82b1\u6e38\u620f",children:[]},{value:"\u66f4\u591a",id:"\u66f4\u591a",children:[]}]}],b={rightToc:c};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u961f\u5217"),"\uff0c\u53c8\u79f0\u4e3a",Object(i.b)("strong",{parentName:"p"},"\u4f2b\u5217"),"\uff08Queue\uff09\uff0c\u9075\u5faa",Object(i.b)("strong",{parentName:"p"},"\u5148\u8fdb\u5148\u51fa"),"\uff08FIFO, First-In-First-Out\uff09\u539f\u5219\u7684",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://zh.wikipedia.org/wiki/%E7%BA%BF%E6%80%A7%E8%A1%A8"}),"\u7ebf\u6027\u8868"),"\u3002\u961f\u5217\u53ea\u5141\u8bb8\u5728\u540e\u7aef\uff08\u79f0\u4e3a rear\uff09\u8fdb\u884c\u63d2\u5165\u64cd\u4f5c\uff0c\u5728\u524d\u7aef\uff08\u79f0\u4e3a front\uff09\u8fdb\u884c\u5220\u9664\u64cd\u4f5c\u3002\u6700\u65b0\u6dfb\u52a0\u7684\u5143\u7d20\u5fc5\u987b\u6392\u5728\u961f\u5217\u7684\u672b\u5c3e\u3002"),Object(i.b)("p",null,"\u5728\u73b0\u5b9e\u4e2d\uff0c\u6700\u5e38\u89c1\u7684\u961f\u5217\u7684\u4f8b\u5b50\u5c31\u662f\u6392\u961f\uff0c\u6392\u5728\u7b2c\u4e00\u4f4d\u7684\u4eba\u4f1a\u5148\u63a5\u53d7\u670d\u52a1\u3002\u5728\u8ba1\u7b97\u673a\u4e2d\uff0c\u4e00\u4e2a\u5e38\u89c1\u7684\u4f8b\u5b50\u5c31\u662f\u6253\u5370\u961f\u5217\u3002"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/queue.png",alt:"\u961f\u5217\u56fe"}))),Object(i.b)("h2",{id:"javascript-\u4efb\u52a1\u961f\u5217"},"JavaScript \u4efb\u52a1\u961f\u5217"),Object(i.b)("p",null,"\u5f53\u6211\u4eec\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u65b0\u6807\u7b7e\u65f6\uff0c\u5c31\u4f1a\u521b\u5efa\u4e00\u4e2a\u4efb\u52a1\u961f\u5217\u3002\u8fd9\u662f\u56e0\u4e3a\u6bcf\u4e2a\u6807\u7b7e\u90fd\u662f\u5355\u7ebf\u7a0b\u5904\u7406\u6240\u6709\u7684\u4efb\u52a1\uff0c\u79f0\u4e3a\u4e8b\u4ef6\u5faa\u73af\u3002\u6d4f\u89c8\u5668\u8981\u8d1f\u8d23\u591a\u4e2a\u4efb\u52a1\uff0c\u5982\u6e32\u67d3 HTML\u3001\u6267\u884c JavaScript \u4ee3\u7801\u3001 \u5904\u7406\u7528\u6237\u4ea4\u4e92(\u7528\u6237\u8f93\u5165\u3001\u9f20\u6807\u70b9\u51fb\u7b49)\u3001\u6267\u884c\u548c\u5904\u7406\u5f02\u6b65\u8bf7\u6c42\u3002\u66f4\u591a\u5730\u4e86\u89e3\uff0c\u8bbf\u95ee",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../js/eventloop.md"}),"\u4e8b\u4ef6\u5faa\u73af"),"\u3002"),Object(i.b)("h2",{id:"\u521b\u5efa\u961f\u5217"},"\u521b\u5efa\u961f\u5217"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u5b58\u50a8\u961f\u5217\u4e2d\u5143\u7d20\u7684\u6570\u636e\u7ed3\u6784\u6709\u5f88\u591a\u65b9\u5f0f\uff0c\u6bd4\u5982\uff1a\u6570\u7ec4\u3001\u94fe\u8868\u3001\u5bf9\u8c61\u7b49\u3002\u4e3a\u4e86\u83b7\u53d6\u5143\u7d20\u65f6\u66f4\u9ad8\u6548\u7684\u6570\u636e\u7ed3\u6784\uff0c\u8fd9\u91cc\u8fd8\u662f\u4f7f\u7528\u4e00\u4e2a\u5bf9\u8c61\u6765\u5b58\u5143\u7d20\u3002"),Object(i.b)("li",{parentName:"ul"},"\u8fd8\u9700\u8981\u58f0\u660e\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"li"},"count")," \u5c5e\u6027\u6765\u5e2e\u52a9\u6211\u4eec\u63a7\u5236\u961f\u5217\u7684\u5927\u5c0f\u3002\u6b64\u5916\uff0c\u7531\u4e8e\u6211\u4eec\u5c06\u8981\u4ece\u961f\u5217\u524d\u7aef\u79fb\u9664\u5143\u7d20\uff0c\u540c\u6837\u9700\u8981\u4e00\u4e2a\u53d8\u91cf ",Object(i.b)("inlineCode",{parentName:"li"},"lowestCount")," \u6765\u5e2e\u6211\u4eec\u8ffd\u8e2a\u7b2c\u4e00\u4e2a\u5143\u7d20\u3002")),Object(i.b)("p",null,"\u63a5\u4e0b\u6765\u9700\u8981\u58f0\u660e\u4e00\u4e9b\u961f\u5217\u53ef\u7528\u7684\u65b9\u6cd5\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"enqueue(element(s))"),"\uff1a\u5411\u961f\u5217\u5c3e\u90e8\u6dfb\u52a0\u4e00\u4e2a(\u6216\u591a\u4e2a)\u65b0\u7684\u9879\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dequeue()"),"\uff1a\u79fb\u9664\u961f\u5217\u7684\u7b2c\u4e00\u9879(\u5373\u6392\u5728\u961f\u5217\u6700\u524d\u9762\u7684\u9879)\u5e76\u8fd4\u56de\u88ab\u79fb\u9664\u7684\u5143\u7d20\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"peek()"),"\uff1a\u8fd4\u56de\u961f\u5217\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\uff08\u6700\u5148\u88ab\u6dfb\u52a0\uff09\uff0c\u4e5f\u5c06\u662f\u6700\u5148\u88ab\u79fb\u9664\u7684\u5143\u7d20\u3002\u961f\u5217\u4e0d\u505a\u4efb\u4f55\u53d8\u52a8(\u4e0d\u79fb\u9664\u5143\u7d20\uff0c\u53ea\u8fd4\u56de\u5143\u7d20\u4fe1\u606f\u2014\u2014\u4e0e Stack \u7c7b\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"peek")," \u65b9\u6cd5\u975e\u5e38\u7c7b\u4f3c)\u3002\u8be5\u65b9\u6cd5\u5728\u5176\u4ed6\u8bed\u8a00\u4e2d\u4e5f\u53ef\u4ee5\u53eb\u4f5c ",Object(i.b)("inlineCode",{parentName:"li"},"front")," \u65b9\u6cd5\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"isEmpty()"),"\uff1a\u5982\u679c\u961f\u5217\u4e2d\u4e0d\u5305\u542b\u4efb\u4f55\u5143\u7d20\uff0c\u8fd4\u56de ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"\uff0c\u5426\u5219\u8fd4\u56de ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"size()"),"\uff1a\u8fd4\u56de\u961f\u5217\u5305\u542b\u7684\u5143\u7d20\u4e2a\u6570\uff0c\u4e0e\u6570\u7ec4\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"length")," \u5c5e\u6027\u7c7b\u4f3c\u3002")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"class Queue {\n  constructor() {\n    this.count = 0;\n    this.lowestCount = 0;\n    this.items = {};\n  }\n  // \u6dfb\u52a0\u5143\u7d20\u5230\u540e\u7aef\uff08\u961f\u5c3e\uff09\n  enqueue(element) {\n    this.items[this.count] = element;\n    this.count++;\n  }\n  // \u4ece\u524d\u7aef\uff08\u961f\u5934\uff09\u79fb\u9664\u5143\u7d20\n  dequeue() {\n    if (this.isEmpty()) {\n      return undefined;\n    }\n    // \u6682\u5b58\u961f\u5217\u5934\u90e8\u7684\u503c\n    const result = this.items[this.lowestCount];\n    // \u79fb\u9664\n    delete this.items[this.lowestCount];\n    // \u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u4f4d\u7f6e\n    this.lowestCount++;\n    // \u8fd4\u56de\u503c\n    return result;\n  }\n  // \u67e5\u770b\u961f\u5217\u5934\u5143\u7d20\n  peek() {\n    if (this.isEmpty()) {\n      return undefined;\n    }\n    return this.items[this.lowestCount];\n  }\n  // \u68c0\u67e5\u961f\u5217\u662f\u5426\u4e3a\u7a7a\n  isEmpty() {\n    return this.count - this.lowestCount === 0;\n    // return this.size === 0;\n  }\n  // \u83b7\u53d6\u5b83\u7684\u957f\u5ea6\n  size() {\n    return this.count - this.lowestCount;\n  }\n  // \u6e05\u7a7a\u961f\u5217\n  clear() {\n    // \u91cd\u65b0\u8d4b\u503c\uff0c\u6216\u8005\u8c03\u7528 dequeue \u65b9\u6cd5\u76f4\u5230\u5b83\u8fd4\u56de undefined\n    this.items = {};\n    this.count = 0;\n    this.lowestCount = 0;\n  }\n  // \u8f6c\u4e3a\u5b57\u7b26\u4e32\n  toString() {\n    if (this.isEmpty()) {\n      return '';\n    }\n    let objString = `${this.items[this.lowestCount]}`;\n    for (let i = this.lowestCount + 1; i < this.count; i++) {\n      objString = `${objString}, ${this.items[i]}`;\n    }\n    return objString;\n  }\n}\n")),Object(i.b)("h2",{id:"\u4f7f\u7528\u961f\u5217"},"\u4f7f\u7528\u961f\u5217"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// \u5b9e\u4f8b\u5316\nconst queue = new Queue();\nconsole.log(queue.isEmpty()); // \u8f93\u51fa true\n// \u6dfb\u52a0\u4e00\u4e9b\u5143\u7d20\uff08\u6dfb\u52a0 'zhangsan' \u548c 'lisi' \u4e24\u4e2a\u5143\u7d20\u2014\u2014\u4f60\u53ef\u4ee5\u5411\u961f\u5217\u6dfb\u52a0\u4efb\u4f55\u7c7b\u578b\u7684\u5143\u7d20\uff09\u3002\nqueue.enqueue('zhangsan');\nqueue.enqueue('lisi');\nconsole.log(queue.toString()); // zhangsan, lisi\n// \u6dfb\u52a0\u53e6\u4e00\u4e2a\u5143\u7d20\u3002\nqueue.enqueue('kenve');\n// \u518d\u6267\u884c\u4e00\u4e9b\u5176\u4ed6\u547d\u4ee4\u3002\nconsole.log(queue.toString()); // zhangsan, lisi, kenve\nconsole.log(queue.size()); // \u8f93\u51fa 3\nconsole.log(queue.isEmpty()); // \u8f93\u51fa false\nqueue.dequeue(); // \u79fb\u9664 zhangsan\nqueue.dequeue(); // \u79fb\u9664 lisi\nconsole.log(queue.toString()); // kenve\n")),Object(i.b)("h2",{id:"\u65f6\u95f4\u590d\u6742\u5ea6"},"\u65f6\u95f4\u590d\u6742\u5ea6"),Object(i.b)("p",null,"Queue \u7528\u5927 O \u7b26\u53f7\u8868\u793a\u7684\u65f6\u95f4\u590d\u6742\u5ea6\uff1a"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u7b97\u6cd5"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u5e73\u5747"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u6700\u5dee"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u7a7a\u95f4"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"O(n)"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"O(n)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u641c\u7d22"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"O(n)"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"O(n)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u63d2\u5165"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"O(1)"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"O(1)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u5220\u9664"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"O(1)"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"O(1)")))),Object(i.b)("h2",{id:"\u5b9e\u8df5"},"\u5b9e\u8df5"),Object(i.b)("h3",{id:"\u5faa\u73af\u961f\u5217\u51fb\u9f13\u4f20\u82b1\u6e38\u620f"},"\u5faa\u73af\u961f\u5217\u2014\u2014\u51fb\u9f13\u4f20\u82b1\u6e38\u620f"),Object(i.b)("p",null,"\u5faa\u73af\u961f\u5217\u7684\u4e00\u4e2a\u4f8b\u5b50\u5c31\u662f\u51fb\u9f13\u4f20\u82b1\u6e38\u620f(hot potato)\u3002"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5728\u8fd9\u4e2a\u6e38\u620f\u4e2d\uff0c\u5b69\u5b50\u4eec\u56f4\u6210\u4e00\u4e2a\u5706\u5708\uff0c\u628a\u82b1\u5c3d\u5feb\u5730\u4f20\u9012\u7ed9\u65c1\u8fb9\u7684\u4eba\u3002\u67d0\u4e00\u65f6\u523b\u4f20\u82b1\u505c\u6b62\uff0c \u8fd9\u4e2a\u65f6\u5019\u82b1\u5728\u8c01\u624b\u91cc\uff0c\u8c01\u5c31\u9000\u51fa\u5706\u5708\u3001\u7ed3\u675f\u6e38\u620f\u3002\u91cd\u590d\u8fd9\u4e2a\u8fc7\u7a0b\uff0c\u76f4\u5230\u53ea\u5269\u4e00\u4e2a\u5b69\u5b50(\u80dc\u8005)\u3002")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/hot-potato.png",alt:"\u51fb\u9f13\u4f20\u82b1\u56fe"}))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function hotPotato(elementsList, num) {\n  const queue = new Queue();\n  const elimitatedList = [];\n  // \u628a\u53c2\u4e0e\u6e38\u620f\u7684\u540d\u5b57\u5168\u90fd\u52a0\u5165\u961f\u5217\n  for (let i = 0; i < elementsList.length; i++) {\n    queue.enqueue(elementsList[i]);\n  }\n  while (queue.size() > 1) {\n    // \u6839\u636e\u7ed9\u5b9a\u7684\u6570\u5b57 num\uff0c\u8fed\u4ee3\u961f\u5217\n    for (let i = 0; i < num; i++) {\n      // \u4ece\u961f\u5217\u5f00\u5934\u79fb\u9664\u4e00\u9879\uff0c\u518d\u5c06\u5176\u6dfb\u52a0\u5230\u961f\u5217\u672b\u5c3e\n      queue.enqueue(queue.dequeue());\n    }\n    // \u4e00\u65e6\u8fbe\u5230\u7ed9\u5b9a\u7684\u4f20\u9012\u6b21\u6570\uff0c\u62ff\u7740\u82b1\u7684\u90a3\u4e2a\u4eba\u5c31\u88ab\u6dd8\u6c70\u4e86(\u4ece\u961f\u5217\u4e2d\u79fb\u9664\uff09\n    elimitatedList.push(queue.dequeue());\n  }\n  // \u53ea\u5269\u6700\u540e\u4e00\u4eba\u65f6--\u83b7\u80dc\n  return {\n    eliminated: elimitatedList,\n    winner: queue.dequeue(),\n  };\n}\n")),Object(i.b)("p",null,"\u6267\u884c\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const names = ['kenve', 'zhangsan', 'lisi', 'wangwu', 'xiaoming'];\nconst result = hotPotato(names, 7);\nresult.eliminated.forEach((name) => {\n  console.log(`${name} \u5728\u51fb\u9f13\u4f20\u82b1\u4e2d\u88ab\u6dd8\u6c70\u3002`);\n});\nconsole.log(`\u80dc\u5229\u8005: ${result.winner}`);\n// \u4ee5\u4e0a\u7b97\u6cd5\u7684\u8f93\u51fa\u5982\u4e0b\n// lisi \u5728\u51fb\u9f13\u4f20\u82b1\u4e2d\u88ab\u6dd8\u6c70\u3002\n// zhangsan \u5728\u51fb\u9f13\u4f20\u82b1\u4e2d\u88ab\u6dd8\u6c70\u3002\n// xiaoming \u5728\u51fb\u9f13\u4f20\u82b1\u4e2d\u88ab\u6dd8\u6c70\u3002\n// wangwu \u5728\u51fb\u9f13\u4f20\u82b1\u4e2d\u88ab\u6dd8\u6c70\u3002\n// \u80dc\u5229\u8005: kenve\n")),Object(i.b)("h3",{id:"\u66f4\u591a"},"\u66f4\u591a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/kenve/leetcode/#%E9%98%9F%E5%88%97"}),"LeetCode \u961f\u5217\u76f8\u5173\u9898\u76ee"))))}o.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),o=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=o(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=o(n),O=r,m=s["".concat(u,".").concat(O)]||s[O]||p[O]||i;return n?a.a.createElement(m,l({ref:t},b,{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,u=new Array(i);u[0]=O;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,u[1]=l;for(var b=2;b<i;b++)u[b]=n[b];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);