<template>
  <bk-table :raw-data="filterTableData" :columns="columns" style="width: 100%">
    <template #operations-header>
      <el-input v-model="search" size="small" placeholder="Type to search" />
    </template>
    <template #operations="scope">
      <bk-button size="small" @click="handleEdit(scope.$index, scope.row)"> Edit </bk-button>
      <bk-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
        Delete
      </bk-button>
    </template>
  </bk-table>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue"
import type { TableColumnCtx } from "vue-business-kit"

interface User {
  date: string
  name: string
  address: string
}

const search = ref("")
const filterTableData = computed(() =>
  tableData.filter(
    (data) => !search.value || data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

const tableData: User[] = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-02",
    name: "John",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Morgan",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Jessy",
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
    prop: "operations",
    align: "right",
    slots: true
  }
]
</script>
