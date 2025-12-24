import type { TableProps } from "../types"

export function useTableMerge(
  props: Pick<TableProps, "mergeColumns"> & { spanMethod?: any },
  searchedData: any,
  attrs: Record<string, any>
) {
  const mergedSpanMethod = (params: any) => {
    const customSpanMethod = attrs.spanMethod || attrs["span-method"]
    if (customSpanMethod) {
      return customSpanMethod(params)
    }

    if (props.mergeColumns?.includes(params.column.property)) {
      const { row, column, rowIndex } = params
      const data = searchedData.value
      if (rowIndex === 0) {
        let count = 1
        for (let i = 1; i < data.length; i++) {
          if (data[i][column.property] === row[column.property]) {
            count++
          } else {
            break
          }
        }
        return [count, 1]
      } else {
        const prevRow = data[rowIndex - 1]
        if (prevRow[column.property] === row[column.property]) {
          return [0, 0]
        } else {
          let count = 1
          for (let i = rowIndex + 1; i < data.length; i++) {
            if (data[i][column.property] === row[column.property]) {
              count++
            } else {
              break
            }
          }
          return [count, 1]
        }
      }
    }
    return [1, 1]
  }

  return {
    mergedSpanMethod
  }
}
