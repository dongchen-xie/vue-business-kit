<script setup lang="ts">
import { ref } from "vue"
import BkFormItemRender from "./renderers/FormItemRender"
import type { FormInternalProps, FormEmits } from "./types"
import { ElForm } from "element-plus"

defineOptions({ name: "BkForm", inheritAttrs: false })

const props = withDefaults(defineProps<FormInternalProps>(), {
  items: () => []
})
const emit = defineEmits<FormEmits>()

// el-form ref
const formRef = ref<InstanceType<typeof ElForm>>()

defineExpose({ formRef })
</script>
<template>
  <el-form ref="formRef" v-bind="$attrs">
    <template v-for="(item, _index) in props.items" :key="_index">
      <BkFormItemRender :item="item" :model="($attrs.model as any)">
        <template v-for="(_, name) in $slots" #[name]="scope">
          <slot :name="name" v-bind="scope" />
        </template>
      </BkFormItemRender>
    </template>
    <slot />
  </el-form>
</template>
