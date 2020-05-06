---
id: dp
title: 动态规划
---

**动态规划**（dynamic programming，DP）是一种将复杂问题分解成更小的子问题来解决的优化技术。

:::info
注意，动态规划和分而治之是不同的方法。分而治之方法是把问题分解成相互独立的子问题，然后组合它们的答案，而动态规划则是将问题分解成相互依赖的子问题。
:::

动态规划的一个例子是[斐波那契问题](./recursion.md#斐波那契数列)，可以将斐波那契问题分解成了一些小问题。

用动态规划解决问题时，要遵循三个重要步骤：

1. 定义子问题；
2. 实现要反复执行来解决的子问题的部分（参考递归）；
3. 识别并求解出基线条件。

能用动态规划解决的一些著名问题如下：

- **背包问题**：给出一组项，各自有值和容量，目标是找出总值最大的项的集合。这个问题的限制是，总容量必须小于等于“背包”的容量。
- **最长公共子序列**：找出一组序列的最长公共子序列（可由另一序列删除元素但不改变余下元素的顺序而得到）。
- **矩阵链相乘**：给出一系列矩阵，目标是找到这些矩阵相乘的最高效办法（计算次数尽可能少）。相乘运算不会进行，解决方案是找到这些矩阵各自相乘的顺序。
- **硬币找零**：给出面额为 d1, ..., dn 的一定数量的硬币和要找零的钱数，找出有多少种找零 的方法。
- **图的全源最短路径**：对所有顶点对(u, v)，找出从顶点 u 到顶点 v 的最短路径。如： [Floyd-Warshall 算法](../data-structure/graph.md#floyd-warshall-算法)。

## 最少硬币找零问题

**最少硬币找零问题**是**硬币找零问题**的一个变种。硬币找零问题是给出要找零的钱数，以及可用的硬币面额 d1, ..., dn 及其数量，找出有多少种找零方法。最少硬币找零问题是给出要找零的钱数，以及可用的硬币面额 d1, ..., dn 及其数量，找到所需的最少的硬币个数。

例如：有以下面额（硬币）：d1 = 1，d2 = 5，d3 = 10，d4 = 20。如果要找 35 块的零钱，我们可以用 1 个 20 块、1 个 10 块和 1 个 5 块。

最少硬币找零的解决方案是找到 n 所需的最小硬币数。但要做到这一点，首先得找到对每个 x < n 的解。然后，我们可以基于更小的值的解来求解。

下面来看看算法：

```js
/**
 * 参数接收 coins 参数，代表问题中的面额；可以随心所欲地传递任何面额
 */
function minCoinChange(coins, amount) {
  // 为了更加高效 且不重复计算值，使用了 cache（这个技巧称为记忆化）
  const cache = [];
  // 使用递归函数 makeChange，来解决问题
  const makeChange = (value) => {
    // 首先，若 amount 不为正(< 0)，就返回空数组
    if (!value) {
      return [];
    }
    // 接着，检查 cache 缓存。若结果已缓存，则直接返回结果；否则，继续执行算法
    if (cache[value]) {
      return cache[value];
    }
    let min = [];
    let newMin;
    let newAmount;
    // 基于 coins 参数（面额）解决问题
    for (let i = 0; i < coins.length; i++) {
      // 因此，对每个面额都计算 newAmount 的值，它的值会一直减小，直到能找零的最小钱数（本算法对所有的 x < amount 都会计算 makeChange 结果）
      const coin = coins[i];
      newAmount = value - coin;
      // 若 newAmount 是合理的值（正值），计算它的找零结果
      if (newAmount >= 0) {
        newMin = makeChange(newAmount);
      }
      // 最后，判断 newAmount 是否有效，minValue（最少硬币数）是否是最优解，与此同时 minValue 和 newAmount 是否是合理的值
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        // 若判断都成立，意味着有一个比之前更优的答案
        min = [coin].concat(newMin);
        // console.log('new Min ' + min + ' for ' + value);
      }
    }
    // 最后，返回最终结果
    return (cache[value] = min);
  };
  // 调用 makeChange 函数，amount 作为参数传入
  // makeChange 作为内部函数，能访问到 cache 变量
  return makeChange(amount);
}
```

查看 cache 变量，会发现它存储了从 1 到 35 的所有结果，测试算法：

```js
console.log(minCoinChange([1, 5, 10, 20], 35)); // 输出 [5, 10, 20]
console.log(minCoinChange([1, 5, 10, 20], 10)); // 输出 [10]
```

## 背包问题

**背包问题**是一个组合优化问题。它可以描述如下:给定一个固定大小、能够携重量 W 的背包，以及一组有价值和重量的物品，找出一个最佳解决方案，使得装入背包的物品总重量不超过 W，且总价值最大。

下面是一个例子：

| 物品 | 重量 | 价值 |
| ---- | ---- | ---- |
| 1    | 2    | 3    |
| 2    | 3    | 4    |
| 3    | 4    | 5    |

考虑背包能够携带的重量只有 5。对于这个例子，最佳解决方案是往背包里装入物品 1 和物品 2。这样，总重量为 5，总价值为 7。

背包算法：

```js
function knapSack(capacity, weights, values, n) {
  const kS = [];
  // 首先，初始化将用于寻找解决方案的矩阵（二维数组），矩阵为 ks[n+1][capacity+1]
  for (let i = 0; i <= n; i++) {
    kS[i] = [];
  }
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      // 然后，忽略矩阵的第一列和第一行，只处理索引不为 0 的列和行
      // 并且要迭代数组中每个可用的项
      if (i === 0 || w === 0) {
        kS[i][w] = 0;
      } else if (weights[i - 1] <= w) {
        // 物品 i 的重量必须小于约束（capacity）才有可能成为解决方案的一部分
        const a = values[i - 1] + kS[i - 1][w - weights[i - 1]];
        const b = kS[i - 1][w];
        // 当找到可以构成解决方案的物品时，选择价值最大的那个
        kS[i][w] = a > b ? a : b; // max(a, b)
        console.log(a + ' can be part of the solution');
      } else {
        // 总重量超出背包能够携带的重量时，用之前的值就可以了
        kS[i][w] = kS[i - 1][w];
      }
    }
    console.log(kS[i].join());
  }
  // 额外算法：找出构成解决方案的物品
  findValues(n, capacity, kS);
  // 最后，问题的解决方案就在这个二维表格右下角的最后一个格子里
  return kS[n][capacity];
}
```

使用开始的例子来测试算法：

```js
const values = [3, 4, 5],
  weights = [2, 3, 4],
  capacity = 5,
  n = values.length;

console.log(knapSack(capacity, weights, values, n)); // 输出 7
```

下图举例说明了例子中 kS 矩阵的构造：

![kS 矩阵的构造](/img/dp-knap-sack.svg)

请注意，这个算法只输出背包携带物品价值的最大值，而不列出实际的物品。可以增加附加函数 `findValues` 来找出构成解决方案的物品：

```js
/**
 * 查找构成解决方案的物品
 */
function findValues(n, capacity, kS) {
  let i = n;
  let k = capacity;
  console.log('构成解的物品:');
  while (i > 0 && k > 0) {
    if (kS[i][k] !== kS[i - 1][k]) {
      console.log(`物品 ${i} 可以是解的一部分 w,v: ${weights[i - 1]}, ${values[i - 1]}`);
      i--;
      k -= kS[i][k];
    } else {
      i--;
    }
  }
}
```

可以在 knapSack 函数的中调用这个函数。执行完整的算法会得到如下输出：

```js
console.log('总价值:', knapSack(capacity, weights, values, n));
/*
构成解的物品:
物品 2 可以是解的一部分 w,v: 3,4
物品 1 可以是解的一部分 w,v: 2,3
总价值: 7
*/
```

背包问题递归版本：

```js
function knapSack(capacity, weights, values, n) {
  if (n === 0 || capacity === 0) {
    return 0;
  }
  if (weights[n - 1] > capacity) {
    return knapSack(capacity, weights, values, n - 1);
  }
  const a = values[n - 1] + knapSack(capacity - weights[n - 1], weights, values, n - 1);
  const b = knapSack(capacity, weights, values, n - 1);
  return a > b ? a : b;
}
```

## 最长公共子序列

**最长公共子序列**（Longest Common Subsequence，LCS）：找出两个字符串序列的最长子序列的长度。最长子序列是指，在两个字符串序列中以相同顺序出现，但不要求连续(非字符串子串)的字符串序列。

例子如下：

![最长公共子序列](/img/dp-lcs.svg)

算法代码：

```js
function lcs(wordX, wordY) {
  const m = wordX.length;
  const n = wordY.length;
  const l = [];
  for (let i = 0; i <= m; i++) {
    l[i] = [];
    for (let j = 0; j <= n; j++) {
      l[i][j] = 0;
    }
  }
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        l[i][j] = 0;
      } else if (wordX[i - 1] === wordY[j - 1]) {
        l[i][j] = l[i - 1][j - 1] + 1;
      } else {
        const a = l[i - 1][j];
        const b = l[i][j - 1];
        l[i][j] = a > b ? a : b; // max(a,b)
      }
    }
  }
  return l[m][n];
}
```

如果比较背包问题和 LCS 算法，会发现两者非常相似。这项从顶部开始构建解决方案的技术被称为记忆化，而解决方案就在表格或矩阵的右下角。

像背包问题算法一样，这种方法只输出 LCS 的长度，而不包含 LCS 的实际结果。要提取这个信息，需要对算法稍作修改，声明一个新的 solution 矩阵。注意高亮的代码。

```js {25,28,31,40,45,49}
function printSolution(solution, wordX, m, n) {
  let a = m;
  let b = n;
  let x = solution[a][b];
  let answer = '';
  while (x !== '0') {
    if (solution[a][b] === 'diagonal') {
      answer = wordX[a - 1] + answer;
      a--;
      b--;
    } else if (solution[a][b] === 'left') {
      b--;
    } else if (solution[a][b] === 'top') {
      a--;
    }
    x = solution[a][b];
  }
  return answer;
}

function lcs(wordX, wordY) {
  const m = wordX.length;
  const n = wordY.length;
  const l = [];
  const solution = [];
  for (let i = 0; i <= m; i++) {
    l[i] = [];
    solution[i] = [];
    for (let j = 0; j <= n; j++) {
      l[i][j] = 0;
      solution[i][j] = '0';
    }
  }
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        l[i][j] = 0;
      } else if (wordX[i - 1] === wordY[j - 1]) {
        l[i][j] = l[i - 1][j - 1] + 1;
        solution[i][j] = 'diagonal';
      } else {
        const a = l[i - 1][j];
        const b = l[i][j - 1];
        l[i][j] = a > b ? a : b; // max(a,b)
        solution[i][j] = l[i][j] === l[i - 1][j] ? 'top' : 'left';
      }
    }
  }
  return printSolution(solution, wordX, m, n);
}
```

如果用 'acbaed' 和 'abcadf' 两个字符串执行上面的算法，我们将得到输出 4。用于构建结
果的矩阵 l 如下图。可以用附加的算法来跟踪 LCS 的值(如下图高亮所示)。

![跟踪 LCS 的值](/img/dp-lcs-print.svg)

通过上面的矩阵，我们知道 LCS 算法的结果是长度为 4 的 `acad`。

## 矩阵链相乘

**矩阵链相乘**是另一个可以用动态规划解决的著名问题。这个问题是要找出一组矩阵相乘的最佳方式（顺序）。

试着更好地理解这个问题。_n_ 行 _m_ 列的矩阵 **_A_** 和 _m_ 行 _p_ 列的矩阵 **_B_** 相乘，结果是 _n_ 行 _p_ 列的矩阵 **_C_**。

即 **_A_** \* **_B_** \* **_C_** \* **_D_** 的乘法。因为乘法满足结合律，所以可以让这些矩阵以任意顺序相乘。因此，考虑如下情况:

- **_A_** 是一个 10 行 100 列的矩阵；
- **_B_** 是一个 100 行 5 列的矩阵；
- **_C_** 是一个 5 行 50 列的矩阵；
- **_D_** 是一个 50 行 1 列的矩阵;
- **_A_** \* **_B_** \* **_C_** \* **_D_** 的结果是一个 10 行 1 列的矩阵。

在这个例子里，相乘的方式有五种：

1. (**_A_**(**_B_**(**_CD_**)))：乘法运算的次数是 1750 次。
2. ((**_AB_**)(**_CD_**))：乘法运算的次数是 5300 次。
3. (((**_AB_**)**_C_**)**_D_**)：乘法运算的次数是 8000 次。
4. ((**_A_**(**_BC_**))**_D_**)：乘法运算的次数是 75 500 次。
5. (**_A_**((**_BC_**)**_D_**))：乘法运算的次数是 31 000 次。

相乘的顺序不一样，要进行的乘法运算总数也有很大差异。那么，要如何构建一个算法，求出最少的乘法运算次数?矩阵链相乘的算法如下：

```js
/**
 * 打印函数
 */
function printOptimalParenthesis(s, i, j) {
  if (i === j) {
    console.log('A[' + i + ']');
  } else {
    console.log('(');
    printOptimalParenthesis(s, i, s[i][j]);
    printOptimalParenthesis(s, s[i][j] + 1, j);
    console.log(')');
  }
}

function matrixChainOrder(p) {
  const n = p.length;
  const m = [];
  const s = [];
  for (let i = 1; i <= n; i++) {
    m[i] = [];
    m[i][i] = 0;
  }
  // 首先，需要通过以下代码声明并初始化一个辅助矩阵 s
  for (let i = 0; i <= n; i++) {
    // to help printing the optimal solution
    s[i] = []; // auxiliary
    for (let j = 0; j <= n; j++) {
      s[i][j] = 0;
    }
  }
  for (let l = 2; l < n; l++) {
    for (let i = 1; i <= n - l + 1; i++) {
      const j = i + l - 1;
      m[i][j] = Number.MAX_SAFE_INTEGER;
      for (let k = i; k <= j - 1; k++) {
        // q = cost/scalar multiplications
        // 整个算法中最重要的是行。它计算了给定括号顺序的乘法运算次数，并将值保存在辅助矩阵 m 中
        const q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
        if (q < m[i][j]) {
          m[i][j] = q;
          s[i][j] = k; // s[i,j] = Second auxiliary table that stores k
        }
      }
    }
  }
  // console.log(m);
  // console.log(s);
  // 调用打印括号的函数
  printOptimalParenthesis(s, 1, n - 1);
  return m[1][n - 1];
}
```

```js
const p = [10, 100, 5, 50, 1];
console.log(matrixChainOrder(p));
```

能得到括号的最佳顺序（`A[1](A[2](A[3]A[4]))`），并可以转化为 （`A(B(CD))`)
