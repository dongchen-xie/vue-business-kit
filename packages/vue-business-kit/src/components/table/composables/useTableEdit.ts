import { ref, computed, ComputedRef } from "vue"
import type { TableInternalProps } from "../types"
import { chain, isEmpty, isUndefined, map, pick, toLower, trim, zipObject } from "lodash-es"
import { FormItemCtx } from "@/components/form"
import { ElMessageBox } from "element-plus"

export function useTableEdit(
  props: TableInternalProps,
  attrs: Record<string, any>,
  emits: any,
  t: ComputedRef<any>,
  formRef: any
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
    return (
      editType.value == "batch"
        ? [
            {
              type: "input",
              prop: "value",
              componentProps: {
                type: "textarea",
                rows: 10,
                placeholder: (editForm.value.action == "add" ? editColumns.value : props.columns)
                  ?.map((v) => (v.edit?.required ? `${v.label}(*)` : v.label))
                  .join("   ")
              }
            },
            {
              type: "select",
              prop: "action",
              children: [
                { label: t.value.upload, value: "add" },
                { label: t.value.deleteItems, value: "delete" }
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
    ) as FormItemCtx[]
  })

  const convertTextToObjectArray = (text: string) => {
    const keys = map(
      editForm.value.action == "add" ? editColumns.value : props.columns,
      "prop"
    ) as string[]
    if (isEmpty(keys)) return []
    const rows = chain(text)
      .split("\n")
      .map(trim)
      .filter((row) => !isEmpty(row))
      .map((row) =>
        chain(row)
          .split("\t")
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
    }
    editType.value = "edit"
    editRow.value = row
    editForm.value = { ...row }
    editVisible.value = true
  }

  const handleDelete = (rows: any) => {
    ElMessageBox.confirm(t.value.deleteConfirm, "Warning", {
      confirmButtonText: t.value.confirm,
      cancelButtonText: t.value.cancel,
      type: "warning",
      appendTo: "html"
    })
      .then(() => {
        if (!hasRowKey.value) {
          console.warn(t.value.rowKeyWarning)
        }
        emits("delete", {
          action: "delete",
          data: rows
        })
      })
      .catch(() => {})
  }

  // 验证必填字段
  const validateRequiredFields = (): boolean | string => {
    if (editType.value === "add" || editType.value === "edit") {
      return formRef.value.epForm
        .validate()
        .then(() => true)
        .catch(() => t.value.fillRequired)
    }
    if (editType.value === "batch") {
      const dataArray = convertTextToObjectArray(editForm.value.value)
      if (dataArray.length === 0) {
        return t.value.invalidData
      }
      // 获取当前操作对应的必填字段
      const targetColumns = editForm.value.action === "add" ? editColumns.value : props.columns
      const requiredFields =
        targetColumns?.filter((column) => column.edit?.required).map((column) => column.prop) || []
      // 检查每一行数据
      for (let i = 0; i < dataArray.length; i++) {
        const row = dataArray[i]
        const missingFields = requiredFields.filter((field) => {
          const value = row[field!]
          return isEmpty(value) || isUndefined(value)
        })

        if (missingFields.length > 0) {
          const fieldLabels =
            targetColumns
              ?.filter((column) => missingFields.includes(column.prop))
              .map((column) => column.label)
              .join("、") || ""
          return `# ${i + 1} ${t.value.requiredFields} ${fieldLabels}`
        }
      }
    }
    return true
  }

  const handleSave = async () => {
    // 验证必填项
    const validationError = await validateRequiredFields()
    if (validationError !== true) {
      ElMessageBox.alert(validationError as string, "Warning", {
        confirmButtonText: t.value.confirm,
        type: "warning",
        appendTo: "html"
      })
      return
    }

    if (editType.value === "add") {
      emits("add", {
        action: "add",
        data: editForm.value
      })
    }
    if (editType.value === "edit") {
      emits(
        "edit",
        {
          action: "edit",
          data: editForm.value
        },
        editRow.value
      )
    }
    if (editType.value === "batch") {
      emits("batch", {
        action: `batch_${toLower(editForm.value.action)}`,
        data: convertTextToObjectArray(editForm.value.value)
      })
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
    handleClose,
    validateRequiredFields
  }
}
