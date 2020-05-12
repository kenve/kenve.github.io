---
id: types-and-conversion
title: 数据类型与类型转换
---

## 数据类型

最新的 ECMAScript 标准定义了 9 种类型：

- 6 种原始数据类型，可以使用 `typeof` 运算符号检测：
  - undefined : `typeof instance === "undefined"`
  - Boolean : `typeof instance === "boolean"`
  - Number : `typeof instance === "number"`
  - String : `typeof instance === "string"`
  - BigInt : `typeof instance === "bigint"`
  - Symbol : `typeof instance === "symbol"`
- null : `typeof instance=== "object"` 特殊的原始类型，
- Object : `typeof instance === "object"` 对象，引用类型。
- Function : `typeof instance === "function"` 函数，引用类型。

> typeof 和 instanceof 的区别

`typeof` 是一元运算符，返回一个字符串类型。一般用来判断一个变量是否为空或者值是什么类型。除了 null 类型以及 Object 类型不能准确判断外，其他数据类型都可能返回正确的类型。

```js
typeof undefined; // "undefined"
typeof '10'; // "String"
typeof 10; // "Number"
typeof false; // "Boolean"
typeof Symbol(); // "Symbol"
typeof Function; // "function"
typeof null; // "Object"
typeof []; // "Object"
typeof {}; // "Object"
```

`instanceof` 来进行判断某个对象是不是另一个对象的实例。返回值的是一个布尔类型。`instanceof` 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 `prototype` 属性。

```js
const a = [];
console.log(a instanceof Array); // true
```

假设现在有 `a instanceof b` 一条语句，则其 `instanceof` 内部实际做了如下判断：

```js
while (a.__proto__ !== null) {
  if (a.__proto__ === b.prototype) {
    return true;
  }
  a.__proto__ = a.__proto__.proto__;
}
if (a.__proto__ == null) {
  return false;
}
```

`a` 会一直沿着隐式原型链 `__proto__` 向上查找直到 `a.__proto__.__proto__ ...... === b.prototype` 为止，如果找到则返回 `true`，也就是 `a` 为 `b` 的一个实例。否则返回 `false`，`a` 不是 `b` 的实例。

:::tip
`Object.prototype.toString` 也可以判断类型。`Object.prototype.toString.call(a)` 输出 `"[object Array]"`。
:::

## 原始值

- Boonle 类型，包含两个 `true` 和 `false`。
- Null 类型，包含一个值 `null`。
- Undefined 类型，未定义，包含一个值 `undefined`。
- Number 类型，包含两种数字类型 Number 和 Bigint。
  - Number 类型是双精度 64 位二进制格式 IEEE 754 值（-(2<sup>53</sup>-1)和 2<sup>53</sup>-1 之间的数字）。除了表示浮点数，数字类型还具有三个值：`+Infinity`，`-Infinity` 和 `NaN`。
- Bigint 类型，可以表示任意精度的整数。 通过将 n 附加到整数的末尾或调用构造函数来创建 BigInt。 可以安全地存储和操作大整数，甚至可以超出 Numbers 的安全整数限制。
- String 类型，用于表示文本数据。 它是一组 16 位无符号整数值的“元素”。
- Symbol 类型，是唯一且不可变的原始值，可以用作 Object 属性的键。

## Object

在计算机科学中，对象是内存中的值，可由标识符（标识符是一个字符在代码标识的序列变量，函数，或属性。）引用。

- Object
- Array
- Date
- RegExp
- Function

## 类型转换

类型转换分为**显式类型转换**和**隐式类型转换**。每种转换又分为**原始类型转换**和**对象类型转换**。

### 显示类型转换

强制转换主要指使用 Number()、String()和 Boolean()三个函数，手动将各种类型的值，分别转换成数字、字符串或者布尔值。

对于原始类型来说，转字符串类型会默认调用 `toString()` 函数，除 `null` 和 `undefined` 外。

| 数据类型  | String 类型                |
| --------- | -------------------------- |
| 数字      | 转化为数字对应的字符串     |
| 布尔类型  | 转化为字符串 `"true"`      |
| null      | 转化为字符串 `"null"`      |
| undefined | 转化为字符串 `"undefined”` |
| Object    | 转化为 `"[object Object]"` |

```js
String(123); // "123"
String(true); // "true"
String(null); // "null"
String(undefined); // "undefined"
String([1, 2, 3]); // "1,2,3"
String({}); // "[object Object]"
```

其他类型转数字类型：

| 数据类型  | 数字类型                                                                      |
| --------- | ----------------------------------------------------------------------------- |
| 字符串    | 1. 数字转化为对应的数字； 2. 其他转化为 `NaN`                                 |
| 布尔类型  | 1. `true` 转化为 `1`； 2. `false` 转化为 `0`                                  |
| null      | `0`                                                                           |
| undefined | `NaN`                                                                         |
| 数组      | 1. 数组为空转化为 `0`；2. 数组只有一个元素转化为对应元素；3. 其他转化为 `NaN` |
| 空字符串  | `0`                                                                           |

### Falsy

**falsy(falsey)** 值 (虚值) 是在 Boolean 上下文中认定为 false 的值。

JavaScript 在需要用到布尔类型值的上下文中使用强制类型转换(Type Conversion )将值转换为布尔值，例如条件语句和循环语句。

在 JavaScript 中只有 7 个 falsy 值，这意味着当 JavaScript 期望一个布尔值，并被给与下面值中的一个时。

