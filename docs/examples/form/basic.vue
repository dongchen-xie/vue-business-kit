<template>
  <bk-form :model="form" label-width="auto" style="max-width: 600px">
    <bk-form-item label="Activity name">
      <el-input v-model="form.name" />
    </bk-form-item>
    <bk-form-item label="Activity zone">
      <el-select v-model="form.region" placeholder="please select your zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </bk-form-item>
    <bk-form-item label="Activity time">
      <el-col :span="11">
        <el-date-picker
          v-model="form.date1"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
      <el-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
      </el-col>
    </bk-form-item>
    <bk-form-item label="Instant delivery">
      <el-switch v-model="form.delivery" />
    </bk-form-item>
    <bk-form-item label="Activity type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox value="Online activities" name="type"> Online activities </el-checkbox>
        <el-checkbox value="Promotion activities" name="type"> Promotion activities </el-checkbox>
        <el-checkbox value="Offline activities" name="type"> Offline activities </el-checkbox>
        <el-checkbox value="Simple brand exposure" name="type"> Simple brand exposure </el-checkbox>
      </el-checkbox-group>
    </bk-form-item>
    <bk-form-item label="Resources">
      <el-radio-group v-model="form.resource">
        <el-radio value="Sponsor">Sponsor</el-radio>
        <el-radio value="Venue">Venue</el-radio>
      </el-radio-group>
    </bk-form-item>
    <bk-form-item label="Activity form">
      <el-input v-model="form.desc" type="textarea" />
    </bk-form-item>
    <bk-form-item>
      <bk-button type="primary" @click="onSubmit">Create</bk-button>
      <bk-button>Cancel</bk-button>
    </bk-form-item>
  </bk-form>
  <el-divider></el-divider>
  <bk-form :model="form" :items="items" label-width="auto" style="max-width: 600px">
    <bk-form-item>
      <bk-button type="primary" @click="onSubmit">Create</bk-button>
      <bk-button>Cancel</bk-button>
    </bk-form-item>
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
