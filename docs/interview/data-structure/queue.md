---
id: queue
title: 队列 Queue
---

**队列**，又称为**伫列**（Queue），遵循**先进先出**（FIFO，First-In-First-Out）原则的[线性表](https://zh.wikipedia.org/wiki/%E7%BA%BF%E6%80%A7%E8%A1%A8)。队列只允许在后端（称为 rear）进行插入操作，在前端（称为 front）进行删除操作。最新添加的元素必须排在队列的末尾。

在现实中，最常见的队列的例子就是排队，排在第一位的人会先接受服务。在计算机中，一个常见的例子就是打印队列。

![队列图](/img/queue.png)

## JavaScript 任务队列

当我们在浏览器中打开新标签时，就会创建一个任务队列。这是因为每个标签都是单线程处理所有的任务，称为事件循环。浏览器要负责多个任务，如渲染 HTML、执行 JavaScript 代码、 处理用户交互(用户输入、鼠标点击等)、执行和处理异步请求。更多地了解，访问[事件循环](../js/eventloop.md)。

## 创建队列

- 实现存储队列中元素的数据结构有很多方式，比如：数组、链表、对象等。为了获取元素时更高效的数据结构，这里还是使用一个对象来存元素。
- 还需要声明一个 `count` 属性来帮助我们控制队列的大小。此外，由于我们将要从队列前端移除元素，同样需要一个变量 `lowestCount` 来帮我们追踪第一个元素。

接下来需要声明一些队列可用的方法：

- `enqueue(element(s))`：向队列尾部添加一个(或多个)新的项。
- `dequeue()`：移除队列的第一项(即排在队列最前面的项)并返回被移除的元素。
- `peek()`：返回队列中第一个元素（最先被添加），也将是最先被移除的元素。队列不做任何变动(不移除元素，只返回元素信息——与 Stack 类的 `peek` 方法非常类似)。该方法在其他语言中也可以叫作 `front` 方法。
- `isEmpty()`：如果队列中不包含任何元素，返回 `true`，否则返回 `false`。
- `size()`：返回队列包含的元素个数，与数组的 `length` 属性类似。

```js
class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  // 添加元素到后端（队尾）
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  // 从前端（队头）移除元素
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    // 暂存队列头部的值
    const result = this.items[this.lowestCount];
    // 移除
    delete this.items[this.lowestCount];
    // 第一个元素的位置
    this.lowestCount++;
    // 返回值
    return result;
  }
  // 查看队列头元素
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  // 检查队列是否为空
  isEmpty() {
    return this.count - this.lowestCount === 0;
    // return this.size === 0;
  }
  // 获取它的长度
  size() {
    return this.count - this.lowestCount;
  }
  // 清空队列
  clear() {
    // 重新赋值，或者调用 dequeue 方法直到它返回 undefined
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  // 转为字符串
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

## 使用队列

```js
// 实例化
const queue = new Queue();
console.log(queue.isEmpty()); // 输出 true
// 添加一些元素（添加 'zhangsan' 和 'lisi' 两个元素——你可以向队列添加任何类型的元素）。
queue.enqueue('zhangsan');
queue.enqueue('lisi');
console.log(queue.toString()); // zhangsan, lisi
// 添加另一个元素。
queue.enqueue('kenve');
// 再执行一些其他命令。
console.log(queue.toString()); // zhangsan, lisi, kenve
console.log(queue.size()); // 输出 3
console.log(queue.isEmpty()); // 输出 false
queue.dequeue(); // 移除 zhangsan
queue.dequeue(); // 移除 lisi
console.log(queue.toString()); // kenve
```

## 时间复杂度

Queue 用大 O 符号表示的时间复杂度：

| 算法 | 平均 | 最差 |
| ---- | ---- | ---- |
| 空间 | O(n) | O(n) |
| 搜索 | O(n) | O(n) |
| 插入 | O(1) | O(1) |
| 删除 | O(1) | O(1) |

## 实践

### 循环队列——击鼓传花游戏

循环队列的一个例子就是击鼓传花游戏(hot potato)。

> 在这个游戏中，孩子们围成一个圆圈，把花尽快地传递给旁边的人。某一时刻传花停止， 这个时候花在谁手里，谁就退出圆圈、结束游戏。重复这个过程，直到只剩一个孩子(胜者)。

![击鼓传花图](/img/hot-potato.png)

```js
function hotPotato(elementsList, num) {
  const queue = new Queue();
  const elimitatedList = [];
  // 把参与游戏的名字全都加入队列
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }
  while (queue.size() > 1) {
    // 根据给定的数字 num，迭代队列
    for (let i = 0; i < num; i++) {
      // 从队列开头移除一项，再将其添加到队列末尾
      queue.enqueue(queue.dequeue());
    }
    // 一旦达到给定的传递次数，拿着花的那个人就被淘汰了(从队列中移除）
    elimitatedList.push(queue.dequeue());
  }
  // 只剩最后一人时--获胜
  return {
    eliminated: elimitatedList,
    winner: queue.dequeue(),
  };
}
```

执行：

```js
const names = ['kenve', 'zhangsan', 'lisi', 'wangwu', 'xiaoming'];
const result = hotPotato(names, 7);
result.eliminated.forEach((name) => {
  console.log(`${name} 在击鼓传花中被淘汰。`);
});
console.log(`胜利者: ${result.winner}`);
// 以上算法的输出如下
// lisi 在击鼓传花中被淘汰。
// zhangsan 在击鼓传花中被淘汰。
// xiaoming 在击鼓传花中被淘汰。
// wangwu 在击鼓传花中被淘汰。
// 胜利者: kenve
```

### 更多

- [LeetCode 队列相关题目](https://github.com/kenve/leetcode/#%E9%98%9F%E5%88%97)
