<template>
  <bk-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    :items="items"
    :rules="rules"
    label-width="auto"
  >
    <bk-form-item>
      <bk-button type="primary" @click="submitForm(ruleFormRef)"> Create </bk-button>
      <bk-button @click="resetForm(ruleFormRef)">Reset</bk-button>
    </bk-form-item>
  </bk-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"

import type { FormInstance, FormItemCtx, FormRules } from "vue-business-kit"

interface RuleForm {
  name: string
  region: string
  count: string
  date1: string
  date2: string
  delivery: boolean
  location: string
  type: string[]
  resource: string
  desc: string
}

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
      placeholder: "Activity zone"
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

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: "Hello",
  region: "",
  count: "",
  date1: "",
  date2: "",
  delivery: false,
  location: "",
  type: [],
  resource: "",
  desc: ""
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" }
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change"
    }
  ],
  count: [
    {
      required: true,
      message: "Please select Activity count",
      trigger: "change"
    }
  ],
  date1: [
    {
      type: "date",
      required: true,
      message: "Please pick a date",
      trigger: "change"
    }
  ],
  date2: [
    {
      type: "date",
      required: true,
      message: "Please pick a time",
      trigger: "change"
    }
  ],
  location: [
    {
      required: true,
      message: "Please select a location",
      trigger: "change"
    }
  ],
  type: [
    {
      type: "array",
      required: true,
      message: "Please select at least one activity type",
      trigger: "change"
    }
  ],
  resource: [
    {
      required: true,
      message: "Please select activity resource",
      trigger: "change"
    }
  ],
  desc: [{ required: true, message: "Please input activity form", trigger: "blur" }]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.epForm?.validate((valid, fields) => {
    if (valid) {
      console.log("submit!")
    } else {
      console.log("error submit!", fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.epForm?.resetFields()
}
</script>
