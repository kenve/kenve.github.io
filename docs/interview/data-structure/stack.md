---
id: stack
title: 栈 Stack
---

**栈**（Stack）又称为堆栈或堆叠，是一种遵从**后进先出**（LIFO, Last In First Out）原则的有序集合。新添加或待删除的元素都保存在栈的同一端，称作**栈顶**，另一端就叫**栈底**。在栈里，新元素都靠近栈顶，旧元素都接近栈底。

栈也被用在编程语言的编译器和内存中保存变量、方法调用（函数调用栈）等，也被用于浏览器历史记录 (浏览器的返回按钮)。

![栈示意图](/img/stack.png)

## 基于数组实现栈

栈声明一些方法。

- `push(element(s))`：添加一个(或几个)新元素到栈顶。
- `pop()`：移除栈顶的元素，同时返回被移除的元素。
- `peek()`：返回栈顶的元素，不对栈做任何修改(该方法不会移除栈顶的元素，仅仅返回它)。
- `isEmpty()`：如果栈里没有任何元素就返回 `true`，否则返回 `false`。
- `size()`：返回栈里的元素个数。该方法和数组的 `length` 属性很类似。
- `toString`：将栈结构里的元素以字符串的形式返回。
- `clear()`：移除栈里的所有元素。

```js
class Stack {
  constructor() {
    this.items = []; // 初始化
  }
  // 向栈添加元素
  push(element) {
    this.items.push(element);
  }
  // 从栈移除元素（按 LIFO 规则）
  pop() {
    return this.items.pop();
  }
  // 查看栈顶元素
  peek() {
    return this.items[this.items.length - 1];
  }
  // 栈是否为空
  isEmpty() {
    return this.items.length === 0;
  }
  // 栈的元素个数
  size() {
    return this.items.length;
  }
  // 清空栈元素
  clear() {
    this.items = [];
    // 或者循环调用 pop 删除
    // while (!this.isEmpty()) {
    //   this.pop();
    // }
  }
  // 以字符串形式返回栈内容
  toString() {
    // 直接用 jonin 或者使用 for 循环
    return this.items.join();
  }
}
```

## 基于对象实现栈

在处理大量数据的时候，我们同样需要评估如何操作数据是最高效的。在使用数组时， 大部分方法的时间复杂度是 O(n)。使用对象的方式实现除了 `toString` 方法，其他方法的复杂度均为 O(1)。

```js
class Stack {
  constructor() {
    // count 属性来记录栈的大小（也能当作 key 来添加和删除元素）
    this.count = 0;
    // 初始化储存对象
    this.items = {};
  }
  // 向栈添加元素
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
  // 从栈移除元素（按 LIFO 规则）
  pop() {
    // 如果栈为空，返回 undefined
    if (this.isEmpty()) {
      return undefined;
    }
    // 每次 push 的时候都会 count++，所以最后一个元素需要先 count--
    this.count--;
    // 取出最后一个元素值
    const result = this.items[this.count];
    // 删除该元素
    delete this.items[this.count];
    // 返回元素
    return result;
  }
  // 查看栈顶元素
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  // 栈是否为空
  isEmpty() {
    return this.count === 0;
  }
  // 栈的元素个数
  size() {
    return this.count;
  }
  // 清空栈元素
  clear() {
    this.items = {};
    this.count = 0;
    // 或者循环调用 pop 删除
    // while (!this.isEmpty()) {
    //   this.pop();
    // }
  }
  // 以字符串形式返回栈内容
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    // 第一个元素
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
```

<!-- ## 使用链表实现栈 -->

## 保护数据结构内部元素

对象外部能获取对象里面的属性。

```js
console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
console.log(stack.items);
```

### 下划线命名约定

在属性名称之前加上一个下划线(`_`)来标记一个属性为私有属性。这种方式只是一种约定，并不能真正保护私有数据。

```js {3,4}
class Stack {
  constructor() {
    this._count = 0;
    this._items = {};
  }
}
```

### Symbol

