---
title: Button
lang: en-US
---

# Button

Button component enhanced based on [Element Plus Button](https://element-plus.org/en-US/component/button) with support for Iconify icons.

## Basic Usage

:::demo Use `type`, `plain`, `round`, `circle` and `icon` to define button styles. (The `icon` prop supports both Element Plus icons and Iconify icon names (e.g., 'tabler:refresh').)

button/basic

:::

## Disabled Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

button/disabled

:::

## Link Button

:::warning

`type="text"` has been **deprecated**, Element Plus and will be removed in <el-tag round effect="plain" size="small">3.0.0</el-tag>, consider switching to new API.

New API `link` has been added in Element Plus <el-tag round effect="plain" size="small">2.2.1</el-tag>, you can use `type` API to set the theme of your link button

:::

:::demo

button/link

:::

## Text Button

:::tip

Text button has been upgraded with a new design since, if you want to use the
previous version like button, you might want to check [Link](https://element-plus.org/en-US/component/link#basic) out.

The API is also updated, because the `type` attribute also represents the button's style. So Element Plus have to make a new API
`text: boolean` for text button.

:::

Buttons without border and background.

:::demo

button/text

:::

## Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

:::demo Use the `icon` attribute to add icon. You can use Iconify icon names (for example, 'tabler:home') or find the icon list in the Element Plus icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well. The following example uses Iconify.

button/icon

:::

## Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `<bk-button-group>` to group your buttons.

button/group

:::

## Loading Button

Click the button to load data, then the button displays a loading state.

Set `loading` attribute to `true` to display loading state.

:::tip

You can use the `loading` slot or `loadingIcon` to customize your loading component

ps: `loading` slot has higher priority than loadingIcon

:::

:::demo

button/loading

:::

## Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `large`, `small`.

button/size

:::

## Tag

You can custom element tag, For example button, div, a, router-link, nuxt-link.

:::demo

button/tag

:::

## Button API

### Button Attributes

| Name         | Description                         | Type                     | Default |
| ------------ | ----------------------------------- | ------------------------ | ------- |
| icon         | Icon component or iconify icon name | ^[string] / ^[Component] | —       |
| loading-icon | customize loading icon component    | ^[string] / ^[Component] | Loading |

<details>
<summary>Element Plus Button Attributes</summary>

| Name              | Description                                                                                                                                          | Type                                                                                                         | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| size              | button size                                                                                                                                          | ^[enum]`'large' \| 'default' \| 'small'`                                                                     | —       |
| type              | button type, when setting `color`, the latter prevails                                                                                               | ^[enum]`'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| '' \| 'text' (deprecated)` | —       |
| plain             | determine whether it's a plain button                                                                                                                | ^[boolean]                                                                                                   | false   |
| text              | determine whether it's a text button                                                                                                                 | ^[boolean]                                                                                                   | false   |
| bg                | determine whether the text button background color is always on                                                                                      | ^[boolean]                                                                                                   | false   |
| link              | determine whether it's a link button                                                                                                                 | ^[boolean]                                                                                                   | false   |
| round             | determine whether it's a round button                                                                                                                | ^[boolean]                                                                                                   | false   |
| circle            | determine whether it's a circle button                                                                                                               | ^[boolean]                                                                                                   | false   |
| loading           | determine whether it's loading                                                                                                                       | ^[boolean]                                                                                                   | false   |
| loading-icon      | customize loading icon component                                                                                                                     | ^[string] / ^[Component]                                                                                     | Loading |
| disabled          | disable the button                                                                                                                                   | ^[boolean]                                                                                                   | false   |
| icon              | icon component                                                                                                                                       | ^[string] / ^[Component]                                                                                     | —       |
| autofocus         | same as native button's `autofocus`                                                                                                                  | ^[boolean]                                                                                                   | false   |
| native-type       | same as native button's `type`                                                                                                                       | ^[enum]`'button' \| 'submit' \| 'reset'`                                                                     | button  |
| auto-insert-space | automatically insert a space between two chinese characters(this will only take effect when the text length is 2 and all characters are in Chinese.) | ^[boolean]                                                                                                   | false   |
| color             | custom button color, automatically calculate `hover` and `active` color                                                                              | ^[string]                                                                                                    | —       |
| dark              | dark mode, which automatically converts `color` to dark mode colors                                                                                  | ^[boolean]                                                                                                   | false   |
| tag               | custom element tag                                                                                                                                   | ^[string] / ^[Component]                                                                                     | button  |

</details>

### Button Slots

<details>
<summary>Element Plus Button Slots</summary>

| Name    | Description                 |
| ------- | --------------------------- |
| default | customize default content   |
| loading | customize loading component |
| icon    | customize icon component    |

</details>

### Button Exposes

<details>
<summary>Element Plus Button Exposes</summary>

| Name           | Description          | Type                                                                                                           |
| -------------- | -------------------- | -------------------------------------------------------------------------------------------------------------- |
| ref            | button html element  | ^[object]`Ref<HTMLButtonElement>`                                                                              |
| size           | button size          | ^[object]`ComputedRef<'' \| 'small' \| 'default' \| 'large'>`                                                  |
| type           | button type          | ^[object]`ComputedRef<'' \| 'default' \| 'primary' \| 'success' \| 'warning' \| 'info' \| 'danger' \| 'text'>` |
| disabled       | button disabled      | ^[object]`ComputedRef<boolean>`                                                                                |
| shouldAddSpace | whether adding space | ^[object]`ComputedRef<boolean>`                                                                                |

</details>

## ButtonGroup API

### ButtonGroup Attributes

<details>
<summary>Element Plus ButtonGroup Attributes</summary>

| Name      | Description                                      | Type                                                               | Default    |
| --------- | ------------------------------------------------ | ------------------------------------------------------------------ | ---------- |
| size      | control the size of buttons in this button-group | ^[enum]`'large' \| 'default' \| 'small'`                           | —          |
| type      | control the type of buttons in this button-group | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —          |
| direction | display direction                                | ^[enum]`'horizontal' \| 'vertical'`                                | horizontal |

</details>

### ButtonGroup Slots

<details>
<summary>Element Plus ButtonGroup Slots</summary>

| Name    | Description                    | Subtags |
| ------- | ------------------------------ | ------- |
| default | customize button group content | Button  |

</details>