| 值               | 说明                                                                                                             |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- |
| `false`          | false 关键字                                                                                                     |
| `0`              | 数值 zero                                                                                                        |
| `0n`             | 当 BigInt 作为布尔值使用时, 遵从其作为数值的规则. `0n` 是 falsy 值                                               |
| `""`, `''`, \`\` | 这是一个空字符串 (字符串的长度为零)。 JavaScript 中的字符串可用双引号 `""`，单引号 `''`，或 模板字面量 \`\` 定义 |
| `null`           | `null` - 缺少值                                                                                                  |
| `undefined`      | `undefined` - 原始值                                                                                             |
| `NaN`            | `NaN` - 非数值                                                                                                   |

JavaScript 中 _falsy_ 值的例子 (在布尔值上下文中被转换为 false，从而绕过了 `if` 代码块):

```js
if (false)
if (null)
if (undefined)
if (0)
if (0n)
if (NaN)
if ('')
if ("")
if (``)
if (document.all)
```

:::caution
`document.all` 在过去被用于浏览器检测，是 HTML 规范在此定义了故意与 ECMAScript 标准相违背的（`document.all` 虽然是一个对象，但其转换为 boolean 类型是 false）
:::

### 逻辑运算符

#### 赋值操作

**且运算符**（`&&`）规则是：如果第一个值的布尔值为 `true`，则返回第二个的值（注意是值，不是布尔值）；如果第一个值的布尔值为 `false`，则直接返回第一个的值，且不再对第二个求值。

```js
let pet = '' && 'dog'; // ↪ ""
let pet1 = 'cat' && 'dog'; // ↪ "dog"
```

**或运算符**（`||`）规则是：如果第一个值的布尔值为 `true`，则返回第一个的值，且不再对第二个求值；如果第一个的布尔值为 `false`，则返回第二个的值。

```js
let pet = '' || 'dog'; // ↪ "dog"
let pet1 = 'cat' || 'dog'; // ↪ "cat"
```

#### 条件判断

`!` ：取反。
`&&` ：所有条件为真，整体才为真。
`||` ：只有一个条件为真，整体就为真。

```js
!true; // false
true && true; // true
true && false; // false
true || true; // true
true || false; // true
```

### 算术运算符

- 加法运算符：`x + y`
- 减法运算符：`x - y`
- 乘法运算符：`x * y`
- 除法运算符：`x / y`
- 指数运算符：`x ** y`
- 余数运算符：`x % y`
- 自增运算符：`++x` 或者 x++`
- 自减运算符：`--x` 或者 `x--`
- 数值运算符：`+x`
- 负数值运算符：`-x`

#### 加法运算符

> 运算数的不同，导致了不同的语法行为，这种现象称为“重载”。

如果双方都不是字符串，则将转化为**数字**或**字符串**。

- Boolean + Boolean 会转化为数字相加。
- Boolean + Number 布尔类型转化为数字相加。
- Object + Number 对象类型调用 `valueOf`，如果不是 String、Boolean 或者 Number 类型，则继续调用 `toString()` 转化为字符串。
- String + Any 如果一个值是字符串，另一个运算子是非字符串，这时非字符串会转成字符串，再连接在一起。

```js
true + true; // 2
1 + true; // 2
[1] + 3; // '13'

'3' + 4 + 5; // "345"
3 + 4 + '5'; // "75"
```

复制代码字符串和字符串以及字符串和非字符串相加都会进行连接。

```js
1 + 'b'; // ‘1b’
false + 'b'; // ‘falseb’
```

除了加法运算符，其他算术运算符（比如减法、除法和乘法）都不会发生重载。它们的规则是：所有运算子一律转为数值，再进行相应的数学运算。

```js
1 - '2'; // -1
1 * '2'; // 2
1 / '2'; // 0.5
```

### 比较运算符

- `>` 大于运算符
- `<` 小于运算符
- `<=` 小于或等于运算符
- `>=` 大于或等于运算符
- `==` 相等运算符
- `===` 严格相等运算符
- `!=` 不相等运算符
- `!==` 严格不相等运算符

#### 相等运算符

相等运算符（`==`）比较两个值是否相等，严格相等运算符（`===`）比较它们是否为“同一个值”。如果两个值不是同一类型，严格相等运算符（`===`）直接返回 false，而相等运算符（`==`）会将它们转换成同一个类型，再用严格相等运算符进行比较。

比较情况：

- 数组 == 值，(值类型指的是原始类型)会先转成数值再比较，与字符串比较会先转成字符串再比较。
- 引用 == 值，会把引用类型转成原始类型再比较。
- 值 == 值，直接比较类型再比较值的大小。
- 字符串 == 数字，则把字符串转为数值再比较。
- 其他类型 == boolean，则把 boolean 转成数值再进一步比较。
- undefined == null，也会发生隐式转换，且二者可以相互转换，即二者相等，与自身也相等。
- 对象 == 非对象，如果非对象为 String、Number 或 Symbol，则返回 `ToPrimitive(对象) == 非对象`，的结果；`ToPrimitive` 方法的参数如果是原始类型则直接返回；如果是对象，则调用 `valueOf` 方法，如果是原始值再进行原始类型转换和大小对比；如果不是原始值则调用 `toString`，且结果为原始值则进行原始类型比较，如果不是原始值则抛出错误。

![相等元素符类型转换](/img/type-conversion.svg)
