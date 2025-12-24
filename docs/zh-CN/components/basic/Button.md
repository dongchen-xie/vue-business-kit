---
title: Button 按钮
lang: zh-CN
---

# Button 按钮

基于 [Element Plus Button](https://element-plus.org/zh-CN/component/button) 增强的按钮组件，支持 Iconify 图标。

## 基础用法

:::demo 使用 `type`、`plain`、`round`、`circle` 和 `icon` 来定义按钮的样式。（`icon` 属性支持 Element Plus 图标和 Iconify 图标名称，例如 'tabler:refresh'）

button/basic

:::

## 禁用状态

:::demo 使用 `disabled` 属性来定义按钮是否被禁用。该属性接受一个 `Boolean` 类型的值。

button/disabled

:::

## 链接按钮

:::warning

`type="text"` 已被 **废弃**，将在 <el-tag round effect="plain" size="small">3.0.0</el-tag> 版本中移除，请考虑切换到新的 API。

新的 API `link` 已在 <el-tag round effect="plain" size="small">2.2.1</el-tag> 版本中添加，你可以使用 `type` API 来设置链接按钮的主题。

:::

:::demo

button/link

:::

## 文字按钮

:::tip

文字按钮已升级为新设计，如果你想使用之前的版本，可以查看 [Link](https://element-plus.org/zh-CN/component/link#basic)。

API 也已更新，因为 `type` 属性也代表按钮的样式。所以 Element Plus 必须为文字按钮创建一个新的 API `text: boolean`。

:::

没有边框和背景色的按钮。

:::demo

button/text

:::

## 图标按钮

使用图标为按钮添加更多含义。你也可以单独使用图标来节省空间，或者与文字一起使用。

:::demo 使用 `icon` 属性来添加图标。你可以使用 Iconify 图标名称（例如 'tabler:home'）或在 Element Plus 图标组件中查找图标列表。在文字右侧添加图标可以通过 `<i>` 标签实现。也可以使用自定义图标。以下示例使用 Iconify。

button/icon

:::

## 按钮组

显示为按钮组，可用于分组一系列类似的操作。

:::demo 使用 `<bk-button-group>` 标签来分组你的按钮。

button/group

:::

## 加载状态按钮

点击按钮来加载数据，然后按钮显示加载状态。

设置 `loading` 属性为 `true` 来显示加载状态。

:::tip

你可以使用 `loading` 插槽或 `loadingIcon` 来自定义加载组件。

注意：`loading` 插槽的优先级高于 loadingIcon

:::

:::demo

button/loading

:::

## 尺寸

除了默认尺寸外，按钮组件还提供了三个额外的尺寸供你在不同场景中选择。

:::demo 使用 `size` 属性来设置额外的尺寸，可选值包括 `large`、`small`。

button/size

:::

## 标签

你可以自定义元素标签，例如 button、div、a、router-link、nuxt-link。

:::demo

button/tag

:::

## Button API

### Button 属性

| 名称         | 说明                      | 类型                     | 默认值  |
| ------------ | ------------------------- | ------------------------ | ------- |
| icon         | 图标组件或 iconify 图标名 | ^[string] / ^[Component] | —       |
| loading-icon | 自定义加载图标组件        | ^[string] / ^[Component] | Loading |

<details>
<summary>Element Plus Button 属性</summary>

| 名称              | 说明                                                                        | 类型                                                                                                     | 默认值  |
| ----------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| size              | 按钮尺寸                                                                    | ^[enum]`'large' \| 'default' \| 'small'`                                                                 | —       |
| type              | 按钮类型，当设置 `color` 时，后者优先                                       | ^[enum]`'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| '' \| 'text' (已废弃)` | —       |
| plain             | 是否为朴素按钮                                                              | ^[boolean]                                                                                               | false   |
| text              | 是否为文字按钮                                                              | ^[boolean]                                                                                               | false   |
| bg                | 是否始终显示文字按钮的背景色                                                | ^[boolean]                                                                                               | false   |
| link              | 是否为链接按钮                                                              | ^[boolean]                                                                                               | false   |
| round             | 是否为圆角按钮                                                              | ^[boolean]                                                                                               | false   |
| circle            | 是否为圆形按钮                                                              | ^[boolean]                                                                                               | false   |
| loading           | 是否为加载中状态                                                            | ^[boolean]                                                                                               | false   |
| loading-icon      | 自定义加载图标组件                                                          | ^[string] / ^[Component]                                                                                 | Loading |
| disabled          | 按钮是否为禁用状态                                                          | ^[boolean]                                                                                               | false   |
| icon              | 图标组件                                                                    | ^[string] / ^[Component]                                                                                 | —       |
| autofocus         | 原生 `autofocus` 属性                                                       | ^[boolean]                                                                                               | false   |
| native-type       | 原生 `type` 属性                                                            | ^[enum]`'button' \| 'submit' \| 'reset'`                                                                 | button  |
| auto-insert-space | 自动在两个中文字符之间插入空格（仅当文本长度为 2 且所有字符都是中文时生效） | ^[boolean]                                                                                               | false   |
| color             | 自定义按钮颜色，自动计算 `hover` 和 `active` 颜色                           | ^[string]                                                                                                | —       |
| dark              | 深色模式，自动将 `color` 转换为深色模式颜色                                 | ^[boolean]                                                                                               | false   |
| tag               | 自定义元素标签                                                              | ^[string] / ^[Component]                                                                                 | button  |

</details>

### Button 插槽

<details>
<summary>Element Plus Button 插槽</summary>

| 名称    | 说明             |
| ------- | ---------------- |
| default | 自定义默认内容   |
| loading | 自定义加载中组件 |
| icon    | 自定义图标组件   |

</details>

### Button 暴露方法

<details>
<summary>Element Plus Button 暴露</summary>

| 名称           | 说明           | 类型                                                                                                           |
| -------------- | -------------- | -------------------------------------------------------------------------------------------------------------- |
| ref            | 按钮 html 元素 | ^[object]`Ref<HTMLButtonElement>`                                                                              |
| size           | 按钮尺寸       | ^[object]`ComputedRef<'' \| 'small' \| 'default' \| 'large'>`                                                  |
| type           | 按钮类型       | ^[object]`ComputedRef<'' \| 'default' \| 'primary' \| 'success' \| 'warning' \| 'info' \| 'danger' \| 'text'>` |
| disabled       | 按钮是否禁用   | ^[object]`ComputedRef<boolean>`                                                                                |
| shouldAddSpace | 是否添加空格   | ^[object]`ComputedRef<boolean>`                                                                                |

</details>

## ButtonGroup API

### ButtonGroup 属性

<details>
<summary>Element Plus ButtonGroup 属性</summary>

| 名称      | 说明                     | 类型                                                               | 默认值     |
| --------- | ------------------------ | ------------------------------------------------------------------ | ---------- |
| size      | 控制该按钮组内按钮的大小 | ^[enum]`'large' \| 'default' \| 'small'`                           | —          |
| type      | 控制该按钮组内按钮的类型 | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —          |
| direction | 显示方向                 | ^[enum]`'horizontal' \| 'vertical'`                                | horizontal |

</details>

### ButtonGroup 插槽

<details>
<summary>Element Plus ButtonGroup 插槽</summary>

| 名称    | 说明             | 子标签 |
| ------- | ---------------- | ------ |
| default | 自定义按钮组内容 | Button |

</details>

## 类型声明

<details>
  <summary>显示声明</summary>

```ts
import type { ButtonProps } from "element-plus"
import type { Component } from "vue"

export interface ButtonProps extends Omit<ButtonProps, "icon"> {
  icon?: string | Component
}
```

</details>
