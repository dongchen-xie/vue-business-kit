<template>
  <bk-form
    :label-position="formLabelAlign.labelPosition"
    label-width="auto"
    :model="formLabelAlign"
    :items="items"
    style="max-width: 600px"
  >
  </bk-form>
</template>

<script lang="ts" setup>
import { computed, reactive } from "vue"

import type { FormItemCtx } from "vue-business-kit"

const formLabelAlign = reactive({
  labelPosition: "right",
  itemLabelPosition: "",
  name: "",
  region: "",
  type: ""
})

const items = computed(() => {
  return [
    {
      label: "Form Align",
      type: "radio-group",
      prop: "labelPosition",
      labelPosition: "right",
      componentProps: {
        ariaLabel: "label position",
        type: "button"
      },
      children: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" },
        { label: "Top", value: "top" }
      ]
    },
    {
      label: "Form Item Align",
      type: "radio-group",
      prop: "itemLabelPosition",
      componentProps: {
        ariaLabel: "item label position",
        type: "button"
      },
      children: [
        { label: "Empty", value: "" },
        { label: "Left", value: "left" },
        { label: "Right", value: "right" },
        { label: "Top", value: "top" }
      ]
    },
    {
      label: "Name",
      type: "input",
      prop: "name",
      labelPosition: formLabelAlign.itemLabelPosition
    },
    {
      label: "Activity zone",
      type: "input",
      prop: "region",
      labelPosition: formLabelAlign.itemLabelPosition
    },
    {
      label: "Activity form",
      type: "input",
      prop: "type"
    }
  ] as FormItemCtx[]
})
</script>
