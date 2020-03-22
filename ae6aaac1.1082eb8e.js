(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{164:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return b}));var i=t(1),r=t(9),a=(t(0),t(176)),l={id:"write-a-webpack-plugin",title:"\u5199\u4e00\u4e2a Webpack \u7684\u63d2\u4ef6",tags:["webpack"]},c={permalink:"/write-a-webpack-plugin",source:"@site/blog/2018-05-05-write-webpack-plugin.md",description:"## \u8d77\u56e0",date:"2018-05-05T00:00:00.000Z",tags:[{label:"webpack",permalink:"/tags/webpack"}],title:"\u5199\u4e00\u4e2a Webpack \u7684\u63d2\u4ef6",truncated:!0,prevItem:{title:"\u53d1\u7248\u89c4\u5219",permalink:"/package-publish-rules"},nextItem:{title:"\u4f7f\u7528 Nexus Repository Manager OSS \u642d\u5efa NPM \u79c1\u670d",permalink:"/build-npm-private-service"}},p=[{value:"\u8d77\u56e0",id:"\u8d77\u56e0",children:[]},{value:"\u4e00\u4e2a webpack \u63d2\u4ef6 \u7684\u7ec4\u6210\u90e8\u5206",id:"\u4e00\u4e2a-webpack-\u63d2\u4ef6-\u7684\u7ec4\u6210\u90e8\u5206",children:[]},{value:"Compiler \u548c Compilation",id:"compiler-\u548c-compilation",children:[{value:"Compiler",id:"compiler",children:[]},{value:"Compilation",id:"compilation",children:[]}]},{value:"\u7f16\u5199\u8fc7\u6ee4\u63d2\u4ef6",id:"\u7f16\u5199\u8fc7\u6ee4\u63d2\u4ef6",children:[]},{value:"\u4f7f\u7528\u63d2\u4ef6",id:"\u4f7f\u7528\u63d2\u4ef6",children:[]},{value:"\u6539\u8fdb\u63d2\u4ef6",id:"\u6539\u8fdb\u63d2\u4ef6",children:[]},{value:"\u76f8\u5173\u8d44\u6599",id:"\u76f8\u5173\u8d44\u6599",children:[]}],o={rightToc:p};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u8d77\u56e0"},"\u8d77\u56e0"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u67d0\u4e00\u5929\u7a81\u7136\u6253\u5305\u9879\u76ee\u4ee3\u7801\u7684\u65f6\u5019\uff0c\u7a81\u7136\u51fa\u73b0\u4e86\u4e00\u5927\u5768\u7684 warning \uff0c\u5177\u4f53\u4e3a ",Object(a.b)("inlineCode",{parentName:"p"},"mini-css-extract-plugin")," \u7684",Object(a.b)("inlineCode",{parentName:"p"},"Conflicting order between")," \u8b66\u544a\u3002")),Object(a.b)("h2",{id:"\u4e00\u4e2a-webpack-\u63d2\u4ef6-\u7684\u7ec4\u6210\u90e8\u5206"},"\u4e00\u4e2a webpack \u63d2\u4ef6 \u7684\u7ec4\u6210\u90e8\u5206"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u5177\u540d\u7684 JavaScript \u51fd\u6570\uff08\u7c7b\uff09\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5728\u5b83\u7684\u539f\u578b\u4e2d\u5b9a\u4e49\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"li"},"apply")," \u65b9\u6cd5\u3002"),Object(a.b)("li",{parentName:"ul"},"\u6307\u5b9a\u8981\u4f7f\u7528\u7684",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://webpack.js.org/api/compiler-hooks/"}),"\u4e8b\u4ef6\u94a9\u5b50"),"\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5904\u7406 webpack \u5185\u90e8\u5b9e\u4f8b\u7684\u7279\u5b9a\u6570\u636e\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5728\u529f\u80fd\u5b8c\u6210\u540e\u8c03\u7528 webpack \u63d0\u4f9b\u7684\u56de\u8c03\u3002")),Object(a.b)("h2",{id:"compiler-\u548c-compilation"},"Compiler \u548c Compilation"),Object(a.b)("p",null,"\u5728\u5f00\u53d1\u63d2\u4ef6\u65f6\uff0c\u4e24\u4e2a\u6700\u91cd\u8981\u7684\u8d44\u6e90\u5c31\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"compiler")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"compilation")," \u5bf9\u8c61\uff0c\u6240\u4ee5\u6211\u4eec\u7b2c\u4e00\u6b65\u5c31\u8981\u7406\u89e3\u4ed6\u4eec\u5728\u662f\u6269\u5c55 webpack \u5f15\u64ce\u4e2d\u7684\u91cd\u8981\u89d2\u8272\u3002"),Object(a.b)("h3",{id:"compiler"},"Compiler"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u8be5\u6a21\u5757\u662f\u5728\u901a\u8fc7 ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://webpack.js.org/api/cli"}),"CLI")," \u6216 ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://webpack.js.org/api/node"}),"Node API"),"\u4f20\u9012\u7684\u6240\u6709\u9009\u9879\u521b\u5efa\u7f16\u8bd1\u5b9e\u4f8b\u65f6\u5019\u7684\u4e3b\u8981\u5f15\u64ce\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5b83\u6269\u5c55\u4e86 ",Object(a.b)("inlineCode",{parentName:"li"},"Tapable")," \u7c7b\u4ee5\u6ce8\u518c\u548c\u8c03\u7528\u63d2\u4ef6\uff0c\u6240\u4ee5\u5927\u591a\u6570\u9762\u5411\u7528\u6237\u7684\u63d2\u4ef6\u90fd\u662f\u9996\u5148\u5728",Object(a.b)("inlineCode",{parentName:"li"},"Compiler"),"\u4e0a\u6ce8\u518c\u3002"),Object(a.b)("li",{parentName:"ul"},"\u8be5\u6a21\u5757\u516c\u5f00\u66b4\u9732\u5728 ",Object(a.b)("inlineCode",{parentName:"li"},"webpack.Compiler"),"\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002")),Object(a.b)("h3",{id:"compilation"},"Compilation"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u8be5\u6a21\u5757\u7528\u4e8e ",Object(a.b)("inlineCode",{parentName:"li"},"Compiler")," \u521b\u5efa\u65b0\u7684\u7f16\u8bd1\uff08\u6216\u6784\u5efa\uff09\uff0c",Object(a.b)("inlineCode",{parentName:"li"},"Compilation")," \u5b9e\u4f8b\u53ef\u4ee5\u8bbf\u95ee\u6240\u6709\u6a21\u5757\u53ca\u5176\u4f9d\u8d56\u9879\uff08\u5927\u591a\u6570\u662f\u5faa\u73af\u5f15\u7528\uff09\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5728\u7f16\u8bd1\u9636\u6bb5\uff0c\u6a21\u5757\u88ab\u52a0\u8f7d\uff0c\u5bc6\u5c01\uff0c\u4f18\u5316\uff0c\u5206\u5757\uff0c\u6563\u5217\u548c\u6062\u590d\u3002"),Object(a.b)("li",{parentName:"ul"},"\u8be5\u5bf9\u8c61\u4e5f\u7ee7\u627f\u4e86 ",Object(a.b)("inlineCode",{parentName:"li"},"Tapable"),"\uff0c\u5e76\u63d0\u4f9b\u4e86\u4f17\u591a\u7684\u751f\u547d\u5468\u671f\u7684\u94a9\u5b50\uff0c\u53ef\u4ee5\u50cf",Object(a.b)("inlineCode",{parentName:"li"},"Compiler"),"\u94a9\u5b50\u4e00\u6837\u4f7f\u7528\u5b83\u4eec\uff1a",Object(a.b)("inlineCode",{parentName:"li"},"compilation.hooks.someHook.tap(/* ... */);"),"\u3002")),Object(a.b)("p",null,"\u4f60\u770b\u53ef\u4ee5\u67e5\u770b\u7684\u63d2\u4ef6",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://webpack.js.org/api/plugins/"}),"API \u6587\u6863"),"\uff0c \u6765\u67e5\u627e",Object(a.b)("inlineCode",{parentName:"p"},"compiler"),"\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"compilation"),"\u5bf9\u8c61\u4e2d\u53ef\u7528\u7684\u94a9\u5b50\u5217\u8868\u4ee5\u53ca\u5176\u4ed6\u91cd\u8981\u7684\u5bf9\u8c61\u3002\n\u8fd9\u4e24\u4e2a\u5bf9\u8c61\u7684\u6e90\u7801\u53ef\u4ee5\u5728 GitHub \u7684 webpack \u6e90\u7801\u7684 ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/webpack/webpack/tree/master/lib"}),"lib")," \u76ee\u5f55\u4e0b\u627e\u5230\u3002"),Object(a.b)("h2",{id:"\u7f16\u5199\u8fc7\u6ee4\u63d2\u4ef6"},"\u7f16\u5199\u8fc7\u6ee4\u63d2\u4ef6"),Object(a.b)("p",null,"\u6309\u7167\u4e0a\u9762\u63d0\u5230\u7684\u63d2\u4ef6\u7ec4\u6210\u90e8\u5206\u6765\u7f16\u5199\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"/**\n * \u8fc7\u6ee4 CSS Conflicting Warning \u63d2\u4ef6\n */\n// \u4e00\u4e2a\u5177\u540d\u7684 Javascript \u7c7b\nclass FilterCSSConflictingWarningPlugin {\n  // \u5b9a\u4e49\u4e00\u4e2a apply \u539f\u578b\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u4ee5\u63d0\u4f9b compiler \u4f5c\u4e3a\u53c2\u6570\n  apply(compiler) {\n    // \u6307\u5b9a\u8981\u4f7f\u7528\u7684\u4e8b\u4ef6\u94a9\u5b50 afterEmit \uff08\u5c06\u8d44\u6e90\u5206\u53d1\u5230\u8f93\u51fa\u76ee\u5f55\u4e4b\u540e\uff09\uff0c\u5f53\u8fdb\u5165 compilation \u94a9\u5b50\u7684\u65f6\u5019\u628a compilation \u6700\u4e3a\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\n    compiler.hooks.afterEmit.tap('FilterWarning', compilation => {\n      // \u5904\u7406\u6570\u636e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4f20\u5165\u7684 compilation \u83b7\u53d6\u5230 warnings \u4fe1\u606f\n      compilation.warnings = (compilation.warnings || []).filter(warning => {\n        // \u82e5\u4e3a mini-css-extract-plugin \u629b\u51fa\u7684 Conflicting order between: \u7684 warning\uff0c\u5219\u8fd4\u56de false \u8fc7\u6ee4\u6389\n        return warning.message.indexOf('Conflicting order between:') === -1;\n      });\n    });\n  }\n}\n\nmodule.exports = FilterCSSConflictingWarningPlugin;\n")),Object(a.b)("h2",{id:"\u4f7f\u7528\u63d2\u4ef6"},"\u4f7f\u7528\u63d2\u4ef6"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"// webpack.config.js\nvar FilterCSSConflictingWarningPlugin = require('FilterCSSConflictingWarningPlugin');\n\nmodule.exports = {\n  // ... config settings here ...\n  plugins: [new FilterCSSConflictingWarningPlugin()],\n};\n")),Object(a.b)("h2",{id:"\u6539\u8fdb\u63d2\u4ef6"},"\u6539\u8fdb\u63d2\u4ef6"),Object(a.b)("p",null,"\u5f53\u524d\u63d2\u4ef6\u53ea\u80fd\u5904\u7406 ",Object(a.b)("inlineCode",{parentName:"p"},"Conflicting order between")," \u7684 warnings \uff0c\u6211\u4eec\u7406\u60f3\u60c5\u51b5\u662f\u63d2\u4ef6\u4e0d\u4f46\u80fd\u591f\u8fc7\u6ee4\u4e0a\u9762\u7684 warning \uff0c\u4e5f\u80fd\u5904\u7406\u5176\u4ed6 warning\u3002\u8fd9\u6837\u7684\u8bdd\uff0c\u4e0d\u7528\u6bcf\u8fc7\u6ee4\u4e00\u4e2a warning \u5199\u4e00\u4e2a\u63d2\u4ef6\u3002\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u591f\u60f3\u8fd9\u6837\u4e00\u4e2a\u63d2\u4ef6\uff1a\u5f53\u4f60\u4f7f\u7528\u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u4f20\u5165\u4e00\u4e2a\u8fc7\u6ee4 warning \u4fe1\u606f\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u63d2\u4ef6\u5185\u90e8\u6839\u636e\u4f20\u5165\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9 warning \u4fe1\u606f\u8fdb\u884c\u8fc7\u6ee4\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"// Define the class\nclass FilterCSSConflictingWarningPlugin {\n    // \u63a5\u6536\u53c2\u6570\n  constructor(options) {\n    this.options = options;\n  }\n\n  apply(compiler) {\n    compiler.hooks.afterEmit.tap(\n      'FilterPlugin',\n      (compilation) => {\n        compilation.warnings = (compilation.warnings || []).filter(warning => {\n            return !this.options.filter.test(warning.message)\n          }\n        );\n      }\n    );\n  }\n}\n\n// \u5728 webpack \u914d\u7f6e\u6587\u4ef6\u4e2d\u4f7f\u7528\nnew FilterCSSConflictingWarningPlugin({ filter: /Conflicting order between:/ }),\n\n")),Object(a.b)("h2",{id:"\u76f8\u5173\u8d44\u6599"},"\u76f8\u5173\u8d44\u6599"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250"}),"mini-css-extract-plugin issues")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://webpack.js.org/contribute/writing-a-plugin/#src/components/Sidebar/Sidebar.jsx"}),"webpack plugins"))))}b.isMDXComponent=!0},176:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),b=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=b(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=Object(i.forwardRef)((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=b(t),s=i,g=u["".concat(l,".").concat(s)]||u[s]||m[s]||a;return t?r.a.createElement(g,c({ref:n},o,{components:t})):r.a.createElement(g,c({ref:n},o))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=s;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var o=2;o<a;o++)l[o]=t[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);