---
slug: javascript-this
title: javascript 之 this 理解
tags: [javascript, this]
---

this 作为 JavaScript 的关键字之一，与其他语言相比表现略有不同，并且，在[严格模式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)和非严格模式下表现也有差别。

<!--truncate-->

## 特性

- 函数的调用方式决定了 this 的值，随着函数调用方式（使用场合）的不同，this 的值也会发生变化。但总的来说谁调用指向谁。
- this 不能在执行期间被赋值。
- 在每次函数，被调用时 this 的值也有可能变化。
- ES5 中引入了[bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)方法用于设置函数的 this 值,无论这个函数是如何被调用的。
- ES6 新增了 this 词法解析的箭头函数（它在闭合的执行上下文内设置 this 的值）。
  语法

## 在不同环境下，this 的不同用法。

### 全局上下文

在全局运行上下文中（在任何函数体外）调用，this 就指向全局对象 Global(global/window)。

```javascript
//在浏览器的执行环境中，this指向全局对象即 window 对象
console.log(this === window); //true

this.a = "hello";
console.log(window.a); //'hello'
console.log(a); //'hello'
```

### 函数上下文

在函数内部，this 的值取决于函数是如何被调用的。

#### 直接调用

在非严格模式下，且 this 值未被 call 设置，这时 this 的值默认为全局对象。

```javascript
function test() {
  return this;
}

test() === window; // true

var b = 1;
function test1() {
  this.b = 0;
}
test1();
console.log(b); //0
```

在严格模式下，如果 this 未被执行的上下文环境定义（this 将保持他进入执行环境时的值），那么它将会默认为 undefined。
如下：由于 test2()是直接被调用的，而不是作为对象的属性/方法调用的（比如 window.f2()），所以 this 的值是 undefined。

```javascript
function test2() {
  "use strict"; //严格模式
  return this;
}
test2() === undefined; // true
```

#### 对象方法中的 this

函数作为某个对象的方法调用时，这时 this 就指这个上级对象（调用该函数的对象）

```javascript
var obj = {
  prop: 22,
  f: function() {
    return this.prop;
  }
};
//调用obj.f()时，函数内的this将绑定到o对象。
console.log(obj.f()); // 22
```

this 的值只与函数 f 作为 o 的成员被调用有关系,在何处或者如何定义调用函数完全不会影响到 this 的行为。

```javascript
var obj = { prop: 22 };

function independent() {
  return this.prop;
}

// 后定义
obj.f = independent;

console.log(obj.f()); // 22
```

类似的，this 的绑定只受最靠近的成员引用的影响。

```javascript
o.b = {
  g: independent,
  prop: 22
};
// g的上一级时b
console.log(o.b.g()); // 22
```

#### 原型链中的 this

相同的概念在定义在原型链中的方法也是一致的。如果该方法存在于一个对象的原型链上，那么 this 指向的是调用这个方法的对象，表现得好像是这个方法就存在于这个对象上一样。

```javascript
//定义o对象 包含f匿名函数，作用时返回a b和
var o = {
  f: function() {
    return this.a + this.b;
  }
};
//  p 继承 o, 使用o的原型对象及其属性去创建一个新的对象p
var p = Object.create(o);
p.a = 1;
p.b = 4;

// p调用f
console.log(p.f()); // 5
```

