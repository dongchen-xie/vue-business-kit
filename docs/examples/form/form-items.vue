<template>
  <bk-form
    ref="formRef"
    :model="dynamicValidateForm"
    :items="items"
    label-width="auto"
    style="max-width: 600px"
    class="demo-dynamic"
  >
    <bk-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :key="domain.key"
      :label="'Domain' + index"
      :prop="'domains.' + index + '.value'"
      :rules="{
        required: true,
        message: 'domain can not be null',
        trigger: 'blur'
      }"
    >
      <el-input v-model="domain.value" />
      <bk-button class="mt-2" @click.prevent="removeDomain(domain)"> Delete </bk-button>
    </bk-form-item>
    <bk-form-item>
      <bk-button type="primary" @click="submitForm(formRef)">Submit</bk-button>
      <bk-button @click="addDomain">New domain</bk-button>
      <bk-button @click="resetForm(formRef)">Reset</bk-button>
    </bk-form-item>
  </bk-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"

import type { FormInstance, FormItemCtx } from "vue-business-kit"

const items: FormItemCtx[] = [
  {
    label: "Email",
    type: "input",
    prop: "email",
    rules: [
      {
        required: true,
        message: "Please input email address",
        trigger: "blur"
      },
      {
        type: "email",
        message: "Please input correct email address",
        trigger: ["blur", "change"]
      }
    ]
  }
]

const formRef = ref<FormInstance>()
const dynamicValidateForm = reactive<{
  domains: DomainItem[]
  email: string
}>({
  domains: [
    {
      key: 1,
      value: ""
    }
  ],
  email: ""
})

interface DomainItem {
  key: number
  value: string
}

const removeDomain = (item: DomainItem) => {
  const index = dynamicValidateForm.domains.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.domains.splice(index, 1)
  }
}

const addDomain = () => {
  dynamicValidateForm.domains.push({
    key: Date.now(),
    value: ""
  })
}

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.formRef?.validate((valid) => {
    if (valid) {
      console.log("submit!")
    } else {
      console.log("error submit!")
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.formRef?.resetFields()
}
</script>
