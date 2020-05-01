---
id: binary-heap
title: 二叉堆和堆排序
---

二叉堆（binary heap）是一种特殊的堆，二叉堆是完全二叉树或者是近似完全二叉树。能高效、快速地找出最大值和最小值，常被应用于优先队列和著名的[堆排序](#堆排序算法)算法中。

:::tip
**满二叉树：**一棵深度为 k，且有 _2<sup>k+1</sup> - 1_ 个节点的二叉树，称为满二叉树（Full Binary Tree）。这种树的特点是每一层上的节点数都是最大节点数。

**完全二叉树：**在一棵二叉树中，除最后一层外，若其余层都是满的，并且最后一层或者是满的，或者是在右边缺少连续若干节点，则此二叉树为完全二叉树（Complete Binary Tree）。具有 n 个节点的完全二叉树的深度为 _log2<sup>n+1</sup>_。深度为 k 的完全二叉树，至少有 _2<sup>k-1</sup>_ 个节点，至多有 _2<sup>k</sup> - 1_ 个节点。
:::

二叉堆是一种特殊的二叉树，有以下两个特性：

- **结构特性：**二叉堆一棵完全二叉树，表示树的每一层都有左侧和右侧子节点（除了最后一层的叶节点），并且最后一层的叶节点尽可能都是左侧子节点。

- **堆特性：**二叉堆分为最小堆和最大堆。最大堆：父结点的键值总是大于或等于任何一个子节点的键值；最小堆：父结点的键值总是小于或等于任何一个子节点的键值。

下图展示了一些合法的和不合法的堆：

![堆展示图](/img/heap-sample.svg)

## 创建最小堆类

先来创建 MinHeap 类，如下所示：

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};

/**
 * 比较函数
 */
function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export class MinHeap {
  constructor(compareFn = defaultCompare) {
    // 使用 compareFn，在没有传入自定义函数的时候进行基本的比较
    this.compareFn = compareFn;
    // 使用数组来存储数据
    this.heap = [];
  }
}
```

### 1. 二叉树的数组表示

二叉树有两种表示方式：

- 第一种是使用一个动态的表示方式，也就是指针（用节点表示），如[树中的类](tree.md)。
- 第二种是使用一个数组，通过索引值检索父节点、左侧和右侧子节点的值。

下图展示了两种不同的表示方式：

![二叉树的两种表示方式图](/img/heap-implement.svg)

要访问使用普通数组的二叉树节点，可以用下面的方式操作 index。对于给定位置 index 的节点:

- 它的左侧子节点的位置是 `2 * index + 1`（如果位置可用）；
- 它的右侧子节点的位置是 `2 * index + 2`（如果位置可用）；
- 它的父节点位置是 `index / 2`（如果位置可用）。

用上面的方法来访问特定节点，可以把下面的方法加入 MinHeap 类：

```js
getLeftIndex(index) {
  return 2 * index + 1;
}

getRightIndex(index) {
  return 2 * index + 2;
}

getParentIndex(index) {
  if (index === 0) {
    return undefined;
  }
  return Math.floor((index - 1) / 2);
}
```

可以在堆数据结构中进行三个主要操作：

- `insert(value)`：这个方法向堆中插入一个新的值。如果插入成功，它返回 true，否则返回 false。
- `extract()`：这个方法移除最小值(最小堆)或最大值(最大堆)，并返回这个值。
- `findMinimum()`：这个方法返回最小值(最小堆)或最大值(最大堆)且不会移除这个值。

### 2. 向堆中插入值

向堆中插入值是指将值插入堆的底部叶节点（数组的最后一个位置——行 1）再执行 `siftUp` 方法（行 2），表示我们将要将这个值和它的父节点进行交换，直到父节点小于这个插入的值。这个上移操作也被称为 up head、percolate up、bubble up、heapify up 或 cascade up。

```js {3,4}
insert(value) {
  if (value != null) {
    this.heap.push(value); // 1
    this.siftUp(this.heap.length - 1); // 2
    return true;
  }
  return false;
}
```

**上移操作：**代码如下：

```js
/**
 * 上移操作，接收插入值的位置作为参数
 */
function siftUp(index) {
  // 需要获取其父节点的位置
  let parent = this.getParentIndex(index);
  // 如果插入的值小于它的父节点(在最小堆中，或在最大堆中比父节点大)
  while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) > Compare.BIGGER_THAN) {
    // 那么将这个元素和父节点交换
    swap(this.heap, parent, index);
    index = parent;
    // 重复这个过程直到堆的根节点也经过了交换节点和父节点位置的操作
    parent = this.getParentIndex(index);
  }
}
```

**交换函数**为：

```js
function swap(array, a, b) {
  // 要交换数组中的两个值，需要一个辅助变量来复制要交换的第一个元素
  const temp = array[a];
  // 然后，将第二个元素赋值到第一个元素的位置
  array[a] = array[b];
  // 最后，将复制的第一个元素的值，覆盖到第二个元素的位置
  array[b] = temp;
}

