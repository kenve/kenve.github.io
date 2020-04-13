(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{167:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return o}));var a=r(1),n=r(9),c=(r(0),r(197)),i={id:"browser-process-and-thread",title:"\u6d4f\u89c8\u5668\u8fdb\u7a0b\u548c\u7ebf\u7a0b"},b={id:"interview/browser/browser-process-and-thread",title:"\u6d4f\u89c8\u5668\u8fdb\u7a0b\u548c\u7ebf\u7a0b",description:"\u817e\u8baf\u7684\u4e00\u9053\u9762\u8bd5\u9898\uff1aChrome \u6d4f\u89c8\u5668\u662f\u591a\u8fdb\u7a0b\u8fd8\u662f\u5355\u8fdb\u7a0b\uff0c\u662f\u591a\u7ebf\u7a0b\u8fd8\u662f\u5355\u7ebf\u7a0b\uff1f",source:"@site/docs/interview/browser/browser-process-and-thread.md",permalink:"/docs/interview/browser/browser-process-and-thread",editUrl:"https://github.com/kenve/kenve.github.io/edit/docusaurus/docs/interview/browser/browser-process-and-thread.md",sidebar:"interviewSideBar",previous:{title:"\u8fdb\u7a0b\u548c\u7ebf\u7a0b",permalink:"/docs/interview/system/process-and-thread"},next:{title:"\u6570\u7ec4 Array",permalink:"/docs/interview/js/js-array"}},l=[{value:"\u591a\u8fdb\u7a0b\u548c\u591a\u7ebf\u7a0b",id:"\u591a\u8fdb\u7a0b\u548c\u591a\u7ebf\u7a0b",children:[]},{value:"\u6d4f\u89c8\u5668\u591a\u8fdb\u7a0b\u67b6\u6784",id:"\u6d4f\u89c8\u5668\u591a\u8fdb\u7a0b\u67b6\u6784",children:[]},{value:"\u90a3\u4e48 Chrome \u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u591a\u8fdb\u7a0b\u67b6\u6784?",id:"\u90a3\u4e48-chrome-\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u591a\u8fdb\u7a0b\u67b6\u6784",children:[]},{value:"\u6d4f\u89c8\u5668\u4e3b\u8981\u5305\u542b\u54ea\u4e9b\u8fdb\u7a0b\uff1f",id:"\u6d4f\u89c8\u5668\u4e3b\u8981\u5305\u542b\u54ea\u4e9b\u8fdb\u7a0b\uff1f",children:[]},{value:"\u8fdb\u7a0b\u95f4\u901a\u4fe1",id:"\u8fdb\u7a0b\u95f4\u901a\u4fe1",children:[]},{value:"\u6d4f\u89c8\u5668\u5185\u6838\uff08\u6e32\u67d3\u8fdb\u7a0b\uff09",id:"\u6d4f\u89c8\u5668\u5185\u6838\uff08\u6e32\u67d3\u8fdb\u7a0b\uff09",children:[]},{value:"\u6d4f\u89c8\u5668\u5185\u6838\u662f\u591a\u7ebf\u7a0b",id:"\u6d4f\u89c8\u5668\u5185\u6838\u662f\u591a\u7ebf\u7a0b",children:[]},{value:"GUI \u6e32\u67d3\u7ebf\u7a0b",id:"gui-\u6e32\u67d3\u7ebf\u7a0b",children:[]},{value:"JavaScript \u5f15\u64ce\u7ebf\u7a0b",id:"javascript-\u5f15\u64ce\u7ebf\u7a0b",children:[{value:"JavaScript \u662f\u5355\u7ebf\u7a0b\u7684",id:"javascript-\u662f\u5355\u7ebf\u7a0b\u7684",children:[]},{value:"GUI \u6e32\u67d3\u7ebf\u7a0b \u4e0e JavaScript \u5f15\u64ce\u7ebf\u7a0b\u4e92\u65a5\uff01",id:"gui-\u6e32\u67d3\u7ebf\u7a0b-\u4e0e-javascript-\u5f15\u64ce\u7ebf\u7a0b\u4e92\u65a5\uff01",children:[]},{value:"JS \u963b\u585e\u9875\u9762\u52a0\u8f7d",id:"js-\u963b\u585e\u9875\u9762\u52a0\u8f7d",children:[]},{value:"\u5b9a\u65f6\u89e6\u53d1\u5668\u7ebf\u7a0b",id:"\u5b9a\u65f6\u89e6\u53d1\u5668\u7ebf\u7a0b",children:[]},{value:"\u4e8b\u4ef6\u89e6\u53d1\u7ebf\u7a0b",id:"\u4e8b\u4ef6\u89e6\u53d1\u7ebf\u7a0b",children:[]},{value:"\u5f02\u6b65 http \u8bf7\u6c42\u7ebf\u7a0b",id:"\u5f02\u6b65-http-\u8bf7\u6c42\u7ebf\u7a0b",children:[]}]},{value:"Browser \u8fdb\u7a0b\u548c Renderer \u8fdb\u7a0b\u7684\u901a\u4fe1\u8fc7\u7a0b",id:"browser-\u8fdb\u7a0b\u548c-renderer-\u8fdb\u7a0b\u7684\u901a\u4fe1\u8fc7\u7a0b",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],p={rightToc:l};function o(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u817e\u8baf\u7684\u4e00\u9053\u9762\u8bd5\u9898\uff1aChrome \u6d4f\u89c8\u5668\u662f\u591a\u8fdb\u7a0b\u8fd8\u662f\u5355\u8fdb\u7a0b\uff0c\u662f\u591a\u7ebf\u7a0b\u8fd8\u662f\u5355\u7ebf\u7a0b\uff1f"),Object(c.b)("h2",{id:"\u591a\u8fdb\u7a0b\u548c\u591a\u7ebf\u7a0b"},"\u591a\u8fdb\u7a0b\u548c\u591a\u7ebf\u7a0b"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u591a\u8fdb\u7a0b\uff1a")," \u662f\u6307\u5728\u540c\u4e00\u4e2a\u65f6\u95f4\u91cc\uff0c\u540c\u4e00\u4e2a\u8ba1\u7b97\u673a\u7cfb\u7edf\u4e2d\u5982\u679c\u5141\u8bb8\u4e24\u4e2a\u6216\u4e24\u4e2a\u4ee5\u4e0a\u7684\u8fdb\u7a0b\u5904\u4e8e\u8fd0\u884c\u72b6\u6001\u3002\u591a\u8fdb\u7a0b\u5e26\u6765\u7684\u597d\u5904\u662f\u660e\u663e\u7684\uff0c\u6bd4\u5982\u4f60\u53ef\u4ee5\u542c\u6b4c\u7684\u540c\u65f6\uff0c\u6253\u5f00\u7f16\u8f91\u5668\u6572\u4ee3\u7801\uff0c\u7f16\u8f91\u5668\u548c\u542c\u6b4c\u8f6f\u4ef6\u7684\u8fdb\u7a0b\u4e4b\u95f4\u4e1d\u6beb\u4e0d\u4f1a\u76f8\u4e92\u5e72\u6270\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u591a\u7ebf\u7a0b\uff1a")," \u662f\u6307\u7a0b\u5e8f\u4e2d\u5305\u542b\u591a\u4e2a\u6267\u884c\u6d41\uff0c\u5373\u5728\u4e00\u4e2a\u7a0b\u5e8f\u4e2d\u53ef\u4ee5\u540c\u65f6\u8fd0\u884c\u591a\u4e2a\u4e0d\u540c\u7684\u7ebf\u7a0b\u6765\u6267\u884c\u4e0d\u540c\u7684\u4efb\u52a1\uff0c\u4e5f\u5c31\u662f\u8bf4\u5141\u8bb8\u5355\u4e2a\u7a0b\u5e8f\u521b\u5efa\u591a\u4e2a\u5e76\u884c\u6267\u884c\u7684\u7ebf\u7a0b\u6765\u5b8c\u6210\u5404\u81ea\u7684\u4efb\u52a1\u3002"),Object(c.b)("h2",{id:"\u6d4f\u89c8\u5668\u591a\u8fdb\u7a0b\u67b6\u6784"},"\u6d4f\u89c8\u5668\u591a\u8fdb\u7a0b\u67b6\u6784"),Object(c.b)("p",null,"\u8ddf\u73b0\u5728\u7684\u5f88\u591a\u591a\u7ebf\u7a0b\u6d4f\u89c8\u5668\u4e0d\u4e00\u6837\uff0cChrome \u6d4f\u89c8\u5668\u4f7f\u7528\u591a\u4e2a\u8fdb\u7a0b\u6765\u9694\u79bb\u4e0d\u540c\u7684\u7f51\u9875\u3002\u56e0\u6b64\u5728 Chrome \u4e2d\u6253\u5f00\u4e00\u4e2a\u7f51\u9875\u76f8\u5f53\u4e8e\u8d77\u4e86\u4e00\u4e2a\u8fdb\u7a0b\u3002"),Object(c.b)("p",null,"\u5982\u56fe\u5728 Chrome \u7684\u83dc\u5355/\u66f4\u591a\u5de5\u5177/\u4efb\u52a1\u7ba1\u7406\u5de5\u5177\u4e0b\u53ef\u4ee5\u67e5\u770b\u6240\u6709\u7684\u8fdb\u7a0b\uff1a"),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/chrome-task.png",alt:"Chrome \u4efb\u52a1\u7ba1\u7406\u5de5\u5177\u622a\u56fe"}))),Object(c.b)("h2",{id:"\u90a3\u4e48-chrome-\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u591a\u8fdb\u7a0b\u67b6\u6784"},"\u90a3\u4e48 Chrome \u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u591a\u8fdb\u7a0b\u67b6\u6784?"),Object(c.b)("p",null,"\u5728\u6d4f\u89c8\u5668\u521a\u88ab\u8bbe\u8ba1\u51fa\u6765\u7684\u65f6\u5019\uff0c\u90a3\u65f6\u7684\u7f51\u9875\u975e\u5e38\u7684\u7b80\u5355\uff0c\u6bcf\u4e2a\u7f51\u9875\u7684\u8d44\u6e90\u5360\u6709\u7387\u662f\u975e\u5e38\u4f4e\u7684\uff0c\u56e0\u6b64\u4e00\u4e2a\u8fdb\u7a0b\u5904\u7406\u591a\u4e2a\u7f51\u9875\u65f6\u53ef\u884c\u7684\u3002"),Object(c.b)("p",null,"\u7136\u540e\u5728\u4eca\u5929\uff0c\u5927\u91cf\u7f51\u9875\u53d8\u5f97\u65e5\u76ca\u590d\u6742\u3002\u628a\u6240\u6709\u7f51\u9875\u90fd\u653e\u8fdb\u4e00\u4e2a\u8fdb\u7a0b\u7684\u6d4f\u89c8\u5668\u9762\u4e34\u5728\u5065\u58ee\u6027\uff0c\u54cd\u5e94\u901f\u5ea6\uff0c\u5b89\u5168\u6027\u65b9\u9762\u7684\u6311\u6218\u3002\u56e0\u4e3a\u5982\u679c\u6d4f\u89c8\u5668\u4e2d\u7684\u4e00\u4e2a tab \u7f51\u9875\u5d29\u6e83\u7684\u8bdd\uff0c\u5c06\u4f1a\u5bfc\u81f4\u5176\u4ed6\u88ab\u6253\u5f00\u7684\u7f51\u9875\u5e94\u7528\u3002"),Object(c.b)("p",null,"\u53e6\u5916\u76f8\u5bf9\u4e8e\u7ebf\u7a0b\uff0c\u8fdb\u7a0b\u4e4b\u95f4\u662f\u4e0d\u5171\u4eab\u8d44\u6e90\u548c\u5730\u5740\u7a7a\u95f4\u7684,\u6240\u4ee5\u4e0d\u4f1a\u5b58\u5728\u592a\u591a\u7684\u5b89\u5168\u95ee\u9898\uff0c\u800c\u7531\u4e8e\u591a\u4e2a\u7ebf\u7a0b\u5171\u4eab\u7740\u76f8\u540c\u7684\u5730\u5740\u7a7a\u95f4\u548c\u8d44\u6e90,\u6240\u4ee5\u4f1a\u5b58\u5728\u7ebf\u7a0b\u4e4b\u95f4\u6709\u53ef\u80fd\u4f1a\u6076\u610f\u4fee\u6539\u6216\u8005\u83b7\u53d6\u975e\u6388\u6743\u6570\u636e\u7b49\u590d\u6742\u7684\u5b89\u5168\u95ee\u9898\u3002"),Object(c.b)("p",null,"\u5728\u4e86\u89e3\u8fd9\u4e2a\u77e5\u8bc6\u70b9\uff0c\u6211\u4eec\u9700\u8981\u5148\u8bf4\u660e\u4e0b\u4ec0\u4e48\u662f\u6d4f\u89c8\u5668\u5185\u6838\u3002"),Object(c.b)("h2",{id:"\u6d4f\u89c8\u5668\u4e3b\u8981\u5305\u542b\u54ea\u4e9b\u8fdb\u7a0b\uff1f"},"\u6d4f\u89c8\u5668\u4e3b\u8981\u5305\u542b\u54ea\u4e9b\u8fdb\u7a0b\uff1f"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Browser \u8fdb\u7a0b\uff1a\u6d4f\u89c8\u5668\u7684\u4e3b\u8fdb\u7a0b\uff0c\u53ea\u6709\u4e00\u4e2a\u3002",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u8d1f\u8d23\u6d4f\u89c8\u5668\u754c\u9762\u7684\u663e\u793a\u4e0e\u4ea4\u4e92\uff1b"),Object(c.b)("li",{parentName:"ul"},"\u5404\u4e2a\u9875\u9762\u7684\u7ba1\u7406\uff0c\u521b\u5efa\u548c\u9500\u6bc1\u5176\u4ed6\u8fdb\u7a0b\uff1b"),Object(c.b)("li",{parentName:"ul"},"\u7f51\u7edc\u7684\u8d44\u6e90\u7ba1\u7406\u3001\u4e0b\u8f7d\u7b49\u3002"))),Object(c.b)("li",{parentName:"ul"},"Renderer \u8fdb\u7a0b\uff1a\u4e5f\u79f0\u4e3a\u6d4f\u89c8\u5668\u6e32\u67d3\u8fdb\u7a0b\u6216\u6d4f\u89c8\u5668\u5185\u6838\uff0c\u5185\u90e8\u662f\u591a\u7ebf\u7a0b\u7684\u3002\u4e3b\u8981\u8d1f\u8d23\u9875\u9762\u6e32\u67d3\uff0c\u811a\u672c\u6267\u884c\uff0c\u4e8b\u4ef6\u5904\u7406\u7b49\u3002"),Object(c.b)("li",{parentName:"ul"},"\u7b2c\u4e09\u65b9\u63d2\u4ef6\u8fdb\u7a0b\uff1a\u6bcf\u79cd\u7c7b\u578b\u7684\u63d2\u4ef6\u5bf9\u5e94\u4e00\u4e2a\u8fdb\u7a0b\uff0c\u4ec5\u5f53\u4f7f\u7528\u8be5\u63d2\u4ef6\u65f6\u624d\u521b\u5efa\u3002"),Object(c.b)("li",{parentName:"ul"},"GPU \u8fdb\u7a0b\uff1a\u6700\u591a\u4e00\u4e2a\uff0c\u7528\u4e8e 3D \u7ed8\u5236\u7b49\u3002")),Object(c.b)("h2",{id:"\u8fdb\u7a0b\u95f4\u901a\u4fe1"},"\u8fdb\u7a0b\u95f4\u901a\u4fe1"),Object(c.b)("p",null,"\u8fdb\u7a0b\u95f4\u4f7f\u7528 IPC \uff08Inter Process Communication\uff09\u8fdb\u884c\u901a\u4fe1\u3002"),Object(c.b)("h2",{id:"\u6d4f\u89c8\u5668\u5185\u6838\uff08\u6e32\u67d3\u8fdb\u7a0b\uff09"},"\u6d4f\u89c8\u5668\u5185\u6838\uff08\u6e32\u67d3\u8fdb\u7a0b\uff09"),Object(c.b)("p",null,"\u7b80\u5355\u6765\u8bf4\u6d4f\u89c8\u5668\u5185\u6838\u662f\u901a\u8fc7\u53d6\u5f97\u9875\u9762\u5185\u5bb9\u3001\u6574\u7406\u4fe1\u606f\uff08\u5e94\u7528 CSS\uff09\u3001\u8ba1\u7b97\u548c\u7ec4\u5408\u6700\u7ec8\u8f93\u51fa\u53ef\u89c6\u5316\u7684\u56fe\u50cf\u7ed3\u679c\uff0c\u901a\u5e38\u4e5f\u88ab\u79f0\u4e3a\u6e32\u67d3\u5f15\u64ce\u3002\u4ece\u4e0a\u9762\u6211\u4eec\u53ef\u4ee5\u77e5\u9053\uff0cChrome \u6d4f\u89c8\u5668\u4e3a\u6bcf\u4e2a tab \u9875\u9762\u5355\u72ec\u542f\u7528\u8fdb\u7a0b\uff0c\u56e0\u6b64\u6bcf\u4e2a tab \u7f51\u9875\u90fd\u6709\u7531\u5176\u72ec\u7acb\u7684\u6e32\u67d3\u5f15\u64ce\u5b9e\u4f8b\u3002"),Object(c.b)("h2",{id:"\u6d4f\u89c8\u5668\u5185\u6838\u662f\u591a\u7ebf\u7a0b"},"\u6d4f\u89c8\u5668\u5185\u6838\u662f\u591a\u7ebf\u7a0b"),Object(c.b)("p",null,"\u6d4f\u89c8\u5668\u5185\u6838\u662f\u591a\u7ebf\u7a0b\uff0c\u5728\u5185\u6838\u63a7\u5236\u4e0b\u5404\u7ebf\u7a0b\u76f8\u4e92\u914d\u5408\u4ee5\u4fdd\u6301\u540c\u6b65\uff0c\u4e00\u4e2a\u6d4f\u89c8\u5668\u901a\u5e38\u7531\u4ee5\u4e0b\u5e38\u9a7b\u7ebf\u7a0b\u7ec4\u6210\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"GUI \u6e32\u67d3\u7ebf\u7a0b"),Object(c.b)("li",{parentName:"ul"},"JavaScript \u5f15\u64ce\u7ebf\u7a0b"),Object(c.b)("li",{parentName:"ul"},"\u5b9a\u65f6\u89e6\u53d1\u5668\u7ebf\u7a0b"),Object(c.b)("li",{parentName:"ul"},"\u4e8b\u4ef6\u89e6\u53d1\u7ebf\u7a0b"),Object(c.b)("li",{parentName:"ul"},"\u5f02\u6b65 http \u8bf7\u6c42\u7ebf\u7a0b")),Object(c.b)("h2",{id:"gui-\u6e32\u67d3\u7ebf\u7a0b"},"GUI \u6e32\u67d3\u7ebf\u7a0b"),Object(c.b)("p",null,"GUI \u6e32\u67d3\u7ebf\u7a0b\u8d1f\u8d23\u6e32\u67d3\u6d4f\u89c8\u5668\u754c\u9762 HTML \u5143\u7d20,\u5f53\u754c\u9762\u9700\u8981\u91cd\u7ed8(Repaint)\u6216\u7531\u4e8e\u67d0\u79cd\u64cd\u4f5c\u5f15\u53d1\u56de\u6d41(reflow)\u65f6,\u8be5\u7ebf\u7a0b\u5c31\u4f1a\u6267\u884c\u3002\u5728 JavaScript \u5f15\u64ce\u8fd0\u884c\u811a\u672c\u671f\u95f4,GUI \u6e32\u67d3\u7ebf\u7a0b\u90fd\u662f\u5904\u4e8e\u6302\u8d77\u72b6\u6001\u7684,\u4e5f\u5c31\u662f\u8bf4\u88ab\u201d\u51bb\u7ed3\u201d\u4e86."),Object(c.b)("h2",{id:"javascript-\u5f15\u64ce\u7ebf\u7a0b"},"JavaScript \u5f15\u64ce\u7ebf\u7a0b"),Object(c.b)("p",null,"JavaScript \u5f15\u64ce\uff0c\u4e5f\u53ef\u4ee5\u79f0\u4e3a JS \u5185\u6838\uff0c\u4e3b\u8981\u8d1f\u8d23\u5904\u7406 JavaScript \u811a\u672c\u7a0b\u5e8f\uff0c\u4f8b\u5982 V8 JavaScript \u5f15\u64ce\u7ebf\u7a0b\u7406\u6240\u5f53\u7136\u662f\u8d1f\u8d23\u89e3\u6790 JavaScript \u811a\u672c\uff0c\u8fd0\u884c\u4ee3\u7801\u3002"),Object(c.b)("h3",{id:"javascript-\u662f\u5355\u7ebf\u7a0b\u7684"},"JavaScript \u662f\u5355\u7ebf\u7a0b\u7684"),Object(c.b)("p",null,"JavaScript \u662f\u5355\u7ebf\u7a0b\u7684, \u90a3\u4e48\u4e3a\u4ec0\u4e48 JavaScript \u8981\u662f\u5355\u7ebf\u7a0b\u7684\uff1f"),Object(c.b)("p",null,"\u8fd9\u662f\u56e0\u4e3a JavaScript \u8fd9\u95e8\u811a\u672c\u8bed\u8a00\u8bde\u751f\u7684\u4f7f\u547d\u6240\u81f4\uff1aJavaScript \u4e3a\u5904\u7406\u9875\u9762\u4e2d\u7528\u6237\u7684\u4ea4\u4e92\uff0c\u4ee5\u53ca\u64cd\u4f5c DOM \u6811\u3001CSS \u6837\u5f0f\u6811\u6765\u7ed9\u7528\u6237\u5448\u73b0\u4e00\u4efd\u52a8\u6001\u800c\u4e30\u5bcc\u7684\u4ea4\u4e92\u4f53\u9a8c\u548c\u670d\u52a1\u5668\u903b\u8f91\u7684\u4ea4\u4e92\u5904\u7406\u3002\u5982\u679c JavaScript \u662f\u591a\u7ebf\u7a0b\u7684\u65b9\u5f0f\u6765\u64cd\u4f5c\u8fd9\u4e9b UI DOM\uff0c\u5219\u53ef\u80fd\u51fa\u73b0 UI \u64cd\u4f5c\u7684\u51b2\u7a81\uff1b"),Object(c.b)("p",null,"\u5982\u679c JavaScript \u662f\u591a\u7ebf\u7a0b\u7684\u8bdd\uff0c\u5728\u591a\u7ebf\u7a0b\u7684\u4ea4\u4e92\u4e0b\uff0c\u5904\u4e8e UI \u4e2d\u7684 DOM \u8282\u70b9\u5c31\u53ef\u80fd\u6210\u4e3a\u4e00\u4e2a\u4e34\u754c\u8d44\u6e90\uff0c\u5047\u8bbe\u5b58\u5728\u4e24\u4e2a\u7ebf\u7a0b\u540c\u65f6\u64cd\u4f5c\u4e00\u4e2a DOM\uff0c\u4e00\u4e2a\u8d1f\u8d23\u4fee\u6539\u4e00\u4e2a\u8d1f\u8d23\u5220\u9664\uff0c\u90a3\u4e48\u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u6d4f\u89c8\u5668\u6765\u88c1\u51b3\u5982\u4f55\u751f\u6548\u54ea\u4e2a\u7ebf\u7a0b\u7684\u6267\u884c\u7ed3\u679c\u3002\u5f53\u7136\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u9501\u6765\u89e3\u51b3\u4e0a\u9762\u7684\u95ee\u9898\u3002\u4f46\u4e3a\u4e86\u907f\u514d\u56e0\u4e3a\u5f15\u5165\u4e86\u9501\u800c\u5e26\u6765\u66f4\u5927\u7684\u590d\u6742\u6027\uff0cJavaScript \u5728\u6700\u521d\u5c31\u9009\u62e9\u4e86\u5355\u7ebf\u7a0b\u6267\u884c\u3002"),Object(c.b)("h3",{id:"gui-\u6e32\u67d3\u7ebf\u7a0b-\u4e0e-javascript-\u5f15\u64ce\u7ebf\u7a0b\u4e92\u65a5\uff01"},"GUI \u6e32\u67d3\u7ebf\u7a0b \u4e0e JavaScript \u5f15\u64ce\u7ebf\u7a0b\u4e92\u65a5\uff01"),Object(c.b)("p",null,"\u7531\u4e8e JavaScript \u662f\u53ef\u64cd\u7eb5 DOM \u7684\uff0c\u5982\u679c\u5728\u4fee\u6539\u8fd9\u4e9b\u5143\u7d20\u5c5e\u6027\u540c\u65f6\u6e32\u67d3\u754c\u9762\uff08\u5373 JavaScript \u7ebf\u7a0b\u548c UI \u7ebf\u7a0b\u540c\u65f6\u8fd0\u884c\uff09\uff0c\u90a3\u4e48\u6e32\u67d3\u7ebf\u7a0b\u524d\u540e\u83b7\u5f97\u7684\u5143\u7d20\u6570\u636e\u5c31\u53ef\u80fd\u4e0d\u4e00\u81f4\u4e86\u3002\u56e0\u6b64\u4e3a\u4e86\u9632\u6b62\u6e32\u67d3\u51fa\u73b0\u4e0d\u53ef\u9884\u671f\u7684\u7ed3\u679c\uff0c\u6d4f\u89c8\u5668\u8bbe\u7f6e GUI \u6e32\u67d3\u7ebf\u7a0b\u4e0e JavaScript \u5f15\u64ce\u4e3a\u4e92\u65a5\u7684\u5173\u7cfb\uff0c\u5f53 JavaScript \u5f15\u64ce\u6267\u884c\u65f6 GUI \u7ebf\u7a0b\u4f1a\u88ab\u6302\u8d77\uff0cGUI \u66f4\u65b0\u4f1a\u88ab\u4fdd\u5b58\u5728\u4e00\u4e2a\u961f\u5217\u4e2d\u7b49\u5230\u5f15\u64ce\u7ebf\u7a0b\u7a7a\u95f2\u65f6\u7acb\u5373\u88ab\u6267\u884c\u3002"),Object(c.b)("h3",{id:"js-\u963b\u585e\u9875\u9762\u52a0\u8f7d"},"JS \u963b\u585e\u9875\u9762\u52a0\u8f7d"),Object(c.b)("p",null,"\u4ece\u4e0a\u9762\u6211\u4eec\u53ef\u4ee5\u63a8\u7406\u51fa\uff0c\u7531\u4e8e GUI \u6e32\u67d3\u7ebf\u7a0b\u4e0e JavaScript \u6267\u884c\u7ebf\u7a0b\u662f\u4e92\u65a5\u7684\u5173\u7cfb\uff0c\u5f53\u6d4f\u89c8\u5668\u5728\u6267\u884c JavaScript \u7a0b\u5e8f\u7684\u65f6\u5019\uff0cGUI \u6e32\u67d3\u7ebf\u7a0b\u4f1a\u88ab\u4fdd\u5b58\u5728\u4e00\u4e2a\u961f\u5217\u4e2d\uff0c\u76f4\u5230 JS \u7a0b\u5e8f\u6267\u884c\u5b8c\u6210\uff0c\u624d\u4f1a\u63a5\u7740\u6267\u884c\u3002\u56e0\u6b64\u5982\u679c JS \u6267\u884c\u7684\u65f6\u95f4\u8fc7\u957f\uff0c\u8fd9\u6837\u5c31\u4f1a\u9020\u6210\u9875\u9762\u7684\u6e32\u67d3\u4e0d\u8fde\u8d2f\uff0c\u5bfc\u81f4\u9875\u9762\u6e32\u67d3\u52a0\u8f7d\u963b\u585e\u7684\u611f\u89c9\u3002"),Object(c.b)("h3",{id:"\u5b9a\u65f6\u89e6\u53d1\u5668\u7ebf\u7a0b"},"\u5b9a\u65f6\u89e6\u53d1\u5668\u7ebf\u7a0b"),Object(c.b)("p",null,"\u6d4f\u89c8\u5668\u5b9a\u65f6\u8ba1\u6570\u5668\uff08setTimeout \u548c setInterval\uff09\u5e76\u4e0d\u662f\u7531 JavaScript \u5f15\u64ce\u8ba1\u6570\u7684, \u56e0\u4e3a JavaScript \u5f15\u64ce\u662f\u5355\u7ebf\u7a0b\u7684, \u5982\u679c\u5904\u4e8e\u963b\u585e\u7ebf\u7a0b\u72b6\u6001\u5c31\u4f1a\u5f71\u54cd\u8bb0\u8ba1\u65f6\u7684\u51c6\u786e, \u56e0\u6b64\u901a\u8fc7\u5355\u72ec\u7ebf\u7a0b\u6765\u8ba1\u65f6\u5e76\u89e6\u53d1\u5b9a\u65f6\u662f\u66f4\u4e3a\u5408\u7406\u7684\u65b9\u6848\u3002"),Object(c.b)("h3",{id:"\u4e8b\u4ef6\u89e6\u53d1\u7ebf\u7a0b"},"\u4e8b\u4ef6\u89e6\u53d1\u7ebf\u7a0b"),Object(c.b)("p",null,"\u5f53\u4e00\u4e2a\u4e8b\u4ef6\u88ab\u89e6\u53d1\u65f6\u8be5\u7ebf\u7a0b\u4f1a\u628a\u4e8b\u4ef6\u6dfb\u52a0\u5230\u5f85\u5904\u7406\u961f\u5217\u7684\u961f\u5c3e\uff0c\u7b49\u5f85 JS \u5f15\u64ce\u7684\u5904\u7406\u3002\u8fd9\u4e9b\u4e8b\u4ef6\u53ef\u4ee5\u662f\u5f53\u524d\u6267\u884c\u7684\u4ee3\u7801\u5757\u5982\u5b9a\u65f6\u4efb\u52a1\u3001\u4e5f\u53ef\u6765\u81ea\u6d4f\u89c8\u5668\u5185\u6838\u7684\u5176\u4ed6\u7ebf\u7a0b\u5982\u9f20\u6807\u70b9\u51fb\u3001AJAX \u5f02\u6b65\u8bf7\u6c42\u7b49\uff0c\u4f46\u7531\u4e8e JS \u7684\u5355\u7ebf\u7a0b\u5173\u7cfb\u6240\u6709\u8fd9\u4e9b\u4e8b\u4ef6\u90fd\u5f97\u6392\u961f\u7b49\u5f85 JS \u5f15\u64ce\u5904\u7406\u3002"),Object(c.b)("h3",{id:"\u5f02\u6b65-http-\u8bf7\u6c42\u7ebf\u7a0b"},"\u5f02\u6b65 http \u8bf7\u6c42\u7ebf\u7a0b"),Object(c.b)("p",null,"\u5728 XMLHttpRequest \u5728\u8fde\u63a5\u540e\u662f\u901a\u8fc7\u6d4f\u89c8\u5668\u65b0\u5f00\u4e00\u4e2a\u7ebf\u7a0b\u8bf7\u6c42\uff0c \u5c06\u68c0\u6d4b\u5230\u72b6\u6001\u53d8\u66f4\u65f6\uff0c\u5982\u679c\u8bbe\u7f6e\u6709\u56de\u8c03\u51fd\u6570\uff0c\u5f02\u6b65\u7ebf\u7a0b\u5c31\u4ea7\u751f\u72b6\u6001\u53d8\u66f4\u4e8b\u4ef6\u653e\u5230 JavaScript \u5f15\u64ce\u7684\u5904\u7406\u961f\u5217\u4e2d\u7b49\u5f85\u5904\u7406\u3002"),Object(c.b)("h2",{id:"browser-\u8fdb\u7a0b\u548c-renderer-\u8fdb\u7a0b\u7684\u901a\u4fe1\u8fc7\u7a0b"},"Browser \u8fdb\u7a0b\u548c Renderer \u8fdb\u7a0b\u7684\u901a\u4fe1\u8fc7\u7a0b"),Object(c.b)("p",null,"\u6253\u5f00\u6d4f\u89c8\u5668\u7684\u4e00\u4e2a tab \u9875\u65f6\uff0c\u6211\u4eec\u770b\u4e0b\u5176\u4e2d\u7684\u5927\u81f4\u8fc7\u7a0b\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Browser \u8fdb\u7a0b\u6536\u5230\u7528\u6237\u8bf7\u6c42\uff0c\u901a\u8fc7\u7f51\u7edc\u4e0b\u8f7d\u83b7\u53d6\u9875\u9762\u5185\u5bb9\uff0c\u7136\u540e\u5c06\u8be5\u4efb\u52a1\u901a\u8fc7 RendererHost \u63a5\u53e3\u4f20\u9012\u7ed9 Renderer \u8fdb\u7a0b\uff1b"),Object(c.b)("li",{parentName:"ul"},"Renderer \u8fdb\u7a0b\u7684 Renderer \u63a5\u53e3\u6536\u5230\u6d88\u606f\uff0c\u7b80\u5355\u89e3\u91ca\u540e\uff0c\u4ea4\u7ed9 GUI \u6e32\u67d3\u7ebf\u7a0b\u5f00\u59cb\u6e32\u67d3\uff1b"),Object(c.b)("li",{parentName:"ul"},"GUI \u6e32\u67d3\u7ebf\u7a0b\u63a5\u6536\u8bf7\u6c42\uff0c\u52a0\u8f7d\u7f51\u9875\u5e76\u6e32\u67d3\u7f51\u9875\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u9700\u8981 Browser \u8fdb\u7a0b\u83b7\u53d6\u8d44\u6e90\u548c GPU \u8fdb\u7a0b\u6765\u5e2e\u52a9\u6e32\u67d3\uff0c\u4e5f\u53ef\u80fd\u4f1a\u6709 JS \u5f15\u64ce\u7ebf\u7a0b\u64cd\u4f5c DOM\uff08\u53ef\u80fd\u9020\u6210\u56de\u6d41\u5e76\u91cd\u7ed8\uff09\uff1b"),Object(c.b)("li",{parentName:"ul"},"\u6700\u540e Renderer \u8fdb\u7a0b\u5c06\u7ed3\u679c\u4f20\u9012\u7ed9 Browser \u8fdb\u7a0b\uff1b"),Object(c.b)("li",{parentName:"ul"},"Browser \u8fdb\u7a0b\u63a5\u6536\u5230\u7ed3\u679c\uff0c\u5e76\u5c06\u7ed3\u679c\u7ed8\u5236\u51fa\u6765\u3002")),Object(c.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://imweb.io/topic/58e3bfa845e5c13468f567d5"}),"\u6d4f\u89c8\u5668\u8fdb\u7a0b\uff1f\u7ebf\u7a0b\uff1f\u50bb\u50bb\u5206\u4e0d\u6e05\u695a\uff01")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.jianshu.com/p/8ff15d3a1dfd"}),"\u4ece\u8fdb\u7a0b\u548c\u7ebf\u7a0b\u4e86\u89e3\u6d4f\u89c8\u5668\u7684\u5de5\u4f5c\u539f\u7406"))))}o.isMDXComponent=!0},197:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return j}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),o=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):b({},t,{},e)),r},u=function(e){var t=o(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=o(r),O=a,j=u["".concat(i,".").concat(O)]||u[O]||d[O]||c;return r?n.a.createElement(j,b({ref:t},p,{components:r})):n.a.createElement(j,b({ref:t},p))}));function j(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=O;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var p=2;p<c;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);