(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(176)),c={id:"transform-causes-exception",title:"transform \u5bfc\u81f4 css \u5b9a\u4f4d\u5f02\u5e38",tags:["css"]},i={permalink:"/transform-causes-exception",source:"@site/blog/2018-10-16-transform-causes-exception.md",description:"### \u524d\u8a00",date:"2018-10-16T00:00:00.000Z",tags:[{label:"css",permalink:"/tags/css"}],title:"transform \u5bfc\u81f4 css \u5b9a\u4f4d\u5f02\u5e38",truncated:!0,nextItem:{title:"\u53d1\u7248\u89c4\u5219",permalink:"/package-publish-rules"}},l=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u539f\u56e0",id:"\u539f\u56e0",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]},{value:"\u8d44\u6599",id:"\u8d44\u6599",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u524d\u8a00"},"\u524d\u8a00"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u5f53\u5728\u505a\u8ba9\u6d4f\u89c8\u5668\u652f\u6301\u5b57\u4f53\u5c0f\u4e8e 12px \u7684\u529f\u80fd\u7684\u65f6\u5019\uff0c\u9047\u5230\u4e86\u4e00\u4e2a\u5947\u602a\u7684\u95ee\u9898\uff0c\u5f53\u6211\u4f7f\u7528\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"transform")," \u5bf9\u5185\u5bb9\u8fdb\u884c\u7f29\u5c0f\u7684\u65f6\u5019\uff0c\u53d1\u73b0\u539f\u6765\u7684\u7edd\u5bf9\u5e03\u5c40\u7684\u4f4d\u7f6e\u6709\u5f02\u5e38\u3002")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".parent {\n  width: 200px;\n  height: 200px;\n  background: red;\n  position: relative;\n}\n.child {\n  background: blue;\n  /* transform: scale(0.8333); */\n}\n.child::before {\n  position: absolute;\n  content: '';\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition: all 0.3s;\n  background: yellow;\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<div class="parent"><div class="child">child...</div></div>\n')),Object(o.b)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\uff0c\u5f53\u5728\u6837\u5f0f\u4e2d\u6ca1\u6709\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"transform")," \u65f6\uff0c\u56e0\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"child::before")," \u4e2d\u4f7f\u7528\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"position: absolute;")," (\u7edd\u5bf9)\u5e03\u5c40\uff0c\u6240\u4ee5\u4f4d\u7f6e\u662f\u76f8\u5bf9\u4e8e\u4e0d\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"static")," \u7684\u7236\u7ea7\u5143\u7d20\u8fdb\u884c\u5e03\u5c40\uff0c\u5373\u76f8\u5bf9\u4e8e ",Object(o.b)("inlineCode",{parentName:"p"},"parent")," \u5e03\u5c40\u3002\u4f46\u662f\u5f53\u6211\u4f7f\u7528\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"transform: scale(0.8333);")," \u5bf9\u5185\u5bb9\u8fdb\u884c\u7f29\u5c0f\u65f6\uff0c\u5947\u602a\u7684\u4e8b\u60c5\u53d1\u751f\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"child::before")," \u4e0d\u5728\u76f8\u5bf9\u4e8e ",Object(o.b)("inlineCode",{parentName:"p"},"parent")," \u8fdb\u884c\u5e03\u5c40\u4e86\uff0c\u800c\u662f\u76f8\u5bf9\u4e8e ",Object(o.b)("inlineCode",{parentName:"p"},"child")," \u8fdb\u884c\u5e03\u5c40\u3002\u8fd9\u4e2a\u8ddf\u6211\u4eec\u4ee5\u524d\u8bf4\uff1a\u7edd\u5bf9\u5e03\u5c40\u76f8\u5bf9\u4e8e\u5b83\u4e0d\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"static")," \u7684\u7236\u7ea7\u5143\u7d20\u8fdb\u884c\u5e03\u5c40\u7684\u539f\u5219\u76f8\u6096\u4e86\u3002"),Object(o.b)("h3",{id:"\u539f\u56e0"},"\u539f\u56e0"),Object(o.b)("p",null,"\u901a\u8fc7\u67e5\u8be2\u8d44\u6599\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform"}),"MDN")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms"}),"MDN")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://drafts.csswg.org/css-transforms/#module-interactions"}),"W3C"))),Object(o.b)("p",null,"\u5f97\u77e5\uff1a\u5f53\u5728\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"tranform")," \u7684 CSS \u5c5e\u6027\u8fdb\u884c\u65cb\u8f6c\uff0c\u7f29\u653e\uff0c\u503e\u659c\u6216\u5e73\u79fb\u5143\u7d20\u65f6\uff0c\u5b83\u4fee\u6539\u4e86 CSS ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model"}),"\u53ef\u89c6\u5316\u683c\u5f0f\u6a21\u578b"),"\u7684\u5750\u6807\u7a7a\u95f4\u3002\u901a\u8fc7\u4fee\u6539\u5750\u6807\u7a7a\u95f4\uff0c\u5f71\u54cd\u5185\u5bb9\u7684\u5f62\u72b6\u548c\u4f4d\u7f6e\uff0c\u800c\u4e0d\u4f1a\u4e2d\u65ad\u6b63\u5e38\u7684\u6587\u6863\u6d41\u3002\u8fd9\u4e9b\u5c5e\u6027\u7684\u67d0\u4e9b\u503c\u5bfc\u81f4\u521b\u5efa",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.w3.org/TR/CSS2/visuren.html#containing-block"}),"\u5305\u542b\u5757"),"\u548c/\u6216\u521b\u5efa",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://drafts.csswg.org/css-position-3/#stacking-context"}),"\u5806\u53e0\u4e0a\u4e0b\u6587"),"\u3002"),Object(o.b)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"transform")," \u6539\u4e86 CSS \u7684\u53ef\u89c6\u5316\u683c\u5f0f\u6a21\u578b\uff0c\u8fd8\u4f1a\u5f71\u54cd\u5230\u54ea\u4e9b CSS \u5e03\u5c40\u5462\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"transform")," \u6539\u53d8\u4e86 CSS \u7684",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.w3.org/TR/CSS2/visuren.html"}),"\u53ef\u89c6\u5316\u683c\u5f0f\u6a21\u578b"),", \u5bfc\u81f4 ",Object(o.b)("inlineCode",{parentName:"li"},"absolute")," \u7684 100% \u5bbd\u5ea6\u5927\u5c0f\u53d7\u5230\u4e86\u9650\u5236\u3002"),Object(o.b)("li",{parentName:"ul"},"\u5f53\u8bbe\u7f6e ",Object(o.b)("inlineCode",{parentName:"li"},"transform")," \u7684\u65f6\u5019\uff0c\u4f1a\u5f71\u54cd\u539f\u6765\u8bbe\u7f6e\u7684 ",Object(o.b)("inlineCode",{parentName:"li"},"overflow"),"\u3002"),Object(o.b)("li",{parentName:"ul"},"\u5f53 ",Object(o.b)("inlineCode",{parentName:"li"},"transform")," \u7684\u5143\u7d20\u8bbe\u7f6e\u4e86\u5176\u5b50\u5143\u7d20\u7684 position \u4e3a fixed \u7684\u65f6\u5019\uff0cfixed \u4f1a\u88ab\u964d\u7ea7\u4e3a ",Object(o.b)("inlineCode",{parentName:"li"},"absolute")," \u3002")),Object(o.b)("p",null,"\u6b22\u8fce\u8865\u5145\uff01"),Object(o.b)("h3",{id:"\u8d44\u6599"},"\u8d44\u6599"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform"}),"MDN transform")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms"}),"MDN Using CSS transforms")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://drafts.csswg.org/css-transforms/#module-interactions"}),"W3C CSS Transforms Module Level 1")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.zhangxinxu.com/wordpress/2015/05/css3-transform-affect/"}),"CSS3 transform \u5bf9\u666e\u901a\u5143\u7d20\u7684 N \u591a\u6e32\u67d3\u5f71\u54cd"))))}p.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,f=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return n?a.a.createElement(f,i({ref:t},b,{components:n})):a.a.createElement(f,i({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);