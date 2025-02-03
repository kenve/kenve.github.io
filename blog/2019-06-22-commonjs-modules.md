---
slug: commonjs-modules
title: 深入解析 CommonJS 模块化原理
tags: [commonjs, nodejs, modules]
---

## 由来

[CommonJS](//www.commonjs.org) 模块规范是 JavaScript 社区为解决变量污染、文件依赖顺序、代码组织混乱等问题而提出的，然后由 Node.js 社区率先实现了这一标准并广泛应用，从而开启了现代前端工程化的序幕。

<!--truncate-->

## CommonJS 的模块规范

模块化规范分为三个部分：模块引用、模块定义、模块标识。

1. 模块引用：使用 `require()` 方法引入一个模块的 API 到当前上下文，方法参数接收一个“模块标识”

```js
// sum.js 文件中引入 utils.js
const utils = require('./utils');
```

2. 模块定义：在当前模块上下文中提供了 `exports` 对象用于导出模块的方法或变量

```js
// utils.js 中使用 exports 导出 sum 方法
exports.sum = function (a, b) {
  return a + b;
};
```

3. 模块标识：其实就是 `require()` 方法中传入的参数，必须是小驼峰命名的字符、`.` 和 `..` 开头的相对路径、或者绝对路径。可以省略 `.js` 后缀

```js
// 相对路径
const utils = require('./utils');
```

## Node.js 的模块实现

在 Node.js 中模块有两类：Node.js 提供的模块--核心模块、用户编写的模块--文件模块，引入模块分为三步：1.路径分析、2.文件定位、3.编译执行。

- 核心模块在 Node.js 源码编译时编译为了二进制文件，在 Node.js 进程启动时加载到内存中（不需要定位文件和编译、路径分析时优先判断）
- 文件模块在**运行时动态加载**，需要按步骤分析、定位、编译
- Node.js 引入过的模块会进行缓存，缓存的是编译和执行之后的对象

### 路径解析

```js title="lib/internal/modules/cjs/loader.js#L557"
// Module._load
// 路径解析
var filename = Module._resolveFilename(request, parent);
```

#### 路径分析

通过 `require()` 的参数（模块标识符）进行模块路径分析。主要有几类：

- 核心模块（`http`、`fs`、`path` 等）
- 相对路径的文件模块（`.`、`..`），会转换为真实路径，并以真实路径作为索引，将编译执行后的结果放到缓存中，以加速二次加载速度。
- 绝对路径的文件模块（以 `/` 开头），会转换为真实路径，并以真实路径作为索引，将编译执行后的结果放到缓存中，以加速二次加载速度。
- 自定义的模块（非核心模块、非路径形式的文件模块，一种特殊的文件模块），会一级一级往上查找 `node_modules`，

```js
// console.log(module.paths) 查看
// macOS
[
  '/Users/kenve/Code/node_modules',
  '/Users/kenve/node_modules',
  '/Users/node_modules',
  '/node_modules',
];
```

#### 文件定位

- 扩展名分析：文件扩展名按 `.js`、`.json`、`.node` 的次序依次尝试查找文件，尝试过程需要调用 `fs` 模块同步阻塞式地判断文件是否存在（Node.js 是单线程这个解析也是一个性能问题点）
- 目录分析和包：在分析过程中如果没有查找到对应的文件，但是有目录会先查找当前目录下的 `package.json` 中的 `main` 属性指定的文件名进行定位，假设上一步就会查找默认的 `index` 当作文件名按顺序查找 `index[.js, .json, .node]` 的文件

### 模块编译

在 Node.js 中，每个模块都是一个 Module 对象：

```js
function Module(id, parent) {
  this.id = id; // 模块唯一标识
  this.exports = {}; // 导出对象
  this.parent = parent; // 父模块
  updateChildren(parent, this, false);
  this.filename = null;
  this.loaded = false; // 加载状态
  this.children = []; // 子模块
}
```

不同的扩展名会调用不同的编译方法，

- `.js` 文件，通过 fs 模块同步读取文件后编译执行。
- `.node` 文件为 C/C++ 编写的扩展文件，通过 `process.dlopen()` 方法加载最后编译生成的文件。
- `.json` 文件，通过 fs 模块同步读取后，用 `JSON.parse()` 解析返回结果。
- 其他扩展名会被当成 `.js` 文件处理

根据不同的扩展名，Node.js 会调用不同的函数进行读取，源码如下：

```js title="lib/internal/modules/cjs/loader.js#L786"
// Native extension for .js
Module._extensions['.js'] = function (module, filename) {
  var content = fs.readFileSync(filename, 'utf8');
  module._compile(stripBOM(content), filename);
};

// Native extension for .json
Module._extensions['.json'] = function (module, filename) {
  var content = NativeModule.require('fs').readFileSync(filename, 'utf8');
  try {
    module.exports = JSON.parse(stripBOM(content));
  } catch (err) {
    err.message = filename + ': ' + err.message;
    throw err;
  }
};

// Native extension for .node
Module._extensions['.node'] = function (module, filename) {
  return process.dlopen(module, path.toNamespacedPath(filename));
};
```

编译成功的模块会将其路径作为索引缓存在 `Module._cache` 对象上：

```js
{
  '/project/src/moduleA.js': {
    id: '/project/src/moduleA.js',
    exports: { ... },
    loaded: true,
    children: [ ... ] // 依赖的子模块
  }
}
```

#### JavaScript 的编译

- 在编译过程中，Node.js 会对获取到的 JavaScript 文件内容进行包装，所以每个模块之间都进行了作用域隔离，且每个模块文件里都能访问到 `exports, require, module, __filename, __dirname` 几个 API 变量。
- 包装后会调用原生模块 [`vm`](https://github.com/nodejs/node/blob/v10.x/lib/vm.js#L117) 的 `runInThisContext()` 方法编译执行（类似于 `eval`），返回一个具体的 `function` 对象
- 最后将当前模块对象的 exports 属性、require 方法、module（模块对象自身）、filename（文件定位的完整文件路径）、dirname（文件目录）作为参数传递给这个 `function` 执行

```js title="lib/internal/modules/cjs/loader.js#L705"
// module._compile
// wrapper[0] + script + Module.wrapper[1] 包装
const wrapper = [
  '(function (exports, require, module, __filename, __dirname) { ',
  content, // script 内容
  '\n});'
]
// 编译执行，返回 function
const compiledWrapper = vm.runInThisContext(wrapper, {filename, ...});
// 执行导出绑定
const result = compiledWrapper.call(this.exports, this.exports, require, this,filename, dirname);
```

### 循环依赖处理

根据 [Node.js](https://nodejs.org/api/modules.html#cycles) 文档说明：

- 使用加载中状态标记
- 提前暴露未完成初始化的 exports 对象
- 后续模块通过缓存获取部分初始化的模块

## 其他

### 为什么不能直接赋值 exports

exports 对象是通过形参的方式传入的，假设直接赋值形参会改变形参指向的引用地址，但并不能改变作用域外的值。

```js
// ⚠️ 不能直接赋值对象
exports = {
  sum,
};

// ☑️
module.exports = {
  sum,
};
```

### 处理循环引用

```js
// a.js
let b = null;
setTimeout(() => {
  b = require('./b');
}, 0);
module.exports = { a1: 1 };

// b.js
const a = require('./a');
module.exports = a.a1 + 1;
```

### 和其他模块化规范的区别

| 特性         | CommonJS                     | ES Modules                  | AMD（RequireJS）                   | CMD（Sea.js）                                     |
| ------------ | ---------------------------- | --------------------------- | ---------------------------------- | ------------------------------------------------- |
| 加载方式     | 动态加载（同步）             | 静态分析/引入               | 动态加载（异步）                   | 动态加载（异步延迟）                              |
| 导出类型     | 动态绑定（输出值的拷贝）     | 静态绑定（输出值的引用）    | 对象导出（值拷贝）                 | 对象导出（值拷贝）                                |
| 循环依赖处理 | 部分支持                     | 完备支持                    | 有限支持                           | 有限支持                                          |
| 顶层作用域   | 模块闭包                     | 严格模式                    | define 函数闭包                    | define 函数闭包                                   |
| 浏览器支持   | 需打包转换                   | 原生支持                    | 需加载器（如 RequireJS）           | 需加载器（如 Sea.js）                             |
| 加载时机     | 运行时加载                   | 编译时解析                  | 定义时声明依赖                     | 执行时解析依赖                                    |
| 核心特点     | Node.js 服务端模块化标准     | 官方标准/静态优化           | 前置依赖声明/异步并行加载          | 就近依赖/延迟执行                                 |
| 典型语法     | `require()/module.exports`   | `import/export `            | `define([deps], factory)`          | `define(function(require, exports, module){...})` |
| 规范类型     | Node.js 社区实现模块化的 API | ECAMScript 官方模块语法规范 | 社区规范（逐步被 ES Modules 替代） | 社区规范 （逐步被 ES Modules 替代）               |

## 相关链接

- [Node.js Modules 文档](https://nodejs.org/api/modules.html)
- [Node.js Modules 源码](https://github.com/nodejs/node/blob/main/lib/internal/modules/cjs/loader.js)
