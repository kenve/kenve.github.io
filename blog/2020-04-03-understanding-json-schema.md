---
id: understanding-json-schema
title: 理解 JSON Schema
tags: [json]
---

什么是 JSON Schema？

> JSON Schema 是一个描述和验证 JSON 数据结构的强大工具。Schema 可以理解为模式或规则。

优势:

- 描述现有数据格式。
- 提供清晰的人机和机器可读文档。
- 验证数据：
- 自动化测试。
- 确保客户端提交数据的格式。

<!--truncate-->

定义一个最简单的 JSON Schema：`{}` 它包含许多关键字/属性。如：

| 关键字        | 描述                                   | 事例                                                       |
| ------------- | -------------------------------------- | ---------------------------------------------------------- |
| `$schema`     | 声明 JSON Schema 状态（版本/规范控制） | `{ "$schema": "http://json-schema.org/schema#" }`          |
| `$id`         | 唯一标识 URI                           | `{ "$id": "http://yourdomain.com/schemas/myschema.json" }` |
| `title`       | 标题                                   | `"Production"`                                             |
| `description` | 描述                                   | `"a produciton info description"`                          |
| `type`        | 类型                                   | `"number"` \| `["number","string"]`                        |
| `properties`  | 属性配置                               | `{ "test": { "type": "number" } }`                         |

下面解析 JSON Schema 中包含的关键字含义及用法。

## 类型关键字

`string`、`number`、`object`、`array`、`boolean`、`null`。

### 字符串（string）

`string` 类型用于文本字符串。它可能包含 Unicode 字符。

**长度：**

| 属性      | 描述                   | 默认值 |
| --------- | ---------------------- | ------ |
| minLength | 字符串最小长度，非负数 |        |
| maxLength | 字符串最大长度，非负数 |        |
| pattern   | 正则表达式             |        |
| format    | 格式                   |        |

**内置 `format` 列表：**

- 日期和时间
  - `"date-time"`：日期和时间，如 `2018-11-13T20:20:39+00:00`。
  - `"time"`：时间，如 `20:20:39+00:00`。
  - `"date"`：日期，如 `2018-11-13`。
