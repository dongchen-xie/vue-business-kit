<template>
  <bk-table :raw-data="tableData" :columns="columns" :merge-columns="['name']" :border="true" />
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
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Jerry",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Jerry",
    address: "No. 189, Grove St, Los Angeles"
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
</script>
