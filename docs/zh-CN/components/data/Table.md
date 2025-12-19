---
title: 表格
lang: zh-CN
---

# 表格

基于 [Element Plus Table](https://element-plus.org/zh-CN/component/table) 增强的表格组件，增加了搜索、分页、导出、数字格式化等功能。

## 基础表格

使用原始数据和列配置的基础表格。

:::demo 使用 `raw-data` 提供表格数据，`columns` 定义表格结构。每个列对象支持所有 Element Plus 表格列属性。

table/basic

:::

## 斑马纹表格

斑马纹表格更易于区分不同行。

:::demo 属性 `stripe` 接受一个 `Boolean`。为 `true` 时，表格为斑马纹。

table/striped

:::

## 带边框的表格

:::demo 默认情况下，表格没有纵向边框。如需显示，可将属性 `border` 设为 `true`。

table/with-border

:::

## 带状态的表格

你可以高亮表格内容以区分“成功、信息、警告、危险”等状态。

:::demo 在 `el-table` 中使用 `row-class-name` 为某一行添加自定义类名，然后可用自定义类进行样式设置。

table/with-status

:::

## 超出显示 Tooltip 的表格

内容过长时会换行，可用 `show-overflow-tooltip` 保持单行显示。

:::demo 属性 `show-overflow-tooltip` 接受 `Boolean`。为 `true` 时，超出内容悬浮显示 Tooltip。

table/show-overflow-tooltip

:::

## 固定表头的表格

数据行较多时可使用固定表头。

:::demo 通过设置 `el-table` 的 `height` 属性即可固定表头，无需其他代码。

table/fixed-header

:::

## 固定列的表格

列较多时可固定部分列。

:::demo 在 `columns` 中使用 `fixed` 属性，接受 `Boolean`。为 `true` 时固定在左侧，也可用 'left' 或 'right' 字符串分别固定左右。

table/fixed-column

:::

## 固定列和表头的表格

数据量大时可同时固定表头和列。

:::demo 结合上面两个示例即可同时固定列和表头。

table/fixed-column-and-header

:::

## 流式高度固定表头（及列）

数据动态变化时，可能希望表格有最大高度并在超出时显示滚动条。

:::demo 设置 `el-table` 的 `max-height` 属性即可固定表头，只有当行高超出最大高度时表体才会滚动。

table/fixed-header-with-fluid-header

:::

## 分组表头

数据结构复杂时可用分组表头展示层级。

:::demo 给列对象添加 `children` 数组属性即可分组，每个子项也可有自己的 `children` 实现嵌套分组。

table/grouping-header

:::

## 单选

支持单行选择。

:::demo 表格支持单行选择，添加 `highlight-current-row` 属性即可。行选择变化时会触发 `current-change` 事件，参数为变更前后的行：`currentRow` 和 `oldCurrentRow`。如需显示行号，在 `columns` 中添加 `type: 'index'` 的列即可，默认从 1 开始。

table/single-select

:::

## 多选

支持多行选择，支持默认选中和禁用选择。

用 `default-selection` 设置默认选中（设为 `true` 全选，或传行 ID 数组），用 `disabled-selection` 禁用特定行（设为 `true` 全禁用，或传行 ID 数组）。注意使用这些功能时需设置 `row-key`。

`toggleRowSelection` 支持第三个参数 `ignoreSelectable`，用于是否忽略可选属性。

:::demo 激活多选只需在 `columns` 数组中添加 `type: 'selection'` 的列对象。

table/multi-select

:::

## 排序

可对数据排序，便于查找或对比。

:::demo 在某列设置 `sortable` 属性即可排序，接受 `Boolean`，默认 `false`。表格属性 `default-sort` 可设置默认排序列和顺序。自定义排序用 `sort-method` 或 `sort-by`。如需后端排序，将 `sortable` 设为 `custom` 并监听 `sort-change` 事件，事件参数包含排序列和顺序，可据此请求 API。本例还用 `formatter` 格式化列值，接受两个参数：`row` 和 `column`，可自定义处理。

table/sort

:::

## 筛选

可筛选表格数据。

:::demo 在 `columns` 数组中设置 `filters` 和 `filter-method` 属性即可筛选。`filters` 为数组，`filter-method` 为函数，参数为 `value`、`row`、`column`。

table/filter

:::

:::demo 用 `show-search` 属性开启搜索。用户可全列或指定列搜索。

table/search

:::

## 自定义列模板

可自定义列内容，集成其他组件。

:::demo 通过 [slot](https://v3.cn.vuejs.org/guide/component-slots.html) 可访问 row、column、$index、store（表格状态管理）。

table/custom-column

:::

## 自定义表头

可自定义表头内容。

:::demo 通过 header [slots](https://v3.cn.vuejs.org/guide/component-slots.html) 自定义表头。

table/custom-header

:::

## 可展开行

行内容过长且不想显示横向滚动条时可用可展开行。

`preserve-expanded-content` 用于控制收起时是否保留展开行内容在 DOM 中。

:::demo 添加 type="expand" 和 slot 激活可展开行。el-table-column 的模板会作为展开行内容渲染，可访问自定义列模板 slot 的同样属性。

table/expandable-row

:::

## 树形数据与懒加载

:::demo 可展示树形结构数据。行含 `children` 字段即为嵌套数据，渲染嵌套数据需设置 `row-key`。子行数据可异步加载，表格 `lazy` 设为 true 并提供 `load` 方法。用 `hasChildren` 指定哪些行有子节点，`children` 和 `hasChildren` 可通过 `tree-props` 配置。

table/tree-and-lazy

:::

## 可选树

:::demo 当 `treeProps.checkStrictly` 为 true 时，父子节点选择状态不再关联；为 false 时，父节点选中则所有子节点也选中。

table/check-strictly

:::

## 合计行

数字表格可在底部增加合计行。

:::demo 设置 `show-summary` 为 `true` 显示合计行。默认第一列显示“合计”（可用 `sum-text` 配置），其他列自动求和。可自定义合计行为，传递 `summary-method` 方法，返回数组，每个元素显示在对应列。第二个表格为详细示例。

table/summary

:::

## 行列合并

配置 rowspan 和 colspan 可合并单元格。

:::demo 用 `span-method` 属性配置行列合并，接受一个方法，参数包含当前行、列、行索引、列索引。方法返回两个数字数组，分别为 rowspan 和 colspan，也可返回对象。

table/rowspan-and-colspan

:::

:::demo 也可用 `merge-columns` 属性自动合并指定列值相同的单元格。

table/merge-columns

:::

## 自定义索引

可自定义 `type=index` 列的行号。

:::demo 设置列配置 `type: "index"` 并用 `index` 属性自定义行号。为数字时所有索引有偏移量，也可为函数，参数为每行索引（从 0 开始），返回值为显示索引。

table/custom-index

:::

## 表格布局

[table-layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout) 属性设置表格单元格、行、列的布局算法。

:::demo

table/table-layout

:::

## Tooltip 格式化

可用 `tooltip-formatter` 自定义 Tooltip 内容。

:::demo

table/tooltip-formatter

:::

## 工具栏

可自定义表格工具栏及操作按钮。

:::demo 用 `show-refresh`、`show-export` 属性显示内置按钮，或用 `toolbar-left` slot 完全自定义工具栏内容。监听 `refresh`、`export` 事件处理用户操作。

table/toolbar

:::

## 分页

内置分页，适合大数据集。

:::demo 设置 `pagination` 为 `true` 启用基础分页，或传递配置对象自定义分页行为。

table/pagination

:::

## 数字格式化

自动格式化表格单元格中的数字。

:::demo 启用 `number-format` 自动用千分位和小数格式化数字。（使用 [formatNumber](/zh-CN/utils/number/formatNumber.html)）

table/number-format

:::

## Table API

### Table 属性

| 名称           | 说明               | 类型                                        | 默认值  |
| -------------- | ------------------ | ------------------------------------------- | ------- |
| raw-data       | 表格数据源         | ^[array]`any[]`                             | `[]`    |
| columns        | 列配置             | ^[array]`EpTableColumnProps[]`              | `[]`    |
| merge-columns  | 需要合并单元格的列 | ^[array]`string[]`                          | `[]`    |
| show-search    | 显示搜索功能       | `boolean`                                   | `false` |
| search-value   | 默认搜索值         | `string`                                    | `''`    |
| search-columns | 默认选中搜索列     | ^[array]`string[]`                          | `[]`    |
| show-refresh   | 显示刷新按钮       | `boolean`                                   | `false` |
| show-export    | 显示导出按钮       | `boolean`                                   | `false` |
| pagination     | 启用分页           | `boolean` \| ^[object]`PaginationProps`     | `false` |
| number-format  | 启用数字格式化     | `boolean` \| ^[object]`FormatNumberOptions` | `false` |

<details>
<summary>Element Plus Table 属性</summary>

| 名称                      | 说明                                                                                                                                                         | 类型                                                                                                                                                                 | 默认值                                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| data                      | 表格数据                                                                                                                                                     | ^[array]`any[]`                                                                                                                                                      | []                                                                                                                      |
| height                    | 表格高度，默认自适应。为数字时单位为像素，为字符串时赋值给 style.height，受外部样式影响                                                                      | ^[string] / ^[number]                                                                                                                                                | —                                                                                                                       |
| max-height                | 表格最大高度，合法值为数字或 px 高度                                                                                                                         | ^[string] / ^[number]                                                                                                                                                | —                                                                                                                       |
| stripe                    | 是否为斑马纹表格                                                                                                                                             | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| border                    | 是否带有纵向边框                                                                                                                                             | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| size                      | 表格尺寸                                                                                                                                                     | ^[enum]`'' \| 'large' \| 'default' \| 'small'`                                                                                                                       | —                                                                                                                       |
| fit                       | 列宽是否自适应容器                                                                                                                                           | ^[boolean]                                                                                                                                                           | true                                                                                                                    |
| show-header               | 是否显示表头                                                                                                                                                 | ^[boolean]                                                                                                                                                           | true                                                                                                                    |
| highlight-current-row     | 是否高亮当前行                                                                                                                                               | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| current-row-key           | 当前行 key，仅设置用                                                                                                                                         | ^[string] / ^[number]                                                                                                                                                | —                                                                                                                       |
| row-class-name            | 返回自定义行类名的函数或字符串                                                                                                                               | ^[Function]`(data: { row: any, rowIndex: number }) => string` / ^[string]                                                                                            | —                                                                                                                       |
| row-style                 | 返回自定义行样式的函数或对象                                                                                                                                 | ^[Function]`(data: { row: any, rowIndex: number }) => CSSProperties` / ^[object]`CSSProperties`                                                                      | —                                                                                                                       |
| cell-class-name           | 返回自定义单元格类名的函数或字符串                                                                                                                           | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => string` / ^[string]                                            | —                                                                                                                       |
| cell-style                | 返回自定义单元格样式的函数或对象                                                                                                                             | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => CSSProperties` / ^[object]`CSSProperties`                      | —                                                                                                                       |
| header-row-class-name     | 返回表头行自定义类名的函数或字符串                                                                                                                           | ^[Function]`(data: { row: any, rowIndex: number }) => string` / ^[string]                                                                                            | —                                                                                                                       |
| header-row-style          | 返回表头行自定义样式的函数或对象                                                                                                                             | ^[Function]`(data: { row: any, rowIndex: number }) => CSSProperties` / ^[object]`CSSProperties`                                                                      | —                                                                                                                       |
| header-cell-class-name    | 返回表头单元格自定义类名的函数或字符串                                                                                                                       | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => string` / ^[string]                                            | —                                                                                                                       |
| header-cell-style         | 返回表头单元格自定义样式的函数或对象                                                                                                                         | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => CSSProperties` / ^[object]`CSSProperties`                      | —                                                                                                                       |
| row-key                   | 行数据的 key，用于优化渲染。启用 `reserve-selection` 或树形数据时必填。为字符串时支持多级访问，如 `user.info.id`，但不支持 `user.info[0].id`，此时应使用函数 | ^[function]`(row: any) => string` / ^[string]                                                                                                                        | —                                                                                                                       |
| empty-text                | 数据为空时显示的文本，可用 `#empty` 自定义                                                                                                                   | ^[string]                                                                                                                                                            | 暂无数据                                                                                                                |
| default-expand-all        | 是否默认展开所有行，适用于 type="expand" 或树形结构表格                                                                                                      | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| expand-row-keys           | 通过该属性设置展开的行，值为行 key，需先设置 row-key                                                                                                         | ^[object]`Array<string>`                                                                                                                                             | —                                                                                                                       |
| default-sort              | 设置默认排序列和顺序，`prop` 为列，`order` 为顺序                                                                                                            | ^[object]`Sort`                                                                                                                                                      | 若设置 `prop`，未设置 `order`，则默认升序                                                                               |
| tooltip-effect            | 溢出 tooltip 的 `effect`                                                                                                                                     | ^[enum]`'dark' \| 'light'`                                                                                                                                           | dark                                                                                                                    |
| tooltip-options           | 溢出 tooltip 的选项，[见下方 tooltip 组件](tooltip.html#attributes)                                                                                          | ^[object]`Pick<ElTooltipProps, 'effect' \| 'enterable' \| 'hideAfter' \| 'offset' \| 'placement' \| 'popperClass' \| 'popperOptions' \| 'showAfter' \| 'showArrow'>` | ^[object]`{ enterable: true, placement: 'top', showArrow: true, hideAfter: 200, popperOptions: { strategy: 'fixed' } }` |
| append-filter-panel-to    | 筛选面板挂载的元素                                                                                                                                           | ^[string]                                                                                                                                                            | —                                                                                                                       |
| show-summary              | 是否显示合计行                                                                                                                                               | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| sum-text                  | 合计行首列显示文本                                                                                                                                           | ^[string]                                                                                                                                                            | 合计                                                                                                                    |
| summary-method            | 自定义合计方法                                                                                                                                               | ^[Function]`(data: { columns: any[], data: any[] }) => (VNode \| string)[]`                                                                                          | —                                                                                                                       |
| span-method               | 返回 rowspan 和 colspan 的方法                                                                                                                               | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => number[] \| { rowspan: number, colspan: number } \| void`      | —                                                                                                                       |
| select-on-indeterminate   | 多选表格主复选框部分选中时的行为。为 true 时全选，为 false 时全不选                                                                                          | ^[boolean]                                                                                                                                                           | true                                                                                                                    |
| indent                    | 树形数据缩进                                                                                                                                                 | ^[number]                                                                                                                                                            | 16                                                                                                                      |
| lazy                      | 是否懒加载数据                                                                                                                                               | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| load                      | 懒加载子行数据的方法，仅在 `lazy` 为 true 时生效                                                                                                             | ^[Function]`(row: any, treeNode: TreeNode, resolve: (data: any[]) => void) => void`                                                                                  | —                                                                                                                       |
| tree-props                | 嵌套数据渲染配置                                                                                                                                             | ^[object]`{ hasChildren?: string, children?: string, checkStrictly?: boolean }`                                                                                      | ^[object]`{ hasChildren: 'hasChildren', children: 'children', checkStrictly: false }`                                   |
| table-layout              | 设置表格单元格、行、列的布局算法                                                                                                                             | ^[enum]`'fixed' \| 'auto'`                                                                                                                                           | fixed                                                                                                                   |
| scrollbar-always-on       | 总是显示滚动条                                                                                                                                               | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| show-overflow-tooltip     | 超出内容悬浮显示 Tooltip，影响所有列，详见 [tooltip-options](#table-attributes)                                                                              | ^[boolean] / [`object`](#table-attributes)                                                                                                                           | —                                                                                                                       |
| flexible                  | 主轴最小尺寸不随内容变化                                                                                                                                     | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| scrollbar-tabindex        | 滚动条容器 tabindex                                                                                                                                          | ^[string] / ^[number]                                                                                                                                                | —                                                                                                                       |
| allow-drag-last-column    | 是否允许拖动最后一列                                                                                                                                         | ^[boolean]                                                                                                                                                           | true                                                                                                                    |
| tooltip-formatter         | 自定义溢出 Tooltip 内容                                                                                                                                      | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, cellValue: any }) => VNode \| string`                                                                      | —                                                                                                                       |
| preserve-expanded-content | 收起时是否保留展开行内容在 DOM 中                                                                                                                            | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| native-scrollbar          | 是否使用原生滚动条                                                                                                                                           | ^[boolean]                                                                                                                                                           | false                                                                                                                   |

</details>

### Table 事件

| 名称              | 说明             | 类型                                                      |
| ----------------- | ---------------- | --------------------------------------------------------- |
| refresh           | 点击刷新按钮触发 | ^[Function]`()`                                           |
| export            | 点击导出按钮触发 | ^[Function]`(data: any[], columns: EpTableColumnProps[])` |
| search            | 执行搜索时触发   | ^[Function]`(value: string, columns: string[])`           |
| pagination-change | 分页变化时触发   | ^[Function]`(page: number, size: number)`                 |

<details>
<summary>Element Plus Table 事件</summary>

| 名称               | 说明                   | 类型                                                                                                    |
| ------------------ | ---------------------- | ------------------------------------------------------------------------------------------------------- |
| select             | 勾选某一行复选框时触发 | ^[Function]`<T = any>(selection: T[], row: T) => void`                                                  |
| select-all         | 勾选表头复选框时触发   | ^[Function]`(selection: any[]) => void`                                                                 |
| selection-change   | 复选框选项变化时触发   | ^[Function]`(newSelection: any[]) => void`                                                              |
| cell-mouse-enter   | 鼠标移入单元格时触发   | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| cell-mouse-leave   | 鼠标移出单元格时触发   | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| cell-click         | 点击单元格时触发       | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| cell-dblclick      | 双击单元格时触发       | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| cell-contextmenu   | 右键单元格时触发       | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| row-click          | 点击行时触发           | ^[Function]`(row: any, column: TableColumnCtx<T>, event: Event) => void`                                |
| row-contextmenu    | 右键行时触发           | ^[Function]`(row: any, column: TableColumnCtx<T>, event: Event) => void`                                |
| row-dblclick       | 双击行时触发           | ^[Function]`(row: any, column: TableColumnCtx<T>, event: Event) => void`                                |
| header-click       | 点击表头时触发         | ^[Function]`(column: TableColumnCtx<T>, event: Event) => void`                                          |
| header-contextmenu | 右键表头时触发         | ^[Function]`(column: TableColumnCtx<T>, event: Event) => void`                                          |
| sort-change        | 排序条件变化时触发     | ^[Function]`(data: {column: TableColumnCtx<T>, prop: string, order: any }) => void`                     |
| filter-change      | 筛选条件变化时触发     | ^[Function]`(newFilters: any) => void`                                                                  |
| current-change     | 当前行变化时触发       | ^[Function]`(currentRow: any, oldCurrentRow: any) => void`                                              |
| header-dragend     | 拖动表头改变列宽后触发 | ^[Function]`(newWidth: number, oldWidth: number, column: TableColumnCtx<T>, event: MouseEvent) => void` |
| expand-change      | 展开/收起行时触发      | ^[Function]`(row: any, expandedRows: any[]) => void & (row: any, expanded: boolean) => void`            |
| scroll             | 滚动后触发             | ^[Function]`({ scrollLeft: number, scrollTop: number }) => void`                                        |

</details>

### Table 插槽

| 名称         | 说明           |
| ------------ | -------------- |
| toolbar-left | 工具栏左侧内容 |

<details>
<summary>Element Plus Table 插槽</summary>

| 名称    | 说明                                   | 子标签       |
| ------- | -------------------------------------- | ------------ |
| default | 自定义表格内容                         | Table-column |
| append  | 插入在最后一行后的内容，适合无限滚动等 | —            |
| empty   | 数据为空时自定义内容                   | —            |

</details>

### Table 暴露方法

<details>
<summary>Element Plus Table 暴露方法</summary>

| 方法               | 说明                                                         | 类型                                                                         |
| ------------------ | ------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| clearSelection     | 多选表格清空用户选择                                         | ^[Function]`() => void`                                                      |
| getSelectionRows   | 返回当前选中的行                                             | ^[Function]`() => any[]`                                                     |
| toggleRowSelection | 多选表格切换某行选中状态，第二参数可直接设置选中与否         | ^[Function]`(row: any, selected?: boolean, ignoreSelectable = true) => void` |
| toggleAllSelection | 多选表格切换全选/全不选                                      | ^[Function]`() => void`                                                      |
| toggleRowExpansion | 可展开/树形表格切换某行展开状态，第二参数可直接设置展开/收起 | ^[Function]`(row: any, expanded?: boolean) => void`                          |
| setCurrentRow      | 单选表格设置某行为选中，不传参数则清空选中                   | ^[Function]`(row: any) => void`                                              |
| clearSort          | 清除排序，恢复原始顺序                                       | ^[Function]`() => void`                                                      |
| clearFilter        | 清除指定列（通过 columnKey）或全部列的筛选                   | ^[Function]`(columnKeys?: string[]) => void`                                 |
| doLayout           | 刷新表格布局，表格可见性变化时需调用以获取正确布局           | ^[Function]`() => void`                                                      |
| sort               | 手动排序，`prop` 为列，`order` 为顺序                        | ^[Function]`(prop: string, order: string) => void`                           |
| scrollTo           | 滚动到指定坐标                                               | ^[Function]`(options: number \| ScrollToOptions, yCoord?: number) => void`   |
| setScrollTop       | 设置垂直滚动位置                                             | ^[Function]`(top?: number) => void`                                          |
| setScrollLeft      | 设置水平滚动位置                                             | ^[Function]`(left?: number) => void`                                         |
| columns            | 获取表格列上下文                                             | ^[array]`TableColumnCtx<T>[]`                                                |
| updateKeyChildren  | 懒加载表格（需设置 rowKey）更新 key 子节点                   | ^[Function]`(key: string, data: T[]) => void`                                |

</details>

## Table-column API

### Table-column 属性

继承所有 Element Plus TableColumnCtx 属性并扩展：

| 名称         | 说明                                                                                                                                                                                                               | 类型                                                                                                                                             | 默认值 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| slots        | 自定义插槽配置，为 `true` 时启用所有插槽，自动生成名称 `{prop}`、`{prop}-header`、`{prop}-filterIcon` 和 `{prop}-expand`。对象形式每个属性可为 `boolean`（true 使用自动生成名称）或 `string`（指定自定义插槽名称） | ^[boolean] \| ^[object]`{ default?: string \| boolean, header?: string \| boolean, filterIcon?: string \| boolean, expand?: string \| boolean }` | -      |
| numberFormat | 数字格式化配置，为 `true` 时使用默认数字格式化。为对象时提供自定义格式化选项。此设置将覆盖该列的表格级别 `numberFormat` 配置                                                                                       | ^[boolean] \| ^[object]`FormatNumberOptions`                                                                                                     | -      |
| children     | 子列配置，用于实现表头分组。每个子列也可以拥有自己的 `children` 属性实现嵌套分组。用于创建多级表头                                                                                                                 | ^[array]`EpTableColumnProps[]`                                                                                                                   | -      |

<details>
<summary>Element Plus Table-column 属性</summary>

| 名称                  | 说明                                                                                 | 类型                                                                                                                                                                        | 默认值                            |
| --------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| type                  | 列类型。`selection` 显示复选框，`index` 显示行号（从 1 开始），`expand` 显示展开图标 | ^[enum]`'default' \| 'selection' \| 'index' \| 'expand'`                                                                                                                    | default                           |
| index                 | 自定义行号，仅对 `type=index` 有效                                                   | ^[number] / ^[Function]`(index: number) => number`                                                                                                                          | —                                 |
| label                 | 列标题                                                                               | ^[string]                                                                                                                                                                   | —                                 |
| column-key            | 列 key，筛选事件需用此属性区分列                                                     | ^[string]                                                                                                                                                                   | —                                 |
| prop                  | 字段名，别名 `property`                                                              | ^[string]                                                                                                                                                                   | —                                 |
| width                 | 列宽                                                                                 | ^[string] / ^[number]                                                                                                                                                       | ''                                |
| min-width             | 最小列宽，`width` 固定宽度，`min-width` 按比例分配                                   | ^[string] / ^[number]                                                                                                                                                       | ''                                |
| fixed                 | 是否固定在左/右，`true` 固定左侧                                                     | ^[enum]`'left' \| 'right'` / ^[boolean]                                                                                                                                     | false                             |
| render-header         | 表头渲染函数                                                                         | ^[Function]`(data: { column: TableColumnCtx<T>, $index: number }) => void`                                                                                                  | —                                 |
| sortable              | 是否可排序，远程排序设为 'custom' 并监听 `sort-change`                               | ^[boolean] / ^[string]                                                                                                                                                      | false                             |
| sort-method           | 排序方法，`sortable` 为 true 时生效，返回值同 Array.sort                             | ^[Function]`<T = any>(a: T, b: T) => number`                                                                                                                                | —                                 |
| sort-by               | 指定排序字段，`sortable` 为 true 且未设置 `sort-method` 时生效                       | ^[Function]`(row: any, index: number) => string` / ^[string] / ^[object]`string[]`                                                                                          | —                                 |
| sort-orders           | 排序顺序，`sortable` 为 true 时生效，点击表头按顺序切换                              | ^[object]`('ascending' \| 'descending' \| null)[]`                                                                                                                          | ['ascending', 'descending', null] |
| resizable             | 是否可调整列宽，`border` 为 true 时生效                                              | ^[boolean]                                                                                                                                                                  | true                              |
| formatter             | 格式化单元格内容的函数                                                               | ^[function]`(row: any, column: TableColumnCtx<T>, cellValue: any, index: number) => VNode \| string`                                                                        | —                                 |
| show-overflow-tooltip | 超出内容悬浮显示 Tooltip                                                             | ^[boolean] / [`object`](#table-attributes)                                                                                                                                  | undefined                         |
| align                 | 对齐方式                                                                             | ^[enum]`'left' \| 'center' \| 'right'`                                                                                                                                      | left                              |
| header-align          | 表头对齐方式，未设置时同 `align`                                                     | ^[enum]`'left' \| 'center' \| 'right'`                                                                                                                                      | left                              |
| class-name            | 列单元格类名                                                                         | ^[string]                                                                                                                                                                   | —                                 |
| label-class-name      | 列标题类名                                                                           | ^[string]                                                                                                                                                                   | —                                 |
| selectable            | 多选列判断行是否可选的函数，`type=selection` 时生效                                  | ^[Function]`(row: any, index: number) => boolean`                                                                                                                           | —                                 |
| reserve-selection     | 多选列数据刷新后是否保留选中，需设置 `row-key`                                       | ^[boolean]                                                                                                                                                                  | false                             |
| filters               | 筛选选项数组，每项需有 `text` 和 `value`                                             | ^[array]`Array<{text: string, value: string}>`                                                                                                                              | —                                 |
| filter-placement      | 筛选下拉位置                                                                         | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | —                                 |
| filter-class-name     | 筛选下拉类名                                                                         | ^[string]                                                                                                                                                                   | —                                 |
| filter-multiple       | 筛选是否多选                                                                         | ^[boolean]                                                                                                                                                                  | true                              |
| filter-method         | 筛选方法，`filter-multiple` 为 true 时每行多次调用，任一返回 true 则显示             | ^[function]`(value: any, row: any, column: TableColumnCtx<T>) => void`                                                                                                      | —                                 |
| filtered-value        | 已选筛选值，表头用 `render-header` 时有用                                            | ^[object]`string[]`                                                                                                                                                         | —                                 |
| tooltip-formatter     | 自定义溢出 Tooltip 内容                                                              | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, cellValue: any }) => VNode \| string`                                                                             | —                                 |

</details>

### Table-column 插槽

<details>
<summary>Element Plus Table-column 插槽</summary>

| 名称        | 说明           | 类型                                                               |
| ----------- | -------------- | ------------------------------------------------------------------ |
| default     | 自定义列内容   | ^[object]`{ row: any, column: TableColumnCtx<T>, $index: number }` |
| header      | 自定义表头内容 | ^[object]`{ column: TableColumnCtx<T>, $index: number }`           |
| filter-icon | 自定义筛选图标 | ^[object]`{ filterOpened: boolean }`                               |
| expand      | 自定义展开内容 | ^[object]`{ expanded: boolean }`                                   |

</details>

## 常见问题

#### 如何在表格中使用图片预览？

```vue{4}
<template>
  <el-table-column width="180">
    <template #default="scope">
      <el-image preview-teleported :preview-src-list="srcList" />
    </template>
  </el-table-column>
</template>
```

#### 为什么用 DOM 模板时列未渲染？

典型问题：[#5046](https://github.com/element-plus/element-plus/issues/5046) [#5862](https://github.com/element-plus/element-plus/issues/5862) [#6919](https://github.com/element-plus/element-plus/issues/6919)

这是因为 HTML 规范只允许少数元素省略闭合标签，常见如 `<input>` 和 `<img>`。其他元素省略闭合标签时，原生 HTML 解析器会认为未终止开始标签。

详情见 [vue 文档](https://cn.vuejs.org/guide/essentials/component-basics.html#self-closing-tags)
