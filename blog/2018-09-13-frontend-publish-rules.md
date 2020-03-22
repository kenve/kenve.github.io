---
id: package-publish-rules
title: 发版规则
tags: [npm, publish]
---

## 发布周期

- 修订（patch）版本号：每两周会进行日常的 bugfix 更新。（如果有紧急的 bugfix，再需求及方案评估通过后，则可按需发布）。
- 次（minor）版本号：每月发布一个带有新特性的向下兼容的版本。
- 主（major）版本号：含有破坏性更新和新特性，不在发布周期内。
- 每个发布周期的下一周发布 stable 版本。
- 每个发版周期的上一个周五可以先发布一个 patch/beta 版本进行测试。

<!--truncate-->

## 版本号规则

- 版本号升级严格遵循 [Semantic Versioning 2.0.0](https://semver.org/) 语义化版本规范。
- bugfix 升级小版本，新功能添加升级中间的版本号。
- 每两周发布一个 stable 版本。

## 代码合并规则

- 开发时新建新的单独分支 featrue（或其他名称）。
- 及时对开发提交的 PR 进行 CodeReview 和合并操作。
- 安排至少两人对 PR 代码进行 Review，确认通过后进行代码合并。
- 及时关闭已解决或无法解决的 Issue。
- 按时进行新版本发布。

## 发布流程

1. 发布前相关工作

- 确认发版 List 中的 issue 和 PR 是否已被处理和合并。
- 确认是无误的跑完所有测试用例。
- 确认是否对更改的内容进行了基本的人工检查。
- 确认允许自动升级小版本的第三方依赖库是否能够正常使用（是否有 Breaking Change）。

2. 更新日志及升级版本

- 发布版本时，先把 featrue 分支手工合并到 master。注意不要使用 splash merge 防止提交信息丢失。
- 从 master 新建一个 release 分支用来做发布的修改。（Changelog，Version 等修改）
- 在 CHANGELOG.md 文件中添加发布日志，可以用 compare 功能当前版本和之前版本的区别，将有价值的改动如实反馈出来。
- 对用户使用上无感知的改动建议（文档修补、微小的样式优化、代码风格重构、添加 Demo、添加测试等）不用提及，保持 changelog 的内容有效性。
- 建议用易于理解的语言描述用户可以感知的变化。（如：Table 新增 onClick 属性，可自定义表格点击事件）
- 尽量在修复描述修改内容后，展示出原始的 Issue 和 PR 链接地址，并注明修改人员。
- 如果是更新底层依赖模块的升级，给出相关更新内容链接。（如：升级 antd 需给出 antd 的 changelog 的链接）
- 参考之前版本的日志写法，必要时截图说明功能。（如：日志图标，[日志图标参考 1](https://github.com/liuchengxu/git-commit-emoji-cn)，[日志图标参考 2](https://gitmoji.carloscuesta.me/)）
- push release 分支并发起 changelog 的 PR 请其他同学 review。（PR 的内容里填上 changelog 内容）

3. npm 发布
   更新日志修改合并后，删除 release 分支。接下来就可以正式发布到私服了。

- 发布前可以先在根目录，执行编译命令，确认编译顺利通过。
- 确认已按照[语义化版本](https://semver.org/lang/zh-CN/)修改版本号。
- 在根目录执行发布命令。
- 确认私服有新发布的版本。

4. 更新其他版本分支
   如果有其他分支需求合并 master 新的更改，应及时合并最新的更改。

### 资料

- [antd wiki](https://github.com/ant-design/ant-design/wiki/%E8%BD%AE%E5%80%BC%E8%A7%84%E5%88%99%E5%92%8C%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E6%B5%81%E7%A8%8B)
