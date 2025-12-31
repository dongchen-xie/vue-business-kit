---
title: Button
lang: zh-CN
---

# Button 按钮

基于 [Element Plus Button](https://element-plus.org/zh-CN/component/button.html) 增强的按钮组件。

支持 Iconify 图标。

## 基本用法

:::demo 使用 `type`、`plain`、`round`、`circle` 和 `icon` 来定义按钮的样式。（`icon` 属性同时支持 Element Plus 内置图标和 Iconify 图标名称，例如 'tabler:refresh'。）

button/basic

:::

## 禁用状态

`disabled` 属性用于控制按钮是否禁用，接受布尔值。

:::demo 通过 `disabled` 属性设置按钮是否禁用，该属性值为布尔类型。

button/disabled

:::

## 链接按钮

:::warning

`type="text"` 已被**废弃**，Element Plus 计划在 <el-tag round effect="plain" size="small">3.0.0</el-tag> 版本中移除该用法，请切换至新的 API。

新 API `link` 已在 Element Plus <el-tag round effect="plain" size="small">2.2.1</el-tag> 版本中新增，你可以通过 `type` API 为链接按钮设置主题样式。

:::

:::demo

button/link

:::

## 文字按钮

:::tip

文字按钮已升级全新设计，如果你希望使用旧版文字按钮样式，可参考 [Link 链接](https://element-plus.org/zh-CN/component/link#basic) 组件。

同时 API 也已更新：由于 `type` 属性需要表征按钮样式，因此 Element Plus 新增了 `text: boolean` 专属 API 用于定义文字按钮。

:::

无边框、无背景色的纯文字按钮。

:::demo

button/text

:::

## 图标按钮

通过图标为按钮增加额外的视觉含义，可单独使用图标节省空间，也可搭配文字使用。

:::demo 使用 `icon` 属性添加图标，支持 Iconify 图标名称（例如 'tabler:home'）或 Element Plus 内置图标组件。如需在文字右侧添加图标，可通过 `<i>` 标签实现，也支持自定义图标。以下示例使用 Iconify 图标。

button/icon

:::

## 按钮组

将一系列同类操作的按钮组合展示，使用 `<bk-button-group>` 标签包裹即可。

:::demo 使用 `<bk-button-group>` 标签对按钮进行分组。

button/group

:::

## 加载状态

点击按钮后触发数据加载，按钮展示加载状态。

设置 `loading` 属性为 `true` 即可展示加载状态。

:::tip

你可以通过 `loading` 插槽或 `loadingIcon` 属性自定义加载组件，其中 `loading` 插槽优先级高于 loadingIcon 属性。

:::

:::demo

button/loading

:::

## 尺寸

除默认尺寸外，按钮组件提供了 `large`、`small` 两种额外尺寸，适配不同场景。

:::demo 使用 `size` 属性设置按钮尺寸，可选值为 `large`、`small`。

button/size

:::

## 自定义标签

可自定义按钮渲染的根元素标签，例如 button、div、a、router-link、nuxt-link 等。

:::demo

button/tag

:::

## Button API

### Button 属性

| 名称                     | 说明                        | 类型                     | 默认值  |
| ------------------------ | --------------------------- | ------------------------ | ------- |
| icon ^(extended)         | 图标组件或 Iconify 图标名称 | ^[string] / ^[Component] | —       |
| loading-icon ^(extended) | 自定义加载图标组件          | ^[string] / ^[Component] | Loading |

<details>
<summary>Element Plus Button 原生属性</summary>

| 名称              | 说明                                                                      | 类型                                                                                                     | 默认值 |
| ----------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------ |
| size              | 按钮尺寸                                                                  | ^[enum]`'large' \| 'default' \| 'small'`                                                                 | —      |
| type              | 按钮类型，设置 `color` 时优先级高于 `type`                                | ^[enum]`'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| '' \| 'text' (已废弃)` | —      |
| plain             | 是否为朴素按钮                                                            | ^[boolean]                                                                                               | false  |
| text              | 是否为文字按钮                                                            | ^[boolean]                                                                                               | false  |
| bg                | 文字按钮是否始终显示背景色                                                | ^[boolean]                                                                                               | false  |
| link              | 是否为链接按钮                                                            | ^[boolean]                                                                                               | false  |
| round             | 是否为圆角按钮                                                            | ^[boolean]                                                                                               | false  |
| circle            | 是否为圆形按钮                                                            | ^[boolean]                                                                                               | false  |
| loading           | 是否为加载状态                                                            | ^[boolean]                                                                                               | false  |
| disabled          | 是否禁用按钮                                                              | ^[boolean]                                                                                               | false  |
| autofocus         | 原生自动聚焦属性                                                          | ^[boolean]                                                                                               | false  |
| native-type       | 原生 button 标签的 type 属性                                              | ^[enum]`'button' \| 'submit' \| 'reset'`                                                                 | button |
| auto-insert-space | 自动在两个中文字符之间插入空格（仅在文字长度为 2 且全部为中文字符时生效） | ^[boolean]                                                                                               | false  |
| color             | 自定义按钮颜色，会自动计算 hover 和 active 状态的颜色                     | ^[string]                                                                                                | —      |
| dark              | 暗黑模式，自动将 `color` 转换为暗黑模式下的颜色                           | ^[boolean]                                                                                               | false  |
| tag               | 自定义根元素标签                                                          | ^[string] / ^[Component]                                                                                 | button |

</details>

### Button 插槽

<details>
<summary>Element Plus Button 原生插槽</summary>

| 名称    | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
| loading | 自定义加载组件 |
| icon    | 自定义图标组件 |

</details>

### Button 暴露的属性

<details>
<summary>Element Plus Button 原生暴露属性</summary>

| 名称           | 说明             | 类型                                                                                                           |
| -------------- | ---------------- | -------------------------------------------------------------------------------------------------------------- |
| ref            | 按钮 DOM 元素    | ^[object]`Ref<HTMLButtonElement>`                                                                              |
| size           | 按钮尺寸         | ^[object]`ComputedRef<'' \| 'small' \| 'default' \| 'large'>`                                                  |
| type           | 按钮类型         | ^[object]`ComputedRef<'' \| 'default' \| 'primary' \| 'success' \| 'warning' \| 'info' \| 'danger' \| 'text'>` |
| disabled       | 按钮是否禁用     | ^[object]`ComputedRef<boolean>`                                                                                |
| shouldAddSpace | 是否需要添加空格 | ^[object]`ComputedRef<boolean>`                                                                                |

</details>

## ButtonGroup API

### ButtonGroup 属性

<details>
<summary>Element Plus ButtonGroup 原生属性</summary>

| 名称      | 说明                     | 类型                                                               | 默认值     |
| --------- | ------------------------ | ------------------------------------------------------------------ | ---------- |
| size      | 控制按钮组内所有按钮尺寸 | ^[enum]`'large' \| 'default' \| 'small'`                           | —          |
| type      | 控制按钮组内所有按钮类型 | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —          |
| direction | 按钮组排列方向           | ^[enum]`'horizontal' \| 'vertical'`                                | horizontal |

</details>

### ButtonGroup 插槽

<details>
<summary>Element Plus ButtonGroup 原生插槽</summary>

| 名称    | 说明             | 子标签 |
| ------- | ---------------- | ------ |
| default | 自定义按钮组内容 | Button |

</details>
