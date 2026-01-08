import type {
  CollapseItemProps as EpCollapseItemProps,
  CollapseItemInstance as EpCollapseItemInstance
} from "element-plus"

export interface CollapseItemInternalProps {
  title?: string
  subtitle?: string
  showReset?: boolean
  showExport?: boolean
  showRefresh?: boolean
  onExport?: () => void
}

export interface CollapseItemProps
  extends Omit<EpCollapseItemProps, "title">,
    CollapseItemInternalProps {}

export interface CollapseItemInstance {
  epCollapseItem?: EpCollapseItemInstance
}

export type { CollapseProps, CollapseEmits, CollapseInstance } from "element-plus"
