<template>
  <el-radio-group v-model="tableLayout">
    <el-radio-button value="fixed">fixed</el-radio-button>
    <el-radio-button value="auto">auto</el-radio-button>
  </el-radio-group>
  <bk-table :raw-data="tableData" :columns="columns" :table-layout="tableLayout"> </bk-table>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import type { TableColumnCtx } from "vue-business-kit"

const tableLayout = ref<string>("fixed")

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
    label: "Date"
  },
  {
    prop: "name",
    label: "Name"
  },
  {
    prop: "address",
    label: "Address"
  }
]
</script>
