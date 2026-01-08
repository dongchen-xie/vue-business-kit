<script setup lang="ts">
import { ref, computed, onMounted, watch, useAttrs, getCurrentInstance } from "vue"
import {
  useTableSearch,
  useTablePagination,
  useTableMerge,
  useTableFormat,
  useTableSelection,
  useTableEdit
} from "./composables"
import { useLocale } from "../../locale"
import TableColumnRender from "./renderers/TableColumnRender.vue"
import { TableEmits, TableInternalProps } from "./types"
import { isEmpty } from "lodash-es"
import {
  ElTable,
  ElTableColumn,
  ElInput,
  ElSelect,
  ElOption,
  ElPagination,
  TableProps as EpTableProps
} from "element-plus"
import BkButton from "../button/Button.vue"
import { BkForm } from "../form"
import { BkDialog } from "../dialog"
import { BkDrawer } from "../drawer"
import { exportTableToExcel } from "../../utils"

defineOptions({
  name: "BkTable",
  components: {
    BkDialog,
    BkDrawer
  },
  inheritAttrs: false
})

const props = withDefaults(defineProps<TableInternalProps>(), {
  rawData: () => [],
  columns: () => [],
  mergeColumns: () => [],
  showSearch: false,
  searchValue: "",
  searchColumns: () => [],
  showRefresh: false,
  showExport: false,
  pagination: false,
  numberFormat: false,
  defaultSelection: undefined,
  disabledSelection: undefined,
  editMode: "dialog", // 'dialog' or 'drawer'
  editPosition: "outside", // 'outside' or 'inline'
  showAdd: true,
  showBatch: false,
  showEdit: true,
  showDelete: true,
  enableEdit: false
})

const emits = defineEmits<TableEmits>()
const attrs = useAttrs() as Partial<EpTableProps<any>>
const instance = getCurrentInstance()
const locale = useLocale()

const epTable = ref<InstanceType<typeof ElTable>>()
const formRef = ref<InstanceType<typeof BkForm>>()

const t = computed(() => locale.value.bk.table)

// 使用编辑功能组合式函数
const {
  editForm,
  editVisible,
  editTitle,
  isEditEnabled,
  formItems,
  handleBatch,
  handleAdd,
  handleEdit,
  handleDelete,
  handleSave,
  handleClose
} = useTableEdit(props, attrs, emits, t, formRef)

// 使用组合式函数
const { searchText, selectedColumns, searchableColumns, searchedData, handleSearch } =
  useTableSearch(props, emits)

const { filteredData, paginationConfig, handleSizeChange, handleCurrentChange } =
  useTablePagination(props, searchedData, emits)

const { mergedSpanMethod } = useTableMerge(props, searchedData, attrs)

const { shouldFormatNumber, formatCellValue } = useTableFormat(props)

const { selectedRow, initSelection, selectable, selectedRows } = useTableSelection(
  props,
  epTable,
  filteredData
)

onMounted(() => {
  initSelection()
})

watch(
  () => filteredData.value,
  () => {
    initSelection()
  }
)

const handleRefresh = () => {
  emits("refresh")
}

const handleExport = () => {
  const hasExportListener = instance?.vnode.props?.onExport !== undefined
  if (hasExportListener) {
    emits("export", filteredData.value, props.columns || [])
  } else {
    exportTableToExcel(filteredData.value, props.columns, "Table")
  }
}

