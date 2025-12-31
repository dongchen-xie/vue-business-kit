---
title: Table
lang: zh-CN
---

# Table 表格

基于 [Element Plus Table](https://element-plus.org/zh-CN/component/table.html) 增强的表格组件。

以类似格式展示多条数据。你可以在表格中对数据进行排序、筛选、对比等操作。

## 基本用法

通过原始数据和列配置实现基础表格展示。

:::demo 使用 `raw-data` 提供表格数据，通过 `bk-table-column` 组件或 `columns` 属性定义表格结构。每列可配置 `prop`（字段名）、`label`（列标题）、`width`（宽度）等属性。

table/basic

:::

## 斑马纹表格

斑马纹表格更容易区分不同行数据。

:::demo `stripe` 属性接受布尔值，设置为 `true` 时表格将显示斑马纹效果。

table/striped

:::

## 带边框的表格

:::demo 默认情况下表格无垂直边框，如需显示可将 `border` 属性设置为 `true`。

table/with-border

:::

## 带状态的表格

你可以通过高亮表格内容来区分「成功、信息、警告、危险」等状态。

:::demo 使用 `bk-table` 的 `row-class-name` 为指定行添加自定义类名，然后通过自定义类名实现样式高亮。

table/with-status

:::

## 内容溢出时显示 tooltip

当单元格内容过长时会自动换行，你可以使用 `show-overflow-tooltip` 使其单行显示并在溢出时展示 tooltip。

:::demo `show-overflow-tooltip` 属性接受布尔值，设置为 `true` 时，鼠标悬浮在单元格上会通过 tooltip 显示完整内容。

table/show-overflow-tooltip

:::

## 固定表头

当表格行数过多时，可固定表头方便查看。

:::demo 只需为 `bk-table` 设置 `height` 属性，即可固定表头，无需额外代码。

table/fixed-header

:::

## 固定列

当表格列数过多时，可固定指定列在左侧/右侧。

:::demo 在 `columns` 属性（或 `bk-table-column` 组件）配置中使用 `fixed` 属性，接受布尔值（`true` 表示固定在左侧）或字符串（`left`/`right`，分别表示固定在左/右侧）。

table/fixed-column

:::

## 固定列和表头

当表格数据量极大时，可同时固定表头和指定列。

:::demo 结合上述两个示例，同时固定表头和列。

table/fixed-column-and-header

:::

## 流体高度表格（固定表头/列）

当数据动态变化时，你可能希望表格有最大高度限制，超出时显示滚动条而非固定高度。

:::demo 为 `bk-table` 设置 `max-height` 属性，表头将固定，仅当行高总和超过最大高度时，表格主体才会出现滚动条。

table/fixed-header-with-fluid-header

:::

## 表头分组

数据结构复杂时，可通过表头分组展示数据层级。

:::demo 为列配置对象添加 `children` 数组属性即可实现表头分组，子列也可嵌套 `children` 实现多级分组。

table/grouping-header

:::

## 单选

支持单行选中功能。

:::demo 表格支持单行选中，添加 `highlight-current-row` 属性即可激活。选中行变化时会触发 `current-change` 事件，参数为变化后的当前行 `currentRow` 和变化前的行 `oldCurrentRow`。如需显示行索引，只需在 `columns`属性（或 `bk-table-column` 组件）中添加 `type` 属性值为 `index` 的列配置，索引将从 1 开始显示。

table/single-select

:::

## 多选

支持多行选择，包含默认选中、禁用指定行选择等功能。

激活多选功能只需添加 `type` 为 `selection` 的列。通过 `default-selection` 设置初始选中行（设为 `true` 选中所有行，或传入行 ID 数组）；通过 `disabled-selection` 禁用指定行选择（设为 `true` 禁用所有行，或传入行 ID 数组）。注意：使用这些功能时必须设置 `row-key` 属性。

`toggleRowSelection` 方法支持第三个参数 `ignoreSelectable`，用于控制是否忽略行的可选状态。

:::demo 激活多选功能只需在 `columns` 数组中添加 `type: 'selection'` 的列配置对象。

table/multi-select

:::

## 排序

对数据进行排序，快速查找或对比数据。

:::demo 为指定列设置 `sortable` 属性可基于该列排序，接受布尔值（默认 `false`）。设置表格的 `default-sort` 属性可指定默认排序列和排序方式。如需自定义排序规则，可使用 `sort-method` 或 `sort-by`。若需后端远程排序，将 `sortable` 设置为 `custom`，并监听表格的 `sort-change` 事件，在事件处理函数中获取排序列和排序方式，从接口获取排序后的数据。本示例中还使用了 `formatter` 属性格式化列值，该属性接受一个函数，参数为 `row`（行数据）和 `column`（列配置），可按需处理。

table/sort

:::

## 筛选

筛选表格数据，快速找到目标内容。

:::demo 为 `bk-table-column` 设置 `filters` 和 `filter-method` 属性可启用列筛选功能。`filters` 为筛选选项数组，`filter-method` 为筛选方法，参数为 `value`（筛选值）、`row`（行数据）、`column`（列配置），用于判断行是否显示。

table/filter

:::

:::demo 通过 `show-search` 属性启用搜索功能，用户可跨所有列搜索或选择指定列搜索。

table/search

:::

## 自定义列模板

自定义表格列内容，支持集成其他组件。

:::demo 通过 [插槽](https://cn.vuejs.org/guide/components/slots.html) 可访问以下数据：row（行数据）、column（列配置）、$index（行索引）、store（表格状态管理）。

table/custom-column

:::

## 自定义表头

自定义表头样式，实现更个性化的展示。

:::demo 通过表头 [插槽](https://cn.vuejs.org/guide/components/slots.html) 自定义表头展示形式。

table/custom-header

:::

## 可展开行

当行内容过长且不想显示水平滚动条时，可使用可展开行功能。

新增 `preserve-expanded-content` 属性，用于控制折叠时是否保留展开行内容在 DOM 中。

:::demo 添加 `type="expand"` 的列和对应插槽即可激活可展开行。`bk-table-column` 的模板将渲染为展开行内容，可访问与自定义列模板插槽相同的属性。

table/expandable-row

:::

## 树形数据与懒加载

:::demo 支持展示树形结构数据。当行数据包含 `children` 字段时，将被视为嵌套数据；渲染嵌套数据时必须设置 `row-key` 属性。子行数据也可异步加载：将表格的 `lazy` 属性设为 `true`，并配置 `load` 方法；通过行数据的 `hasChildren` 属性标记是否包含子行（`children` 和 `hasChildren` 均可通过 `tree-props` 配置）。

table/tree-and-lazy

:::

## 可选择的树形表格

:::demo 当 `treeProps.checkStrictly` 为 `true` 时，父子节点的选中状态不再关联（父节点选中时子节点不会被选中）；当 `treeProps.checkStrictly` 为 `false` 时，父子节点选中状态关联（父节点选中时所有子节点均被选中）。

table/check-strictly

:::

## 合计行

针对数值型表格，可在表格底部添加合计行，展示每列的求和结果。

:::demo 设置 `show-summary` 为 `true` 即可显示合计行。默认情况下，合计行第一列显示「合计」（可通过 `sum-text` 配置显示文本），其余列显示对应列的数值总和。你也可以通过 `summary-method` 自定义合计逻辑：该方法返回一个数组，数组每个元素将作为合计行对应列的内容（支持 VNode 或字符串）。本示例的第二个表格展示了自定义合计的详细用法。

table/summary

:::

## 合并单元格

配置 rowspan 和 colspan 实现单元格合并。

:::demo 使用 `span-method` 属性配置合并规则，该属性接受一个方法，参数为包含 `row`（当前行）、`column`（当前列）、`rowIndex`（当前行索引）、`columnIndex`（当前列索引）的对象；方法需返回一个包含两个数字的数组（第一个为 `rowspan`，第二个为 `colspan`），或返回包含 `rowspan` 和 `colspan` 属性的对象。

table/rowspan-and-colspan

:::

:::demo 也可使用 `merge-columns` 属性，自动合并指定列中值相同的单元格。

table/merge-columns

:::

## 自定义索引

自定义 `type=index` 列的行索引展示规则。

:::demo 为列配置 `type: "index"` 并设置 `index` 属性即可自定义索引：若为数字，所有索引将偏移该数值；若为函数（参数为原始索引，从 0 开始），返回值将作为显示的索引。

table/custom-index

:::

## 表格布局

[table-layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout) 属性用于设置表格单元格、行、列的布局算法。

:::demo

table/table-layout

:::

## Tooltip 格式化器

使用 `tooltip-formatter` 自定义 tooltip 内容。

:::demo

table/tooltip-formatter

:::

## 工具栏

自定义表格工具栏，包含操作按钮。

:::demo 使用 `show-refresh` 和 `show-export` 属性显示内置操作按钮，或通过 `toolbar-left` 插槽完全自定义工具栏内容；监听 `refresh` 和 `export` 事件处理用户操作。

table/toolbar

:::

## 分页

内置分页功能，适配大数据集展示。

:::demo 设置 `pagination` 为 `true` 启用基础分页，或传入配置对象自定义分页行为。

table/pagination

:::

## 数字格式化

自动格式化表格单元格中的数值。

:::demo 启用 `number-format` 可自动为数字添加千分位分隔符和指定小数位数（基于 [formatNumber](/zh-CN/utils/number/formatNumber.html) 实现）。

table/number-format

:::

## 编辑数据

表格组件支持数据编辑，包含自定义编辑模式和编辑位置。

:::demo 设置 `enable-edit` 为 `true` 启用编辑功能；通过 `edit-mode` 配置编辑模式（默认：'dialog' 对话框），`edit-position` 配置编辑位置（默认：'outside' 外部）；每列可通过 `edit` 属性配置是否启用编辑。

table/edit

:::

## Table API

### Table 属性

| 名称           | 说明                    | 类型                                        | 默认值      |
| -------------- | ----------------------- | ------------------------------------------- | ----------- |
| raw-data       | 表格数据源              | ^[array]`any[]`                             | `[]`        |
| columns        | 列配置项                | ^[array]`TableColumnCtx[]`                  | `[]`        |
| merge-columns  | 需要合并的列名数组      | ^[array]`string[]`                          | `[]`        |
| show-search    | 是否显示搜索功能        | `boolean`                                   | `false`     |
| search-value   | 默认搜索值              | `string`                                    | `''`        |
| search-columns | 默认选中的搜索列        | ^[array]`string[]`                          | `[]`        |
| show-refresh   | 是否显示刷新按钮        | `boolean`                                   | `false`     |
| show-export    | 是否显示导出按钮        | `boolean`                                   | `false`     |
| pagination     | 是否启用分页            | `boolean` \| ^[object]`PaginationProps`     | `false`     |
| number-format  | 是否启用数字格式化      | `boolean` \| ^[object]`FormatNumberOptions` | `false`     |
| edit-mode      | 编辑模式（对话框/抽屉） | ^[enum]`'dialog' \| 'drawer'`               | `'dialog'`  |
| edit-position  | 编辑位置（外部/行内）   | ^[enum]`'outside' \| 'inline'`              | `'outside'` |
| show-add       | 是否显示新增按钮        | `boolean`                                   | `true`      |
| show-batch     | 是否显示批量操作按钮    | `boolean`                                   | `false`     |
| show-edit      | 是否显示编辑按钮        | `boolean`                                   | `true`      |
| show-delete    | 是否显示删除按钮        | `boolean`                                   | `true`      |
| enable-edit    | 是否启用编辑功能        | `boolean`                                   | `false`     |

<details>
<summary>Element Plus 表格原生属性</summary>

| 名称                      | 说明                                                                                                                                                             | 类型                                                                                                                                                                 | 默认值                                                                                                                  |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| data                      | 表格数据                                                                                                                                                         | ^[array]`any[]`                                                                                                                                                      | []                                                                                                                      |
| height                    | 表格高度。默认自动高度；若为数字，单位为像素；若为字符串，直接赋值给 style.height，高度受外部样式影响                                                            | ^[string] / ^[number]                                                                                                                                                | —                                                                                                                       |
| max-height                | 表格最大高度，合法值为数字或带 px 单位的高度字符串                                                                                                               | ^[string] / ^[number]                                                                                                                                                | —                                                                                                                       |
| stripe                    | 是否为斑马纹表格                                                                                                                                                 | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| border                    | 是否带有纵向边框                                                                                                                                                 | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| size                      | 表格尺寸                                                                                                                                                         | ^[enum]`'' \| 'large' \| 'default' \| 'small'`                                                                                                                       | —                                                                                                                       |
| fit                       | 列的宽度是否自适配容器                                                                                                                                           | ^[boolean]                                                                                                                                                           | true                                                                                                                    |
| show-header               | 是否显示表头                                                                                                                                                     | ^[boolean]                                                                                                                                                           | true                                                                                                                    |
| highlight-current-row     | 是否高亮当前行                                                                                                                                                   | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| current-row-key           | 当前行的 key，仅可设置                                                                                                                                           | ^[string] / ^[number]                                                                                                                                                | —                                                                                                                       |
| row-class-name            | 行的自定义类名，支持字符串或函数                                                                                                                                 | ^[Function]`(data: { row: any, rowIndex: number }) => string` / ^[string]                                                                                            | —                                                                                                                       |
| row-style                 | 行的自定义样式，支持对象或函数                                                                                                                                   | ^[Function]`(data: { row: any, rowIndex: number }) => CSSProperties` / ^[object]`CSSProperties`                                                                      | —                                                                                                                       |
| cell-class-name           | 单元格的自定义类名，支持字符串或函数                                                                                                                             | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => string` / ^[string]                                            | —                                                                                                                       |
| cell-style                | 单元格的自定义样式，支持对象或函数                                                                                                                               | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => CSSProperties` / ^[object]`CSSProperties`                      | —                                                                                                                       |
| header-row-class-name     | 表头行的自定义类名，支持字符串或函数                                                                                                                             | ^[Function]`(data: { row: any, rowIndex: number }) => string` / ^[string]                                                                                            | —                                                                                                                       |
| header-row-style          | 表头行的自定义样式，支持对象或函数                                                                                                                               | ^[Function]`(data: { row: any, rowIndex: number }) => CSSProperties` / ^[object]`CSSProperties`                                                                      | —                                                                                                                       |
| header-cell-class-name    | 表头单元格的自定义类名，支持字符串或函数                                                                                                                         | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => string` / ^[string]                                            | —                                                                                                                       |
| header-cell-style         | 表头单元格的自定义样式，支持对象或函数                                                                                                                           | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => CSSProperties` / ^[object]`CSSProperties`                      | —                                                                                                                       |
| row-key                   | 行数据的唯一标识，用于优化渲染；使用 `reserve-selection` 或树形数据时必填；若为字符串，支持多级访问（如 `user.info.id`），不支持 `user.info[0].id`（需使用函数） | ^[function]`(row: any) => string` / ^[string]                                                                                                                        | —                                                                                                                       |
| empty-text                | 空数据时显示的文本，可通过 `#empty` 插槽自定义                                                                                                                   | ^[string]                                                                                                                                                            | 暂无数据                                                                                                                |
| default-expand-all        | 是否默认展开所有行（仅对含展开列或树形数据的表格生效）                                                                                                           | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| expand-row-keys           | 展开行的 key 数组，使用前需设置 row-key                                                                                                                          | ^[object]`Array<string>`                                                                                                                                             | —                                                                                                                       |
| default-sort              | 默认排序配置，`prop` 为默认排序列，`order` 为默认排序方式                                                                                                        | ^[object]`Sort`                                                                                                                                                      | 若设置了 `prop` 但未设置 `order`，则默认升序                                                                            |
| tooltip-effect            | 溢出提示的主题样式                                                                                                                                               | ^[enum]`'dark' \| 'light'`                                                                                                                                           | dark                                                                                                                    |
| tooltip-options           | 溢出提示的配置项，[参考 tooltip 组件](https://element-plus.org/zh-CN/component/tooltip.html#attributes)                                                          | ^[object]`Pick<ElTooltipProps, 'effect' \| 'enterable' \| 'hideAfter' \| 'offset' \| 'placement' \| 'popperClass' \| 'popperOptions' \| 'showAfter' \| 'showArrow'>` | ^[object]`{ enterable: true, placement: 'top', showArrow: true, hideAfter: 200, popperOptions: { strategy: 'fixed' } }` |
| append-filter-panel-to    | 筛选面板挂载的目标元素（选择器）                                                                                                                                 | ^[string]                                                                                                                                                            | —                                                                                                                       |
| show-summary              | 是否显示合计行                                                                                                                                                   | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| sum-text                  | 合计行第一列显示的文本                                                                                                                                           | ^[string]                                                                                                                                                            | 合计                                                                                                                    |
| summary-method            | 自定义合计方法，返回值为合计行各列内容（支持 VNode 或字符串）                                                                                                    | ^[Function]`(data: { columns: any[], data: any[] }) => (VNode \| string)[]`                                                                                          | —                                                                                                                       |
| span-method               | 合并单元格方法，返回值为 [rowspan, colspan] 或 { rowspan, colspan }                                                                                              | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => number[] \| { rowspan: number, colspan: number } \| void`      | —                                                                                                                       |
| select-on-indeterminate   | 多选表格中，当仅部分行被选中时，全选框的行为：true 表示选中所有行，false 表示取消选中                                                                            | ^[boolean]                                                                                                                                                           | true                                                                                                                    |
| indent                    | 树形数据的缩进距离（像素）                                                                                                                                       | ^[number]                                                                                                                                                            | 16                                                                                                                      |
| lazy                      | 是否开启懒加载                                                                                                                                                   | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| load                      | 懒加载加载子行数据的方法（仅 lazy 为 true 时生效），参数：row（当前行）、treeNode（树形节点）、resolve（加载完成的回调，需传入子行数据）                         | ^[Function]`(row: any, treeNode: TreeNode, resolve: (data: any[]) => void) => void`                                                                                  | —                                                                                                                       |
| tree-props                | 树形数据配置，`hasChildren` 为是否有子节点的字段名，`children` 为子节点字段名，`checkStrictly` 为是否取消父子节点选中关联                                        | ^[object]`{ hasChildren?: string, children?: string, checkStrictly?: boolean }`                                                                                      | ^[object]`{ hasChildren: 'hasChildren', children: 'children', checkStrictly: false }`                                   |
| table-layout              | 表格布局算法                                                                                                                                                     | ^[enum]`'fixed' \| 'auto'`                                                                                                                                           | fixed                                                                                                                   |
| scrollbar-always-on       | 是否始终显示滚动条                                                                                                                                               | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| show-overflow-tooltip     | 是否在单元格内容溢出时显示 tooltip，将影响所有列，参考表格 [tooltip-options](#表格属性)                                                                          | ^[boolean] / [`object`](#表格属性)                                                                                                                                   | —                                                                                                                       |
| flexible                  | 确保主轴最小尺寸不跟随内容变化                                                                                                                                   | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| scrollbar-tabindex        | 表格主体滚动容器的 tabindex 属性                                                                                                                                 | ^[string] / ^[number]                                                                                                                                                | —                                                                                                                       |
| allow-drag-last-column    | 是否允许拖动最后一列调整宽度                                                                                                                                     | ^[boolean]                                                                                                                                                           | true                                                                                                                    |
| tooltip-formatter         | 自定义 `show-overflow-tooltip` 启用时的 tooltip 内容，参数：{ row: 行数据, column: 列配置, cellValue: 单元格值 }                                                 | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, cellValue: any }) => VNode \| string`                                                                      | —                                                                                                                       |
| preserve-expanded-content | 折叠时是否保留展开行内容在 DOM 中                                                                                                                                | ^[boolean]                                                                                                                                                           | false                                                                                                                   |
| native-scrollbar          | 是否使用原生滚动条                                                                                                                                               | ^[boolean]                                                                                                                                                           | false                                                                                                                   |

</details>

### Table 事件

| 名称              | 说明               | 类型                                                         |
| ----------------- | ------------------ | ------------------------------------------------------------ |
| refresh           | 点击刷新按钮时触发 | ^[Function]`()`                                              |
| export            | 点击导出按钮时触发 | ^[Function]`(data: any[], columns: TableColumnCtx[])`        |
| search            | 执行搜索操作时触发 | ^[Function]`(value: string, columns: string[])`              |
| pagination-change | 分页状态变化时触发 | ^[Function]`(page: number, size: number)`                    |
| add               | 执行新增操作时触发 | ^[Function]`(data: { action: 'add'; data: any })`            |
| edit              | 执行编辑操作时触发 | ^[Function]`(data: { action: 'edit'; data: any }, row: any)` |
| delete            | 执行删除操作时触发 | ^[Function]`(data: { action: 'delete'; data: any })`         |
| batch             | 执行批量操作时触发 | ^[Function]`(data: { action: 'batch'; data: any })`          |

<details>
<summary>Element Plus 表格原生事件</summary>

| 名称               | 说明                                                                                    | 类型                                                                                                    |
| ------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| select             | 点击行复选框时触发                                                                      | ^[Function]`<T = any>(selection: T[], row: T) => void`                                                  |
| select-all         | 点击表头复选框时触发                                                                    | ^[Function]`(selection: any[]) => void`                                                                 |
| selection-change   | 选中项变化时触发                                                                        | ^[Function]`(newSelection: any[]) => void`                                                              |
| cell-mouse-enter   | 鼠标移入单元格时触发                                                                    | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| cell-mouse-leave   | 鼠标移出单元格时触发                                                                    | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| cell-click         | 点击单元格时触发                                                                        | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| cell-dblclick      | 双击单元格时触发                                                                        | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| cell-contextmenu   | 右键点击单元格时触发                                                                    | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| row-click          | 点击行时触发                                                                            | ^[Function]`(row: any, column: TableColumnCtx<T>, event: Event) => void`                                |
| row-contextmenu    | 右键点击行时触发                                                                        | ^[Function]`(row: any, column: TableColumnCtx<T>, event: Event) => void`                                |
| row-dblclick       | 双击行时触发                                                                            | ^[Function]`(row: any, column: TableColumnCtx<T>, event: Event) => void`                                |
| header-click       | 点击列表头时触发                                                                        | ^[Function]`(column: TableColumnCtx<T>, event: Event) => void`                                          |
| header-contextmenu | 右键点击列表头时触发                                                                    | ^[Function]`(column: TableColumnCtx<T>, event: Event) => void`                                          |
| sort-change        | 表格排序状态变化时触发                                                                  | ^[Function]`(data: {column: TableColumnCtx<T>, prop: string, order: any }) => void`                     |
| filter-change      | 表格筛选状态变化时触发                                                                  | ^[Function]`(newFilters: any) => void`                                                                  |
| current-change     | 当前选中行变化时触发                                                                    | ^[Function]`(currentRow: any, oldCurrentRow: any) => void`                                              |
| header-dragend     | 拖动列表头边框调整列宽后触发                                                            | ^[Function]`(newWidth: number, oldWidth: number, column: TableColumnCtx<T>, event: MouseEvent) => void` |
| expand-change      | 展开/折叠行时触发（展开行表格：第二个参数为展开行数组；树形表格：第二个参数为是否展开） | ^[Function]`(row: any, expandedRows: any[]) => void & (row: any, expanded: boolean) => void`            |
| scroll             | 表格滚动时触发                                                                          | ^[Function]`({ scrollLeft: number, scrollTop: number }) => void`                                        |

</details>

### Table 插槽

| 名称         | 说明                 |
| ------------ | -------------------- |
| toolbar-left | 工具栏左侧自定义内容 |

<details>
<summary>Element Plus 表格原生插槽</summary>

| 名称    | 说明                                                                                                       | 子标签       |
| ------- | ---------------------------------------------------------------------------------------------------------- | ------------ |
| default | 表格主体自定义内容                                                                                         | Table-column |
| append  | 插入到表格最后一行之后的内容，如需实现表格无限滚动可使用此插槽；若存在合计行，该插槽内容将显示在合计行上方 | —            |
| empty   | 空数据时的自定义内容                                                                                       | —            |

</details>

### Table 暴露的方法

<details>
<summary>Element Plus 表格原生暴露方法</summary>

| 方法               | 说明                                                                                                   | 类型                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| clearSelection     | 多选表格专用，清空用户选中的行                                                                         | ^[Function]`() => void`                                                      |
| getSelectionRows   | 返回当前选中的行数据数组                                                                               | ^[Function]`() => any[]`                                                     |
| toggleRowSelection | 多选表格专用，切换指定行的选中状态；第二个参数可直接设置行是否选中（true 选中，false 取消）            | ^[Function]`(row: any, selected?: boolean, ignoreSelectable = true) => void` |
| toggleAllSelection | 多选表格专用，切换全选/取消全选状态                                                                    | ^[Function]`() => void`                                                      |
| toggleRowExpansion | 展开行表格/树形表格专用，切换指定行的展开状态；第二个参数可直接设置行是否展开（true 展开，false 折叠） | ^[Function]`(row: any, expanded?: boolean) => void`                          |
| setCurrentRow      | 单选表格专用，设置指定行为当前选中行；无参数时清空选中                                                 | ^[Function]`(row: any) => void`                                              |
| clearSort          | 清空排序状态，恢复数据原始顺序                                                                         | ^[Function]`() => void`                                                      |
| clearFilter        | 清空筛选状态：传入 columnKey 数组时清空指定列筛选，无参数时清空所有列筛选                              | ^[Function]`(columnKeys?: string[]) => void`                                 |
| doLayout           | 刷新表格布局，当表格可见性变化时，可能需要调用此方法确保布局正确                                       | ^[Function]`() => void`                                                      |
| sort               | 手动触发表格排序：`prop` 为排序列字段名，`order` 为排序方式（'ascending' 升序，'descending' 降序）     | ^[Function]`(prop: string, order: string) => void`                           |
| scrollTo           | 滚动表格到指定坐标位置                                                                                 | ^[Function]`(options: number \| ScrollToOptions, yCoord?: number) => void`   |
| setScrollTop       | 设置表格垂直滚动位置（像素）                                                                           | ^[Function]`(top?: number) => void`                                          |
| setScrollLeft      | 设置表格水平滚动位置（像素）                                                                           | ^[Function]`(left?: number) => void`                                         |
| columns            | 获取表格列配置上下文数组                                                                               | ^[array]`TableColumnCtx<T>[]`                                                |
| updateKeyChildren  | 懒加载表格专用（需设置 row-key），更新指定 key 对应的子行数据                                          | ^[Function]`(key: string, data: T[]) => void`                                |

</details>

## TableColumn API

### TableColumn 属性

继承所有 Element Plus TableColumnCtx 属性，并新增以下增强功能：

| 名称          | 说明                                                                                                                                                                                                                                            | 类型                                                                                                                                             | 默认值 |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| slots         | 自定义插槽配置：设为 `true` 时，自动生成 `{prop}`（列内容）、`{prop}-header`（表头）、`{prop}-filterIcon`（筛选图标）、`{prop}-expand`（展开按钮）插槽；设为对象时，每个属性支持布尔值（true 启用并使用自动生成名称）或字符串（自定义插槽名称） | ^[boolean] \| ^[object]`{ default?: string \| boolean, header?: string \| boolean, filterIcon?: string \| boolean, expand?: string \| boolean }` | -      |
| number-format | 数字格式化配置：设为 `true` 时使用默认数字格式化；设为对象时传入自定义格式化选项，优先级高于表格级的 `numberFormat` 设置                                                                                                                        | ^[boolean] \| ^[object]`FormatNumberOptions`                                                                                                     | -      |
| children      | 表头分组的子列数组，子列可嵌套 `children` 实现多级分组，用于创建多层级表头                                                                                                                                                                      | ^[array]`TableColumnCtx[]`                                                                                                                       | -      |
| edit          | 编辑表单配置（用于行内编辑）：设为 `FormItemCtx` 时启用该列编辑功能，`FormItemCtx` 接口继承 Element Plus FormItemProps，包含额外属性：`type`（组件类型字符串）、`componentProps`（组件额外属性）、`children`（嵌套表单项配置）                  | ^[object]`FormItemCtx`                                                                                                                           | -      |

<details>
<summary>Element Plus 表格列原生属性</summary>

| 名称                  | 说明                                                                                                                                                                                             | 类型                                                                                                                                                                        | 默认值                            |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| type                  | 列类型：`selection`（复选框列）、`index`（索引列）、`expand`（展开按钮列）、`default`（默认列）                                                                                                  | ^[enum]`'default' \| 'selection' \| 'index' \| 'expand'`                                                                                                                    | default                           |
| index                 | 索引列自定义索引：支持数字（索引偏移量）或函数（参数为原始索引，返回自定义索引），仅对 `type=index` 的列生效                                                                                     | ^[number] / ^[Function]`(index: number) => number`                                                                                                                          | —                                 |
| label                 | 列标题                                                                                                                                                                                           | ^[string]                                                                                                                                                                   | —                                 |
| column-key            | 列的唯一标识，使用 `filter-change` 事件时需通过该属性识别列                                                                                                                                      | ^[string]                                                                                                                                                                   | —                                 |
| prop                  | 列对应的行数据字段名，别名：`property`                                                                                                                                                           | ^[string]                                                                                                                                                                   | —                                 |
| width                 | 列宽度                                                                                                                                                                                           | ^[string] / ^[number]                                                                                                                                                       | ''                                |
| min-width             | 列最小宽度：`width` 为固定宽度，`min-width` 为自适应宽度（按比例分配剩余空间）                                                                                                                   | ^[string] / ^[number]                                                                                                                                                       | ''                                |
| fixed                 | 列固定位置：`true`/`left`（固定在左侧）、`right`（固定在右侧）                                                                                                                                   | ^[enum]`'left' \| 'right'` / ^[boolean]                                                                                                                                     | false                             |
| render-header         | 表头自定义渲染函数，参数：{ column: 列配置, $index: 列索引 }                                                                                                                                     | ^[Function]`(data: { column: TableColumnCtx<T>, $index: number }) => void`                                                                                                  | —                                 |
| sortable              | 是否支持排序：`true`（启用默认排序）、`custom`（远程排序，需监听表格 `sort-change` 事件）                                                                                                        | ^[boolean] / ^[string]                                                                                                                                                      | false                             |
| sort-method           | 自定义排序方法（`sortable` 为 `true` 时生效），返回值规则同 `Array.sort`（负数：a 在 b 前，正数：a 在 b 后，0：位置不变）                                                                        | ^[Function]`<T = any>(a: T, b: T) => number`                                                                                                                                | —                                 |
| sort-by               | 排序依据字段（`sortable` 为 `true` 且未设置 `sort-method` 时生效）：支持字符串（单个字段）、数组（多字段排序，前字段相等时按后字段排序）、函数（参数：row 行数据、index 行索引，返回排序字段值） | ^[Function]`(row: any, index: number) => string` / ^[string] / ^[object]`string[]`                                                                                          | —                                 |
| sort-orders           | 排序顺序选项（`sortable` 为 `true` 时生效）：数组元素为 `'ascending'`（升序）、`'descending'`（降序）、`null`（取消排序），用户点击表头时按数组顺序切换                                          | ^[object]`('ascending' \| 'descending' \| null)[]`                                                                                                                          | ['ascending', 'descending', null] |
| resizable             | 是否允许拖动列宽（仅表格 `border` 为 `true` 时生效）                                                                                                                                             | ^[boolean]                                                                                                                                                                  | true                              |
| formatter             | 单元格内容格式化函数，参数：row（行数据）、column（列配置）、cellValue（单元格原始值）、index（行索引），返回值支持 VNode 或字符串                                                               | ^[function]`(row: any, column: TableColumnCtx<T>, cellValue: any, index: number) => VNode \| string`                                                                        | —                                 |
| show-overflow-tooltip | 单元格内容溢出时是否显示 tooltip，优先级高于表格级配置                                                                                                                                           | ^[boolean] / [`object`](#表格属性)                                                                                                                                          | undefined                         |
| align                 | 单元格内容对齐方式：`left`（左对齐）、`center`（居中）、`right`（右对齐）                                                                                                                        | ^[enum]`'left' \| 'center' \| 'right'`                                                                                                                                      | left                              |
| header-align          | 表头内容对齐方式，未设置时继承 `align` 属性值                                                                                                                                                    | ^[enum]`'left' \| 'center' \| 'right'`                                                                                                                                      | left                              |
| class-name            | 单元格自定义类名                                                                                                                                                                                 | ^[string]                                                                                                                                                                   | —                                 |
| label-class-name      | 表头标题自定义类名                                                                                                                                                                               | ^[string]                                                                                                                                                                   | —                                 |
| selectable            | 多选列专用，控制行是否可选中（`type` 为 `selection` 时生效），参数：row（行数据）、index（行索引），返回布尔值                                                                                   | ^[Function]`(row: any, index: number) => boolean`                                                                                                                           | —                                 |
| reserve-selection     | 多选列专用，数据刷新后是否保留选中状态（`type` 为 `selection` 时生效），使用前需设置表格 `row-key`                                                                                               | ^[boolean]                                                                                                                                                                  | false                             |
| filters               | 列筛选选项数组，每个元素需包含 `text`（显示文本）和 `value`（筛选值）                                                                                                                            | ^[array]`Array<{text: string, value: string}>`                                                                                                                              | —                                 |
| filter-placement      | 筛选下拉框挂载位置，可选值：`top`/`top-start`/`top-end`/`bottom`/`bottom-start`/`bottom-end`/`left`/`left-start`/`left-end`/`right`/`right-start`/`right-end`                                    | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | —                                 |
| filter-class-name     | 筛选下拉框自定义类名                                                                                                                                                                             | ^[string]                                                                                                                                                                   | —                                 |
| filter-multiple       | 筛选是否支持多选                                                                                                                                                                                 | ^[boolean]                                                                                                                                                                  | true                              |
| filter-method         | 筛选方法：`filter-multiple` 为 `true` 时，每行将多次调用该方法（每个筛选值一次），只要有一次返回 `true` 该行即显示；参数：value（筛选值）、row（行数据）、column（列配置）                       | ^[function]`(value: any, row: any, column: TableColumnCtx<T>) => void`                                                                                                      | —                                 |
| filtered-value        | 筛选选中值（表头自定义渲染时可能需要用到）                                                                                                                                                       | ^[object]`string[]`                                                                                                                                                         | —                                 |
| tooltip-formatter     | 自定义 `show-overflow-tooltip` 启用时的 tooltip 内容，参数：{ row: 行数据, column: 列配置, cellValue: 单元格值 }                                                                                 | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, cellValue: any }) => VNode \| string`                                                                             | —                                 |

</details>

### TableColumn 插槽

<details>
<summary>Element Plus 表格列原生插槽</summary>

| 名称        | 说明           | 类型                                                               |
| ----------- | -------------- | ------------------------------------------------------------------ |
| default     | 列内容自定义   | ^[object]`{ row: any, column: TableColumnCtx<T>, $index: number }` |
| header      | 表头内容自定义 | ^[object]`{ column: TableColumnCtx<T>, $index: number }`           |
| filter-icon | 筛选图标自定义 | ^[object]`{ filterOpened: boolean }`                               |
| expand      | 展开按钮自定义 | ^[object]`{ expanded: boolean }`                                   |

</details>

## 常见问题（FAQ）

#### 如何在表格中实现图片预览？

```vue{4}
<template>
  <bk-table-column width="180">
    <template #default="scope">
      <el-image preview-teleported :preview-src-list="srcList" />
    </template>
  </bk-table-column>
</template>
```
