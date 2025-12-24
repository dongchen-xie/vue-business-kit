<template>
  <bk-form :model="form" :items="items" label-width="auto" style="max-width: 600px">
    <el-form-item>
      <bk-button type="primary" @click="onSubmit">Create</bk-button>
      <bk-button>Cancel</bk-button>
    </el-form-item>
  </bk-form>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
import type { FormItemCtx } from "vue-business-kit"

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
  },
  {
    label: "Activity form",
    type: "input",
    prop: "desc",
    componentProps: {
      type: "textarea"
    }
  }
]

// do not use same name with ref
const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: ""
})

const onSubmit = () => {
  console.log("submit!")
}
</script>
