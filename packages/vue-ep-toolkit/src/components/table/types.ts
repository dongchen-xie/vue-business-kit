import type { PaginationProps, TableColumnCtx, TableProps, TableInstance } from "element-plus"
import type { FormatNumberOptions } from "../../utils/formatNumber"
import { DefaultRow } from "element-plus/es/components/table/src/table/defaults.mjs"

export interface EpTableColumnProps extends Partial<Omit<TableColumnCtx<DefaultRow>, "children">> {
  slots?:
    | boolean
    | {
        default?: string | boolean
        header?: string | boolean
        filterIcon?: string | boolean
        expand?: string | boolean
      }
  children?: EpTableColumnProps[]
}
export interface EpTableInternalProps {
  rawData?: any[]
  columns?: EpTableColumnProps[]
  mergeColumns?: string[]
  showSearch?: boolean
  searchValue?: string
  searchColumns?: string[]
  showRefresh?: boolean
  showExport?: boolean
  pagination?: boolean | PaginationProps
  numberFormat?: boolean | FormatNumberOptions
  defaultSelection?: boolean | (string | number)[]
  disabledSelection?: boolean | (string | number)[]
}

export interface EpTableProps extends TableProps<any>, EpTableInternalProps {}

export interface EpTableEmits {
  refresh: []
  export: [data: any[], columns: EpTableColumnProps[]]
  search: [value: string, columns: string[]]
  paginationChange: [page: number, size: number]
}

export interface EpTableInstance {
  tableRef?: TableInstance
}
