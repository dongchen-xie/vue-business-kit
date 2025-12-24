import { ref, computed, ComputedRef } from "vue"
import type { TableInternalProps } from "../types"
import { chain, isEmpty, map, pick, trim, zipObject } from "lodash-es"

export function useTableEdit(
  props: TableInternalProps,
  attrs: Record<string, any>,
  emits: any,
  t: ComputedRef<any>
) {
  // 编辑相关状态
  const isEditing = ref(false)
  const editRow = ref<any>(null)
  const editForm = ref<any>({})
  const editVisible = ref(false)
  const editType = ref<"add" | "edit" | "batch">("add")

  const editTitle = computed(() => {
    return t.value[editType.value]
  })

  // 检查是否需要row-key
  const hasRowKey = computed(() => {
    return (attrs.rowKey || attrs["row-key"]) !== undefined
  })

  // 验证编辑功能是否启用
  const isEditEnabled = computed(() => {
    return props.enableEdit && (props.showAdd || props.showEdit || props.showDelete)
  })

  const editColumns = computed(() => {
    return props.columns?.filter(
      (column) => column.prop && column.prop != (attrs.rowKey || attrs["row-key"])
    )
  })

  const formItems = computed(() => {
    return editType.value == "batch"
      ? [
          {
            type: "input",
            prop: "value",
            componentProps: {
              type: "textarea",
              rows: 10,
              placeholder: editColumns.value?.map((v) => v.label).join("   ")
            }
          },
          {
            type: "select",
            prop: "action",
            children: [
              { label: t.value.upload, value: "add" },
              { label: t.value.deleteItems, value: "batch_delete" }
            ]
          }
        ]
      : editColumns.value?.map((v) => ({
          ...pick(v, ["prop", "label"]),
          ...(v.edit
            ? v.edit
            : {
                type: "input"
              })
        }))
  })

  const convertTextToObjectArray = (text: string) => {
    const keys = map(editColumns.value, "prop") as string[]
    if (isEmpty(keys)) return []
    const rows = chain(text)
      .split("\n")
      .map(trim)
      .filter((row) => !isEmpty(row))
      .map((row) =>
        chain(row)
          .split(/\s+/)
          .filter((col) => !isEmpty(col))
          .value()
      )
      .filter((row) => row.length === keys.length)
      .value()
    return map(rows, (row) => zipObject(keys, row))
  }

  const handleBatch = () => {
    editType.value = "batch"
    editForm.value = {
      action: "add"
    }
    editVisible.value = true
  }

  // 处理编辑相关逻辑
  const handleAdd = () => {
    editType.value = "add"
    editRow.value = null
    editForm.value = {}
    editVisible.value = true
  }

  const handleEdit = (row: any) => {
    if (!hasRowKey.value) {
      console.warn(t.value.rowKeyWarning)
      return
    }
    editType.value = "edit"
    editRow.value = row
    editForm.value = { ...row }
    editVisible.value = true
  }

  const handleDelete = (rows: any) => {
    if (!hasRowKey.value) {
      console.warn(t.value.rowKeyWarning)
      return
    }
    emits("delete", rows)
  }

  const handleSave = () => {
    if (editType.value === "add") {
      emits("add", editForm.value)
    }
    if (editType.value === "edit") {
      emits("edit", editRow.value, editForm.value)
    }
    if (editType.value === "batch") {
      emits("batch", { ...editForm.value, value: convertTextToObjectArray(editForm.value.value) })
    }
    editVisible.value = false
  }

  const handleClose = () => {
    editVisible.value = false
  }

  return {
    isEditing,
    editRow,
    editForm,
    editVisible,
    editType,
    editTitle,
    hasRowKey,
    isEditEnabled,
    formItems,
    handleBatch,
    handleAdd,
    handleEdit,
    handleDelete,
    handleSave,
    handleClose
  }
}