// es6 数组结构的方式为
const swap = (array, a, b) => ([array[a], array[b]] = [array[b], array[a]]);
```

来看看 `insert` 方法的实际操作。考虑下面的堆数据结构：

![二叉堆图](/img/heap-insert.svg)

假设我们想要向堆中插入一个值 `1`。算法会进行一些少量的上移操作，如下图所示：

![二叉堆插入上移图](/img/heap-insert-step.svg)

下面的代码展示了堆的创建和上图的操作：

```js
const heap = new MinHeap();

heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);

heap.insert(1);
```

### 3. 从堆中找到最小值或最大值

在最小堆中，最小值总是位于数组的第一个位置（堆的根节点）。代码如下所示：

```js
/**
 * 长度
 */
size() {
  return this.heap.length;
}

/**
 * 是否为空
 */
isEmpty() {
  return this.size() === 0;
}

findMinimum() {
  // 如果堆不为空，我们返回数组的第一个值
  return this.isEmpty() ? undefined : this.heap[0];
}
```

:::info
在最大堆中，数组的第一个元素保存了最大值，所以可以使用相同的代码。
:::

### 4. 导出堆中的最小值或最大值

移除最小值（最小堆）或最大值（最大堆）表示移除数组中的第一个元素(堆的根节点)。在移除后，需要将堆的最后一个元素移动至根部并执行 `siftDown` 函数，表示我们将交换元素直到堆的结构正常。这个下移操作也被称为 sink down、percolate down、bubble down、heapify down 或 cascade down。

代码如下：

```js
extract() {
  if (this.isEmpty()) {
    // 如果堆为空，即没有值可以导出，那么可以返回 undefined | null
    return undefined;
  }
  if (this.size() === 1) {
    // 如果堆中只有一个值，我们可以直接移除并返回它
    return this.heap.shift();
  }
  // 但是，如果堆中有不止一个值，需要将第一个值移除（）
  const removedValue = this.heap.shift();
  // 存储到一个临时变量中以便在执行完下移操作后
  this.siftDown(0);
  // 再返回它
  return removedValue;
}
```

**下移操作(堆化)**代码如下所示：

```js
/**
 * 方法接收移除元素的位置作为参数
 */

function siftDown(index) {
  // 将 index 复制到 element 变量
  let element = index;
  // 获取左侧子节点和右侧子节点的值。
  const left = this.getLeftIndex(index);
  const right = this.getRightIndex(index);
  // 下移操作表示将元素和最小子节点(最小堆)和最大子节点(最大堆)进行交换。
  const size = this.size();
  // 如果元素比左侧子节点要小（且 index 合法）
  if (left < size && this.compareFn(this.heap[element], this.heap[left]) > Compare.BIGGER_THAN) {
    // 就交换元素和它的左侧子节点
    element = left;
  }
  // 如果元素小于它的右侧子节点（且 index 合法）
  if (right < size && this.compareFn(this.heap[element], this.heap[right]) > Compare.BIGGER_THAN) {
    // 交换元素和它的右侧子节点
    element = right;
  }
  // 在找到最小子节点的位置后，检验它的值是否和 element 相同
  if (index !== element) {
    // 如果不同，就将它和最小的 element 交换
    swap(this.heap, index, element);
    // 重复这个过程，直到 element 被放在正确的位置上
    this.siftDown(element);
  }
}
```

假设从堆中进行导出操作。算法会进行一些下移操作，如下图所示：

![堆导出及下移操作图](/img/heap-extract-step.svg)

代码如下：

```js
heap = new MinHeap();
for (let i = 1; i < 10; i++) {
  heap.insert(i);
}
console.log('Extract minimum: ', heap.extract()); // 1
```

## 创建最大堆类

MaxHeap 类的算法和 MinHeap 类的算法一模一样。不同之处在于我们要把所有 >（大于）的比较换成 <（小于）的比较。

MaxHeap 类的代码如下。

```js {4}
class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = reverseCompare(compareFn); // 1
  }
}
```

但是不同于复制代码，可以在继承 MinHeap 类的基础上进行扩展，并在需要时进行反向的比较。要将比较反转，不将 a 和 b 进行比较，而是将 b 和 a 进行比较（行 1）， 如下面代码所示：

```js
function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a);
}
```

可以使用测试最小堆的代码来测试最大堆。不同点是最大的值会是堆的根节点，而不是 最小的值。

```js
const maxHeap = new MaxHeap();
maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);

