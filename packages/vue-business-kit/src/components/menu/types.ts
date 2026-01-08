import type {
  MenuProps as EpMenuProps,
  MenuInstance as EpMenuInstance,
  MenuItemProps as EpMenuItemProps
} from "element-plus"

export interface MenuConfig {
  idKey?: string
  iconKey?: string
  menuNameKey?: string
  linkKey?: string
  childrenKey?: string
}

export interface MenuItemCtx extends Partial<EpMenuItemProps> {
  id: number | string
  icon?: string
  menu_name?: string
  link?: string
  children?: MenuItemCtx[]
  [key: string]: any
}

export interface MenuInternalProps {
  config?: MenuConfig
  data?: MenuItemCtx[]
  currentRoute?: string
}

export interface MenuProps extends EpMenuProps, MenuInternalProps {}

export interface MenuInstance {
  epMenu?: EpMenuInstance
}

export type { MenuItemInstance, MenuItemGroupInstance, SubMenuInstance } from "element-plus"
