<script lang="ts" setup>
import { ElCollapseItem } from "element-plus"
import { ref } from "vue"
import type { CollapseItemInternalProps } from "./types"
import { exportDomToExcel } from "../../utils"
defineOptions({
  name: "CollapseItem"
})

const props = defineProps<CollapseItemInternalProps>()

const epCollapseItem = ref<InstanceType<typeof ElCollapseItem>>()

const handleExport = () => {
  if (props.onExport) props.onExport()
  else {
    const tableDom = epCollapseItem.value?.$el.querySelector(".el-table__inner-wrapper").innerHTML
    exportDomToExcel(tableDom, `${props.title}-${props.subtitle}-${new Date().getTime()}`)
  }
}

defineExpose({ epCollapseItem })
</script>

<template>
  <el-collapse-item class="bk-collapse" ref="epCollapseItem">
    <template #title>
      <div>
        <div class="bk-collapse-title">{{ title }}</div>
        <div class="bk-collapse-subtitle">{{ subtitle }}</div>
      </div>
      <slot name="title"></slot>
    </template>
    <template #icon="{ isActive }">
      <div class="bk-collapse-toolbar-container">
        <slot name="toolbar"></slot>
        <bk-icon
          title="Reset"
          icon="tabler:zoom-reset"
          color="#0063B8"
          size="26"
          v-if="showReset"
          @click.stop="$emit('reset')"
        />
        <bk-icon
          title="Export to Excel"
          icon="tabler:file-download"
          color="#0063B8"
          size="24"
          v-if="showExport"
          @click.stop="handleExport"
        />
        <bk-icon
          title="Refresh"
          icon="tabler:refresh"
          color="#0063B8"
          size="24"
          v-if="showRefresh"
          @click.stop="$emit('refresh')"
        />
        <bk-icon
          :title="isActive ? 'Hide' : 'Show'"
          :icon="isActive ? 'tabler:chevron-up' : 'tabler:chevron-down'"
          color="#0063B8"
          size="30"
        />
      </div>
    </template>
    <slot />
  </el-collapse-item>
</template>
<style lang="scss" scoped>
.bk-collapse {
  &-title {
    line-height: 28px;
  }
  &-subtitle {
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;
    color: #636363;
  }
  &-toolbar-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
}
</style>
