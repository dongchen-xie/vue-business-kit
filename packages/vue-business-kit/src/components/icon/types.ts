import type { IconProps as EpIconProps, IconInstance as EpIconInstance } from "element-plus"

export interface IconInternalProps {
  icon?: string
}

export interface IconProps extends EpIconProps, IconInternalProps {}

export interface IconInstance {
  iconRef?: EpIconInstance
}
