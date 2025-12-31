import { computed } from "vue"
import type { BreadcrumbItemCtx, BreadcrumbInternalProps } from "../types"

export function useBreadcrumb(props: BreadcrumbInternalProps) {
  const defaultConfig = {
    idKey: "id",
    iconKey: "icon",
    menuNameKey: "menu_name",
    linkKey: "link",
    childrenKey: "children"
  }

  const mergedConfig = { ...defaultConfig, ...props.config }

  // 查找当前路由对应的面包屑路径
  const findBreadcrumbPath = (
    items: BreadcrumbItemCtx[],
    currentPath: string
  ): BreadcrumbItemCtx[] => {
    for (const item of items) {
      const itemLink = item[mergedConfig.linkKey]
      if (itemLink === currentPath) {
        return [item]
      }

      if (item[mergedConfig.childrenKey]) {
        const childPath = findBreadcrumbPath(
          item[mergedConfig.childrenKey] as BreadcrumbItemCtx[],
          currentPath
        )
        if (childPath.length > 0) {
          return [item, ...childPath]
        }
      }
    }
    return []
  }

  // 生成面包屑项
  const breadcrumbItems = computed(() => {
    if (!props.currentRoute || !props.data?.length) return []

    const path = findBreadcrumbPath(props.data, props.currentRoute)
    return path.map((item) => {
      const {
        [mergedConfig.idKey]: id,
        [mergedConfig.iconKey]: icon,
        [mergedConfig.menuNameKey]: menu_name,
        [mergedConfig.linkKey]: link,
        ...rest
      } = item
      return {
        id,
        icon,
        menu_name,
        link,
        ...rest
      }
    })
  })

  // 获取面包屑项的数据
  const getBreadcrumbItems = () => {
    return breadcrumbItems.value
  }

  return {
    breadcrumbItems,
    getBreadcrumbItems,
    config: mergedConfig
  }
}
