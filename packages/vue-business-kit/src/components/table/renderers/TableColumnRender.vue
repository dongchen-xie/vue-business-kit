<script setup lang="ts">
import { computed, useSlots } from "vue"
import type { Slots } from "vue"
import { ElTableColumn } from "element-plus"
import type { TableColumnItem } from "../types"
import { omit } from "lodash-es"

const props = defineProps<{
  column: TableColumnItem
  shouldFormatNumber: (column: TableColumnItem, value: any) => boolean
  formatCellValue: (value: any, column?: TableColumnItem) => string
}>()

const slots: Readonly<Slots> = useSlots()

const isSpecialType = computed(() =>
  ["selection", "index", "expand"].includes(props.column.type || "")
)

const getSlotName = (type: "default" | "header" | "filterIcon" | "expand") => {
  const tmpSlots = props.column.slots
  const suffix = type === "default" ? "" : `-${type}`
  if (tmpSlots === true) return `${props.column.prop}${suffix}`
  if (typeof tmpSlots === "object") {
    const slot = tmpSlots[type]
    if (slot === true) return `${props.column.prop}${suffix}`
    return slot || undefined
  }
  return undefined
}
const defaultSlotName = computed(() => getSlotName("default"))
const headerSlotName = computed(() => getSlotName("header"))
const filterIconSlotName = computed(() => getSlotName("filterIcon"))
const expandSlotName = computed(() => getSlotName("expand"))
</script>
<template>
  <el-table-column v-bind="omit(column, 'children')">
    <template v-if="headerSlotName" #header="scope">
      <slot :name="headerSlotName" v-bind="scope" />
    </template>
    <template v-if="filterIconSlotName" #filterIcon="scope">
      <slot :name="filterIconSlotName" v-bind="scope" />
    </template>
    <template v-if="expandSlotName" #expand="scope">
      <slot :name="expandSlotName" v-bind="scope" />
    </template>
    <template v-if="!isSpecialType" #default="scope">
      <template
        v-if="column.children?.length"
        v-for="child in column.children"
        :key="child.prop || child.label"
      >
        <TableColumnRender
          v-if="child.showColumn != false"
          :column="child"
          :should-format-number="shouldFormatNumber"
          :format-cell-value="formatCellValue"
        >
          <!-- @vue-ignore -->
          <template v-for="name in Object.keys(slots)" :key="name" #[name]="slotProps">
            <slot :name="name" v-bind="slotProps" />
          </template>
        </TableColumnRender>
      </template>
      <slot v-else-if="defaultSlotName" :name="defaultSlotName" v-bind="scope" />
      <template v-else>
        <span v-if="shouldFormatNumber(column, scope.row[column.prop!])">
          {{ formatCellValue(scope.row[column.prop!], column) }}
        </span>
        <span v-else>{{ scope.row[column.prop!] }}</span>
      </template>
    </template>
  </el-table-column>
</template>
