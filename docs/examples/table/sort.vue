<template>
  <bk-table
    :raw-data="tableData"
    :columns="columns"
    :default-sort="{ prop: 'date', order: 'descending' }"
    style="width: 100%"
  >
  </bk-table>
</template>

<script lang="ts" setup>
import type { TableColumnCtx } from "vue-business-kit"

interface User {
  date: string
  name: string
  address: string
}

const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.address
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
    prop: "date",
    label: "Date",
    width: 180,
    sortable: true
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
  }
]
</script>
