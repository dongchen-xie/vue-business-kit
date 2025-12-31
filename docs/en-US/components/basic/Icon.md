---
title: Icon
lang: en-US
---

# Icon

Icon component enhanced based on [Element Plus Icon](https://element-plus.org/en-US/component/icon).

Support for Iconify icons.

## Icon Usage

There are multiple ways to use icons:

### 1. Direct Iconify Usage (Recommended)

You can directly use [Tabler Icons](https://icon-sets.iconify.design/tabler) from Iconify without any installation. See [Basic Usage](#basic-usage) for examples.

### 2. Install Icon Sets with UnoCSS

Install your preferred Iconify icon collection and use with UnoCSS:

```bash
pnpm add -D @iconify-json/mdi
```

Then use with `i-` prefix:

```vue
<bk-icon icon="i-mdi:home" />
```

### 3. Element Plus Icons

Install and use Element Plus icon collection:

```bash
pnpm add @element-plus/icons-vue
```

```vue
<script setup>
import { Edit } from "@element-plus/icons-vue"
</script>

<template>
  <bk-icon><Edit /></bk-icon>
</template>
```

## Basic Usage

Display icons using Iconify icon names.

:::demo Use `icon` prop with Iconify icon name (e.g., 'tabler:home'). The component automatically adds the 'i-' prefix if not present.

icon/basic

:::

## Icon API

### Icon Attributes

| Name | Description       | Type      | Default |
| ---- | ----------------- | --------- | ------- |
| icon | Iconify icon name | ^[string] | —       |

<details>
<summary>Element Plus Icon Attributes</summary>

| Name  | Description                | Type                  | Default                |
| ----- | -------------------------- | --------------------- | ---------------------- |
| color | SVG tag's fill attribute   | ^[string]             | inherit from color     |
| size  | SVG icon size, size x size | ^[number] / ^[string] | inherit from font size |

</details>

### Icon Slots

| Name                | Description               |
| ------------------- | ------------------------- |
| default ^(extended) | customize default content |
