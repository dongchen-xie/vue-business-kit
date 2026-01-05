<template>
  <!-- 手动方式：通过 bk-breadcrumb-item 标签手动定义每个面包屑项 -->
  <bk-breadcrumb separator="/">
    <bk-breadcrumb-item :to="{ path: '/' }">homepage</bk-breadcrumb-item>
    <bk-breadcrumb-item>
      <a href="/">promotion management</a>
    </bk-breadcrumb-item>
    <bk-breadcrumb-item>promotion list</bk-breadcrumb-item>
    <bk-breadcrumb-item>promotion detail</bk-breadcrumb-item>
  </bk-breadcrumb>

  <el-divider></el-divider>

  <!-- 数据驱动方式：通过 data 和 currentRoute 属性自动根据路由生成面包屑路径 -->
  <bk-breadcrumb separator="/" :data="data" :currentRoute="currentRoute"></bk-breadcrumb>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue"
import type { BreadcrumbItemCtx } from "vue-business-kit"

const data = reactive<BreadcrumbItemCtx[]>([
  {
    id: 1,
    menu_name: "homepage",
    link: "/",
    children: [
      {
        id: 2,
        menu_name: "promotion management",
        link: "/promotion_management",
        children: [
          {
            id: 3,
            menu_name: "promotion list",
            link: "/promotion_management/promotion_list",
            children: [
              {
                id: 4,
                menu_name: "promotion detail",
                link: "/promotion_management/promotion_list/promotion_detail"
              }
            ]
          }
        ]
      }
    ]
  }
])
const currentRoute = ref("/promotion_management/promotion_list/promotion_detail")
</script>
