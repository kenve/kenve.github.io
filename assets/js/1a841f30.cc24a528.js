"use strict";(self.webpackChunkkenve_github_io=self.webpackChunkkenve_github_io||[]).push([[8687],{9093:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var r=t(5893),s=t(1151);const l={id:"handwritten-code",title:"\u624b\u5199\u4ee3\u7801",keywords:["JavaScript","js","\u624b\u5199\u4ee3\u7801"]},o=void 0,c={id:"knowledge/js/handwritten-code",title:"\u624b\u5199\u4ee3\u7801",description:"\u5b9e\u73b0 new",source:"@site/docs/knowledge/js/handwritten-code.md",sourceDirName:"knowledge/js",slug:"/knowledge/js/handwritten-code",permalink:"/docs/knowledge/js/handwritten-code",draft:!1,unlisted:!1,editUrl:"https://github.com/kenve/kenve.github.io/edit/docusaurus/docs/knowledge/js/handwritten-code.md",tags:[],version:"current",frontMatter:{id:"handwritten-code",title:"\u624b\u5199\u4ee3\u7801",keywords:["JavaScript","js","\u624b\u5199\u4ee3\u7801"]},sidebar:"knowledgeSideBar",previous:{title:"\u6570\u7ec4 Array",permalink:"/docs/knowledge/js/js-array"},next:{title:"\u6808 Stack",permalink:"/docs/knowledge/data-structure/stack"}},i={},a=[{value:"\u5b9e\u73b0 new",id:"\u5b9e\u73b0-new",level:2},{value:"\u5b9e\u73b0 instanceof",id:"\u5b9e\u73b0-instanceof",level:2},{value:"JavaScript \u7ee7\u627f",id:"javascript-\u7ee7\u627f",level:2},{value:"ES5 \u7ee7\u627f\u65b9\u5f0f",id:"es5-\u7ee7\u627f\u65b9\u5f0f",level:3},{value:"ES6 \u7684\u65b9\u5f0f\u5b9e\u73b0\u5bf9\u8c61\u7ee7\u627f",id:"es6-\u7684\u65b9\u5f0f\u5b9e\u73b0\u5bf9\u8c61\u7ee7\u627f",level:3},{value:"\u5b9e\u73b0\u539f\u578b\u7ee7\u627f\u51fd\u6570",id:"\u5b9e\u73b0\u539f\u578b\u7ee7\u627f\u51fd\u6570",level:3},{value:"\u4f7f\u7528 Set \u5b9e\u73b0\u89c2\u5bdf\u8005",id:"\u4f7f\u7528-set-\u5b9e\u73b0\u89c2\u5bdf\u8005",level:2},{value:"Event emit",id:"event-emit",level:2},{value:"\u624b\u5199 call bind apply",id:"\u624b\u5199-call-bind-apply",level:2},{value:"\u624b\u5199\u9632\u6296\u3001\u8282\u6d41",id:"\u624b\u5199\u9632\u6296\u8282\u6d41",level:2},{value:"\u6df1\u62f7\u8d1d",id:"\u6df1\u62f7\u8d1d",level:2},{value:"\u5b9e\u73b0\u91d1\u989d\u5343\u5206\u4f4d\u9017\u53f7\u5206\u5272",id:"\u5b9e\u73b0\u91d1\u989d\u5343\u5206\u4f4d\u9017\u53f7\u5206\u5272",level:2},{value:"\u6b63\u5219\u8868\u8fbe\u5f0f",id:"\u6b63\u5219\u8868\u8fbe\u5f0f",level:3},{value:"\u5b9e\u73b0\u4e24\u4e2a\u5927\u6574\u6570\u52a0\u6cd5",id:"\u5b9e\u73b0\u4e24\u4e2a\u5927\u6574\u6570\u52a0\u6cd5",level:2}];function d(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u5b9e\u73b0-new",children:"\u5b9e\u73b0 new"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"function _new(fn, ...arg) {\n  const obj = Object.create(fn.prototype);\n  const ret = fn.apply(obj, arg);\n  return ret instanceof Object ? ret : obj;\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u5b9e\u73b0-instanceof",children:"\u5b9e\u73b0 instanceof"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"function _instanceof(a, b) {\n  // \u6cbf\u7740 a \u7684\u539f\u578b\u94fe, \u770b\u770b\u662f\u5426\u6709\u4f55 prototype \u76f8\u7b49\u7684\u8282\u70b9\n  while (a) {\n    if (a.__proto__ === b.prototype) {\n      return true;\n    }\n    a = a.__proto__;\n  }\n  return false;\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"javascript-\u7ee7\u627f",children:"JavaScript \u7ee7\u627f"}),"\n",(0,r.jsx)(e.h3,{id:"es5-\u7ee7\u627f\u65b9\u5f0f",children:"ES5 \u7ee7\u627f\u65b9\u5f0f"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"// \u4e00\u4e2a\u5b8c\u5584\u7684 js \u7ee7\u627f\u5199\u6cd5\n// \u5b9a\u4e49\u4e00\u4e2a\nfunction Parent() {\n  this.name = 'parent';\n  this.colors = ['red', 'bule', 'yellow'];\n}\nParent.prototype.sex = 'man';\nParent.prototype.say = function () {\n  console.log('say hello');\n};\n//\nfunction Child() {\n  //\u6784\u9020\u51fd\u6570\n  Parent.call(this);\n  this.type = 'child';\n}\n// Child \u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61\u4e3a\u7236\u7ea7\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61\nChild.prototype = Object.create(Parent.prototype);\n// Child \u5bf9\u8c61\u7684\u6784\u9020\u51fd\u6570\u4e3a Child\uff0c\u907f\u514d\u524d\u9762\u539f\u578b\u94fe\u8d4b\u503c\u540e\u6784\u9020\u51fd\u6570\u4e3a\u7236\u7ea7\u7684\u6784\u9020\u51fd\u6570\nChild.prototype.constructor = Child;\n"})}),"\n",(0,r.jsx)(e.h3,{id:"es6-\u7684\u65b9\u5f0f\u5b9e\u73b0\u5bf9\u8c61\u7ee7\u627f",children:"ES6 \u7684\u65b9\u5f0f\u5b9e\u73b0\u5bf9\u8c61\u7ee7\u627f"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"// es6 \u65b9\u5f0f\u5b9a\u4e49\u4e00\u4e2a class\nclass Parent {\n  // \u5b9a\u4e49\u6784\u9020\u51fd\u6570\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n}\n// \u5b9a\u4e49\u5b50\u7c7b \u5e76\u7ee7\u627f\u7236\u7c7b\nclass Child extends Parent {\n  constructor(x, y, colors) {\n    super(x, y); //\u8c03\u7528\u7236\u7c7b\u7684 constructor(x,y)\n    this.colors = colors;\n  }\n  // \u51fd\u6570\n  toString() {\n    return this.colors + '' + super.toString(); //\u8c03 \u7528\u7236\u7c7b\u7684 toString \u65b9\u6cd5\n  }\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u5b9e\u73b0\u539f\u578b\u7ee7\u627f\u51fd\u6570",children:"\u5b9e\u73b0\u539f\u578b\u7ee7\u627f\u51fd\u6570"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"function object(o) {\n  function F() {}\n  F.prototype = o;\n  return new F();\n}\nfunction inherit(subType, superType) {\n  var prototype = object(superType.prototype);\n  prototype.constructor = subType;\n  subType.prototype = prototype;\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u4f7f\u7528-set-\u5b9e\u73b0\u89c2\u5bdf\u8005",children:"\u4f7f\u7528 Set \u5b9e\u73b0\u89c2\u5bdf\u8005"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5148\u5b9a\u4e49\u4e86\u4e00\u4e2a Set \u96c6\u5408\uff0c\u6240\u6709\u89c2\u5bdf\u8005\u51fd\u6570\u90fd\u653e\u8fdb\u8fd9\u4e2a\u96c6\u5408\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["\u7136\u540e\uff0c",(0,r.jsx)(e.code,{children:"observable"})," \u51fd\u6570\u8fd4\u56de\u539f\u59cb\u5bf9\u8c61\u7684\u4ee3\u7406\uff0c\u62e6\u622a\u8d4b\u503c\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["\u5728\u62e6\u622a\u51fd\u6570 ",(0,r.jsx)(e.code,{children:"set"})," \u4e4b\u4e2d\uff0c\u4f1a\u81ea\u52a8\u6267\u884c\u6240\u6709\u89c2\u5bdf\u8005\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const queuedObservers = new Set();\n\nconst observe = (fn) => queuedObservers.add(fn);\nconst observable = (obj) => new Proxy(obj, { set });\n\nfunction set(target, key, value, receiver) {\n  const result = Reflect.set(target, key, value, receiver);\n  queuedObservers.forEach((observer) => observer());\n  return result;\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"event-emit",children:"Event emit"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"class EventEmitter {\n  constructor() {\n    this._eventpool = {};\n  }\n  on(event, callback) {\n    this._eventpool[event]\n      ? this._eventpool[event].push(callback)\n      : (this._eventpool[event] = [callback]);\n  }\n  emit(event, ...args) {\n    this._eventpool[event] && this._eventpool[event].forEach((cb) => cb(...args));\n  }\n  off(event) {\n    if (this._eventpool[event]) {\n      delete this._eventpool[event];\n    }\n  }\n  once(event, callback) {\n    this.on(event, (...args) => {\n      callback(...args);\n      this.off(event);\n    });\n  }\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u624b\u5199-call-bind-apply",children:"\u624b\u5199 call bind apply"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"/**\n * \u81ea\u5b9a\u4e49 call \u5b9e\u73b0\n * @param context   \u4e0a\u4e0b\u6587 this \u5bf9\u8c61\n * @param args      \u52a8\u6001\u53c2\u6570\n */\nFunction.prototype.ownCall = function (context, ...args) {\n  context = typeof context === 'object' ? context : window;\n  // \u9632\u6b62\u8986\u76d6\u6389\u539f\u6709\u5c5e\u6027\n  const key = Symbol();\n  // \u8fd9\u91cc\u7684 this \u4e3a\u9700\u8981\u6267\u884c\u7684\u65b9\u6cd5\n  context[key] = this;\n  // \u65b9\u6cd5\u6267\u884c\n  const result = context[key](...args);\n  delete context[key];\n  return result;\n};\n\n/**\n * \u81ea\u5b9a\u4e49 apply \u5b9e\u73b0\n * @param context   \u4e0a\u4e0b\u6587 this \u5bf9\u8c61\n * @param args      \u53c2\u6570\u6570\u7ec4\n */\nFunction.prototype.ownApply = function (context, args) {\n  context = typeof context === 'object' ? context : window;\n  // \u9632\u6b62\u8986\u76d6\u6389\u539f\u6709\u5c5e\u6027\n  const key = Symbol();\n  // \u8fd9\u91cc\u7684 this \u4e3a\u9700\u8981\u6267\u884c\u7684\u65b9\u6cd5\n  context[key] = this;\n  // \u65b9\u6cd5\u6267\u884c\n  const result = context[key](...args);\n  delete context[key];\n  return result;\n};\n\n/**\n * \u81ea\u5b9a\u4e49 bind \u5b9e\u73b0\n * @param context     \u4e0a\u4e0b\u6587\n * @returns {Function}\n */\nFunction.prototype.ownBind = function (context) {\n  context = typeof context === 'object' ? context : window;\n  return (...args) => {\n    this.call(context, ...args);\n  };\n};\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u624b\u5199\u9632\u6296\u8282\u6d41",children:"\u624b\u5199\u9632\u6296\u3001\u8282\u6d41"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"// \u9632\u6296\uff1a\u89e6\u53d1\u9ad8\u9891\u4e8b\u4ef6\u540e n \u79d2\u5185\u51fd\u6570\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\uff0c\u5982\u679c n \u79d2\u5185\u9ad8\u9891\u4e8b\u4ef6\u518d\u6b21\u88ab\u89e6\u53d1\uff0c\u5219\u91cd\u65b0\u8ba1\u7b97\u65f6\u95f4\n// \u6bcf\u6b21\u89e6\u53d1\u4e8b\u4ef6\u65f6\u90fd\u53d6\u6d88\u4e4b\u524d\u7684\u5ef6\u65f6\u8c03\u7528\u65b9\u6cd5\nfunction debounce(fn, time) {\n  let timer = null;\n  return function () {\n    if (timer) {\n      clearTimeout(timer);\n    }\n    timer = setTimeout(() => {\n      fn.apply(this, arguments);\n    }, time);\n  };\n}\n\n// \u8282\u6d41\uff1a\u9ad8\u9891\u4e8b\u4ef6\u89e6\u53d1\uff0c\u4f46\u5728 n \u79d2\u5185\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\uff0c\u6240\u4ee5\u8282\u6d41\u4f1a\u7a00\u91ca\u51fd\u6570\u7684\u6267\u884c\u9891\u7387\n// \u6bcf\u6b21\u89e6\u53d1\u4e8b\u4ef6\u65f6\u90fd\u5224\u65ad\u5f53\u524d\u662f\u5426\u6709\u7b49\u5f85\u6267\u884c\u7684\u5ef6\u65f6\u51fd\u6570\nfunction throttle(fn, time) {\n  let canRun = true;\n  return function () {\n    if (!canRun) {\n      return;\n    }\n    canRun = false;\n    setTimeout(() => {\n      fn.apply(this, arguments);\n      canRun = true;\n    }, time);\n  };\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u6df1\u62f7\u8d1d",children:"\u6df1\u62f7\u8d1d"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"//\u5b9a\u4e49\u68c0\u6d4b\u6570\u636e\u7c7b\u578b\u7684\u529f\u80fd\u51fd\u6570\nfunction checkedType(target) {\n  return Object.prototype.toString.call(target).slice(8, -1);\n}\n//\u5b9e\u73b0\u6df1\u5ea6\u514b\u9686---\u5bf9\u8c61/\u6570\u7ec4\nfunction clone(target) {\n  //\u5224\u65ad\u62f7\u8d1d\u7684\u6570\u636e\u7c7b\u578b\n  //\u521d\u59cb\u5316\u53d8\u91cfresult \u6210\u4e3a\u6700\u7ec8\u514b\u9686\u7684\u6570\u636e\n  let result,\n    targetType = checkedType(target);\n  if (targetType === 'Object') {\n    result = {};\n  } else if (targetType === 'Array') {\n    result = [];\n  } else {\n    return target;\n  }\n  //\u904d\u5386\u76ee\u6807\u6570\u636e\n  for (let i in target) {\n    //\u83b7\u53d6\u904d\u5386\u6570\u636e\u7ed3\u6784\u7684\u6bcf\u4e00\u9879\u503c\u3002\n    let value = target[i];\n    //\u5224\u65ad\u76ee\u6807\u7ed3\u6784\u91cc\u7684\u6bcf\u4e00\u503c\u662f\u5426\u5b58\u5728\u5bf9\u8c61/\u6570\u7ec4\n    if (checkedType(value) === 'Object' || checkedType(value) === 'Array') {\n      //\u5bf9\u8c61/\u6570\u7ec4\u91cc\u5d4c\u5957\u4e86\u5bf9\u8c61/\u6570\u7ec4\n      //\u7ee7\u7eed\u904d\u5386\u83b7\u53d6\u5230value\u503c\n      result[i] = clone(value);\n    } else {\n      //\u83b7\u53d6\u5230value\u503c\u662f\u57fa\u672c\u7684\u6570\u636e\u7c7b\u578b\u6216\u8005\u662f\u51fd\u6570\u3002\n      result[i] = value;\n    }\n  }\n  return result;\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u5b9e\u73b0\u91d1\u989d\u5343\u5206\u4f4d\u9017\u53f7\u5206\u5272",children:"\u5b9e\u73b0\u91d1\u989d\u5343\u5206\u4f4d\u9017\u53f7\u5206\u5272"}),"\n",(0,r.jsx)(e.h3,{id:"\u6b63\u5219\u8868\u8fbe\u5f0f",children:"\u6b63\u5219\u8868\u8fbe\u5f0f"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"function format(str) {\n  str.replace(/(\\d)(?=(?:\\d{3})+$)/g, '$1,'); // replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u5b9e\u73b0\u4e24\u4e2a\u5927\u6574\u6570\u52a0\u6cd5",children:"\u5b9e\u73b0\u4e24\u4e2a\u5927\u6574\u6570\u52a0\u6cd5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"/**\n * \u5927\u6570\u76f8\u52a0\n * @param {string} a\n * @param {string} b\n */\nfunction add(a, b) {\n  // \u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e0b\u6807\n  let i = a.length - 1;\n  let j = b.length - 1;\n\n  // \u8fdb\u4f4d\n  let carry = 0;\n  let result = '';\n\n  while (i >= 0 || j >= 0) {\n    // \u7b2c\u4e00\u4e2a\u6570\n    let x = 0;\n    // \u7b2c\u4e8c\u4e2a\u6570\n    let y = 0;\n    // \u548c\n    let sum;\n    // \u5927\u4e8e\u7b49\u4e8e 0\uff0c\u53d6\u51fa\u6570\u5b57\n    if (i >= 0) {\n      // \u4ece\u540e\u5f80\u524d\u53d6\u51fa\u6570\u5b57\n      x = a[i] - '0';\n      i--;\n    }\n\n    if (j >= 0) {\n      y = b[j] - '0';\n      j--;\n    }\n    // \u8ba1\u7b97\u4e24\u4e2a\u6570\u5b57\u7684\u548c\uff0c\u518d\u52a0\u4e0a\u8fdb\u4f4d\n    sum = x + y + carry;\n    // \u5982\u679c\u548c\u5927\u4e8e 10 \u9700\u8981\u8fdb 1 \u4f4d\n    if (sum >= 10) {\n      carry = 1;\n      sum -= 10;\n    } else {\n      // \u5426\u5219\u8fdb\u4f4d\u4e3a 0\n      carry = 0;\n    }\n    // \u5b57\u7b26\u4e32\u7d2f\u52a0\n    result = sum + result;\n  }\n  // \u5982\u679c\u8fd8\u6709\u8fdb\u4f4d\n  if (carry) {\n    // \u8fdb\u4f4d 1 + 'xxx'\n    result = carry + result;\n  }\n  return result;\n}\n// console.log(add('9999', '1'))\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>o});var r=t(7294);const s={},l=r.createContext(s);function o(n){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);