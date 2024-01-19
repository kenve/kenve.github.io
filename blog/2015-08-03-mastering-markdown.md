---
slug: markdown-tutorial
title: Markdown 笔记
tags: [markdown]
---

## 什么是 markdown

> Markdown 是一种轻量级标记语言，创始人为约翰·格鲁伯（John Gruber）。它允许人们“使用易读易写的纯文本格式编写文档，然后转换成有效的 XHTML(或者 HTML)文档”。这种语言吸收了很多在电子邮件中已有的纯文本标记的特性

<!--truncate-->

## markdown 基本语法

### Header(标题头)

```javascript
//#号前面无空格
# H1				//在文字前面加上一个#  ，实现H1标签效果
## H2			    //在文字前面加上两个##  ，实现H2标签效果
### H3				//在文字前面加上三个###  ，实现H3标签效果
#### H4				//在文字前面加上四个####  ，实现H4标签效果
##### H5			//在文字前面加上五个#####  ，实现H5标签效果
###### H6			//在文字前面加上六个######  ，实现H6标签效果
```

**效果预览：**

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Emphasis（强调）

### 斜体（italic）

```javascript
 //在需要实现斜体效果的文字前后分别加上一个 ‘*’（星号）
 //或者一条 ‘_’(下滑线)，实现italic效果
*这个文字为斜体（italic）*
_这个文字也是斜体（italic）_
```

**效果预览：**

_这个文字为斜体（italic）_
_这个文字也是斜体（italic）_

### 粗体（blod）

```javascript
//在需要实现粗体效果的文字前后分别加上两个 ‘**’（星号）
//或者两条‘__’(下滑线)，实现blod效果
**这段文字为粗体（blod）**
__这段文字也为粗体(blod)__

```

**效果预览：**

**这段文字为粗体（blod）**  
**这段文字也为粗体(blod)**

### 删除线（Strikethrough ）

```javascript
//在需要实现删除线效果的文字前后分别加上两条‘~~’（波浪线），实现
 ~~删除线效果~~
```

**效果预览：**

~~删除线效果~~

### 文字格式混合使用

```javascript
//他们也可以合并使用
**他们也可以合并_使用_**
```

**效果预览:**

**他们也可以合并*使用***

## Lists（列表）

### 无序列表

```javascript
//在要实现无须列表的文字前面加上一个‘* ’（星号加空格）
// 或者‘+’（加号加空格）、
//或者‘-’（减号加空格）
//子列表前面空两格
* 列表 1
+ 列表 2
  * 列表 2-1
  - 列表 2-2
```

**效果预览：**

- 列表 1

* 列表 2
  - 列表 2-1
  * 列表 2-2

###有序列表

```javascript
//在要实现有须列表的文字前面加上一个‘1.’（数字加英文的点再加空格）
//子列表前面空两格
1. 列表 1
2. 列表 2
3. 列表 3
  * 列表 3-1
  * 列表 3-2
```

**效果预览：**

1. 列表 1
2. 列表 2
3. 列表 3
   - 列表 3-1
   - 列表 3-2

## Links(链接)

```javascript
//直接书写链接地址，自动生成链接
1. http://github.com  or <http://www.github.com>

//内联式链接：‘[]’内部的内容表示在页面显示的内容，‘（）’表示链接地址
//[链接显示文字]（链接地址）
2. [GitHub](http://github.com)

//内联式链接，添加鼠标悬浮提示
//[链接显示文字]（链接地址  鼠标悬浮提示内容）
3. [GitHub带悬浮提示](https://www.github.com "GitHub的主页")

//参考链接有两部分组成，第一个‘[]’表示链接的文字
//第二个‘[]’表示参数名字
//在其下方要为改参数赋值,格式：[参数名]:值
4. [GitHub参考式的链接][link to GitHub]

[link to Github]: https://www.github.com

//链接到文件相对地址，格式：[该链接显示的内容]（文件的相对路径）
5. [文件相对与该仓库的相对地址](./markdown-tutorial)

//参数链接，格式：[显示的链接名称][第几条链接]
//相对一起使用：[第几条链接]: 链接地址
6. [GitHub参数数字链接][1]

   [1]: http://github.com

  //参数链接省略参数，可以只写链接的文字内容。格式：[链接内容名称]
  //根据内容名称，对应链接地址，格式：[链接内容名称]：链接地址
7.参数链接省略参数 [GitHub参数链接省略链接名称]
	[GitHub参数链接省略链接名称]: http://www.github.com
```

