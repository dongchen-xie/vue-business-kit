import type { ComponentResolver } from "unplugin-vue-components"

export interface VueEpToolkitResolverOptions {
  /**
   * import style css or sass with components
   *
   * @default 'css'
   */
  importStyle?: boolean | "css" | "sass"
}

export function VueEpToolkitResolver(): ComponentResolver {
  return {
    type: "component",
    resolve: (name: string) => {
      if (name.startsWith("Ep") || name.startsWith("El")) {
        return {
          name,
          from: "vue-ep-toolkit"
        }
      }
    }
  }
}
