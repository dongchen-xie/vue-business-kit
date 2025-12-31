---
title: Form
lang: zh-CN
---

# Form 表单

基于 [Element Plus Form](https://element-plus.org/zh-CN/component/form.html) 增强的表单组件。

表单由`input`、 `radio`、 `select`、 `checkbox`等控件组成，用以收集、校验、提交数据。

:::tip

该组件已升级为弹性布局（flex），替代了旧的浮动布局（float）。

:::

## 基本用法

包含各类表单项，如`input`、 `select`、 `radio`、 `checkbox`、 `date-picker`、 `time-picker`、 `switch`等。

:::demo 可通过 `items` 属性以配置化方式定义表单结构，也可手动使用 `bk-form-item` 组件定义表单项。每个表单项支持配置 `prop`、`label` 及相关字段属性等选项。

form/basic

:::

:::tip 提示

[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) 规范中提到：

> 当表单中只有一个单行文本输入框时，用户代理应将该字段中的回车视为提交表单的请求。

如需阻止该行为，可在 `<bk-form>` 上添加 `@submit.prevent`。

:::

## 多列布局

当垂直空间受限且表单结构较简单时，可将表单项横向排列。

:::demo 设置 `col-num` 属性指定表单布局的列数。

form/multi-column-form

:::

## 标签对齐方式

可根据设计需求，选择不同的标签对齐方式。

可在单个表单项中单独设置 `label-position`，若未设置，则继承 `bk-form` 的 `label-position` 配置。

:::demo `label-position` 属性用于设置标签对齐方式，可选值为 `top`（顶部）或 `left`（左侧）。设置为 `top` 时，标签会显示在表单项的顶部。

form/alignment

:::

## 数据校验

表单组件支持数据校验功能，帮助快速发现并修正输入错误。

:::demo 只需为 `Form` 组件添加 `rules` 属性并传入校验规则，同时在 `items` 配置（或 `bk-form-item` 组件）中为每个表单项定义 `prop` 字段，绑定到对应的模型字段即可。更多用法参考 [async-validator](https://github.com/yiminghe/async-validator)。

form/validation

:::

## 自定义校验规则

本示例展示如何自定义校验规则，实现双密码一致性验证。

:::demo 此处使用 `status-icon` 属性，通过图标直观展示校验结果。

form/custom-validation

:::

:::tip 提示

自定义校验的回调函数**必须被调用**，否则会导致校验流程卡死。高级用法参考 [async-validator](https://github.com/yiminghe/async-validator)。

:::

## 动态增减表单项

:::demo 除了在表单组件上一次性传入所有校验规则外，也可针对单个表单项动态添加或删除校验规则。

form/form-items

:::

## 数字类型校验

:::demo 数字类型校验需要在输入框的 `v-model` 绑定上添加 `.number` 修饰符，该修饰符由 Vue 提供，用于将输入的字符串值转换为数字类型。

form/number-validate

:::

:::tip 提示

当 `bk-form-item` 嵌套在另一个 `bk-form-item` 中时，其标签宽度会被设为 `0`。如有需要，可在该嵌套的 `bk-form-item` 上手动设置 `label-width`。

:::

## 尺寸控制

表单内的所有组件会默认继承表单的 `size` 属性，表单项（FormItem）也单独提供 `size` 属性用于控制尺寸。

:::demo 若不想让某个组件继承表单/表单项的尺寸，可单独为该组件设置 `size` 属性覆盖继承值。

form/size-control

:::

## 无障碍访问

当 `bk-form-item` 内仅包含单个输入控件（如输入框、选择器、复选框等）时，表单项的标签会自动关联到该输入控件。若包含多个输入控件，表单项会被赋予 [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) 的 [group](https://www.w3.org/TR/wai-aria/#group) 角色，此时需要开发者自行为每个输入控件添加辅助标签。

:::demo

form/accessibility

:::

## Form API

### Form 属性

| 名称   | 说明                                                                 | 类型                    | 默认值 |
| ------ | -------------------------------------------------------------------- | ----------------------- | ------ |
| items  | 表单项配置数组，每个项可指定类型、组件属性（componentProps）、子项等 | ^[array]`FormItemCtx[]` | —      |
| colNum | 多列表单布局的列数                                                   | ^[number]               | 1      |

<details>
<summary>Element Plus Form 原生属性</summary>

| 名称                      | 说明                                                                                                                                                     | 类型                                           | 默认值 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------ |
| model                     | 表单数据对象                                                                                                                                             | ^[object]`Record<string, any>`                 | —      |
| rules                     | 表单校验规则                                                                                                                                             | ^[object]`FormRules`                           | —      |
| inline                    | 是否行内表单（推荐使用 `col-num` 属性替代）                                                                                                              | ^[boolean]                                     | false  |
| label-position            | 标签的位置，可选值为 `left` / `right` / `top`，设置为 `left` 或 `right` 时，需同时设置 `label-width`                                                     | ^[enum]`'left' \| 'right' \| 'top'`            | right  |
| label-width               | 标签的宽度，例如 `50px`，支持 `auto`，所有直接子表单项会继承该值                                                                                         | ^[string] / ^[number]                          | ''     |
| label-suffix              | 标签的后缀文本                                                                                                                                           | ^[string]                                      | ''     |
| hide-required-asterisk    | 是否隐藏必填字段标签旁的红色星号                                                                                                                         | ^[boolean]                                     | false  |
| require-asterisk-position | 星号的位置，可选值为 `left` / `right`                                                                                                                    | ^[enum]`'left' \| 'right'`                     | left   |
| show-message              | 是否显示校验错误信息                                                                                                                                     | ^[boolean]                                     | true   |
| inline-message            | 是否将校验错误信息以行内形式展示                                                                                                                         | ^[boolean]                                     | false  |
| status-icon               | 是否显示校验状态图标                                                                                                                                     | ^[boolean]                                     | false  |
| validate-on-rule-change   | 是否在 `rules` 属性变化时触发校验                                                                                                                        | ^[boolean]                                     | true   |
| size                      | 控制表单内组件的尺寸，可选值为 `large` / `default` / `small`                                                                                             | ^[enum]`'' \| 'large' \| 'default' \| 'small'` | —      |
| disabled                  | 是否禁用表单内所有组件，设置为 `true` 时会覆盖内部组件的 `disabled` 属性                                                                                 | ^[boolean]                                     | false  |
| scroll-to-error           | 校验失败时，是否自动滚动到第一个错误表单项                                                                                                               | ^[boolean]                                     | false  |
| scroll-into-view-options  | 校验失败滚动到错误项时，传递给 `scrollIntoView` 的配置项，参考 [scrollIntoView](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView) | ^[object]`ScrollIntoViewOptions` / ^[boolean]  | true   |

</details>

### Form 事件

<details>
<summary>Element Plus Form 原生事件</summary>

| 名称     | 说明                 | 类型                                                                         |
| -------- | -------------------- | ---------------------------------------------------------------------------- |
| validate | 表单项校验触发的事件 | ^[Function]`(prop: FormItemProp, isValid: boolean, message: string) => void` |

</details>

### Form 插槽

<details>
<summary>Element Plus Form 原生插槽</summary>

| 名称    | 说明           | 子标签   |
| ------- | -------------- | -------- |
| default | 自定义默认内容 | FormItem |

</details>

### Form 暴露的方法

<details>
<summary>Element Plus Form 原生暴露方法</summary>

| 名称          | 说明                                     | 类型                                                                                                                              |
| ------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| validate      | 校验整个表单，接收回调函数或返回 Promise | ^[Function]`(callback?: FormValidateCallback) => Promise<void>`                                                                   |
| validateField | 校验指定的表单项                         | ^[Function]`(props?: Arrayable<FormItemProp> \| undefined, callback?: FormValidateCallback \| undefined) => FormValidationResult` |
| resetFields   | 重置指定的表单项，清除校验结果           | ^[Function]`(props?: Arrayable<FormItemProp> \| undefined) => void`                                                               |
| scrollToField | 滚动到指定的表单项                       | ^[Function]`(prop: FormItemProp) => void`                                                                                         |
| clearValidate | 清除所有或指定表单项的校验提示           | ^[Function]`(props?: Arrayable<FormItemProp> \| undefined) => void`                                                               |
| fields        | 获取所有表单项的上下文                   | ^[array]`FormItemContext[]`                                                                                                       |
| getField      | 获取指定表单项的上下文                   | ^[Function]`(prop: FormItemProp) => FormItemContext \| undefined`                                                                 |

</details>

## FormItem API

### FormItem 属性

| 名称             | 说明                                               | 类型                            | 默认值 |
| ---------------- | -------------------------------------------------- | ------------------------------- | ------ |
| type ^(required) | 表单项组件类型（例如：'input'、'select'、'radio'） | ^[string]                       | —      |
| componentProps   | 传递给底层组件的额外属性                           | ^[object]`Record<string, any>`  | —      |
| children         | 用于复杂布局的嵌套表单项配置                       | ^[array]`Record<string, any>[]` | —      |

<details>
<summary>Element Plus FormItem 原生属性</summary>

| 名称            | 说明                                                                                                                              | 类型                                                | 默认值 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------ |
| prop            | 表单模型字段，支持嵌套路径（如 `a.b.0` 或 `['a', 'b', '0']`），在使用 `validate` / `resetFields` 方法时，该属性是必填的           | ^[string] / ^[string[]]                             | —      |
| label           | 标签文本                                                                                                                          | ^[string]                                           | —      |
| label-position  | 标签的位置，可选值为 `left` / `right` / `top`，设置为 `left` 或 `right` 时需指定 `label-width`，默认继承表单的 `label-position`   | ^[enum]`'left' \| 'right' \| 'top'`                 | ''     |
| label-width     | 标签的宽度，例如 `50px`，支持 `auto`                                                                                              | ^[string] / ^[number]                               | —      |
| required        | 是否为必填字段，若不设置，则由校验规则自动判断                                                                                    | ^[boolean]                                          | —      |
| rules           | 表单项的校验规则，参考 [FormItemRule](#formitemrule)，高级用法参考 [async-validator](https://github.com/yiminghe/async-validator) | ^[object]`Arrayable<FormItemRule>`                  | —      |
| error           | 手动设置表单项的错误提示信息，设置后会立即触发校验错误状态并显示该信息                                                            | ^[string]                                           | —      |
| show-message    | 是否显示校验错误信息                                                                                                              | ^[boolean]                                          | true   |
| inline-message  | 是否以行内形式展示校验错误信息                                                                                                    | ^[boolean]                                          | false  |
| size            | 控制表单项内组件的尺寸，可选值为 `large` / `default` / `small`                                                                    | ^[enum]`'' \| 'large' \| 'default' \| 'small'`      | —      |
| for             | 原生 label 标签的 `for` 属性，用于关联表单控件                                                                                    | ^[string]                                           | —      |
| validate-status | 表单项的校验状态，可选值为 `error` / `validating` / `success` / ''                                                                | ^[enum]`'' \| 'error' \| 'validating' \| 'success'` | —      |

</details>

#### FormItemRule

<details>
<summary>Element Plus FormItemRule 原生配置</summary>

| 名称    | 说明         | 类型                        | 默认值 |
| ------- | ------------ | --------------------------- | ------ |
| trigger | 校验触发方式 | ^[enum]`'blur' \| 'change'` | —      |

:::tip 提示

若不想通过输入事件触发校验，可在对应的输入类组件（`<el-input>`、`<el-radio>`、`<el-select>` 等）上设置 `validate-event` 为 `false`。

:::

</details>

### FormItem 插槽

<details>
<summary>Element Plus FormItem 原生插槽</summary>

| 名称    | 说明               | 类型                         |
| ------- | ------------------ | ---------------------------- |
| default | 表单项的内容       | —                            |
| label   | 自定义标签内容     | ^[object]`{ label: string }` |
| error   | 自定义校验错误提示 | ^[object]`{ error: string }` |

</details>

### FormItem 暴露的方法

<details>
<summary>Element Plus FormItem 原生暴露方法</summary>

| 名称            | 说明                     | 类型                                                                                                 |
| --------------- | ------------------------ | ---------------------------------------------------------------------------------------------------- |
| size            | 表单项的尺寸             | ^[object]`ComputedRef<'' \| 'large' \| 'default' \| 'small'>`                                        |
| validateMessage | 校验提示信息             | ^[object]`Ref<string>`                                                                               |
| validateState   | 校验状态                 | ^[object]`Ref<'' \| 'error' \| 'validating' \| 'success'>`                                           |
| validate        | 校验当前表单项           | ^[Function]`(trigger: string, callback?: FormValidateCallback \| undefined) => FormValidationResult` |
| resetField      | 重置当前表单项，清除校验 | ^[Function]`() => void`                                                                              |
| clearValidate   | 清除当前表单项的校验状态 | ^[Function]`() => void`                                                                              |

</details>
