<template>
  <bk-table :raw-data="tableData" :columns="columns" style="width: 100%" height="250"> </bk-table>
</template>

<script lang="ts" setup>
import type { TableColumnCtx } from "vue-business-kit"

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  },
  {
    date: "2016-05-08",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  },
  {
    date: "2016-05-06",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  },
  {
    date: "2016-05-07",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  }
]

const columns: TableColumnCtx[] = [
  {
    prop: "date",
    label: "Date",
    width: 150,
    fixed: true
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
    width: 320
  },
  {
    prop: "address",
    label: "Address",
    width: 600
  },
  {
    prop: "zip",
    label: "Zip"
  }
]
</script>
