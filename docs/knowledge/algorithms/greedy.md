---
id: greedy
title: 贪心算法
keywords:
  - JavaScript
  - 算法
  - 贪心算法
---

**贪心算法**（greedy algorithm），又称**贪婪算法**，是一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是最好或最优的算法。比如：在旅行推销员问题中，如果旅行员每次都选择最近的城市，那这就是一种贪心算法。

它遵循一种近似解决问题的技术，期盼通过每个阶段的局部最优选择(当前最好的解)，从而达到全局的最优（全局最优解）。它不像动态规划算法那样计算更大的格局。下面来看看用贪心算法解决动态规划话题中最少硬币找零问题和背包问题。

:::info
其他的贪心算法，比如 [Dijkstra 算法](../data-structure/graph.md#dijkstra-算法)、[Prim 算法](../data-structure/graph.md#prim-算法)和 [Kruskal 算法](../data-structure/graph.md#kruskal-算法)。
:::

## 最少硬币找零问题

我们知道能够使用动态规划解决[最少硬币找零问题](./dynamic-programming.md#最少硬币找零问题)，而最少硬币找零问题也能用贪心算法解决，代码实现也比动态规划简单。大部分情况下的结果是最优的，不过对有些面额而言，结果不会是最优的。

算法思路是：从最大面额的硬币开始，拿尽可能多的这种硬币找零。当 无法再拿更多这种价值的硬币时，开始拿第二大价值的硬币，依次继续。下面来看看算法代码：

```js
function minCoinChange(coins, amount) {
  const change = [];
  let total = 0;
  for (let i = coins.length; i >= 0; i--) {
    const coin = coins[i];
    // 对每个面额（从大到小），把它的值和 total 相加后，total 需要小于 amount
    while (total + coin <= amount) {
      // 将当前面额 coin 添加到结果中
      change.push(coin);
      // 将它和 total 相加
      total += coin;
    }
  }
  return change;
}
```

算法测试：

```js
console.log(minCoinChange([1, 5, 10, 20], 35)); // 输出 [20, 10, 5]
```

![最少硬币找零问题](/img/greedy-min-coin-change.svg)

上图阐释了算法的执行过程，结果和 DP 算法的结果相同

```js
// 当输入数组 [1, 3, 4]
console.log(minCoinChange([1, 3, 4], 6)); // 输出 [4, 1, 1]
```

如果用 `[1, 3, 4]` 面额执行贪心算法，会得到结果 `[4, 1, 1]`。如果用动态规划的解法，会得到最优的结果 `[3, 3]`。

比起动态规划算法而言，贪心算法更简单、更快。然而，它并不总是得到最优答案。但是综合来看，它相对执行时间来说，输出了一个可以接受的解。

## 分数背包问题

求解分数背包问题的算法与[动态规划版本](./dynamic-programming.md#背包问题)稍有不同。在 0-1 背包问题中，只能向背包里装入完整的物品，而在分数背包问题中，可以装入分数的物品。我们用前面用过的例子来比较两者的差异，如下所示。

| 物品 | 重量 | 价值 |
| ---- | ---- | ---- |
| 1    | 2    | 3    |
| 2    | 3    | 4    |
| 3    | 4    | 5    |

在动态规划的例子里，我们考虑背包能够携带的重量只有 5。在这个例子里，我们可以说最佳解决方案是往背包里装入物品 1 和物品 2，总重量为 5，总价值为 7。

如果在分数背包问题中考虑相同的容量，得到的结果是一样的。因此，我们考虑容量为 6 的情况。

在这种情况下，解决方案是装入物品 1 和物品 2，还有 25% 的物品 3。这样，重量为 6 的物品总价值为 8.25。

代码实现算法如下：

```js
function knapSack(capacity, weights, values) {
  const n = values.length;
  let load = 0;
  let val = 0;
  // 迭代物品
  for (let i = 0; i < n && load < capacity; i++) {
    // 如果物品可以完整地装入背包（小于等于背包容量）
    if (weights[i] <= capacity - load) {
      // 就将其价值和重量分别计入背包已装入物品的总价值（val）和总重量（load）
      val += values[i];
      load += weights[i];
      // 输出物品
      // console.log('using item ' + (i + 1) + ' for the solution');
    } else {
      // 如果物品不能完整地装入背包，计算能够装入部分的比例（r)（可以带的分数）
      const r = (capacity - load) / weights[i];
      val += r * values[i];
      load += weights[i];
      // 输出物品及比例
      // console.log('using ratio of ' + r + ' for item ' + (i + 1) + ' for the solution');
    }
  }
  return val;
}
```
