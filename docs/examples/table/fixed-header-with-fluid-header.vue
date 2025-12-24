<template>
  <bk-table :raw-data="tableData" :columns="columns" style="width: 100%" max-height="250">
    <template #operations="scope">
      <bk-button link type="primary" size="small" @click.prevent="deleteRow(scope.$index)">
        Remove
      </bk-button>
    </template>
  </bk-table>
  <bk-button class="mt-4" style="width: 100%" @click="onAddItem"> Add Item </bk-button>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import type { TableColumnCtx } from "vue-business-kit"

const now = new Date()

const tableData = ref([
  {
    date: "2016-05-01",
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
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  }
])

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

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}

const onAddItem = () => {
  now.setDate(now.getDate() + 1)
  tableData.value.push({
    date: "2025-12-10",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  })
}
</script>
