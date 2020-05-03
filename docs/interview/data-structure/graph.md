---
id: graph
title: 图 Graph
---

**图**（Graph）用于表示物件与物件之间的关系，是图论的基本研究对象。一张图由一些小圆点（称为**顶点**或**结点**）和连结这些圆点的直线或曲线（称为**边**）组成。是网络结构的抽象模型。

## 定义

图有多种变体，包括简单图、多重图、有向图、无向图等，但大体上有以下两种定义方式：

**二元组的定义**：图 G 是一个有序二元组 (V, E)，其中 V 称为顶集（Vertices Set），E 称为边集（Edges set），E 与 V 不相交。它们亦可写成 V(G)和 E(G)。E 的元素都是二元组，用 (x, y) 表示，其中 x, y ∈ V。

**三元组的定义**：图 G 是指一个三元组(V, E, I)，其中 V 称为顶集，E 称为边集，E 与 V 不相交；I 称为关联函数，I 将 E 中的每一个元素映射到。如果 e 被映射到 (u, v)，那么称边 e 连接顶点 u, v，而 u, v 则称作 e 的端点，u, v 此时关于 e 相邻。同时，若两条边 i, j 有一个公共顶点 u，则称 i, j 关于 u 相邻。

## 分类

- **有/无向图**：如果给图的每条边规定一个方向，那么得到的图称为**有向图**，其边也称为有向边。在有向图中，与一个节点相关联的边有出边和入边之分，而与一个有向边关联的两个点也有始点和终点之分。相反，边没有方向的图称为**无向图**。
- **单图**：一个图如果任意两顶点之间只有一条边（在有向图中为两顶点之间每个方向只有一条边）；边集中不含环，则称为单图。
- **多重图**：若允许两结点间的边数多于一条，又允许顶点通过同一条边和自己关联，则为多重图的概念。它只能用“三元组的定义”。

## 图的术语

一个图 `G = (V, E)` 由以下元素组成：

- V：一组顶点
- E：一组边，连接 V 中的顶点

下图表示一个图：

![图的示意图](/img/graph-binary-relation.svg)

- 由一条边连接在一起的顶点称为**相邻顶点**。比如，A 和 B 是相邻的，A 和 D 是相邻的，A 和
  C 是相邻的，A 和 E 不是相邻的。
- 一个顶点的**度**是其相邻顶点的数量。比如，A 和其他三个顶点相连接，因此 A 的度为 3；E
  和其他两个顶点相连，因此 E 的度为 2。
- **路径**是顶点 v1, v2, ..., vk 的一个连续序列，其中 vi 和 vi+1 是相邻的。以上一示意图中的图为例，其中包含路径 A B E I 和 A C D G。
- 简单路径要求不包含重复的顶点。举个例子，A D G 是一条简单路径。除去最后一个顶点（因为它和第一个顶点是同一个顶点），**环**也是一个简单路径，比如 A D C A（最后一个顶点重新回到 A）。
- 如果图中不存在**环**，则称该图是无环的。如果图中每两个顶点间都存在路径，则该图是连通的。

