---
id: tree
title: 树 Tree
---

**树**（tree）是一种抽象数据类型（ADT）或是实现这种抽象数据类型的数据结构，用来模拟具有树状结构性质的数据集合。

:::tip
哈希表和树都是非顺序数据结构。
:::

## 树的相关术语

一个树结构包含一系列存在父子关系的节点。每个节点都有一个**父节点**(除了顶部的第一个 节点)以及零个或多个**子节点**：

![树的相关术语图](/img/tree-introduction.svg)

- 位于树顶部的节点叫作**根节点**(11)。它没有父节点。
- 树中的每个元素都叫作**节点**，节点分为**内部节点**和**外部节点**。至少有一个子节点的节点称为内部节点(7、5、9、15、13 和 20 是内部 节点)。没有子元素的节点称为外部节点或叶节点(3、6、8、10、12、14、18 和 25 是叶节点)。
- 一个节点可以有祖先和后代。一个节点(除了根节点)的祖先包括父节点、祖父节点、曾祖 父节点等。一个节点的后代包括子节点、孙子节点、曾孙节点等。例如，节点 5 的祖先有节点 7 和节点 11，后代有节点 3 和节点 6。
- 有关树的另一个术语是**子树**。子树由节点和它的后代构成。例如，节点 13、12 和 14 构成了上图中树的一棵子树。
- 节点的一个属性是**深度**，节点的深度取决于它的祖先节点的数量。比如，节点 3 有 3 个祖先 节点(5、7 和 11)，它的深度为 3。
- **树的高度**取决于所有节点深度的最大值。一棵树也可以被分解成层级。根节点在第 0 层，它 的子节点在第 1 层，以此类推。上图中的树的高度为 3(最大高度已在图中表示——第 3 层)。

## 二叉树和二叉搜索树

**二叉树**中的节点最多只能有两个子节点：一个是左侧子节点，另一个是右侧子节点。这个定义有助于我们写出更高效地在树中插入、查找和删除节点的算法。

**二叉搜索树**（BST）是二叉树的一种，但是只允许在左侧节点存储(比父节点)小的值，在右侧节点存储(比父节点)大的值。上一节的图中就展现了一棵二叉搜索树。

### 实现二叉搜索树

创建 Node 类来表示二叉搜索树中的每个节点，代码如下：

```js
class Node {
  constructor(key) {
    this.key = key; // 节点值
    this.left = null; // 左侧子节点引用
    this.right = null; // 右侧子节点引用
  }

  toString() {
    return `${this.key}`;
  }
}
```

下图展现了二叉搜索树数据结构的组织方式：

![二叉搜索树数据结构图](/img/tree-binary-search-tree.svg)

和链表一样，通过指针(引用)来表示节点之间的关系(树相关的术语称其为边)。在双向链表中，每个节点包含两个指针，一个指向下一个节点，另一个指向上一个节点。对于树，使用同样的方式(也使用两个指针)，但是一个指向左侧子节点，另一个指向右侧子节点。因此，将声明一个 Node 类来表示树中的每个节点。

:::tip
值得注意的一个小细节是，一般将节点本身称作节点或项，但在树中也称其为键。键是树相关的术语中对节点的称呼。
:::

下面是将要在 BinarySearchTree 类中实现的方法：

- `insert(key)`：向树中插入一个新的键。
- `search(key)`：在树中查找一个键。如果节点存在，则返回 true;如果不存在，则返回 false。
- `inOrderTraverse()`：通过中序遍历方式遍历所有节点。
- `preOrderTraverse()`：通过先序遍历方式遍历所有节点。
- `postOrderTraverse()`：通过后序遍历方式遍历所有节点。
- `min()`：返回树中最小的值/键。
- `max()`：返回树中最大的值/键。
- `remove(key)`：从树中移除某个键。

```js
// 对比常量
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};
// 对比函数
function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

/* 之前定义的 Node 节点类 */

/**
 * 二叉搜索树
 */
class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    // 用来比较节点值
    this.compareFn = compareFn;
    // Node 类型的根节点 undefined | null
    this.root = undefined;
  }

  /**
   * 向二叉搜索树中插入一个节点
   */
  insert(key) {
    // 要向树中插入一个新的节点(或键)，要经历三个步骤
    // 第一步是验证插入操作是否是特殊情况。
    // 插入的树节点是否为第一个节点。
    if (this.root == null) {
      // 如果为空，则创建一个 Node 类的实例并将它赋值给 root 属性来将 root 指向这个新节点
      this.root = new Node(key);
    } else {
      // 第二步是将节点添加到根节点以外的其他位置。在这种情况下，需要一个辅助方法（insertNode）
      // 如果树非空，需要找到插入新节点的位置。因此，在调用 insertNode 方法时要通过参数传入树的根节点和要插入的节点
      this.insertNode(this.root, key);
    }
  }

  /**
   * 插入节点时找到新节点应该插入的正确位置
   *
   */
  insertNode(node, key) {
    // 1. 如果新节点的键小于当前节点的键(第一次为根节点)
    // 由于键可能是复杂的对象而不是数，使用传入 compareFn 函数来比较值
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // 1.1 较小则需要插入到左侧，检查当前节点的左侧子节点
      if (node.left == null) {
        // 如果它没有左侧子节点，则插入新的节点
        node.left = new Node(key);
      } else {
        // 1.2 如果有左侧子节点，需要通过递归调用 insertNode 方法继续找到树的下一层
        // 下次递归要比较的节点将会是当前节点的左侧子节点(左侧节点子树) node.left
        this.insertNode(node.left, key);
      }
    } else if (node.right == null) {
      // 2. 如果节点的键比当前节点的键大，同时当前节点没有右侧子节点
      // 就在当前位置插入新的节点
      node.right = new Node(key);
    } else {
      // 2.1 如果节点的键比当前节点的键大，且有右侧子节点
      // 需要递归调用 insertNode 方法，要用来和新节点比较的节点将会是右侧子节点(右侧节点子树) node.right
      this.insertNode(node.right, key);
    }
  }
}
```

