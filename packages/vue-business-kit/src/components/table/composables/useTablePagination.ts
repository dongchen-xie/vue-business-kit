import { ref, computed } from "vue"
import { slice, merge } from "lodash-es"
import type { TableProps } from "../types"

export function useTablePagination(
  props: Pick<TableProps, "pagination">,
  searchedData: any,
  emit: any
) {
  const currentPage = ref(1)
  const pageSize = ref(10)

  const filteredData = computed(() => {
    if (!props.pagination) return searchedData.value
    const start = (currentPage.value - 1) * pageSize.value
    return slice(searchedData.value, start, start + pageSize.value)
  })

  const paginationConfig = computed(() => {
    if (!props.pagination) return null
    const defaultConfig = {
      layout: "total, sizes, prev, pager, next, jumper",
      background: true,
      total: searchedData.value.length,
      currentPage: currentPage.value,
      pageSize: pageSize.value
    }
    return typeof props.pagination === "boolean"
      ? defaultConfig
      : merge({}, defaultConfig, props.pagination)
  })

  const handleSizeChange = (size: number) => {
    pageSize.value = size
    emit("pagination-change", currentPage.value, size)
  }

  const handleCurrentChange = (page: number) => {
    currentPage.value = page
    emit("pagination-change", page, pageSize.value)
  }

  return {
    currentPage,
    pageSize,
    filteredData,
    paginationConfig,
    handleSizeChange,
    handleCurrentChange
  }
}
