import type {
  FormProps as EpFormProps,
  FormItemProps as EpFormItemProps,
  FormInstance as EpFormInstance
} from "element-plus"

export interface FormItemCtx extends Partial<EpFormItemProps> {
  type: string
  componentProps?: Record<string, any>
  children?: Record<string, any>[]
  slot?:
    | boolean
    | {
        default?: string | boolean
        label?: string | boolean
        error?: string | boolean
      }
}

export interface FormInternalProps {
  items: FormItemCtx[]
}

export interface FormProps extends EpFormProps, FormInternalProps {}

export interface FormEmits {
  validate: [prop: string, isValid: boolean, message: string]
  submit: [model: Record<string, any>]
  reset: []
}

export interface FormInstance {
  formRef?: EpFormInstance
}

export type { FormRules } from "element-plus"
