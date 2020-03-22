---
id: javascript-utils
title: javascript 工具函数
tags: [javascript, utils]
---

#### 时间戳转换为 YY-MM-DD hh:mm:ss 字符串格式

```javascript
timeFormat(timestamp) {
    //timestamp是整数，否则要parseInt转换
    var time = new Date(timestamp);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '-' + add02Time(m) + '-' + add02Time(d) + ' ' +add02Time(h) + ':' +add02Time(mm) + ':' + add02Time(s);
};
add02Time(m) {
    return m < 10 ? '0' + m : m
},
```

<!--truncate-->

#### 把对象中的属性拼接到 URL 参数中（url?a=x&b=y）

```javascript
joinParamsInGetReq(url, param) {
    if (param) {
        let paramsArray = []
        Object.keys(param).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(param[key])))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    return url;
},
```

#### 对象或数组的深拷贝

```javascript
deepCopyObj(obj) {
    var str, newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
        return;
    } else if (window.JSON) {
        str = JSON.stringify(obj), //系列化对象
            newobj = JSON.parse(str); //还原
    } else {
        for (var i in obj) {
            newobj[i] = typeof obj[i] === 'object' ? this.deepCopyObj(obj[i]) : obj[i];
        }
    }
    return newobj;
},

```

#### 判断浏览器类型

```javascript
/*
 * 智能机浏览器版本信息:
 *
 */
var browser = {
  versions: (function() {
    var u = navigator.userAgent,
      app = navigator.appVersion;
    return {
      //移动终端浏览器版本信息
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
      iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
      wechat: u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger', //判断是否为微信浏览器
    };
  })(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase(), //语言版本
};
```

#### Cookie

```javascript
/**
 * 获取cookie
 * @param  {[type]} c_name [cookie名称]
 * @return {[type]}        [cookie的value]
 */
function getCookie(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + '=');
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(';', c_start);
      if (c_end == -1) c_end = document.cookie.length;
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return '';
}
/**
 * 设置cookie的值和日期
 * @param {[type]} c_name     [cookie名称]
 * @param {[type]} value      [cookie的值]
 * @param {[type]} expiredays [cookie有效期]
 */
function setCookie(c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie =
    c_name + '=' + escape(value) + (expiredays == null ? '' : ';expires=' + exdate.toGMTString());
}
/**
 * [删除 cookie]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null) document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
}
```

#### Toast 提示

```javascript
function warn(msg, opt, left, top) {
  if (opt) {
    var obj = $('#' + opt);
  }
  new Toast({ context: $('body'), message: msg }, obj, left, top).show();
}
var Toast = function(config, obj, left, top) {
  this.context = config.context == null ? $('body') : config.context; //上下文
  this.message = config.message; //显示内容
  this.time = config.time == null ? 3000 : config.time; //持续时间
  this.left = config.left; //距容器左边的距离
  // this.top = (screen.availHeight / 4) * 2; //距容器上方的距离
  this.top = config.top;
  if (obj) {
    this.left = obj.offset().left + left;
    this.top = obj.offset().top + top;
  }
  this.init();
};
var msgEntity;
Toast.prototype = {
  //初始化显示的位置内容等
  init: function() {
    $('#toastMessage').remove();
    //设置消息体
    var msgDIV = new Array();
    msgDIV.push('<div id="toastMessage">');
    msgDIV.push('<span>' + this.message + '</span>');
    msgDIV.push('</div>');
    msgEntity = $(msgDIV.join('')).appendTo(this.context);
    //设置消息样式
    var left =
      this.left == null
        ? this.context.width() / 2 - msgEntity.find('span').width() / 2 - 20
        : this.left; //padding 10+10
    var top = this.top == null ? '55%' : this.top;
    msgEntity.css({
      position: 'fixed',
      top: top,
      'z-index': '99',
      left: left,
      background: '#000',
      color: 'white',
      'font-size': '.26rem',
      padding: '10px',
      'border-radius': '4px',
      '-moz-border-radius': '4px',
      '-webkit-border-radius': '4px',
    });
    //msgEntity.addClass(".toast");
    msgEntity.hide();
  },
  //显示动画
  show: function() {
    msgEntity.show();
    setTimeout(function() {
      msgEntity.hide();
    }, this.time / 2);
    // msgEntity.fadeIn(this.time / 2);
    // msgEntity.fadeOut(this.time / 2);
  },
};
```

#### 截取规定长度的字符串

