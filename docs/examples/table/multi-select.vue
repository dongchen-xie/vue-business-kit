<template>
  <bk-table
    ref="multipleTableRef"
    :raw-data="tableData"
    :columns="columns"
    row-key="id"
    style="width: 100%"
    :defaultSelection="defaultSelection"
    :disabledSelection="disabledSelection"
    @selection-change="handleSelectionChange"
  >
  </bk-table>
  <div style="margin-top: 20px">
    <bk-button @click="toggleSelection([tableData[1], tableData[2]])">
      Toggle selection status of second and third rows
    </bk-button>
    <bk-button @click="toggleSelection([tableData[1], tableData[2]], false)">
      Toggle selection status based on selectable
    </bk-button>
    <bk-button @click="toggleSelection()">Clear selection</bk-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import type { TableColumnCtx, TableInstance } from "vue-business-kit"

interface User {
  id: number
  date: string
  name: string
  address: string
}

const multipleTableRef = ref<TableInstance>()
const multipleSelection = ref<User[]>([])
const disabledSelection = ref<number[]>([1, 2])
const defaultSelection = ref<number[]>([7])

const toggleSelection = (rows?: User[], ignoreSelectable?: boolean) => {
  if (rows) {
    rows.forEach((row) => {
      multipleTableRef.value!.tableRef!.toggleRowSelection(row, undefined, ignoreSelectable)
    })
  } else {
    multipleTableRef.value!.tableRef!.clearSelection()
  }
}
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

const tableData: User[] = [
  {
    id: 1,
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    id: 2,
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    id: 3,
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    id: 4,
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    id: 5,
    date: "2016-05-08",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    id: 6,
    date: "2016-05-06",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    id: 7,
    date: "2016-05-07",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  }
]

const columns: TableColumnCtx[] = [
  {
    type: "selection",
    width: 55
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
