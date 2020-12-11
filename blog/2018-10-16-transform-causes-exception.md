---
slug: transform-causes-exception
title: transform 导致 css 定位异常
tags: [css]
---

### 前言

> 当在做让浏览器支持字体小于 12px 的功能的时候，遇到了一个奇怪的问题，当我使用了 `transform` 对内容进行缩小的时候，发现原来的绝对布局的位置有异常。

<!--truncate-->

```css
.parent {
  width: 200px;
  height: 200px;
  background: red;
  position: relative;
}
.child {
  background: blue;
  /* transform: scale(0.8333); */
}
.child::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.3s;
  background: yellow;
}
```

```html
<div class="parent"><div class="child">child...</div></div>
```

上面的代码，当在样式中没有使用 `transform` 时，因为 `child::before` 中使用了 `position: absolute;` (绝对)布局，所以位置是相对于不为 `static` 的父级元素进行布局，即相对于 `parent` 布局。但是当我使用了 `transform: scale(0.8333);` 对内容进行缩小时，奇怪的事情发生了 `child::before` 不在相对于 `parent` 进行布局了，而是相对于 `child` 进行布局。这个跟我们以前说：绝对布局相对于它不为 `static` 的父级元素进行布局的原则相悖了。

### 原因

通过查询资料：

- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- [W3C](https://drafts.csswg.org/css-transforms/#module-interactions)

得知：当在使用 `tranform` 的 CSS 属性进行旋转，缩放，倾斜或平移元素时，它修改了 CSS [可视化格式模型](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model)的坐标空间。通过修改坐标空间，影响内容的形状和位置，而不会中断正常的文档流。这些属性的某些值导致创建[包含块](https://www.w3.org/TR/CSS2/visuren.html#containing-block)和/或创建[堆叠上下文](https://drafts.csswg.org/css-position-3/#stacking-context)。

### 总结

`transform` 改了 CSS 的可视化格式模型，还会影响到哪些 CSS 布局呢。

- `transform` 改变了 CSS 的[可视化格式模型](https://www.w3.org/TR/CSS2/visuren.html), 导致 `absolute` 的 100% 宽度大小受到了限制。
- 当设置 `transform` 的时候，会影响原来设置的 `overflow`。
- 当 `transform` 的元素设置了其子元素的 position 为 fixed 的时候，fixed 会被降级为 `absolute` 。

欢迎补充！

### 资料

- [MDN transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [MDN Using CSS transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- [W3C CSS Transforms Module Level 1](https://drafts.csswg.org/css-transforms/#module-interactions)
- [CSS3 transform 对普通元素的 N 多渲染影响](https://www.zhangxinxu.com/wordpress/2015/05/css3-transform-affect/)
