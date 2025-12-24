import { isNumber } from "lodash-es"
import { formatNumber, type FormatNumberOptions } from "../../../utils/formatNumber"
import type { TableColumnCtx, TableProps } from "../types"

export function useTableFormat(props: Pick<TableProps, "numberFormat">) {
  const shouldFormatNumber = (column: TableColumnCtx, value: any) => {
    const columnNumberFormat =
      column.numberFormat !== undefined ? column.numberFormat : props.numberFormat
    return !!(columnNumberFormat && isNumber(value) && column.prop)
  }

  const formatCellValue = (value: number, column?: TableColumnCtx) => {
    // Use column-level numberFormat if available, otherwise use table-level
    const numberFormatConfig =
      column?.numberFormat !== undefined ? column.numberFormat : props.numberFormat

    if (typeof numberFormatConfig === "boolean") {
      return formatNumber(value, {
        prec: 1,
        separator: true
      })
    }
    return formatNumber(value, numberFormatConfig as FormatNumberOptions)
  }

  return {
    shouldFormatNumber,
    formatCellValue
  }
}
