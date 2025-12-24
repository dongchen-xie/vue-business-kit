import DefaultTheme from "vitepress/theme"
import VueBusinessKit from "vue-business-kit"
// import "vue-business-kit/dist/index.css"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import "./style.scss"
import "virtual:uno.css"
import { globals } from "../vitepress"
import type { Router } from "vitepress"

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }: { app: any; router: Router }) {
    // 只在浏览器环境中初始化 NProgress
    if (typeof window !== "undefined") {
      NProgress.configure({ showSpinner: false })

      router.onBeforeRouteChange = () => {
        NProgress.start()
      }
      router.onAfterRouteChange = () => {
        NProgress.done()
      }
    }

    app.use(VueBusinessKit)
    Object.entries(globals).forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  }
}
