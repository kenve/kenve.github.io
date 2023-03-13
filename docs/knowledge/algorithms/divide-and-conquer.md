---
id: divide-and-conquer
title: 分治算法
keywords:
  - JavaScript
  - 算法
  - 分治
  - 分治算法
---

分而治之是一种基于多分支递归的算法设计范例。分而治之算法的工作原理是将问题递归分解为两个或多个相同或相关类型的子问题，直到这些子问题变得足够简单以至于可以直接解决。然后将子问题的解决方案组合起来，以解决原始问题。

分而治之算法可以分成三个部分：

1. 分解原问题为多个子问题（原问题的多个小实例）。
2. 解决子问题，用返回解决子问题的方式的递归算法。递归算法的基本情形可以用来解决子问题。
3. 组合这些子问题的解决方式，得到原问题的解。

下面看看，如何将二分搜索用分而治之的方式实现

## 二分搜索

在[搜索算法](./search.md#二分搜索)中使用了迭代的方式实现二分搜索。同样可以用分而治之的方式实现这个算法，逻辑如下：

- **分解**：计算 mid 并搜索数组较小或较大的一半。
- **解决**：在较小或较大的一半中搜索值。
- **合并**：这步不需要，因为我们直接返回了索引值。

分而治之版本的二分搜索算法如下。

```js
// 比较常量
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};
// 找不到值返回
const DOES_NOT_EXIST = -1;

/**
 * 默认的比较函数
 */
function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
// 随意一种排序算法
import { quickSort } from 'xxx';

/**
 * binarySearchRecursive 是分而治之 算法
 */
function binarySearchRecursive(array, value, low, high, compareFn = defaultCompare) {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = array[mid];
    // 在计算 mid 元素的索引值后，确定待搜索的值比 mid 大还是小
    if (compareFn(element, value) === Compare.LESS_THAN) {
      // 如果小调用 binarySearchRecursive 函数，改变 low 参数
      return binarySearchRecursive(array, value, mid + 1, high, compareFn);
    }
    if (compareFn(element, value) === Compare.BIGGER_THAN) {
      // 如果大，调用 binarySearchRecursive 函数，改变 high 参数
      return binarySearchRecursive(array, value, low, mid - 1, compareFn);
    }
    // 相等，找到了这个值
    return mid;
  }
  //   low 比 high 要大，表示算法没有找到这个值
  return DOES_NOT_EXIST;
}

/**
 * 二分搜索
 */
function binarySearch(array, value, compareFn = defaultCompare) {
  // 排序 array.sort();
  const sortedArray = quickSort(array);
  const low = 0;
  const high = sortedArray.length - 1;
  // 将 low 参数以 0 传递，将 high 参数以 sortedArray.length - 1 传递来在已排序的数组中进行搜索
  return binarySearchRecursive(array, value, low, high, compareFn);
}
```

下图展示了算法的过程：

![二分搜索动态规划](/img/binary-search-recursive.svg)
