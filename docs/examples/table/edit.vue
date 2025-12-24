<template>
  <bk-form label-width="auto" :model="configForm" :items="configFormItems" style="max-width: 600px">
  </bk-form>
  <bk-table
    :raw-data="tableData"
    :columns="columns"
    enable-edit
    show-batch
    :editMode="configForm.editMode"
    :editPosition="configForm.editPosition"
    rowKey="id"
    highlight-current-row
    @add="handleAdd"
    @edit="handleEdit"
    @delete="handleDelete"
    @batch="handleBatch"
  >
  </bk-table>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { FormItemCtx, TableColumnCtx } from "vue-business-kit"

interface User {
  id: number
  date: string
  name: string
  address: string
}

const configForm = ref<{
  editMode?: "dialog" | "drawer"
  editPosition?: "outside" | "inline"
}>({
  editMode: "dialog",
  editPosition: "outside"
})
const tableData = ref<User[]>([
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
  }
])

const columns: TableColumnCtx[] = [
  { type: "selection" },
  {
    prop: "id",
    label: "ID",
    width: 100,
    edit: {
      type: "input",
      componentProps: {
        disabled: true
      }
    }
  },
  {
    prop: "date",
    label: "Date",
    width: 180,
    edit: {
      type: "date-picker",
      componentProps: {
        valueFormat: "YYYY-MM-DD"
      }
    }
  },
  {
    prop: "name",
    label: "Name",
    width: 180
  },
  {
    prop: "address",
    label: "Address"
  }
]

const configFormItems: FormItemCtx[] = [
  {
    label: "Edit Mode",
    type: "radio-group",
    prop: "editMode",
    labelPosition: "right",
    componentProps: {
      type: "button"
    },
    children: [
      { label: "Dialog", value: "dialog" },
      { label: "Drawer", value: "drawer" }
    ]
  },
  {
    label: "Edit Position",
    type: "radio-group",
    prop: "editPosition",
    componentProps: {
      type: "button"
    },
    children: [
      { label: "Outside", value: "outside" },
      { label: "Inline", value: "inline" }
    ]
  }
]

const handleAdd = (form: User) => {
  tableData.value.push({
    ...form,
    id: tableData.value.length + 1
  })
}

const handleEdit = (row: User, form: User) => {
  const targetIndex = tableData.value.findIndex((user) => user.id === row.id)
  tableData.value[targetIndex] = form
}

const handleDelete = (rows: User[]) => {
  const delIdList = rows.map((row) => row.id)
  tableData.value = tableData.value.filter((user) => !delIdList.includes(user.id))
}

const handleBatch = (form: any) => {
  if (form.action == "add") {
    form.value.map((user) => handleAdd(user))
  }
}
</script>