```javascript
/**
 * 截取字符串
 */
function cutString(str, len) {
  if (str.length * 2 <= len) {
    return str;
  }
  var strlen = 0;
  var s = '';
  for (var i = 0; i < str.length; i++) {
    s = s + str.charAt(i);
    if (str.charCodeAt(i) > 128) {
      strlen = strlen + 2;
      if (strlen >= len) {
        return s.substring(0, s.length - 1) + '...';
      }
    } else {
      strlen = strlen + 1;
      if (strlen >= len) {
        return s.substring(0, s.length - 2) + '...';
      }
    }
  }
  return s;
}
```

#### 返回顶部

```javascript
function backTop() {
  $('html,body').scrollTop(0);
}

function checkPosition(pos) {
  if ($(window).scrollTop() > pos) {
    $('#top').css('visibility', 'visible');
  } else {
    $('#top').css('visibility', 'hidden');
  }
}
```

#### 根据分辨率设置 html 的 font-size 值

```javascript
!(function(win) {
  var doc = win.document,
    docEle = doc.documentElement,
    num = 10,
    changeScreenSize = 'orientationchange' in win ? 'orientationchange' : 'resize',
    setFontSize = function() {
      var clientWidth = docEle.clientWidth;
      docEle.style.fontSize = clientWidth / num + 'px';
    };
  doc.addEventListener &&
    (win.addEventListener(changeScreenSize, setFontSize, !1),
    doc.addEventListener('DOMContentLoaded', setFontSize, !1));
})(window);
```

#### 判断浏览设备竖屏或者横屏

```javascript
// 判断横屏竖屏
(function(window) {
  var supportOrientation =
    typeof window.orientation === 'number' && typeof window.onorientationchange === 'object';
  var init = function() {
    var htmlNode = document.body.parentNode,
      orientation;

    var updateOrientation = function() {
      if (supportOrientation) {
        orientation = window.orientation;
        switch (orientation) {
          case 90:
          case -90:
            orientation = 'landscape';
            break;
          default:
            orientation = 'portrait';
            break;
        }
      } else {
        orientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
      }

      htmlNode.setAttribute('class', orientation);
      //
      if (orientation === 'landscape') {
        console.log('横屏');
      } else if (orientation === 'portrait') {
        console.log('竖屏');
      }
    };
    if (supportOrientation) {
      window.addEventListener('orientationchange', updateOrientation, false);
    } else {
      //监听resize事件
      window.addEventListener('resize', updateOrientation, false);
    }
    updateOrientation();
  };
  window.addEventListener('DOMContentLoaded', init, false);
})(window);
```

#### 设置缩放比

```javascript
//設置縮放 ipone6 2x
const dpr = window.devicePixelRatio;
var meta = document.createElement('meta');
meta.setAttribute('name', 'viewport');
meta.setAttribute(
  'content',
  'width=device-width, initial-scale=' +
    1 / dpr +
    ', maximum-scale=' +
    1 / dpr +
    ', minimum-scale=' +
    1 / dpr +
    ', user-scalable=no',
);
document.getElementsByTagName('head')[0].appendChild(meta);
```

```css
/* ipone6 设计稿尺寸转rem(sass)*/
@function px2rem($px) {
  $rem: 75px;
  @return ($px/$rem) + rem;
}
```

```css
/* ipone6 设计稿尺寸转rem(stylus)*/
 px2rem(px)
    $rem=75
    (px/$rem)rem
```

#### js 解析 XML 字符串

```javascript
var loadXML = function(xmlString) {
  //构建xmldoc对象

  var xmlDoc = null;

  if (window.DOMParser) {
    //IE9+,FF,webkit
    try {
      domParser = new DOMParser();
      xmlDoc = domParser.parseFromString(xmlString, 'text/xml');
    } catch (e) {}
  } else if (!window.DOMParser && window.ActiveXObject) {
    //window.DOMParser 判断是否是非ie浏览器
    var xmlDomVersions = ['MSXML2.DOMDocument', 'Microsoft.XMLDOM'];
    for (var i = 0; i < xmlDomVersions.length; i++) {
      try {
        xmlDoc = new ActiveXObject(xmlDomVersions[i]);
        xmlDoc.async = false;
        xmlDoc.loadXML(xmlString); //loadXML方法载入xml字符串
        break;
      } catch (e) {
        continue;
      }
    }
  } else {
    return null;
  }

  return xmlDoc;
};
```
