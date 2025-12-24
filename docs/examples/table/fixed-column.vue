<template>
  <bk-table :raw-data="tableData" :columns="columns" style="width: 100%">
    <template #operations>
      <bk-button link type="primary" size="small" @click="handleClick"> Detail </bk-button>
      <bk-button link type="primary" size="small">Edit</bk-button>
    </template>
  </bk-table>
</template>

<script lang="ts" setup>
import type { TableColumnCtx } from "vue-business-kit"

const handleClick = () => {
  console.log("click")
}

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office"
  }
]

const columns: TableColumnCtx[] = [
  {
    prop: "date",
    label: "Date",
    width: 150
  },
  {
    prop: "name",
    label: "Name",
    width: 120
  },
  {
    prop: "state",
    label: "State",
    width: 120
  },
  {
    prop: "city",
    label: "City",
    width: 120
  },
  {
    prop: "address",
    label: "Address",
    width: 600
  },
  {
    prop: "zip",
    label: "Zip",
    width: 120
  },
  {
    label: "Operations",
    minWidth: 120,
    fixed: "right",
    slots: {
      default: "operations"
    }
  }
]
</script>
