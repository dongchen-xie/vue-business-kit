import type {
  FormProps as EpFormProps,
  FormItemProps as EpFormItemProps,
  FormInstance as EpFormInstance
} from "element-plus"

export interface FormItemCtx extends Partial<EpFormItemProps> {
  type: string
  componentProps?: Record<string, any>
  children?: Record<string, any>[]
}

export interface FormInternalProps {
  items?: FormItemCtx[]
  colNum?: number
}

export interface FormProps extends EpFormProps, FormInternalProps {}

export interface FormInstance {
  epForm?: EpFormInstance
}

export type { FormRules, FormEmits } from "element-plus"