## 树的遍历

遍历一棵树是指访问树的每个节点并对它们进行某种操作的过程。访问树的所有节点有三种方式：**中序**、**先序**和**后序**。

### 中序遍历

**中序遍历**是一种以上行顺序访问 BST 所有节点的遍历方式，也就是以从最小到最大的顺序访问所有节点。中序遍历的其中一种应用就是对树进行排序操作。下面来看看它的实现：

```js
  /**
   * 中序遍历方法接收一个回调函数，用来定义我们对遍历到的每节点进行的操作
   */
  inOrderTraverse(callback) {
    // 由于在 BST 中最常实现的算法是递归
    // 因此需要一个辅助方法（inOrderTraverseNode）来接收一个节点和对应的回调函数作为参数
    this.inOrderTraverseNode(this.root, callback);
  }

  /**
   * 函数接收 node 和 callback
   */
  inOrderTraverseNode(node, callback) {
    // 1. 首先要检查以参数节点是否为 null(也是停止递归继续执行的判断条件，即递归算法的基线条件)
    if (node != null) {
      // 2. 递归调用相同的函数来访问左侧子节点
      this.inOrderTraverseNode(node.left, callback);
      // 3. 接着对根节点(行{4})进行一些操作(callback)
      callback(node.key);
      // 4. 然后再访问右侧子节点
      this.inOrderTraverseNode(node.right, callback);
    }
  }
```

下图描绘了 `inOrderTraverse` 方法的访问路径，输出顺序为 _3 5 6 7 8 9 10 11 12 13 14 15 18 20 25_：

![中序遍历图](/img/tree-in-order-traverse.svg)

