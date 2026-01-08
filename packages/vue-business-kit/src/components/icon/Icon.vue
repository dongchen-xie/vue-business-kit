<script setup lang="ts">
import { computed, ref } from "vue"
import { ElIcon } from "element-plus"
import type { IconInternalProps } from "./types"

defineOptions({
  name: "BkIcon",
  inheritAttrs: false
})

const props = defineProps<IconInternalProps>()

const epIcon = ref<InstanceType<typeof ElIcon>>()

const iconClass = computed(() => {
  return props.icon ? (props.icon.startsWith("i-") ? props.icon : `i-${props.icon}`) : undefined
})

defineExpose({ epIcon })
</script>

<template>
  <el-icon class="bk-icon" ref="epIcon" v-bind="$attrs">
    <div v-if="iconClass" :class="iconClass" />
    <slot v-else />
  </el-icon>
</template>