ES6 中新增了 [Symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 的基本类型，它是不可变的，可以用作对象的属性。

```js {4,6}
class Stack {
  constructor() {
    // 声明了 Symbol 类型的变量 _items
    const _items = Symbol('stackItems');
    // 初始化
    this[_items] = [];
  }
  // 栈的方法，把 this.items 都换成 this[_items]
}
```

但这还是能被 `Object.getOwnPropertySymbols(stack);` 获取。

### WeakMap

有一种数据类型可以确保属性是私有的，这就是 WeakMap。 WeakMap 可以存储键值对，其中键是对象，值可以是任意数据类型。

用 WeakMap 来存储 items 属性(数组版本)，Stack 类就是这样的：

```js
// 声明一个 WeakMap 类型的变量 items
const items = new WeakMap();
class Stack {
  constructor() {
    // 以 this(Stack 类自己的引用)为键，把代表栈的数组存入 items
    items.set(this, []);
  }
  // 添加
  push(element) {
    // 从 WeakMap 中取出值，即以 this 为键从 items 中取值
    const s = items.get(this);
    // 加到栈 s 中
    s.push(element);
  }
  // 移除
  pop() {
    const s = items.get(this);
    const r = s.pop();
    return r;
  }
  // 其他方法
}
```

采用这种方法，代码的可读性不强，而且在扩展该类时无法继承私有属性。鱼和熊掌不可兼得！

### 其他实现私有属性的方式

- TypeScript 提供了一个给类属性和方法使用的 `private` 修饰符。然而，该修饰符只在编译时有用。在代码被转换完成后，属性同样是公开的。
- JavaScript 类中增加私有属性的提案，在属性前添加井号(#)作为前缀来声明私有属性。[查看提案详情](https://github.com/tc39/proposal-class-fields)。

## 用栈解决问题

栈的实际应用非常广泛。在回溯问题中，它可以存储访问过的任务或路径、撤销的操作。许多编程语言都用栈来存储变量和方法调用，特别是处理递归算法时，有可能抛出一个栈溢出异常。

### 从十进制到二进制

如果要把十进制转化成二进制，我们可以将该十进制数除以 `2`（二进制是满二进一）并对商取整， 直到结果是 `0` 为止。举个例子，把十进制的数 `10` 转化成二进制的数字，过程大概是如下这样：

![十进制转二进制](/img/binary.png)

```js
function decimalToBinary(decNumber) {
  // 实例化栈对象
  const remStack = new Stack();
  // 十进制数字
  let number = decNumber;
  // 余数
  let rem;
  // 二进制字符串
  let binaryString = '';
  // 当余数不为 0 时循环
  while (number > 0) {
    // 当除法的结果不为 0 时，得到一个余数
    rem = Math.floor(number % 2);
    // 并放到栈里
    remStack.push(rem);
    // 然后让结果继续除以 2，直到 number 为 0
    number = Math.floor(number / 2);
  }
  // 最后，用 pop 方法把栈中的元素都移除，把出栈的元素连接成字符串
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  // 返回二进制字符串
  return binaryString;
}
```

:::caution 请注意
JavaScript 有数值类型，但是它不会区分整数和浮点数。因此，要使用 `Math.floor` 函数仅返回除法运算结果的整数部分。
:::

#### 进制转换算法

修改之前的十进制转二进制算法，使之能把十进制转换成基数为 `2~36` 的任意进制。除了把十进制数除以 `2` 转成二进制数，还可以传入其他任意进制的基数为参数。  
我们只需要改变一个地方：

- 在将十进制转成二进制时，余数是 `0` 或 `1`；
- 在将十进制转成八进制时，余数是 `0~7`;
- 但是将十进制转成十六进制时，余数是 `0~9` 加上 `A`、`B`、`C`、`D`、`E` 和 `F`(对应 `10`、`11`、`12`、`13`、`14` 和 `15`)。因此，我们需要对栈中的数字做个转化才可以(行{3}和行{16})。所以，从十一进制开始，字母表中的每个字母将表示相应的基数。字母 `A` 代表基数 `11`，`B` 代表 基数 `12`，以此类推。

```js {3,16}
/**
 * @params {integer} decNumber 待转换十进制数
 * @params {integer} base 要转成的进制
 * @returns {string} 转换后的值
 */
function baseConverter(decNumber, base) {
  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // {3}
  let number = decNumber;
  let rem;
  let baseString = '';
  if (!(base >= 2 && base <= 36)) {
    return '';
  }
  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]; // {16}
  }
  return baseString;
}
```

## 总结

**栈**是一种运算受限的线性表，遵从**后进先出(LIFO)**原则的有序集合，即限定仅在表尾进行插入和删除操作。实现栈数据结构的方式很多，如：数组、JavaScript 对象、链表等。

- [LeetCode 栈相关的题目](https://github.com/kenve/leetcode#%E6%A0%88)
