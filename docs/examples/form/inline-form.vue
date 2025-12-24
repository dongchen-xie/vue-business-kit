<template>
  <bk-form :inline="true" :model="formInline" :items="items" class="demo-form-inline">
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Query</el-button>
    </el-form-item>
  </bk-form>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
import type { FormItemCtx } from "vue-business-kit"

const formInline = reactive({
  user: "",
  region: "",
  date: ""
})

const items: FormItemCtx[] = [
  {
    label: "Approved by",
    type: "input",
    prop: "user",
    componentProps: {
      placeholder: "Approved by",
      clearable: true
    }
  },
  {
    label: "Activity zone",
    type: "select",
    prop: "region",
    componentProps: {
      placeholder: "Activity zone",
      clearable: true
    },
    children: [
      {
        label: "Zone one",
        value: "shanghai"
      },
      {
        label: "Zone two",
        value: "beijing"
      }
    ]
  },
  {
    label: "Activity time",
    type: "date-picker",
    prop: "date",
    componentProps: {
      placeholder: "Pick a date",
      clearable: true
    }
  }
]

const onSubmit = () => {
  console.log("submit!")
}
</script>

<style>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>
