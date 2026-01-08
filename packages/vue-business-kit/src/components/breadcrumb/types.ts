import type {
  BreadcrumbProps as EpBreadcrumbProps,
  BreadcrumbInstance as EpBreadcrumbInstance,
  BreadcrumbItemProps as EpBreadcrumbItemProps
} from "element-plus"

export interface BreadcrumbConfig {
  idKey?: string
  iconKey?: string
  menuNameKey?: string
  linkKey?: string
  childrenKey?: string
}

export interface BreadcrumbItemCtx extends Partial<EpBreadcrumbItemProps> {
  id: number | string
  icon?: string
  menu_name?: string
  link?: string
  children?: BreadcrumbItemCtx[]
  [key: string]: any
}

export interface BreadcrumbInternalProps {
  config?: BreadcrumbConfig
  data?: BreadcrumbItemCtx[]
  currentRoute?: string
}

export interface BreadcrumbProps extends EpBreadcrumbProps, BreadcrumbInternalProps {}

export interface BreadcrumbInstance {
  epBreadcrumb?: EpBreadcrumbInstance
}

export type { BreadcrumbItemInstance } from "element-plus"
