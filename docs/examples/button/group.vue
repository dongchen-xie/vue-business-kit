<template>
  <bk-button-group class="mb-4">
    <bk-button type="primary" icon="tabler:chevron-left">Previous Page</bk-button>
    <bk-button type="primary">
      Next Page<bk-icon class="el-icon--right" icon="tabler:chevron-right" />
    </bk-button>
  </bk-button-group>
  <br />
  <el-radio-group v-model="direction" class="mb-2">
    <el-radio value="horizontal">Horizontal</el-radio>
    <el-radio value="vertical">Vertical</el-radio>
  </el-radio-group>
  <br />

  <bk-button-group :direction="direction">
    <bk-button type="primary" icon="tabler:smart-home" />
    <bk-button type="primary" icon="tabler:adjustments-horizontal" />
    <bk-button type="primary" icon="tabler:notification" />
  </bk-button-group>
</template>

<script setup lang="ts">
import { ref } from "vue"

const direction = ref<"horizontal" | "vertical">("horizontal")
</script>
