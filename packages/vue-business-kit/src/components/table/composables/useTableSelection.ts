import { TableInternalProps } from "../types"
import { computed, ref } from "vue"

export function useTableSelection(props: TableInternalProps, tableRef: any, filteredData: any) {
  const selectedRow = ref<any[]>([])

  const initSelection = () => {
    if (!props.defaultSelection || !tableRef.value) return
    const hasSelection = props.columns?.some((col) => col.type === "selection")
    if (!hasSelection) return

    const rowKey = (tableRef.value as any).rowKey
    if (props.defaultSelection === true) {
      filteredData.value.forEach((row: any) => tableRef.value!.toggleRowSelection(row, true))
    } else if (Array.isArray(props.defaultSelection)) {
      const selectionIds = props.defaultSelection
      filteredData.value.forEach((row: any) => {
        const id = rowKey ? row[rowKey] : row.id
        if (selectionIds.includes(id)) {
          tableRef.value!.toggleRowSelection(row, true)
        }
      })
    }
  }

  const selectable = (row: any) => {
    if (!props.disabledSelection) return true
    const hasSelection = props.columns?.some((col) => col.type === "selection")
    if (!hasSelection) return true

    const rowKey = (tableRef.value as any)?.rowKey
    const id = rowKey ? row[rowKey] : row.id
    if (props.disabledSelection === true) return false
    if (Array.isArray(props.disabledSelection)) {
      return !props.disabledSelection.includes(id)
    }
    return true
  }

  const selectedRows = computed(() => {
    if (!tableRef.value) return []
    return [...tableRef.value.getSelectionRows(), ...selectedRow.value]
  })

  return {
    selectedRow,
    initSelection,
    selectable,
    selectedRows
  }
}
