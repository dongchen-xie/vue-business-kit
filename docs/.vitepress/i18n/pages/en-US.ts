import { LocaleConfig } from "vitepress"
import { generateSidebar } from "../../utils/generateSidebar"

export default {
  "en-US": {
    label: "English",
    lang: "en-US",
    title: "Vue Business Kit",
    description: "Vue3 + TypeScript + Element Plus + Lodash component library",
    themeConfig: {
      nav: [
        { text: "Guide", link: "/en-US/guide/design", activeMatch: "/en-US/guide/" },
        { text: "Components", link: "/en-US/components/", activeMatch: "/en-US/components/" },
        { text: "Utils", link: "/en-US/utils/", activeMatch: "/en-US/utils/" },
        { text: "Element Plus", link: "https://element-plus.org/" },
        { text: "Lodash", link: "https://lodash.com/" }
      ],
      sidebar: {
        "/en-US/guide/": [
          {
            text: "Basics",
            items: [
              { text: "Design", link: "/en-US/guide/design" },
              { text: "Installation", link: "/en-US/guide/installation" },
              { text: "Quick Start", link: "/en-US/guide/quickstart" }
            ]
          },
          {
            text: "Advanced",
            items: [
              { text: "i18n", link: "/en-US/guide/i18n" },
              { text: "Dark Mode", link: "/en-US/guide/dark-mode" }
            ]
          }
        ],
        "/en-US/components/": [
          {
            text: "Introduction",
            link: "/en-US/components/"
          },
          {
            text: "Basic",
            items: generateSidebar("en-US", "components/basic")
          },
          {
            text: "Data",
            items: generateSidebar("en-US", "components/data")
          },
          {
            text: "Feedback",
            items: generateSidebar("en-US", "components/feedback")
          },
          {
            text: "Form",
            items: generateSidebar("en-US", "components/form")
          },
          {
            text: "Navigation",
            items: generateSidebar("en-US", "components/navigation")
          }
        ],
        "/en-US/utils/": [
          {
            text: "Introduction",
            link: "/en-US/utils/"
          },
          {
            text: "Array",
            collapsed: true,
            items: generateSidebar("en-US", "utils/array")
          },
          {
            text: "Number",
            collapsed: true,
            items: generateSidebar("en-US", "utils/number")
          },
          {
            text: "Util",
            collapsed: true,
            items: generateSidebar("en-US", "utils/util")
          }
        ]
      },
      outline: {
        level: [2, 6] as [number, number],
        label: "On this page"
      },
      footer: {
        message:
          'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
        copyright: "Made with ❤️ by Vue Business Kit"
      }
    }
  }
} as LocaleConfig
