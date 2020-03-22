---
id: mobile-responsive-solution
title: 移动端自适应解决方案
tags: [javascript, mobile, html5]
---

## rem

#### 概念

> REM 是相对单位，是相对 HTML 根元素。

#### rem 兼容性：

- ios：6.1 系统以上都支持
- android：2.1 系统以上都支持
- IE8+

<!--truncate-->

#### rem 基准值计算

1. 固定值：设置的基准值为 `1rem = 100px`，当在写移动端布局的单位时，直接将设计稿的数值除以 100 在加上 rem 的单位就可以了。
2. 动态设置：根据屏幕，，动态设置 html 的 `font-size`。

```javascript
// 设置页面html元素的font-size值
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
    (win.addEventListener(changeScreenSize, setFontSize, false),
    doc.addEventListener('DOMContentLoaded', setFontSize, false));
})(window);
```

## DPR

众所周知移动设备，高清方案就是根据设备屏幕有 DPR（device pixel ratio，设备像素比，又称 DPPX，比如 dpr=2 时，表示 1 个 CSS 像素由 4 个物理像素点组成）的，dpr 比较大，所以显示的像素较为清晰。

## viewport

根据设备屏幕的 DPR， 自动设置 viewport 进行缩放,。

```javascript
//通过添加meta元素，进行缩放设置
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

#### 设计稿

一般来说设计稿都是以 ipone6 的分辨率进行设计的，所以设计给的稿子双倍的原因是 iphone6 这种屏幕属于高清屏，也就是 2dpr。

- sass

```sass
@function px2rem($px){
    $rem : 75px;
    @return ($px/$rem) + rem;
}
```

- stylus

```stylus
px2rem(px)
   $rem=75
   (px/$rem)rem

```
