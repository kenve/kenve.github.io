---
slug: optimization-use-native-api
title: 性能优化之使用原生 API
tags: [javascript, 性能优化]
---

### what

> 在做项目性能优化的时候，经常会看到一条原则就是：尽量使用 JavaScript 原生的 API。

<!--truncate-->

### 是否真的 JS 原生的 API 比框架执行效率高

下面使用 js 原生 api 和 jq 的 api 分别进行十万次的 dom 操作。

```javascript
function excutedTime(fn) {
  let preTime = new Date().getTime();
  if (!fn) {
    return;
  }
  fn();
  let endTime = new Date().getTime();
  let time = endTime - preTime;
  console.log(time);
}
//
for (let j = 0; j < 10; j++) {
  //jq
  excutedTime(function() {
    for (var i = 0; i < 100000; i++) {
      var a = $('#id').val();
    }
  });
  //原生
  excutedTime(function() {
    for (var i = 0; i < 100000; i++) {
      var a = document.getElementById('id').value;
    }
  });
}
```

Win10 Chrome 62.0.3202.94（64）环境下执行 10 次得到如下数据：

| jq 框架 | 原生 js |
| ------- | ------- |
| 200     | 7       |
| 141     | 5       |
| 111     | 4       |
| 115     | 5       |
| 112     | 6       |
| 112     | 4       |
| 109     | 5       |
| 113     | 5       |
| 119     | 4       |
| 128     | 4       |

从以上执行结果可以看出执行同样的操作，使用 jq 框架的 API 操作时间大概是：120ms 左右，而使用 js 原始 API 操作时间大概为：4ms 左右，执行效率是 jq 框架 30 倍左右。所以在进行大量数据操作的时候，尽量使用 js 原生 API

### 为什么 JS 原生 API 的执行效率高

- 时间 1.类似于 Jquery 这类框架的理念都是`The Write Less, Do More`，所以会额外执行解决 API 兼容性的通用操作，会带来额外的业务逻辑耗费额外的时间。 2.浏览器内核能解析的只是 js 原生 API，加了额外的框架相当于多了很多无关的调用。 3.有些框架 API 定义在原型上，原型链查找耗时、额外的变量和函数查找耗时增加。
- 空间 1.栈：声明额外的变量，例如全局变量`$`，消耗栈空间，内存占用变大。 2.堆：实例化对象数量的增加，存于堆空间中，内存占用变大。 3.引用额外的库，使得 js 资源体积增加，消耗网络请求和存储空间。
- 原生方法使用的是编译型语言。

###
