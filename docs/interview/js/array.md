---
id: js-array
title: 数组 Array
---

JavaScript 的 `Array` 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。数组是最简单的内存数据结构。

## 创建语法

```js
[element0, element1, ..., elementN]
new Array(element0, element1[, ...[, elementN]])
new Array(arrayLength)
```

例子如下：

```js
const daysOfWeek1 = ['Sunday', 'Monday', 'Tuesday'];
const daysOfWeek2 = new Array('Sunday', 'Monday', 'Tuesday');
const daysOfWeek3 = new Array(3);
```

### 参数

- **`elementN`**：`Array` 构造器会根据给定的元素创建一个 JavaScript 数组，但是当仅有一个参数且为数字时除外（详见下面的 `arrayLength` 参数）。注意，后面这种情况仅适用于用 `Array` 构造器创建数组，而不适用于用方括号创建的数组字面量。

- **`arrayLength`**：一个范围在 0 到 2^32-1 之间的整数，此时将返回一个 `length` 的值等于 `arrayLength` 的数组对象（言外之意就是该数组此时并没有包含任何实际的元素，不能理所当然地认为它包含 `arrayLength` 个值为 `undefined` 的元素）。如果传入的参数不是有效值，则会抛出 [RangeError](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError) 异常。

数组是一种类列表对象，它的原型中提供了遍历和修改元素的相关操作。

## 描述

- 数组是一种类列表对象，它的原型中提供了遍历和修改元素的相关操作。JavaScript 数组的长度和元素类型都是非固定的。因为数组的长度可随时改变，并且其数据在内存中也可以不连续，所以 JavaScript 数组不一定是密集型的。

