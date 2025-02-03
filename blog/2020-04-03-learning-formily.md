---
title: Formily 探究
tags: [Formily]
---

## Fromily

> Formily 是一个由阿里开发的面向中后台复杂场景的表单解决方案，它也是一个表单框架。

Formily 解决方案的本质是构造了一个 Observable Form Graph，在这个 Form Graph 中，我们抽象了整个表单领域模型，同时这个模型又是一个无限循环状态机。

<!--truncate-->

![Formily 表单领域模型](https://img.alicdn.com/tfs/TB1cdP2fUT1gK0jSZFrXXcNCXXa-1112-718.png)

这个状态机主要有 3 个特点：无限循环、分布式管理状态、UI 无关

在此状态机下，可以用一句极简表达式来描述字段间的联动关系：

```js
// 设置字段状态
setFieldState(
  Subscribe(
    FormLifeCycle, // 联动从表单声明周期发起
    Selector(Path), // 通过路径来描述具体字段，并通过选择器来选择字段
  ),
  TargetState, // 状态
);
```

这句表达式描述了：

- 任何联动，都需要一个路径来描述具体字段
- 通过一个选择器来选择字段，同时任何联动都是从表单生命周期而发起
- 联动的最终操作是操作具体字段的状态，可以是值，可以是它的显示隐藏，也可以是具体组件属性等等。

### 核心特性

在 Formily 状态机模型的上层又抽象了几层：

- UI 桥接层(React/Vue/Angular/小程序....)，这一层主要是对接各种组件化框架，对不同体系的用户提供更便捷的表单管理方案。
- Schema 动态渲染层(React/Vue/Angular/小程序...)，这一层主要提供了针对 Schema 场景下的各种上层能力，比如典型的协议化联动，协议化布局能力。
- Schema 编辑器层，这一层主要提供了可视化配置 Schema 能力，方便非技术人员快速配置表单。
- 研发工具层，这一层主要提供了针对 Formily 的开发者调试能力。

### 整体架构

![Formily 架构图](https://img.alicdn.com/tfs/TB1BvlRu4D1gK0jSZFsXXbldVXa-1882-1144.png)

整个 Formily 是由一个 UI 无关的内核所驱动的表单方案，这可以轻松做到跨终端；同时在上层我们拥有一份标准的表单协议，可以做表单动态渲染；所以，我们可以轻松实现**一份 JSON Schema 驱动多端的表单页面动态渲染**的目标；这对于整个前端表单研发领域，是一个突破性的解决方案。

### @formily/shared

Formily 工具函数集

### @formily/validator

Formily 数据校验工具

### @formily/core

表单状态核心管理包(不依赖任何第三方 UI 框架)，在该包中，它主要做了：

- 管理 Form 状态
- 管理 Field 状态
- 管理 Validator 状态
- 管理 Form/Field/Validator 之间的依赖关系

### @formily/react

Formily 在 react 层的实现，内置表单状态核心管理(`@formily/react`), 通过结合 React 和核心管理机制，提供给开发者 API 可以快速操作表单，以及提供相应 UI 层渲染的支持。 `@formily/react` 中主要包含了以下部分：

- Form 表单容器
- Field 表单字段
- VirtualField 虚拟表单字段
- FormaSpy 表单替身
- FormProvider 表单核心提供者
- FormConsumer 表单核心消费者(即将废弃，请使用 FormSpy)
- createFormActions 创建表单核心操作 API 实例
- createAsyncFormActions 创建表单核心操作 API 实例（异步）
- FormEffectHooks 表单生命周期 hook

### @formily/react-schema-renderer

Schema 渲染引擎，该包主要依赖了 `@formily/react`，它的职责很简单，核心就做了两件事情：

- 解析 Form Schema 协议，递归渲染
- 管理自定义组件

### @formily/antd

适配 antd Form 组件。

### @formily/antd-components

适配 antd 中常用于表单内的相关组件。

- 显示加载组件

```jsx
import { Input } from '@formily/antd-components';

export default () => {
  return (
    <SchemaForm components={{ Input }}>
      <Field title="Text" name="text" x-component="Input" />
    </SchemaForm>
  );
};
```

- 使用内置组件

```jsx
import { setup } from '@formily/antd-components';

setup();
export default () => {
  return (
    <SchemaForm>
      <Field type="string" title="Text" name="text" />
    </SchemaForm>
  );
};
```

- [内置组件类型](https://github.com/alibaba/formily/blob/master/packages/antd-components/README.zh-cn.md#%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6%E7%B1%BB%E5%9E%8B)

#### @formily/react-schema-editor

是用于构建表单 schema 的 UI 工具。

### 开发

在 Formily 中，主要有三种开发模式，主要是：

- JSON Schema 开发表单：主要用于后端动态渲染表单
- JSX Schema 开发表单：主要用于后端动态渲染表单的过渡形态，Schema 在前端维护，方便未来迁移后端动态渲染模式
- 纯 JSX(源码) 开发表单：主要用于纯前端开发方式，或者在前两个方案的自定义组件内部的开发以复合形态来开发。

### 生命周期

[生命周期](https://github.com/alibaba/formily/blob/master/docs/zh-cn/jsx-develop/lifecycle.md)

### 实现复杂布局

[复杂布局](https://github.com/alibaba/formily/blob/master/docs/zh-cn/schema-develop/form-layout.md)

### 性能优化

- BigData `import { BigData, SchemaForm } from '@formily/antd'`
- 批量更新
  [性能优化](https://github.com/alibaba/formily/blob/master/docs/zh-cn/schema-develop/performance.md)

### 管理业务逻辑

[管理业务逻辑文档](https://github.com/alibaba/formily/blob/master/docs/zh-cn/schema-develop/manage-business.md)

### 实现递归渲染组件

[递归渲染组件](https://github.com/alibaba/formily/blob/master/docs/zh-cn/schema-develop/recursive-render.md)

### 玩转自增列表组件

[自增列表组件](https://github.com/alibaba/formily/blob/master/docs/zh-cn/schema-develop/complext-self-inc-component.md)

### 实现超复杂自定义组件

[自定义复杂组件](https://github.com/alibaba/formily/blob/master/docs/zh-cn/schema-develop/create-complex-field-component.md)

## 参考

- [Formily Code](https://github.com/alibaba/formily)
- [Formily Docs](https://formilyjs.org/)
