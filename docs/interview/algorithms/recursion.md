---
id: recursion
title: 递归
---

有一句编程的至理名言是这样的：要理解递归，首先要理解递归。

递归（recursion）是指一种通过重复将问题分解为同类的子问题而解决问题的方法。
递归通常涉及函数在运行的过程中调用自己。

:::info

:::

比如下面的递归函数例子：

```js
function recursiveFunction(someParam) {
  recursiveFunction(someParam);
}

// 能够像下面这样间接调用自身的函数，也是递归函数。
function recursiveFunction1(someParam) {
  recursiveFunction2(someParam);
}

function recursiveFunction2(someParam) {
  recursiveFunction1(someParam);
}
```

每个递归函数都必须有**基线条件**，即一个不再递归调用的条件(停止点)，以防止无限递归。

回到之前的编程至理名言，在理解了什么是递归之后，也就解决了最初的问题。如果把这句话翻译成 JavaScript 代码的话，可以写成下面这样。

```js
function understandRecursion(doIunderstandRecursion) {
  const recursionAnswer = confirm('Do you understand recursion?');
  // 基线条件或停止点
  if (recursionAnswer === true) {
    return true;
  }
  // 递归调用
  understandRecursion(recursionAnswer);
}
```

understandRecursion 函数会不断地调用自身，直到 `recursionAnswer` 为真(`true`)。 `recursionAnswer` 为真就是上述代码的基线条件。

## 递归应用

递归算法一般用于解决三类问题：

- 数据的定义是按递归定义的。（Fibonacci 函数）
- 问题解法按递归算法实现。这类问题虽则本身没有明显的递归结构，但用递归求解比迭代求解更简单，如 Hanoi 问题。
- 数据的结构形式是按递归定义的。如二叉树、广义表等，由于结构本身固有的递归特性，则它们的操作可递归地描述。

递归的缺点：

- 递归算法解题相对常用的算法如普通循环等，运行效率较低。因此，应该尽量避免使用递归，除非没有更好的算法或者某种特定情况，递归更为适合的时候。
- 在递归调用的过程当中系统为每一层的返回点、局部量等开辟了栈来存储。递归次数过多容易造成栈溢出等。

### 计算一个数的阶乘

如何使用递归计算一个数的阶乘。数 _n_ 的阶乘，定义为 _n_!，表示从 1 到 _n_ 的整数的乘积。例如：5 的阶乘表示为 5!，和 5 × 4 × 3 × 2 × 1 相等，结果是 120。

#### 迭代阶乘

如果尝试表示计算任意数 n 的阶乘，可以将步骤定义如下：`(n) * (n - 1) * (n - 2) * (n - 3) * ... * 1`。使用循环来写一个计算一个数阶乘的函数，如下所示：

```js
function factorialIterative(number) {
  if (number < 0) {
    return undefined;
  }
  let total = 1;
  for (let n = number; n > 1; n--) {
    total = total * n;
  }
  return total;
}
console.log(factorialIterative(5)); // 120
```

从给定的 number 开始计算阶乘，并减少 n，直到它的值为 2，因为 1 的阶乘还是 1，而且它已经被包含在 total 变量中了。零的阶乘也是 1。负数的阶乘不会被计算。

#### 递归阶乘

使用递归的定义来定义所有的步骤：5 的阶乘用 5 × 4 × 3 × 2 × 1 来计算。4(_n_ - 1)的阶乘用 4 × 3 × 2 × 1 来计算。计算 _n_ - 1 的阶乘是我们计算原始问题 _n_! 的一个子问题，因此可以像下面这样定义 5 的阶乘。

1. `factorial(5) = 5 * factorial(4)`：我们可以用 5 × 4! 来计算 5!。
2. `factorial(5) = 5 * (4 * factorial(3))`：我们需要计算子问题 4!，它可以用 4 × 3! 来计算。
3. `factorial(5) = 5 * 4 * (3 * factorial(2))`：我们需要计算子问题 3!，它可以用 3 × 2! 来计算。
4. `factorial(5) = 5 * 4 * 3 * (2 * factorial(1))`：我们需要计算子问题 2!，它可以用 2 × 1! 来计算。
5. `factorial(5) = 5 * 4 * 3 * 2 * (1)`：我们需要计算子问题 1!。
6. `factorial(1)` 或 `factorial(0)` 返回 1。1! 等于 1。我们也可以说 1! = 1 × 0!，0! 也等于 1。

使用递归的 factorial 函数定义如下：

```js
function factorial(n) {
  // 基线条件
  if (n === 1 || n === 0) {
    return 1;
  }
  // 递归调用
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
```

**1. 调用栈**

每当 一个函数被一个算法调用时，该函数会进入**调用栈**的顶部。当使用递归的时候，每个函数调用都 会堆叠在调用栈的顶部，这是因为每个调用都可能依赖前一个调用的结果。我们可以用浏览器看到调用栈的行为，如下图所示：

![调用栈图](/img/recursion-call-stack.png)