:::tip
使用回调函数用来定义每节点进行的操作（这也叫作访问者模式，要了解更多关于访问者模式的信息，请参考[维基百科](http://en.wikipedia.org/wiki/Visitor_pattern)）
:::

### 先序遍历

**先序遍历**是以优先于后代节点的顺序访问每个节点的。先序遍历的其中一种应用是打印一个结构化的文档。代码实现如下：

```js
  /**
   *先序遍历
   */
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  /**
   * 接收 node 和 callback
   */
  preOrderTraverseNode(node, callback) {
    if (node != null) {
      // 先序遍历和中序遍历的不同点是，先序遍历会先访问节点本身
      callback(node.key);
      // 然后再访问它的左侧子节点
      this.preOrderTraverseNode(node.left, callback);
      // 最后是右侧子节点
      this.preOrderTraverseNode(node.right, callback);
    }
  }
```

下图描绘了 `preOrderTraverseNode` 方法的访问路径，输出顺序为 _11 7 5 3 6 9 8 10 15 13 12 14 20 18 25_：

![前序遍历图](/img/tree-pre-order-traverse.svg)

### 后序遍历

**后序遍历**则是先访问节点的后代节点，再访问节点本身。后序遍历的其中一种应用是计算一个目录及其子目录中所有文件所占空间的大小。代码实现如下：

```js
  /**
   * 后序遍历
   */
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  /**
   * 接收 node 和 callback
   */
  postOrderTraverseNode(node, callback) {
    if (node != null) {
      // 后序遍历会先访问左侧子节点
      this.postOrderTraverseNode(node.left, callback);
      // 然后是右侧子节点，
      this.postOrderTraverseNode(node.right, callback);
      // 最后是父节点本身
      callback(node.key);
    }
  }
```

下图描绘了 `postOrderTraverseNode` 方法的访问路径，输出顺序为 _3 6 5 8 10 9 7 12 14 13 18 25 20 15 11_：

![后序遍历图](/img/tree-post-order-traverse.svg)

:::tip
三种遍历方式的实现方式是很相似的，唯一不同的是访问父节点、左侧子节点和右侧子节点的顺序。
:::

## 搜索树中的值

在树中，有三种经常执行的搜索类型：搜索最小值、搜索最大值、搜索特定的值。

### 搜索最小值和最大值

以下面的树作为示例：

![搜索树的最小值和最大值](/img/tree-search-min-and-max.svg)

观察上图可知树最后一层最左侧的节点，它的值为 3，是这棵树中最小的键。而树最右端的节点(同样是树的最后一层)，它的值为 25，是这棵树中最大的 键。这两个信息在实现搜索树节点的最小值和最大值的方法时会很大的帮助。

下面，来看看寻找树的最小值和最大值的方法：

```js
  /**
   * min 方法将会暴露给用户，调用了 minNode 方法
   */
  min() {
    // 调用 minNode，传入树的根节点
    return this.minNode(this.root);
  }

  /**
   * 该方法可以从树中任意一个节点（接收 node）开始寻找，直到找到一棵树或其子树中最小的键
   */
  minNode(node) {
    let current = node;
    // 遍历树的左边，直到找到树的最下层(最左端)
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

  /**
   * 获取最大值
   */
  max() {
    return this.maxNode(this.root);
  }

  /**
   * 接收 node，返回最大值
   */
  maxNode(node) {
    let current = node;
    // 沿着树的右边进行遍历，直到找到最右端的节点
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }
```

### 搜索一个特定的值

在 BST 中实现搜索的方法：

```js
  /**
   * 根据传入值搜索树节点
   */
  search(key) {
    // 调用 searchNode 方法，传入跟节点（root） 和 搜索值（key）
    return this.searchNode(this.root, key);
  }

  /**
   * 搜索一棵树或其任意子树中的一个特定的值
   */
  searchNode(node, key) {
    // 验证作为参数传入的 node 是否合法(不是 null 或 undefined)
    if (node == null) {
      // 如果是的话，说明要找的键没有找到，返回 false
      return false;
    }
    // 如果传入的节点不是 null，需要继续验证
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // 如果要找的键比当前的节点小，继续在左侧的子树上搜索
      return this.searchNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      // 如果要找的键比当前的节点大，从右侧子 节点开始继续搜索
      return this.searchNode(node.right, key);
    }
    // 否则就说明要找的键和当前节点的键相等，返回 true 来表示找到了这个键
    return true;
  }
```

### 移除一个节点

要在 BST 中实现 `remove` 方法。这是二叉搜索树中要实现的最复杂的方法。先创建这个方法，使它能够在树的实例上被调用：

```js
  /**
   * 移除节点，接收要移除的键
   */
  remove(key) {
    // 调用 removeNode 方法，传入 root 和要移除的键作为参数
    this.root = this.removeNode(this.root, key);
  }

  /**
   * 移除节点任意节点，接收 node 和 key
   * removeNode 方法的复杂之处在于要处理不同的运行场景，当然也因为它是通过递归来实现的
   */
  removeNode(node, key) {
    // 1. 节点为 null
    if (node == null) {
      // 说明键不存在于树中，所以返回 undefined | null
      return undefined;
    }
    // 2. 不为 null，需要在树中找到要移除的键
    // 比较键大小
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // 2.1 如果要找的键比当前节点的值小
      // 就沿着树的左边找到下一个节点
      node.left = this.removeNode(node.left, key);
      // 更新了节点左指针的值，返回了更新后的节点
      return node;
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      // 2.2 如果要找的键比当前节点的值大
      // 沿着树的右边找到下一个节点
      node.right = this.removeNode(node.right, key);
      // 更新了节点右指针的值，返回了更新后的节点
      return node;
    }
    // 3. 如果找到了要找的键(键和 node.key 相等)
    // 就需要处理三种不同的情况
    // 1 - 该节点是一个叶子节点
    // 2 - 该节点只包含一个子节点
    // 3 - 该节点有两个子节点

    // 3.1 第一个种情况：移除一个叶节点
    // 该节点是一个没有左侧或右侧子节点的叶节点
    if (node.left == null && node.right == null) {
      // 给这个节点赋予 null 值来移除它，还需要处理引用(指针)
      // 这个节点没有任何子节点，但它有一个父节点，需通过返回 null 来将对应的父节点指针赋为 null 值
      node = undefined;
      return node;
    }
    // 3.2 第二个种情况：移除有一个左侧子节点或右侧子节点的节点
    // 这种情况下，需要跳过这个节点，直接将父节点指向它的指针指向子节点
    if (node.left == null) {
      // 如果这个节点没有左侧子节点，也就是说它有一个右侧子节点
      // 因此我们把对它 的引用改为对它右侧子节点的引用
      node = node.right;
      // 并返回更新后的节点
      return node;
    } else if (node.right == null) {
      // 如果这个节点没有右侧子节点
      // 也一样把对它的引用改为对它左侧子节点的引用
      node = node.left;
      // 并返回更新后的值
      return node;
    }
    // 3.3 第三个种情况：移除有两个子节点的节点
    // 最复杂的情况，那就是要移除的节点有两个子节点（左侧子节点和右侧子节点）
    // 要移除有两个子节点的节点，需要执行四个步骤：
    // 3.3.1 当找到了要移除的节点后，需要找到它右边子树中最小的节点(它的继承者)。
    const aux = this.minNode(node.right);
    // 3.3.2 然后，用它右侧子树中最小节点的键去更新这个节点的值
    // 通过这一步改变了这个节点的键，也就是说它被移除了
    node.key = aux.key;
    // 3.3.3 但是，在树中就有两个拥有相同键的节点了，这是不行的
    // 要继续把右侧子树中的最小节点移除，毕竟它已经被移至要移除的节点的位置了
    node.right = this.removeNode(node.right, aux.key);
    // 3.3.4 最后，向它的父节点返回更新后节点的引用
    return node;
  }
```

下图展现了移除一个叶节点的过程：

![移除一个叶子节点的过程图](/img/tree-remove-a-leaf-node.svg)

下图展现了移除只有一个左侧子节点或右侧子节点的节点的过程：

![移除只有一个子节点的节点的过程图](/img/tree-remove-a-node-with-only-one-child.svg)

下图展现了移除只有一个左侧子节点或右侧子节点的节点的过程：

![移除移除有两个子节点的节点的过程图](/img/tree-remove-a-node-with-two-children.svg)

## 二叉搜索树（BinarySearchTree）的完整实现

```js
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};
// 对比函数
function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

class Node {
  constructor(key) {
    this.key = key; // 节点值
    this.left = null; // 左侧子节点引用
    this.right = null; // 右侧子节点引用
  }

  toString() {
    return `${this.key}`;
  }
}

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = undefined;
  }

  insert(key) {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else if (node.right == null) {
      node.right = new Node(key);
    } else {
      this.insertNode(node.right, key);
    }
  }

  /**
   * 获取根节点
   */
  getRoot() {
    return this.root;
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (node == null) {
      return false;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key);
    }
    return true;
  }

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  min() {
    return this.minNode(this.root);
  }

  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

  max() {
    return this.maxNode(this.root);
  }

  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (node == null) {
      return undefined;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    // key is equal to node.item
    // handle 3 special conditions
    // 1 - a leaf node
    // 2 - a node with only 1 child
    // 3 - a node with 2 children
    // case 1
    if (node.left == null && node.right == null) {
      node = undefined;
      return node;
    }
    // case 2
    if (node.left == null) {
      node = node.right;
      return node;
    } else if (node.right == null) {
      node = node.left;
      return node;
    }
    // case 3
    const aux = this.minNode(node.right);
    node.key = aux.key;
    node.right = this.removeNode(node.right, aux.key);
    return node;
  }
}
```

## 自平衡树

BST 存在一个问题：取决于你添加的节点数，树的一条边可能会非常深；也就是说，树的一条分支会有很多层，而其他的分支却只有几层，如下图所示：

![二叉搜索树的局限](/img/tree-binary-search-tree-limitation.svg)

这会在需要在某条边上添加、移除和搜索某个节点时引起一些性能问题。为了解决这个问题， 有一种树叫作 Adelson-Velskii-Landi 树(AVL 树)。AVL 树是一种自平衡二叉搜索树，意思是任何一个节点左右两侧子树的高度之差最多为 1。

### Adelson-Velskii-Landi 树（AVL 树）

**AVL 树**是一种自平衡树。添加或移除节点时，AVL 树会尝试保持自平衡。任意一个节点（不论深度）的左子树和右子树高度最多相差 1。添加或移除节点时，AVL 树会尽可能尝试转换为完全树。

- AVL 树是一个 BST，我们可以扩展 BST 类，只需要覆盖用来维持 AVL 树平衡的方法，也就是 `insert`、`insertNode` 和 `removeNode` 方法。所有其他的 BST 方法将会被 AVLTree 类继承。
- 在 AVL 树中插入或移除节点和 BST 完全相同。然而，AVL 树的不同之处在于我们需要检验 它的平衡因子，如果有需要，会将其逻辑应用于树的自平衡。

创建 AVLTree 类开始，声明如下：

```js
class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }
}
```

既然 AVL 树是一个 BST，我们可以扩展我们写的 BST 类，只需要覆盖用来维持 AVL 树平衡 的方法，也就是 `insert`、`insertNode` 和 `removeNode` 方法。其他的 BST 方法将会被 AVLTree 类继承。

在 AVL 树中插入或移除节点和 BST 完全相同。然而，AVL 树的不同之处在于我们需要检验它的**平衡因子**，如果有需要，会将其逻辑应用于树的自平衡。

首先需要学习 AVL 树的术语和它的旋转操作：

**1. 节点的高度和平衡因子**

节点的高度是从节点到其任意子节点的边的最大值。下图展示了一个包含每个节点高度的树：

![AVL 节点的高度](/img/tree-avl-height.svg)

计算一个节点高度的代码如下。

```js
getNodeHeight(node) {
  if (node == null) {
    return -1;
  }
  // 递归找到最大高度
  return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
}
```

在 AVL 树中，需要对每个节点计算右子树高度（hr）和左子树高度（hl）之间的差值，该 值(`hr - hl`)应为 `0`、`1` 或 `-1`。如果结果不是这三个值之一，则需要平衡该 AVL 树。这就是**平衡因子**的概念。

下图举例说明了一些树的平衡因子(所有的树都是平衡的)：

![AVL 平衡因子](/img/tree-avl-balance-factor.svg)

遵循计算一个节点的平衡因子并返回其值的代码如下：

```js
// 为了避免直接在代码中处理平衡因子的数值，创建一个用来作为计数器的常量
const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5,
};

getBalanceFactor(node) {
  // left - right
  const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  switch (heightDifference) {
    case -2:
      return BalanceFactor.UNBALANCED_RIGHT;
    case -1:
      return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
    case 1:
      return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
    case 2:
      return BalanceFactor.UNBALANCED_LEFT;
    default:
      return BalanceFactor.BALANCED;
  }
}
```

下面介绍下每个 `heightDifference` 表示什么：

**2. 平衡操作——AVL 旋转**

在对 AVL 树添加或移除节点后，我们要计算节点的高度并验证树是否需要进行平衡。向 AVL 树插入节点时，可以执行单旋转或双旋转两种平衡操作，分别对应四种场景：

- 左——左(LL)：向右的单旋转
- 右——右(RR)：向左的单旋转
- 左——右(LR)：向右的双旋转（先 LL 旋转，再 RR 旋转）
- 右——左(RL)：向左的双旋转（先 RR 旋转，再 LL 旋转）

**2.1 左——左(LL)：向右的单旋转：**这种情况出现于节点的左侧子节点的高度大于右侧子节点的高度时，并且左侧子节点也是平 衡或左侧较重的，如下图所示：

![AVL 向右的单旋转](/img/tree-avl-rotate-ll.svg)

来看一个实际的例子，如下图所示：

![AVL 向右的单旋转实例](/img/tree-avl-rotate-ll-sample.svg)

假设向 AVL 树插入节点 5，这会造成树失衡（节点 50-Y 高度为 +2），需要恢复树的平衡。下面是我们执行的操作:

- 与平衡操作相关的节点有三个(X、Y、Z)，将节点 X 置于节点 Y（平衡因子为+2）所在的位置（行 1）；
- 节点 X 的左子树保持不变;
- 将节点 Y 的左子节点置为节点 X 的右子节点 Z（行 2）；
- 将节点 X 的右子节点置为节点 Y（行 3）。

下面的代码举例说明了整个过程：

```js
rotationLL(node) {
  const tmp = node.left; // 1
  node.left = tmp.right; // 2
  tmp.right = node; // 3
  return tmp;
}
```

**2.2 右——右(RR)：向左的单旋转：**这种情况和左——左的情况相反。它出现于右侧子节点的高度大于左侧子节点的高度，并且
右侧子节点也是平衡或右侧较重的，如下图所示：

![AVL 向左的单旋转](/img/tree-avl-rotate-rr.svg)

来看一个实际的例子，如下图所示：

![AVL 向左的单旋转例子](/img/tree-avl-rotate-rr-sample.svg)

假设向 AVL 树插入节点 90，这会造成树失衡（节点 50-Y 高度为 -2），因此需要恢复树的平衡。下面是我们执行的操作：

- 与平衡操作相关的节点有三个(X、Y、Z)，将节点 X 置于节点 Y（平衡因子为 -2）所在 的位置（行 1）；
- 节点 X 的右子树保持不变；
- 将节点 Y 的右子节点置为节点 X 的左子节点 Z(行 2)；
- 将节点 X 的左子节点置为节点 Y(行{3})。

```js
function rotationRR(node) {
  const tmp = node.right; // 1
  node.right = tmp.left; // 2
  tmp.left = node; // 3
  return tmp;
}
```

**2.3 左——右(LR)：向右的双旋转：** 这种情况出现于左侧子节点的高度大于右侧子节点的高度，并且左侧子节点右侧较重。在这种情况下，我们可以对左侧子节点进行左旋转来修复，这样会形成左——左的情况，然后再对不平衡的节点进行一个右旋转来修复，如下图所示：

![AVL 向右的双旋转](/img/tree-avl-rotate-lr.svg)

来看一个实际的例子，如下图所示：

![AVL 向右的双旋转实例](/img/tree-avl-rotate-lr-sample.svg)

假设向 AVL 树插入节点 75，这会造成树失衡（节点 70-Y 高度为 -2），需要恢复树的平衡。下面是我们执行的操作：

- 将节点 X 置于节点 Y（平衡因子为 -2）所在的位置;
- 将节点 Z 的左子节点置为节点 X 的右子节点；
- 将节点 Y 的右子节点置为节点 X 的左子节点；
- 将节点 X 的右子节点置为节点 Y；
- 将节点 X 的左子节点置为节点 Z。

基本上，就是先做一次 LL 旋转，再做一次 RR 旋转。下面的代码举例说明了整个过程：

```js
rotationLR(node) {
  node.left = this.rotationRR(node.left);
  return this.rotationLL(node);
}
```

**2.4 右——左(RL)：向左的双旋转：**这种情况和左——右的情况相反。这种情况出现于右侧子节点的高度大于左侧子节点的高度，并且右侧子节点左侧较重。在这种情况下我们可以对右侧子节点进行右旋转来修复，这样会 形成右——右的情况，然后我们再对不平衡的节点进行一个左旋转来修复，如下图所示：

![AVL 向左的双旋转](/img/tree-avl-rotate-rl.svg)

来看一个实际的例子，如下图所示：

![AVL 向左的双旋转实例](/img/tree-avl-rotate-rl-sample.svg)

假设向 AVL 树插入节点 35，这会造成树失衡(节点 50-Y 高度为 +2)，需要恢复树的平衡。下面是我们执行的操作：

- 将节点 X 置于节点 Y（平衡因子为 +2）所在的位置；
- 将节点 Y 的左子节点置为节点 X 的右子节点；
- 将节点 Z 的右子节点置为节点 X 的左子节点；
- 将节点 X 的左子节点置为节点 Y；
- 将节点 X 的右子节点置为节点 Z。

基本上，就是先做一次 RR 旋转，再做一次 LL 旋转。 下面的代码举例说明了整个过程：

```js
rotationRL(node) {
  node.right = this.rotationLL(node.right);
  return this.rotationRR(node);
}
```

**3. 向 AVL 树插入节点**

向 AVL 树插入节点和在 BST 中是一样的。除了插入节点外，我们还要验证插入后树是否还是平衡的，如果不是，就要进行必要的旋转操作。下面的代码向 AVL 树插入了一个新节点：

```js
insert(key) {
  this.root = this.insertNode(this.root, key);
}

insertNode(node, key) {
  // 像在 BST 树中一样插入节点
  if (node == null) {
    return new Node(key);
  } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
    node.left = this.insertNode(node.left, key);
  } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
    node.right = this.insertNode(node.right, key);
  } else {
    // 重复的键
    return node;
  }
  // 如果需要，将树进行平衡操作
  // 验证树是否平衡，然后对每种情况应用正确的旋转
  const balanceFactor = this.getBalanceFactor(node);
  if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
    // 如果在向左侧子树插入节点后树不平衡了
    // 需要比较是否插入的键小于左侧子节点的键
    if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
      // 如果是，我们要进行 LL 旋转
      node = this.rotationLL(node);
    } else {
      // 否则，要进行 LR 旋转
      return this.rotationLR(node);
    }
  }
  // 验证树是否平衡，然后对每种情况应用正确的旋转
  if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
    // 如果在向右侧子树插入节点后树不平衡了
    // 需要比较是否插入的键小于右侧子节点的键
    if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
      // 如果是，我们要进行 RR 旋转
      node = this.rotationRR(node);
    } else {
      // 否则，要进行 RL 旋转
      return this.rotationRL(node);
    }
  }
  return node;
}
```

**4. 从 AVL 树中移除节点**

从 AVL 树移除节点和在 BST 中是一样的。除了移除节点外，我们还要验证移除后树是否还 是平衡的，如果不是，就要进行必要的旋转操作。
下面的代码从 AVL 树移除了一个节点：

```js
removeNode(node, key) {
  // 既然 AVLTree 类是 BinarySearchTree 类的子类
  // 则也可以使用 BST 的 removeNode 方法来从 AVL 树中移除节点
  node = super.removeNode(node, key);
  if (node == null) {
    // null，不需要进行平衡
    return node;
  }
  // 检测树是否平衡
  // 使用递归计算以每个移除的节点为根的节点的平衡因子，然后需要对每种情况应用正确的旋转
  const balanceFactor = this.getBalanceFactor(node);
  if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
    // 如果在从左侧子树移除节点后树不平衡了（LL）
    // 如果左侧子树向左不平衡，要进行 LL 旋转
    // 计算左侧子树的平衡因子
    // const balanceFactorLeft = this.getBalanceFactor(node.left);
    if (
      this.getBalanceFactor(node.left) === BalanceFactor.BALANCED ||
      this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
    ) {
      return this.rotationLL(node);
    }
    // 如果左侧子树向右不平衡，要进行 LR 旋转
    if (this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
      return this.rotationLR(node.left);
    }
  }
  if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
    // 最后一种情况是：如果在从右侧子树移除节点后树不平衡了
    // 如果右侧子树向右不平衡，要进行 RR 旋转
    // 要计算右侧子树的平衡因子
    // const balanceFactorRight = this.getBalanceFactor(node.right);
    if (
      this.getBalanceFactor(node.right) === BalanceFactor.BALANCED ||
      this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
    ) {
      return this.rotationRR(node);
    }
    // 如果右侧子树向左不平衡，要进行 LR 旋转
    if (this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
      return this.rotationRL(node.right);
    }
  }
  return node;
}
```

### AVL 树（AVLTree）的完整实现

```js
// 通用方法引入
import { Compare, defaultCompare } from '../util';
import BinarySearchTree from './binary-search-tree';
import { Node } from './models/node';

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5,
};

class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }

  getNodeHeight(node) {
    if (node == null) {
      return -1;
    }
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  /**
   * Left left case: rotate right
   *
   *       b                           a
   *      / \                         / \
   *     a   e -> rotationLL(b) ->   c   b
   *    / \                             / \
   *   c   d                           d   e
   *
   * @param node Node<T>
   */
  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }

  /**
   * Right right case: rotate left
   *
   *     a                              b
   *    / \                            / \
   *   c   b   -> rotationRR(a) ->    a   e
   *      / \                        / \
   *     d   e                      c   d
   *
   * @param node Node<T>
   */
  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }

  /**
   * Left right case: rotate left then right
   * @param node Node<T>
   */
  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  /**
   * Right left case: rotate right then left
   * @param node Node<T>
   */
  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }

  getBalanceFactor(node) {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }

  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  insertNode(node, key) {
    if (node == null) {
      return new Node(key);
    } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node; // duplicated key
    }
    // verify if tree is balanced
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        // Left left case
        node = this.rotationLL(node);
      } else {
        // Left right case
        return this.rotationLR(node);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
        // Right right case
        node = this.rotationRR(node);
      } else {
        // Right left case
        return this.rotationRL(node);
      }
    }
    return node;
  }

  removeNode(node, key) {
    node = super.removeNode(node, key);
    if (node == null) {
      return node;
    }
    // verify if tree is balanced
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      // Left left case
      if (
        this.getBalanceFactor(node.left) === BalanceFactor.BALANCED ||
        this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      ) {
        return this.rotationLL(node);
      }
      // Left right case
      if (this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationLR(node.left);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      // Right right case
      if (
        this.getBalanceFactor(node.right) === BalanceFactor.BALANCED ||
        this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      ) {
        return this.rotationRR(node);
      }
      // Right left case
      if (this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationRL(node.right);
      }
    }
    return node;
  }
}
```

## 红黑树

和 AVL 树一样，**红黑树**也是一个自平衡二叉搜索树。我们学习了对 AVL 书插入和移除节点 可能会造成旋转，所以需要一个包含多次插入和删除的自平衡树，红黑树是比较好的。如果插入和删除频率较低（需要多次进行搜索操作），那么 AVL 树比红黑树更好。

在红黑树中，每个节点都遵循以下规则：

1. 顾名思义，每个节点不是红的就是黑的；
2. 树的根节点是黑的；
3. 所有叶节点都是黑的（用 NULL 引用表示的节点）；
4. 如果一个节点是红的，那么它的两个子节点都是黑的；
5. 不能有两个相邻的红节点，一个红节点不能有红的父节点或子节点；
6. 从给定的节点到它的后代节点(NULL 叶节点)的所有路径包含相同数量的黑色节点。

从创建 RedBlackTree 类开始，如下所示：

```js
class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }
}
```

由于红黑树也是二叉搜索树，可以扩展我们创建的二叉搜索树类并重写红黑树属性所需要的那些方法。先重写 insert 和 insertNode 方法：

**向红黑树中插入节点：**向红黑树插入节点和在二叉搜索树中是一样的。除了插入的代码，还要在插入后给节点应用一种颜色，并且验证树是否满足红黑树的条件以及是否还是自平衡的。

先定义红黑树的节点类：

```js
/**
 * 红黑树节点类，继承二叉搜索树的节点类
 */

class RedBlackNode extends Node {
  constructor(key) {
    super(key);
    // 键
    this.key = key;
    // 默认节点为红色
    this.color = Colors.RED;
    // 指向父节点的引用为 null
    this.parent = null;
  }

  isRed() {
    return this.color === Colors.RED;
  }
}
```

下面的代码向红黑树插入了新的节点：

```js
insert(key) {
  if (this.root == null) {
    // 1. 如果树是空的
    // 那么我们需要创建一个红黑树节点
    this.root = new RedBlackNode(key);
    // 为了满足规则 2（树的根节点是黑的）
    // 要将这个根节点的颜色设为黑色
    this.root.color = Colors.BLACK;
  } else {
    // 2. 如果树不是空的
    // 像二叉搜索树一样在正确的位置插入节点
    const newNode = this.insertNode(this.root, key);
    // 在这种情况下，insertNode 方法需要返回新插入的节点，
    // 这样可以验证在插入后，红黑树的规则是否得到了满足
    this.fixTreeProperties(newNode);
  }
}

/**
 * 重写的 insertNode 方法
 * 寻找正确的位置插入节点
 */
insertNode(node, key) {
  // 逻辑和二叉搜索树中的一样
  if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
    if (node.left == null) {
      node.left = new RedBlackNode(key);
      // 不同之处在于保存了指向被插入节点父节点的引用
      node.left.parent = node;
      // 并且返回了节点的引用
      return node.left;
    } else {
      return this.insertNode(node.left, key);
    }
  } else if (node.right == null) {
    node.right = new RedBlackNode(key);
    // 保存了指向被插入节点父节点的引用
    node.right.parent = node;
    // 并且返回了节点的引用
    return node.right;
  } else {
    return this.insertNode(node.right, key);
  }
}
```

**在插入节点后验证红黑树属性：**要验证红黑树是否还是平衡的以及满足它的所有要求，需要使用两个概念：重新填色和旋转。

在向树中插入节点后，新节点将会是红色。这不会影响黑色节点数量的规则(规则 6)，但 会影响规则 5：两个后代红节点不能共存。如果插入节点的父节点是黑色，那没有问题。但是如 果插入节点的父节点是红色，那么会违反规则 5。要解决这个冲突，我们只需要改变**父节点**、**祖父节点**和**叔节点**（因为同样改变了父节点的颜色）。

下图描述了这个过程：

![红黑树插入节点后重新填色](/img/tree-red-black-fix.svg)

下面是 fixTreeProperties 方法的代码。

```js
function fixTreeProperties(node) {
  // 从插入的节点开始，我们要验证它的父节点是否是红色
  // 以及这个节点是否不是黑色
  while (node && node.parent && node.parent.color.isRed() && node.color !== Colors.BLACK) {
    // 为了保证代码的可读性，我们要保存父节点
    let parent = node.parent;
    // 和祖父节点的引用
    const grandParent = parent.parent;
    // 接下来，需要验证父节点是左侧子节点（情形 A）还是右侧子节点（情形 B）
    // 情形A：父节点是左侧子节点
    if (grandParent && grandParent.left === parent) {
      const uncle = grandParent.right; // 由于也需要改变叔节点的颜色，需要一个指向它的引用
      // 对于情形 1A，只需要对节点重新填色，父节点是左侧还是右侧子节点没有什么影响
      // 情形1A：叔节点也是红色——只需要重新填色
      if (uncle && uncle.color === Colors.RED) {
        // 如果叔节点的颜色是红色，就改变祖父节点、父节点和叔节点的颜色
        grandParent.color = Colors.RED;
        parent.color = Colors.BLACK;
        uncle.color = Colors.BLACK;
        // 并且将当前节点的引用指向祖父节点，继续检查树是否有其他冲突
        node = grandParent;
      } else {
        // 情形 2A：节点是右侧子节点——左旋转
        // 情形 3A：节点是左侧子节点——右旋转
      }
    } else {
      // 情形B：父节点是右侧子节点
      const uncle = grandParent.left; // 由于也需要改变叔节点的颜色，需要一个指向它的引用
      // 情形 1B：叔节点是红色——只需要重新填色
      if (uncle && uncle.color === Colors.RED) {
        // 如果叔节点的颜色是红色，就改变祖父节点、父节点和叔节点的颜色
        grandParent.color = Colors.RED;
        parent.color = Colors.BLACK;
        uncle.color = Colors.BLACK;
        node = grandParent;
      } else {
        // 情形 2B：节点是左侧子节点——右旋转
        // 情形 3B：节点是右侧子节点——左旋转
      }
    }
  }
  // 为了保证根节点的颜色始终是黑色（规则 2），在代码最后设置根节点的颜色
  this.root.color = Colors.BLACK;
}
```

在节点的叔节点颜色为黑时，也就是说仅仅重新填色是不够的，树是不平衡的，那么需要进行旋转操作。

- 左——左（LL）：父节点是祖父节点的左侧子节点，节点是父节点的左侧子节点（情形 3A）。
- 左——右（LR）：父节点是祖父节点的左侧子节点，节点是父节点的右侧子节点（情形 2A）。
- 右——右（RR）：父节点是祖父节点的右侧子节点，节点是父节点的右侧子节点（情形 2A）。
- 右——左（RL）：父节点是祖父节点的右侧子节点，节点是父节点的左侧子节点（情形 2A）。

来看看情形 2A 和 3A：

```js
// 情形 2A：节点是右侧子节点——左旋转
if (node === parent.right) {
  // 如果父节点是左侧子节点并且节点是右侧子节点，需要进行两次旋转，首先是右——右旋转
  this.rotationRR(parent);
  // 并更新节点和父节点的引用
  node = parent;
  parent = node.parent;
}
// 情形 3A：节点是左侧子节点——右旋转
// 在第一次旋转后，要再次旋转，以祖父节点为基准
this.rotationLL(grandParent);
// 并在旋转过程中更新父节点和祖父节点的颜色
parent.color = Colors.BLACK;
grandParent.color = Colors.RED;
// 最后，我们更新当前节点的引用，以便继续检查树的其他冲突
node = parent;
```

情形 2A 如下图所示：

![情形 2A 图](/img/tree-red-black-2a.svg)

节点是左侧子节点时，直接跳过 2A 到 3A 进行左——左旋转。情形 3A 如下图所示：

![情形 3A 图](/img/tree-red-black-3a.svg)

现在，来看看情形 2B 和 3B：

```js
// 情形 2B：节点是左侧子节点——左旋转
if (node === parent.left) {
  // 先进行左——左旋转
  this.rotationLL(parent);
  node = parent;
  parent = node.parent;
}
// 情形 3B：节点是右侧子节点——左旋转
// 再进行右——右旋转
this.rotationRR(grandParent);
parent.color = Colors.BLACK;
grandParent.color = Colors.RED;
node = parent;
```

逻辑是一样的，不同之处在于选择会这样进行：先进行左——左旋转，再进行右——右旋转。情形 2B 如下图所示：

![情形 2B 图](/img/tree-red-black-2b.svg)

最后，情形 3B 如下图所示：

![情形 3B 图](/img/tree-red-black-3b.svg)

**红黑树旋转：**在插入算法中，只使用了右——右旋转和左——左旋转。逻辑和 AVL 树是一样，但是，由于我们保存了父节点的引用，需要将引用更新为旋转后的新父节点。

左——左旋转(右旋转)的代码如下（更新父节点高亮显示）：

```js {5,7-9,12,14,18}
rotationLL(node) {
  const tmp = node.left;
  node.left = tmp.right;
  if (tmp.right && tmp.right.key) {
    tmp.right.parent = node;
  }
  tmp.parent = node.parent;
  if (!node.parent) {
    this.root = tmp;
  } else {
    if (node === node.parent.left) {
      node.parent.left = tmp;
    } else {
      node.parent.right = tmp;
    }
  }
  tmp.right = node;
  node.parent = tmp;
}
```

右——右旋转(左旋转)的代码如下（更新父节点高亮显示）：

```js {5,7-9,12,14,18}
rotationRR(node) {
  const tmp = node.right;
  node.right = tmp.left;
  if (tmp.left && tmp.left.key) {
    tmp.left.parent = node;
  }
  tmp.parent = node.parent;
  if (!node.parent) {
    this.root = tmp;
  } else {
    if (node === node.parent.left) {
      node.parent.left = tmp;
    } else {
      node.parent.right = tmp;
    }
  }
  tmp.left = node;
  node.parent = tmp;
}
```

### 红黑树（RedBlackTree）的完整实现

```typescript title={../utils.ts}
export type ICompareFunction<T> = (a: T, b: T) => number;

export enum Compare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
  EQUALS = 0,
}

export function defaultCompare<T>(a: T, b: T): number {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
```

```typescript title="./red-black-node.ts"
import { Node } from './node';

export enum Colors {
  RED = 0,
  BLACK = 1,
}

export class RedBlackNode<K> extends Node<K> {
  left: RedBlackNode<K>;
  right: RedBlackNode<K>;
  parent: RedBlackNode<K>;
  color: Colors;

  constructor(public key: K) {
    super(key);
    this.color = Colors.RED;
  }

  isRed() {
    return this.color === Colors.RED;
  }

  flipColor() {
    if (this.color === Colors.RED) {
      this.color = Colors.BLACK;
    } else {
      this.color = Colors.RED;
    }
  }
}
```

```typescript title="./RedBlackTree.ts"
import { defaultCompare, ICompareFunction, Compare } from '../util';
// 二叉搜索树类
import BinarySearchTree from './binary-search-tree';
import { RedBlackNode, Colors } from './red-black-node';

export default class RedBlackTree<T> extends BinarySearchTree<T> {
  protected root: RedBlackNode<T>;

  constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {
    super(compareFn);
  }

  /**
   * Left left case: rotate right
   *
   *       b                           a
   *      / \                         / \
   *     a   e -> rotationLL(b) ->   c   b
   *    / \                             / \
   *   c   d                           d   e
   *
   * @param node Node<T>
   */
  private rotationLL(node: RedBlackNode<T>) {
    const tmp = node.left;
    node.left = tmp.right;
    if (tmp.right && tmp.right.key) {
      tmp.right.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.right = node;
    node.parent = tmp;
  }

  /**
   * Right right case: rotate left
   *
   *     a                              b
   *    / \                            / \
   *   c   b   -> rotationRR(a) ->    a   e
   *      / \                        / \
   *     d   e                      c   d
   *
   * @param node Node<T>
   */
  private rotationRR(node: RedBlackNode<T>) {
    const tmp = node.right;
    node.right = tmp.left;
    if (tmp.left && tmp.left.key) {
      tmp.left.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.left = node;
    node.parent = tmp;
  }

  insert(key: T) {
    // special case: first key
    if (this.root == null) {
      this.root = new RedBlackNode(key);
      this.root.color = Colors.BLACK;
    } else {
      const newNode = this.insertNode(this.root, key);
      this.fixTreeProperties(newNode);
    }
  }

  protected insertNode(node: RedBlackNode<T>, key: T): RedBlackNode<T> {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new RedBlackNode(key);
        node.left.parent = node;
        return node.left;
      } else {
        return this.insertNode(node.left, key);
      }
    } else if (node.right == null) {
      node.right = new RedBlackNode(key);
      node.right.parent = node;
      return node.right;
    } else {
      return this.insertNode(node.right, key);
    }
  }

  private fixTreeProperties(node: RedBlackNode<T>) {
    while (node && node.parent && node.parent.color === Colors.RED && node.color !== Colors.BLACK) {
      let parent = node.parent;
      const grandParent = parent.parent;

      // case A
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right;

        // case 1: uncle of node is also red - only recoloring
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // case 2: node is right child - left rotate
          if (node === parent.right) {
            this.rotationRR(parent);
            node = parent;
            parent = node.parent;
          }

          // case 3: node is left child - right rotate
          this.rotationLL(grandParent);
          // swap color
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      } else {
        // case B: parent is right child of grand parent

        const uncle = grandParent.left;

        // case 1: uncle is read - only recoloring
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // case 2: node is left child - left rotate
          if (node === parent.left) {
            this.rotationLL(parent);
            node = parent;
            parent = node.parent;
          }

          // case 3: node is right child - left rotate
          this.rotationRR(grandParent);
          // swap color
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      }
    }
    this.root.color = Colors.BLACK;
  }

  getRoot() {
    return this.root;
  }

  /* private flipColors(node: RedBlackNode<T>) {
    node.left.flipColor();
    node.right.flipColor();
  }

  private isRed(node: RedBlackNode<T>) {
    if (!node) {
      return false;
    }
    return node.isRed();
  }*/
}
```