:::info
其他术语，请访问[百度百科](https://baike.baidu.com/item/%E5%9B%BE/13018767#3)或[维基百科](<https://zh.wikipedia.org/wiki/%E5%9B%BE_(%E6%95%B0%E5%AD%A6)>)
:::

## 有向图和无向图

图可以是无向的(边没有方向)或是有向的(有向图)。如下图所示，有向图的边有一个方向：

![有向图](/img/graph-oriented.svg)

如果图中每两个顶点间在双向上都存在路径，则该图是**强连通**的。例如：C 和 D 是强连通的，而 A 和 B 不是强连通的。

图还可以是未加权的（目前为止上面两个图都是未加权的）或是加权的。如下图所示，加权图的边被赋予了权值：

![加权图](/img/graph-weighted.svg)

:::tip
图可以用来解决计算机科学世界中的很多问题，比如搜索图中的一个特定顶点或搜索一条特定边，寻找图中的一条路径（从一个顶点到另一个顶点），寻找两个顶点之间的最短路径，以及环检测。
:::

## 图的表示

从数据结构的角度来说，有多种方式来表示图。在所有的表示法中，不存在绝对正确的方式。图的正确表示法取决于待解决的问题和图的类型。

### 邻接矩阵

图最常见的实现是**邻接矩阵**。每个节点都和一个整数相关联，该整数将作为数组的索引。可以用一个二维数组来表示顶点之间的连接。如果索引为 _i_ 的节点和索引为 _j_ 的节点相邻，则 `array[i][j] === 1`，否则 `array[i][j] === 0`，如下图所示：

![邻接矩阵](/img/graph-adjacency-matrix.svg)

不是强连通的图（**稀疏图**）如果用邻接矩阵来表示，则矩阵中将会有很多 `0`，这意味着浪费了计算机存储空间来表示根本不存在的边。例如：找给定顶点的相邻顶点，即使该顶点只有一个相邻顶点，我们也不得不迭代一整行。邻接矩阵表示法不够好的另一个理由是，图中顶点的数量可能会改变，而二维数组不太灵活。

### 邻接表

也可以使用一种叫作**邻接表**的动态数据结构来表示图。邻接表由图中每个顶点的相邻顶点列表所组成。存在好几种方式来表示这种数据结构。可以用列表(数组)、链表，甚至是散列表或是字典来表示相邻顶点列表。下面的示意图展示了邻接表数据结构：

![邻接表](/img/graph-adjacency-list.svg)

尽管邻接表可能对大多数问题来说都是更好的选择，但以上两种表示法都很有用，且它们有着不同的性质（例如：要找出顶点 _v_ 和 _w_ 是否相邻，使用邻接矩阵会比较快）。下面将会使用邻接表表示法来实现。

### 关联矩阵

还可以用**关联矩阵**来表示图。在关联矩阵中，矩阵的行表示顶点，列表示边。如下图所示， 使用二维数组来表示两者之间的连通性，如果顶点 _v_ 是边 _e_ 的入射点，则 `array[v][e] === 1`；否则 `array[v][e] === 0`。

![关联矩阵](/img/graph-incidence-matrix.svg)

关联矩阵通常用于边的数量比顶点多的情况，以节省空间和内存。

## 创建 Graph 类

使用[字典](./dictionary-and-hashtable.md)类存储，声明 Graph 类：

```js
class Graph {
  constructor(isDirected = false) {
    // 接收一个参数来表示图是否有向，默认情况下，图是无向的
    this.isDirected = isDirected;
    // 使用一个数组来存储图中所有顶点的名字
    this.vertices = [];
    // 使用一个字典来存储邻接表。字典将会使用顶点的名字作为键，邻接顶点列表作为值
    this.adjList = new Dictionary();
  }
}
```

接下来实现两个添加方法：一个用来向图中添加一个新的顶点（因为图实例化后是空的），另外一个方法用来添加顶点之间的边。我们先实现 `addVertex` 方法：

```js
/**
 * 添加一个新顶点方法，接收顶点 v 作为参数
 */
addVertex(v) {
  if (!this.vertices.includes(v)) {
    // 只有在这个顶点不存在于图中时
    // 将该顶点添加到顶点列表中
    this.vertices.push(v);
    // 并且在邻接表中，设置顶点 v 作为键对应的字典值为一个空数组
    this.adjList.set(v, []);
  }
}
```

实现 `addEdge` 方法：

```js
/**
 * 方法接收两个顶点作为参数，也就是要建立连接的两个顶点
 */
addEdge(v, w) {
  // 在连接顶点之前，需要验证顶点是否存在于图中
  // 如果顶点 v 或 w 不存在于图中，要将它们加入顶点列表
  if (!this.adjList.get(v)) {
    this.addVertex(v);
  }
  if (!this.adjList.get(w)) {
    this.addVertex(w);
  }
  // 然后，通过将 w 加入到 v 的邻接表中，添加了一条自顶点 v 到顶点 w 的边
  this.adjList.get(v).push(w);
  // 如果你想实现一个有向图，那么到上一步就足够了
  // 由于这笔记中大多数的例子都是基于无向图的，所以需要添加一条自 w 到 v 的边
  if (!this.isDirected) {
    this.adjList.get(w).push(v);
  }
}
```

:::info
请注意我们只是往数组里新增元素，因为数组已经在 `addVertex` 中通过被 `this.adjList.set(v, []);` 初始化了。
:::

要完成创建 Graph 类，我们还要声明两个取值的方法：一个返回顶点列表，另一个返回邻
接表。

```js
getVertices() {
  return this.vertices;
}

getAdjList() {
  return this.adjList;
}
```

实现 Graph 类的 `toString` 方法，以便在控制台输出图：

```js
toString() {
  let s = '';
  // 迭代 vertices 数组列表
  for (let i = 0; i < this.vertices.length; i++) {
    // 将顶点的名字加入字符串中
    s += `${this.vertices[i]} -> `;
    // 取得该顶点的邻接表
    const neighbors = this.adjList.get(this.vertices[i]);
    // 同样迭代该邻接表，将相邻顶点加入字符串
    for (let j = 0; j < neighbors.length; j++) {
      // {17}
      s += `${neighbors[j]} `;
    }
    // 邻接表迭代完成后，给字符串添加一个换行符
    s += '\n';
  }
  return s;
}
```

### Graph 类完整实现

```js
// 依赖字典类
import Dictionary from './dictionary';

class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      // 用数组初始化邻接表
      this.adjList.set(v, []);
    }
  }

  addEdge(a, b) {
    if (!this.adjList.get(a)) {
      this.addVertex(a);
    }
    if (!this.adjList.get(b)) {
      this.addVertex(b);
    }
    this.adjList.get(a).push(b);
    if (this.isDirected !== true) {
      this.adjList.get(b).push(a);
    }
  }

  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjList;
  }

  toString() {
    let s = '';
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `;
      const neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `;
      }
      s += '\n';
    }
    return s;
  }
}
```

测试：

```js
const graph = new Graph();
// 为方便起见，创建了一个数组，包含所有想添加到图中的顶点
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; i++) {
  // 遍历 myVertices 数组并将其中的值逐一添加到图中
  graph.addVertex(myVertices[i]);
}
// 添加想要 的边
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());
// 输出
/* 
A -> B C D
B -> A E F
C -> A D G
D -> A C G H
E -> B I
F -> B
G -> C D
H -> D
I -> E
*/
```

## 图的遍历

和[树数据结构](./tree.md)类似，我们可以访问图的所有节点。有两种算法可以对图进行遍历：**广度优先搜索（breadth-first search，BFS）**和**深度优先搜索（depth-first search，DFS）**。图遍历可以用来寻找特定的顶点或寻找两个顶点之间的路径，检查图是否连通，检查图是否含有环，等等。

**图遍历算法**的思想是必须追踪每个第一次访问的节点，并且追踪有哪些节点还没有被完全探 索。对于两种图遍历算法，都需要明确指出第一个被访问的顶点。

完全探索一个顶点要求我们查看该顶点的每一条边。对于每一条边所连接的没有被访问过的 顶点，将其标注为被发现的，并将其加进待访问顶点列表中。

广度优先搜索算法和深度优先搜索算法基本上是相同的，都需要明确指出第一个被访问的顶点，只有一点不同，那就是待访问顶点列表的数据结构，如下表所示：

| 算法         | 数据结构 | 描述                                                                         |
| ------------ | -------- | ---------------------------------------------------------------------------- |
| 深度优先搜索 | 栈       | 将顶点存入[栈](./stack.md)，顶点是沿着路径被探索的，存在新的相邻顶点就去访问 |
| 广度优先搜索 | 队列     | 将顶点存入[队列](./queue.md)，最先入队列的顶点先被探索                       |

当要标注已经访问过的顶点时，用三种颜色来反映它们的状态：

- **白色**：表示该顶点还没有被访问。
- **灰色**：表示该顶点被访问过，但并未被探索过。
- **黑色**：表示该顶点被访问过且被完全探索过。

为了有助于在广度优先和深度优先算法中标记顶点，使用 `Colors` 变量(作为一个枚举器)，声明如下：

```js
const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
};
```

两个算法还需要一个辅助对象来帮助存储顶点是否被访问过。在每个算法的开头，所有的顶点会被标记为未访问（白色）。要用下面的函数来初始化每个顶点的颜色：

```js
const initializeColor = (vertices) => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};
```

### 广度优先搜索

广度优先搜索算法会从指定的第一个顶点开始遍历图，先访问其所有的邻点(相邻顶点)，就像一次访问图的一层。换句话说，就是先宽后深地访问顶点，如下图所示：

![广度优先搜索算法](/img/graph-breadth-first-search.svg)

以下是从顶点 v 开始的广度优先搜索算法所遵循的步骤：

1. 创建一个队列 Q。
2. 标注 v 为被发现的（灰色），并将 v 入队列 Q。
3. 如果 Q 非空，则运行以下步骤：  
   (a) 将 u 从 Q 中出队列；  
   (b) 标注 u 为被发现的（灰色）；  
   (c) 将 u 所有未被访问过的邻点（白色）入队列；  
   (d) 标注 u 为已被探索的（黑色）。

来实现广度优先搜索算法：

```js
const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  // 用 initializeColor 函数来将 color 数组初始化为白色
  const color = initializeColor(vertices);
  // 声明和创建一个 Queue 实例，用于存储待访问和待探索的顶点
  const queue = new Queue();
  // 将顶点入队列
  queue.enqueue(startVertex);
  // 迭代，如果队列非空
  while (!queue.isEmpty()) {
    // 通过出队列操作从队列中移除一个顶点
    const u = queue.dequeue();
    // 并取得一个包含其所有邻点的邻接表
    const neighbors = adjList.get(u);
    // 该顶点将被标注为灰色
    color[u] = Colors.GREY;
    // 遍历 neighbors
    for (let i = 0; i < neighbors.length; i++) {
      // 对于 u 的每个邻点，取得其值(该顶点的名字)
      const w = neighbors[i];
      // 如果它还未被访问过（颜色为白色）
      if (color[w] === Colors.WHITE) {
        // 则将其标注为我们已经发现了它（颜色设置为灰色）
        color[w] = Colors.GREY;
        // 并将这个顶点加入队列，当其从队列中出列的时候，就可以完成对其的探索
        queue.enqueue(w);
      }
    }
    // 当完成探索该顶点和其相邻顶点后，我们将该顶点标注为已探索过的（颜色设置为黑色）
    color[u] = Colors.BLACK;
    // 如果传递了回调函数，执行回调
    if (callback) {
      callback(u);
    }
  }
};
```

#### 1. 使用 BFS 寻找最短路径

例如：给定一个图 _G_ 和源顶点 _v_，找出每个顶点 _u_ 和 _v_ 之间最短路径的距离（以边的数量计）。

对于给定顶点 _v_，广度优先算法会访问所有与其距离为 1 的顶点，接着是距离为 2 的顶点，以此类推。所以，可以用广度优先算法来解这个问题。可以修改 `breadthFirstSearch` 方法以返回给我们一些信息：

- 从 _v_ 到 _u_ 的距离 `distances[u]`；
- 前溯点 `predecessors[u]`，用来推导出从 _v_ 到其他每个顶点 _u_ 的最短路径。

改进后的广度优先方法的实现：

```js
const BFS = (graph, startVertex) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = new Queue();
  // 需要声明 distances 来表示距离，以及 predecessors 表示前溯点
  const distances = {};
  const predecessors = {};
  queue.enqueue(startVertex);
  // 对于图中的每一个顶点，用 0 来初始化 distances，用 null 来初始化数组 predecessors
  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0;
    predecessors[vertices[i]] = null;
  }
  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);
    color[u] = Colors.GREY;
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        // 通过给 distances[u]加 1 来增加 v 和 w 之间的距离（u 是 w 的前溯点，distances[u]的值已经有了）
        distances[w] = distances[u] + 1;
        // 当我们发现顶点 u 的邻点 w 时，则设置 w 的前溯点值为 u
        predecessors[w] = u;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
  }
  // 最后返回了一个包含 distances 和 predecessors 的对象
  return {
    distances,
    predecessors,
  };
};
```

通过前溯点数组，我们可以用下面这段代码来构建从顶点 A 到其他顶点的路径：

```js
// 用之前声明过的数组，用其顶点 A 作为源顶点
const fromVertex = myVertices[0];
// 对于每个其他顶点（除了顶点 A），计算顶点 A 到它的路径
for (i = 1; i < myVertices.length; i++) {
  // 从 myVertices 数组得到值
  const toVertex = myVertices[i];
  // 然后会创建一个栈来存储路径值
  const path = new Stack();
  // 追溯 toVertex 到 fromVertex 的路径
  // 变量 v 被赋值为其前溯点的值，这样能够反向追溯这条路径
  for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    // 将变量 v 添加到栈中
    path.push(v);
  }
  // 最后，源顶点也会被添加到栈中，以得到完整路径
  path.push(fromVertex);
  // 创建了一个 s 字符串，并将源顶点赋值给它（它是最后一个加入栈中的，所以是 第一个被弹出的项）
  let s = path.pop();
  // 当栈是非空
  while (!path.isEmpty()) {
    // 从栈中移出一个项并将其拼 接到字符串 s 的后面
    s += ' - ' + path.pop();
  }
  // 最后，在控制台上输出路径
  console.log(s);
}
// 执行该代码段，我们会得到如下输出
/*
A - B
A - C
A - D 
A - B - E
A - B - F
A - C - G
A - D - H
A - B - E - I
*/
```

#### 2. 深入学习最短路径算法

如果要计算加权图中的最短路径（例如：城市 A 和城市 B 之间的 最短路径——GPS 和 Google Maps 中用到的算法），广度优先搜索未必合适。

举几个例子，**Dijkstra 算法**解决了单源最短路径问题。Bel**lman-Ford 算法**解决了边权值为负 的单源最短路径问题。**A\*搜索算法**解决了求仅一对顶点间的最短路径问题，用经验法则来加速搜 索过程。**Floyd-Warshall 算法**解决了求所有顶点对之间的最短路径这一问题。

### 深度优先搜索

深度优先搜索算法将会从第一个指定的顶点开始遍历图，沿着路径直到这条路径最后一个顶点被访问了，接着原路回退并探索下一条路径。换句话说，它是先深度后广度地访问顶点，如下图所示：

![深度优先搜索](/img/graph-depth-first-search.svg)

深度优先搜索算法不需要一个源顶点。在深度优先搜索算法中，若图中顶点 v 未访问，则访 问该顶点 v。

要访问顶点 v，照如下步骤做：

1. 标注 v 为被发现的（灰色）；
2. 对于 v 的所有未访问（白色）的邻点 w，访问顶点 w；
3. 标注 v 为已被探索的（黑色）。

深度优先搜索的步骤是递归的，这意味着深度优先搜索算法使用栈来存储函数调用（由递归调用所创建的栈）。

实现深度优先算法：

```js
/**
 * 函数接收一个 Graph 类实例和回调函数作为参数
 */
const depthFirstSearch = (graph, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  //
  const color = initializeColor(vertices);
  // 在初始化每个顶点的颜色后，对于图实例中每一个未被访问过的顶点调用私有的递归函数 depthFirstSearchVisit
  // depthFirstSearchVisit 传递的参数为要访问的顶点 u、颜色数组以及回调函数
  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback);
    }
  }
};

const depthFirstSearchVisit = (u, color, adjList, callback) => {
  // 当访问顶点 u 时，我们标注其为被发现的（灰色）
  color[u] = Colors.GREY;
  if (callback) {
    // 如果有 callback 函数的话，则执行该函数输出已访问过的顶点
    callback(u);
  }
  // 取得包含顶点 u 所有邻点的列表
  const neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    //  u 的邻点 w
    const w = neighbors[i];
    // 对于顶点 u 的每一个未被访问过（颜色为白色）
    if (color[w] === Colors.WHITE) {
      // 调用 depthFirstSearchVisit 函数，传递 w 和其他参数(添加顶点 w 入栈，接下来就能访问它)
      depthFirstSearchVisit(w, color, adjList, callback);
    }
  }
  // 最后，在该顶点和邻点按深度访问之后，我们回退，意思是该顶点已被完全探索，并将其标注为黑色
  color[u] = Colors.BLACK;
};
```

#### 1. 探索深度优先算法

对于给定的图 G，我们希望深度优先搜索算法遍历图 G 的所有节点，构建“森林”（有根树的一个集合）以及一组源顶点（根），并输出两个数组：发现时间和完成探索时间。我们可以修改 `depthFirstSearch` 函数来返回一些信息：

- 顶点 u 的发现时间 `d[u]`；
- 当顶点 u 被标注为黑色时，u 的完成探索时间 `f[u]`；
- 顶点 u 的前溯点 `p[u]`。

改进的 DFS 方法的实现：

```js
const DFS = (graph) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  // 声明 d、f 和 p
  const d = {};
  const f = {};
  const p = {};
  // 声明一个变量来追踪发现时间和完成探索时间
  const time = { count: 0 };
  // 初始化 d、f 和 p
  for (let i = 0; i < vertices.length; i++) {
    f[vertices[i]] = 0;
    d[vertices[i]] = 0;
    p[vertices[i]] = null;
  }
  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      DFSVisit(vertices[i], color, d, f, p, time, adjList);
    }
  }
  // 返回
  return {
    discovery: d,
    finished: f,
    predecessors: p,
  };
};

const DFSVisit = (u, color, d, f, p, time, adjList) => {
  color[u] = Colors.GREY;
  // 当一个顶点第一次被发现时，我们追踪其发现时间
  d[u] = ++time.count;
  const neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      // 当它是由引自顶点 u 的边而被发现的，我们追踪它的前溯点
      p[w] = u;
      DFSVisit(w, color, d, f, p, time, adjList);
    }
  }
  color[u] = Colors.BLACK;
  // 最后，当这个顶点被完全探索后，我们追踪其完成 时间
  f[u] = ++time.count;
};
```

深度优先算法背后的思想是什么?边是从最近发现的顶点 u 处被向外探索的。只有连接到未发现的顶点的边被探索了。当 u 所有的边都被探索了，该算法回退到 u 被发现的地方去探索其他的边。这个过程持续到我们发现了所有从原始顶点能够触及的顶点。如果还留有任何其他未被 发现的顶点，我们对新源顶点重复这个过程。重复该算法，直到图中所有的顶点都被探索了。

对于改进过的深度优先搜索，有两点需要我们注意:

- 时间（time）变量值的范围只可能在图顶点数量的一倍到两倍（2|V|）之间；
- 对于所有的顶点 u，`d[u]<f[u]`(意味着，发现时间的值比完成时间的值小，完成时间意思是所有顶点都已经被探索过了)。

在这两个假设下，有如下的规则：
`1 <= d [u] < f [u] <= 2|V|`

如果对同一个图再跑一遍新的深度优先搜索方法，对图中每个顶点，我们会得到如下的发现/完成时间：

![深度优先算法发现/完成时间](/img/graph-depth-first-search-time.svg)

#### 2. 拓扑排序——使用深度优先搜索

给定下图，假定每个顶点都是一个需要去执行的任务：

![拓扑排序](/img/graph-dfs-topological-sort.svg)

:::info
这是一个有向图，意味着任务的执行是有顺序的。例如：任务 F 不能在任务 A 之前执行。注意这个图没有环，意味着这是一个无环图。所以，我们可以说该图 是一个有向无环图（DAG）。
:::

当我们需要编排一些任务或步骤的执行顺序时，这称为拓扑排序(topological sorting、topsort 或 toposort)。在日常生活中，这个问题在不同情形下都会出现。例如，当我们 开始学习一门计算机科学课程，在学习某些知识之前得按顺序完成一些知识储备(你不可以在上算法 I 课程前先上算法 II 课程)。

拓扑排序只能应用于 DAG。那么，如何使用深度优先搜索来实现拓扑排序呢?

```js
graph = new Graph(true); // 有向图
myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');
const result = DFS(graph);
```

这段代码将创建图，添加边，执行改进版本的深度优先搜索算法，并将结果保存到 `result` 变量。下图展示了深度优先搜索算法执行后，该图的发现和完成时间：

![拓扑排序发现和完成时间](/img/graph-dfs-topological-sort-time.svg)

现在要做的仅仅是以倒序来排序完成时间数组，这便得出了该图的拓扑排序，如下所示：

```js
const fTimes = result.finished;
s = '';
for (let count = 0; count < myVertices.length; count++) {
  let max = 0;
  let maxName = null;
  for (i = 0; i < myVertices.length; i++) {
    if (fTimes[myVertices[i]] > max) {
      max = fTimes[myVertices[i]];
      maxName = myVertices[i];
    }
  }
  s += ' - ' + maxName;
  delete fTimes[maxName];
}
console.log(s);
```

执行了上述代码后，会输出 `B-A-D-C-F-E`。

注意之前的拓扑排序结果仅是多种可能性之一。如果我们稍微修改一下算法，就会有不同的结果。比如下面这个结果也是众多其他可能性中的一个。

`A-B-C-D-F-E`

这也是一个可以接受的结果。

## 最短路径算法

设想你要从街道地图上的 A 点出发，通过可能的最短路径到达 B 点。我们可以用图来解决这个问题，相应的算法被称为最短路径。有两种非常著名的算法，即 Dijkstra 算法和 Floyd-Warshall 算法。

### Dijkstra 算法

Dijkstra 算法是一种计算从单个源到所有其他源的最短路径的[贪心算法](../algorithms/greedy.md)

![Dijkstra 算法](/img/graph-dijkstra-algorithm.svg)

来看看如何找到顶点 A 和其余顶点之间的最短路径。首先需要声明表示上图的邻接矩阵，如下所示：

```js
const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 1, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
];
```

通过下面的代码来看看 Dijkstra 算法是如何工作的：

```js
const INF = Number.MAX_SAFE_INTEGER;

const dijkstra = (graph, src) => {
  const dist = [];
  const visited = [];
  const { length } = graph;
  // 首先，把所有的距离（dist）初始化为无限大（最大安全整数），将 visited[] 初始化为 false。
  for (let i = 0; i < length; i++) {
    dist[i] = INF;
    visited[i] = false;
  }
  // 然后，把源顶点到自己的距离设为 0
  dist[src] = 0;
  // 接下来，要找出到其余顶点的最短路径。
  for (let i = 0; i < length - 1; i++) {
    // 为此，需要从尚未处理的顶点中选出距离最近的顶点
    const u = minDistance(dist, visited);
    // 把选出的顶点标为 visited，以免重复计算
    visited[u] = true;
    for (let v = 0; v < length; v++) {
      if (!visited[v] && graph[u][v] !== 0 && dist[u] !== INF && dist[u] + graph[u][v] < dist[v]) {
        // 如果找到更短的路径，则更新最短路径的值
        dist[v] = dist[u] + graph[u][v];
      }
    }
  }
  // 处理完所有顶点后，返回从源顶点（src）到图中其他顶点最短路径的结果
  return dist;
};
```

要计算顶点间的 minDistance，就要搜索 dist 数组中的最小值，返回它在数组中的索引。

```js
const minDistance = (dist, visited) => {
  let min = INF;
  let minIndex = -1;
  for (let v = 0; v < dist.length; v++) {
    if (visited[v] === false && dist[v] <= min) {
      min = dist[v];
      minIndex = v;
    }
  }
  return minIndex;
};
// 图执行以上算法，会得到如下输出。
/*
0 0
1 2
2 4
3 6
4 4
5 6
*/
```

:::info
也可以修改算法，将最短路径的值和路径一同返回。
:::

### Floyd-Warshall 算法

Floyd-Warshall 算法是一种计算图中所有最短路径的[动态规划算法](../algorithms/dynamic-programming.md)。通过该算法可以找出从所有源到所有顶点的最短路径。

Floyd-Warshall 算法实现如下所示：

```js
const floydWarshall = (graph) => {
  const dist = [];
  const { length } = graph;
  // 首先，把 distance 数组初始化为每个顶点之间的权值
  for (let i = 0; i < length; i++) {
    dist[i] = [];
    for (let j = 0; j < length; j++) {
      if (i === j) {
        // 顶点到自身的距离为 0
        dist[i][j] = 0;
      } else if (!isFinite(graph[i][j])) {
        // 如果两个顶点之间没有边，就将其表示为 Infinity
        dist[i][j] = Infinity;
      } else {
        // i 到 j 可能的最短距离就是这些顶点间的权值
        dist[i][j] = graph[i][j];
      }
    }
  }
  // 将顶点 0 到 k 作为中间点，从 i 到 j 的最短 路径经过 k
  for (let k = 0; k < length; k++) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        // 给出的公式用来计算通过顶点 k 的 i 和 j 之间的最短路径（是 Floyd-Warshall 算法的核心）
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          // 如果一个最短路 径的新的值被找到，我们要使用并存储它
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist;
};
```

对开始的图数据执行以上算法，会得到如下输出：

```
0   2   4   6   4   6
INF 0   2   4   2   4
INF INF 0   6   3   5
INF INF INF 0   INF 2
INF INF INF 3   0   2
INF INF INF INF INF 0
```

这里的 INF 代表顶点 i 到 j 的最短路径不存在。

## 最小生成树

最小生成树(MST)问题是网络设计中常见的问题。想象一下，你的公司有几间办公室，要以最低的成本实现办公室电话线路相互连通，以节省资金，最好的办法是什么?

可以用 MST 算法来解决，其中的办公室可以表示为图中的一个顶点，边代表成本。下面有一个图的例子，其中较粗的边是一个 MST 的解决方案。

![最小生成树](/img/graph-mst.svg)

两种主要的求最小生成树的算法：Prim 算法和 Kruskal 算法。

### Prim 算法

Prim 算法是一种求解加权无向连通图的 MST 问题的[贪心算法](../algorithms/greedy.md)。它能找出一个边的子集，使得其构成的树包含图中所有顶点，且边的权值之和最小。

```js
const INF = Number.MAX_SAFE_INTEGER;
const minKey = (graph, key, visited) => {
  // Initialize min value
  let min = INF;
  let minIndex = 0;
  for (let v = 0; v < graph.length; v++) {
    if (visited[v] === false && key[v] < min) {
      min = key[v];
      minIndex = v;
    }
  }
  return minIndex;
};

prim = (graph) => {
  const parent = [];
  const key = [];
  const visited = [];
  const { length } = graph;
  // 首先，把所有顶点（key）初始化为无限大
  for (let i = 0; i < length; i++) {
    key[i] = INF;
    visited[i] = false;
  }
  // 其次，选择第一个 key 作为第一个顶点，同时，因为第一个顶点总是 MST 的根节点，所以 parent[0] = -1
  key[0] = 0;
  parent[0] = -1;
  // 然后，对所有顶点求 MST
  for (let i = 0; i < length - 1; i++) {
    // 从未处理的顶点集合中选出 key 值最小的顶点
    // 与 Dijkstra 算法中使用的minDistance 函数一样，只是名字不同
    const u = minKey(graph, key, visited);
    // 把选出的顶点标为 visited，以免重复计算
    visited[u] = true;
    for (let v = 0; v < length; v++) {
      // 如果得到更小的权值，则保存 MST 路径（parent）并更新其权值
      if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
        parent[v] = u;
        key[v] = graph[u][v];
      }
    }
  }
  // 处理完所有顶点后，返回包含 MST 的结果
  return parent;
};
```

### Kruskal 算法

和 Prim 算法类似，Kruskal 算法也是一种求加权无向连通图的 MST 的[贪心算法](../algorithms/greedy.md)。

```js
const INF = Number.MAX_SAFE_INTEGER;

//  find 函数的定义。它能防止 MST 出现环路
const find = (i, parent) => {
  while (parent[i]) {
    i = parent[i];
  }
  return i;
};

const union = (i, j, parent) => {
  if (i !== j) {
    parent[j] = i;
    return true;
  }
  return false;
};

const initializeCost = (graph) => {
  const cost = [];
  const { length } = graph;
  for (let i = 0; i < length; i++) {
    cost[i] = [];
    for (let j = 0; j < length; j++) {
      if (graph[i][j] === 0) {
        cost[i][j] = INF;
      } else {
        cost[i][j] = graph[i][j];
      }
    }
  }
  return cost;
};
export const kruskal = (graph) => {
  const { length } = graph;
  const parent = [];
  let ne = 0;
  let a;
  let b;
  let u;
  let v;
  // 首先，把邻接矩阵的值复制到 cost 数组，以方便修改且可以保留原始值行
  const cost = initializeCost(graph);
  // 当 MST 的边数小于顶点总数减 1 时
  while (ne < length - 1) {
    // 找出权值最小的边
    for (let i = 0, min = INF; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (cost[i][j] < min) {
          min = cost[i][j];
          a = u = i;
          b = v = j;
        }
      }
    }
    // 下面两行检查 MST 中是否已存在这条边，以避免环路
    u = find(u, parent);
    v = find(v, parent);
    // 如果 u 和 v 是不同的边，则将其加入 MST
    if (union(u, v, parent)) {
      ne++;
    }
    // 从列表中移除这些边，以免重复计算
    cost[a][b] = cost[b][a] = INF;
  }
  // 返回 MST
  return parent;
};
```
