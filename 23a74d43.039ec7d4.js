(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{159:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return f}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),m=t,f=s["".concat(i,".").concat(m)]||s[m]||b[m]||o;return r?a.a.createElement(f,l(l({ref:n},u),{},{components:r})):a.a.createElement(f,l({ref:n},u))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},245:function(e,n,r){"use strict";r.r(n),n.default=r.p+"assets/images/sequential-search-05e1c4e4a107844a49fd80bdf115342f.svg"},246:function(e,n,r){"use strict";r.r(n),n.default=r.p+"assets/images/binary-search-a7ac8abc3a752491dbd51ae249c17668.svg"},247:function(e,n,r){"use strict";r.r(n),n.default=r.p+"assets/images/interpolation-search-461b0524810fe8c06c609702a8dea508.svg"},86:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return l})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return p}));var t=r(3),a=r(7),o=(r(0),r(159)),i={id:"search",title:"\u641c\u7d22\u7b97\u6cd5"},l={unversionedId:"interview/algorithms/search",id:"interview/algorithms/search",isDocsHomePage:!1,title:"\u641c\u7d22\u7b97\u6cd5",description:"\u987a\u5e8f\u641c\u7d22",source:"@site/docs/interview/algorithms/search.md",slug:"/interview/algorithms/search",permalink:"/docs/interview/algorithms/search",editUrl:"https://github.com/kenve/kenve.github.io/edit/docusaurus/docs/interview/algorithms/search.md",version:"current",sidebar:"interviewSideBar",previous:{title:"\u6392\u5e8f\u7b97\u6cd5",permalink:"/docs/interview/algorithms/sorting"},next:{title:"\u968f\u673a\u7b97\u6cd5",permalink:"/docs/interview/algorithms/randomized"}},c=[{value:"\u987a\u5e8f\u641c\u7d22",id:"\u987a\u5e8f\u641c\u7d22",children:[]},{value:"\u4e8c\u5206\u641c\u7d22",id:"\u4e8c\u5206\u641c\u7d22",children:[]},{value:"\u5185\u63d2\u641c\u7d22",id:"\u5185\u63d2\u641c\u7d22",children:[]}],u={rightToc:c};function p(e){var n=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,i,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u987a\u5e8f\u641c\u7d22"},"\u987a\u5e8f\u641c\u7d22"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u987a\u5e8f"),"\u6216",Object(o.b)("strong",{parentName:"p"},"\u7ebf\u6027\u641c\u7d22"),"\u662f\u6700\u57fa\u672c\u7684\u641c\u7d22\u7b97\u6cd5\u3002\u5b83\u7684\u673a\u5236\u662f\uff0c\u5c06\u6bcf\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\u4e2d\u7684\u5143\u7d20\u548c\u6211\u4eec\u8981\u627e\u7684\u5143\u7d20\u505a\u6bd4\u8f83\u3002\u987a\u5e8f\u641c\u7d22\u662f\u6700\u4f4e\u6548\u7684\u4e00\u79cd\u641c\u7d22\u7b97\u6cd5\u3002"),Object(o.b)("p",null,"\u4ee5\u4e0b\u662f\u5176\u5b9e\u73b0\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const DOES_NOT_EXIST = -1;\n\nfunction sequentialSearch(array, value, equalsFn = defaultEquals) {\n  // \u987a\u5e8f\u641c\u7d22\u8fed\u4ee3\u6574\u4e2a\u6570\u7ec4\n  for (let i = 0; i < array.length; i++) {\n    // \u5e76\u5c06\u6bcf\u4e2a\u6570\u7ec4\u5143\u7d20\u548c\u641c\u7d22\u9879\u505a\u6bd4\u8f83\n    if (equalsFn(value, array[i])) {\n      // \u5982\u679c\u641c\u7d22\u5230\u4e86\uff0c\u7b97\u6cd5\u5c06\u7528\u8fd4\u56de\u503c\u6765\u6807\u793a\u641c\u7d22\u6210\u529f\n      return i;\n    }\n  }\n  // \u5982\u679c\u6ca1\u6709\u627e\u5230\u8be5\u9879\uff0c\u5219\u8fd4\u56de -1\n  return DOES_NOT_EXIST;\n}\n")),Object(o.b)("p",null,"\u5047\u5b9a\u6709\u6570\u7ec4 ",Object(o.b)("inlineCode",{parentName:"p"},"[5, 4, 3, 2, 1]")," \u548c\u5f85\u641c\u7d22\u503c ",Object(o.b)("inlineCode",{parentName:"p"},"3"),"\uff0c\u4e0b\u56fe\u5c55\u793a\u4e86\u987a\u5e8f\u641c\u7d22\u7684\u793a\u610f\u56fe\uff1a"),Object(o.b)("p",null,Object(o.b)("img",{alt:"\u987a\u5e8f\u641c\u7d22",src:r(245).default})),Object(o.b)("h2",{id:"\u4e8c\u5206\u641c\u7d22"},"\u4e8c\u5206\u641c\u7d22"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u4e8c\u5206\u641c\u7d22"),"\u7b97\u6cd5\u7684\u539f\u7406\u548c\u731c\u6570\u5b57\u6e38\u620f\u7c7b\u4f3c\uff0c\u5c31\u662f\u90a3\u4e2a\u6709\u4eba\u8bf4\u201c\u6211\u6b63\u60f3\u7740\u4e00\u4e2a 1~100 \u7684\u6570\u201d\u7684\n\u6e38\u620f\u3002\u6211\u4eec\u6bcf\u56de\u5e94\u4e00\u4e2a\u6570\uff0c\u90a3\u4e2a\u4eba\u5c31\u4f1a\u8bf4\u8fd9\u4e2a\u6570\u662f\u9ad8\u4e86\u3001\u4f4e\u4e86\u8fd8\u662f\u5bf9\u4e86\u3002\u8fd9\u4e2a\u7b97\u6cd5\u8981\u6c42\u88ab\u641c\u7d22\u7684\u6570\u636e\u7ed3\u6784\u5df2\u6392\u5e8f\u3002\u4ee5\u4e0b\u662f\u8be5\u7b97\u6cd5\u9075\u5faa\u7684\u6b65\u9aa4\u3002"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u9009\u62e9\u6570\u7ec4\u7684\u4e2d\u95f4\u503c\u3002"),Object(o.b)("li",{parentName:"ol"},"\u5982\u679c\u9009\u4e2d\u503c\u662f\u5f85\u641c\u7d22\u503c\uff0c\u90a3\u4e48\u7b97\u6cd5\u6267\u884c\u5b8c\u6bd5\uff08\u503c\u627e\u5230\u4e86\uff09\u3002"),Object(o.b)("li",{parentName:"ol"},"\u5982\u679c\u5f85\u641c\u7d22\u503c\u6bd4\u9009\u4e2d\u503c\u8981\u5c0f\uff0c\u5219\u8fd4\u56de\u6b65\u9aa4 1 \u5e76\u5728\u9009\u4e2d\u503c\u5de6\u8fb9\u7684\u5b50\u6570\u7ec4\u4e2d\u5bfb\u627e\uff08\u8f83\u5c0f\uff09\u3002"),Object(o.b)("li",{parentName:"ol"},"\u5982\u679c\u5f85\u641c\u7d22\u503c\u6bd4\u9009\u4e2d\u503c\u8981\u5927\uff0c\u5219\u8fd4\u56de\u6b65\u9aa4 1 \u5e76\u5728\u9009\u79cd\u503c\u53f3\u8fb9\u7684\u5b50\u6570\u7ec4\u4e2d\u5bfb\u627e\uff08\u8f83\u5927\uff09\u3002")),Object(o.b)("p",null,"\u4ee5\u4e0b\u662f\u5176\u5b9e\u73b0\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const Compare = {\n  LESS_THAN: -1,\n  BIGGER_THAN: 1,\n  EQUALS: 0,\n};\n\nconst DOES_NOT_EXIST = -1;\n\nfunction defaultCompare(a, b) {\n  if (a === b) {\n    return Compare.EQUALS;\n  }\n  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;\n}\n// \u5f00\u59cb\u524d\u9700\u8981\u5148\u5c06\u6570\u7ec4\u6392\u5e8f\uff0c\u5bfc\u5165\u5feb\u6392\u7b97\u6cd5\nimport { quickSort } from './quicksort';\n\n/**\n * \u4e8c\u5206\u641c\u7d22\n */\nfunction binarySearch(array, value, compareFn = defaultCompare) {\n  // \u6570\u7ec4\u6392\u5e8f\n  const sortedArray = quickSort(array);\n  // \u8bbe\u7f6e low \u548c high \u6307\u9488\uff08\u5b83\u4eec\u662f\u8fb9\u754c\uff09\n  let low = 0;\n  let high = sortedArray.length - 1;\n  // \u5f53 low \u6bd4 high \u5c0f\u65f6\n  while (low <= high) {\n    // \u8ba1\u7b97\u5f97\u5230\u4e2d\u95f4\u9879\u7d22\u5f15\u5e76\u53d6\u5f97\u4e2d\u95f4\u9879\u7684\u503c\n    const mid = Math.floor((low + high) / 2);\n    const element = sortedArray[mid];\n    // \u6bd4\u8f83\u9009\u4e2d\u9879\u7684\u503c\u548c\u641c\u7d22\u503c\n    // \u5982\u679c\u5c0f\u4e86\uff0c\u5219\u9009\u62e9\u6570\u7ec4\u4f4e\u534a\u8fb9\u5e76\u91cd\u65b0\u5f00\u59cb\n    if (compareFn(element, value) === Compare.LESS_THAN) {\n      low = mid + 1;\n    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {\n      // \u5982\u679c\u9009\u4e2d\u9879\u7684\u503c\u6bd4\u641c\u7d22\u503c\u5927\u4e86\uff0c\u5219\u9009\u62e9\u6570\u7ec4\u9ad8\u534a\u8fb9\u5e76\u91cd\u65b0\u5f00\u59cb\n      high = mid - 1;\n    } else {\n      // \u82e5\u4e24\u8005\u90fd\u662f\u4e0d\u662f\uff0c\u5219\u610f\u5473\u7740\u9009\u4e2d\u9879\u7684\u503c\u548c\u641c\u7d22\u503c\u76f8\u7b49\uff0c\u56e0\u6b64\u76f4\u63a5\u8fd4\u56de\u8be5\u7d22\u5f15\n      return mid;\n    }\n  }\n  // \u5982\u679c low \u6bd4 high \u5927\uff0c\u5219\u610f\u5473\u7740\u8be5\u5f85\u641c\u7d22\u503c\u4e0d\u5b58\u5728\u5e76\u8fd4\u56de -1\n  return DOES_NOT_EXIST;\n}\n")),Object(o.b)("p",null,"\u7ed9\u5b9a\u4e0b\u56fe\u6240\u793a\u6570\u7ec4\uff0c\u8ba9\u6211\u4eec\u8bd5\u8bd5\u641c\u7d22 2\u3002\u8fd9\u4e9b\u662f\u7b97\u6cd5\u5c06\u4f1a\u6267\u884c\u7684\u6b65\u9aa4\u3002"),Object(o.b)("p",null,Object(o.b)("img",{alt:"\u4e8c\u5206\u641c\u7d22",src:r(246).default})),Object(o.b)("p",null,"\u4e0a\u9762\u7684\u8fed\u4ee3\u7684\u5b9e\u73b0\uff0c\u4e0b\u9762\u662f\u9012\u5f52\u7684\u5b9e\u73b0\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"function binarySearchRecursive(array, value, low, high, compareFn = defaultCompare) {\n  if (low <= high) {\n    const mid = Math.floor((low + high) / 2);\n    const element = array[mid];\n    if (compareFn(element, value) === Compare.LESS_THAN) {\n      return binarySearchRecursive(array, value, mid + 1, high, compareFn);\n    }\n    if (compareFn(element, value) === Compare.BIGGER_THAN) {\n      return binarySearchRecursive(array, value, low, mid - 1, compareFn);\n    }\n    return mid;\n  }\n  return DOES_NOT_EXIST;\n}\n\nfunction binarySearch(array, value, compareFn = defaultCompare) {\n  const sortedArray = quickSort(array);\n  const low = 0;\n  const high = sortedArray.length - 1;\n  return binarySearchRecursive(array, value, low, high, compareFn);\n}\n")),Object(o.b)("h2",{id:"\u5185\u63d2\u641c\u7d22"},"\u5185\u63d2\u641c\u7d22"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u5185\u63d2\u641c\u7d22"),"\u662f\u6539\u826f\u7248\u7684\u4e8c\u5206\u641c\u7d22\u3002\u4e8c\u5206\u641c\u7d22\u603b\u662f\u68c0\u67e5 mid \u4f4d\u7f6e\u4e0a\u7684\u503c\uff0c\u800c\u5185\u63d2\u641c\u7d22\u53ef\u80fd\u4f1a\u6839\u636e\u8981\u641c\u7d22\u7684\u503c\u68c0\u67e5\u6570\u7ec4\u4e2d\u7684\u4e0d\u540c\u5730\u65b9\u3002\u8fd9\u4e2a\u7b97\u6cd5\u8981\u6c42\u88ab\u641c\u7d22\u7684\u6570\u636e\u7ed3\u6784\u5df2\u6392\u5e8f\u3002\u4ee5\u4e0b\u662f\u8be5\u7b97\u6cd5\u9075\u5faa\u7684\u6b65\u9aa4:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u4f7f\u7528 position \u516c\u5f0f\u9009\u4e2d\u4e00\u4e2a\u503c;"),Object(o.b)("li",{parentName:"ol"},"\u5982\u679c\u8fd9\u4e2a\u503c\u662f\u5f85\u641c\u7d22\u503c\uff0c\u90a3\u4e48\u7b97\u6cd5\u6267\u884c\u5b8c\u6bd5\uff08\u503c\u627e\u5230\u4e86\uff09;"),Object(o.b)("li",{parentName:"ol"},"\u5982\u679c\u5f85\u641c\u7d22\u503c\u6bd4\u9009\u4e2d\u503c\u8981\u5c0f\uff0c\u5219\u8fd4\u56de\u6b65\u9aa4 1 \u5e76\u5728\u9009\u4e2d\u503c\u5de6\u8fb9\u7684\u5b50\u6570\u7ec4\u4e2d\u5bfb\u627e\uff08\u8f83\u5c0f\uff09;"),Object(o.b)("li",{parentName:"ol"},"\u5982\u679c\u5f85\u641c\u7d22\u503c\u6bd4\u9009\u4e2d\u503c\u8981\u5927\uff0c\u5219\u8fd4\u56de\u6b65\u9aa4 1 \u5e76\u5728\u9009\u79cd\u503c\u53f3\u8fb9\u7684\u5b50\u6570\u7ec4\u4e2d\u5bfb\u627e\uff08\u8f83\u5927\uff09\u3002")),Object(o.b)("p",null,"\u4ee5\u4e0b\u662f\u5176\u5b9e\u73b0\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const Compare = {\n  LESS_THAN: -1,\n  BIGGER_THAN: 1,\n  EQUALS: 0,\n};\nconst DOES_NOT_EXIST = -1;\n\nfunction lesserEquals(a, b, compareFn) {\n  const comp = compareFn(a, b);\n  return comp === Compare.LESS_THAN || comp === Compare.EQUALS;\n}\n\nfunction biggerEquals(a, b, compareFn) {\n  const comp = compareFn(a, b);\n  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;\n}\n\nfunction defaultCompare(a, b) {\n  if (a === b) {\n    return Compare.EQUALS;\n  }\n  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;\n}\n\nfunction defaultEquals(a, b) {\n  return a === b;\n}\n\nfunction defaultDiff(a, b) {\n  return Number(a) - Number(b);\n}\n\n/**\n * \u5185\u63d2\u641c\u7d22\n */\nfunction interpolationSearch(\n  array,\n  value,\n  compareFn = defaultCompare,\n  equalsFn = defaultEquals,\n  diffFn = defaultDiff,\n) {\n  const { length } = array;\n  let low = 0;\n  let high = length - 1;\n  let position = -1;\n  let delta = -1;\n  while (\n    low <= high &&\n    biggerEquals(value, array[low], compareFn) &&\n    lesserEquals(value, array[high], compareFn)\n  ) {\n    // \u9996\u5148\u8981\u505a\u7684\u662f\u8ba1\u7b97\u8981\u6bd4\u8f83\u503c\u7684\u4f4d\u7f6e position\n    // \u5982\u679c\u67e5\u627e\u7684\u503c\u66f4\u63a5 \u8fd1 array[high] \u5219\u67e5\u627e position \u4f4d\u7f6e\u65c1\u66f4\u5927\u7684\u503c\n    // \u5982\u679c\u67e5\u627e\u7684\u503c\u66f4\u63a5\u8fd1 array[low]\u5219\u67e5\u627e position \u4f4d\u7f6e\u65c1\u66f4\u5c0f\u7684\u503c\n    // \u8fd9\u4e2a\u7b97\u6cd5\u5728\u6570\u7ec4\u4e2d\u7684\u503c\u90fd\u662f\u5747\u5300\u5206\u5e03\u65f6\u6027\u80fd\u6700\u597d(delta \u4f1a\u975e\u5e38\u5c0f)\n    delta = diffFn(value, array[low]) / diffFn(array[high], array[low]);\n    position = low + Math.floor((high - low) * delta);\n    // \u5982\u679c\u5f85\u641c\u7d22\u503c\u627e\u5230\u4e86\uff0c\u5219\u8fd4\u56de\u5b83\u7684\u7d22\u5f15\u503c\n    if (equalsFn(array[position], value)) {\n      return position;\n    }\n    // \u5982\u679c\u5f85\u641c\u7d22\u503c\u5c0f\u4e8e\u5f53\u524d\u4f4d\u7f6e\u7684\u503c\uff0c\u4f7f\u7528\u5de6\u8fb9\u6216\u53f3\u8fb9\u7684\u5b50\u6570\u7ec4\u91cd\u590d\u8fd9\u6bb5\u903b\u8f91\n    if (compareFn(array[position], value) === Compare.LESS_THAN) {\n      low = position + 1;\n    } else {\n      high = position - 1;\n    }\n  }\n  return DOES_NOT_EXIST;\n}\n")),Object(o.b)("p",null,"\u4e0b\u56fe\u5c55\u793a\u4e86\u7b97\u6cd5\u7684\u8fc7\u7a0b\u2014\u2014\u6570\u7ec4\u662f\u5747\u5300\u5206\u5e03\u7684\uff08\u6570\u5b57\u5dee\u503c\u4e4b\u95f4\u7684\u5dee\u522b\u975e\u5e38\u5c0f\uff09\u3002"),Object(o.b)("p",null,Object(o.b)("img",{alt:"\u5185\u63d2\u641c\u7d22",src:r(247).default})))}p.isMDXComponent=!0}}]);