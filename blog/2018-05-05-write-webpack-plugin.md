---
slug: write-a-webpack-plugin
title: 写一个 Webpack 的插件
tags: [webpack]
---

## 起因

> 某一天突然打包项目代码的时候，突然出现了一大坨的 warning ，具体为 `mini-css-extract-plugin` 的`Conflicting order between` 警告。

<!--truncate-->

## 一个 webpack 插件 的组成部分

- 一个具名的 JavaScript 函数（类）。
- 在它的原型中定义一个 `apply` 方法。
- 指定要使用的[事件钩子](https://webpack.js.org/api/compiler-hooks/)。
- 处理 webpack 内部实例的特定数据。
- 在功能完成后调用 webpack 提供的回调。

## Compiler 和 Compilation

在开发插件时，两个最重要的资源就是 `compiler` 和 `compilation` 对象，所以我们第一步就要理解他们在是扩展 webpack 引擎中的重要角色。

### Compiler

- 该模块是在通过 [CLI](https://webpack.js.org/api/cli) 或 [Node API](https://webpack.js.org/api/node)传递的所有选项创建编译实例时候的主要引擎。
- 它扩展了 `Tapable` 类以注册和调用插件，所以大多数面向用户的插件都是首先在`Compiler`上注册。
- 该模块公开暴露在 `webpack.Compiler`，可以直接使用。

### Compilation

- 该模块用于 `Compiler` 创建新的编译（或构建），`Compilation` 实例可以访问所有模块及其依赖项（大多数是循环引用）。
- 在编译阶段，模块被加载，密封，优化，分块，散列和恢复。
- 该对象也继承了 `Tapable`，并提供了众多的生命周期的钩子，可以像`Compiler`钩子一样使用它们：`compilation.hooks.someHook.tap(/* ... */);`。

你看可以查看的插件[API 文档](https://webpack.js.org/api/plugins/)， 来查找`compiler`，`compilation`对象中可用的钩子列表以及其他重要的对象。
这两个对象的源码可以在 GitHub 的 webpack 源码的 [lib](https://github.com/webpack/webpack/tree/master/lib) 目录下找到。

## 编写过滤插件

按照上面提到的插件组成部分来编写。

```js
/**
 * 过滤 CSS Conflicting Warning 插件
 */
// 一个具名的 Javascript 类
class FilterCSSConflictingWarningPlugin {
  // 定义一个 apply 原型方法，该方法以提供 compiler 作为参数
  apply(compiler) {
    // 指定要使用的事件钩子 afterEmit （将资源分发到输出目录之后），当进入 compilation 钩子的时候把 compilation 最为回调函数的参数
    compiler.hooks.afterEmit.tap('FilterWarning', compilation => {
      // 处理数据，我们可以通过传入的 compilation 获取到 warnings 信息
      compilation.warnings = (compilation.warnings || []).filter(warning => {
        // 若为 mini-css-extract-plugin 抛出的 Conflicting order between: 的 warning，则返回 false 过滤掉
        return warning.message.indexOf('Conflicting order between:') === -1;
      });
    });
  }
}

module.exports = FilterCSSConflictingWarningPlugin;
```

## 使用插件

```js
// webpack.config.js
var FilterCSSConflictingWarningPlugin = require('FilterCSSConflictingWarningPlugin');

module.exports = {
  // ... config settings here ...
  plugins: [new FilterCSSConflictingWarningPlugin()],
};
```

## 改进插件

当前插件只能处理 `Conflicting order between` 的 warnings ，我们理想情况是插件不但能够过滤上面的 warning ，也能处理其他 warning。这样的话，不用每过滤一个 warning 写一个插件。所以我们可以够想这样一个插件：当你使用插件的时候，传入一个过滤 warning 信息的正则表达式。插件内部根据传入的正则表达式对 warning 信息进行过滤。

```js
// Define the class
class FilterCSSConflictingWarningPlugin {
	// 接收参数
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tap(
      'FilterPlugin',
      (compilation) => {
        compilation.warnings = (compilation.warnings || []).filter(warning => {
        	return !this.options.filter.test(warning.message)
          }
        );
      }
    );
  }
}

// 在 webpack 配置文件中使用
new FilterCSSConflictingWarningPlugin({ filter: /Conflicting order between:/ }),

```

## 相关资料

- [mini-css-extract-plugin issues](https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250)
- [webpack plugins](https://webpack.js.org/contribute/writing-a-plugin/#src/components/Sidebar/Sidebar.jsx)
