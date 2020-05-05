---
id: search
title: 搜索算法
---

## 顺序搜索

**顺序**或**线性搜索**是最基本的搜索算法。它的机制是，将每一个数据结构中的元素和我们要找的元素做比较。顺序搜索是最低效的一种搜索算法。

以下是其实现：

```js
const DOES_NOT_EXIST = -1;

function sequentialSearch(array, value, equalsFn = defaultEquals) {
  // 顺序搜索迭代整个数组
  for (let i = 0; i < array.length; i++) {
    // 并将每个数组元素和搜索项做比较
    if (equalsFn(value, array[i])) {
      // 如果搜索到了，算法将用返回值来标示搜索成功
      return i;
    }
  }
  // 如果没有找到该项，则返回 -1
  return DOES_NOT_EXIST;
}
```

假定有数组 `[5, 4, 3, 2, 1]` 和待搜索值 `3`，下图展示了顺序搜索的示意图：

![顺序搜索](/img/sequential-search.svg)

## 二分搜索

**二分搜索**算法的原理和猜数字游戏类似，就是那个有人说“我正想着一个 1~100 的数”的
游戏。我们每回应一个数，那个人就会说这个数是高了、低了还是对了。这个算法要求被搜索的数据结构已排序。以下是该算法遵循的步骤。

1. 选择数组的中间值。
2. 如果选中值是待搜索值，那么算法执行完毕（值找到了）。
3. 如果待搜索值比选中值要小，则返回步骤 1 并在选中值左边的子数组中寻找（较小）。
4. 如果待搜索值比选中值要大，则返回步骤 1 并在选种值右边的子数组中寻找（较大）。

以下是其实现。

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};

const DOES_NOT_EXIST = -1;

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
// 开始前需要先将数组排序，导入快排算法
import { quickSort } from './quicksort';

/**
 * 二分搜索
 */
function binarySearch(array, value, compareFn = defaultCompare) {
  // 数组排序
  const sortedArray = quickSort(array);
  // 设置 low 和 high 指针（它们是边界）
  let low = 0;
  let high = sortedArray.length - 1;
  // 当 low 比 high 小时
  while (low <= high) {
    // 计算得到中间项索引并取得中间项的值
    const mid = Math.floor((low + high) / 2);
    const element = sortedArray[mid];
    // 比较选中项的值和搜索值
    // 如果小了，则选择数组低半边并重新开始
    if (compareFn(element, value) === Compare.LESS_THAN) {
      low = mid + 1;
    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
      // 如果选中项的值比搜索值大了，则选择数组高半边并重新开始
      high = mid - 1;
    } else {
      // 若两者都是不是，则意味着选中项的值和搜索值相等，因此直接返回该索引
      return mid;
    }
  }
  // 如果 low 比 high 大，则意味着该待搜索值不存在并返回 -1
  return DOES_NOT_EXIST;
}
```

给定下图所示数组，让我们试试搜索 2。这些是算法将会执行的步骤。

![二分搜索](/img/binary-search.svg)

上面的迭代的实现，下面是递归的实现：

```js
function binarySearchRecursive(array, value, low, high, compareFn = defaultCompare) {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = array[mid];
    if (compareFn(element, value) === Compare.LESS_THAN) {
      return binarySearchRecursive(array, value, mid + 1, high, compareFn);
    }
    if (compareFn(element, value) === Compare.BIGGER_THAN) {
      return binarySearchRecursive(array, value, low, mid - 1, compareFn);
    }
    return mid;
  }
  return DOES_NOT_EXIST;
}

function binarySearch(array, value, compareFn = defaultCompare) {
  const sortedArray = quickSort(array);
  const low = 0;
  const high = sortedArray.length - 1;
  return binarySearchRecursive(array, value, low, high, compareFn);
}
```

## 内插搜索

**内插搜索**是改良版的二分搜索。二分搜索总是检查 mid 位置上的值，而内插搜索可能会根据要搜索的值检查数组中的不同地方。这个算法要求被搜索的数据结构已排序。以下是该算法遵循的步骤:

1. 使用 position 公式选中一个值;
2. 如果这个值是待搜索值，那么算法执行完毕（值找到了）;
3. 如果待搜索值比选中值要小，则返回步骤 1 并在选中值左边的子数组中寻找（较小）;
4. 如果待搜索值比选中值要大，则返回步骤 1 并在选种值右边的子数组中寻找（较大）。

以下是其实现。

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};
const DOES_NOT_EXIST = -1;

function lesserEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

function biggerEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function defaultEquals(a, b) {
  return a === b;
}

function defaultDiff(a, b) {
  return Number(a) - Number(b);
}

/**
 * 内插搜索
 */
function interpolationSearch(
  array,
  value,
  compareFn = defaultCompare,
  equalsFn = defaultEquals,
  diffFn = defaultDiff,
) {
  const { length } = array;
  let low = 0;
  let high = length - 1;
  let position = -1;
  let delta = -1;
  while (
    low <= high &&
    biggerEquals(value, array[low], compareFn) &&
    lesserEquals(value, array[high], compareFn)
  ) {
    // 首先要做的是计算要比较值的位置 position
    // 如果查找的值更接 近 array[high] 则查找 position 位置旁更大的值
    // 如果查找的值更接近 array[low]则查找 position 位置旁更小的值
    // 这个算法在数组中的值都是均匀分布时性能最好(delta 会非常小)
    delta = diffFn(value, array[low]) / diffFn(array[high], array[low]);
    position = low + Math.floor((high - low) * delta);
    // 如果待搜索值找到了，则返回它的索引值
    if (equalsFn(array[position], value)) {
      return position;
    }
    // 如果待搜索值小于当前位置的值，使用左边或右边的子数组重复这段逻辑
    if (compareFn(array[position], value) === Compare.LESS_THAN) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }
  return DOES_NOT_EXIST;
}
```

下图展示了算法的过程——数组是均匀分布的（数字差值之间的差别非常小）。

![内插搜索](/img/interpolation-search.svg)
