import { inject, ref, computed, type InjectionKey, type Ref, type App } from "vue"
import en from "./lang/en"

export type Language = {
  name: string
  bk: {
    [key: string]: any
  }
}

const localeKey: InjectionKey<Ref<Language>> = Symbol("locale")

export function provideLocale(app: App, locale: Language = en) {
  const lang = ref(locale)
  app.provide(localeKey, lang)
  return lang
}

export function useLocale() {
  const locale = inject(localeKey, ref(en))
  return computed(() => locale.value)
}

export { default as en } from "./lang/en"
export { default as zhCn } from "./lang/zh-cn"