上例子中，对象 p 没有属于它自己的 f 属性，它的 f 属性继承自它的原型。但是这对于最终在 o 中找到 f 属性的查找过程来说没有关系；查找过程首先从 p.f 的引用开始，所以函数中的 this 指向 p。也就是说，因为 f 是作为 p 的方法调用的，所以它的 this 指向了 p。这是 JavaScript 的原型继承中的一个有趣的特性。
[Object.create()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

#### getter 与 setter 中的 this

谁调用指向谁的概念也适用于函数作为 getter、setter 调用，作为 getter 或 setter 函数都会绑定 this 到从设置属性或得到属性的那个对象。

```javascript
//定义
function modulus() {
  return Math.sqrt(this.re * this.re + this.im * this.im);
}

var o = {
  re: 1,
  im: -1,
  get phase() {
    return Math.atan2(this.im, this.re);
  }
};

//对象o上定义一个新属性modulus
Object.defineProperty(o, "modulus", {
  get: modulus,
  enumerable: true,
  configurable: true
});

console.log(o.phase, o.modulus); // -0.78 , 1.4142
```

[Object.defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

#### 构造函数中的 this

所谓构造函数，就是通过这个函数生成一个新对象(使用 new 关键字),它的 this 与即将被创建的新对象绑定（this 就指这个新对象）。

```javascript
/*
 * 构造函数的工作方式如下：
 *
 * function MyConstructor(){
 *   // 真正函数体的代码从这里开始.
 *   // 在 this 上创建属性，
 *   // 根据需要分配给他们.  例如,
 *   this.fum = "nom";
 *   // 等等...
 *
 *   // 如果函数有一个返回语句
 *   // 返回一个对象, 这个对象将是
 *   // new 结果的表达式.  除此之外,
 *   // 表达式的结果是对象
 *   // 当前对象绑定到 this
 *   // (即通常看到的通常情况).
 * }
 */

function test() {
  //this不是全局对象,对外部无影响
  this.x = 1;
}
var o = new test();
alert(o.x); // 1

// 不改变全局
var x = 2;
function test1() {
  this.x = 1;
}
o = new test1();
alert(x); //2

//手动的设置了返回对象，与this绑定的默认对象被取消
function test3() {
  this.x = 1;
  return { x: 3 };
}

o = new test3();
console.log(o.x); //  3
```

#### call 和 apply

当一个函数的函数体中使用了 this 关键字时，通过所有函数都从 Function 对象的原型中继承的 call()方法和 apply()方法调用时，它的值可以绑定到一个指定的对象上。

```javascript
function add(c, d) {
  return this.a + this.b + c + d;
}

var o = { a: 1, b: 3 };

// 第一个参数是用作“this”的对象，后续参数作为参数传递给函数调用
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

// 第一个参数是用作“this”的对象，第二个参数是一个数组，其成员用作函数调用中的参数
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34
```

注意：如果传递的 this 值不是一个对象，JavaScript 将会尝试使用内部 ToObject（使用相关构造函数） 操作将其转换为对象。

```javascript
function bar() {
  console.log(Object.prototype.toString.call(this));
}
//通过new Number(7)转换为对象
bar.call(7); // [object Number]
```

#### bind 方法

ES5 中引入了 [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/bind),调用 f.bind(someObject)会创建一个与 f 具有相同函数体和作用域的函数，但是在这个新函数中，this 将永久地被绑定到了 bind 的第一个参数，无论这个函数是如何被调用的。

```javascript
function f() {
  return this.a;
}

var g = f.bind({ a: "azerty" });
console.log(g()); // azerty

var o = { a: 37, f: f, g: g };
console.log(o.f(), o.g()); // 37, azerty
```

### DOM 事件处理函数中的 this

当函数被用作事件处理函数时，它的 this 指向触发事件的元素（一些浏览器在使用非 addEventListener 的函数动态添加监听函数时不遵守这个约定）。

```javascript
// 被调用时，将关联的元素变成蓝色
function bluify(e) {
  console.log(this === e.currentTarget); // 总是 true

  // 当 currentTarget 和 target 是同一个对象是为 true
  console.log(this === e.target);
  this.style.backgroundColor = "#A5D9F3";
}

// 获取文档中的所有元素的列表
var elements = document.getElementsByTagName("*");

// 将bluify作为元素的点击监听函数，当元素被点击时，就会变成蓝色
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", bluify, false);
}
```

### 内联事件处理函数中的 this

当代码被内联处理函数调用时，它的 this 指向监听器所在的 DOM 元素：

```html
<button onclick="alert(this.tagName.toLowerCase());">Show this</button>
```

上面的 alert 会显示 button。注意只有外层代码中的 this 是这样设置的：

```html
<button onclick="alert((function(){return this})());">Show inner this</button>
```

在这种情况下，没有设置内部函数的 this，所以它指向 global/window 对象（即非严格模式下调用的函数未设置 this 时指向的默认对象）。

```html
<a href="#" onclick="alert(this);"> Show this </a>
<!-- 弹出 url+# 并跳转 -->

<a href="javascript:;" onclick="alert(this);"> Show this </a>
<!-- 弹出  javascript:; -->
<a href="https://www.baidu.com" onclick="alert(this);"> Show this </a>
<!-- 弹出 https://www.baidu.com 并跳转 -->
```

使用 a 标签时弹出 href 的值，即 this 为 href 的值。
