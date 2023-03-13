---
id: deque
title: 双端队列 Deque
keywords:
  - JavaScript
  - 数据结构
  - Deque
  - 双端队列
---

**双端队列**（deque，全名 double-ended queue）是一种具有队列和栈性质的抽象数据类型。双端队列中的元素可以从两端弹出，即可以同时从前端和后端添加和移除元素。

双端队列在现实生活中的例子：一个刚买了票的人如果只是还需要再问一些简单的信息，就可以直接回到队伍的头部。另外，在队伍末尾的人如果赶时间，他可以直接离开队伍。

在计算机科学中，双端队列的一个常见应用是存储一系列的撤销操作。

![双端队列图](/img/deque.png)

## 创建 Deque 类

双端队列是一种特殊的队列，我们可以看到其构造函数中的部分代码和队列相同，包括相同的内部属性和以下方法：`isEmpty`、`clear`、`size` 和 `toString`。由于双端队列允许在两端添加和移除元素，还会有下面几个方法：

- `addFront(element)`：该方法在双端队列前端添加新的元素。
- `addBack(element)`：该方法在双端队列后端添加新的元素(实现方法和 Queue 类中的 `enqueue` 方法相同)。
- `removeFront()`：该方法会从双端队列前端移除第一个元素(实现方法和 Queue 类中的 `dequeue` 方法相同)。
- `removeBack()`：该方法会从双端队列后端移除第一个元素(实现方法和 Stack 类中的 `pop` 方法一样)。
- `peekFront()`：该方法返回双端队列前端的第一个元素(实现方法和 Queue 类中的 `peek` 方法一样)。
- `peekBack()`：该方法返回双端队列后端的第一个元素(实现方法和 Stack 类中的 `peek` 方法一样)。

```js
class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // 前端添加元素
  addFront(element) {
    if (this.isEmpty()) {
      // 第一种场景是这个双端队列为空时，可以执行 addBack 方法。
      // 元素会被添加到双端队列的后端，也是双端队列的前端。
      // addBack 方法已经有了增加 count 属性值的逻辑，因此我们可以复用它来避免重复编写代码。
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      // 第二种场景是一个元素已经被从双端队列的前端移除，也就是说 lowestCount 属性会大于等于 1。
      // 这种情况下，我们只需要将 lowestCount 属性减 1 并将新元素的值放在这个键的位置上即可。
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        // 第三种也是最后一种场景是 lowestCount 为 0 的情况。
        // 我们可以设置一个负值的键，同时更新用于计算双端队列长度的逻辑，使其也能包含负键值。
        // 这种情况下，添加一个新元素的操作仍然能保持最低的计算成本。为了便于演示，我们把本场景看作使用数组。
        // 要在第一位添加一个新元素，我们需要将所有元素后移一位来空出第一个位置。
        // 由于我们不想丢失任何已有的值，需要从最后一位开始迭代所有的值，并为元素赋上索引值减 1 位置的值。
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      // 在所有的元素都完成移动后，第一位将是空闲状态，这样就可以用需要添加的新元素来覆盖它了。
      this.items[0] = element; // {4}
    }
  }

  // 向后端添加元素
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // 从前端移除元素
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  // 从后端移除元素
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  // 查看第一个元素
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  // 查看最后一个元素
  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  // 是否为空
  isEmpty() {
    return this.size() === 0;
  }

  // 清空
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  // 转字符串
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}
```

## 使用 Deque 类

```js
const deque = new Deque();
console.log(deque.isEmpty()); // 输出true
deque.addBack('zhangsan');
deque.addBack('lisi');
console.log(deque.toString()); // zhangsan, lisi
deque.addBack('wangwu');
console.log(deque.toString()); // zhangsan, lisi, wangwu
console.log(deque.size()); // 输出 3
console.log(deque.isEmpty()); // 输出 false
deque.removeFront(); // 移除 wangwu
console.log(deque.toString()); // zhangsan, lisi
deque.removeBack(); // lisi 决定离开
console.log(deque.toString()); // zhangsan
deque.addFront('lisi'); // lisi 回来询问一些信息
console.log(deque.toString()); // lisi, zhangsan
```

## 解决问题

### 回文检查器

> 回文是正反都能读通的单词、词组、数或一系列字符的序列，例如 madam 或 racecar。

有不同的算法可以检查一个词组或字符串是否为回文。最简单的方式是将字符串反向排列并检查它和原字符串是否相同。如果两者相同，那么它就是一个回文。我们也可以用栈来完成，但是利用数据结构来解决这个问题的最简单方法是使用双端队列。

![回文检查图](/img/palindrome.png)

```js
function palindromeChecker(aString) {
  // 检查传入的字符串参数是否合法，不合法返回 false
  if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
    return false;
  }
  const deque = new Deque();
  // 将所有字母转化为小写，同时移除所有的空格（移除所有的特殊字符）
  const lowerString = aString.toLocaleLowerCase().split(' ').join('');
  let isEqual = true;
  let firstChar, lastChar;
  for (let i = 0; i < lowerString.length; i++) {
    // 对字符串中的所有字符执行 enqueue 操作
    deque.addBack(lowerString.charAt(i));
  }
  while (deque.size() > 1 && isEqual) {
    // 如果所有元素都在双端队列中(如果只有一个字符的话，那它肯定是回文)
    // 并且首尾字符相同的话即可认为是回文
    // 从前端移除一个元素
    firstChar = deque.removeFront();
    // 再从后端移除一个元素
    lastChar = deque.removeBack();
    // 要使字符串为回文，移除的两个字符必须相同
    if (firstChar !== lastChar) {
      // 如果字符不同的话，这个字符串就不是一个回文
      isEqual = false;
    }
  }
  return isEqual;
}
```

验证：

```js
console.log('a', palindromeChecker('a')); // a true
console.log('abc', palindromeChecker('abc')); // abc false
console.log('level', palindromeChecker('level')); // level true
```
