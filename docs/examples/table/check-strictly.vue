<template>
  <el-radio-group v-model="treeProps.checkStrictly">
    <el-radio-button :value="true" label="true" />
    <el-radio-button :value="false" label="false" />
  </el-radio-group>
  <bk-table
    :raw-data="tableData"
    :columns="columns"
    :tree-props="treeProps"
    row-key="id"
    default-expand-all
  >
  </bk-table>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
import type { TableColumnCtx } from "vue-business-kit"

interface User {
  id: number
  date: string
  name: string
  address: string
  hasChildren?: boolean
  children?: User[]
}

const treeProps = reactive({
  checkStrictly: false
})

const selectable = (row: User) => ![1, 31].includes(row.id)

const tableData: User[] = [
  {
    id: 1,
    date: "2016-05-02",
    name: "wangxiaohu",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    id: 2,
    date: "2016-05-04",
    name: "wangxiaohu",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    id: 3,
    date: "2016-05-01",
    name: "wangxiaohu",
    address: "No. 189, Grove St, Los Angeles",
    children: [
      {
        id: 31,
        date: "2016-05-01",
        name: "wangxiaohu",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        id: 32,
        date: "2016-05-01",
        name: "wangxiaohu",
        address: "No. 189, Grove St, Los Angeles"
      }
    ]
  },
  {
    id: 4,
    date: "2016-05-03",
    name: "wangxiaohu",
    address: "No. 189, Grove St, Los Angeles"
  }
]

const columns: TableColumnCtx[] = [
  {
    type: "selection",
    width: 55,
    selectable
  },
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