defineExpose({ epTable })
</script>
<template>
  <div class="bk-table">
    <div class="bk-table-toolbar">
      <div class="bk-table-toolbar-left">
        <bk-button v-if="showRefresh" @click="handleRefresh" icon="tabler:refresh">
          {{ t.refresh }}
        </bk-button>
        <bk-button v-if="showExport" @click="handleExport" icon="tabler:file-export">
          {{ t.export }}
        </bk-button>
        <template v-if="isEditEnabled">
          <bk-button
            v-if="props.showBatch"
            @click="handleBatch"
            type="primary"
            icon="tabler:cash-edit"
          >
            {{ t.batch }}
          </bk-button>
          <bk-button
            v-if="props.showAdd"
            @click="handleAdd"
            type="primary"
            icon="tabler:circle-plus"
          >
            {{ t.add }}
          </bk-button>
          <template v-if="props.editPosition === 'outside'">
            <bk-button
              v-if="props.showEdit"
              @click="handleEdit(selectedRow)"
              type="primary"
              icon="tabler:edit"
              plain
              :disabled="isEmpty(selectedRows) || selectedRows.length > 1"
            >
              {{ t.edit }}
            </bk-button>
            <bk-button
              v-if="props.showDelete"
              @click="handleDelete(selectedRows)"
              type="danger"
              icon="tabler:trash"
              plain
              :disabled="isEmpty(selectedRows)"
            >
              {{ t.delete }}
            </bk-button>
          </template>
        </template>
        <slot name="toolbar-left" />
      </div>
      <div class="bk-table-toolbar-right">
        <el-input
          v-if="showSearch"
          v-model="searchText"
          :placeholder="`${t.search}...`"
          clearable
          @input="handleSearch"
          class="bk-search-input"
        >
          <template #prepend>
            <el-select
              v-model="selectedColumns"
              :placeholder="t.column"
              multiple
              collapse-tags
              class="bk-search-select"
            >
              <el-option
                v-for="col in searchableColumns"
                :key="col.prop"
                :label="col.label"
                :value="col.prop!"
              />
            </el-select>
          </template>
        </el-input>
      </div>
    </div>
    <el-table
      ref="epTable"
      v-bind="attrs"
      :data="filteredData"
      :span-method="mergedSpanMethod"
      @current-change="(row) => (selectedRow = row)"
    >
      <TableColumnRender
        v-for="column in columns"
        :key="column.prop || column.label"
        :column="column.type === 'selection' ? { ...column, selectable } : column"
        :should-format-number="shouldFormatNumber"
        :format-cell-value="formatCellValue"
      >
        <template v-for="name in Object.keys($slots)" :key="name" #[name]="scope">
          <slot :name="name" v-bind="scope" />
        </template>
      </TableColumnRender>
      <!-- 行内编辑操作列 -->
      <el-table-column
        v-if="isEditEnabled && props.editPosition === 'inline'"
        :label="t.operations"
        width="210"
        fixed="right"
      >
        <template #default="{ row }">
          <bk-button
            v-if="props.showEdit"
            @click="handleEdit(row)"
            type="primary"
            icon="tabler:edit"
            plain
          >
            {{ t.edit }}
          </bk-button>
          <bk-button
            v-if="props.showDelete"
            @click="handleDelete(row)"
            type="danger"
            icon="tabler:trash"
            plain
          >
            {{ t.delete }}
          </bk-button>
        </template>
      </el-table-column>
      <slot />
    </el-table>
    <el-pagination
      v-if="paginationConfig"
      v-bind="paginationConfig"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      class="bk-pagination"
    />

    <component
      :is="props.editMode === 'dialog' ? 'bk-dialog' : 'bk-drawer'"
      v-model="editVisible"
      :title="editTitle"
      width="40%"
      draggable
    >
      <bk-form
        ref="formRef"
        :model="editForm"
        :items="formItems"
        label-width="auto"
        :key="editTitle"
      ></bk-form>
      <template #footer>
        <bk-button @click="handleClose">{{ t.cancel }}</bk-button>
        <bk-button type="primary" @click="handleSave">{{ t.submit }}</bk-button>
      </template>
    </component>
  </div>
</template>
<style lang="scss" scoped>
.bk-table {
  width: 100%;
  display: flex;
  flex-direction: column;

  &-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    &-left {
      display: flex;
      gap: 8px;
    }

    &-right {
      display: flex;
      gap: 8px;
    }
  }

  .bk-search-input {
    width: 400px;
  }
  .bk-search-select {
    width: 140px;
  }
  .bk-pagination {
    margin-top: 10px;
    align-self: flex-end;
  }
}

// 编辑弹框样式
.bk-edit-dialog {
  .el-dialog__body {
    padding: 20px;
  }
}

.bk-edit-drawer {
  .el-drawer__body {
    padding: 20px;
  }
}
</style>