- 只能用整数作为数组元素的索引，而不能用字符串。后者称为[关联数组](https://en.wikipedia.org/wiki/Associative_array)。使用非整数并通过[方括号](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties)或[点号](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_Accessors)来访问或设置数组元素时，所操作的并不是数组列表中的元素，而是数组对象的[属性集合](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures#Properties)上的变量。数组对象的属性和数组元素列表是分开存储的，并且数组的遍历和修改操作也不能作用于这些命名属性。

### 访问数组元素

- JavaScript 数组的索引是从 0 开始的，第一个元素的索引为 0，最后一个元素的索引等于该数组的长度减 1。如果指定的索引是一个无效值，JavaScript 数组并不会报错，而是会返回 `undefined`。

- 在 JavaScript 中，以数字开头的属性不能用点号引用，必须用方括号。

```js
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday'];
console.log(daysOfWeek[0]); // Sunday
console.log(daysOfWeek[daysOfWeek.length - 1]); // Tuesday
console.log(daysOfWeek[-1]); // undefined

console.log(daysOfWeek.0); // a syntax error
```

### length 和数字下标之间的关系

JavaScript 数组的 `length` 属性和其数字下标之间有着紧密的联系（`最大下标 = length - 1`）。数组内置的几个方法（例如 `join`、`slice`、`indexOf` 等）都会考虑 `length` 的值。另外还有一些方法（例如 `push`、`splice` 等）还会改变 `length` 的值。

- 使用一个合法的下标为数组元素赋值，并且该下标超出了当前数组的大小的时候，解释器会同时修改 `length` 的值。

- 也可以显式地给 `length` 赋一个更大的值，没有元素的填充 `undefined`;
- 而为 `length` 赋一个更小的值则会删掉一部分元素，会截取当前长度的数组。

[Array.length](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length) MDN 中有更详细的介绍。

## 属性

- `Array.length`：
  Array 构造函数的 length 属性，其值为 1（注意该属性为静态属性，不是数组实例的 length 属性）。
- `get Array[@@species]`：返回 Array 构造函数。`Array[Symbol.species]`
- `Array.prototype`：通过数组的原型对象可以为所有数组对象添加属性。

## 方法

| 方法名                                                                                                                                               | 描述                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Array.from(arrayLike\[, mapFn\[, thisArg\])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)           | 从类数组对象或者可迭代对象中创建一个新的数组实例；`arrayLike` 想要转换成数组的伪数组对象或可迭代对象，`mapFn` 如果指定了该参数，新数组中的每个元素会执行该回调函数。 | `thisArg` 可选参数，执行回调函数 mapFn 时 this 对象。 |
| [Array.isArray(obj)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)                                 | 用来判断某个变量是否是一个数组对象；`obj` 需要检测的值，如果值是 `Array`，则返回 `true`，否则返回 `false`                                                            |
| [Array.of(element0\[, element1\[, ...\[, elementN\]\]\])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of) | 根据一组参数来创建新的数组实例，支持任意的参数数量和类型；`elementN` 任意个参数，将按顺序成为返回数组中的元素                                                        |

## 数组实例

所有数组实例都会从 `Array.prototype` 继承属性和方法。修改 `Array` 的原型会影响到所有的数组实例。

### 属性

| 属性名                        | 描述                                                                                          |
| ----------------------------- | --------------------------------------------------------------------------------------------- |
| `Array.prototype.constructor` | 所有的数组实例都继承了这个属性，它的值就是 `Array`，表明了所有的数组都是由 `Array` 构造出来的 |
| `Array.prototype.length`      | 因为 `Array.prototype` 也是个数组，所以它也有 `length` 属性，这个值为 0，因为它是个空数组     |

### 方法

#### 修改器方法

方法会改变调用它们的对象自身的值：

| 名称                                                                                                                                                                   | 描述                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [Array.prototype.copyWithin(target[, start[, end]])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)                | 在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值                 |
| [Array.prototype.fill(value[, start[, end]0])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)                            | 将数组中指定区间的所有元素的值，都替换成某个固定的值                           |
| [Array.prototype.pop()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)                                                    | 删除数组的最后一个元素，并返回这个元素(当数组为空时返回 `undefined`)           |
| [Array.prototype.push(element1, ..., elementN)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)                           | 在数组的末尾增加一个或多个元素，并返回数组的新长度                             |
| [Array.prototype.reverse()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)                                            | 颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个 |
| [Array.prototype.shift()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)                                                | 删除数组的第一个元素，并返回这个元素 （如果数组为空则返回 `undefined`）        |
| [Array.prototype.sort([compareFunction(firstEl, secondEl)])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)              | 对数组元素进行排序，并返回当前数组                                             |
| [Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) | 在任意的位置给数组添加或删除任意个元素                                         |
| [Array.prototype.unshift()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)                                            | 在数组的开头增加一个或多个元素，并返回数组的新长度                             |

#### 访问方法

方法绝对不会改变调用它们的对象的值，只会返回一个新的数组或者返回一个其它的期望值。

| 名称                                                                                                                                                          | 描述                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [Array.prototype.concat(value1[, value2[, ...[, valueN]]])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)    | 返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组                                        |
| [Array.prototype.includes(valueToFind[, fromIndex])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)         | 判断当前数组是否包含某指定的值，如果是返回 `true`，否则返回 `false`                                         |
| [Array.prototype.join([separator])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)                              | 连接所有数组元素组成一个字符串（默认为 `,`）                                                                |
| [Array.prototype.slice([begin[, end]]](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)                          | 抽取当前数组中的一段元素组合成一个新数组                                                                    |
| [Array.prototype.toSource()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toSource)                                 | 返回一个表示当前数组字面量的字符串。遮蔽了原型链上的 `Object.prototype.toSource()` 方法                     |
| [Array.prototype.toString()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)                                 | 返回一个由所有数组元素组合而成的字符串。遮蔽了原型链上的 `Object.prototype.toString()` 方法                 |
| [Array.prototype.toLocaleString([locales[,options]])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)  | 返回一个由所有数组元素组合而成的本地化后的字符串。遮蔽了原型链上的 `Object.prototype.toLocaleString()` 方法 |
| [Array.prototype.indexOf(searchElement[, fromIndex])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)         | 返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 `-1`                                 |
| [Array.prototype.lastIndexOf(searchElement[, fromIndex])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) | 返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 `-1`             |

#### 迭代方法

遍历方法中，大多数方法都需要指定一个回调函数作为参数。避免在遍历过程中对原数组进行任何修改。

| 名称                                                                                                                                                                                                     | 描述                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [Array.prototype.forEach(callback(currentValue [, index [, array]])[, thisArg])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)                         | 为数组中的每个元素执行一次回调函数                                                                                               |
| [Array.prototype.entries()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)                                                                              | 返回一个数组迭代器对象，该迭代器会包含所有数组元素的键值对                                                                       |
| [Array.prototype.every(callback(element[, index[, array]])[, thisArg])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)                                    | 如果数组中的每个元素都满足测试函数，则返回 `true`，否则返回 false                                                                |
| [Array.prototype.some(callback(element[, index[, array]])[, thisArg])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)                                      | 如果数组中至少有一个元素满足测试函数，则返回 `true`，否则返回 false                                                              |
| [Array.prototype.filter(callback(element[, index[, array]])[, thisArg])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)                                  | 将所有在过滤函数中返回 `true` 的数组元素放进一个新数组中并返回                                                                   |
| [Array.prototype.find(callback(element[, index[, array]])[, thisArg])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)                                      | 找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 `undefined`                                                   |
| [Array.prototype.findIndex(callback(element[, index[, array]])[, thisArg])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)                            | 找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 `-1`                                                        |
| [Array.prototype.keys()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)                                                                                    | 返回一个数组迭代器对象，该迭代器会包含所有数组元素的键                                                                           |
| [Array.prototype.map(callback(currentValue [, index [, array]])[, thisArg])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)                                 | 返回一个由回调函数的返回值组成的新数组                                                                                           |
| [Array.prototype.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)           | 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值 |
| [Array.prototype.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) | 从右到左为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值 |
| [Array.prototype.values()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values)                                                                                | 返回一个数组迭代器对象，该迭代器会包含所有数组元素的值                                                                           |
| [Array.prototype\[@@iterator\]()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)                                                                     | 和上面的 `values()` 方法是同一个函数                                                                                             |

## 类型数组

JavaScript 数组不是强类型的，因此它可以存储任意类型的数据，如果用于存储单一类型的数据，可以考虑使用类型数组 [TypedArray](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)。类型化数组（TypedArray）对象描述了一个底层的二进制数据缓冲区（binary data buffer）的一个类数组视图（view）。

```js
let myArray = new TypedArray(length);
```

其中 `TypedArray` 需替换为下表所列之一

| 类型                                                                                                                    | 描述                                              |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [Int8Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int8Array)                 | 8 位二进制有符号整数                              |
| [Uint8Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)               | 8 位无符号整数（超出范围后从另一边界循环）        |
| [Uint8ClampedArray](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray) | 8 位无符号整数（超出范围后为边界值）              |
| [Int16Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int16Array)               | 16 位二进制有符号整数                             |
| [Uint16Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array)             | 16 位无符号整数                                   |
| [Int32Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)               | 32 位二进制有符号整数                             |
| [Uint32Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)             | 32 位无符号整数                                   |
| [Float32Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)           | 32 位 IEEE 浮点数（7 位有效数字，如 `1.1234567`） |
| [Float64Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)           | 64 位 IEEE 浮点数（16 有效数字，如 `1.123...15`)  |
| [BigInt64Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array)         | 64 位二进制有符号整数                             |
| [BigUint64Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array)       | 64 位无符号整数                                   |
