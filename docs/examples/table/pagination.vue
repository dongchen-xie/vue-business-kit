<template>
  <bk-table
    :raw-data="tableData"
    :columns="columns"
    :pagination="true"
    @pagination-change="handlePaginationChange"
  />
</template>

<script setup lang="ts">
import type { TableColumnCtx } from "vue-business-kit"

const tableData = Array.from({ length: 50 }, (_, index) => ({
  date: `2016-05-${String(index + 1).padStart(2, "0")}`,
  name: `User ${index + 1}`,
  address: `No. ${index + 1}, Grove St, Los Angeles`
}))

const columns: TableColumnCtx[] = [
  {
    prop: "date",
    label: "Date",
    width: 180
  },
  {
    prop: "name",
    label: "Name",
    width: 180
  },
  {
    prop: "address",
    label: "Address"
  }
]

const handlePaginationChange = (page: number, size: number) => {
  console.log("Pagination change:", page, size)
}
</script>
