import { defineComponent, h } from "vue"
import {
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElCheckbox,
  ElCheckboxGroup,
  ElRadio,
  ElRadioGroup,
  ElSwitch,
  ElDatePicker,
  ElTimePicker,
  ElSlider,
  ElRate,
  ElCascader,
  ElInputNumber,
  ElUpload,
  ElColorPicker,
  ElTransfer,
  ElAutocomplete,
  ElDivider,
  ElButton,
  ElInputTag,
  ElRadioButton
} from "element-plus"
import { omit } from "lodash-es"
export default defineComponent({
  name: "FormItemRender",
  props: {
    item: { type: Object, required: true },
    model: { type: Object, required: true }
  },
  setup(props, { slots }) {
    const typeMap: Record<string, any> = {
      autocomplete: ElAutocomplete,
      cascader: ElCascader,
      checkbox: ElCheckbox,
      "checkbox-group": ElCheckboxGroup,
      "color-picker": ElColorPicker,
      "date-picker": ElDatePicker,
      input: ElInput,
      "input-number": ElInputNumber,
      "input-tag": ElInputTag,
      radio: ElRadio,
      "radio-group": ElRadioGroup,
      rate: ElRate,
      select: ElSelect,
      slider: ElSlider,
      switch: ElSwitch,
      "time-picker": ElTimePicker,
      transfer: ElTransfer,
      upload: ElUpload,
      divider: ElDivider,
      button: ElButton
    }
    function render(item: any) {
      const omitItem = omit(item, ["type", "componentProps", "children", "slot"])
      if (item.slot && slots[item.slot]) {
        return h(
          ElFormItem,
          { ...omitItem, key: item.prop },
          { default: () => slots[item.slot]?.() }
        )
      }
      const Comp = typeMap[item.type] || item.type
      if (item.children && ["select", "checkbox-group", "radio-group"].includes(item.type)) {
        return h(
          ElFormItem,
          { ...omitItem, key: item.prop },
          {
            default: () =>
              h(
                Comp,
                {
                  style: {
                    width: "100%"
                  },
                  modelValue: props.model[item.prop],
                  "onUpdate:modelValue": (val: any) => (props.model[item.prop] = val),
                  ...(item.componentProps || {})
                },
                () =>
                  item.children.map((opt: any) => {
                    if (item.type === "select") {
                      return h(ElOption, {
                        key: opt.value,
                        label: opt.label,
                        value: opt.value,
                        ...(opt.componentProps || {})
                      })
                    } else if (item.type === "checkbox-group") {
                      return h(
                        ElCheckbox,
                        { key: opt.value, label: opt.value, ...(opt.componentProps || {}) },
                        () => opt.label
                      )
                    } else if (item.type === "radio-group") {
                      return h(
                        item.componentProps?.type === "button" ? ElRadioButton : ElRadio,
                        { key: opt.value, label: opt.value, ...(opt.componentProps || {}) },
                        () => opt.label
                      )
                    }
                    return null
                  })
              )
          }
        )
      }
      if (item.children && item.type === "group") {
        return h(
          ElFormItem,
          { ...omitItem, key: item.prop },
          {
            default: () => item.children.map((child: any) => render(child))
          }
        )
      }
      return h(
        ElFormItem,
        { ...omitItem, key: item.prop },
        {
          default: () =>
            h(Comp, {
              style: {
                width: "100%"
              },
              modelValue: props.model[item.prop],
              "onUpdate:modelValue": (val: any) => (props.model[item.prop] = val),
              ...(item.componentProps || {})
            })
        }
      )
    }
    return () => render(props.item)
  }
})
