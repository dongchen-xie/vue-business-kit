import type {
  PaginationProps,
  TableColumnCtx as EpTableColumnCtx,
  TableProps as EpTableProps,
  TableInstance as EpTableInstance
} from "element-plus"
import type { FormatNumberOptions } from "../../utils/formatNumber"
import { DefaultRow } from "element-plus/es/components/table/src/table/defaults.mjs"
import type { FormItemCtx } from "../form/types"

export interface TableColumnCtx<T extends DefaultRow = DefaultRow>
  extends Partial<Omit<EpTableColumnCtx<T>, "children">> {
  slots?:
    | boolean
    | {
        default?: string | boolean
        header?: string | boolean
        filterIcon?: string | boolean
        expand?: string | boolean
      }
  numberFormat?: boolean | FormatNumberOptions
  children?: TableColumnCtx[]
  edit?: FormItemCtx
}

export interface TableInternalProps {
  rawData?: any[]
  columns?: TableColumnCtx[]
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
export interface TableProps extends EpTableProps<any>, TableInternalProps {}

export interface TableEmits {
  refresh: []
  export: [data: any[], columns: TableColumnCtx[]]
  search: [value: string, columns: string[]]
  paginationChange: [page: number, size: number]
  add: [data: { action: "add"; data: any }]
  edit: [data: { action: "edit"; data: any }, row: any]
  delete: [data: { action: "delete"; data: any }]
  batch: [data: { action: "batch"; data: any }]
}

export interface TableInstance {
  epTable?: EpTableInstance
}

export type {
  TableColumnInstance,
  SummaryMethod,
  Table,
  TableRefs,
  ColumnCls,
  ColumnStyle,
  CellCls,
  CellStyle,
  TreeNode,
  RenderRowData,
  Sort,
  Filter,
  TableTooltipData
} from "element-plus"
