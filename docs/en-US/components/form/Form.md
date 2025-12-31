---
title: Form
lang: zh-CN
---

# 表单

Form component enhanced based on [Element Plus Form](https://element-plus.org/en-US/component/form).

Form consists of `input`, `radio`, `select`, `checkbox` and so on. With form, you can collect, verify and submit data.

:::tip

The component has been upgraded with a flex layout to replace the old float layout.

:::

## Basic Usage

It includes all kinds of input items, such as `input`, `select`, `radio`, `checkbox`, `date-picker`, `time-picker`, and `switch`.

:::demo Use the `items` prop to define form structure in a configuration-driven way, or use `bk-form-item` components to define form items manually. Each form item supports configuration options such as `prop`, `label`, and related field attributes.

form/basic

:::

:::tip

[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) regulates that

> <i>When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.</i>

To prevent this behavior, you can add `@submit.prevent` on `<bk-form>`.

:::

## Multi-Column Form

When the vertical space is limited and the form is relatively simple, you can put it in one line.

:::demo Set the `col-num` attribute to specify the number of columns for the form layout.

form/multi-column-form

:::

## Alignment

Depending on your design, there are several different ways to align your label element.

You can set the label-position separately in items. If the value is empty, the `label-position` of `bk-form` is used.

:::demo The `label-position` attribute decides how labels align, it can be `top` or `left`. When set to `top`, labels will be placed at the top of the form field.

form/alignment

:::

## Validation

Form component allows you to verify your data, helping you find and correct errors.

:::demo Just add the `rules` attribute to the `Form` component and provide validation rules. Each form item should define a `prop` field in the `items` configuration(Or the `bk-form-item` component) to bind validation to the corresponding model field. See more information at [async-validator](https://github.com/yiminghe/async-validator).

form/validation

:::

## Custom Validation Rules

This example shows how to customize your own validation rules to finish a two-factor password verification.

:::demo Here we use `status-icon` to reflect validation result as an icon.

form/custom-validation

:::

:::tip

Custom validate callback function must be called. See more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).

:::

## Add/Delete Form Item

:::demo In addition to passing all validation rules at once on the form component, you can also pass the validation rules or delete rules on a single form field dynamically.

form/form-items

:::

## Number Validate

:::demo Number Validate need a `.number` modifier added on the input `v-model` binding，it's used to transform the string value to the number which is provided by Vue.

form/number-validate

:::

:::tip

When an `bk-form-item` is nested in another `bk-form-item`, its label width will be `0`. You can set `label-width` on that `bk-form-item` if needed.

:::

## Size Control

All components in a Form inherit their `size` attribute from that Form. Similarly, FormItem also has a `size` attribute.

:::demo Still you can fine tune each component's `size` if you don't want that component to inherit its size from From or FormItem.

form/size-control

:::

## Accessibility

When only a single input (or related control such as select or checkbox) is inside of a `bk-form-item`, the form item's label will automatically be attached to that input. However, if multiple inputs are inside of the `bk-form-item`, the form item will be assigned the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) role of [group](https://www.w3.org/TR/wai-aria/#group) instead. In this case, it is your responsibility to assign assistive labels to the individual inputs.

:::demo

form/accessibility

:::

## Form API

### Form Attributes

| Name   | Description                                                                                  | Type                    | Default |
| ------ | -------------------------------------------------------------------------------------------- | ----------------------- | ------- |
| items  | Configuration array for form items, each item can specify type, componentProps, and children | ^[array]`FormItemCtx[]` | —       |
| colNum | Number of columns for multi-column form layout                                               | ^[number]               | 1       |

<details>
<summary>Element Plus Form Attributes</summary>

| Name                      | Description                                                                                                                                                                              | Type                                           | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------- |
| model                     | Data of form component.                                                                                                                                                                  | ^[object]`Record<string, any>`                 | —       |
| rules                     | Validation rules of form.                                                                                                                                                                | ^[object]`FormRules`                           | —       |
| inline                    | Whether the form is inline. (It is recommended to use the `col-num` attribute)                                                                                                           | ^[boolean]                                     | false   |
| label-position            | Position of label. If set to `'left'` or `'right'`, `label-width` prop is also required.                                                                                                 | ^[enum]`'left' \| 'right' \| 'top'`            | right   |
| label-width               | Width of label, e.g. `'50px'`. All its direct child form items will inherit this value. `auto` is supported.                                                                             | ^[string] / ^[number]                          | ''      |
| label-suffix              | Suffix of the label.                                                                                                                                                                     | ^[string]                                      | ''      |
| hide-required-asterisk    | Whether to hide required fields should have a red asterisk (star) beside their labels.                                                                                                   | ^[boolean]                                     | false   |
| require-asterisk-position | Position of asterisk.                                                                                                                                                                    | ^[enum]`'left' \| 'right'`                     | left    |
| show-message              | Whether to show the error message.                                                                                                                                                       | ^[boolean]                                     | true    |
| inline-message            | Whether to display the error message inline with the form item.                                                                                                                          | ^[boolean]                                     | false   |
| status-icon               | Whether to display an icon indicating the validation result.                                                                                                                             | ^[boolean]                                     | false   |
| validate-on-rule-change   | Whether to trigger validation when the `rules` prop is changed.                                                                                                                          | ^[boolean]                                     | true    |
| size                      | Control the size of components in this form.                                                                                                                                             | ^[enum]`'' \| 'large' \| 'default' \| 'small'` | —       |
| disabled                  | Whether to disable all components in this form. If set to `true`, it will override the `disabled` prop of the inner component.                                                           | ^[boolean]                                     | false   |
| scroll-to-error           | When validation fails, scroll to the first error form entry.                                                                                                                             | ^[boolean]                                     | false   |
| scroll-into-view-options  | When validation fails, it scrolls to the first error item based on the scrollIntoView option. [scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView). | ^[object]`ScrollIntoViewOptions` / ^[boolean]  | true    |

</details>

### Form Events

<details>
<summary>Element Plus Form Events</summary>

| Name     | Description                             | Type                                                                         |
| -------- | --------------------------------------- | ---------------------------------------------------------------------------- |
| validate | triggers after a form item is validated | ^[Function]`(prop: FormItemProp, isValid: boolean, message: string) => void` |

</details>

### Form Slots

<details>
<summary>Element Plus Form Slots</summary>

| Name    | Description               | Subtags  |
| ------- | ------------------------- | -------- |
| default | customize default content | FormItem |

</details>

### Form Exposes

<details>
<summary>Element Plus Form Exposes</summary>

| Name          | Description                                                        | Type                                                                                                                              |
| ------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| validate      | Validate the whole form. Receives a callback or returns `Promise`. | ^[Function]`(callback?: FormValidateCallback) => Promise<void>`                                                                   |
| validateField | Validate specified fields.                                         | ^[Function]`(props?: Arrayable<FormItemProp> \| undefined, callback?: FormValidateCallback \| undefined) => FormValidationResult` |
| resetFields   | Reset specified fields and remove validation result.               | ^[Function]`(props?: Arrayable<FormItemProp> \| undefined) => void`                                                               |
| scrollToField | Scroll to the specified fields.                                    | ^[Function]`(prop: FormItemProp) => void`                                                                                         |
| clearValidate | Clear validation messages for all or specified fields.             | ^[Function]`(props?: Arrayable<FormItemProp> \| undefined) => void`                                                               |
| fields        | Get all fields context.                                            | ^[array]`FormItemContext[]`                                                                                                       |
| getField      | Get a field context.                                               | ^[Function]`(prop: FormItemProp) => FormItemContext \| undefined`                                                                 |

</details>

## FormItem API

### FormItem Attributes

| Name             | Description                                                        | Type                            | Default |
| ---------------- | ------------------------------------------------------------------ | ------------------------------- | ------- |
| type ^(required) | Type of the form item component (e.g., 'input', 'select', 'radio') | ^[string]                       | —       |
| componentProps   | Additional props to pass to the underlying component               | ^[object]`Record<string, any>`  | —       |
| children         | Nested form items for complex layouts                              | ^[array]`Record<string, any>[]` | —       |

<details>
<summary>Element Plus FormItem Attributes</summary>

| Name            | Description                                                                                                                                                            | Type                                                | Default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------- |
| prop            | A key of `model`. It could be a path of the property (e.g `a.b.0` or `['a', 'b', '0']`). In the use of `validate` and `resetFields` method, the attribute is required. | ^[string] / ^[string&#91;&#93;]                     | —       |
| label           | Label text.                                                                                                                                                            | ^[string]                                           | —       |
| label-position  | Position of item label. If set to `'left'` or `'right'`, `label-width` prop is also required. Default extend `label-position` of `form`.                               | ^[enum]`'left' \| 'right' \| 'top'`                 | ''      |
| label-width     | Width of label, e.g. `'50px'`. `'auto'` is supported.                                                                                                                  | ^[string] / ^[number]                               | —       |
| required        | Whether the field is required or not, will be determined by validation rules if omitted.                                                                               | ^[boolean]                                          | —       |
| rules           | Validation rules of form, see the [following table](#formitemrule), more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).             | ^[object]`Arrayable<FormItemRule>`                  | —       |
| error           | Field error message, set its value and the field will validate error and show this message immediately.                                                                | ^[string]                                           | —       |
| show-message    | Whether to show the error message.                                                                                                                                     | ^[boolean]                                          | true    |
| inline-message  | Inline style validate message.                                                                                                                                         | ^[boolean]                                          | false   |
| size            | Control the size of components in this form-item.                                                                                                                      | ^[enum]`'' \| 'large' \| 'default' \| 'small'`      | —       |
| for             | Same as for in native label.                                                                                                                                           | ^[string]                                           | —       |
| validate-status | Validation state of formItem.                                                                                                                                          | ^[enum]`'' \| 'error' \| 'validating' \| 'success'` | —       |

</details>

#### FormItemRule

<details>
<summary>Element Plus FormItemRule</summary>

| Name    | Description                     | Type                        | Default |
| ------- | ------------------------------- | --------------------------- | ------- |
| trigger | How the validator is triggered. | ^[enum]`'blur' \| 'change'` | —       |

:::tip

If you don't want to trigger the validator based on input events, set the `validate-event` attribute as `false` on the corresponding input type components (`<el-input>`, `<el-radio>`, `<el-select>`, ...).

:::

</details>

### FormItem Slots

<details>
<summary>Element Plus FormItem Slots</summary>

| Name    | Description                                   | Type                         |
| ------- | --------------------------------------------- | ---------------------------- |
| default | Content of Form Item.                         | —                            |
| label   | Custom content to display on label.           | ^[object]`{ label: string }` |
| error   | Custom content to display validation message. | ^[object]`{ error: string }` |

</details>

### FormItem Exposes

<details>
<summary>Element Plus FormItem Exposes</summary>

| Name            | Description                                       | Type                                                                                                 |
| --------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| size            | Form item size.                                   | ^[object]`ComputedRef<'' \| 'large' \| 'default' \| 'small'>`                                        |
| validateMessage | Validation message.                               | ^[object]`Ref<string>`                                                                               |
| validateState   | Validation state.                                 | ^[object]`Ref<'' \| 'error' \| 'validating' \| 'success'>`                                           |
| validate        | Validate form item.                               | ^[Function]`(trigger: string, callback?: FormValidateCallback \| undefined) => FormValidationResult` |
| resetField      | Reset current field and remove validation result. | ^[Function]`() => void`                                                                              |
| clearValidate   | Remove validation status of the field.            | ^[Function]`() => void`                                                                              |

</details>
