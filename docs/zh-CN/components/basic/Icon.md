---
title: Icon 图标
lang: zh-CN
---

# Icon 图标

基于 [Element Plus Icon](https://element-plus.org/zh-CN/component/icon) 增强的图标组件，支持 Iconify 图标。

## 图标使用

有多种方式使用图标：

### 1. 直接使用 Iconify（推荐）

您可以直接使用 Iconify 的 [Tabler Icons](https://icon-sets.iconify.design/tabler)，无需安装。查看[基础用法](#基础用法)了解示例。

### 2. 安装图标集配合 UnoCSS

安装您喜欢的 Iconify 图标集合并配合 UnoCSS 使用：

```bash
pnpm add -D @iconify-json/mdi
```

然后使用 `i-` 前缀：

```vue
<bk-icon icon="i-mdi:home" />
```

### 3. Element Plus 图标

安装并使用 Element Plus 图标集合：

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

使用 Iconify 图标名称显示图标。

:::demo 使用 `icon` 属性配合 Iconify 图标名称（例如 'tabler:home'）。组件会自动添加 'i-' 前缀（如果不存在）。

icon/basic

:::

## Icon API

### Icon 属性

| 名称 | 说明             | 类型      | 默认值 |
| ---- | ---------------- | --------- | ------ |
| icon | Iconify 图标名称 | ^[string] | —      |

<details>
<summary>Element Plus Icon 属性</summary>

| 名称  | 说明                   | 类型                  | 默认值         |
| ----- | ---------------------- | --------------------- | -------------- |
| color | SVG 标签的 fill 属性   | ^[string]             | 继承自 color   |
| size  | SVG 图标大小，宽高相等 | ^[number] / ^[string] | 继承自字体大小 |

</details>

### Icon 插槽

| 名称    | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

<details>
<summary>Element Plus Icon 插槽</summary>

| 名称    | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

</details>
