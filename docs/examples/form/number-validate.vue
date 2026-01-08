<template>
  <bk-form
    ref="formRef"
    style="max-width: 600px"
    :model="numberValidateForm"
    label-width="auto"
    class="demo-ruleForm"
  >
    <bk-form-item
      label="age"
      prop="age"
      :rules="[
        { required: true, message: 'age is required' },
        { type: 'number', message: 'age must be a number' }
      ]"
    >
      <el-input v-model.number="numberValidateForm.age" type="text" autocomplete="off" />
    </bk-form-item>
    <bk-form-item>
      <bk-button type="primary" @click="submitForm(formRef)">Submit</bk-button>
      <bk-button @click="resetForm(formRef)">Reset</bk-button>
    </bk-form-item>
  </bk-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"

import type { FormInstance } from "vue-business-kit"

const formRef = ref<FormInstance>()

const numberValidateForm = reactive({
  age: ""
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.epForm?.validate((valid) => {
    if (valid) {
      console.log("submit!")
    } else {
      console.log("error submit!")
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.epForm?.resetFields()
}
</script>
