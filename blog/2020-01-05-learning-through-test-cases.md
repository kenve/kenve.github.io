---
slug: learning-through-test-cases
title: 通过测试用例学习前端
tags: [前端测试, React, Hooks]
---

在现在前端工程化的时代，测试越来越显得不可或缺了。当我们封装好了一个些公共组件或类库，我们都要求书写相关功能的测试案例，当测试案例达到一定的覆盖率且都通过的时候才能保证我们封装组件或库是有质量保证，同时也避免开发人员在界面进行手动测试。

<!--truncate-->

现如今前端的发展迅速，工具层出不穷，知识日新月异。要求前端工程师不断学习不断与时俱进（学不动了～），而当我们学习新知识的时候，通常都有把一些事例代码自己跑一遍的需求。

下面介绍一种通过书写测试案例的方式学习前端知识方法：下面就选择最近很火 [React Hooks](https://reactjs.org/docs/hooks-overview.html) 作为学习的案例，测试框架选择 [React](https://reactjs.org) 中常用的 [Jest](https://jestjs.io/) 和 [Testing Library](https://testing-library.com/) 组合的方式。当然你也可以选择 [Jest](https://jestjs.io/) 和 [Enzyme](https://enzymejs.github.io/enzyme/)，看个人喜好，但推荐使用 [Testing Library](https://testing-library.com/)，这也是 React [官方推荐](https://reactjs.org/docs/testing.html#tools)的。

所以这里选择用 React Hook + Jest + Testing Library 的技术栈做一个 Hooks 的学习案例。

## 安装相关依赖

- 安装 `react` 相关依赖

```bash
yarn add react react-dom
```

- 安装 `jest` 相关依赖

```bash
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
```

- 安装 `testing-libraray` 依赖，选择 `@testing-library/react-hooks` 或 `@testing-library/react` 包

```bash
yarn add --dev @testing-library/react
```

## 添加 test 命令

在项目目录的 `package.json` 文件中加上测试的 `test` 命令：

```json {3-5} title="package.json"
{
  ...
  "scripts": {
    "test": "jest"
  }
  ...
}
```

## 添加测试案例

- 在项目根目录新增 `__tests__` 目录，用于存放我们测试案例。
- 在 `__tests__` 的目录下新建 Hooks 的 `useState` 的测试案例文件 `useState.test.js`。

编写测试案例：

```js {1,9,10} title="/__tests__/useState.test.js"
import React, { useState } from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';

afterEach(cleanup);

test('should work with useState', () => {
  // 1. 定义函数组件 Example
  function Example() {
    // 2. 使用 useState Hook 定义状态变量 count 和更新函数 setCount
    const [count, setCount] = useState(0);

    return (
      <div>
        {/* 3. 添加 data-testid 用于获取节点*/}
        <p data-testid="count">{count}</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }

  // 4. 渲染组件，从返回对象中取函数 getByTestId（通过 testid 获取节点） 和 getByText（通过文本获取节点）
  const { getByTestId, getByText } = render(<Example />);
  // 5. 断言当前 count 值为 0
  expect(getByTestId('count').innerHTML).toEqual('0');

  // 6. 触发 onClick 事件
  fireEvent.click(getByText('Click me'));
  // 7. 触发完事件后，断言 count 的值为 1
  expect(getByTestId('count').innerHTML).toEqual('1');
});
```

然后我们在控制台中运行 `test` 命令:

```bash
yarn test
```

输出如下的信息表示我们测试案例是验证通过，如果不通过控制台会展示差别的代码。

```bash
$ jest
 PASS  __tests__/useState.test.js
  ✓ test react useState (35ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.387s
Ran all test suites.
✨  Done in 4.46s.
```

再添加一个 `useEffect` 的测试案例：

```js {4-7} title="/__tests__/useEffect.test.js"
test('should useEffect work', () => {
  function Example() {
    const [count, setCount] = useState(0);
    // 相当于 componentDidMout 和 componentDidUpdate 的时候会更新文档标题
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
  const { getByText } = render(<Example />);
  expect(document.title).toEqual('You clicked 0 times');

  fireEvent.click(getByText('Click me'));
  expect(document.title).toEqual('You clicked 1 times');
});
```

这两个例子都非常简单，你可以再测试案例中把相对于 API 的所有功能都写一个测试案例进行学习，我在 [CodeSanbox](https://codesandbox.io/s/learning-through-test-cases-0n63r?autoresize=1&fontsize=14&hidenavigation=1&module=%2F__tests__%2FuseState.test.js&previewwindow=tests&theme=dark) 中提供了这两个例子的代码，你可以在上面体验和尝试：

<iframe
  src="https://codesandbox.io/embed/learning-through-test-cases-0n63r?autoresize=1&fontsize=14&hidenavigation=1&module=%2F__tests__%2FuseState.test.js&previewwindow=tests&theme=dark"
  style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
  title="learning-through-test-cases"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
