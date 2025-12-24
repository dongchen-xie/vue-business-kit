import type { App } from "vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"

import * as lodash from "lodash-es"
import * as utilsModule from "./utils"
import { provideLocale } from "./locale"
import en from "./locale/lang/en"
import type { Language as ElLanguage } from "element-plus/es/locale"
import type { VueBusinessKitOptions } from "./types"

// 导出 Element Plus 组件
// export * from "element-plus"

// 导出自定义组件
export * from "./components"

// 导出 utils 对象
export const utils: Record<string, any> = {
  ...utilsModule,
  ...lodash
}

// 导出 locale
export { provideLocale, type Language, en, zhCn } from "./locale"
export { useLocale as useBkLocale } from "./locale"

// 导出 resolver
export { VueBusinessKitResolver } from "./resolver"
export type { VueBusinessKitResolverOptions } from "./resolver"

import "./styles/index.scss"

// 安装函数
export function install(app: App, options: VueBusinessKitOptions = {}) {
  const { locale = en } = options
  app.use(ElementPlus, { locale: locale as ElLanguage })
  provideLocale(app, locale)
}

// 默认导出
const VueBusinessKit: Record<string, any> = {
  install,
  utils
}

export default VueBusinessKit
