<script setup lang="ts">
import { ref, computed, useAttrs } from "vue"
import { ElMenu } from "element-plus"
import { useMenu } from "./composables"
import type { MenuInternalProps } from "./types"

defineOptions({
  name: "BkMenu",
  inheritAttrs: false
})

const props = defineProps<MenuInternalProps>()
const attrs = useAttrs()

const epMenu = ref<InstanceType<typeof ElMenu>>()

const { menuItems, defaultActive } = useMenu(props)

const mergedAttrs = computed(() => {
  const mergedAttrs = { ...attrs }
  if (menuItems && defaultActive.value) {
    mergedAttrs["default-active"] = defaultActive.value
  }
  return mergedAttrs
})

defineExpose({ epMenu })
</script>

<template>
  <el-menu class="bk-menu" ref="epMenu" v-bind="mergedAttrs">
    <template v-if="menuItems">
      <component :is="item" v-for="(item, index) in menuItems" :key="item.key || index" />
    </template>
    <slot />
  </el-menu>
</template>
<style lang="scss">
.bk-menu {
  --el-sub-menu-bg-color: var(--el-menu-bg-color);
  --el-menu-active-bg-color: none;
  .el-sub-menu .el-menu {
    background-color: var(--el-sub-menu-bg-color);
  }
  .is-active:not(.el-sub-menu) {
    background-color: var(--el-menu-active-bg-color);
  }
}
</style>
