(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{224:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return o}));var a=n(1),r=n(9),s=(n(0),n(229)),i={id:"set",title:"\u96c6\u5408 Set"},l={id:"interview/data-structure/set",title:"\u96c6\u5408 Set",description:"\u96c6\u5408\uff08Set\uff09\u662f\u7531\u4e00\u7ec4\u65e0\u5e8f\u4e14\u552f\u4e00(\u5373\u4e0d\u80fd\u91cd\u590d)\u7684\u9879\uff08\u4e5f\u53ef\u80fd\u662f 0 \u4e2a\uff09\u7ec4\u6210\u7684\u3002\u8be5\u6570\u636e\u7ed3\u6784\u4f7f\u7528\u4e86\u4e0e\u6709\u9650\u96c6\u5408\u76f8\u540c\u7684\u6570\u5b66\u6982\u5ff5\uff0c\u4f46\u5e94\u7528\u5728\u8ba1\u7b97\u673a\u79d1\u5b66\u7684\u6570\u636e\u7ed3\u6784\u4e2d\u3002",source:"@site/docs/interview/data-structure/set.md",permalink:"/docs/interview/data-structure/set",editUrl:"https://github.com/kenve/kenve.github.io/edit/docusaurus/docs/interview/data-structure/set.md",sidebar:"interviewSideBar",previous:{title:"\u94fe\u8868 LinkedList",permalink:"/docs/interview/data-structure/linked-list"},next:{title:"\u5b57\u5178\u548c\u6563\u5217\u8868",permalink:"/docs/interview/data-structure/dictionary-and-hashtable"}},b=[{value:"\u5b9e\u73b0\u96c6\u5408\u7c7b",id:"\u5b9e\u73b0\u96c6\u5408\u7c7b",children:[{value:"\u6d4b\u8bd5 Set \u7c7b",id:"\u6d4b\u8bd5-set-\u7c7b",children:[]}]},{value:"\u96c6\u5408\u8fd0\u7b97",id:"\u96c6\u5408\u8fd0\u7b97",children:[{value:"\u5e76\u96c6",id:"\u5e76\u96c6",children:[]},{value:"\u4ea4\u96c6",id:"\u4ea4\u96c6",children:[]},{value:"\u5dee\u96c6",id:"\u5dee\u96c6",children:[]},{value:"\u5b50\u96c6",id:"\u5b50\u96c6",children:[]}]},{value:"Set \u7c7b\u7684\u5b8c\u6574\u4ee3\u7801",id:"set-\u7c7b\u7684\u5b8c\u6574\u4ee3\u7801",children:[]},{value:"ES6 \u4e2d\u7684 Set \u7c7b",id:"es6-\u4e2d\u7684-set-\u7c7b",children:[{value:"ES6 Set \u7c7b\u7684\u8fd0\u7b97",id:"es6-set-\u7c7b\u7684\u8fd0\u7b97",children:[]}]}],c={rightToc:b};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\u96c6\u5408"),"\uff08Set\uff09\u662f\u7531\u4e00\u7ec4\u65e0\u5e8f\u4e14\u552f\u4e00(\u5373\u4e0d\u80fd\u91cd\u590d)\u7684\u9879\uff08\u4e5f\u53ef\u80fd\u662f 0 \u4e2a\uff09\u7ec4\u6210\u7684\u3002\u8be5\u6570\u636e\u7ed3\u6784\u4f7f\u7528\u4e86\u4e0e\u6709\u9650\u96c6\u5408\u76f8\u540c\u7684\u6570\u5b66\u6982\u5ff5\uff0c\u4f46\u5e94\u7528\u5728\u8ba1\u7b97\u673a\u79d1\u5b66\u7684\u6570\u636e\u7ed3\u6784\u4e2d\u3002"),Object(s.b)("p",null,"\u5728\u6570\u5b66\u4e2d\uff0c\u96c6\u5408\u662f\u4e00\u7ec4\u4e0d\u540c\u5bf9\u8c61\u7684\u96c6\uff0c\u6bd4\u5982\u8bf4\uff0c\u4e00\u4e2a\u7531\u5927\u4e8e\u6216\u7b49\u4e8e ",Object(s.b)("inlineCode",{parentName:"p"},"0")," \u7684\u6574\u6570\u7ec4\u6210\u7684\u81ea\u7136\u6570\u96c6\uff1a",Object(s.b)("inlineCode",{parentName:"p"},"N = {0, 1, 2, 3, 4, 5, 6, ...}"),"\u3002\u96c6\u5408\u4e2d\u7684\u5bf9\u8c61\u5217\u8868\u7528\u82b1\u62ec\u53f7\uff08",Object(s.b)("inlineCode",{parentName:"p"},"{}"),"\uff09\u5305\u56f4\u3002\u800c\u4e0d\u5305\u542b\u4efb\u4f55\u5143\u7d20\u7684\u96c6\u5408\u53eb\u505a",Object(s.b)("strong",{parentName:"p"},"\u7a7a\u96c6"),"\uff0c\u7a7a\u96c6\u7528 ",Object(s.b)("inlineCode",{parentName:"p"},"{ }")," \u8868\u793a\u3002"),Object(s.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"\u53ef\u4ee5\u628a\u96c6\u5408\u60f3\u8c61\u6210\u4e00\u4e2a\u65e2\u6ca1\u6709\u91cd\u590d\u5143\u7d20\uff0c\u4e5f\u6ca1\u6709\u987a\u5e8f\u6982\u5ff5\u7684\u6570\u7ec4\u3002"))),Object(s.b)("h2",{id:"\u5b9e\u73b0\u96c6\u5408\u7c7b"},"\u5b9e\u73b0\u96c6\u5408\u7c7b"),Object(s.b)("p",null,"\u8fd9\u91cc\u4f7f\u7528\u5bf9\u8c61\u800c\u4e0d\u662f\u6570\u7ec4\u6765\u8868\u793a\u96c6\u5408(",Object(s.b)("inlineCode",{parentName:"p"},"items"),")\uff0c\u56e0\u4e3a JavaScript \u7684\u5bf9\u8c61\u4e0d\u5141\u8bb8\u4e00\u4e2a\u952e\u6307\u5411\u4e24\u4e2a\u4e0d\u540c\u7684\u5c5e\u6027\uff0c\u4e5f\u4fdd\u8bc1\u4e86\u96c6\u5408\u91cc\u7684\u5143\u7d20\u90fd\u662f\u552f\u4e00\u7684\u3002\u5f53\u7136\u4e5f\u53ef\u4ee5\u7528\u6570\u7ec4\u5b9e\u73b0\u3002"),Object(s.b)("p",null,"\u9700\u8981\u58f0\u660e\u4e00\u4e9b\u96c6\u5408\u53ef\u7528\u7684\u65b9\u6cd5\uff1a"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"add(element)"),"\uff1a\u5411\u96c6\u5408\u6dfb\u52a0\u4e00\u4e2a\u65b0\u5143\u7d20\u3002"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"delete(element)"),"\uff1a\u4ece\u96c6\u5408\u79fb\u9664\u4e00\u4e2a\u5143\u7d20\u3002"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"has(element)"),"\uff1a\u5982\u679c\u5143\u7d20\u5728\u96c6\u5408\u4e2d\uff0c\u8fd4\u56de ",Object(s.b)("inlineCode",{parentName:"li"},"true"),"\uff0c\u5426\u5219\u8fd4\u56de ",Object(s.b)("inlineCode",{parentName:"li"},"false"),"\u3002"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"clear()"),"\uff1a\u79fb\u9664\u96c6\u5408\u4e2d\u7684\u6240\u6709\u5143\u7d20\u3002"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"size()"),"\uff1a\u8fd4\u56de\u96c6\u5408\u6240\u5305\u542b\u5143\u7d20\u7684\u6570\u91cf\u3002\u5b83\u4e0e\u6570\u7ec4\u7684 ",Object(s.b)("inlineCode",{parentName:"li"},"length")," \u5c5e\u6027\u7c7b\u4f3c\u3002"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"values()"),"\uff1a\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u96c6\u5408\u4e2d\u6240\u6709\u503c(\u5143\u7d20)\u7684\u6570\u7ec4\u3002")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Set {\n  constructor() {\n    this.items = {};\n  }\n\n  /**\n   * \u6dfb\u52a0\u5143\u7d20\n   */\n  add(element) {\n    // \u8c03\u7528 has \u65b9\u6cd5\u5224\u65ad element \u662f\u5426\u5b58\u5728\u4e8e\u96c6\u5408\u4e2d\n    if (!this.has(element)) {\n      // \u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5c31\u628a element \u6dfb\u52a0\u5230\u96c6\u5408\u4e2d\n      // \u6dfb\u52a0 element \u7684\u65f6\u5019\uff0c\u540c\u65f6\u4f5c\u4e3a\u952e\u548c\u503c\u4fdd\u5b58\uff0c\u8fd9\u6837\u6709\u5229\u4e8e\u67e5\u627e\u8be5\u5143\u7d20\n      this.items[element] = element;\n      // \u8fd4\u56de true \u8868\u793a\u6dfb\u52a0\u6210\u529f\n      return true;\n    }\n    // \u8fd4\u56de false \u8868\u793a\u672a\u6dfb\u52a0\u6210\u529f\n    return false;\n  }\n\n  /**\n   * \u5220\u9664\u5143\u7d20\n   */\n  delete(element) {\n    // \u662f\u5426\u5b58\u5728\n    if (this.has(element)) {\n      // \u5b58\u5728\uff0c\u79fb\u9664\n      delete this.items[element];\n      return true;\n    }\n    // \u4e0d\u5b58\u5728\n    return false;\n  }\n\n  /**\n   * \u68c0\u9a8c\u67d0\u4e2a\u5143\u7d20\u662f\u5426\u5b58\u5728\u4e8e\u96c6\u5408\u4e2d\n   */\n  has(element) {\n    // \u65b9\u6cd5\u4e00\uff1a\u7528 JavaScript \u7684 in \u8fd0\u7b97\u7b26\u6765\u9a8c\u8bc1\u7ed9\u5b9a\u5143\u7d20\u662f\u5426\u662f items \u5bf9\u8c61\u7684\u5c5e\u6027\n    // return element in items;\n    // \u65b9\u6cd5\u4e8c\uff1ahasOwnProperty \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u8868\u660e\u5bf9\u8c61\u662f\u5426\u5177\u6709\u7279\u5b9a\u5c5e\u6027\u7684\u5e03\u5c14\u503c\uff0c\u800c in \u4f1a\u5728\u539f\u578b\u94fe\u4e0a\u67e5\u627e\n    return Object.prototype.hasOwnProperty.call(this.items, element);\n  }\n\n  /**\n   * \u83b7\u53d6\u6240\u6709\u5143\u7d20\u503c\n   */\n  values() {\n    // \u7b2c\u4e00\u79cd\uff1a\u8fed\u4ee3 items \u5bf9\u8c61\u7684\u81ea\u8eab\u6240\u6709\u5c5e\u6027\uff08hasOwnProperty(key)\uff0c\u628a\u5b83\u4eec\u6dfb\u52a0\u5230\u4e00\u4e2a\u6570\u7ec4\u4e2d\u5e76\u8fd4\u56de\n    // \u7b2c\u4e8c\u79cd\uff1aObject.values()\u65b9\u6cd5\u8fd4\u56de\u4e86\u4e00\u4e2a\u5305\u542b\u7ed9\u5b9a\u5bf9\u8c61\u6240\u6709\u5c5e\u6027\u503c\u7684\u6570\u7ec4\uff08ES2017 \u6dfb\u52a0\uff09\n    // \u4f7f\u7528 Object \u7c7b\u5185\u7f6e\u7684 values \u65b9\u6cd5\n    return Object.values(this.items);\n  }\n\n  /**\n   * \u83b7\u53d6\u96c6\u5408\u4e2d\u6709\u5143\u7d20\u4e2a\u6570\n   */\n  size() {\n    // \u7b2c\u4e00\u79cd\u65b9\u5f0f\u662f\u4f7f\u7528\u4e00\u4e2a length \u53d8\u91cf\uff0c\u6bcf\u5f53\u4f7f\u7528 add \u6216 delete \u65b9\u6cd5\u65f6\u5c31\u63a7\u5236\u5b83\n    // \u7b2c\u4e8c\u79cd\u7b2c\u4e09\u79cd\u65b9\u5f0f\u662f\u8fed\u4ee3 items \u5bf9\u8c61\u7684\u6bcf\u4e00\u4e2a\u5c5e\u6027\uff0c\u7edf\u8ba1\u4e2a\u6570\u3002\uff08hasOwnProperty(key)\u5224\u65ad\u5f53\u524d\u5bf9\u8c61\u5c5e\u6027\uff09\n    // \u7b2c\u4e09\u79cd\u65b9\u5f0f\u662f\u4f7f\u7528 Object \u7c7b\u7684\u4e00\u4e2a ES6 \u4e2d\u7684 keys \u65b9\u6cd5\n    // keys \u65b9\u6cd5\uff0c\u5b83\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u7ed9\u5b9a\u5bf9\u8c61\u6240\u6709\u5c5e\u6027\u7684\u6570\u7ec4\u3002\u96c6\u5408\u5143\u7d20\u4e2a\u6570\u8fd9\u4e2a\u6570\u7ec4\u7684 length\n    return Object.keys(this.items).length;\n  }\n\n  /**\n   * \u79fb\u9664\u96c6\u5408\u4e2d\u7684\u6240\u6709\u503c\n   */\n  clear() {\n    // 1. \u53ef\u4ee5\u8fed\u4ee3\u96c6\u5408\uff0c\u7528 delete \u65b9\u6cd5\u4f9d\u6b21\u79fb\u9664\u6240\u6709\u7684\u503c\n    // 2. \u91cd\u65b0\u8d4b\u503c\u4e3a\u7a7a\u5bf9\u8c61\n    this.items = {};\n  }\n}\n")),Object(s.b)("h3",{id:"\u6d4b\u8bd5-set-\u7c7b"},"\u6d4b\u8bd5 Set \u7c7b"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const set = new Set();\n\nset.add(1);\nconsole.log(set.values()); // \u8f93\u51fa [1]\nconsole.log(set.has(1)); // \u8f93\u51fa true\nconsole.log(set.size()); // \u8f93\u51fa 1\n\nset.add(2);\nconsole.log(set.values()); // \u8f93\u51fa [1, 2]\nconsole.log(set.has(2)); // \u8f93\u51fa true\nconsole.log(set.size()); // \u8f93\u51fa 2\n\nset.delete(1);\nconsole.log(set.values()); // \u8f93\u51fa [2]\n\nset.delete(2);\nconsole.log(set.values()); // \u8f93\u51fa []\n")),Object(s.b)("h2",{id:"\u96c6\u5408\u8fd0\u7b97"},"\u96c6\u5408\u8fd0\u7b97"),Object(s.b)("p",null,"\u96c6\u5408\u88ab\u7528\u4e8e\u5173\u7cfb\u6570\u636e\u5e93\u67e5\u8be2\u7684\u8bbe\u8ba1\u548c\u5904\u7406\uff0c\u5982\uff1a\u83b7\u53d6\u67d0\u8868\u4e2d\u5168\u90e8\u6570\u636e\u8fd8\u662f\u83b7\u53d6\u5176\u4e2d\u7684\u5b50\u96c6\uff1bSQL \u8054\u8868\u67e5\u8be2\u7684\u57fa\u7840\u4e5f\u662f\u96c6\u5408\u8fd0\u7b97\u3002",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.sql-join.com/sql-join-types"}),"SQL \u6269\u5c55"),"\u3002"),Object(s.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5bf9\u96c6\u5408\u8fdb\u884c\u5982\u4e0b\u8fd0\u7b97\uff1a"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"\u5e76\u96c6\uff1a\u5bf9\u4e8e\u7ed9\u5b9a\u7684\u4e24\u4e2a\u96c6\u5408\uff0c\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u4e24\u4e2a\u96c6\u5408\u4e2d\u6240\u6709\u5143\u7d20\u7684\u65b0\u96c6\u5408\u3002"),Object(s.b)("li",{parentName:"ul"},"\u4ea4\u96c6\uff1a\u5bf9\u4e8e\u7ed9\u5b9a\u7684\u4e24\u4e2a\u96c6\u5408\uff0c\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u4e24\u4e2a\u96c6\u5408\u4e2d\u5171\u6709\u5143\u7d20\u7684\u65b0\u96c6\u5408\u3002"),Object(s.b)("li",{parentName:"ul"},"\u5dee\u96c6\uff1a\u5bf9\u4e8e\u7ed9\u5b9a\u7684\u4e24\u4e2a\u96c6\u5408\uff0c\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6240\u6709\u5b58\u5728\u4e8e\u7b2c\u4e00\u4e2a\u96c6\u5408\u4e14\u4e0d\u5b58\u5728\u4e8e\u7b2c\u4e8c\u4e2a\u96c6\n\u5408\u7684\u5143\u7d20\u7684\u65b0\u96c6\u5408\u3002"),Object(s.b)("li",{parentName:"ul"},"\u5b50\u96c6\uff1a\u9a8c\u8bc1\u4e00\u4e2a\u7ed9\u5b9a\u96c6\u5408\u662f\u5426\u662f\u53e6\u4e00\u96c6\u5408\u7684\u5b50\u96c6\u3002")),Object(s.b)("h3",{id:"\u5e76\u96c6"},"\u5e76\u96c6"),Object(s.b)("p",null,"\u4e24\u4e2a\u96c6\u5408\u53ef\u4ee5\u76f8\u201d\u52a0\u201c\u3002",Object(s.b)("em",{parentName:"p"},"A")," \u548c ",Object(s.b)("em",{parentName:"p"},"B")," \u7684\u5e76\u96c6\u662f\u5c06 ",Object(s.b)("em",{parentName:"p"},"A")," \u548c ",Object(s.b)("em",{parentName:"p"},"B")," \u7684\u5143\u7d20\u653e\u5230\u4e00\u8d77\u6784\u6210\u7684\u65b0\u96c6\u5408\u3002"),Object(s.b)("p",null,"\u96c6\u5408 ",Object(s.b)("em",{parentName:"p"},"A")," \u548c\u96c6\u5408 ",Object(s.b)("em",{parentName:"p"},"B")," \u7684\u5e76\u96c6\u8868\u793a\u5982\u4e3a ",Object(s.b)("em",{parentName:"p"},"A")," \u222a ",Object(s.b)("em",{parentName:"p"},"B"),"\u3002"),Object(s.b)("p",{style:{"text-align":"center"}},Object(s.b)("img",{src:"/img/set-union-definition.png",width:"30%",alt:"\u5e76\u96c6\u5b9a\u4e49"})),Object(s.b)("p",null,"\u610f\u601d\u662f\u5143\u7d20 ",Object(s.b)("em",{parentName:"p"},"x")," \u5b58\u5728\u4e8e ",Object(s.b)("em",{parentName:"p"},"A")," \u4e2d\uff0c\u6216 ",Object(s.b)("em",{parentName:"p"},"x")," \u5b58\u5728\u4e8e ",Object(s.b)("em",{parentName:"p"},"B")," \u4e2d\u3002\u4e0b\u56fe\u5c55\u793a\u4e86\u5e76\u96c6\u8fd0\u7b97:"),Object(s.b)("p",null,Object(s.b)("img",Object(a.a)({parentName:"p"},{src:"/img/set-union.png",alt:"\u5e76\u96c6"}))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\u5728 ",Object(s.b)("inlineCode",{parentName:"strong"},"Set")," \u7c7b\u4e2d\u5b9e\u73b0\u5e76\u96c6\u7684\u65b9\u6cd5 ",Object(s.b)("inlineCode",{parentName:"strong"},"union"))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Set {\n  // \u7701\u7565\u5df2\u7ecf\u5b9a\u4e49\u7684\u65b9\u6cd5\n  /**\n   * \u5e76\u96c6\n   */\n  union(otherSet) {\n    // \u9996\u5148\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u96c6\u5408\uff0c\u4ee3\u8868\u4e24\u4e2a\u96c6\u5408\u7684\u5e76\u96c6\uff08\u4e0d\u66f4\u6539\u539f\u6709\u96c6\u5408\uff09\n    const unionSet = new Set();\n    // \u83b7\u53d6\u7b2c\u4e00\u4e2a\u96c6\u5408\uff08\u5f53\u524d\u7684 Set \u7c7b\u5b9e\u4f8b\uff09\u6240\u6709\u7684\u503c\uff08values\uff09\n    // \u8fed\u4ee3\u5e76\u5168\u90e8\u6dfb\u52a0\u5230\u4ee3\u8868\u5e76\u96c6\u7684\u96c6\u5408 unionSet \u4e2d\n    this.values().forEach((value) => unionSet.add(value));\n    // \u7136\u540e\u5bf9\u7b2c\u4e8c\u4e2a\u96c6\u5408\u540c\u6837\u904d\u5386\u6dfb\u52a0\u5230\u5e76\u96c6\u7684\u96c6\u5408 unionSet \u4e2d\n    otherSet.values().forEach((value) => unionSet.add(value));\n    // \u6700\u540e\u8fd4\u56de\u7ed3\u679c\n    return unionSet;\n  }\n}\n")),Object(s.b)("p",null,"\u6d4b\u8bd5\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const setA = new Set();\nsetA.add(1);\nsetA.add(2);\nsetA.add(3);\n\nconst setB = new Set();\nsetB.add(3);\nsetB.add(4);\nsetB.add(5);\nsetB.add(6);\nconst unionAB = setA.union(setB);\nconsole.log(unionAB.values());\n")),Object(s.b)("p",null,"\u8f93\u51fa\u4e3a ",Object(s.b)("inlineCode",{parentName:"p"},"[1, 2, 3, 4, 5, 6]"),"\u3002\u6ce8\u610f\u5143\u7d20\u540c\u65f6\u5b58\u5728\u4e8e ",Object(s.b)("inlineCode",{parentName:"p"},"setA")," \u548c ",Object(s.b)("inlineCode",{parentName:"p"},"setB")," \u4e2d\uff0c\u5b83\u5728\u7ed3\u679c\u96c6\u5408\u4e2d\u53ea\u51fa\u73b0\u4e00\u6b21\u3002"),Object(s.b)("h3",{id:"\u4ea4\u96c6"},"\u4ea4\u96c6"),Object(s.b)("p",null,'\u4e00\u4e2a\u65b0\u7684\u96c6\u5408\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4e24\u4e2a\u96c6\u5408"\u5171"\u6709\u7684\u5143\u7d20\u6765\u6784\u9020\u3002',Object(s.b)("em",{parentName:"p"},"A")," \u548c ",Object(s.b)("em",{parentName:"p"},"B")," \u7684\u4ea4\u96c6\uff0c\u662f\u65e2\u5c5e\u4e8e ",Object(s.b)("em",{parentName:"p"},"A"),"\u7684\u3001\u53c8\u5c5e\u4e8e ",Object(s.b)("em",{parentName:"p"},"B")," \u7684\u6240\u6709\u5143\u7d20\u7ec4\u6210\u7684\u96c6\u5408\u3002"),Object(s.b)("p",{style:{"text-align":"center"}},Object(s.b)("img",{src:"/img/set-intersection-definition.png",width:"30%",alt:"\u4ea4\u96c6\u5b9a\u4e49"})),Object(s.b)("p",null,"\u610f\u601d\u662f\u5143\u7d20 ",Object(s.b)("em",{parentName:"p"},"x")," \u5b58\u5728\u4e8e ",Object(s.b)("em",{parentName:"p"},"A")," \u4e2d\uff0c\u4e14 ",Object(s.b)("em",{parentName:"p"},"x")," \u5b58\u5728\u4e8e ",Object(s.b)("em",{parentName:"p"},"B")," \u4e2d\u3002\u4e0b\u56fe\u5c55\u793a\u4e86\u4ea4\u96c6\u8fd0\u7b97\uff1a"),Object(s.b)("p",null,Object(s.b)("img",Object(a.a)({parentName:"p"},{src:"/img/set-intersection.png",alt:"\u4ea4\u96c6"}))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\u5b9e\u73b0 ",Object(s.b)("inlineCode",{parentName:"strong"},"Set")," \u7c7b\u7684 ",Object(s.b)("inlineCode",{parentName:"strong"},"intersection")," \u65b9\u6cd5")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Set {\n  /**\n   * \u4ea4\u96c6\n   */\n  intersection(otherSet) {\n    // \u9700\u8981\u627e\u5230\u5f53\u524d Set \u5b9e\u4f8b\u4e2d\u6240\u6709\u4e5f\u5b58\u5728\u4e8e\u7ed9\u5b9a Set \u5b9e\u4f8b\uff08otherSet\uff09\u4e2d\u7684\u5143\u7d20\n    // \u65b0\u7684\u96c6\u5408\u6765\u5b58\u653e intersection \u65b9\u6cd5\u7684\u8fd4\u56de\u7ed3\u679c\n    const intersectionSet = new Set();\n    // \u83b7\u53d6\u5f53\u524d\u96c6\u5408\u5b9e\u4f8b\u4e2d\u7684\u503c\n    const values = this.values();\n    // \u83b7\u53d6\u5176\u4ed6\u96c6\u5408\u5b9e\u4f8b\u4e2d\u7684\u503c\n    const otherValues = otherSet.values();\n    // \u5047\u8bbe\u5f53\u524d\u7684\u96c6\u5408 biggerSet \u5143\u7d20\u8f83\u591a\n    let biggerSet = values;\n    // \u53e6\u4e00\u4e2a\u96c6\u5408 smallerSet \u5143\u7d20\u8f83\u5c11\n    let smallerSet = otherValues;\n    // \u6bd4\u8f83\u4e24\u4e2a\u96c6\u5408\u7684\u5143\u7d20\u4e2a\u6570\n    if (otherValues.length - values.length > 0) {\n      // \u5982\u679c\u53e6\u4e00\u4e2a\u96c6\u5408\u5143\u7d20\u4e2a\u6570\u591a\u4e8e\u5f53\u524d\u96c6\u5408\u7684\u8bdd\uff0c\u4ea4\u6362 biggerSet \u548c smallerSet \u7684\u503c\n      biggerSet = otherValues;\n      smallerSet = values;\n    }\n    // \u8fed\u4ee3\u8f83\u5c0f\u96c6\u5408\u6765\u8ba1\u7b97\u51fa\u4e24\u4e2a\u96c6\u5408\u7684\u5171\u6709\u5143\u7d20\u5e76\u8fd4\u56de\n    smallerSet.forEach((value) => {\n      if (biggerSet.includes(value)) {\n        intersectionSet.add(value);\n      }\n    });\n    return intersectionSet;\n  }\n}\n")),Object(s.b)("p",null,"\u6d4b\u8bd5\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const setA = new Set();\nsetA.add(1);\nsetA.add(2);\nsetA.add(3);\n\nconst setB = new Set();\nsetB.add(2);\nsetB.add(3);\nsetB.add(4);\nconst intersectionAB = setA.intersection(setB);\nconsole.log(intersectionAB.values());\n")),Object(s.b)("p",null,"\u8f93\u51fa\u4e3a ",Object(s.b)("inlineCode",{parentName:"p"},"[2, 3]"),"\uff0c\u56e0\u4e3a ",Object(s.b)("inlineCode",{parentName:"p"},"2")," \u548c ",Object(s.b)("inlineCode",{parentName:"p"},"3")," \u540c\u65f6\u5b58\u5728\u4e8e\u4e24\u4e2a\u96c6\u5408\u4e2d\u3002"),Object(s.b)("h3",{id:"\u5dee\u96c6"},"\u5dee\u96c6"),Object(s.b)("p",null,'\u4e24\u4e2a\u96c6\u5408\u4e5f\u53ef\u4ee5\u76f8"\u51cf"\u3002',Object(s.b)("em",{parentName:"p"},"A")," \u5728 ",Object(s.b)("em",{parentName:"p"},"B")," \u4e2d\u7684\u76f8\u5bf9\u8865\u96c6\uff0c\u96c6\u5408 A \u548c\u96c6\u5408 B \u7684\u5dee\u96c6\u8868\u793a\u4e3a ",Object(s.b)("em",{parentName:"p"},"A")," - ",Object(s.b)("em",{parentName:"p"},"B"),"\u3002\u5b9a\u4e49\u5982\u4e0b:"),Object(s.b)("p",{style:{"text-align":"center"}},Object(s.b)("img",{src:"/img/set-difference-definition.png",width:"30%",alt:"\u5dee\u96c6\u5b9a\u4e49"})),Object(s.b)("p",null,"\u610f\u601d\u662f\u5143\u7d20 ",Object(s.b)("em",{parentName:"p"},"x")," \u5b58\u5728\u4e8e ",Object(s.b)("em",{parentName:"p"},"A")," \u4e2d\uff0c\u4e14 ",Object(s.b)("em",{parentName:"p"},"x")," \u4e0d\u5b58\u5728\u4e8e ",Object(s.b)("em",{parentName:"p"},"B")," \u4e2d\u3002\u4e0b\u56fe\u5c55\u793a\u4e86\u96c6\u5408 ",Object(s.b)("em",{parentName:"p"},"A")," \u548c\u96c6\u5408 ",Object(s.b)("em",{parentName:"p"},"B")," \u7684\u5dee\u96c6\u8fd0\u7b97:"),Object(s.b)("img",{src:"/img/set-difference.svg",width:"500px",alt:"\u5dee\u96c6"}),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\u73b0\u5728\u6765\u5b9e\u73b0 ",Object(s.b)("inlineCode",{parentName:"strong"},"Set")," \u7c7b\u7684 ",Object(s.b)("inlineCode",{parentName:"strong"},"difference")," \u65b9\u6cd5")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Set {\n  /**\n   * \u5dee\u96c6\n   */\n  difference(otherSet) {\n    // difference \u65b9\u6cd5\u4f1a\u5f97\u5230\u6240\u6709\u5b58\u5728\u4e8e\u96c6\u5408 A \u4f46\u4e0d\u5b58\u5728\u4e8e\u96c6\u5408 B \u7684\u5143\u7d20\n    // \u521b\u5efa\u7ed3\u679c\u96c6\u5408\n    const differenceSet = new Set();\n    // \u8981\u8fed\u4ee3\u96c6\u5408\u4e2d\u7684\u6240\u6709\u503c\n    this.values().forEach((value) => {\n      // \u68c0\u67e5\u5f53\u524d\u503c(\u5143\u7d20)\u662f\u5426\u5b58 \u5728\u4e8e\u7ed9\u5b9a\u96c6\u5408\u4e2d\uff0c\n      if (!otherSet.has(value)) {\n        // \u5982\u679c\u4e0d\u5b58\u5728\u4e8e otherSet \u4e2d\uff0c\u5219\u5c06\u6b64\u503c\u52a0\u5165\u7ed3\u679c\u96c6\u5408\u4e2d\xce\n        differenceSet.add(value);\n      }\n    });\n    return differenceSet;\n  }\n}\n")),Object(s.b)("p",null,"\u6d4b\u8bd5\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const setA = new Set();\nsetA.add(1);\nsetA.add(2);\nsetA.add(3);\n\nconst setB = new Set();\nsetB.add(2);\nsetB.add(3);\nsetB.add(4);\nconst differenceAB = setA.difference(setB);\nconsole.log(differenceAB.values());\n")),Object(s.b)("p",null,"\u8f93\u51fa\u4e3a ",Object(s.b)("inlineCode",{parentName:"p"},"[1]"),"\uff0c\u56e0\u4e3a ",Object(s.b)("inlineCode",{parentName:"p"},"1")," \u662f\u552f\u4e00\u4e00\u4e2a\u4ec5\u5b58\u5728\u4e8e ",Object(s.b)("inlineCode",{parentName:"p"},"setA")," \u7684\u5143\u7d20\u3002\u5982\u679c\u6211\u4eec\u6267\u884c ",Object(s.b)("inlineCode",{parentName:"p"},"setB.difference(setA)"),"\uff0c\u4f1a\u5f97\u5230 ",Object(s.b)("inlineCode",{parentName:"p"},"[4]")," \u4f5c\u4e3a\u8f93\u51fa\u7ed3\u679c\uff0c\u56e0\u4e3a ",Object(s.b)("inlineCode",{parentName:"p"},"4")," \u662f\u53ea\u5b58\u5728\u4e8e ",Object(s.b)("inlineCode",{parentName:"p"},"setB")," \u4e2d\u7684\u5143\u7d20\u3002"),Object(s.b)("h3",{id:"\u5b50\u96c6"},"\u5b50\u96c6"),Object(s.b)("p",null,"\u4f8b\u5982\u96c6\u5408 ",Object(s.b)("em",{parentName:"p"},"A")," \u662f\u96c6\u5408 ",Object(s.b)("em",{parentName:"p"},"B")," \u7684\u5b50\u96c6(\u6216\u96c6\u5408 ",Object(s.b)("em",{parentName:"p"},"B")," \u5305\u542b\u96c6\u5408 ",Object(s.b)("em",{parentName:"p"},"A"),")\uff0c\u8868\u793a\uff1a ",Object(s.b)("em",{parentName:"p"},"A")," \u2286 ",Object(s.b)("em",{parentName:"p"},"B"),"\u3002\u96c6\u5408\u5b9a\u4e49\u5982\u4e0b\uff1a"),Object(s.b)("p",{style:{"text-align":"center"}},Object(s.b)("img",{src:"/img/set-subset-definition.png",width:"30%",alt:"\u5b50\u96c6\u5b9a\u4e49"})),Object(s.b)("p",null,"\u610f\u601d\u662f\u96c6\u5408 ",Object(s.b)("em",{parentName:"p"},"A")," \u4e2d\u7684\u6bcf\u4e00\u4e2a ",Object(s.b)("em",{parentName:"p"},"x")," (\u5143\u7d20)\uff0c\u4e5f\u9700\u8981\u5b58\u5728\u4e8e\u96c6\u5408 ",Object(s.b)("em",{parentName:"p"},"B")," \u4e2d\u3002\u4e0b\u56fe\u5c55\u793a\u4e86\u96c6\u5408 ",Object(s.b)("em",{parentName:"p"},"A")," \u662f\u96c6\u5408 ",Object(s.b)("em",{parentName:"p"},"B")," \u7684\u5b50\u96c6\u3002"),Object(s.b)("img",{src:"/img/set-subset.svg",width:"350px",alt:"\u5dee\u96c6"}),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\u73b0\u5728\u6765\u5b9e\u73b0 ",Object(s.b)("inlineCode",{parentName:"strong"},"Set")," \u7c7b\u7684 ",Object(s.b)("inlineCode",{parentName:"strong"},"isSubsetOf")," \u65b9\u6cd5")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Set {\n  /**\n   * \u5b50\u96c6\n   */\n  isSubsetOf(otherSet) {\n    // \u9996\u5148\u9700\u8981\u9a8c\u8bc1\u7684\u662f\u5f53\u524d Set \u5b9e\u4f8b\u7684\u5927\u5c0f\u3002\n    // \u5982\u679c\u5f53\u524d\u5b9e\u4f8b\u4e2d\u7684\u5143\u7d20\u6bd4 otherSet \u5b9e\u4f8b\u66f4\u591a\uff0c\u5b83\u5c31\u4e0d\u662f\u4e00\u4e2a\u5b50\u96c6\n    // \u5b50\u96c6\u7684\u5143\u7d20\u4e2a\u6570\u9700\u8981\u5c0f\u4e8e\u6216\u7b49\u4e8e\u8981\u6bd4\u8f83\u7684\u96c6\u5408\n    if (this.size() > otherSet.size()) {\n      return false;\n    }\n    // \u5982\u679c\u5f53\u524d\u5b9e\u4f8b\u662f\u7ed9\u5b9a\u96c6\u5408\u7684\u5b50\u96c6\n    let isSubset = true;\n    // \u8fed\u4ee3\u5f53\u524d\u96c6\u5408\u7684\u6240\u6709\u5143\u7d20\n    this.values().every((value) => {\n      // \u9a8c\u8bc1\u8fd9\u4e9b\u5143\u7d20\u662f\u5426\u4e5f\u5b58\u5728\u4e8e otherSet \u4e2d\n      if (!otherSet.has(value)) {\n        // \u5982\u679c\u6709\u4efb\u4f55\u5143\u7d20\u4e0d\u5b58\u5728\u4e8e otherSet \u4e2d\uff0c\u5c31\u610f\u5473\u7740\u5b83\u4e0d\u662f\u4e00\u4e2a\u5b50\u96c6\uff0c\u8fd4\u56de false\n        isSubset = false;\n        return false;\n      }\n      // \u5982\u679c\u6240\u6709\u5143\u7d20\u90fd\u5b58\u5728\u4e8e otherSet \u4e2d\uff0c\u90a3\u4e48\u5c31\u8fd4\u56de true\n      return true;\n    });\n    return isSubset;\n  }\n}\n")),Object(s.b)("p",null,"\u6d4b\u8bd5\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const setA = new Set();\nsetA.add(1);\nsetA.add(2);\n\nconst setB = new Set();\nsetB.add(1);\nsetB.add(2);\nsetB.add(3);\n\nconst setC = new Set();\nsetC.add(2);\nsetC.add(3);\nsetC.add(4);\nconsole.log(setA.isSubsetOf(setB));\nconsole.log(setA.isSubsetOf(setC));\n")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"setA")," \u662f ",Object(s.b)("inlineCode",{parentName:"p"},"setB")," \u7684\u5b50\u96c6(\u56e0\u6b64\u8f93\u51fa\u4e3a ",Object(s.b)("inlineCode",{parentName:"p"},"true"),")\uff0c\u7136\u800c ",Object(s.b)("inlineCode",{parentName:"p"},"setA")," \u4e0d\u662f ",Object(s.b)("inlineCode",{parentName:"p"},"setC")," \u7684\u5b50\u96c6\n(",Object(s.b)("inlineCode",{parentName:"p"},"setC")," \u53ea\u5305\u542b\u4e86 ",Object(s.b)("inlineCode",{parentName:"p"},"setA")," \u4e2d\u7684 ",Object(s.b)("inlineCode",{parentName:"p"},"2"),"\uff0c\u800c\u4e0d\u5305\u542b ",Object(s.b)("inlineCode",{parentName:"p"},"1"),")\uff0c\u56e0\u6b64\u8f93\u51fa\u4e3a ",Object(s.b)("inlineCode",{parentName:"p"},"false"),"\u3002"),Object(s.b)("h2",{id:"set-\u7c7b\u7684\u5b8c\u6574\u4ee3\u7801"},"Set \u7c7b\u7684\u5b8c\u6574\u4ee3\u7801"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export default class Set {\n  constructor() {\n    this.items = {};\n  }\n\n  add(element) {\n    if (!this.has(element)) {\n      this.items[element] = element;\n      return true;\n    }\n    return false;\n  }\n\n  delete(element) {\n    if (this.has(element)) {\n      delete this.items[element];\n      return true;\n    }\n    return false;\n  }\n\n  has(element) {\n    return Object.prototype.hasOwnProperty.call(this.items, element);\n  }\n\n  values() {\n    return Object.values(this.items);\n  }\n\n  union(otherSet) {\n    const unionSet = new Set();\n    this.values().forEach((value) => unionSet.add(value));\n    otherSet.values().forEach((value) => unionSet.add(value));\n    return unionSet;\n  }\n\n  intersection(otherSet) {\n    const intersectionSet = new Set();\n    const values = this.values();\n    const otherValues = otherSet.values();\n    let biggerSet = values;\n    let smallerSet = otherValues;\n    if (otherValues.length - values.length > 0) {\n      biggerSet = otherValues;\n      smallerSet = values;\n    }\n    smallerSet.forEach((value) => {\n      if (biggerSet.includes(value)) {\n        intersectionSet.add(value);\n      }\n    });\n    return intersectionSet;\n  }\n\n  difference(otherSet) {\n    const differenceSet = new Set();\n    this.values().forEach((value) => {\n      if (!otherSet.has(value)) {\n        differenceSet.add(value);\n      }\n    });\n    return differenceSet;\n  }\n\n  isSubsetOf(otherSet) {\n    if (this.size() > otherSet.size()) {\n      return false;\n    }\n    let isSubset = true;\n    this.values().every((value) => {\n      if (!otherSet.has(value)) {\n        isSubset = false;\n        return false;\n      }\n      return true;\n    });\n    return isSubset;\n  }\n\n  isEmpty() {\n    return this.size() === 0;\n  }\n\n  size() {\n    return Object.keys(this.items).length;\n  }\n\n  clear() {\n    this.items = {};\n  }\n\n  toString() {\n    if (this.isEmpty()) {\n      return '';\n    }\n    const values = this.values();\n    let objString = `${values[0]}`;\n    for (let i = 1; i < values.length; i++) {\n      objString = `${objString}, ${values[i].toString()}`;\n    }\n    return objString;\n  }\n}\n")),Object(s.b)("h2",{id:"es6-\u4e2d\u7684-set-\u7c7b"},"ES6 \u4e2d\u7684 Set \u7c7b"),Object(s.b)("p",null,"\u5728 ES6 \u4e2d\u65b0\u589e\u4e86 ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set"}),"Set")," \u7c7b\u548c\u524d\u9762\u5b9a\u4e49\u7684 ",Object(s.b)("inlineCode",{parentName:"p"},"Set")," \u4e0d\u540c\uff1a"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"ES6 \u7684 ",Object(s.b)("inlineCode",{parentName:"li"},"Set")," \u7684 ",Object(s.b)("inlineCode",{parentName:"li"},"values")," \u65b9\u6cd5\u8fd4\u56de ",Object(s.b)("inlineCode",{parentName:"li"},"Iterator"),"\uff0c\u800c\u4e0d\u662f\u503c\u6784\u6210\u7684\u6570\u7ec4\u3002"),Object(s.b)("li",{parentName:"ul"},"\u53e6\u4e00\u4e2a\u533a\u522b\u662f\uff0c\u6211\u4eec\u5b9e\u73b0\u7684 ",Object(s.b)("inlineCode",{parentName:"li"},"size")," \u65b9\u6cd5\u8fd4\u56de ",Object(s.b)("inlineCode",{parentName:"li"},"set")," \u4e2d\u5b58\u50a8\u7684\u503c\u7684\u4e2a\u6570\uff0c\u800c ES6 \u7684 ",Object(s.b)("inlineCode",{parentName:"li"},"Set")," \u5219\u6709\u4e00\u4e2a ",Object(s.b)("inlineCode",{parentName:"li"},"size")," \u5c5e\u6027\u3002")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const set = new Set();\nset.add(1);\nconsole.log(set.values()); // \u8f93\u51fa@Iterator\nconsole.log(set.has(1)); // \u8f93\u51fa true\nconsole.log(set.size); // \u8f93\u51fa 1\nset.delete(1); // \u7528 delete \u65b9\u6cd5\u5220\u9664 set \u4e2d\u7684\u5143\u7d20\nset.clear(); // \u6e05\u9664\u6240\u6709\u6210\u5458\uff0c\u6ca1\u6709\u8fd4\u56de\u503c\n")),Object(s.b)("h3",{id:"es6-set-\u7c7b\u7684\u8fd0\u7b97"},"ES6 Set \u7c7b\u7684\u8fd0\u7b97"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Set")," \u7c7b\u5b9e\u73b0\u4e86\u5e76\u96c6\u3001\u4ea4\u96c6\u3001\u5dee\u96c6\u3001\u5b50\u96c6\u7b49\u6570\u5b66\u8fd0\u7b97\uff0c\u7136\u800c ES2015 \u539f\u751f\u7684 ",Object(s.b)("inlineCode",{parentName:"p"},"Set")," \u5e76\u6ca1\u6709\u8fd9\u4e9b\u529f\u80fd\u3002\u4e0d\u8fc7\u4e5f\u53ef\u4ee5\u6a21\u62df\u3002\u6bd4\u5982\u6709\u4e0b\u9762\u4e24\u4e2a\u96c6\u5408\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const setA = new Set();\nsetA.add(1);\nsetA.add(2);\nsetA.add(3);\n\nconst setB = new Set();\nsetB.add(2);\nsetB.add(3);\nsetB.add(4);\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"1. \u6a21\u62df\u5e76\u96c6\u8fd0\u7b97")),Object(s.b)("p",null,"\u521b\u5efa\u4e00\u4e2a\u51fd\u6570\uff0c\u6765\u8fd4\u56de\u5305\u542b ",Object(s.b)("inlineCode",{parentName:"p"},"setA")," \u548c ",Object(s.b)("inlineCode",{parentName:"p"},"setB")," \u4e2d\u6240\u6709\u7684\u5143\u7d20\u7684\u65b0\u96c6\u5408\u3002\u8fed\u4ee3\u8fd9\u4e24\u4e2a\u96c6\n\u5408\uff0c\u628a\u6240\u6709\u5143\u7d20\u90fd\u6dfb\u52a0\u5230\u5e76\u96c6\u7684\u96c6\u5408\u4e2d\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const union = (setA, setB) => {\n  const unionAb = new Set();\n  setA.forEach((value) => unionAb.add(value));\n  setB.forEach((value) => unionAb.add(value));\n  return unionAb;\n};\nconsole.log(union(setA, setB)); // \u8f93\u51fa [1, 2, 3, 4]\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"2. \u6a21\u62df\u4ea4\u96c6\u8fd0\u7b97"),"\n\u6a21\u62df\u4ea4\u96c6\u8fd0\u7b97\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u8f85\u52a9\u51fd\u6570\uff0c\u6765\u751f\u6210\u5305\u542b ",Object(s.b)("inlineCode",{parentName:"p"},"setA")," \u548c ",Object(s.b)("inlineCode",{parentName:"p"},"setB")," \u5171\u6709\u5143\u7d20\u7684\u65b0\u96c6\u5408\u3002\u4ee3\u7801\n\u5982\u4e0b\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const intersection = (setA, setB) => {\n  const intersectionSet = new Set();\n  setA.forEach((value) => {\n    if (setB.has(value)) {\n      intersectionSet.add(value);\n    }\n  });\n  return intersectionSet;\n};\n\n//\n\nconsole.log(intersection(setA, setB)); // \u8f93\u51fa [2, 3]\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"3. \u6a21\u62df\u5dee\u96c6\u8fd0\u7b97")),Object(s.b)("p",null,"\u4ea4\u96c6\u8fd0\u7b97\u521b\u5efa\u7684\u96c6\u5408\u5305\u542b ",Object(s.b)("inlineCode",{parentName:"p"},"setA")," \u548c ",Object(s.b)("inlineCode",{parentName:"p"},"setB")," \u90fd\u6709\u7684\u5143\u7d20\uff0c\u5dee\u96c6\u8fd0\u7b97\u521b\u5efa\u7684\u96c6\u5408\u5219\u5305\u542b ",Object(s.b)("inlineCode",{parentName:"p"},"setA")," \u6709\n\u800c ",Object(s.b)("inlineCode",{parentName:"p"},"setB")," \u6ca1\u6709\u7684\u5143\u7d20\u3002\u770b\u4e0b\u9762\u7684\u4ee3\u7801\uff1a"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const difference = (setA, setB) => {\n  const differenceSet = new Set();\n  setA.forEach((value) => {\n    // intersection \u51fd\u6570\u548c difference \u51fd\u6570\u9664\u51fd\u6570\u540d\u5916\u53ea\u6709\u4e00\u884c\u4e0d\u540c\n    if (!setB.has(value)) {\n      differenceSet.add(value);\n    }\n  });\n\n  return differenceSet;\n};\n\nconsole.log(difference(setA, setB));\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"4. ES6 \u7684\u6269\u5c55\u8fd0\u7b97\u7b26\u65b9\u5f0f\u5b9e\u73b0\u5e76\u96c6\u3001\u4ea4\u96c6\u548c\u5dee\u96c6")),Object(s.b)("p",null,"\u6b65\u9aa4\u4e3a\uff1a(1) \u5c06\u96c6\u5408\u8f6c\u5316\u4e3a\u6570\u7ec4; (2) \u6267\u884c\u9700\u8981\u7684\u8fd0\u7b97; (3) \u5c06\u7ed3\u679c\u8f6c\u5316\u56de\u96c6\u5408\u3002"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// \u5e76\u96c6\nconst union = (setA, setB) => new Set([...setA, ...setB]);\n// \u4ea4\u96c6\nconst intersection = (setA, setB) => new Set([...setA].filter((x) => setB.has(x)));\n// \u5dee\u96c6\nconst difference = (setA, setB) => new Set([...setA].filter((x) => !setB.has(x)));\n")),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"\u5e7f\u4e49\u7684\u96c6\u5408\u79cd\u7c7b\u5305\u62ec\u5217\u8868\uff0c\u96c6\uff0c\u591a\u91cd\u96c6\uff0c\u6811\u548c\u56fe\u3002\u679a\u4e3e\u7c7b\u578b\u53ef\u4ee5\u662f\u5217\u8868\u6216\u96c6\u3002\u8fd9\u91cc\u4e3b\u8981\u8bb2\u7684\u662f\u96c6\uff08\u5373",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://zh.wikipedia.org/wiki/%E9%9B%86%E5%90%88_(%E6%95%B0%E5%AD%A6)"}),"\u6570\u5b66\u91cc\u7684\u96c6\u5408"),"\uff09\uff0c\u800c\u975e\u5e7f\u4e49\u7684",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://zh.wikipedia.org/wiki/%E9%9B%86%E5%90%88_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6)"}),"\u96c6\u5408 (\u8ba1\u7b97\u673a\u79d1\u5b66)"),"\u3002"))))}o.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=o(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||s;return n?r.a.createElement(d,l({ref:t},c,{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);