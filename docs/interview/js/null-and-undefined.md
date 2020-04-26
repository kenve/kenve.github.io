---
id: null-and-undefined
title: null 和 undefined
---

## null

值 `null` 特指对象的值未设置。它是 JavaScript [基本类型](type-conversion.md/)之一，在布尔运算中被认为是 [falsy](type-conversion.md/#Falsy) 值 (虚值)。

值 `null` 是一个字面量，不像 `undefined`，它不是全局对象的一个属性。`null` 是表示缺少的标识，指示变量未指向任何对象。把 `null` 作为尚未创建的对象，也许更好理解。在 API 中，`null` 常在返回类型应是一个对象，但没有关联的值的地方使用。

```js
// foo 不存在，它从来没有被定义过或者是初始化过：
foo; // "ReferenceError: foo is not defined"

// foo 现在已经是知存在的，但是它没有类型或者是值：
var foo = null;
foo; // null
```

## undefined

`undefined` 的最初值就是原始数据类型（基本类型） `undefined`。表示一个声明未定义的变量的初始值，或没有实际参数的形式参数。是全局对象的一个属性，也就是说，它是全局作用域的一个变量。

:::caution 注意
但是它有可能在非全局作用域中被当作标识符（变量名）来使用（因为 `undefined` 不是一个保留关键字），这样做非常不好，因为这样会使你的代码难以去维护和排错。

```js
// 不要这样做！

// 打印 'foo string' PS：说明undefined的值和类型都已经改变
(function () {
  var undefined = 'foo';
  console.log(undefined, typeof undefined);
})();

// 打印 'foo string' PS：说明 undefined 的值和类型都已经改变
(function (undefined) {
    console.log(undefined, typeof undefined);
  },
)('foo');
```

:::

## null 与 undefined 的不同点

当检测 `null` 或 `undefined` 时，注意相等（==）与全等（===）两个操作符的区别 ，前者会执行类型转换：

```js
typeof null; // "object" (因为一些以前的原因而不是'null')
typeof undefined; // "undefined"
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
!null; //true
isNaN(1 + null); // false
isNaN(1 + undefined); // true
```

**`null` 表示空值（空对象），即该处的值现在为空。**

- 转为数值时为 `0`
- - 变量被声明了，并赋值为空 `null`。
- 作为函数的参数，表示该函数参数为空。

```js
// 转数字
Number(null); // 0
5 + null; // 5

// 空值
let a = null;

// 调用函数时，应该提供的参数为 null
function f(x) {
  return x;
}
f(a); // null
```

**`undefined` 表示“未定义”，就是此处应该有一个值，但是还没有定义。**

- `undefined` 转为数值时为 `NaN`
- 变量被声明了，但没有赋值时，就等于 `undefined`。
- 调用函数时，应该提供的参数没有提供，该参数等于 `undefined`。
- 对象没有赋值的属性，该属性的值为 `undefined`。
- 函数没有返回值时，默认返回 `undefined`。

```js
// 转数字
Number(undefined); // NaN
5 + undefined; // NaN

// 变量声明了，但没有赋值
let i; // 等同于 let i = undefined;
i; // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
f(); // undefined

// 对象没有赋值的属性
let o = new Object();
o.p; // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
f(); // undefined

undefined === void 0; // true
```
