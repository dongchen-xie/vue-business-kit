<template>
  <bk-button @click="resetDateFilter">reset date filter</bk-button>
  <bk-button @click="clearFilter">reset all filters</bk-button>
  <bk-table
    ref="tableRef"
    row-key="date"
    :raw-data="tableData"
    :columns="columns"
    style="width: 100%"
  >
    <template #tag="scope">
      <el-tag :type="scope.row.tag === 'Home' ? 'primary' : 'success'" disable-transitions>{{
        scope.row.tag
      }}</el-tag>
    </template>
  </bk-table>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import type { TableColumnCtx, TableInstance } from "vue-business-kit"

interface User {
  date: string
  name: string
  address: string
  tag: string
}

const tableRef = ref<TableInstance>()

const resetDateFilter = () => {
  tableRef.value!.epTable!.clearFilter(["date"])
}
const clearFilter = () => {
  tableRef.value!.epTable!.clearFilter()
}
const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.address
}
const filterTag = (value: string, row: User) => {
  return row.tag === value
}
const filterHandler = (value: string, row: User, column: TableColumnCtx<User>) => {
  const property = column["property"] as string
  return row[property] === value
}

const tableData: User[] = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    tag: "Home"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    tag: "Office"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    tag: "Home"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
    tag: "Office"
  }
]

const columns: TableColumnCtx[] = [
  {
    prop: "date",
    label: "Date",
    width: 180,
    sortable: true,
    columnKey: "date",
    filters: [
      { text: "2016-05-01", value: "2016-05-01" },
      { text: "2016-05-02", value: "2016-05-02" },
      { text: "2016-05-03", value: "2016-05-03" },
      { text: "2016-05-04", value: "2016-05-04" }
    ],
    filterMethod: filterHandler
  },
  {
    prop: "name",
    label: "Name",
    width: 180
  },
  {
    prop: "address",
    label: "Address",
    formatter: formatter
  },
  {
    prop: "tag",
    label: "Tag",
    width: 100,
    filters: [
      { text: "Home", value: "Home" },
      { text: "Office", value: "Office" }
    ],
    filterMethod: filterTag,
    filterPlacement: "bottom-end",
    slots: {
      default: "tag"
    }
  }
]
</script>
