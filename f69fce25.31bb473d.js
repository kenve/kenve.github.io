(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{196:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var b=t(1),r=t(9),a=(t(0),t(203)),i={id:"euclidean",title:"\u6b27\u51e0\u91cc\u5fb7\u7b97\u6cd5"},l={id:"interview/algorithms/euclidean",title:"\u6b27\u51e0\u91cc\u5fb7\u7b97\u6cd5",description:"\u6b27\u51e0\u91cc\u5fb7\u7b97\u6cd5\uff08Euclidean algorithm\uff09\u53c8\u79f0\u8f97\u8f6c\u76f8\u9664\u6cd5\uff0c\u5176\u76ee\u7684\u662f\u8ba1\u7b97\u4e24\u4e2a\u6b63\u6574\u6570\u7684\u6700\u5927\u516c\u7ea6\u6570\u3002\u8ba1\u7b97\u516c\u5f0f `gcd(a,b) = gcd(b,a mod b)`\u3002",source:"@site/docs/interview/algorithms/euclidean.md",permalink:"/docs/interview/algorithms/euclidean",editUrl:"https://github.com/kenve/kenve.github.io/edit/docusaurus/docs/interview/algorithms/euclidean.md",sidebar:"interviewSideBar",previous:{title:"\u94fe\u8868 LinkedList",permalink:"/docs/interview/data-structure/linked-list"}},c=[{value:"\u9012\u5f52\u7248\u672c",id:"\u9012\u5f52\u7248\u672c",children:[]},{value:"\u9664\u6cd5\u7248\u672c",id:"\u9664\u6cd5\u7248\u672c",children:[]},{value:"\u51cf\u6cd5\u7248\u672c",id:"\u51cf\u6cd5\u7248\u672c",children:[]}],o={rightToc:c};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(b.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u6b27\u51e0\u91cc\u5fb7\u7b97\u6cd5\uff08Euclidean algorithm\uff09\u53c8\u79f0\u8f97\u8f6c\u76f8\u9664\u6cd5\uff0c\u5176\u76ee\u7684\u662f\u8ba1\u7b97\u4e24\u4e2a\u6b63\u6574\u6570\u7684\u6700\u5927\u516c\u7ea6\u6570\u3002\u8ba1\u7b97\u516c\u5f0f ",Object(a.b)("inlineCode",{parentName:"p"},"gcd(a,b) = gcd(b,a mod b)"),"\u3002"),Object(a.b)("h2",{id:"\u9012\u5f52\u7248\u672c"},"\u9012\u5f52\u7248\u672c"),Object(a.b)("p",null,"\u8ba1\u7b97\u4e24\u4e2a\u975e\u8d1f\u6574\u6570 ",Object(a.b)("inlineCode",{parentName:"p"},"a")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"b")," \u7684\u6700\u5927\u516c\u7ea6\u6570\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u82e5 ",Object(a.b)("inlineCode",{parentName:"li"},"b")," \u662f ",Object(a.b)("inlineCode",{parentName:"li"},"0"),"\uff0c\u5219\u6700\u5927\u516c\u7ea6\u6570\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"a"),"\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5426\u5219\uff0c\u5c06 ",Object(a.b)("inlineCode",{parentName:"li"},"a")," \u9664\u4ee5 ",Object(a.b)("inlineCode",{parentName:"li"},"b")," \u5f97\u5230\u4f59\u6570 ",Object(a.b)("inlineCode",{parentName:"li"},"r"),"\uff0c",Object(a.b)("inlineCode",{parentName:"li"},"a")," \u548c ",Object(a.b)("inlineCode",{parentName:"li"},"b")," \u7684\u6700\u5927\u516c\u7ea6\u6570\u5373\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"b")," \u548c ",Object(a.b)("inlineCode",{parentName:"li"},"r")," \u7684\u6700\u5927\u516c\u7ea6\u6570\u3002")),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-js"}),"function gcd(a, b) {\n  return b == 0 ? a : gcd(b, a % b);\n}\n")),Object(a.b)("h2",{id:"\u9664\u6cd5\u7248\u672c"},"\u9664\u6cd5\u7248\u672c"),Object(a.b)("p",null,"\u5728\u7b2c k \u6b21\u5faa\u73af\u5f00\u59cb\u65f6\uff0c\u53d8\u91cf ",Object(a.b)("inlineCode",{parentName:"p"},"b")," \u7684\u503c\u662f\u524d\u4e00\u6b21\u8fd0\u7b97\u7684\u4f59\u6570 r",Object(a.b)("sub",null,"k\u22121"),"\uff0c\u53d8\u91cf ",Object(a.b)("inlineCode",{parentName:"p"},"a")," \u7684\u503c\u662f\u518d\u524d\u4e00\u6b21\u8fd0\u7b97\u7684\u4f59\u6570 r",Object(a.b)("sub",null,"k\u22122"),"\u3002"),Object(a.b)("p",null,"\u6b65\u9aa4\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"b = a mod b")," \u7684\u4f5c\u7528\u7b49\u540c\u4e8e\u9012\u5f52\u5f0f r",Object(a.b)("sub",null,"k")," = r",Object(a.b)("sub",null,"k\u22122")," mod r",Object(a.b)("sub",null,"k\u22121")," \u3002"),Object(a.b)("li",{parentName:"ul"},"\u53d8\u91cf ",Object(a.b)("inlineCode",{parentName:"li"},"t")," \u7684\u529f\u80fd\u662f\u5728\u4e0b\u4e00\u4e2a\u4f59\u6570 r",Object(a.b)("sub",null,"k")," \u8ba1\u7b97\u8fc7\u7a0b\u4e2d\u4e34\u65f6\u6027\u5730\u4fdd\u5b58 r",Object(a.b)("sub",null,"k\u22121")," \u7684\u503c\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5728\u4e00\u6b21\u5faa\u73af\u7ed3\u675f\u65f6\uff0c\u53d8\u91cf ",Object(a.b)("inlineCode",{parentName:"li"},"b")," \u7684\u503c\u662f\u524d\u4e00\u6b21\u8fd0\u7b97\u7684\u4f59\u6570 r",Object(a.b)("sub",null,"k"),"\uff0c\u53d8\u91cf ",Object(a.b)("inlineCode",{parentName:"li"},"a")," \u7684\u503c\u662f\u518d\u524d\u4e00\u6b21\u8fd0\u7b97\u7684\u4f59\u6570 r",Object(a.b)("sub",null,"k\u22121"),"\u3002"),Object(a.b)("li",{parentName:"ul"},"\u76f4\u5230 ",Object(a.b)("inlineCode",{parentName:"li"},"b === 0"),"\uff0c\u8fd4\u56de ",Object(a.b)("inlineCode",{parentName:"li"},"a")," \u7684\u503c\u5373\u4e3a\u6700\u5927\u516c\u7ea6\u6570\u3002")),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-js"}),"function gcd(a, b) {\n  while (b != 0) {\n    let t = a % b;\n    a = b;\n    b = t;\n  }\n  return a;\n}\n")),Object(a.b)("h2",{id:"\u51cf\u6cd5\u7248\u672c"},"\u51cf\u6cd5\u7248\u672c"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u53d8\u91cf ",Object(a.b)("inlineCode",{parentName:"li"},"a")," \u548c ",Object(a.b)("inlineCode",{parentName:"li"},"b")," \u7684\u503c\u5206\u522b\u662f\u524d\u4e24\u6b21\u7684\u4f59\u6570 r",Object(a.b)("sub",null,"k\u22121"),"\u548c r",Object(a.b)("sub",null,"k\u22122"),"\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5047\u5b9a\u7b2c ",Object(a.b)("inlineCode",{parentName:"li"},"k")," \u6b21\u5faa\u73af\u5f00\u59cb\u65f6 ",Object(a.b)("inlineCode",{parentName:"li"},"a")," \u5927\u4e8e ",Object(a.b)("inlineCode",{parentName:"li"},"b"),"\uff0c\u90a3\u4e48 ",Object(a.b)("inlineCode",{parentName:"li"},"a")," \u7b49\u4e8e r",Object(a.b)("sub",null,"k\u22122"),"\uff0c\u56e0\u4e3a r",Object(a.b)("sub",null,"k\u22122")," > r",Object(a.b)("sub",null,"k\u22121"),"\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5728\u5faa\u73af\u8fc7\u7a0b\u4e2d\uff0c",Object(a.b)("inlineCode",{parentName:"li"},"a")," \u91cd\u590d\u51cf\u53bb ",Object(a.b)("inlineCode",{parentName:"li"},"b")," \u76f4\u5230\u6bd4 ",Object(a.b)("inlineCode",{parentName:"li"},"b")," \u5c0f\uff0c\u6b64\u65f6 ",Object(a.b)("inlineCode",{parentName:"li"},"a")," \u5c31\u662f\u4e0b\u4e00\u4e2a\u4f59\u6570 r",Object(a.b)("sub",null,"k"),"\uff1b\u7136\u540e ",Object(a.b)("inlineCode",{parentName:"li"},"b")," \u91cd\u590d\u51cf\u53bb ",Object(a.b)("inlineCode",{parentName:"li"},"a")," \u76f4\u5230\u6bd4 ",Object(a.b)("inlineCode",{parentName:"li"},"a")," \u5c0f\uff0c\u6b64\u65f6 ",Object(a.b)("inlineCode",{parentName:"li"},"b")," \u5c31\u662f\u4e0b\u4e00\u4e2a\u4f59\u6570 r",Object(a.b)("sub",null,"k+1"),"\uff1b\u91cd\u590d\u6267\u884c\u76f4\u5230 ",Object(a.b)("inlineCode",{parentName:"li"},"b == 0"),"\u3002")),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-js"}),"function gcd(a, b) {\n  if (a == 0) {\n    return b;\n  }\n  while (b != 0) {\n    if (a > b) {\n      a = a - b;\n    } else {\n      b = b - a;\n    }\n  }\n  return a;\n}\n")),Object(a.b)("p",null,"\u5b9e\u8df5\u8fd0\u7528\uff1a",Object(a.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/kenve/leetcode/blob/master/all/%E5%8D%A1%E7%89%8C%E5%88%86%E7%BB%84.md"}),"LeetCode 914.\u5361\u724c\u5206\u7ec4")))}u.isMDXComponent=!0},203:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return j}));var b=t(0),r=t.n(b);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);n&&(b=b.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,b)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,b,r=function(e,n){if(null==e)return{};var t,b,r={},a=Object.keys(e);for(b=0;b<a.length;b++)t=a[b],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(b=0;b<a.length;b++)t=a[b],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),u=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},p=function(e){var n=u(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},O=Object(b.forwardRef)((function(e,n){var t=e.components,b=e.mdxType,a=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=u(t),O=b,j=p["".concat(i,".").concat(O)]||p[O]||d[O]||a;return t?r.a.createElement(j,l({ref:n},o,{components:t})):r.a.createElement(j,l({ref:n},o))}));function j(e,n){var t=arguments,b=n&&n.mdxType;if("string"==typeof e||b){var a=t.length,i=new Array(a);i[0]=O;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:b,i[1]=l;for(var o=2;o<a;o++)i[o]=t[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"}}]);