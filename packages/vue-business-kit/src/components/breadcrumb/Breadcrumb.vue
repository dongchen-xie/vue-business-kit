<script setup lang="ts">
import { ref } from "vue"
import { ElBreadcrumb, ElBreadcrumbItem } from "element-plus"
import type { BreadcrumbInternalProps } from "./types"
import { useBreadcrumb } from "./composables"
import { BkIcon } from "../icon"

defineOptions({
  name: "BkBreadcrumb",
  inheritAttrs: false
})

const props = defineProps<BreadcrumbInternalProps>()

const breadcrumbRef = ref<InstanceType<typeof ElBreadcrumb>>()

const { breadcrumbItems } = useBreadcrumb(props)

defineExpose({ breadcrumbRef })
</script>

<template>
  <el-breadcrumb ref="breadcrumbRef" class="bk-breadcrumb" v-bind="$attrs">
    <template v-if="breadcrumbItems && breadcrumbItems.length">
      <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item.id" :to="item.link">
        <template v-if="item.icon">
          <bk-icon :icon="item.icon" :size="24"></bk-icon>
        </template>
        {{ item.menu_name }}
      </el-breadcrumb-item>
    </template>
    <slot />
  </el-breadcrumb>
</template>
<style lang="scss" scoped>
.bk-breadcrumb {
  .el-icon {
    margin-right: 6px;
  }
}
</style>
