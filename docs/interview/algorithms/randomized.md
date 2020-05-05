---
id: randomized
title: 随机算法
---

搜索算法能够将数组进行排序以及怎样在排序后的数组中搜索元素，还有一种场景是需要将一个数组中的值进行随机排列。现实中的一个常见场景是洗扑克牌。随机数组的一种最有名的算法为 Fisher-Yates 随机。

## Fisher-Yates 随机

它的含义是迭代数组，从最后一位开始并将当前位置和一个随机位置进行交换。这个随机位 置比当前位置小。这样，这个算法可以保证随机过的位置不会再被随机一次(洗扑克牌的次数越 多，随机效果越差)。

下面的代码展示了 Fisher-Yates 随机算法。

```js
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

/**
 * while 实现
 */
function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}
```

下图展现了该算法的操作。

![Fisher-Yates 随机算法](/img/fisher-yates.svg)
