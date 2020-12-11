(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{123:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return o}));var a=t(3),i=t(7),r=(t(0),t(159)),c={id:"stack",title:"\u6808 Stack"},b={unversionedId:"interview/data-structure/stack",id:"interview/data-structure/stack",isDocsHomePage:!1,title:"\u6808 Stack",description:"\u6808\uff08Stack\uff09\u53c8\u79f0\u4e3a\u5806\u6808\u6216\u5806\u53e0\uff0c\u662f\u4e00\u79cd\u9075\u4ece\u540e\u8fdb\u5148\u51fa\uff08LIFO\uff0cLast In First Out\uff09\u539f\u5219\u7684\u6709\u5e8f\u96c6\u5408\u3002\u65b0\u6dfb\u52a0\u6216\u5f85\u5220\u9664\u7684\u5143\u7d20\u90fd\u4fdd\u5b58\u5728\u6808\u7684\u540c\u4e00\u7aef\uff0c\u79f0\u4f5c\u6808\u9876\uff0c\u53e6\u4e00\u7aef\u5c31\u53eb\u6808\u5e95\u3002\u5728\u6808\u91cc\uff0c\u65b0\u5143\u7d20\u90fd\u9760\u8fd1\u6808\u9876\uff0c\u65e7\u5143\u7d20\u90fd\u63a5\u8fd1\u6808\u5e95\u3002",source:"@site/docs/interview/data-structure/stack.md",slug:"/interview/data-structure/stack",permalink:"/docs/interview/data-structure/stack",editUrl:"https://github.com/kenve/kenve.github.io/edit/docusaurus/docs/interview/data-structure/stack.md",version:"current",sidebar:"interviewSideBar",previous:{title:"\u624b\u5199\u4ee3\u7801",permalink:"/docs/interview/js/handwritten-code"},next:{title:"\u961f\u5217 Queue",permalink:"/docs/interview/data-structure/queue"}},l=[{value:"\u57fa\u4e8e\u6570\u7ec4\u5b9e\u73b0\u6808",id:"\u57fa\u4e8e\u6570\u7ec4\u5b9e\u73b0\u6808",children:[]},{value:"\u57fa\u4e8e\u5bf9\u8c61\u5b9e\u73b0\u6808",id:"\u57fa\u4e8e\u5bf9\u8c61\u5b9e\u73b0\u6808",children:[]},{value:"\u4fdd\u62a4\u6570\u636e\u7ed3\u6784\u5185\u90e8\u5143\u7d20",id:"\u4fdd\u62a4\u6570\u636e\u7ed3\u6784\u5185\u90e8\u5143\u7d20",children:[{value:"\u4e0b\u5212\u7ebf\u547d\u540d\u7ea6\u5b9a",id:"\u4e0b\u5212\u7ebf\u547d\u540d\u7ea6\u5b9a",children:[]},{value:"Symbol",id:"symbol",children:[]},{value:"WeakMap",id:"weakmap",children:[]},{value:"\u5176\u4ed6\u5b9e\u73b0\u79c1\u6709\u5c5e\u6027\u7684\u65b9\u5f0f",id:"\u5176\u4ed6\u5b9e\u73b0\u79c1\u6709\u5c5e\u6027\u7684\u65b9\u5f0f",children:[]}]},{value:"\u7528\u6808\u89e3\u51b3\u95ee\u9898",id:"\u7528\u6808\u89e3\u51b3\u95ee\u9898",children:[{value:"\u4ece\u5341\u8fdb\u5236\u5230\u4e8c\u8fdb\u5236",id:"\u4ece\u5341\u8fdb\u5236\u5230\u4e8c\u8fdb\u5236",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],s={rightToc:l};function o(e){var n=e.components,c=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,c,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u6808"),"\uff08Stack\uff09\u53c8\u79f0\u4e3a\u5806\u6808\u6216\u5806\u53e0\uff0c\u662f\u4e00\u79cd\u9075\u4ece",Object(r.b)("strong",{parentName:"p"},"\u540e\u8fdb\u5148\u51fa"),"\uff08LIFO\uff0cLast In First Out\uff09\u539f\u5219\u7684\u6709\u5e8f\u96c6\u5408\u3002\u65b0\u6dfb\u52a0\u6216\u5f85\u5220\u9664\u7684\u5143\u7d20\u90fd\u4fdd\u5b58\u5728\u6808\u7684\u540c\u4e00\u7aef\uff0c\u79f0\u4f5c",Object(r.b)("strong",{parentName:"p"},"\u6808\u9876"),"\uff0c\u53e6\u4e00\u7aef\u5c31\u53eb",Object(r.b)("strong",{parentName:"p"},"\u6808\u5e95"),"\u3002\u5728\u6808\u91cc\uff0c\u65b0\u5143\u7d20\u90fd\u9760\u8fd1\u6808\u9876\uff0c\u65e7\u5143\u7d20\u90fd\u63a5\u8fd1\u6808\u5e95\u3002"),Object(r.b)("p",null,"\u6808\u4e5f\u88ab\u7528\u5728\u7f16\u7a0b\u8bed\u8a00\u7684\u7f16\u8bd1\u5668\u548c\u5185\u5b58\u4e2d\u4fdd\u5b58\u53d8\u91cf\u3001\u65b9\u6cd5\u8c03\u7528\uff08\u51fd\u6570\u8c03\u7528\u6808\uff09\u7b49\uff0c\u4e5f\u88ab\u7528\u4e8e\u6d4f\u89c8\u5668\u5386\u53f2\u8bb0\u5f55 (\u6d4f\u89c8\u5668\u7684\u8fd4\u56de\u6309\u94ae)\u3002"),Object(r.b)("p",null,Object(r.b)("img",{alt:"\u6808\u793a\u610f\u56fe",src:t(309).default})),Object(r.b)("h2",{id:"\u57fa\u4e8e\u6570\u7ec4\u5b9e\u73b0\u6808"},"\u57fa\u4e8e\u6570\u7ec4\u5b9e\u73b0\u6808"),Object(r.b)("p",null,"\u6808\u58f0\u660e\u4e00\u4e9b\u65b9\u6cd5\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"push(element(s))"),"\uff1a\u6dfb\u52a0\u4e00\u4e2a\uff08\u6216\u51e0\u4e2a\uff09\u65b0\u5143\u7d20\u5230\u6808\u9876\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pop()"),"\uff1a\u79fb\u9664\u6808\u9876\u7684\u5143\u7d20\uff0c\u540c\u65f6\u8fd4\u56de\u88ab\u79fb\u9664\u7684\u5143\u7d20\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"peek()"),"\uff1a\u8fd4\u56de\u6808\u9876\u7684\u5143\u7d20\uff0c\u4e0d\u5bf9\u6808\u505a\u4efb\u4f55\u4fee\u6539\uff08\u8be5\u65b9\u6cd5\u4e0d\u4f1a\u79fb\u9664\u6808\u9876\u7684\u5143\u7d20\uff0c\u4ec5\u4ec5\u8fd4\u56de\u5b83\uff09\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"isEmpty()"),"\uff1a\u5982\u679c\u6808\u91cc\u6ca1\u6709\u4efb\u4f55\u5143\u7d20\u5c31\u8fd4\u56de ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"\uff0c\u5426\u5219\u8fd4\u56de ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"size()"),"\uff1a\u8fd4\u56de\u6808\u91cc\u7684\u5143\u7d20\u4e2a\u6570\u3002\u8be5\u65b9\u6cd5\u548c\u6570\u7ec4\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"length")," \u5c5e\u6027\u5f88\u7c7b\u4f3c\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"toString"),"\uff1a\u5c06\u6808\u7ed3\u6784\u91cc\u7684\u5143\u7d20\u4ee5\u5b57\u7b26\u4e32\u7684\u5f62\u5f0f\u8fd4\u56de\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"clear()"),"\uff1a\u79fb\u9664\u6808\u91cc\u7684\u6240\u6709\u5143\u7d20\u3002")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Stack {\n  constructor() {\n    this.items = []; // \u521d\u59cb\u5316\n  }\n  // \u5411\u6808\u6dfb\u52a0\u5143\u7d20\n  push(element) {\n    this.items.push(element);\n  }\n  // \u4ece\u6808\u79fb\u9664\u5143\u7d20\uff08\u6309 LIFO \u89c4\u5219\uff09\n  pop() {\n    return this.items.pop();\n  }\n  // \u67e5\u770b\u6808\u9876\u5143\u7d20\n  peek() {\n    return this.items[this.items.length - 1];\n  }\n  // \u6808\u662f\u5426\u4e3a\u7a7a\n  isEmpty() {\n    return this.items.length === 0;\n  }\n  // \u6808\u7684\u5143\u7d20\u4e2a\u6570\n  size() {\n    return this.items.length;\n  }\n  // \u6e05\u7a7a\u6808\u5143\u7d20\n  clear() {\n    this.items = [];\n    // \u6216\u8005\u5faa\u73af\u8c03\u7528 pop \u5220\u9664\n    // while (!this.isEmpty()) {\n    //   this.pop();\n    // }\n  }\n  // \u4ee5\u5b57\u7b26\u4e32\u5f62\u5f0f\u8fd4\u56de\u6808\u5185\u5bb9\n  toString() {\n    // \u76f4\u63a5\u7528 jonin \u6216\u8005\u4f7f\u7528 for \u5faa\u73af\n    return this.items.join();\n  }\n}\n")),Object(r.b)("h2",{id:"\u57fa\u4e8e\u5bf9\u8c61\u5b9e\u73b0\u6808"},"\u57fa\u4e8e\u5bf9\u8c61\u5b9e\u73b0\u6808"),Object(r.b)("p",null,"\u5728\u5904\u7406\u5927\u91cf\u6570\u636e\u7684\u65f6\u5019\uff0c\u6211\u4eec\u540c\u6837\u9700\u8981\u8bc4\u4f30\u5982\u4f55\u64cd\u4f5c\u6570\u636e\u662f\u6700\u9ad8\u6548\u7684\u3002\u5728\u4f7f\u7528\u6570\u7ec4\u65f6\uff0c\u5927\u90e8\u5206\u65b9\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662f O(n)\u3002\u4f7f\u7528\u5bf9\u8c61\u7684\u65b9\u5f0f\u5b9e\u73b0\u9664\u4e86 ",Object(r.b)("inlineCode",{parentName:"p"},"toString")," \u65b9\u6cd5\uff0c\u5176\u4ed6\u65b9\u6cd5\u7684\u590d\u6742\u5ea6\u5747\u4e3a O(1)\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Stack {\n  constructor() {\n    // count \u5c5e\u6027\u6765\u8bb0\u5f55\u6808\u7684\u5927\u5c0f\uff08\u4e5f\u80fd\u5f53\u4f5c key \u6765\u6dfb\u52a0\u548c\u5220\u9664\u5143\u7d20\uff09\n    this.count = 0;\n    // \u521d\u59cb\u5316\u50a8\u5b58\u5bf9\u8c61\n    this.items = {};\n  }\n  // \u5411\u6808\u6dfb\u52a0\u5143\u7d20\n  push(element) {\n    this.items[this.count] = element;\n    this.count++;\n  }\n  // \u4ece\u6808\u79fb\u9664\u5143\u7d20\uff08\u6309 LIFO \u89c4\u5219\uff09\n  pop() {\n    // \u5982\u679c\u6808\u4e3a\u7a7a\uff0c\u8fd4\u56de undefined\n    if (this.isEmpty()) {\n      return undefined;\n    }\n    // \u6bcf\u6b21 push \u7684\u65f6\u5019\u90fd\u4f1a count++\uff0c\u6240\u4ee5\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u9700\u8981\u5148 count--\n    this.count--;\n    // \u53d6\u51fa\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u503c\n    const result = this.items[this.count];\n    // \u5220\u9664\u8be5\u5143\u7d20\n    delete this.items[this.count];\n    // \u8fd4\u56de\u5143\u7d20\n    return result;\n  }\n  // \u67e5\u770b\u6808\u9876\u5143\u7d20\n  peek() {\n    if (this.isEmpty()) {\n      return undefined;\n    }\n    return this.items[this.count - 1];\n  }\n  // \u6808\u662f\u5426\u4e3a\u7a7a\n  isEmpty() {\n    return this.count === 0;\n  }\n  // \u6808\u7684\u5143\u7d20\u4e2a\u6570\n  size() {\n    return this.count;\n  }\n  // \u6e05\u7a7a\u6808\u5143\u7d20\n  clear() {\n    this.items = {};\n    this.count = 0;\n    // \u6216\u8005\u5faa\u73af\u8c03\u7528 pop \u5220\u9664\n    // while (!this.isEmpty()) {\n    //   this.pop();\n    // }\n  }\n  // \u4ee5\u5b57\u7b26\u4e32\u5f62\u5f0f\u8fd4\u56de\u6808\u5185\u5bb9\n  toString() {\n    if (this.isEmpty()) {\n      return '';\n    }\n    // \u7b2c\u4e00\u4e2a\u5143\u7d20\n    let objString = `${this.items[0]}`;\n    for (let i = 1; i < this.count; i++) {\n      objString = `${objString},${this.items[i]}`;\n    }\n    return objString;\n  }\n}\n")),Object(r.b)("h2",{id:"\u4fdd\u62a4\u6570\u636e\u7ed3\u6784\u5185\u90e8\u5143\u7d20"},"\u4fdd\u62a4\u6570\u636e\u7ed3\u6784\u5185\u90e8\u5143\u7d20"),Object(r.b)("p",null,"\u5bf9\u8c61\u5916\u90e8\u80fd\u83b7\u53d6\u5bf9\u8c61\u91cc\u9762\u7684\u5c5e\u6027\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"console.log(Object.getOwnPropertyNames(stack));\nconsole.log(Object.keys(stack));\nconsole.log(stack.items);\n")),Object(r.b)("h3",{id:"\u4e0b\u5212\u7ebf\u547d\u540d\u7ea6\u5b9a"},"\u4e0b\u5212\u7ebf\u547d\u540d\u7ea6\u5b9a"),Object(r.b)("p",null,"\u5728\u5c5e\u6027\u540d\u79f0\u4e4b\u524d\u52a0\u4e0a\u4e00\u4e2a\u4e0b\u5212\u7ebf(",Object(r.b)("inlineCode",{parentName:"p"},"_"),")\u6765\u6807\u8bb0\u4e00\u4e2a\u5c5e\u6027\u4e3a\u79c1\u6709\u5c5e\u6027\u3002\u8fd9\u79cd\u65b9\u5f0f\u53ea\u662f\u4e00\u79cd\u7ea6\u5b9a\uff0c\u5e76\u4e0d\u80fd\u771f\u6b63\u4fdd\u62a4\u79c1\u6709\u6570\u636e\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{3,4}","{3,4}":!0}),"class Stack {\n  constructor() {\n    this._count = 0;\n    this._items = {};\n  }\n}\n")),Object(r.b)("h3",{id:"symbol"},"Symbol"),Object(r.b)("p",null,"ES6 \u4e2d\u65b0\u589e\u4e86 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol"}),"Symbol")," \u7684\u57fa\u672c\u7c7b\u578b\uff0c\u5b83\u662f\u4e0d\u53ef\u53d8\u7684\uff0c\u53ef\u4ee5\u7528\u4f5c\u5bf9\u8c61\u7684\u5c5e\u6027\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{4,6}","{4,6}":!0}),"class Stack {\n  constructor() {\n    // \u58f0\u660e\u4e86 Symbol \u7c7b\u578b\u7684\u53d8\u91cf _items\n    const _items = Symbol('stackItems');\n    // \u521d\u59cb\u5316\n    this[_items] = [];\n  }\n  // \u6808\u7684\u65b9\u6cd5\uff0c\u628a this.items \u90fd\u6362\u6210 this[_items]\n}\n")),Object(r.b)("p",null,"\u4f46\u8fd9\u8fd8\u662f\u80fd\u88ab ",Object(r.b)("inlineCode",{parentName:"p"},"Object.getOwnPropertySymbols(stack);")," \u83b7\u53d6\u3002"),Object(r.b)("h3",{id:"weakmap"},"WeakMap"),Object(r.b)("p",null,"\u6709\u4e00\u79cd\u6570\u636e\u7c7b\u578b\u53ef\u4ee5\u786e\u4fdd\u5c5e\u6027\u662f\u79c1\u6709\u7684\uff0c\u8fd9\u5c31\u662f WeakMap\u3002 WeakMap \u53ef\u4ee5\u5b58\u50a8\u952e\u503c\u5bf9\uff0c\u5176\u4e2d\u952e\u662f\u5bf9\u8c61\uff0c\u503c\u53ef\u4ee5\u662f\u4efb\u610f\u6570\u636e\u7c7b\u578b\u3002"),Object(r.b)("p",null,"\u7528 WeakMap \u6765\u5b58\u50a8 items \u5c5e\u6027(\u6570\u7ec4\u7248\u672c)\uff0cStack \u7c7b\u5c31\u662f\u8fd9\u6837\u7684\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// \u58f0\u660e\u4e00\u4e2a WeakMap \u7c7b\u578b\u7684\u53d8\u91cf items\nconst items = new WeakMap();\nclass Stack {\n  constructor() {\n    // \u4ee5 this(Stack \u7c7b\u81ea\u5df1\u7684\u5f15\u7528)\u4e3a\u952e\uff0c\u628a\u4ee3\u8868\u6808\u7684\u6570\u7ec4\u5b58\u5165 items\n    items.set(this, []);\n  }\n  // \u6dfb\u52a0\n  push(element) {\n    // \u4ece WeakMap \u4e2d\u53d6\u51fa\u503c\uff0c\u5373\u4ee5 this \u4e3a\u952e\u4ece items \u4e2d\u53d6\u503c\n    const s = items.get(this);\n    // \u52a0\u5230\u6808 s \u4e2d\n    s.push(element);\n  }\n  // \u79fb\u9664\n  pop() {\n    const s = items.get(this);\n    const r = s.pop();\n    return r;\n  }\n  // \u5176\u4ed6\u65b9\u6cd5\n}\n")),Object(r.b)("p",null,"\u91c7\u7528\u8fd9\u79cd\u65b9\u6cd5\uff0c\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u4e0d\u5f3a\uff0c\u800c\u4e14\u5728\u6269\u5c55\u8be5\u7c7b\u65f6\u65e0\u6cd5\u7ee7\u627f\u79c1\u6709\u5c5e\u6027\u3002\u9c7c\u548c\u718a\u638c\u4e0d\u53ef\u517c\u5f97\uff01"),Object(r.b)("h3",{id:"\u5176\u4ed6\u5b9e\u73b0\u79c1\u6709\u5c5e\u6027\u7684\u65b9\u5f0f"},"\u5176\u4ed6\u5b9e\u73b0\u79c1\u6709\u5c5e\u6027\u7684\u65b9\u5f0f"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"TypeScript \u63d0\u4f9b\u4e86\u4e00\u4e2a\u7ed9\u7c7b\u5c5e\u6027\u548c\u65b9\u6cd5\u4f7f\u7528\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"private")," \u4fee\u9970\u7b26\u3002\u7136\u800c\uff0c\u8be5\u4fee\u9970\u7b26\u53ea\u5728\u7f16\u8bd1\u65f6\u6709\u7528\u3002\u5728\u4ee3\u7801\u88ab\u8f6c\u6362\u5b8c\u6210\u540e\uff0c\u5c5e\u6027\u540c\u6837\u662f\u516c\u5f00\u7684\u3002"),Object(r.b)("li",{parentName:"ul"},"JavaScript \u7c7b\u4e2d\u589e\u52a0\u79c1\u6709\u5c5e\u6027\u7684\u63d0\u6848\uff0c\u5728\u5c5e\u6027\u524d\u6dfb\u52a0\u4e95\u53f7(#)\u4f5c\u4e3a\u524d\u7f00\u6765\u58f0\u660e\u79c1\u6709\u5c5e\u6027\u3002",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/tc39/proposal-class-fields"}),"\u67e5\u770b\u63d0\u6848\u8be6\u60c5"),"\u3002")),Object(r.b)("h2",{id:"\u7528\u6808\u89e3\u51b3\u95ee\u9898"},"\u7528\u6808\u89e3\u51b3\u95ee\u9898"),Object(r.b)("p",null,"\u6808\u7684\u5b9e\u9645\u5e94\u7528\u975e\u5e38\u5e7f\u6cdb\u3002\u5728\u56de\u6eaf\u95ee\u9898\u4e2d\uff0c\u5b83\u53ef\u4ee5\u5b58\u50a8\u8bbf\u95ee\u8fc7\u7684\u4efb\u52a1\u6216\u8def\u5f84\u3001\u64a4\u9500\u7684\u64cd\u4f5c\u3002\u8bb8\u591a\u7f16\u7a0b\u8bed\u8a00\u90fd\u7528\u6808\u6765\u5b58\u50a8\u53d8\u91cf\u548c\u65b9\u6cd5\u8c03\u7528\uff0c\u7279\u522b\u662f\u5904\u7406\u9012\u5f52\u7b97\u6cd5\u65f6\uff0c\u6709\u53ef\u80fd\u629b\u51fa\u4e00\u4e2a\u6808\u6ea2\u51fa\u5f02\u5e38\u3002"),Object(r.b)("h3",{id:"\u4ece\u5341\u8fdb\u5236\u5230\u4e8c\u8fdb\u5236"},"\u4ece\u5341\u8fdb\u5236\u5230\u4e8c\u8fdb\u5236"),Object(r.b)("p",null,"\u5982\u679c\u8981\u628a\u5341\u8fdb\u5236\u8f6c\u5316\u6210\u4e8c\u8fdb\u5236\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u8be5\u5341\u8fdb\u5236\u6570\u9664\u4ee5 ",Object(r.b)("inlineCode",{parentName:"p"},"2"),"\uff08\u4e8c\u8fdb\u5236\u662f\u6ee1\u4e8c\u8fdb\u4e00\uff09\u5e76\u5bf9\u5546\u53d6\u6574\uff0c \u76f4\u5230\u7ed3\u679c\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"0")," \u4e3a\u6b62\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u628a\u5341\u8fdb\u5236\u7684\u6570 ",Object(r.b)("inlineCode",{parentName:"p"},"10")," \u8f6c\u5316\u6210\u4e8c\u8fdb\u5236\u7684\u6570\u5b57\uff0c\u8fc7\u7a0b\u5927\u6982\u662f\u5982\u4e0b\u8fd9\u6837\uff1a"),Object(r.b)("p",null,Object(r.b)("img",{alt:"\u5341\u8fdb\u5236\u8f6c\u4e8c\u8fdb\u5236",src:t(310).default})),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function decimalToBinary(decNumber) {\n  // \u5b9e\u4f8b\u5316\u6808\u5bf9\u8c61\n  const remStack = new Stack();\n  // \u5341\u8fdb\u5236\u6570\u5b57\n  let number = decNumber;\n  // \u4f59\u6570\n  let rem;\n  // \u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\n  let binaryString = '';\n  // \u5f53\u4f59\u6570\u4e0d\u4e3a 0 \u65f6\u5faa\u73af\n  while (number > 0) {\n    // \u5f53\u9664\u6cd5\u7684\u7ed3\u679c\u4e0d\u4e3a 0 \u65f6\uff0c\u5f97\u5230\u4e00\u4e2a\u4f59\u6570\n    rem = Math.floor(number % 2);\n    // \u5e76\u653e\u5230\u6808\u91cc\n    remStack.push(rem);\n    // \u7136\u540e\u8ba9\u7ed3\u679c\u7ee7\u7eed\u9664\u4ee5 2\uff0c\u76f4\u5230 number \u4e3a 0\n    number = Math.floor(number / 2);\n  }\n  // \u6700\u540e\uff0c\u7528 pop \u65b9\u6cd5\u628a\u6808\u4e2d\u7684\u5143\u7d20\u90fd\u79fb\u9664\uff0c\u628a\u51fa\u6808\u7684\u5143\u7d20\u8fde\u63a5\u6210\u5b57\u7b26\u4e32\n  while (!remStack.isEmpty()) {\n    binaryString += remStack.pop().toString();\n  }\n  // \u8fd4\u56de\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\n  return binaryString;\n}\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"\u8bf7\u6ce8\u610f")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"JavaScript \u6709\u6570\u503c\u7c7b\u578b\uff0c\u4f46\u662f\u5b83\u4e0d\u4f1a\u533a\u5206\u6574\u6570\u548c\u6d6e\u70b9\u6570\u3002\u56e0\u6b64\uff0c\u8981\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"Math.floor")," \u51fd\u6570\u4ec5\u8fd4\u56de\u9664\u6cd5\u8fd0\u7b97\u7ed3\u679c\u7684\u6574\u6570\u90e8\u5206\u3002"))),Object(r.b)("h4",{id:"\u8fdb\u5236\u8f6c\u6362\u7b97\u6cd5"},"\u8fdb\u5236\u8f6c\u6362\u7b97\u6cd5"),Object(r.b)("p",null,"\u4fee\u6539\u4e4b\u524d\u7684\u5341\u8fdb\u5236\u8f6c\u4e8c\u8fdb\u5236\u7b97\u6cd5\uff0c\u4f7f\u4e4b\u80fd\u628a\u5341\u8fdb\u5236\u8f6c\u6362\u6210\u57fa\u6570\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"2~36")," \u7684\u4efb\u610f\u8fdb\u5236\u3002\u9664\u4e86\u628a\u5341\u8fdb\u5236\u6570\u9664\u4ee5 ",Object(r.b)("inlineCode",{parentName:"p"},"2")," \u8f6c\u6210\u4e8c\u8fdb\u5236\u6570\uff0c\u8fd8\u53ef\u4ee5\u4f20\u5165\u5176\u4ed6\u4efb\u610f\u8fdb\u5236\u7684\u57fa\u6570\u4e3a\u53c2\u6570\u3002",Object(r.b)("br",{parentName:"p"}),"\n","\u6211\u4eec\u53ea\u9700\u8981\u6539\u53d8\u4e00\u4e2a\u5730\u65b9\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5728\u5c06\u5341\u8fdb\u5236\u8f6c\u6210\u4e8c\u8fdb\u5236\u65f6\uff0c\u4f59\u6570\u662f ",Object(r.b)("inlineCode",{parentName:"li"},"0")," \u6216 ",Object(r.b)("inlineCode",{parentName:"li"},"1"),"\uff1b"),Object(r.b)("li",{parentName:"ul"},"\u5728\u5c06\u5341\u8fdb\u5236\u8f6c\u6210\u516b\u8fdb\u5236\u65f6\uff0c\u4f59\u6570\u662f ",Object(r.b)("inlineCode",{parentName:"li"},"0~7"),";"),Object(r.b)("li",{parentName:"ul"},"\u4f46\u662f\u5c06\u5341\u8fdb\u5236\u8f6c\u6210\u5341\u516d\u8fdb\u5236\u65f6\uff0c\u4f59\u6570\u662f ",Object(r.b)("inlineCode",{parentName:"li"},"0~9")," \u52a0\u4e0a ",Object(r.b)("inlineCode",{parentName:"li"},"A"),"\u3001",Object(r.b)("inlineCode",{parentName:"li"},"B"),"\u3001",Object(r.b)("inlineCode",{parentName:"li"},"C"),"\u3001",Object(r.b)("inlineCode",{parentName:"li"},"D"),"\u3001",Object(r.b)("inlineCode",{parentName:"li"},"E")," \u548c ",Object(r.b)("inlineCode",{parentName:"li"},"F"),"(\u5bf9\u5e94 ",Object(r.b)("inlineCode",{parentName:"li"},"10"),"\u3001",Object(r.b)("inlineCode",{parentName:"li"},"11"),"\u3001",Object(r.b)("inlineCode",{parentName:"li"},"12"),"\u3001",Object(r.b)("inlineCode",{parentName:"li"},"13"),"\u3001",Object(r.b)("inlineCode",{parentName:"li"},"14")," \u548c ",Object(r.b)("inlineCode",{parentName:"li"},"15"),")\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u5bf9\u6808\u4e2d\u7684\u6570\u5b57\u505a\u4e2a\u8f6c\u5316\u624d\u53ef\u4ee5(\u884c{3}\u548c\u884c{16})\u3002\u6240\u4ee5\uff0c\u4ece\u5341\u4e00\u8fdb\u5236\u5f00\u59cb\uff0c\u5b57\u6bcd\u8868\u4e2d\u7684\u6bcf\u4e2a\u5b57\u6bcd\u5c06\u8868\u793a\u76f8\u5e94\u7684\u57fa\u6570\u3002\u5b57\u6bcd ",Object(r.b)("inlineCode",{parentName:"li"},"A")," \u4ee3\u8868\u57fa\u6570 ",Object(r.b)("inlineCode",{parentName:"li"},"11"),"\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"B")," \u4ee3\u8868 \u57fa\u6570 ",Object(r.b)("inlineCode",{parentName:"li"},"12"),"\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{7,20}","{7,20}":!0}),"/**\n * @params {integer} decNumber \u5f85\u8f6c\u6362\u5341\u8fdb\u5236\u6570\n * @params {integer} base \u8981\u8f6c\u6210\u7684\u8fdb\u5236\n * @returns {string} \u8f6c\u6362\u540e\u7684\u503c\n */\nfunction baseConverter(decNumber, base) {\n  const remStack = new Stack();\n  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // {3}\n  let number = decNumber;\n  let rem;\n  let baseString = '';\n  if (!(base >= 2 && base <= 36)) {\n    return '';\n  }\n  while (number > 0) {\n    rem = Math.floor(number % base);\n    remStack.push(rem);\n    number = Math.floor(number / base);\n  }\n  while (!remStack.isEmpty()) {\n    baseString += digits[remStack.pop()]; // {16}\n  }\n  return baseString;\n}\n")),Object(r.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u6808"),"\u662f\u4e00\u79cd\u8fd0\u7b97\u53d7\u9650\u7684\u7ebf\u6027\u8868\uff0c\u9075\u4ece",Object(r.b)("strong",{parentName:"p"},"\u540e\u8fdb\u5148\u51fa(LIFO)"),"\u539f\u5219\u7684\u6709\u5e8f\u96c6\u5408\uff0c\u5373\u9650\u5b9a\u4ec5\u5728\u8868\u5c3e\u8fdb\u884c\u63d2\u5165\u548c\u5220\u9664\u64cd\u4f5c\u3002\u5b9e\u73b0\u6808\u6570\u636e\u7ed3\u6784\u7684\u65b9\u5f0f\u5f88\u591a\uff0c\u5982\uff1a\u6570\u7ec4\u3001JavaScript \u5bf9\u8c61\u3001\u94fe\u8868\u7b49\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/kenve/leetcode#%E6%A0%88"}),"LeetCode \u6808\u76f8\u5173\u7684\u9898\u76ee"))))}o.isMDXComponent=!0},159:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return O}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),o=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},p=function(e){var n=o(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=o(t),u=a,O=p["".concat(c,".").concat(u)]||p[u]||m[u]||r;return t?i.a.createElement(O,b(b({ref:n},s),{},{components:t})):i.a.createElement(O,b({ref:n},s))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=u;var b={};for(var l in n)hasOwnProperty.call(n,l)&&(b[l]=n[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var s=2;s<r;s++)c[s]=t[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},309:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/stack-63169cc55ecdfe052d5d06ec9bb40f73.png"},310:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/binary-87681a447c52e939336fe93c124723ca.png"}}]);