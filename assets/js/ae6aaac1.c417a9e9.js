"use strict";(self.webpackChunkkenve_github_io=self.webpackChunkkenve_github_io||[]).push([[2112],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return k}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},s=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(t),k=r,g=s["".concat(p,".").concat(k)]||s[k]||m[k]||a;return t?i.createElement(g,l(l({ref:n},u),{},{components:t})):i.createElement(g,l({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8423:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),l=["components"],o={slug:"write-a-webpack-plugin",title:"\u5199\u4e00\u4e2a Webpack \u7684\u63d2\u4ef6",tags:["webpack"]},p=void 0,c={permalink:"/write-a-webpack-plugin",source:"@site/blog/2018-05-05-write-webpack-plugin.md",title:"\u5199\u4e00\u4e2a Webpack \u7684\u63d2\u4ef6",description:"\u8d77\u56e0",date:"2018-05-05T00:00:00.000Z",formattedDate:"May 5, 2018",tags:[{label:"webpack",permalink:"/tags/webpack"}],readingTime:3.97,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"write-a-webpack-plugin",title:"\u5199\u4e00\u4e2a Webpack \u7684\u63d2\u4ef6",tags:["webpack"]},prevItem:{title:"\u53d1\u7248\u89c4\u5219",permalink:"/package-publish-rules"},nextItem:{title:"\u4f7f\u7528 Nexus Repository Manager OSS \u642d\u5efa NPM \u79c1\u670d",permalink:"/build-npm-private-service"}},u={authorsImageUrls:[]},m=[{value:"\u8d77\u56e0",id:"\u8d77\u56e0",level:2},{value:"\u4e00\u4e2a webpack \u63d2\u4ef6 \u7684\u7ec4\u6210\u90e8\u5206",id:"\u4e00\u4e2a-webpack-\u63d2\u4ef6-\u7684\u7ec4\u6210\u90e8\u5206",level:2},{value:"Compiler \u548c Compilation",id:"compiler-\u548c-compilation",level:2},{value:"Compiler",id:"compiler",level:3},{value:"Compilation",id:"compilation",level:3},{value:"\u7f16\u5199\u8fc7\u6ee4\u63d2\u4ef6",id:"\u7f16\u5199\u8fc7\u6ee4\u63d2\u4ef6",level:2},{value:"\u4f7f\u7528\u63d2\u4ef6",id:"\u4f7f\u7528\u63d2\u4ef6",level:2},{value:"\u6539\u8fdb\u63d2\u4ef6",id:"\u6539\u8fdb\u63d2\u4ef6",level:2},{value:"\u76f8\u5173\u8d44\u6599",id:"\u76f8\u5173\u8d44\u6599",level:2}],s={toc:m};function k(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8d77\u56e0"},"\u8d77\u56e0"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u67d0\u4e00\u5929\u7a81\u7136\u6253\u5305\u9879\u76ee\u4ee3\u7801\u7684\u65f6\u5019\uff0c\u7a81\u7136\u51fa\u73b0\u4e86\u4e00\u5927\u5768\u7684 warning \uff0c\u5177\u4f53\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"mini-css-extract-plugin")," \u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Conflicting order between")," \u8b66\u544a\u3002")),(0,a.kt)("h2",{id:"\u4e00\u4e2a-webpack-\u63d2\u4ef6-\u7684\u7ec4\u6210\u90e8\u5206"},"\u4e00\u4e2a webpack \u63d2\u4ef6 \u7684\u7ec4\u6210\u90e8\u5206"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5177\u540d\u7684 JavaScript \u51fd\u6570\uff08\u7c7b\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u5b83\u7684\u539f\u578b\u4e2d\u5b9a\u4e49\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"apply")," \u65b9\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u8981\u4f7f\u7528\u7684",(0,a.kt)("a",{parentName:"li",href:"https://webpack.js.org/api/compiler-hooks/"},"\u4e8b\u4ef6\u94a9\u5b50"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5904\u7406 webpack \u5185\u90e8\u5b9e\u4f8b\u7684\u7279\u5b9a\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u529f\u80fd\u5b8c\u6210\u540e\u8c03\u7528 webpack \u63d0\u4f9b\u7684\u56de\u8c03\u3002")),(0,a.kt)("h2",{id:"compiler-\u548c-compilation"},"Compiler \u548c Compilation"),(0,a.kt)("p",null,"\u5728\u5f00\u53d1\u63d2\u4ef6\u65f6\uff0c\u4e24\u4e2a\u6700\u91cd\u8981\u7684\u8d44\u6e90\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"compiler")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"compilation")," \u5bf9\u8c61\uff0c\u6240\u4ee5\u6211\u4eec\u7b2c\u4e00\u6b65\u5c31\u8981\u7406\u89e3\u4ed6\u4eec\u5728\u662f\u6269\u5c55 webpack \u5f15\u64ce\u4e2d\u7684\u91cd\u8981\u89d2\u8272\u3002"),(0,a.kt)("h3",{id:"compiler"},"Compiler"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8be5\u6a21\u5757\u662f\u5728\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"li",href:"https://webpack.js.org/api/cli"},"CLI")," \u6216 ",(0,a.kt)("a",{parentName:"li",href:"https://webpack.js.org/api/node"},"Node API"),"\u4f20\u9012\u7684\u6240\u6709\u9009\u9879\u521b\u5efa\u7f16\u8bd1\u5b9e\u4f8b\u65f6\u5019\u7684\u4e3b\u8981\u5f15\u64ce\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b83\u6269\u5c55\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"Tapable")," \u7c7b\u4ee5\u6ce8\u518c\u548c\u8c03\u7528\u63d2\u4ef6\uff0c\u6240\u4ee5\u5927\u591a\u6570\u9762\u5411\u7528\u6237\u7684\u63d2\u4ef6\u90fd\u662f\u9996\u5148\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"Compiler"),"\u4e0a\u6ce8\u518c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8be5\u6a21\u5757\u516c\u5f00\u66b4\u9732\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"webpack.Compiler"),"\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002")),(0,a.kt)("h3",{id:"compilation"},"Compilation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8be5\u6a21\u5757\u7528\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"Compiler")," \u521b\u5efa\u65b0\u7684\u7f16\u8bd1\uff08\u6216\u6784\u5efa\uff09\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Compilation")," \u5b9e\u4f8b\u53ef\u4ee5\u8bbf\u95ee\u6240\u6709\u6a21\u5757\u53ca\u5176\u4f9d\u8d56\u9879\uff08\u5927\u591a\u6570\u662f\u5faa\u73af\u5f15\u7528\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u7f16\u8bd1\u9636\u6bb5\uff0c\u6a21\u5757\u88ab\u52a0\u8f7d\uff0c\u5bc6\u5c01\uff0c\u4f18\u5316\uff0c\u5206\u5757\uff0c\u6563\u5217\u548c\u6062\u590d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8be5\u5bf9\u8c61\u4e5f\u7ee7\u627f\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"Tapable"),"\uff0c\u5e76\u63d0\u4f9b\u4e86\u4f17\u591a\u7684\u751f\u547d\u5468\u671f\u7684\u94a9\u5b50\uff0c\u53ef\u4ee5\u50cf",(0,a.kt)("inlineCode",{parentName:"li"},"Compiler"),"\u94a9\u5b50\u4e00\u6837\u4f7f\u7528\u5b83\u4eec\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"compilation.hooks.someHook.tap(/* ... */);"),"\u3002")),(0,a.kt)("p",null,"\u4f60\u770b\u53ef\u4ee5\u67e5\u770b\u7684\u63d2\u4ef6",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/api/plugins/"},"API \u6587\u6863"),"\uff0c \u6765\u67e5\u627e",(0,a.kt)("inlineCode",{parentName:"p"},"compiler"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"compilation"),"\u5bf9\u8c61\u4e2d\u53ef\u7528\u7684\u94a9\u5b50\u5217\u8868\u4ee5\u53ca\u5176\u4ed6\u91cd\u8981\u7684\u5bf9\u8c61\u3002\n\u8fd9\u4e24\u4e2a\u5bf9\u8c61\u7684\u6e90\u7801\u53ef\u4ee5\u5728 GitHub \u7684 webpack \u6e90\u7801\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack/tree/master/lib"},"lib")," \u76ee\u5f55\u4e0b\u627e\u5230\u3002"),(0,a.kt)("h2",{id:"\u7f16\u5199\u8fc7\u6ee4\u63d2\u4ef6"},"\u7f16\u5199\u8fc7\u6ee4\u63d2\u4ef6"),(0,a.kt)("p",null,"\u6309\u7167\u4e0a\u9762\u63d0\u5230\u7684\u63d2\u4ef6\u7ec4\u6210\u90e8\u5206\u6765\u7f16\u5199\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u8fc7\u6ee4 CSS Conflicting Warning \u63d2\u4ef6\n */\n// \u4e00\u4e2a\u5177\u540d\u7684 Javascript \u7c7b\nclass FilterCSSConflictingWarningPlugin {\n  // \u5b9a\u4e49\u4e00\u4e2a apply \u539f\u578b\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u4ee5\u63d0\u4f9b compiler \u4f5c\u4e3a\u53c2\u6570\n  apply(compiler) {\n    // \u6307\u5b9a\u8981\u4f7f\u7528\u7684\u4e8b\u4ef6\u94a9\u5b50 afterEmit \uff08\u5c06\u8d44\u6e90\u5206\u53d1\u5230\u8f93\u51fa\u76ee\u5f55\u4e4b\u540e\uff09\uff0c\u5f53\u8fdb\u5165 compilation \u94a9\u5b50\u7684\u65f6\u5019\u628a compilation \u6700\u4e3a\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\n    compiler.hooks.afterEmit.tap('FilterWarning', compilation => {\n      // \u5904\u7406\u6570\u636e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4f20\u5165\u7684 compilation \u83b7\u53d6\u5230 warnings \u4fe1\u606f\n      compilation.warnings = (compilation.warnings || []).filter(warning => {\n        // \u82e5\u4e3a mini-css-extract-plugin \u629b\u51fa\u7684 Conflicting order between: \u7684 warning\uff0c\u5219\u8fd4\u56de false \u8fc7\u6ee4\u6389\n        return warning.message.indexOf('Conflicting order between:') === -1;\n      });\n    });\n  }\n}\n\nmodule.exports = FilterCSSConflictingWarningPlugin;\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u63d2\u4ef6"},"\u4f7f\u7528\u63d2\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// webpack.config.js\nvar FilterCSSConflictingWarningPlugin = require('FilterCSSConflictingWarningPlugin');\n\nmodule.exports = {\n  // ... config settings here ...\n  plugins: [new FilterCSSConflictingWarningPlugin()],\n};\n")),(0,a.kt)("h2",{id:"\u6539\u8fdb\u63d2\u4ef6"},"\u6539\u8fdb\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f53\u524d\u63d2\u4ef6\u53ea\u80fd\u5904\u7406 ",(0,a.kt)("inlineCode",{parentName:"p"},"Conflicting order between")," \u7684 warnings \uff0c\u6211\u4eec\u7406\u60f3\u60c5\u51b5\u662f\u63d2\u4ef6\u4e0d\u4f46\u80fd\u591f\u8fc7\u6ee4\u4e0a\u9762\u7684 warning \uff0c\u4e5f\u80fd\u5904\u7406\u5176\u4ed6 warning\u3002\u8fd9\u6837\u7684\u8bdd\uff0c\u4e0d\u7528\u6bcf\u8fc7\u6ee4\u4e00\u4e2a warning \u5199\u4e00\u4e2a\u63d2\u4ef6\u3002\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u591f\u60f3\u8fd9\u6837\u4e00\u4e2a\u63d2\u4ef6\uff1a\u5f53\u4f60\u4f7f\u7528\u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u4f20\u5165\u4e00\u4e2a\u8fc7\u6ee4 warning \u4fe1\u606f\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u63d2\u4ef6\u5185\u90e8\u6839\u636e\u4f20\u5165\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9 warning \u4fe1\u606f\u8fdb\u884c\u8fc7\u6ee4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Define the class\nclass FilterCSSConflictingWarningPlugin {\n    // \u63a5\u6536\u53c2\u6570\n  constructor(options) {\n    this.options = options;\n  }\n\n  apply(compiler) {\n    compiler.hooks.afterEmit.tap(\n      'FilterPlugin',\n      (compilation) => {\n        compilation.warnings = (compilation.warnings || []).filter(warning => {\n            return !this.options.filter.test(warning.message)\n          }\n        );\n      }\n    );\n  }\n}\n\n// \u5728 webpack \u914d\u7f6e\u6587\u4ef6\u4e2d\u4f7f\u7528\nnew FilterCSSConflictingWarningPlugin({ filter: /Conflicting order between:/ }),\n\n")),(0,a.kt)("h2",{id:"\u76f8\u5173\u8d44\u6599"},"\u76f8\u5173\u8d44\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250"},"mini-css-extract-plugin issues")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://webpack.js.org/contribute/writing-a-plugin/#src/components/Sidebar/Sidebar.jsx"},"webpack plugins"))))}k.isMDXComponent=!0}}]);