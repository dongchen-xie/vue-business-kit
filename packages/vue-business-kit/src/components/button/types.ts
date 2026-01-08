import { ButtonProps as EpButtonProps, ButtonInstance as EpButtonInstance } from "element-plus"
import type { Component } from "vue"

export interface ButtonInternalProps {
  icon?: string | Component
  loadingIcon?: string | Component
}

export interface ButtonProps
  extends Omit<EpButtonProps, "icon" | "loadingIcon">,
    ButtonInternalProps {}

export interface ButtonInstance {
  epButton?: EpButtonInstance
}

export type { ButtonGroupInstance, buttonEmits } from "element-plus"