- Email 地址
  - `"email"`：互联网电子邮件地址，请参阅 [RFC 5322，第 3.4.1 节](https://tools.ietf.org/html/rfc5322#section-3.4.1)。
  - `"idn-email"`：电子邮件地址的国际化形式，请参阅 [RFC 6531](https://tools.ietf.org/html/rfc6531)。
- 主机名
  - `"hostname"`：主机名，请参阅 [RFC 1034 第 3.1 节](https://tools.ietf.org/html/rfc1034#section-3.1)。
  - `"idn-hostname"`：国际化的主机名，请参阅 [RFC5890 第 2.3.2.3 节](https://tools.ietf.org/html/rfc5890#section-2.3.2.3)。
- IP 地址
  - `"ipv4"`：IPv4 地址，根据 [RFC 2673 第 3.2 节](https://tools.ietf.org/html/rfc2673#section-3.2)中定义的点分四进制 ABNF 语法。
  - `"ipv6"`：IPv6 地址，如 [RFC 2373 第 2.2 节](https://tools.ietf.org/html/rfc2373#section-2.2)中所定义。
- 资源标识符
  - `"uri"`：通用资源标识符（URI)，根据 [RFC3986](https://tools.ietf.org/html/rfc3986)。
  - `"uri-reference"`：URI 参考（URI 或相对参考）, 参考 [RFC3986, section 4.1](https://tools.ietf.org/html/rfc3986#section-4.1)。
  - `"iri"`： 国际化的 "uri"，参考 [RFC3987](https://tools.ietf.org/html/rfc3987)。
  - `"iri-reference"`：国际化 "uri-reference"，参考 [RFC3987](https://tools.ietf.org/html/rfc3987)。
  - 如果 Schema 中的值具有相对于特定源路径（例如，来自网页的链接）的能力，则通常更好的做法是使用 `"uri-reference"`（或 `"iri-reference"`）而不是 `"uri"`（或 `"iri"`）。`"uri"` 仅当路径必须是绝对路径时才应使用。
- URI 模板
  - `"uri-template"`：URI 模板（任何级别），参考 [RFC6570](https://tools.ietf.org/html/rfc6570)，如果您尚不知道 URI 模板是什么，则可能不需要此值。
- JSON 指针
  - `"json-pointer"`：根据 [RFC6901](https://tools.ietf.org/html/rfc6901)，在构造[复杂的模式](https://json-schema.org/understanding-json-schema/structuring.html#structuring)时，会更多地讨论 JSON Schema 中 JSON 指针 的使用。请注意，仅当整个字符串仅包含 JSON 指针内容时，才应使用此属性 `/foo/bar`。JSON 指针 URI 片段，例如 `#/foo/bar/` 应使用 `"uri-reference"`。
  - `"relative-json-pointer"`：相对 JSON 指针。
- 正则表达式
  - `"regex"`：正则表达式，参考 [ECMA 262](https://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf)。

### 正则表达式（Regular Expressions）

`pattern` 的格式参考 [ECMA 262](https://www.ecma-international.org/publications/standards/Ecma-262.htm)。

- 单个 unicode 字符（下面的特殊字符除外）与自己匹配。
- `.`：匹配除换行符以外的任何字符。（请注意，换行符的构成在某种程度上取决于您的平台和语言环境，但实际上这并不重要）。
- `^`：仅在字符串开头匹配。
- `$`：仅在字符串末尾匹配。
- `(...)`：将一系列正则表达式分组为一个正则表达式。
- `|`：匹配|符号之前或之后的正则表达式。
- `[abc]`：匹配方括号内的任何字符。
- `[a-z]`：匹配字符范围。
- `[^abc]`：匹配未列出的任何字符。
- `[^a-z]`：匹配范围之外的任何字符。
- `+`：匹配前一个正则表达式的一个或多个重复。
- `*`：匹配零个或多个前面的正则表达式重复。
- `?`：匹配前一个正则表达式的零个或一个重复。
- `+?`，`*?`，`??`：的 `*`，`+` 和 `?` 预选赛都是贪婪的; 它们匹配尽可能多的文本。有时这种行为是不希望的，并且您希望匹配的字符越少越好。
- `(?!x)`，`(?=x)`：阴性和阳性预测先行。
- `{x}`：精确 `x` 匹配前面的正则表达式的出现。
- `{x,y}`：至少匹配 `x` 并且最多 `y` 匹配前面的正则表达式。
- `{x,}`：匹配 `x` 出现的一个或多个前面的正则表达式。
- `{x}?`，`{x,y}?`，`{x,}?`：上述表达式的惰性版本。

例如：

```json
{
  "type": "string",
  "pattern": "^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$"
}
```

### 数值类型（Numeric types）

- **整数：** `integer` 用于定义整数类型。
  - `{ "type": "integer" }`。
  - 基于 JavaScript 的验证器可以接受 `1.0` 为整数，而基于其他语言可能不接受，可以巧妙地使用 `multipleOf` 关键字 `{ "type": "number", "multipleOf": 1.0 }`。
- **数字：** `number` 用于定义任何数字类型，整数或浮点数。
  - `{ "type": "number" }`
- **倍数**：`multipleOf` 可以将数字限制为给定数字（任何正数）的倍数。
  - `{"type": "number", "multipleOf" : 10 }`
- **区间（范围）：**使用 `minimum` 和 `maximum` 关键字组合来指定数字范围（或用 `exclusiveMinimum` 与 `exclusiveMaximum` 指定单独范围）。
  - `x ≥ minimum`，指定 `minimum` 最小值且包含该值。
  - `x > exclusiveMinimum`，指定 `exclusiveMinimum` 最小值不包含该值。
  - `x ≤ maximum`，指定 `maximum` 最大值且包含该值。
  - `x < exclusiveMaximum`，指定 `exclusiveMaximum` 最大值不包含该值。

### 对象（object）

`object` JSON 中的对象类型，键值对映射类型，键都必须是字符串。

```json
{ "key": "value" }
```

#### 属性（Properties）

使用 `properties` 关键字定义对象上的属性（键值对），值为一个对象。

```json
{
  "type": "object",
  "properties": {
    "number": { "type": "number" },
    "street_name": { "type": "string" },
    "street_type": {
      "type": "string",
      "enum": ["Street", "Avenue", "Boulevard"]
    }
  }
}
```

#### 额外属性（Asdditional Properties）

使用 `additionalPropertiesis` 定义额外的属性，值为 `false` 或 schema 的对象。

```json
{
  "type": "object",
  "properties": {
    "number": { "type": "number" },
    "street_name": { "type": "string" },
    "street_type": {
      "type": "string",
      "enum": ["Street", "Avenue", "Boulevard"]
    }
  },
  "additionalProperties": { "type": "string" }
}
```

#### 必须属性（Required Properties）

- 使用 `required` 关键字声明所需属性的列表。
- `required` 关键字接受零个或多个字符串的数组，这些字符串中的每一个都必须是唯一的。

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "email": { "type": "string" },
    "address": { "type": "string" },
    "telephone": { "type": "string" }
  },
  "required": ["name", "email"]
}
```

#### 属性名称（Property names）

- 使用 `propertyNames` 对象约定属性名称的规则。
- 对象键无论如何都必须始终为字符串，定义的规则需在 `{ "type": "string" }` 基础上。

```json
{
  "type": "object",
  "propertyNames": {
    "pattern": "^[A-Za-z_][A-Za-z0-9_]*$"
  }
}
```

#### 属性个数（Size）

使用 `minProperties` 和 `maxProperties` 关键字限制对象的属性数量（非负整数）。

```json
{
  "type": "object",
  "minProperties": 2,
  "maxProperties": 3
}
```

#### 依赖（Dependencies）

`dependencies` 关键字允许基于某些特殊性质的存在目的是变化的模式。

- JSON Schema 中有两种形式的依赖关系：
  - **属性依赖（Property dependencies）** 声明如果存在给定属性，则必须存在某些其他属性。
  - **模式依赖（Schema dependencies）** 声明存在给定属性时模式会更改。

#### 属性依赖（Property dependencies）

在下面的示例中，每当提供信用卡 `credit_card` 属性时，账单 `billing_address` 也必须存在：

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "credit_card": { "type": "number" },
    "billing_address": { "type": "string" }
  },
  "required": ["name"],
  "dependencies": {
    "credit_card": ["billing_address"]
  }
}
```

但依赖性不是双向的，即数据只存在账单 `billing_address` 不存在信用卡 `credit_card` 也是正确的。当然可以定义双向依赖性：

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "credit_card": { "type": "number" },
    "billing_address": { "type": "string" }
  },
  "required": ["name"],
  "dependencies": {
    "credit_card": ["billing_address"],
    "billing_address": ["credit_card"]
  }
}
```

#### 模式依赖（Schema dependencies）

类似于属性依赖项，但是它们不仅可以指定其他必需的属性，还可以扩展模式使其具有其他约束。  
例如，这是编写上面属性依赖的另一种方法：

```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "credit_card": { "type": "number" }
  },
  "required": ["name"],
  "dependencies": {
    "credit_card": {
      "properties": {
        "billing_address": { "type": "string" }
      },
      "required": ["billing_address"]
    }
  }
}
```

#### 正则属性（Pattern Properties）

如前面提到的 `additionalProperties` 可以指定额外属性。但这还不够，可以使用 `patternProperties` 关键字，它从正则表达式映射到架构。如果其他属性与给定的正则表达式匹配，则还必须针对相应的模式进行验证。

`patternProperties` 可以与 `additionalProperties` 结合使用。`properties`、 `patternProperties`、`additionalProperties` 结合使用时为并集。

```json
{
  "type": "object",
  "properties": {
    "builtin": { "type": "number" }
  },
  "patternProperties": {
    "^S_": { "type": "string" },
    "^I_": { "type": "integer" }
  },
  "additionalProperties": { "type": "string" }
}
```

### 数组（array）

用于有序元素，JSON 数组中的每个元素都可以具有不同的类型。

```json
{ "type": "array" }
```

#### 元素（items）

默认情况下，数组的元素可以是任何东西。但也可以根据使用 `items`， `additionalItems` 和`contains` 关键字验证数组的元素。
JSON 数组通常有两种方式：

- **列表验证（List validation）：** 任意长度的序列，其中每个项目都匹配相同的模式（schema）。
- **元组验证（Tuple validation）：** 固定长度的序列，其中每个项目可能具有不同的模式（schema）。

#### 列表验证（List validation）

- 每个项目都匹配相同模式，`items` 关键字设置为单个模式，验证数组中的所有项目，空数组也符合。
- 当 `items` 为单个模式（为一个对象）时，`additionalItems` 关键字是没有意义的，因此不应使用。

如下，所有元素都为数字：

```json
{
  "type": "array",
  "items": {
    "type": "number"
  }
}
```

`contains` 模式仅需要针对数组中的一个或多个项目进行验证。如下，只需包含至少一个数字元素：

```json
{
  "type": "array",
  "contains": {
    "type": "number"
  }
}
```

#### 元组验证（Tuple validation）

如果数组中每个下标的元素都有不同的含义，则需要定义不同的类型。如:

```js
[编号，街道名称，街道类型，方向]
```

为此，我们将 `items` 关键字设置为数组，其中每个索引的元素对应于的不同类型定义。在验证数据的时候可以不提供所有元素，而且默认情况下也可以在结尾添加其他额外的元素。

```json
{
  "type": "array",
  "items": [
    {
      "type": "number"
    },
    {
      "type": "string"
    },
    {
      "type": "string",
      "enum": ["Street", "Avenue", "Boulevard"]
    },
    {
      "type": "string",
      "enum": ["NW", "NE", "SW", "SE"]
    }
  ]
}
```

但当 `additionalItems` 是 `false`，不能在数组结尾包含额外的元素。`additionalItems` 也可以声明为一个对象。

```json
{
  "type": "array",
  "items": [
    {
      "type": "number"
    },
    {
      "type": "string"
    },
    {
      "type": "string",
      "enum": ["Street", "Avenue", "Boulevard"]
    },
    {
      "type": "string",
      "enum": ["NW", "NE", "SW", "SE"]
    }
  ],
  "additionalItems": { "type": "string" }
}
```

#### 长度（Length）

可以使用 `minItemsand`、 `maxItems`关键字指定数组的长度（非负数）。如下长度范围为 2 ～ 3：

```json
{
  "type": "array",
  "minItems": 2,
  "maxItems": 3
}
```

#### 唯一（Uniqueness）

将 `uniqueItems` 关键字设置为 `true` 可以确保数组中的每个元素都是唯一的。空数组也符合。

```json
{
  "type": "array",
  "uniqueItems": true
}
```

### 布尔（boolean）

布尔类型仅匹配两个特殊值：`true` 和 `false`。注意：只认可 `true` 或 `false`，`0` 和 `1` 不被接受；`"true"` 也不被接受。

```json
{ "type": "boolean" }
```

### 空值（null）

空类型通常用于表示缺失值。当架构指定 `type` 为 `null`，它只有一个可接受的值：`null`。

```json
{ "type": "null" }
```

### 通用关键字（Generic keywords）

#### 注释（Annotations）

JSON Schema 包括几个关键字 `title`，`description`，`default`，`examples` 不严格用于验证，但用来描述一个模式的一部分。这些注释属性都不是必须的，但鼓励添加这些描述。

- 在 `title`和 `description` 关键字必须是字符串。“title” 将最好是简短的，而 “description” 应该提供关于改 schema 的目的进行详细的描述。
- `default` 关键字指定的项目的默认值。JSON 处理工具可能会使用此信息为缺少的键/值对提供默认值。非必须。
- `examples` 关键字是用于提供一系列针对该模式进行验证的示例的地方。

```json
{
  "title": "Match anything",
  "description": "This is a schema that matches anything.",
  "default": "Default value",
  "examples": ["Anything", 4035]
}
```

#### 评论（Comments）

`$comment` 关键字是严格用于添加注释/批注的 JSON 模式源。它的值必须始终是一个字符串。评论/批注留给 JSON 模式的未来编辑者很有用（很可能是您将来的自己），但不应用于与模式用户进行通信。

#### 枚举值（Enumerated values）

`enum` 关键字被用于限制值，以一个固定的一组值。它必须是一个至少包含一个元素的数组，其中每个元素都是唯一的。且 `type` 和 `enum` 是交集，必须同时满足。

```json
{
  "type": "string",
  "enum": ["red", "amber", "green"]
}
```

#### 常量值（Constant values）

`const` 关键字被用于限制单一的值。

```json
{
  "properties": {
    "country": {
      "const": "United States of America"
    }
  }
}
```

`const` 是 `enum` 的语法糖。下面两个定义是等价的。

```json
{ "const": "United States of America" }

{ "enum": [ "United States of America" ] }
```

### 媒体：字符串编码非 JSON 数据（Media: string-encoding non-JSON data）

#### contentMediaType

`contentMediaType` 关键字指定的 MIME 类型的字符串的内容，参考 [RFC 2046](https://tools.ietf.org/html/rfc2046)。

#### contentEncoding

`contentEncoding` 关键字指定的编码用于存储内容，参考 [RFC 2054，部分 6.1](https://tools.ietf.org/html/rfc2045)。  
可接受的值为`7bit`，`8bit`，`binary`，`quoted-printable` 和 `base64`。如果未指定，则编码与包含的 JSON 文档相同。

在不深入探讨每种编码的底层细节的情况下，实际上只有两个对现代用法有用的选项：

- 如果内容的编码方式与随附的 JSON 文档相同（出于实际目的，几乎总是 UTF-8），则请保持 `contentEncoding` 未指定状态，并将内容原样包含在字符串中。这包括基于文本的内容类型，例如 `text/html`或 `application/xml`。
- 如果内容是二进制数据，请设置 `contentEncoding` 为 `base64` 并使用 [Base64](https://tools.ietf.org/html/rfc4648) 对内容进行编码。这将包括许多图像类型，例如 `image/png` 或音频类型，例如 `audio/mpeg`。

#### 例子

指定该字符串包含一个 HTML 文档，该 HTML 文档使用与周围文档相同的编码进行编码：

```json
{
  "type": "string",
  "contentMediaType": "text/html"
}
```

指示字符串包含使用 Base64 编码的 PNG 图像：

```json
{
  "type": "string",
  "contentEncoding": "base64",
  "contentMediaType": "image/png"
}
```

### 结合模式（Combining schemas）

JSON 模式包括一些用于将模式组合在一起的关键字。

- `allOf` 必须对**所有**子方案**均**有效
- `anyOf` 必须是有效对抗**任何**的子模式的
- `oneOf` 必须确保有效的**只有一个**的子模式的
- `not` 必须**不能**是对给定的模式是有效的，即非在声明规则

`allOf`，`anyOf`，`oneOf` 关键字都必须设置为一个数组，其中每个项目都是独立一个定义，即数组中列出的模式彼此之间一无所知。

#### 所有的（allOf）

要针对进行验证 `allOf`，给定的数据必须对所有给定的子方案都有效。且子方案有交集。

```json
{
  "allOf": [{ "type": "string" }, { "maxLength": 5 }]
}
```

#### 任何（anyOf）

验证 `anyOf`，给定的数据必须针对任何（一个或多个）给定的子方案有效。并集。

```json
{
  "anyOf": [{ "type": "string" }, { "type": "number" }]
}
```

#### 一个（oneOf）

验证 `oneOf`，给定的数据必须对给定的子方案之一有效。有且只能满足一个条件。

如下例中 `15` 是不能满足的：

```json
{
  "oneOf": [
    { "type": "number", "multipleOf": 5 },
    { "type": "number", "multipleOf": 3 }
  ]
}
```

#### 不（not）

`not` 关键字声明一个实例进行验证，要求验证的数据它不符合定义的子模式。如下例，非字符串类型：

```json
{ "not": { "type": "string" } }
```

### 有条件地应用子模式

`if`，`then` 和 `else` 关键字。规则为如果 `if` 有效，则 `then` 也必须有效（并被 `else` 忽略。）如果 `if` 无效，则 `else` 必须有效（并被`then`忽略）。

例如定义不同地方的邮政编码：如果地址在美国，则 `postal_code` 字段为五个数字后跟一个可选的四位后缀。如果地址在加拿大，则该 `postal_code`字段为六位字母数字字符串，字母和数字交替出现。

```json
{
  "type": "object",
  "properties": {
    "street_address": {
      "type": "string"
    },
    "country": {
      "enum": ["United States of America", "Canada"]
    }
  },
  "if": {
    "properties": { "country": { "const": "United States of America" } }
  },
  "then": {
    "properties": { "postal_code": { "pattern": "[0-9]{5}(-[0-9]{4})?" } }
  },
  "else": {
    "properties": {
      "postal_code": { "pattern": "[A-Z][0-9][A-Z] [0-9][A-Z][0-9]" }
    }
  }
}
```

### `$schema` 关键字

`$schema` 关键字被用于声明一个 JSON 片段。它还声明了针对该架构编写的 JSON Schema 标准版本。建议所有 JSON 模式都有一个 `$schema` 条目，该条目必须位于根目录下。

```json
"$schema": "http://json-schema.org/schema#"
```

#### 进阶（Advanced）

如果需要声明您的模式是针对特定版本的 JSON Schema 标准编写的，则应在路径中包括草案名称，例如：

- `http://json-schema.org/draft-07/schema#`
- `http://json-schema.org/draft-06/schema#`
- `http://json-schema.org/draft-04/schema#`

此外，如果您已经扩展了 JSON 模式语言，使其包含用于验证值的自定义关键字，则可以将自定义 URI 用于 `$schema`。它不能是上述预定义的值之一，并且可能应包含您拥有的域名。

## 构建复杂的模式

### 重用

复用部分建议将其放在父架构下的键 `definitions` 下。

```json
{
  "definitions": {
    "address": {
      "type": "object",
      "properties": {
        "street_address": { "type": "string" },
        "city": { "type": "string" },
        "state": { "type": "string" }
      },
      "required": ["street_address", "city", "state"]
    }
  }
}
```

#### `$ref` 属性

`$ref` 关键字从其他地方引用此模式片段。值为是 URI 的引用，`#` 符号（“片段”或“命名锚”）后的部分为[JSON Pointer](https://tools.ietf.org/html/rfc6901)的格式。

```json
{ "$ref": "#/definitions/address" }
```

如果您使用的是同一文档中的定义，则该 `$ref` 值以井号（`#`）开头。之后，以斜杠分隔的项目遍历文档中对象中的键。因此，在我们的示例中 `"#/definitions/address"` 意味着：

- 转到文档的根
- 找到 `"definitions"` 键的值。
- 在该对象中，找到键 `"address"` 的值

`$ref` 可以解析为引用另一个文件的 URI，因此，如果您希望将定义包含在单独的文件中，也可以这样做。例如：

```json
{ "$ref": "definitions.json#/address" }
```

所以完整事例为：

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "address": {
      "type": "object",
      "properties": {
        "street_address": { "type": "string" },
        "city": { "type": "string" },
        "state": { "type": "string" }
      },
      "required": ["street_address", "city", "state"]
    }
  },
  "type": "object",
  "properties": {
    "billing_address": { "$ref": "#/definitions/address" },
    "shipping_address": { "$ref": "#/definitions/address" }
  }
}
```

### 递归

`$ref` 元素可用于创建引用自己的递归模式。例如，您可能有一个 `person` 架构，其中包含一个数组 `children`，每个数组也是 `person` 实例。

```json {10}
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "person": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "children": {
          "type": "array",
          "items": { "$ref": "#/definitions/person" },
          "default": []
        }
      }
    }
  },
  "type": "object",
  "properties": {
    "person": { "$ref": "#/definitions/person" }
  }
}
```

### `$id` 属性

`$id`属性是一个 URI 引用，有两个用途：

- 它为模式声明了唯一的标识符。
- 它声明了一个基本 URI，`$ref` 可以针对该基本 URI 引用进行解析。

最佳实践是，在每个顶级架构都应\$id 使用您控制的域设置为绝对 URI（而不是相对引用）。例如，如果您拥有 `foo.bar` 域，并且具有地址架构，则可以 `$id` 如下设置：

```json
{ "$id": "http://foo.bar/schemas/address.json" }
```

注意该 `$id`属性的第二个用途：它为 `$ref` 文件中其他位置的 URI 引用声明一个基本 URI。例如下面的定义会加载 `http://foo.bar/schemas/person.json`：

```json
{ "$ref": "person.json" }
```

#### `$id` 与 `$ref` 一起使用

`$id` 还提供了一种无需使用 JSON 指针即可引用子模式的方法。这意味着您可以通过唯一名称而不是在 JSON 树中出现的位置来引用它们。

重用上面的地址示例，我们可以 `$id` 向地址架构添加一个属性，然后通过该属性来引用它。

```json {5,17,18}
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "address": {
      "$id": "#address",
      "type": "object",
      "properties": {
        "street_address": { "type": "string" },
        "city": { "type": "string" },
        "state": { "type": "string" }
      },
      "required": ["street_address", "city", "state"]
    }
  },
  "type": "object",
  "properties": {
    "billing_address": { "$ref": "#address" },
    "shipping_address": { "$ref": "#address" }
  }
}
```

#### 扩展

`$ref` 真正的亮点在于使用 `allOf`，`anyOf` 和 `oneOf` 组合的时候。（[结合模式（Combining schemas）](#结合模式（Combining-schemas）)]）

假设对于送货地址，我们想知道该地址是居住地址还是公司地址，因为所使用的送货方式可能取决于该地址。对于帐单邮寄地址，我们不希望存储该信息，因为它不适用。

为了解决这个问题，我们将更新送货地址的定义：

```json
"shipping_address": { "$ref": "#/definitions/address" }
```

而是使用 `allOf` 关键字，将核心地址架构定义和该地址类型的额外架构摘要结合在一起：

```json
"shipping_address": {
  "allOf": [
    // Here, we include our "core" address schema...
    { "$ref": "#/definitions/address" },
    // ...and then extend it with stuff specific to a shipping
    // address
    { "properties": {
        "type": { "enum": [ "residential", "business" ] }
      },
      "required": ["type"]
    }
  ]
}
```

绑在一起

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "address": {
      "type": "object",
      "properties": {
        "street_address": { "type": "string" },
        "city": { "type": "string" },
        "state": { "type": "string" }
      },
      "required": ["street_address", "city", "state"]
    }
  },
  "type": "object",
  "properties": {
    "billing_address": { "$ref": "#/definitions/address" },
    "shipping_address": {
      "allOf": [
        { "$ref": "#/definitions/address" },
        {
          "properties": { "type": { "enum": ["residential", "business"] } },
          "required": ["type"]
        }
      ]
    }
  }
}
```

## 参考

- [JSON Schema](https://json-schema.org/)
- [Understanding JSON Schema](https://json-schema.org/understanding-json-schema)