maxHeap.insert(1);

console.log('Heap size: ', maxHeap.size()); // 5
console.log('Heap min value: ', maxHeap.findMinimum()); // 5
```

## 最大最小堆的完整代码

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function swap(array, a, b) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}

/**
 * 最小堆
 */

class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = [];
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() <= 0;
  }

  clear() {
    this.heap = [];
  }

  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  insert(value) {
    if (value != null) {
      const index = this.heap.length;
      this.heap.push(value);
      this.siftUp(index);
      return true;
    }
    return false;
  }

  siftDown(index) {
    let element = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();
    if (
      left < size &&
      this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN
    ) {
      element = left;
    }
    if (
      right < size &&
      this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN
    ) {
      element = right;
    }
    if (index !== element) {
      swap(this.heap, index, element);
      this.siftDown(element);
    }
  }

  siftUp(index) {
    let parent = this.getParentIndex(index);
    while (
      index > 0 &&
      this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN
    ) {
      swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }

  extract() {
    if (this.isEmpty()) {
      return undefined;
    }
    if (this.size() === 1) {
      return this.heap.shift();
    }
    const removedValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);
    return removedValue;
  }

  heapify(array) {
    if (array) {
      this.heap = array;
    }
    const maxIndex = Math.floor(this.size() / 2) - 1;
    for (let i = 0; i <= maxIndex; i++) {
      this.siftDown(i);
    }
    return this.heap;
  }

  getAsArray() {
    return this.heap;
  }
}

function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a);
}

/**
 * 最大堆
 */
class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.compareFn = reverseCompare(compareFn);
  }
}
```

## 堆排序算法

可以使用二叉堆数据结构来创建一个非常著名的排序算法：堆排序算法。它包含下面三个步骤：

1. 用数组创建一个最大堆用作源数据。
2. 在创建最大堆后，最大的值会被存储在堆的第一个位置。我们要将它替换为堆的最后一个
   值，将堆的大小减 1。
3. 最后，我们将堆的根节点下移并重复步骤 2 直到堆的大小为 1。
   我们用最大堆得到一个升序排列的数组(从最小到最大)。如果我们想要这个数组按降序排 列，可以用最小堆代替。

下面是堆排序算法的代码：

```js
function heapSort(array, compareFn = defaultCompare) {
  let heapSize = array.length;
  buildMaxHeap(array, compareFn); // 步骤 1
  while (heapSize > 1) {
    swap(array, 0, --heapSize); // 步骤 2
    heapify(array, 0, heapSize, compareFn); // 步骤 3
  }
  return array;
}
```

要构建最大堆，可以使用下面的函数：

```js
function buildMaxHeap(array, compareFn) {
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length, compareFn);
  }
  return array;
}
```

最大堆函数会重新组织数组的顺序。归功于要进行的所有比较，只需要对后半部分数组执行 `heapify`（下移）函数（前半部分会被自动排好序，所以不需要对已经知道排好序的部分执行函数）。

`heapify` 函数和我们创建的 `siftDown` 方法有相同的代码。不同之处是会将堆本身、 堆的大小和要使用的比较函数传入作为参数。这是因为不会直接使用堆数据结构，而是使用它的逻辑来开发 `heapSort` 算法。

下图展示了堆排序算法：

![堆排序算法步骤](/img/heap-sort-step.svg)

## 堆排序的完整代码

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}

function heapify(array, index, heapSize, compareFn) {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  if (left < heapSize && compareFn(array[left], array[index]) > 0) {
    largest = left;
  }
  if (right < heapSize && compareFn(array[right], array[largest]) > 0) {
    largest = right;
  }
  if (largest !== index) {
    swap(array, index, largest);
    heapify(array, largest, heapSize, compareFn);
  }
}

function buildMaxHeap(array, compareFn) {
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length, compareFn);
  }
  return array;
}

function heapSort(array, compareFn = defaultCompare) {
  let heapSize = array.length;
  buildMaxHeap(array, compareFn);
  while (heapSize > 1) {
    swap(array, 0, --heapSize);
    heapify(array, 0, heapSize, compareFn);
  }
  return array;
}
```

:::info
堆排序算法不是一个稳定的排序算法，也就是说如果数组没有排好序，可能会得到不一样的结果。查看其他[排序算法](../algorithms/sorting.md)。
:::