如果执行 factorial(5)，打开浏览器的开发者工具，打开 Sources 标签页，在代码中增加一个断点，当 n 的值为 1 时，我们可以看到 Call Stack 里有五个 factorial 函数的调用。如果继续执行，会看到当 factorial(1) 被返回后，Call Stack 开始弹出 factorial 的调用。可以在函数开头添加 `console.trace()` 来在浏览器的控制台中查看结果。

下图展示了执行的各个步骤和调用栈中的行为：

![阶乘计算调用栈展示图](/img/recursion-factorial.png)

**2. JavaScript 调用栈大小的限制**

忘记加上用以停止函数递归调用的基线条件，会发生什么呢?递归并不会无限地执行下去，浏览器会抛出错误，也就是所谓的**栈溢出错误**（stack overflow error）。

每个浏览器都有自己的上限，可用以下代码测试：

```js {4}
let i = 0;
function recursiveFn() {
  i++;
  recursiveFn();
}
try {
  recursiveFn();
} catch (ex) {
  console.log('i = ' + i + ' error: ' + ex);
}
```

在 **Chrome v81** 版本中会输出如下信息： `i = 15674 error: RangeError: Maximum call stack size exceeded`，即该函数执行了 **15674** 次，而后浏览器抛出错误 **RangeError: Maximum call stack size exceeded**(超限错误:超过最大调用栈大小)。

:::tip
ECMAScript 2015 有尾调用优化(tail call optimization)。如果函数内的最后一个操作是调用 函数(就像示例中高亮的那行)，会通过“跳转指令”(jump) 而不是“子程序调用”(subroutine call)来控制。也就是说，在 ECMAScript 2015 中，这里的代码可以一直执行下去。因此，具有停止递归的基线条件非常重要。
:::

### 斐波那契数列

**斐波那契数列**是另一个可以用递归解决的问题。它是一个由 0、1、1、2、3、5、8、13、21、34 等数组成的序列。数 2 由 1 + 1 得到，数 3 由 1 + 2 得到，数 5 由 2 + 3 得到，以此类推。斐波那契数列的定义如下：

- 位置 0 的斐波那契数是零。
- 1 和 2 的斐波那契数是 1。
- n（此处 n > 2）的斐波那契数是（n - 1）的斐波那契数加上（n - 2）的斐波那契数，。

即 `F(0) = 0, F(1) = 1, F(2) = 1, F(n) = F(n - 1) + F(n - 2)`

#### 迭代求斐波那契数

用迭代的方法实现 fibonacci 函数，如下所示：

```js
function fibonacciIterative(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  // n - 2 的数
  let fibNMinus2 = 0;
  // n - 1 的数
  let fibNMinus1 = 1;
  let fibN = n;
  for (let i = 2; i <= n; i++) {
    // n >= 2
    // f(n-1) + f(n-2)
    fibN = fibNMinus1 + fibNMinus2;
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
  }
  return fibN;
}
```

#### 递归求斐波那契数

用递归的方法实现 fibonacci 函数可以写成下面这样：

```js
function fibonacci(n) {
  // 有基线条件
  if (n < 1) return 0;
  if (n <= 2) return 1;
  // 计算 n > 2 的斐波那契数的逻辑
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

如果我们试着寻找 fibonacci(5)，下面是调用情况的结果：

![递归实现斐波那契数列](/img/recursion-fibonacci.png)

:::caution 注意
递归实现斐波那契数列的效率非常低，避免使用递归实现。
:::

#### 记忆化斐波那契数

还有第三种写 fibonacci 函数的方法，叫作**记忆化**。记忆化是一种保存前一个结果的值的优化技术，类似于缓存。如果我们分析在计算 fibonacci(5) 时的调用，会发现 fibonacci(3) 被计算了两次，因此可以将它的结果存储下来，这样当需要再次计算它的时候，我们就已经有它的结果了。

下面的代码展示了使用记忆化的 fibonacci 函数：

```js
function fibonacciMemoization(n) {
  // 声明了一个 memo 数组来缓存所有的计算结果
  const memo = [0, 1];
  const fibonacci = (n) => {
    // 如果结果已经被计算了，我们就返回它
    if (memo[n] != null) {
      return memo[n];
    }
    // 否则计算该结果并将它加入缓存
    return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
  };
  return fibonacci;
}
```

## 为什么要用递归？它更快吗？

迭代的版本比递归的版本快很多，所以这表示递归更慢。

但是，再看看三个不同版本的代码。递归版本更容易理解，需要的代码通常也更少。另外，对一些算法来说，迭代的解法可能不可用，而且有了**尾调用优化**，递归的多余消耗甚至可能被消除。

所以，我们经常使用递归，因为用它来解决问题会更简单。

:::info
尾调用优化相关资料 [维基百科-尾调用](http://zh.wikipedia.org/wiki/%E5%B0%BE%E8%B0%83%E7%94%A8)，[尾调用优化](https://www.ruanyifeng.com/blog/2015/04/tail-call.html)，[尾递归为啥能优化？](https://zhuanlan.zhihu.com/p/36587160)
:::