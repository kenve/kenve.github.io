---
id: backtracking
title: 回溯算法
---

**回溯法**（backtracking）是暴力搜索法中的一种。一种渐进式寻找并构建问题解决方式的策略。从一个可能的动作开始并试着用这个动作解决问题。如果不能解决，就回溯并选择另一个动作直到将问题解决。根据这种行为，回溯算法会尝试所有可能的动作（如果更快找到了解决办法就尝试较少的次数）来解决问题。

有一些可用回溯解决的著名问题:

- 骑士巡逻问题
- N 皇后问题
- 迷宫老鼠问题
- 数独解题器

## 迷宫老鼠问题

假设我们有一个大小为 N × N 的矩阵，矩阵的每个位置是一个方块。每个位置（或块）可以是空闲的(值为 1)或是被阻挡的(值为 0)，如下图所示，其中 **S** 是起点，**D** 是终点。

![迷宫老鼠问题](/img/backstracking-rat-in-maze.svg)

矩阵就是迷宫，“老鼠”的目标是从位置 `[0][0]` 开始并移动到 `[n-1][n-1]`（终点）。老鼠可以在垂直或水平方向上任何未被阻挡的位置间移动。

声明算法的基本结构：

```js
function isSafe(maze, x, y) {
  const n = maze.length;
  if (x >= 0 && y >= 0 && x < n && y < n && maze[x][y] !== 0) {
    return true;
  }
  return false;
}

/**
 * 递归从位置 x 和 y 开始在给定的 maze 矩阵中找到一个解
 */
function findPath(maze, x, y, solution) {
  const n = maze.length;
  // 验证老鼠是否到达了终点
  if (x === n - 1 && y === n - 1) {
    // 如果到了，就将最后一个位置标记为路径的一部分并返回 true，表示移动成功结束
    solution[x][y] = 1;
    return true;
  }
  // 如果不是最后一步，要验证老鼠能否安全移动至该位置（根据下面声明的 isSafe 方法判断出该位置空闲）
  if (isSafe(maze, x, y) === true) {
    // 如果是安全的，将这步加入路径
    solution[x][y] = 1;
    // 并试着在 maze 矩阵中水平移动（向右）到下一个位置
    if (findPath(maze, x + 1, y, solution)) {
      return true;
    }
    // 如果水平移动不可行，就试着垂直向下移动到下一个位置
    if (findPath(maze, x, y + 1, solution)) {
      return true;
    }
    // 如果水平和垂直都不能移动，那么将这步从路径中移除并回溯
    // 表示算法会尝试另一个可能的解
    solution[x][y] = 0;
    return false;
  }
  // 在算法尝试了所有可能的动作还是找不到解时，就返回 false，表示这个问题无解
  return false;
}

/**
 * 算法入口
 */
function ratInAMaze(maze) {
  // 首先创建一个包含解的矩阵
  const solution = [];
  // 将矩阵每个位置初始化为零
  for (let i = 0; i < maze.length; i++) {
    solution[i] = [];
    for (let j = 0; j < maze[i].length; j++) {
      solution[i][j] = 0;
    }
  }
  // 对于老鼠采取的每步行动，将路径标记为 1
  // 创建一个 findPath 方法，它会试着从位置 x 和 y 开始在给定的 maze 矩阵中找到一个解
  if (findPath(maze, 0, 0, solution) === true) {
    // 如果算法能够找到一个解，就返回解决矩阵
    return solution;
  }
  // 否则返回一条错误信息
  return 'NO PATH FOUND';
}
```

用下面的代码进行测试：

```js
const maze = [
  [1, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
  [0, 1, 1, 1],
];
console.log(ratInAMaze(maze));
// 输出如下
/*
[
  [1, 0, 0, 0],
  [1, 1, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 1],
]
*/
```

## 数独解题器

数独是一个非常有趣的解谜游戏，也是史上最流行的游戏之一。目标是用数字 1~9 填满一 个 9 × 9 的矩阵，要求每行和每列都由这九个数字构成。矩阵还包含了小方块（3 × 3 矩阵），它们同样需要分别用这九个数字填满。谜题在开始给出一个已填了部分数字的矩阵，如下图所示：

![数独解题器](/img/backstracking-sudoku-solver.svg)

数独解题器的回溯算法会尝试在每行每列中填入每个数字。和迷宫老鼠问题一样，算法如下：

```js
const UNASSIGNED = 0;

// 检查声明
function usedInRow(matrix, row, num) {
  // 迭代矩阵中给定行 row 中的每个位置检查数字是否在行 row 中存在
  for (let col = 0; col < matrix.length; col++) {
    if (matrix[row][col] === num) {
      return true;
    }
  }
  return false;
}

// 检查声明
function usedInCol(matrix, col, num) {
  // 迭代所有的列来验证数字是否在给定的列中存在
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][col] === num) {
      return true;
    }
  }
  return false;
}

function usedInBox(matrix, boxStartRow, boxStartCol, num) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      // 最后的检查是通过迭代 3 × 3 矩阵中的所有位置来检查数字是否在小矩阵中存在
      if (matrix[row + boxStartRow][col + boxStartCol] === num) {
        return true;
      }
    }
  }
  return false;
}

/**
 * 检查填入的数字是否符合规则
 */
function isSafe(matrix, row, col, num) {
  return (
    !usedInRow(matrix, row, num) &&
    !usedInCol(matrix, col, num) &&
    !usedInBox(matrix, row - (row % 3), col - (col % 3), num)
  );
}
/**
 * 主要逻辑
 */
function solveSudoku(matrix) {
  let row = 0;
  let col = 0;
  let checkBlankSpaces = false;
  // 验证谜题是否已被解决
  for (row = 0; row < matrix.length; row++) {
    for (col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === UNASSIGNED) {
        // 如果有空白位置
        checkBlankSpaces = true;
        break;
      }
    }
    // 如果有空白位置，从两个循环中跳出
    // 并且 row 和 col 变量会表示需要用 1~9 填写空白的位置
    if (checkBlankSpaces === true) {
      break;
    }
  }
  if (checkBlankSpaces === false) {
    // 如果没有空白的位置（值为 0 的位置），表示谜题已被完成
    return true;
  }
  // 跳出循环后，算法会试着用 1~9 填写这个位置，一次填一个
  for (let num = 1; num <= 9; num++) {
    // 检查添加的数字是否符合规则
    // 也就是这个数字在这行、这列或在小矩阵（3 × 3 矩阵）中没有出现过
    if (isSafe(matrix, row, col, num)) {
      // 如果符合，将这个数字填入
      matrix[row][col] = num;
      // 并再次执行 solveSudoku 函数来尝试填写下一个位置
      if (solveSudoku(matrix)) {
        return true;
      }
      // 如果一个数字填在了不正确的位置，将这个位置标记为空
      matrix[row][col] = UNASSIGNED;
    }
  }
  // 算法回溯，再尝试一个其他数字
  return false;
}

/**
 * 算法入口
 * 算法在找到解后会返回填满了缺失数字的矩阵，否则返回错误信息
 */
function sudokuSolver(matrix) {
  if (solveSudoku(matrix) === true) {
    return matrix;
  }
  return '问题无解!';
}
```

用下面的例子来测试算法。

```js
const sudokuGrid = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];
console.log(sudokuSolver(sudokuGrid));

// 输出如下
/*
[
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
]
*/
```
