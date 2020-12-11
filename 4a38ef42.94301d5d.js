(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{159:function(n,e,t){"use strict";t.d(e,"a",(function(){return m})),t.d(e,"b",(function(){return b}));var a=t(0),r=t.n(a);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=r.a.createContext({}),p=function(n){var e=r.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},m=function(n){var e=p(n.components);return r.a.createElement(l.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},u=r.a.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,o=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),m=p(t),u=a,b=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return t?r.a.createElement(b,c(c({ref:e},l),{},{components:t})):r.a.createElement(b,c({ref:e},l))}));function b(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=n,c.mdxType="string"==typeof n?n:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},97:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return c})),t.d(e,"rightToc",(function(){return s})),t.d(e,"default",(function(){return p}));var a=t(3),r=t(7),i=(t(0),t(159)),o={slug:"javascript-utils",title:"javascript \u5de5\u5177\u51fd\u6570",tags:["javascript","utils"]},c={permalink:"/javascript-utils",source:"@site/blog/2017-01-20-javascript-utils.md",description:"\u65f6\u95f4\u6233\u8f6c\u6362\u4e3a YY-MM-DD hhss \u5b57\u7b26\u4e32\u683c\u5f0f",date:"2017-01-20T00:00:00.000Z",tags:[{label:"javascript",permalink:"/tags/javascript"},{label:"utils",permalink:"/tags/utils"}],title:"javascript \u5de5\u5177\u51fd\u6570",readingTime:5.42,truncated:!0,prevItem:{title:"\u79fb\u52a8\u7aef\u81ea\u9002\u5e94\u89e3\u51b3\u65b9\u6848",permalink:"/mobile-responsive-solution"},nextItem:{title:"React \u5b66\u4e60\u7b14\u8bb0",permalink:"/react-tutorial"}},s=[],l={rightToc:s};function p(n){var e=n.components,t=Object(r.a)(n,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"\u65f6\u95f4\u6233\u8f6c\u6362\u4e3a-yy-mm-dd-hhmmss-\u5b57\u7b26\u4e32\u683c\u5f0f"},"\u65f6\u95f4\u6233\u8f6c\u6362\u4e3a YY-MM-DD hh:mm:ss \u5b57\u7b26\u4e32\u683c\u5f0f"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"timeFormat(timestamp) {\n    //timestamp\u662f\u6574\u6570\uff0c\u5426\u5219\u8981parseInt\u8f6c\u6362\n    var time = new Date(timestamp);\n    var y = time.getFullYear();\n    var m = time.getMonth() + 1;\n    var d = time.getDate();\n    var h = time.getHours();\n    var mm = time.getMinutes();\n    var s = time.getSeconds();\n    return y + '-' + add02Time(m) + '-' + add02Time(d) + ' ' +add02Time(h) + ':' +add02Time(mm) + ':' + add02Time(s);\n};\nadd02Time(m) {\n    return m < 10 ? '0' + m : m\n},\n")),Object(i.b)("h4",{id:"\u628a\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027\u62fc\u63a5\u5230-url-\u53c2\u6570\u4e2d\uff08urlaxby\uff09"},"\u628a\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027\u62fc\u63a5\u5230 URL \u53c2\u6570\u4e2d\uff08url?a=x&b=y\uff09"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"joinParamsInGetReq(url, param) {\n    if (param) {\n        let paramsArray = []\n        Object.keys(param).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(param[key])))\n        if (url.search(/\\?/) === -1) {\n            url += '?' + paramsArray.join('&')\n        } else {\n            url += '&' + paramsArray.join('&')\n        }\n    }\n    return url;\n},\n")),Object(i.b)("h4",{id:"\u5bf9\u8c61\u6216\u6570\u7ec4\u7684\u6df1\u62f7\u8d1d"},"\u5bf9\u8c61\u6216\u6570\u7ec4\u7684\u6df1\u62f7\u8d1d"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"deepCopyObj(obj) {\n    var str, newobj = obj.constructor === Array ? [] : {};\n    if (typeof obj !== 'object') {\n        return;\n    } else if (window.JSON) {\n        str = JSON.stringify(obj), //\u7cfb\u5217\u5316\u5bf9\u8c61\n            newobj = JSON.parse(str); //\u8fd8\u539f\n    } else {\n        for (var i in obj) {\n            newobj[i] = typeof obj[i] === 'object' ? this.deepCopyObj(obj[i]) : obj[i];\n        }\n    }\n    return newobj;\n},\n\n")),Object(i.b)("h4",{id:"\u5224\u65ad\u6d4f\u89c8\u5668\u7c7b\u578b"},"\u5224\u65ad\u6d4f\u89c8\u5668\u7c7b\u578b"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"/*\n * \u667a\u80fd\u673a\u6d4f\u89c8\u5668\u7248\u672c\u4fe1\u606f:\n *\n */\nvar browser = {\n  versions: (function() {\n    var u = navigator.userAgent,\n      app = navigator.appVersion;\n    return {\n      //\u79fb\u52a8\u7ec8\u7aef\u6d4f\u89c8\u5668\u7248\u672c\u4fe1\u606f\n      trident: u.indexOf('Trident') > -1, //IE\u5185\u6838\n      presto: u.indexOf('Presto') > -1, //opera\u5185\u6838\n      webKit: u.indexOf('AppleWebKit') > -1, //\u82f9\u679c\u3001\u8c37\u6b4c\u5185\u6838\n      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //\u706b\u72d0\u5185\u6838\n      mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //\u662f\u5426\u4e3a\u79fb\u52a8\u7ec8\u7aef\n      ios: !!u.match(/\\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios\u7ec8\u7aef\n      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android\u7ec8\u7aef\u6216\u8005uc\u6d4f\u89c8\u5668\n      iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //\u662f\u5426\u4e3aiPhone\u6216\u8005QQHD\u6d4f\u89c8\u5668\n      iPad: u.indexOf('iPad') > -1, //\u662f\u5426iPad\n      webApp: u.indexOf('Safari') == -1, //\u662f\u5426web\u5e94\u8be5\u7a0b\u5e8f\uff0c\u6ca1\u6709\u5934\u90e8\u4e0e\u5e95\u90e8\n      wechat: u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger', //\u5224\u65ad\u662f\u5426\u4e3a\u5fae\u4fe1\u6d4f\u89c8\u5668\n    };\n  })(),\n  language: (navigator.browserLanguage || navigator.language).toLowerCase(), //\u8bed\u8a00\u7248\u672c\n};\n")),Object(i.b)("h4",{id:"cookie"},"Cookie"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"/**\n * \u83b7\u53d6cookie\n * @param  {[type]} c_name [cookie\u540d\u79f0]\n * @return {[type]}        [cookie\u7684value]\n */\nfunction getCookie(c_name) {\n  if (document.cookie.length > 0) {\n    c_start = document.cookie.indexOf(c_name + '=');\n    if (c_start != -1) {\n      c_start = c_start + c_name.length + 1;\n      c_end = document.cookie.indexOf(';', c_start);\n      if (c_end == -1) c_end = document.cookie.length;\n      return unescape(document.cookie.substring(c_start, c_end));\n    }\n  }\n  return '';\n}\n/**\n * \u8bbe\u7f6ecookie\u7684\u503c\u548c\u65e5\u671f\n * @param {[type]} c_name     [cookie\u540d\u79f0]\n * @param {[type]} value      [cookie\u7684\u503c]\n * @param {[type]} expiredays [cookie\u6709\u6548\u671f]\n */\nfunction setCookie(c_name, value, expiredays) {\n  var exdate = new Date();\n  exdate.setDate(exdate.getDate() + expiredays);\n  document.cookie =\n    c_name + '=' + escape(value) + (expiredays == null ? '' : ';expires=' + exdate.toGMTString());\n}\n/**\n * [\u5220\u9664 cookie]\n * @param  {[type]} name [description]\n * @return {[type]}      [description]\n */\nfunction delCookie(name) {\n  var exp = new Date();\n  exp.setTime(exp.getTime() - 1);\n  var cval = getCookie(name);\n  if (cval != null) document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();\n}\n")),Object(i.b)("h4",{id:"toast-\u63d0\u793a"},"Toast \u63d0\u793a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function warn(msg, opt, left, top) {\n  if (opt) {\n    var obj = $('#' + opt);\n  }\n  new Toast({ context: $('body'), message: msg }, obj, left, top).show();\n}\nvar Toast = function(config, obj, left, top) {\n  this.context = config.context == null ? $('body') : config.context; //\u4e0a\u4e0b\u6587\n  this.message = config.message; //\u663e\u793a\u5185\u5bb9\n  this.time = config.time == null ? 3000 : config.time; //\u6301\u7eed\u65f6\u95f4\n  this.left = config.left; //\u8ddd\u5bb9\u5668\u5de6\u8fb9\u7684\u8ddd\u79bb\n  // this.top = (screen.availHeight / 4) * 2; //\u8ddd\u5bb9\u5668\u4e0a\u65b9\u7684\u8ddd\u79bb\n  this.top = config.top;\n  if (obj) {\n    this.left = obj.offset().left + left;\n    this.top = obj.offset().top + top;\n  }\n  this.init();\n};\nvar msgEntity;\nToast.prototype = {\n  //\u521d\u59cb\u5316\u663e\u793a\u7684\u4f4d\u7f6e\u5185\u5bb9\u7b49\n  init: function() {\n    $('#toastMessage').remove();\n    //\u8bbe\u7f6e\u6d88\u606f\u4f53\n    var msgDIV = new Array();\n    msgDIV.push('<div id=\"toastMessage\">');\n    msgDIV.push('<span>' + this.message + '</span>');\n    msgDIV.push('</div>');\n    msgEntity = $(msgDIV.join('')).appendTo(this.context);\n    //\u8bbe\u7f6e\u6d88\u606f\u6837\u5f0f\n    var left =\n      this.left == null\n        ? this.context.width() / 2 - msgEntity.find('span').width() / 2 - 20\n        : this.left; //padding 10+10\n    var top = this.top == null ? '55%' : this.top;\n    msgEntity.css({\n      position: 'fixed',\n      top: top,\n      'z-index': '99',\n      left: left,\n      background: '#000',\n      color: 'white',\n      'font-size': '.26rem',\n      padding: '10px',\n      'border-radius': '4px',\n      '-moz-border-radius': '4px',\n      '-webkit-border-radius': '4px',\n    });\n    //msgEntity.addClass(\".toast\");\n    msgEntity.hide();\n  },\n  //\u663e\u793a\u52a8\u753b\n  show: function() {\n    msgEntity.show();\n    setTimeout(function() {\n      msgEntity.hide();\n    }, this.time / 2);\n    // msgEntity.fadeIn(this.time / 2);\n    // msgEntity.fadeOut(this.time / 2);\n  },\n};\n")),Object(i.b)("h4",{id:"\u622a\u53d6\u89c4\u5b9a\u957f\u5ea6\u7684\u5b57\u7b26\u4e32"},"\u622a\u53d6\u89c4\u5b9a\u957f\u5ea6\u7684\u5b57\u7b26\u4e32"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"/**\n * \u622a\u53d6\u5b57\u7b26\u4e32\n */\nfunction cutString(str, len) {\n  if (str.length * 2 <= len) {\n    return str;\n  }\n  var strlen = 0;\n  var s = '';\n  for (var i = 0; i < str.length; i++) {\n    s = s + str.charAt(i);\n    if (str.charCodeAt(i) > 128) {\n      strlen = strlen + 2;\n      if (strlen >= len) {\n        return s.substring(0, s.length - 1) + '...';\n      }\n    } else {\n      strlen = strlen + 1;\n      if (strlen >= len) {\n        return s.substring(0, s.length - 2) + '...';\n      }\n    }\n  }\n  return s;\n}\n")),Object(i.b)("h4",{id:"\u8fd4\u56de\u9876\u90e8"},"\u8fd4\u56de\u9876\u90e8"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function backTop() {\n  $('html,body').scrollTop(0);\n}\n\nfunction checkPosition(pos) {\n  if ($(window).scrollTop() > pos) {\n    $('#top').css('visibility', 'visible');\n  } else {\n    $('#top').css('visibility', 'hidden');\n  }\n}\n")),Object(i.b)("h4",{id:"\u6839\u636e\u5206\u8fa8\u7387\u8bbe\u7f6e-html-\u7684-font-size-\u503c"},"\u6839\u636e\u5206\u8fa8\u7387\u8bbe\u7f6e html \u7684 font-size \u503c"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"!(function(win) {\n  var doc = win.document,\n    docEle = doc.documentElement,\n    num = 10,\n    changeScreenSize = 'orientationchange' in win ? 'orientationchange' : 'resize',\n    setFontSize = function() {\n      var clientWidth = docEle.clientWidth;\n      docEle.style.fontSize = clientWidth / num + 'px';\n    };\n  doc.addEventListener &&\n    (win.addEventListener(changeScreenSize, setFontSize, !1),\n    doc.addEventListener('DOMContentLoaded', setFontSize, !1));\n})(window);\n")),Object(i.b)("h4",{id:"\u5224\u65ad\u6d4f\u89c8\u8bbe\u5907\u7ad6\u5c4f\u6216\u8005\u6a2a\u5c4f"},"\u5224\u65ad\u6d4f\u89c8\u8bbe\u5907\u7ad6\u5c4f\u6216\u8005\u6a2a\u5c4f"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// \u5224\u65ad\u6a2a\u5c4f\u7ad6\u5c4f\n(function(window) {\n  var supportOrientation =\n    typeof window.orientation === 'number' && typeof window.onorientationchange === 'object';\n  var init = function() {\n    var htmlNode = document.body.parentNode,\n      orientation;\n\n    var updateOrientation = function() {\n      if (supportOrientation) {\n        orientation = window.orientation;\n        switch (orientation) {\n          case 90:\n          case -90:\n            orientation = 'landscape';\n            break;\n          default:\n            orientation = 'portrait';\n            break;\n        }\n      } else {\n        orientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';\n      }\n\n      htmlNode.setAttribute('class', orientation);\n      //\n      if (orientation === 'landscape') {\n        console.log('\u6a2a\u5c4f');\n      } else if (orientation === 'portrait') {\n        console.log('\u7ad6\u5c4f');\n      }\n    };\n    if (supportOrientation) {\n      window.addEventListener('orientationchange', updateOrientation, false);\n    } else {\n      //\u76d1\u542cresize\u4e8b\u4ef6\n      window.addEventListener('resize', updateOrientation, false);\n    }\n    updateOrientation();\n  };\n  window.addEventListener('DOMContentLoaded', init, false);\n})(window);\n")),Object(i.b)("h4",{id:"\u8bbe\u7f6e\u7f29\u653e\u6bd4"},"\u8bbe\u7f6e\u7f29\u653e\u6bd4"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"//\u8a2d\u7f6e\u7e2e\u653e ipone6 2x\nconst dpr = window.devicePixelRatio;\nvar meta = document.createElement('meta');\nmeta.setAttribute('name', 'viewport');\nmeta.setAttribute(\n  'content',\n  'width=device-width, initial-scale=' +\n    1 / dpr +\n    ', maximum-scale=' +\n    1 / dpr +\n    ', minimum-scale=' +\n    1 / dpr +\n    ', user-scalable=no',\n);\ndocument.getElementsByTagName('head')[0].appendChild(meta);\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"/* ipone6 \u8bbe\u8ba1\u7a3f\u5c3a\u5bf8\u8f6crem(sass)*/\n@function px2rem($px) {\n  $rem: 75px;\n  @return ($px/$rem) + rem;\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"/* ipone6 \u8bbe\u8ba1\u7a3f\u5c3a\u5bf8\u8f6crem(stylus)*/\n px2rem(px)\n    $rem=75\n    (px/$rem)rem\n")),Object(i.b)("h4",{id:"js-\u89e3\u6790-xml-\u5b57\u7b26\u4e32"},"js \u89e3\u6790 XML \u5b57\u7b26\u4e32"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var loadXML = function(xmlString) {\n  //\u6784\u5efaxmldoc\u5bf9\u8c61\n\n  var xmlDoc = null;\n\n  if (window.DOMParser) {\n    //IE9+,FF,webkit\n    try {\n      domParser = new DOMParser();\n      xmlDoc = domParser.parseFromString(xmlString, 'text/xml');\n    } catch (e) {}\n  } else if (!window.DOMParser && window.ActiveXObject) {\n    //window.DOMParser \u5224\u65ad\u662f\u5426\u662f\u975eie\u6d4f\u89c8\u5668\n    var xmlDomVersions = ['MSXML2.DOMDocument', 'Microsoft.XMLDOM'];\n    for (var i = 0; i < xmlDomVersions.length; i++) {\n      try {\n        xmlDoc = new ActiveXObject(xmlDomVersions[i]);\n        xmlDoc.async = false;\n        xmlDoc.loadXML(xmlString); //loadXML\u65b9\u6cd5\u8f7d\u5165xml\u5b57\u7b26\u4e32\n        break;\n      } catch (e) {\n        continue;\n      }\n    }\n  } else {\n    return null;\n  }\n\n  return xmlDoc;\n};\n")))}p.isMDXComponent=!0}}]);