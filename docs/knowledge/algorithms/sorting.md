---
id: sorting
title: 排序算法
keywords:
  - JavaScript
  - 算法
  - 排序算法
---

![排序算法](/img/sorting.png)

下面的**非分布式排序算法**都会接收一个待排序的数组（`array`）作为参数以及一个比较函数（`compareFn`）。为了使测试更容易理解，我们会在例子中使用包含数字的数组。不过如果需要对包含复杂对象的数组进行排序（对包含 people 对象的数组按 age 属性排序），算法也可以奏效。

通用的工具函数定义：

```js
// 大小常量
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};

/**
 * 默认比较函数，比较入参 a 和 b 的大小
 */
function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

/**
 * 交换数组两个位置的值，交换 array 中 a，b 位置的值
 */
function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}
```

:::info
[分布式排序算法](https://baike.baidu.com/item/%E5%88%86%E5%B8%83%E5%BC%8F%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95)
:::

## 冒泡排序（Bubble sort）

**冒泡排序**比较所有相邻的两个项，如果第一个比第二个大，则交换它们。元素项向上移动至正确的顺序，就好像气泡升至表面一样，冒泡排序因此得名。

```js
function bubbleSort(array, compareFn = defaultCompare) {
  // 声明 length 的变量，存储数组的长度
  const { length } = array;
  // 外循环，从数组的第一位迭代至最后一位，控制排序轮数（轮数为数组长度）
  for (let i = 0; i < length; i++) {
    // 内循环将迭代至倒数第二位
    // 内循环减去外循环中已跑过的轮数，可以避免内循环中所有不必要的比较
    for (let j = 0; j < length - 1 - i; j++) {
      // 内循环实际上进行当前项和下一项的比较
      // 当前项是否大于后一下标的项 array[j] > array[j + 1]
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        // 当前项比下一项大，则交换它们
        // [array[j], array[j + 1]] = [array[j + 1], array[j]]
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}
```

下面的示意图展示了冒泡排序的工作过程：

![冒泡排序](/img/bubble-sort.svg)

![冒泡排序动画](/img/bubble-sort-animation.gif)

## 选择排序（Selection sort）

**选择排序**算法是一种原址比较排序算法。选择排序大致的思路是找到数据结构中的最小值并将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推。

```js
const selectionSort = (array, compareFn = defaultCompare) => {
  // 数组长度
  const { length } = array;
  // 最小值下标
  let indexMin;
  // 外循环迭代数组，并控制迭代轮次（数组的第 n 个值为下一个最小值）
  for (let i = 0; i < length - 1; i++) {
    // 假设本迭代轮次的第一个值为数组最小值
    indexMin = i;
    // 然后，从当前 i 的值开始至数组结束
    // 当内循环结束，将得出数组第 n 小的值
    for (let j = i; j < length; j++) {
      // 比较是否位置 j 的值比当前最小值小
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        // 如果是，则改变最小值至新最小值
        indexMin = j;
      }
    }
    // 如果该最小值和原最小值不同，则交换其值
    if (i !== indexMin) {
      swap(array, i, indexMin);
    }
  }
  return array;
};
```

下面的示意图展示了选择排序算法：

![选择排序](/img/selection-sort.svg)

数组底部的箭头指示出当前迭代轮寻找最小值的数组范围（内循环），示意图中的每一步则表示外循环。

![选择排序动画](/img/selection-sort-animation.gif)

## 插入排序（Insertion sort）

**插入排序**每次排一个数组项，以此方式构建最后的排序数组。假定第一项已经排序了。接着，它和第二项进行比较——第二项是应该待在原位还是插到第一项之前呢？这样，头两项就已正确排序，接着和第三项比较(它是该插入到第一、第二还是第三的位置呢)，以此类推。

```js
const insertionSort = (array, compareFn = defaultCompare) => {
  const { length } = array;
  // 临时存储
  let temp;
  // 迭代数组来给第 i 项找到正确的位置
  // 注意：算法是从第二个位置(索引 1)而不是 0 位置开始的（认为第一项已排序了）
  for (let i = 1; i < length; i++) {
    // 用 i 的值来初始化一个辅助变量
    let j = i;
    // 并也将其值存储在一个临时变量中，方便之后将其插入到正确的位置上
    temp = array[i];
    // 下一步是要找到正确的位置来插入项目
    // 只要变量 j 比 0 大（因为数组的第一个索引是 0——没有负值的索引）
    // 并且数组中前面的值比待比较的值大
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      // 就把这个值移到当前位置上并减小 j
      array[j] = array[j - 1];
      j--;
    }
    // 将该值插入到正确的位置上
    array[j] = temp;
  }
  return array;
};
```

![插入排序](/img/insertion-sort.svg)

举个例子，假定待排序数组是 `[3, 5, 1, 4, 2]`。这些值将被插入排序算法按照下面的步骤进行排序：

1. 3 已被排序，所以我们从数组第二个值 5 开始。3 比 5 小，所以 5 待在原位(数组的第二位)。3 和 5 排序完毕。
2. 下一个待排序和插到正确位置上的值是 1(目前在数组的第三位)。5 比 1 大，所以 5 被 移至第三位去了。我们得分析 1 是否应该被插入到第二位——1 比 3 大吗?不，所以 3 被移到第 二位去了。接着，我们得证明 1 应该插入到数组的第一位上。因为 0 是第一个位置且没有负数位， 所以 1 必须被插入第一位。1、3、5 三个数字已经排序。
3. 然后看下一个值:4。4 应该在当前位置(索引 3)还是要移动到索引较低的位置上呢? 4 比 5 小，所以 5 移动到索引 3 位置上去。那么应该把 4 插到索引 2 的位置上去吗?4 比 3 大，所 以把 4 插入数组的位置 3 上。
4. 下一个待插入的数字是 2（数组的位置 4）。5 比 2 大，所以 5 移动至索引 4。4 比 2 大， 所以 4 也得移动(位置 3)。3 也比 2 大，所以 3 还得移动。1 比 2 小，所以 2 插入到数组的第二 位置上。至此，数组已排序完成。

![插入排序动画](/img/insertion-sort-animation.gif)

排序小型数组时，此算法比选择排序和冒泡排序性能要好。

## 归并排序（Merge sort）

归并排序是第一个可以实际使用的排序算法。前三个排序算法性能不好，但归并排序性能不错，其复杂度为 _O(nlog(n))_。

:::info
JavaScript 的 Array 类定义了一个 sort 函数（Array.prototype.sort）用以
排序 JavaScript 数组。ECMAScript 没有定义用哪个排序算法，所以浏览器厂商可以自行去实现算法。例如：Mozilla Firefox 使用 归并排序作为 Array.prototype.sort 的实现，而 Chrome（V8 引擎）使用了一个快速排序的变体。
:::

**归并排序**是一种分而治之算法。其思想是将原始数组切分成较小的数组，直到每个小数组只 有一个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。

由于是分治法，归并排序也是递归的。要将算法分为两个函数：第一个负责将一个大数组分为多个小数组并调用用来排序的辅助函数。

```js
/**
 * 负责合并和排序小数组来产生大数组，直到回到原始数组并已排序完成
 * 接收两个数组作为参数，并将它们归并至一个大数组
 */
function merge(left, right, compareFn) {
  // 声明归并过程要创建的新数组以及用来迭代两个数组（left 和 right 数组）所需的两个变量
  let i = 0;
  let j = 0;
  const result = [];
  // 迭代两个数组的过程中，比较来自 left 数组的项是否比来 自 right 数组的项小
  while (i < left.length && j < right.length) {
    // 如果是，将该项从 left 数组添加至归并结果数组，并递增用于迭代数 组的控制变量
    // 否则，从 right 数组添加项并递增用于迭代数组的控制变量
    result.push(compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]);
  }
  // 将 left 数组所有剩余的项添加到归并数组中，right 数组也是一样
  // 最后，将归并数组作为结果返回
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

/**
 * 归并排序：将一个大数组转化为多个小数组直到其中只有一个项
 */
function mergeSort(array, compareFn = defaultCompare) {
  // 判断数组的长度是否为 1，为 1 时停止递归
  if (array.length > 1) {
    // 如果数组长度比 1 大，那么得将其分成小数组
    const { length } = array;
    // 首先得找到数组的中间位
    const middle = Math.floor(length / 2);
    // 找到后将数组分成两个小数组，分别叫作 left 和 right
    // 将会对自身调用 mergeSort 函数直到 left 数组和 right 数组的大小小于等于 1
    // left 数组由 索引 0 至中间索引的元素组成
    const left = mergeSort(array.slice(0, middle), compareFn);
    // 而 right 数组由中间索引至原始数组最后一个位置的元素组成
    const right = mergeSort(array.slice(middle, length), compareFn);
    // 调用 merge 函数，负责合并和排序小数组来产生大数组，直到回到原始数组并已排序完成
    array = merge(left, right, compareFn);
  }
  // 返回数组
  return array;
}
```

下图是函数具体的执行过程：

![归并排序](/img/merge-sort.svg)

算法首先将原始数组分割直至只有一个元素的子数组，然后开始归并。归并过程也会完成排序，直至原始数组完全合并并完成排序。

![归并排序动画](/img/merge-sort-animation.gif)

## 快速排序（Quick sort）

**快速排序**也许是最常用的排序算法了。它的复杂度为 _O(nlog(n))_，且性能通常比其他复杂度 为 _O(nlog(n))_ 的排序算法要好。和归并排序一样，快速排序也使用分而治之的方法，将原始数组分为较小的数组（但它没有像归并排序那样将它们分割开）。

快速排序比上面的其他排序算法要复杂一些。步骤如下：

1. 首先，从数组中选择一个值作为**主元**（pivot），也就是数组中间的那个值；
2. 创建两个指针(引用)，左边一个指向数组第一个值，右边一个指向数组最后一个值。移动左指针直到找到一个比主元大的值，接着，移动右指针直到找到一个比主元小的值，然后交换它们，重复这个过程，直到左指针超过了右指针。这个过程将使得比主元小的值都排在主元 之前，而比主元大的值都排在主元之后。这一步叫作**划分**（partition）操作；
3. 接着，算法对划分后的小数组（较主元小的值组成的子数组，以及较主元大的值组成的子数组）重复之前的两个步骤，直至数组已完全排序。

快速排序的实现：

```js
/**
 * 划分过程
 */
function partition(array, left, right, compareFn) {
  // 选择中间值作为主元
  const pivot = array[Math.floor((right + left) / 2)];
  // 初始化两个指针：left（低），初始化为数组第一个元素;
  let i = left;
  // right（高），初始化为数组最后一个元素
  let j = right;
  // 只要 left 和 right 指针没有相互交错，就执行划分操作
  while (i <= j) {
    // 首先，移动 left 指针直到找到一个比主元大的元素
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
      i++;
    }
    // 对 right 指针，同样移动 right 指针直到我们找到一个比主元小的元素
    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
      j--;
    }
    // 当左指针指向的元素比主元大且右指针指向的元素比主元小，并且此时左指针索引没有右指针索引大时
    // 意思是左项比右项大(值比较)
    if (i <= j) {
      // 交换左右项，然后移动两个指针
      i++;
      j--;
    }
  }
  // 在划分操作结束后，返回左指针的索引，用来处创建子数组
  return i;
}

function quick(array, left, right, compareFn) {
  // 首先声明 index，该变量能帮助我们将子数组分离为较小值数组和较大值数组
  let index;
  // 如果数组的长度比 1 大（因为只有一个元素的数组必然是已排序了的）
  if (array.length > 1) {
    // 将对给定子数组执行 partition 操作（第一次调用是针对整个数组）以得到 index
    index = partition(array, left, right, compareFn);
    // 如果子数组存在较小值的元素
    if (left < index - 1) {
      // 则对该数组重复这个过程
      quick(array, left, index - 1, compareFn); // 行 1
    }
    // 如果有子数组存在较大值
    if (index < right) {
      // 将重复快速排序过程
      quick(array, index, right, compareFn); // 行 2
    }
  }
  return array;
}

/**
 * 主方法来调用递归函数
 */
function quickSort(array, compareFn = defaultCompare) {
  // 传递待排序数组，以及索引 0 及 其最末的位置（因为我们要排整个数组，而不是一个子数组）作为参数
  return quick(array, 0, array.length - 1, compareFn);
}
```

快速排序的实际例子：

![快速排序](/img/quick-sort-1.svg)

给定数组 `[3, 5, 1, 6, 4, 7, 2]`，前面的示意图展示了划分操作的第一次执行。
下面的示意图展示了对有较小值的子数组执行的划分操作(注意 7 和 6 不包含在子数组之内)。

![快速排序](/img/quick-sort-2.svg)

接着，我们继续创建子数组，如下图所示，但是这次操作是针对上图中有较大值的子数组（有 1 的那个较小子数组不用再划分了，因为它仅含有一个值）。

![快速排序](/img/quick-sort-3.svg)

对子数组 `[2, 3, 5, 4]` 中的较小子数组 `[2, 3]` 继续进行划分（算法代码中的行 1）。

![快速排序](/img/quick-sort-4.svg)

然后子数组 `[2, 3, 5, 4]` 中的较大子数组 `[5, 4]` 也继续进行划分(算法中的行 2)，示意图如下。

![快速排序](/img/quick-sort-5.svg)

最终，较大子数组 `[6, 7]` 也会进行划分操作，快速排序算法的操作执行完成。

## 计数排序（Counting sort）

**计数排序**是一个分布式排序。分布式排序使用已组织好的辅助数据结构（称为桶），然后进行合并，得到排好序的数组。计数排序使用一个用来存储每个元素在原始数组中出现次数的临时数组。在所有元素都计数完成后，临时数组已排好序并可迭代以构建排序后的结果数组。

它是用来排序整数的优秀算法（它是一个整数排序算法），时间复杂度为 _O(n+k)_，其中 _k_ 是 临时计数数组的大小；但是，它确实需要更多的内存来存放临时数组。

计数排序算法代码：

```js
/**
 * 查找数组中的最大值
 */
function findMaxValue(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function countingSort(array) {
  // 如果待排序的数组为空或只有一个元素，则不需要运行排序算法
  if (array.length < 2) {
    return array;
  }
  // 需要找到数组中的最大值，要找到数组中的最大值，只需要迭代并找到值最大的一项即可
  const maxValue = findMaxValue(array); // {2}
  // 对于计数排序算法，需要创建计数数组，从索引 0 开始直到最大值索引 value + 1
  const counts = new Array(maxValue + 1); // {3}
  array.forEach((element) => {
    if (!counts[element]) {
      // 为了确保递增操作成功
      // 如果 counts 数组中用来计数某个元素的位置一开始没有用 0 初始化的话，将其赋值为 0
      counts[element] = 0;
    }
    // 迭代数组中的每个位置并在 counts 数组中增加元素计数值
    counts[element]++;
  });
  let sortedIndex = 0;
  // 所有元素都计数后，需要迭代 counts 数组并构建排序后的结果数组
  counts.forEach((count, i) => {
    while (count > 0) {
      // 将值（i）加入结果数组
      // 由于可能有多个元素有相同的值，要将元素按照在原始数组中的出现次数进行相加
      // 因此，还需要一个辅助索引（sortedIndex）帮助我们将值赋值到结果数组中的正确位置
      array[sortedIndex++] = i;
      // 减少计数值直到它的值为零
      count--;
    }
  });
  return array;
}
```

计数排序的实际操作过程：

![计数排序](/img/counting-sort.svg)

## 桶排序（Bucket sort）

**桶排序**（也被称为箱排序）也是分布式排序算法，它将元素分为不同的桶(较小的数组)， 再使用一个简单的排序算法，例如插入排序(用来排序小数组的不错的算法)，来对每个桶进行 排序。然后，它将所有的桶合并为结果数组。

桶排序算法需要指定需要多少桶（bucketSize）来排序各个元素，默认情况下，使用 5 个桶桶排序在所有元素平分到各个桶中时的表现最好。如果元素非常稀疏，则使用更 多的桶会更好。如果元素非常密集，则使用较少的桶会更好。因此，允许 bucketSize 以参数形式传递。

```js
import { insertionSort } from './insertion-sort';

/**
 * 创建桶
 */
function createBuckets(array, bucketSize) {
  let minValue = array[0];
  let maxValue = array[0];
  // 迭代原数组并找到最大值和最小值
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  // 计算每个桶中需要分布的元素个数
  // 公式为：包含计算数组最大值和最小值的差值并与桶的大小进行除法计算
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = [];
  // 计算完 bucketCount 后，需要初始化每个桶
  for (let i = 0; i < bucketCount; i++) {
    // buckets 数据结构是一个矩阵（多维数组）
    // buckets 中的每个位置包含了另一个数组
    buckets[i] = [];
  }
  // 将元素分布到桶中
  for (let i = 0; i < array.length; i++) {
    // 迭代数组中的每个元素，计算要将元素放到哪个桶中，并将元素插入正确的桶中
    buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
  }
  return buckets;
}

/**
 * 将每个桶进行排序
 */
function sortBuckets(buckets) {
  // 创建一个用作结果数组的新数组，原数组不会被修改，返回一个新的数组
  const sortedArray = [];
  // 迭代每个可迭代的桶并应用插入排序
  // 根据场景，也可以应用其他的排序算法，例如：快速排序
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      insertionSort(buckets[i]);
      // 将排好序的桶中的所有元素加入结果数组中
      sortedArray.push(...buckets[i]);
    }
  }
  return sortedArray;
}
/**
 * 桶排序算法
 * 需要指定需要多少桶（bucketSize）来排序各个元素，默认情况下，使用 5 个桶
 */
function bucketSort(array, bucketSize = 5) {
  if (array.length < 2) {
    return array;
  }
  // 将算法分为两个部分：
  // 第一个用于创建桶并将元素分布到不同的桶中
  const buckets = createBuckets(array, bucketSize);
  // 第二个包含对每个桶执行插入排序算法和将所有桶合并为排序后的结果数组
  return sortBuckets(buckets);
}
```

桶排序算法的过程：

![桶排序](/img/bucket-sort.svg)

## 基数排序（Radix sort）

**基数排序**也是一个分布式排序算法，它根据数字的**有效位**或基数（这也是它为什么叫基数排序）将整数分布到桶中。基数是基于数组中值的记数制的。

比如，对于十进制数，使用的基数是 10。因此，算法将会使用 10 个桶用来分布元素并且首
先基于个位数字进行排序，然后基于十位数字，然后基于百位数字，以此类推。

下面的代码展示了基数排序算法：

```js
/**
 * 查找数组最大值
 */
function findMaxValue(array, compareFn = defaultCompare) {
  if (array && array.length > 0) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (compareFn(max, array[i]) === Compare.LESS_THAN) {
        max = array[i];
      }
    }
    return max;
  }
  return undefined;
}

/**
 * 查找数组最小值
 */
function findMinValue(array, compareFn = defaultCompare) {
  if (array && array.length > 0) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
      if (compareFn(min, array[i]) === Compare.BIGGER_THAN) {
        min = array[i];
      }
    }
    return min;
  }
  return undefined;
}

// 获取有效位
const getBucketIndex = (value, minValue, significantDigit, radixBase) =>
  Math.floor(((value - minValue) / significantDigit) % radixBase);

/**
 * 基于有效位(基数)排序的代码
 */
const countingSortForRadix = (array, radixBase, significantDigit, minValue) => {
  let bucketsIndex;
  const buckets = [];
  const aux = [];
  // 基于基数初始化桶，由于排序的是十进制数，那么需要 10 个桶
  for (let i = 0; i < radixBase; i++) {
    buckets[i] = 0;
  }
  // 会基于数组中数的有效位进行计数排序
  for (let i = 0; i < array.length; i++) {
    bucketsIndex = getBucketIndex(array[i], minValue, significantDigit, radixBase);
    buckets[bucketsIndex]++;
  }
  // 由于我们进行的是计数排序，还需要计算累积结果来得到正确的计数值
  for (let i = 1; i < radixBase; i++) {
    buckets[i] += buckets[i - 1];
  }
  // 在计数完成后，要开始将值移回原始数组中
  for (let i = array.length - 1; i >= 0; i--) {
    // 对原始数组中的每个值，会再次获取它的有效位
    bucketsIndex = getBucketIndex(array[i], minValue, significantDigit, radixBase);
    // 并将它的值移动到 aux 数组中（从 buckets 数组中减去它的计数值）
    aux[--buckets[bucketsIndex]] = array[i];
  }
  // 可选，将 aux 数组中的每个值转移到原始数组中
  // 除了返回 array 之外，还可以直接返回 aux 数组而不需要复制它的值
  for (let i = 0; i < array.length; i++) {
    array[i] = aux[i];
  }
  return array;
};

function radixSort(array, radixBase = 10) {
  if (array.length < 2) {
    return array;
  }
  const minValue = findMinValue(array);
  const maxValue = findMaxValue(array);
  // 从 1 开始对每个有效数字进行计数排序
  let significantDigit = 1;
  // 如果数组中包含的值都在 1~9，循环只会执行一次
  // 如果值都小于 99，则循环会 执行第二次，以此类推
  // 继续这个过程直到没有待排序的有效位
  while ((maxValue - minValue) / significantDigit >= 1) {
    // 首先只会基于最后一位有效位对数字进行排序
    array = countingSortForRadix(array, radixBase, significantDigit, minValue);
    // 在下次迭代时，会基于第二个有效位进行排序（十位数字），然后是第三个有效位（百位数字），以此类推
    significantDigit *= radixBase;
  }
  return array;
}
```

## 堆排序（Heap sort）

访问[二叉堆中的堆排序](../data-structure/binary-heap.md#堆排序算法)

## 其他

:::tip
更多可[参考](https://github.com/damonare/Sorts)、[维基百科](https://zh.wikipedia.org/wiki/%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95) 和 [百度百科](https://baike.baidu.com/item/%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95)
:::
