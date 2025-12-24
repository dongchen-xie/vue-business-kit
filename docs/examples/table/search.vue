<template>
  <bk-table :raw-data="tableData" :columns="columns" show-search @search="handleSearch" />
</template>

<script setup lang="ts">
import type { TableColumnCtx } from "vue-business-kit"

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-02",
    name: "Jerry",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Alice",
    address: "No. 189, Grove St, New York"
  },
  {
    date: "2016-05-01",
    name: "Bob",
    address: "No. 189, Grove St, Chicago"
  }
]

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

const handleSearch = (value: string, columns: string[]) => {
  console.log("Search:", value, columns)
}
</script>
