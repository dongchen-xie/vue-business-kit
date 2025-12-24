import { generateSidebar } from "../../utils/generateSidebar"

export default {
  "zh-CN": {
    label: "简体中文",
    lang: "zh-CN",
    title: "Vue Business Kit",
    description: "Vue3 + TypeScript + Element Plus + Lodash 组件函数库",
    themeConfig: {
      nav: [
        { text: "指南", link: "/zh-CN/guide/design", activeMatch: "/zh-CN/guide/" },
        { text: "组件", link: "/zh-CN/components/", activeMatch: "/zh-CN/components/" },
        { text: "工具函数", link: "/zh-CN/utils/", activeMatch: "/zh-CN/utils/" },
        { text: "Element Plus", link: "https://element-plus.org/zh-CN/" },
        { text: "Lodash", link: "https://www.lodashjs.com/" }
      ],
      sidebar: {
        "/zh-CN/guide/": [
          {
            text: "基础",
            items: [
              { text: "设计", link: "/zh-CN/guide/design" },
              { text: "安装", link: "/zh-CN/guide/installation" },
              { text: "快速开始", link: "/zh-CN/guide/quickstart" }
            ]
          },
          {
            text: "进阶",
            items: [
              { text: "国际化", link: "/zh-CN/guide/i18n" },
              { text: "暗黑模式", link: "/zh-CN/guide/dark-mode" }
            ]
          }
        ],
        "/zh-CN/components/": [
          {
            text: "简介",
            link: "/zh-CN/components/"
          },
          {
            text: "Basic 基础组件",
            items: generateSidebar("zh-CN", "components/basic")
          },
          {
            text: "Data 数据展示",
            items: generateSidebar("zh-CN", "components/data")
          },
          {
            text: "Feedback 反馈组件",
            items: generateSidebar("zh-CN", "components/feedback")
          },
          {
            text: "Form 表单组件",
            items: generateSidebar("zh-CN", "components/form")
          }
        ],
        "/zh-CN/utils/": [
          {
            text: "简介",
            link: "/zh-CN/utils/"
          },
          {
            text: "Number 数字",
            collapsed: true,
            items: generateSidebar("zh-CN", "utils/number")
          }
        ]
      },
      outline: {
        level: [2, 6] as [number, number],
        label: "页面导航"
      },
      footer: {
        message:
          '基于<a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT许可证</a>发布',
        copyright: "由Vue Business Kit❤️制作"
      }
    }
  }
}
