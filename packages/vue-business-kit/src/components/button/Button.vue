<script setup lang="ts">
import { computed, h, ref } from "vue"
import { ElButton } from "element-plus"
import type { ButtonInternalProps } from "./types"
import Icon from "../icon/Icon.vue"

defineOptions({ name: "BkButton", inheritAttrs: false })

const props = defineProps<ButtonInternalProps>()

const epButton = ref<InstanceType<typeof ElButton>>()

const iconComponent = computed(() => {
  if (!props.icon) return undefined
  if (typeof props.icon === "string") {
    return h(Icon, { icon: props.icon, size: 16 })
  }
  return props.icon
})

const loadingIconComponent = computed(() => {
  if (!props.loadingIcon) return undefined
  if (typeof props.loadingIcon === "string") {
    return h(Icon, { icon: props.loadingIcon, size: 16 })
  }
  return props.loadingIcon
})

defineExpose({ epButton })
</script>

<template>
  <el-button
    class="bk-button"
    ref="epButton"
    v-bind="$attrs"
    :icon="iconComponent"
    :loading-icon="loadingIconComponent"
  >
    <template v-for="name in Object.keys($slots)" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-button>
</template>

<style lang="scss" scoped></style>
