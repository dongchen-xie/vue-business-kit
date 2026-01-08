<template>
  <bk-table
    ref="singleTableRef"
    :raw-data="tableData"
    :columns="columns"
    highlight-current-row
    style="width: 100%"
    @current-change="handleCurrentChange"
  >
  </bk-table>
  <div style="margin-top: 20px">
    <bk-button @click="setCurrent(tableData[1])">Select second row</bk-button>
    <bk-button @click="setCurrent()">Clear selection</bk-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import type { TableColumnCtx, TableInstance } from "vue-business-kit"

interface User {
  date: string
  name: string
  address: string
}

const currentRow = ref()
const singleTableRef = ref<TableInstance>()

const setCurrent = (row?: User) => {
  singleTableRef.value!.epTable!.setCurrentRow(row)
}
const handleCurrentChange = (val: User | undefined) => {
  currentRow.value = val
}
const tableData: User[] = [
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
    type: "index",
    width: 50
  },
  {
    prop: "date",
    label: "Date",
    width: 120
  },
  {
    prop: "name",
    label: "Name",
    width: 120
  },
  {
    prop: "address",
    label: "Address"
  }
]
</script>
