import { ref, computed, watch } from "vue"
import { compact, isEmpty } from "lodash-es"
import type { TableColumnCtx } from "../types"

export function useTableSearch(
  props: {
    searchValue: string
    searchColumns: string[]
    columns?: TableColumnCtx[]
    rawData: any[]
  },
  emit: (event: "search", searchText: string, selectedColumns: string[]) => void
) {
  const searchText = ref(props.searchValue)
  const selectedColumns = ref<string[]>(props.searchColumns)

  const searchableColumns = computed(() =>
    (props.columns || []).filter((col) => col.prop && col.label)
  )

  const searchedData = computed(() => {
    const data = props.rawData || []
    if (isEmpty(searchText.value)) return data
    const searchColumns = isEmpty(selectedColumns.value)
      ? compact(searchableColumns.value.map((col) => col.prop))
      : selectedColumns.value
    return data.filter((row) =>
      searchColumns.some((col) =>
        String(row[col] || "")
          .toLowerCase()
          .includes(searchText.value.toLowerCase())
      )
    )
  })

  const handleSearch = () => {
    emit("search", searchText.value, selectedColumns.value)
  }

  watch(
    () => props.searchValue,
    (val) => {
      searchText.value = val
    }
  )

  watch(
    () => props.searchColumns,
    (val) => {
      selectedColumns.value = val
    }
  )

  return {
    searchText,
    selectedColumns,
    searchableColumns,
    searchedData,
    handleSearch
  }
}
