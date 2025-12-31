---
title: Icon
lang: zh-CN
---

# Icon 图标

基于 [Element Plus Icon](https://element-plus.org/zh-CN/component/icon) 增强的图标组件。

支持 Iconify 图标。

## 图标使用方式

图标提供多种使用方式，可根据场景选择：

### 1. 直接使用 Iconify 图标（推荐）

无需安装任何依赖，可直接使用 Iconify 中的 [Tabler Icons](https://icon-sets.iconify.design/tabler) 图标库。使用示例可参考 [基本用法](#基本用法)。

### 2. 通过 UnoCSS 安装图标集

安装你所需的 Iconify 图标合集，并结合 UnoCSS 使用

```bash
pnpm add -D @iconify-json/mdi
```

然后通过 `i-` 前缀使用：

```vue
<bk-icon icon="i-mdi:home" />
```

### 3. Element Plus 图标

安装 Element Plus 图标集并使用：

```bash
pnpm add @element-plus/icons-vue
```

```vue
<script setup>
import { Edit } from "@element-plus/icons-vue"
</script>

<template>
  <el-icon><Edit /></el-icon>
</template>
```

## 基础用法

通过 Iconify 图标名称展示图标。

:::demo 使用 `icon` 属性配合 Iconify 图标名称（例如 'tabler:home'）。若未传入 `i-` 前缀，组件会自动补充。

icon/basic

:::

## Icon API

### Icon 属性

| 名称 | 说明             | 类型      | 默认值 |
| ---- | ---------------- | --------- | ------ |
| icon | Iconify 图标名称 | ^[string] | —      |

<details>
<summary>Element Plus Icon 原生属性</summary>

| 名称  | 说明                   | 类型                  | 默认值         |
| ----- | ---------------------- | --------------------- | -------------- |
| color | SVG 标签的 fill 属性   | ^[string]             | 继承自 color   |
| size  | SVG 图标大小，宽高相等 | ^[number] / ^[string] | 继承自字体大小 |

</details>

### Icon 插槽

| 名称                | 说明           |
| ------------------- | -------------- |
| default ^(extended) | 自定义默认内容 |
