---
title: Breadcrumb
lang: en-US
---

# Breadcrumb

Breadcrumb component enhanced based on [Element Plus Breadcrumb](https://element-plus.org/en-US/component/breadcrumb).

Displays the location of the current page, making it easier to browser back.

## Basic usage

:::demo `bk-breadcrumb` 组件支持两种使用方式：

1. **手动方式**：通过 `<bk-breadcrumb-item>` 标签手动定义每个面包屑项，适用于简单的、静态的面包屑导航。
2. **数据驱动方式**：通过 `data` 和 `currentRoute` 属性自动根据路由生成面包屑路径，适用于动态的、基于树形结构的数据。

两种方式都支持 `separator` 属性来设置分隔符，默认值为 '/'。

breadcrumb/basic

:::

## Icon separator

:::demo Set `separator-icon` to use `svg icon` as the separator，it will cover `separator`

breadcrumb/icon

:::

## Breadcrumb API

### Breadcrumb Attributes

| Name         | Description                     | Type                          | Default |
| ------------ | ------------------------------- | ----------------------------- | ------- |
| config       | Breadcrumb configuration object | ^[object]`BreadcrumbConfig`   | —       |
| data         | Breadcrumb data array           | ^[array]`BreadcrumbItemCtx[]` | —       |
| currentRoute | Current route path              | ^[string]                     | —       |

<details>
<summary>Element Plus Breadcrumb Attributes</summary>

| Name           | Description                      | Type                     | Default |
| -------------- | -------------------------------- | ------------------------ | ------- |
| separator      | separator character              | ^[string]                | /       |
| separator-icon | icon component of icon separator | ^[string] / ^[Component] | —       |

</details>

### Breadcrumb Slots

<details>
<summary>Element Plus Breadcrumb Slots</summary>

| Name    | Description               | Subtags         |
| ------- | ------------------------- | --------------- |
| default | customize default content | Breadcrumb Item |

</details>

## BreadcrumbItem API

### BreadcrumbItem Attributes

| Name      | Description                    | Type                          | Default |
| --------- | ------------------------------ | ----------------------------- | ------- |
| id        | Unique identifier for the item | ^[number] / ^[string]         | —       |
| icon      | Icon to display                | ^[string]                     | —       |
| menu_name | Display name for the menu item | ^[string]                     | —       |
| link      | URL or route path              | ^[string]                     | —       |
| children  | Child items array              | ^[array]`BreadcrumbItemCtx[]` | —       |

<details>
<summary>Element Plus BreadcrumbItem Attributes</summary>

| Name    | Description                                               | Type                                    | Default |
| ------- | --------------------------------------------------------- | --------------------------------------- | ------- |
| to      | target route of the link, same as `to` of `vue-router`    | ^[string] / ^[object]`RouteLocationRaw` | ''      |
| replace | if `true`, the navigation will not leave a history record | ^[boolean]                              | false   |

</details>

### BreadcrumbItem Slots

<details>
<summary>Element Plus BreadcrumbItem Slots</summary>

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

</details>
