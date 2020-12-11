(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{159:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,j=p["".concat(i,".").concat(h)]||p[h]||u[h]||c;return n?r.a.createElement(j,l(l({ref:t},b),{},{components:n})):r.a.createElement(j,l({ref:t},b))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<c;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),c=(n(0),n(159)),i={slug:"javascript-this",title:"javascript \u4e4b this \u7406\u89e3",tags:["javascript","this"]},l={permalink:"/javascript-this",source:"@site/blog/2017-08-19-javascript-this.md",description:"this \u4f5c\u4e3a JavaScript \u7684\u5173\u952e\u5b57\u4e4b\u4e00\uff0c\u4e0e\u5176\u4ed6\u8bed\u8a00\u76f8\u6bd4\u8868\u73b0\u7565\u6709\u4e0d\u540c\uff0c\u5e76\u4e14\uff0c\u5728\u4e25\u683c\u6a21\u5f0f\u548c\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\u8868\u73b0\u4e5f\u6709\u5dee\u522b\u3002",date:"2017-08-19T00:00:00.000Z",tags:[{label:"javascript",permalink:"/tags/javascript"},{label:"this",permalink:"/tags/this"}],title:"javascript \u4e4b this \u7406\u89e3",readingTime:3.555,truncated:!0,prevItem:{title:"\u6027\u80fd\u4f18\u5316\u4e4b\u4f7f\u7528\u539f\u751f API",permalink:"/optimization-use-native-api"},nextItem:{title:"\u79fb\u52a8\u7aef\u81ea\u9002\u5e94\u89e3\u51b3\u65b9\u6848",permalink:"/mobile-responsive-solution"}},o=[{value:"\u7279\u6027",id:"\u7279\u6027",children:[]},{value:"\u5728\u4e0d\u540c\u73af\u5883\u4e0b\uff0cthis \u7684\u4e0d\u540c\u7528\u6cd5\u3002",id:"\u5728\u4e0d\u540c\u73af\u5883\u4e0b\uff0cthis-\u7684\u4e0d\u540c\u7528\u6cd5\u3002",children:[{value:"\u5168\u5c40\u4e0a\u4e0b\u6587",id:"\u5168\u5c40\u4e0a\u4e0b\u6587",children:[]},{value:"\u51fd\u6570\u4e0a\u4e0b\u6587",id:"\u51fd\u6570\u4e0a\u4e0b\u6587",children:[]},{value:"DOM \u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4e2d\u7684 this",id:"dom-\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4e2d\u7684-this",children:[]},{value:"\u5185\u8054\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4e2d\u7684 this",id:"\u5185\u8054\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4e2d\u7684-this",children:[]}]}],b={rightToc:o};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"this \u4f5c\u4e3a JavaScript \u7684\u5173\u952e\u5b57\u4e4b\u4e00\uff0c\u4e0e\u5176\u4ed6\u8bed\u8a00\u76f8\u6bd4\u8868\u73b0\u7565\u6709\u4e0d\u540c\uff0c\u5e76\u4e14\uff0c\u5728",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode"}),"\u4e25\u683c\u6a21\u5f0f"),"\u548c\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\u8868\u73b0\u4e5f\u6709\u5dee\u522b\u3002"),Object(c.b)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u51fd\u6570\u7684\u8c03\u7528\u65b9\u5f0f\u51b3\u5b9a\u4e86 this \u7684\u503c\uff0c\u968f\u7740\u51fd\u6570\u8c03\u7528\u65b9\u5f0f\uff08\u4f7f\u7528\u573a\u5408\uff09\u7684\u4e0d\u540c\uff0cthis \u7684\u503c\u4e5f\u4f1a\u53d1\u751f\u53d8\u5316\u3002\u4f46\u603b\u7684\u6765\u8bf4\u8c01\u8c03\u7528\u6307\u5411\u8c01\u3002"),Object(c.b)("li",{parentName:"ul"},"this \u4e0d\u80fd\u5728\u6267\u884c\u671f\u95f4\u88ab\u8d4b\u503c\u3002"),Object(c.b)("li",{parentName:"ul"},"\u5728\u6bcf\u6b21\u51fd\u6570\uff0c\u88ab\u8c03\u7528\u65f6 this \u7684\u503c\u4e5f\u6709\u53ef\u80fd\u53d8\u5316\u3002"),Object(c.b)("li",{parentName:"ul"},"ES5 \u4e2d\u5f15\u5165\u4e86",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind"}),"bind"),"\u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u51fd\u6570\u7684 this \u503c,\u65e0\u8bba\u8fd9\u4e2a\u51fd\u6570\u662f\u5982\u4f55\u88ab\u8c03\u7528\u7684\u3002"),Object(c.b)("li",{parentName:"ul"},"ES6 \u65b0\u589e\u4e86 this \u8bcd\u6cd5\u89e3\u6790\u7684\u7bad\u5934\u51fd\u6570\uff08\u5b83\u5728\u95ed\u5408\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u5185\u8bbe\u7f6e this \u7684\u503c\uff09\u3002\n\u8bed\u6cd5")),Object(c.b)("h2",{id:"\u5728\u4e0d\u540c\u73af\u5883\u4e0b\uff0cthis-\u7684\u4e0d\u540c\u7528\u6cd5\u3002"},"\u5728\u4e0d\u540c\u73af\u5883\u4e0b\uff0cthis \u7684\u4e0d\u540c\u7528\u6cd5\u3002"),Object(c.b)("h3",{id:"\u5168\u5c40\u4e0a\u4e0b\u6587"},"\u5168\u5c40\u4e0a\u4e0b\u6587"),Object(c.b)("p",null,"\u5728\u5168\u5c40\u8fd0\u884c\u4e0a\u4e0b\u6587\u4e2d\uff08\u5728\u4efb\u4f55\u51fd\u6570\u4f53\u5916\uff09\u8c03\u7528\uff0cthis \u5c31\u6307\u5411\u5168\u5c40\u5bf9\u8c61 Global(global/window)\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"//\u5728\u6d4f\u89c8\u5668\u7684\u6267\u884c\u73af\u5883\u4e2d\uff0cthis\u6307\u5411\u5168\u5c40\u5bf9\u8c61\u5373 window \u5bf9\u8c61\nconsole.log(this === window); //true\n\nthis.a = \"hello\";\nconsole.log(window.a); //'hello'\nconsole.log(a); //'hello'\n")),Object(c.b)("h3",{id:"\u51fd\u6570\u4e0a\u4e0b\u6587"},"\u51fd\u6570\u4e0a\u4e0b\u6587"),Object(c.b)("p",null,"\u5728\u51fd\u6570\u5185\u90e8\uff0cthis \u7684\u503c\u53d6\u51b3\u4e8e\u51fd\u6570\u662f\u5982\u4f55\u88ab\u8c03\u7528\u7684\u3002"),Object(c.b)("h4",{id:"\u76f4\u63a5\u8c03\u7528"},"\u76f4\u63a5\u8c03\u7528"),Object(c.b)("p",null,"\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u4e14 this \u503c\u672a\u88ab call \u8bbe\u7f6e\uff0c\u8fd9\u65f6 this \u7684\u503c\u9ed8\u8ba4\u4e3a\u5168\u5c40\u5bf9\u8c61\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function test() {\n  return this;\n}\n\ntest() === window; // true\n\nvar b = 1;\nfunction test1() {\n  this.b = 0;\n}\ntest1();\nconsole.log(b); //0\n")),Object(c.b)("p",null,"\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u5982\u679c this \u672a\u88ab\u6267\u884c\u7684\u4e0a\u4e0b\u6587\u73af\u5883\u5b9a\u4e49\uff08this \u5c06\u4fdd\u6301\u4ed6\u8fdb\u5165\u6267\u884c\u73af\u5883\u65f6\u7684\u503c\uff09\uff0c\u90a3\u4e48\u5b83\u5c06\u4f1a\u9ed8\u8ba4\u4e3a undefined\u3002\n\u5982\u4e0b\uff1a\u7531\u4e8e test2()\u662f\u76f4\u63a5\u88ab\u8c03\u7528\u7684\uff0c\u800c\u4e0d\u662f\u4f5c\u4e3a\u5bf9\u8c61\u7684\u5c5e\u6027/\u65b9\u6cd5\u8c03\u7528\u7684\uff08\u6bd4\u5982 window.f2()\uff09\uff0c\u6240\u4ee5 this \u7684\u503c\u662f undefined\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'function test2() {\n  "use strict"; //\u4e25\u683c\u6a21\u5f0f\n  return this;\n}\ntest2() === undefined; // true\n')),Object(c.b)("h4",{id:"\u5bf9\u8c61\u65b9\u6cd5\u4e2d\u7684-this"},"\u5bf9\u8c61\u65b9\u6cd5\u4e2d\u7684 this"),Object(c.b)("p",null,"\u51fd\u6570\u4f5c\u4e3a\u67d0\u4e2a\u5bf9\u8c61\u7684\u65b9\u6cd5\u8c03\u7528\u65f6\uff0c\u8fd9\u65f6 this \u5c31\u6307\u8fd9\u4e2a\u4e0a\u7ea7\u5bf9\u8c61\uff08\u8c03\u7528\u8be5\u51fd\u6570\u7684\u5bf9\u8c61\uff09"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var obj = {\n  prop: 22,\n  f: function() {\n    return this.prop;\n  }\n};\n//\u8c03\u7528obj.f()\u65f6\uff0c\u51fd\u6570\u5185\u7684this\u5c06\u7ed1\u5b9a\u5230o\u5bf9\u8c61\u3002\nconsole.log(obj.f()); // 22\n")),Object(c.b)("p",null,"this \u7684\u503c\u53ea\u4e0e\u51fd\u6570 f \u4f5c\u4e3a o \u7684\u6210\u5458\u88ab\u8c03\u7528\u6709\u5173\u7cfb,\u5728\u4f55\u5904\u6216\u8005\u5982\u4f55\u5b9a\u4e49\u8c03\u7528\u51fd\u6570\u5b8c\u5168\u4e0d\u4f1a\u5f71\u54cd\u5230 this \u7684\u884c\u4e3a\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var obj = { prop: 22 };\n\nfunction independent() {\n  return this.prop;\n}\n\n// \u540e\u5b9a\u4e49\nobj.f = independent;\n\nconsole.log(obj.f()); // 22\n")),Object(c.b)("p",null,"\u7c7b\u4f3c\u7684\uff0cthis \u7684\u7ed1\u5b9a\u53ea\u53d7\u6700\u9760\u8fd1\u7684\u6210\u5458\u5f15\u7528\u7684\u5f71\u54cd\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"o.b = {\n  g: independent,\n  prop: 22\n};\n// g\u7684\u4e0a\u4e00\u7ea7\u65f6b\nconsole.log(o.b.g()); // 22\n")),Object(c.b)("h4",{id:"\u539f\u578b\u94fe\u4e2d\u7684-this"},"\u539f\u578b\u94fe\u4e2d\u7684 this"),Object(c.b)("p",null,"\u76f8\u540c\u7684\u6982\u5ff5\u5728\u5b9a\u4e49\u5728\u539f\u578b\u94fe\u4e2d\u7684\u65b9\u6cd5\u4e5f\u662f\u4e00\u81f4\u7684\u3002\u5982\u679c\u8be5\u65b9\u6cd5\u5b58\u5728\u4e8e\u4e00\u4e2a\u5bf9\u8c61\u7684\u539f\u578b\u94fe\u4e0a\uff0c\u90a3\u4e48 this \u6307\u5411\u7684\u662f\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\u7684\u5bf9\u8c61\uff0c\u8868\u73b0\u5f97\u597d\u50cf\u662f\u8fd9\u4e2a\u65b9\u6cd5\u5c31\u5b58\u5728\u4e8e\u8fd9\u4e2a\u5bf9\u8c61\u4e0a\u4e00\u6837\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"//\u5b9a\u4e49o\u5bf9\u8c61 \u5305\u542bf\u533f\u540d\u51fd\u6570\uff0c\u4f5c\u7528\u65f6\u8fd4\u56dea b\u548c\nvar o = {\n  f: function() {\n    return this.a + this.b;\n  }\n};\n//  p \u7ee7\u627f o, \u4f7f\u7528o\u7684\u539f\u578b\u5bf9\u8c61\u53ca\u5176\u5c5e\u6027\u53bb\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61p\nvar p = Object.create(o);\np.a = 1;\np.b = 4;\n\n// p\u8c03\u7528f\nconsole.log(p.f()); // 5\n")),Object(c.b)("p",null,"\u4e0a\u4f8b\u5b50\u4e2d\uff0c\u5bf9\u8c61 p \u6ca1\u6709\u5c5e\u4e8e\u5b83\u81ea\u5df1\u7684 f \u5c5e\u6027\uff0c\u5b83\u7684 f \u5c5e\u6027\u7ee7\u627f\u81ea\u5b83\u7684\u539f\u578b\u3002\u4f46\u662f\u8fd9\u5bf9\u4e8e\u6700\u7ec8\u5728 o \u4e2d\u627e\u5230 f \u5c5e\u6027\u7684\u67e5\u627e\u8fc7\u7a0b\u6765\u8bf4\u6ca1\u6709\u5173\u7cfb\uff1b\u67e5\u627e\u8fc7\u7a0b\u9996\u5148\u4ece p.f \u7684\u5f15\u7528\u5f00\u59cb\uff0c\u6240\u4ee5\u51fd\u6570\u4e2d\u7684 this \u6307\u5411 p\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u56e0\u4e3a f \u662f\u4f5c\u4e3a p \u7684\u65b9\u6cd5\u8c03\u7528\u7684\uff0c\u6240\u4ee5\u5b83\u7684 this \u6307\u5411\u4e86 p\u3002\u8fd9\u662f JavaScript \u7684\u539f\u578b\u7ee7\u627f\u4e2d\u7684\u4e00\u4e2a\u6709\u8da3\u7684\u7279\u6027\u3002\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create"}),"Object.create()")),Object(c.b)("h4",{id:"getter-\u4e0e-setter-\u4e2d\u7684-this"},"getter \u4e0e setter \u4e2d\u7684 this"),Object(c.b)("p",null,"\u8c01\u8c03\u7528\u6307\u5411\u8c01\u7684\u6982\u5ff5\u4e5f\u9002\u7528\u4e8e\u51fd\u6570\u4f5c\u4e3a getter\u3001setter \u8c03\u7528\uff0c\u4f5c\u4e3a getter \u6216 setter \u51fd\u6570\u90fd\u4f1a\u7ed1\u5b9a this \u5230\u4ece\u8bbe\u7f6e\u5c5e\u6027\u6216\u5f97\u5230\u5c5e\u6027\u7684\u90a3\u4e2a\u5bf9\u8c61\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'//\u5b9a\u4e49\nfunction modulus() {\n  return Math.sqrt(this.re * this.re + this.im * this.im);\n}\n\nvar o = {\n  re: 1,\n  im: -1,\n  get phase() {\n    return Math.atan2(this.im, this.re);\n  }\n};\n\n//\u5bf9\u8c61o\u4e0a\u5b9a\u4e49\u4e00\u4e2a\u65b0\u5c5e\u6027modulus\nObject.defineProperty(o, "modulus", {\n  get: modulus,\n  enumerable: true,\n  configurable: true\n});\n\nconsole.log(o.phase, o.modulus); // -0.78 , 1.4142\n')),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"}),"Object.defineProperty")),Object(c.b)("h4",{id:"\u6784\u9020\u51fd\u6570\u4e2d\u7684-this"},"\u6784\u9020\u51fd\u6570\u4e2d\u7684 this"),Object(c.b)("p",null,"\u6240\u8c13\u6784\u9020\u51fd\u6570\uff0c\u5c31\u662f\u901a\u8fc7\u8fd9\u4e2a\u51fd\u6570\u751f\u6210\u4e00\u4e2a\u65b0\u5bf9\u8c61(\u4f7f\u7528 new \u5173\u952e\u5b57),\u5b83\u7684 this \u4e0e\u5373\u5c06\u88ab\u521b\u5efa\u7684\u65b0\u5bf9\u8c61\u7ed1\u5b9a\uff08this \u5c31\u6307\u8fd9\u4e2a\u65b0\u5bf9\u8c61\uff09\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'/*\n * \u6784\u9020\u51fd\u6570\u7684\u5de5\u4f5c\u65b9\u5f0f\u5982\u4e0b\uff1a\n *\n * function MyConstructor(){\n *   // \u771f\u6b63\u51fd\u6570\u4f53\u7684\u4ee3\u7801\u4ece\u8fd9\u91cc\u5f00\u59cb.\n *   // \u5728 this \u4e0a\u521b\u5efa\u5c5e\u6027\uff0c\n *   // \u6839\u636e\u9700\u8981\u5206\u914d\u7ed9\u4ed6\u4eec.  \u4f8b\u5982,\n *   this.fum = "nom";\n *   // \u7b49\u7b49...\n *\n *   // \u5982\u679c\u51fd\u6570\u6709\u4e00\u4e2a\u8fd4\u56de\u8bed\u53e5\n *   // \u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61, \u8fd9\u4e2a\u5bf9\u8c61\u5c06\u662f\n *   // new \u7ed3\u679c\u7684\u8868\u8fbe\u5f0f.  \u9664\u6b64\u4e4b\u5916,\n *   // \u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u662f\u5bf9\u8c61\n *   // \u5f53\u524d\u5bf9\u8c61\u7ed1\u5b9a\u5230 this\n *   // (\u5373\u901a\u5e38\u770b\u5230\u7684\u901a\u5e38\u60c5\u51b5).\n * }\n */\n\nfunction test() {\n  //this\u4e0d\u662f\u5168\u5c40\u5bf9\u8c61,\u5bf9\u5916\u90e8\u65e0\u5f71\u54cd\n  this.x = 1;\n}\nvar o = new test();\nalert(o.x); // 1\n\n// \u4e0d\u6539\u53d8\u5168\u5c40\nvar x = 2;\nfunction test1() {\n  this.x = 1;\n}\no = new test1();\nalert(x); //2\n\n//\u624b\u52a8\u7684\u8bbe\u7f6e\u4e86\u8fd4\u56de\u5bf9\u8c61\uff0c\u4e0ethis\u7ed1\u5b9a\u7684\u9ed8\u8ba4\u5bf9\u8c61\u88ab\u53d6\u6d88\nfunction test3() {\n  this.x = 1;\n  return { x: 3 };\n}\n\no = new test3();\nconsole.log(o.x); //  3\n')),Object(c.b)("h4",{id:"call-\u548c-apply"},"call \u548c apply"),Object(c.b)("p",null,"\u5f53\u4e00\u4e2a\u51fd\u6570\u7684\u51fd\u6570\u4f53\u4e2d\u4f7f\u7528\u4e86 this \u5173\u952e\u5b57\u65f6\uff0c\u901a\u8fc7\u6240\u6709\u51fd\u6570\u90fd\u4ece Function \u5bf9\u8c61\u7684\u539f\u578b\u4e2d\u7ee7\u627f\u7684 call()\u65b9\u6cd5\u548c apply()\u65b9\u6cd5\u8c03\u7528\u65f6\uff0c\u5b83\u7684\u503c\u53ef\u4ee5\u7ed1\u5b9a\u5230\u4e00\u4e2a\u6307\u5b9a\u7684\u5bf9\u8c61\u4e0a\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function add(c, d) {\n  return this.a + this.b + c + d;\n}\n\nvar o = { a: 1, b: 3 };\n\n// \u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u7528\u4f5c\u201cthis\u201d\u7684\u5bf9\u8c61\uff0c\u540e\u7eed\u53c2\u6570\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u51fd\u6570\u8c03\u7528\nadd.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16\n\n// \u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u7528\u4f5c\u201cthis\u201d\u7684\u5bf9\u8c61\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u5176\u6210\u5458\u7528\u4f5c\u51fd\u6570\u8c03\u7528\u4e2d\u7684\u53c2\u6570\nadd.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34\n")),Object(c.b)("p",null,"\u6ce8\u610f\uff1a\u5982\u679c\u4f20\u9012\u7684 this \u503c\u4e0d\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0cJavaScript \u5c06\u4f1a\u5c1d\u8bd5\u4f7f\u7528\u5185\u90e8 ToObject\uff08\u4f7f\u7528\u76f8\u5173\u6784\u9020\u51fd\u6570\uff09 \u64cd\u4f5c\u5c06\u5176\u8f6c\u6362\u4e3a\u5bf9\u8c61\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function bar() {\n  console.log(Object.prototype.toString.call(this));\n}\n//\u901a\u8fc7new Number(7)\u8f6c\u6362\u4e3a\u5bf9\u8c61\nbar.call(7); // [object Number]\n")),Object(c.b)("h4",{id:"bind-\u65b9\u6cd5"},"bind \u65b9\u6cd5"),Object(c.b)("p",null,"ES5 \u4e2d\u5f15\u5165\u4e86 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/bind"}),"Function.prototype.bind"),",\u8c03\u7528 f.bind(someObject)\u4f1a\u521b\u5efa\u4e00\u4e2a\u4e0e f \u5177\u6709\u76f8\u540c\u51fd\u6570\u4f53\u548c\u4f5c\u7528\u57df\u7684\u51fd\u6570\uff0c\u4f46\u662f\u5728\u8fd9\u4e2a\u65b0\u51fd\u6570\u4e2d\uff0cthis \u5c06\u6c38\u4e45\u5730\u88ab\u7ed1\u5b9a\u5230\u4e86 bind \u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u65e0\u8bba\u8fd9\u4e2a\u51fd\u6570\u662f\u5982\u4f55\u88ab\u8c03\u7528\u7684\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'function f() {\n  return this.a;\n}\n\nvar g = f.bind({ a: "azerty" });\nconsole.log(g()); // azerty\n\nvar o = { a: 37, f: f, g: g };\nconsole.log(o.f(), o.g()); // 37, azerty\n')),Object(c.b)("h3",{id:"dom-\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4e2d\u7684-this"},"DOM \u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4e2d\u7684 this"),Object(c.b)("p",null,"\u5f53\u51fd\u6570\u88ab\u7528\u4f5c\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u65f6\uff0c\u5b83\u7684 this \u6307\u5411\u89e6\u53d1\u4e8b\u4ef6\u7684\u5143\u7d20\uff08\u4e00\u4e9b\u6d4f\u89c8\u5668\u5728\u4f7f\u7528\u975e addEventListener \u7684\u51fd\u6570\u52a8\u6001\u6dfb\u52a0\u76d1\u542c\u51fd\u6570\u65f6\u4e0d\u9075\u5b88\u8fd9\u4e2a\u7ea6\u5b9a\uff09\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// \u88ab\u8c03\u7528\u65f6\uff0c\u5c06\u5173\u8054\u7684\u5143\u7d20\u53d8\u6210\u84dd\u8272\nfunction bluify(e) {\n  console.log(this === e.currentTarget); // \u603b\u662f true\n\n  // \u5f53 currentTarget \u548c target \u662f\u540c\u4e00\u4e2a\u5bf9\u8c61\u662f\u4e3a true\n  console.log(this === e.target);\n  this.style.backgroundColor = "#A5D9F3";\n}\n\n// \u83b7\u53d6\u6587\u6863\u4e2d\u7684\u6240\u6709\u5143\u7d20\u7684\u5217\u8868\nvar elements = document.getElementsByTagName("*");\n\n// \u5c06bluify\u4f5c\u4e3a\u5143\u7d20\u7684\u70b9\u51fb\u76d1\u542c\u51fd\u6570\uff0c\u5f53\u5143\u7d20\u88ab\u70b9\u51fb\u65f6\uff0c\u5c31\u4f1a\u53d8\u6210\u84dd\u8272\nfor (var i = 0; i < elements.length; i++) {\n  elements[i].addEventListener("click", bluify, false);\n}\n')),Object(c.b)("h3",{id:"\u5185\u8054\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4e2d\u7684-this"},"\u5185\u8054\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4e2d\u7684 this"),Object(c.b)("p",null,"\u5f53\u4ee3\u7801\u88ab\u5185\u8054\u5904\u7406\u51fd\u6570\u8c03\u7528\u65f6\uff0c\u5b83\u7684 this \u6307\u5411\u76d1\u542c\u5668\u6240\u5728\u7684 DOM \u5143\u7d20\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<button onclick="alert(this.tagName.toLowerCase());">Show this</button>\n')),Object(c.b)("p",null,"\u4e0a\u9762\u7684 alert \u4f1a\u663e\u793a button\u3002\u6ce8\u610f\u53ea\u6709\u5916\u5c42\u4ee3\u7801\u4e2d\u7684 this \u662f\u8fd9\u6837\u8bbe\u7f6e\u7684\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<button onclick="alert((function(){return this})());">Show inner this</button>\n')),Object(c.b)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6ca1\u6709\u8bbe\u7f6e\u5185\u90e8\u51fd\u6570\u7684 this\uff0c\u6240\u4ee5\u5b83\u6307\u5411 global/window \u5bf9\u8c61\uff08\u5373\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\u8c03\u7528\u7684\u51fd\u6570\u672a\u8bbe\u7f6e this \u65f6\u6307\u5411\u7684\u9ed8\u8ba4\u5bf9\u8c61\uff09\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<a href="#" onclick="alert(this);"> Show this </a>\n\x3c!-- \u5f39\u51fa url+# \u5e76\u8df3\u8f6c --\x3e\n\n<a href="javascript:;" onclick="alert(this);"> Show this </a>\n\x3c!-- \u5f39\u51fa  javascript:; --\x3e\n<a href="https://www.baidu.com" onclick="alert(this);"> Show this </a>\n\x3c!-- \u5f39\u51fa https://www.baidu.com \u5e76\u8df3\u8f6c --\x3e\n')),Object(c.b)("p",null,"\u4f7f\u7528 a \u6807\u7b7e\u65f6\u5f39\u51fa href \u7684\u503c\uff0c\u5373 this \u4e3a href \u7684\u503c\u3002"))}s.isMDXComponent=!0}}]);