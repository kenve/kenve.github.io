---
id: euclidean
title: 欧几里德算法
---

欧几里德算法（Euclidean algorithm）又称辗转相除法，其目的是计算两个正整数的最大公约数。计算公式 `gcd(a,b) = gcd(b,a mod b)`。

## 递归版本

计算两个非负整数 `a` 和 `b` 的最大公约数：

- 若 `b` 是 `0`，则最大公约数为 `a`。
- 否则，将 `a` 除以 `b` 得到余数 `r`，`a` 和 `b` 的最大公约数即为 `b` 和 `r` 的最大公约数。

```js
function gcd(a, b) {
  return b == 0 ? a : gcd(b, a % b);
}
```

## 除法版本

在第 k 次循环开始时，变量 `b` 的值是前一次运算的余数 r<sub>k−1</sub>，变量 `a` 的值是再前一次运算的余数 r<sub>k−2</sub>。

步骤：

- `b = a mod b` 的作用等同于递归式 r<sub>k</sub> = r<sub>k−2</sub> mod r<sub>k−1</sub> 。
- 变量 `t` 的功能是在下一个余数 r<sub>k</sub> 计算过程中临时性地保存 r<sub>k−1</sub> 的值。
- 在一次循环结束时，变量 `b` 的值是前一次运算的余数 r<sub>k</sub>，变量 `a` 的值是再前一次运算的余数 r<sub>k−1</sub>。
- 直到 `b === 0`，返回 `a` 的值即为最大公约数。

```js
function gcd(a, b) {
  while (b != 0) {
    let t = a % b;
    a = b;
    b = t;
  }
  return a;
}
```

## 减法版本

- 变量 `a` 和 `b` 的值分别是前两次的余数 r<sub>k−1</sub>和 r<sub>k−2</sub>。
- 假定第 `k` 次循环开始时 `a` 大于 `b`，那么 `a` 等于 r<sub>k−2</sub>，因为 r<sub>k−2</sub> > r<sub>k−1</sub>。
- 在循环过程中，`a` 重复减去 `b` 直到比 `b` 小，此时 `a` 就是下一个余数 r<sub>k</sub>；然后 `b` 重复减去 `a` 直到比 `a` 小，此时 `b` 就是下一个余数 r<sub>k+1</sub>；重复执行直到 `b == 0`。

```js
function gcd(a, b) {
  if (a == 0) {
    return b;
  }
  while (b != 0) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}
```

实践运用：[LeetCode 914.卡牌分组](https://github.com/kenve/leetcode/blob/master/all/%E5%8D%A1%E7%89%8C%E5%88%86%E7%BB%84.md)
