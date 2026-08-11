import type {
  PaginationProps,
  TableColumnCtx as ElTableColumnCtx,
  TableProps as ElTableProps,
  TableInstance as ElTableInstance
} from "element-plus"
import type { FormatNumberOptions } from "../../utils/formatNumber"
import { DefaultRow } from "element-plus/es/components/table/src/table/defaults.mjs"
import type { FormItem } from "../form/types"

export interface TableColumnItem<T extends DefaultRow = DefaultRow> extends Partial<
  Omit<ElTableColumnCtx<T>, "children">
> {
  slots?:
    | boolean
    | {
        default?: string | boolean
        header?: string | boolean
        filterIcon?: string | boolean
        expand?: string | boolean
      }
  numberFormat?: boolean | FormatNumberOptions
  children?: TableColumnItem[]
  edit?: FormItem
  showColumn?: boolean
}

export interface TableInternalProps {
  rawData?: any[]
  columns?: TableColumnItem[]
  mergeColumns?: string[]
  showSearch?: boolean
  searchValue?: string
  searchColumns?: string[]
  showRefresh?: boolean
  showExport?: boolean
  pagination?: boolean | Partial<PaginationProps>
  numberFormat?: boolean | FormatNumberOptions
  defaultSelection?: boolean | (string | number)[]
  disabledSelection?: boolean | (string | number)[]
  editMode?: "dialog" | "drawer"
  editPosition?: "outside" | "inline"
  showAdd?: boolean
  showBatch?: boolean
  showEdit?: boolean
  showDelete?: boolean
  enableEdit?: boolean
}
export interface TableProps extends ElTableProps<any>, TableInternalProps {}

export interface TableEmits {
  refresh: []
  export: [data: any[], columns: TableColumnItem[]]
  search: [value: string, columns: string[]]
  paginationChange: [page: number, size: number]
  open: [data: { action: "add" | "edit" | "batch" }, row?: any]
  add: [data: { action: "add"; data: any }]
  edit: [data: { action: "edit"; data: any }, row: any]
  delete: [data: { action: "delete"; data: any }]
  batch: [data: { action: "batch"; data: any }]
}

export interface TableInstance {
  elTableRef?: ElTableInstance
}

export type {
  Table,
  TableRefs,
  TableColumnCtx,
  TableColumnInstance,
  ColumnCls,
  ColumnStyle,
  CellCls,
  CellStyle,
  SummaryMethod,
  TreeNode,
  RenderRowData,
  Sort,
  Filter,
  TableTooltipData
} from "element-plus"