**效果预览：**

1. http://github.com

2. [GitHub](http://github.com)

3. [GitHub 带悬浮提示](https://www.github.com 'GitHub的主页')

4. [GitHub 参考式的链接][link to github]

   [link to Github]: https://www.github.com

5. [文件相对与该仓库的相对地址](./markdown-tutorial)

6. [GitHub 参数数字链接][1]

   [1]: http://github.org

7. 参数链接省略参数 [GitHub 参数链接省略链接名称]

   [GitHub 参数链接省略链接名称]: http://www.github.com

## Images（图片）

```javascript
1. Inline-style: 格式：！[不能加载图片时提示的文文字内容]（链接地址  鼠标悬停时提示的文字）
![不能加载时提示的文字](https://github.com/kenve/markdown-tutorial/blob/master/images/ecode.png?raw=true "ECode Title Text 1")

2. Reference-style:
![不能加载时提示的文字][ECode]

[ECode]: https://github.com/kenve/markdown-tutorial/blob/master/images/ecode.png?raw=true "Logo Title Text 2"
```

**效果预览：**
Inline-style:
![不能加载时提示的文字](https://github.com/kenve/markdown-tutorial/blob/master/images/ecode.png?raw=true 'ECode Title Text 1')

Reference-style:
![不能加载时提示的文字][ecode]

[ecode]: https://github.com/kenve/markdown-tutorial/blob/master/images/ecode.png?raw=true 'Ecode Title Text 2'

## 引用（Blockquotes）

```javascript
//在要引用的文字前 加上‘>’大于号，前面不留空
就像XXX说的 > 失败是成功之母;
```

**效果预览**

就像 XXX 说的

> 失败是成功之母

## 代码高亮（Code and Syntax Highlighting）

````javascirpt
//单个便签不解析，用‘``’包裹
1. `<addr>` 便签不解析.

//代码段高亮显示，
2. ```javascript
	function fancyAlert(arg) {
 	 if(arg) {
    	$.facebox({div:'#foo'})
   }
 }
````

格式：

```语言名称
代码
```

````
__效果预览__

1. 单个便签：`<addr>` 便签不解析.

2. 代码段：
```javascript
	function fancyAlert(arg) {
 	 if(arg) {
    	$.facebox({div:'#foo'})
   }
 }
````

## 任务列表（Task Lists）

```javascript
//‘-’(减号)加中括号，中括号内为空表示为选中，为x表示选中
- [ ] 默认未选中的选项

- [x] 默认选中的选项

- [x] 默认选中的选项
```

**效果预览**

- [ ] 默认未选中的选项

- [x] 默认选中的选项

- [x] 默认选中的选项

## 表格 （Tables）

```javascirpt
第一个表头 | 第二个表头
------------ | -------------
第一个单元格的内容 | 第二个单元格的呢日内容
第一列的内容 | 第二列的内容
```

**效果预览**

| 第一个表头         | 第二个表头             |
| ------------------ | ---------------------- |
| 第一个单元格的内容 | 第二个单元格的呢日内容 |
| 第一列的内容       | 第二列的内容           |

## 用户名 @mentions

```javascript
Username @kenve
```

**效果预览**

Username @kenve ##视频

```javascript
//格式：[![不存在时显示名称]（视频图标）]（视频地址）
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://youtu.be/RgKAFK5djSk)
```

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://youtu.be/RgKAFK5djSk)

## Emoji 表情

```
:100:  :1234:
```

**效果预览**

:100: :1234:

## 其他

1. markdown 可以解析 HTML,所以可以内嵌 html 代码
2. 还有一些没有做笔记，请灵活运用。

## 参考资料

- 维基百科：https://zh.wikipedia.org/wiki/Markdown
- Mastering Markdown：https://guides.github.com/features/mastering-markdown/
