(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{210:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return l})),r.d(n,"default",(function(){return p}));var t=r(1),a=r(9),i=(r(0),r(224)),o={id:"divide-and-conquer",title:"\u5206\u6cbb\u7b97\u6cd5"},c={id:"interview/algorithms/divide-and-conquer",title:"\u5206\u6cbb\u7b97\u6cd5",description:"\u5206\u800c\u6cbb\u4e4b\u662f\u4e00\u79cd\u57fa\u4e8e\u591a\u5206\u652f\u9012\u5f52\u7684\u7b97\u6cd5\u8bbe\u8ba1\u8303\u4f8b\u3002\u5206\u800c\u6cbb\u4e4b\u7b97\u6cd5\u7684\u5de5\u4f5c\u539f\u7406\u662f\u5c06\u95ee\u9898\u9012\u5f52\u5206\u89e3\u4e3a\u4e24\u4e2a\u6216\u591a\u4e2a\u76f8\u540c\u6216\u76f8\u5173\u7c7b\u578b\u7684\u5b50\u95ee\u9898\uff0c\u76f4\u5230\u8fd9\u4e9b\u5b50\u95ee\u9898\u53d8\u5f97\u8db3\u591f\u7b80\u5355\u4ee5\u81f3\u4e8e\u53ef\u4ee5\u76f4\u63a5\u89e3\u51b3\u3002\u7136\u540e\u5c06\u5b50\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6848\u7ec4\u5408\u8d77\u6765\uff0c\u4ee5\u89e3\u51b3\u539f\u59cb\u95ee\u9898\u3002",source:"@site/docs/interview/algorithms/divide-and-conquer.md",permalink:"/docs/interview/algorithms/divide-and-conquer",editUrl:"https://github.com/kenve/kenve.github.io/edit/docusaurus/docs/interview/algorithms/divide-and-conquer.md",sidebar:"interviewSideBar",previous:{title:"\u968f\u673a\u7b97\u6cd5",permalink:"/docs/interview/algorithms/randomized"},next:{title:"\u52a8\u6001\u89c4\u5212",permalink:"/docs/interview/algorithms/dp"}},l=[{value:"\u4e8c\u5206\u641c\u7d22",id:"\u4e8c\u5206\u641c\u7d22",children:[]}],u={rightToc:l};function p(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u5206\u800c\u6cbb\u4e4b\u662f\u4e00\u79cd\u57fa\u4e8e\u591a\u5206\u652f\u9012\u5f52\u7684\u7b97\u6cd5\u8bbe\u8ba1\u8303\u4f8b\u3002\u5206\u800c\u6cbb\u4e4b\u7b97\u6cd5\u7684\u5de5\u4f5c\u539f\u7406\u662f\u5c06\u95ee\u9898\u9012\u5f52\u5206\u89e3\u4e3a\u4e24\u4e2a\u6216\u591a\u4e2a\u76f8\u540c\u6216\u76f8\u5173\u7c7b\u578b\u7684\u5b50\u95ee\u9898\uff0c\u76f4\u5230\u8fd9\u4e9b\u5b50\u95ee\u9898\u53d8\u5f97\u8db3\u591f\u7b80\u5355\u4ee5\u81f3\u4e8e\u53ef\u4ee5\u76f4\u63a5\u89e3\u51b3\u3002\u7136\u540e\u5c06\u5b50\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6848\u7ec4\u5408\u8d77\u6765\uff0c\u4ee5\u89e3\u51b3\u539f\u59cb\u95ee\u9898\u3002"),Object(i.b)("p",null,"\u5206\u800c\u6cbb\u4e4b\u7b97\u6cd5\u53ef\u4ee5\u5206\u6210\u4e09\u4e2a\u90e8\u5206\uff1a"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u5206\u89e3\u539f\u95ee\u9898\u4e3a\u591a\u4e2a\u5b50\u95ee\u9898\uff08\u539f\u95ee\u9898\u7684\u591a\u4e2a\u5c0f\u5b9e\u4f8b\uff09\u3002"),Object(i.b)("li",{parentName:"ol"},"\u89e3\u51b3\u5b50\u95ee\u9898\uff0c\u7528\u8fd4\u56de\u89e3\u51b3\u5b50\u95ee\u9898\u7684\u65b9\u5f0f\u7684\u9012\u5f52\u7b97\u6cd5\u3002\u9012\u5f52\u7b97\u6cd5\u7684\u57fa\u672c\u60c5\u5f62\u53ef\u4ee5\u7528\u6765\u89e3\u51b3\u5b50\u95ee\u9898\u3002"),Object(i.b)("li",{parentName:"ol"},"\u7ec4\u5408\u8fd9\u4e9b\u5b50\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u5f0f\uff0c\u5f97\u5230\u539f\u95ee\u9898\u7684\u89e3\u3002")),Object(i.b)("p",null,"\u4e0b\u9762\u770b\u770b\uff0c\u5982\u4f55\u5c06\u4e8c\u5206\u641c\u7d22\u7528\u5206\u800c\u6cbb\u4e4b\u7684\u65b9\u5f0f\u5b9e\u73b0"),Object(i.b)("h2",{id:"\u4e8c\u5206\u641c\u7d22"},"\u4e8c\u5206\u641c\u7d22"),Object(i.b)("p",null,"\u5728",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/interview/algorithms/search#%E4%BA%8C%E5%88%86%E6%90%9C%E7%B4%A2"}),"\u641c\u7d22\u7b97\u6cd5"),"\u4e2d\u4f7f\u7528\u4e86\u8fed\u4ee3\u7684\u65b9\u5f0f\u5b9e\u73b0\u4e8c\u5206\u641c\u7d22\u3002\u540c\u6837\u53ef\u4ee5\u7528\u5206\u800c\u6cbb\u4e4b\u7684\u65b9\u5f0f\u5b9e\u73b0\u8fd9\u4e2a\u7b97\u6cd5\uff0c\u903b\u8f91\u5982\u4e0b\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u5206\u89e3"),"\uff1a\u8ba1\u7b97 mid \u5e76\u641c\u7d22\u6570\u7ec4\u8f83\u5c0f\u6216\u8f83\u5927\u7684\u4e00\u534a\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u89e3\u51b3"),"\uff1a\u5728\u8f83\u5c0f\u6216\u8f83\u5927\u7684\u4e00\u534a\u4e2d\u641c\u7d22\u503c\u3002"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u5408\u5e76"),"\uff1a\u8fd9\u6b65\u4e0d\u9700\u8981\uff0c\u56e0\u4e3a\u6211\u4eec\u76f4\u63a5\u8fd4\u56de\u4e86\u7d22\u5f15\u503c\u3002")),Object(i.b)("p",null,"\u5206\u800c\u6cbb\u4e4b\u7248\u672c\u7684\u4e8c\u5206\u641c\u7d22\u7b97\u6cd5\u5982\u4e0b\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"// \u6bd4\u8f83\u5e38\u91cf\nconst Compare = {\n  LESS_THAN: -1,\n  BIGGER_THAN: 1,\n  EQUALS: 0,\n};\n// \u627e\u4e0d\u5230\u503c\u8fd4\u56de\nconst DOES_NOT_EXIST = -1;\n\n/**\n * \u9ed8\u8ba4\u7684\u6bd4\u8f83\u51fd\u6570\n */\nfunction defaultCompare(a, b) {\n  if (a === b) {\n    return Compare.EQUALS;\n  }\n  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;\n}\n// \u968f\u610f\u4e00\u79cd\u6392\u5e8f\u7b97\u6cd5\nimport { quickSort } from 'xxx';\n\n/**\n * binarySearchRecursive \u662f\u5206\u800c\u6cbb\u4e4b \u7b97\u6cd5\n */\nfunction binarySearchRecursive(array, value, low, high, compareFn = defaultCompare) {\n  if (low <= high) {\n    const mid = Math.floor((low + high) / 2);\n    const element = array[mid];\n    // \u5728\u8ba1\u7b97 mid \u5143\u7d20\u7684\u7d22\u5f15\u503c\u540e\uff0c\u786e\u5b9a\u5f85\u641c\u7d22\u7684\u503c\u6bd4 mid \u5927\u8fd8\u662f\u5c0f\n    if (compareFn(element, value) === Compare.LESS_THAN) {\n      // \u5982\u679c\u5c0f\u8c03\u7528 binarySearchRecursive \u51fd\u6570\uff0c\u6539\u53d8 low \u53c2\u6570\n      return binarySearchRecursive(array, value, mid + 1, high, compareFn);\n    }\n    if (compareFn(element, value) === Compare.BIGGER_THAN) {\n      // \u5982\u679c\u5927\uff0c\u8c03\u7528 binarySearchRecursive \u51fd\u6570\uff0c\u6539\u53d8 high \u53c2\u6570\n      return binarySearchRecursive(array, value, low, mid - 1, compareFn);\n    }\n    // \u76f8\u7b49\uff0c\u627e\u5230\u4e86\u8fd9\u4e2a\u503c\n    return mid;\n  }\n  //   low \u6bd4 high \u8981\u5927\uff0c\u8868\u793a\u7b97\u6cd5\u6ca1\u6709\u627e\u5230\u8fd9\u4e2a\u503c\n  return DOES_NOT_EXIST;\n}\n\n/**\n * \u4e8c\u5206\u641c\u7d22\n */\nfunction binarySearch(array, value, compareFn = defaultCompare) {\n  // \u6392\u5e8f array.sort();\n  const sortedArray = quickSort(array);\n  const low = 0;\n  const high = sortedArray.length - 1;\n  // \u5c06 low \u53c2\u6570\u4ee5 0 \u4f20\u9012\uff0c\u5c06 high \u53c2\u6570\u4ee5 sortedArray.length - 1 \u4f20\u9012\u6765\u5728\u5df2\u6392\u5e8f\u7684\u6570\u7ec4\u4e2d\u8fdb\u884c\u641c\u7d22\n  return binarySearchRecursive(array, value, low, high, compareFn);\n}\n")),Object(i.b)("p",null,"\u4e0b\u56fe\u5c55\u793a\u4e86\u7b97\u6cd5\u7684\u8fc7\u7a0b\uff1a"),Object(i.b)("p",null,Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"/img/binary-search-recursive.svg",alt:"\u4e8c\u5206\u641c\u7d22\u52a8\u6001\u89c4\u5212"}))))}p.isMDXComponent=!0},224:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c({},n,{},e)),r},b=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(r),s=t,d=b["".concat(o,".").concat(s)]||b[s]||m[s]||i;return r?a.a.createElement(d,c({ref:n},u,{components:r})):a.a.createElement(d,c({ref:n},u))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);