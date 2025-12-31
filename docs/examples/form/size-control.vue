<template>
  <div>
    <el-radio-group v-model="size" aria-label="size control">
      <el-radio-button value="large">large</el-radio-button>
      <el-radio-button value="default">default</el-radio-button>
      <el-radio-button value="small">small</el-radio-button>
    </el-radio-group>
    <el-radio-group v-model="labelPosition" aria-label="position control">
      <el-radio-button value="left">Left</el-radio-button>
      <el-radio-button value="right">Right</el-radio-button>
      <el-radio-button value="top">Top</el-radio-button>
    </el-radio-group>
  </div>
  <br />
  <bk-form
    style="max-width: 600px"
    :model="sizeForm"
    :items="items"
    label-width="auto"
    :label-position="labelPosition"
    :size="size"
  >
    <bk-form-item>
      <bk-button type="primary" @click="onSubmit">Create</bk-button>
      <bk-button>Cancel</bk-button>
    </bk-form-item>
  </bk-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"

import type { ComponentSize, FormItemCtx, FormProps } from "vue-business-kit"

const items: FormItemCtx[] = [
  {
    label: "Activity name",
    type: "input",
    prop: "name"
  },
  {
    label: "Activity zone",
    type: "select",
    prop: "region",
    componentProps: {
      placeholder: "please select your zone"
    },
    children: [
      { label: "Zone one", value: "shanghai" },
      { label: "Zone two", value: "beijing" }
    ]
  },
  {
    label: "Activity time",
    type: "date-picker",
    prop: "date1",
    componentProps: {
      type: "datetimerange",
      placeholder: "Pick a date",
      style: { width: "100%" }
    }
  },
  {
    label: "Instant delivery",
    type: "switch",
    prop: "delivery"
  },
  {
    label: "Activity type",
    type: "checkbox-group",
    prop: "type",
    children: [
      { label: "Online activities", value: "Online activities" },
      { label: "Promotion activities", value: "Promotion activities" },
      { label: "Offline activities", value: "Offline activities" },
      { label: "Simple brand exposure", value: "Simple brand exposure" }
    ]
  },
  {
    label: "Resources",
    type: "radio-group",
    prop: "resource",
    children: [
      { label: "Sponsor", value: "Sponsor" },
      { label: "Venue", value: "Venue" }
    ]
  }
]

const size = ref<ComponentSize>("default")
const labelPosition = ref<FormProps["labelPosition"]>("right")

const sizeForm = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: ""
})

function onSubmit() {
  console.log("submit!")
}
</script>

<style>
.el-radio-group {
  margin-right: 12px;
}
</style>
