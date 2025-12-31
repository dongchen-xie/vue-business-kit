<template>
  <bk-table :raw-data="tableData">
    <bk-table-column prop="date" label="Date" width="180"> </bk-table-column>
    <bk-table-column prop="name" label="Name" width="180"> </bk-table-column>
    <bk-table-column prop="address" label="Address"> </bk-table-column>
  </bk-table>
  <el-divider />
  <bk-table :raw-data="tableData" :columns="columns"> </bk-table>
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
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Tom",
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
