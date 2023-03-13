---
id: handwritten-code
title: 手写代码
keywords:
  - JavaScript
  - js
  - 手写代码
---

## 实现 new

```js
function _new(fn, ...arg) {
  const obj = Object.create(fn.prototype);
  const ret = fn.apply(obj, arg);
  return ret instanceof Object ? ret : obj;
}
```

## 实现 instanceof

```js
function _instanceof(a, b) {
  // 沿着 a 的原型链, 看看是否有何 prototype 相等的节点
  while (a) {
    if (a.__proto__ === b.prototype) {
      return true;
    }
    a = a.__proto__;
  }
  return false;
}
```

## JavaScript 继承

### ES5 继承方式

```js
// 一个完善的 js 继承写法
// 定义一个
function Parent() {
  this.name = 'parent';
  this.colors = ['red', 'bule', 'yellow'];
}
Parent.prototype.sex = 'man';
Parent.prototype.say = function () {
  console.log('say hello');
};
//
function Child() {
  //构造函数
  Parent.call(this);
  this.type = 'child';
}
// Child 构造函数的原型对象为父级构造函数的原型对象
Child.prototype = Object.create(Parent.prototype);
// Child 对象的构造函数为 Child，避免前面原型链赋值后构造函数为父级的构造函数
Child.prototype.constructor = Child;
```

### ES6 的方式实现对象继承

```js
// es6 方式定义一个 class
class Parent {
  // 定义构造函数
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
// 定义子类 并继承父类
class Child extends Parent {
  constructor(x, y, colors) {
    super(x, y); //调用父类的 constructor(x,y)
    this.colors = colors;
  }
  // 函数
  toString() {
    return this.colors + '' + super.toString(); //调 用父类的 toString 方法
  }
}
```

### 实现原型继承函数

```js
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
function inherit(subType, superType) {
  var prototype = object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}
```

## 使用 Set 实现观察者

- 先定义了一个 Set 集合，所有观察者函数都放进这个集合。
- 然后，`observable` 函数返回原始对象的代理，拦截赋值操作。
- 在拦截函数 `set` 之中，会自动执行所有观察者。

```js
const queuedObservers = new Set();

const observe = (fn) => queuedObservers.add(fn);
const observable = (obj) => new Proxy(obj, { set });

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach((observer) => observer());
  return result;
}
```

## Event emit

```js
class EventEmitter {
  constructor() {
    this._eventpool = {};
  }
  on(event, callback) {
    this._eventpool[event]
      ? this._eventpool[event].push(callback)
      : (this._eventpool[event] = [callback]);
  }
  emit(event, ...args) {
    this._eventpool[event] && this._eventpool[event].forEach((cb) => cb(...args));
  }
  off(event) {
    if (this._eventpool[event]) {
      delete this._eventpool[event];
    }
  }
  once(event, callback) {
    this.on(event, (...args) => {
      callback(...args);
      this.off(event);
    });
  }
}
```

## 手写 call bind apply

```js
/**
 * 自定义 call 实现
 * @param context   上下文 this 对象
 * @param args      动态参数
 */
Function.prototype.ownCall = function (context, ...args) {
  context = typeof context === 'object' ? context : window;
  // 防止覆盖掉原有属性
  const key = Symbol();
  // 这里的 this 为需要执行的方法
  context[key] = this;
  // 方法执行
  const result = context[key](...args);
  delete context[key];
  return result;
};

/**
 * 自定义 apply 实现
 * @param context   上下文 this 对象
 * @param args      参数数组
 */
Function.prototype.ownApply = function (context, args) {
  context = typeof context === 'object' ? context : window;
  // 防止覆盖掉原有属性
  const key = Symbol();
  // 这里的 this 为需要执行的方法
  context[key] = this;
  // 方法执行
  const result = context[key](...args);
  delete context[key];
  return result;
};

/**
 * 自定义 bind 实现
 * @param context     上下文
 * @returns {Function}
 */
Function.prototype.ownBind = function (context) {
  context = typeof context === 'object' ? context : window;
  return (...args) => {
    this.call(context, ...args);
  };
};
```

## 手写防抖、节流

```js
// 防抖：触发高频事件后 n 秒内函数只会执行一次，如果 n 秒内高频事件再次被触发，则重新计算时间
// 每次触发事件时都取消之前的延时调用方法
function debounce(fn, time) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
}

// 节流：高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率
// 每次触发事件时都判断当前是否有等待执行的延时函数
function throttle(fn, time) {
  let canRun = true;
  return function () {
    if (!canRun) {
      return;
    }
    canRun = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      canRun = true;
    }, time);
  };
}
```

## 深拷贝

```js
//定义检测数据类型的功能函数
function checkedType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}
//实现深度克隆---对象/数组
function clone(target) {
  //判断拷贝的数据类型
  //初始化变量result 成为最终克隆的数据
  let result,
    targetType = checkedType(target);
  if (targetType === 'Object') {
    result = {};
  } else if (targetType === 'Array') {
    result = [];
  } else {
    return target;
  }
  //遍历目标数据
  for (let i in target) {
    //获取遍历数据结构的每一项值。
    let value = target[i];
    //判断目标结构里的每一值是否存在对象/数组
    if (checkedType(value) === 'Object' || checkedType(value) === 'Array') {
      //对象/数组里嵌套了对象/数组
      //继续遍历获取到value值
      result[i] = clone(value);
    } else {
      //获取到value值是基本的数据类型或者是函数。
      result[i] = value;
    }
  }
  return result;
}
```

## 实现金额千分位逗号分割

### 正则表达式

```js
function format(str) {
  str.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); // replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
```

## 实现两个大整数加法

```js
/**
 * 大数相加
 * @param {string} a
 * @param {string} b
 */
function add(a, b) {
  // 最后一个元素下标
  let i = a.length - 1;
  let j = b.length - 1;

  // 进位
  let carry = 0;
  let result = '';

  while (i >= 0 || j >= 0) {
    // 第一个数
    let x = 0;
    // 第二个数
    let y = 0;
    // 和
    let sum;
    // 大于等于 0，取出数字
    if (i >= 0) {
      // 从后往前取出数字
      x = a[i] - '0';
      i--;
    }

    if (j >= 0) {
      y = b[j] - '0';
      j--;
    }
    // 计算两个数字的和，再加上进位
    sum = x + y + carry;
    // 如果和大于 10 需要进 1 位
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      // 否则进位为 0
      carry = 0;
    }
    // 字符串累加
    result = sum + result;
  }
  // 如果还有进位
  if (carry) {
    // 进位 1 + 'xxx'
    result = carry + result;
  }
  return result;
}
// console.log(add('9999', '1'))
```
