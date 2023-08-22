import type { ButtonProps, GridItemProps, GridProps, FormItemProps as NFormItemProps, FormProps as NFormProps } from 'naive-ui'
import type { Ref } from 'vue'

export interface FormModelInjection {
  model: Ref<any>
}

export interface FormGridInjection {
  gridProps: Ref<GridProps>
}

interface CustomButtonProps extends ButtonProps {
  title?: string
}

export interface FormActionProps {
  submit?: CustomButtonProps
  reset?: CustomButtonProps
}

export interface FormProps {
  props?: NFormProps
  gridProps?: GridProps
  items?: FormItemProps[]
  action?: boolean | FormActionProps
}

export interface FormGridProps {
  gridProps?: GridProps
  items?: FormItemProps[]
}

export interface FormItemProps {
  props?: NFormItemProps
  giProps?: GridItemProps
  slots?: any
  field?: string
  label?: string
  component?: FormComponentProps
  items?: FormItemProps[] // 只有嵌套组件需要传递此属性
}

export type FormComponentType = 'Card' | 'Divider' | 'Input' | 'Tabs' | 'Tab' | 'TabPane'

export interface FormComponentProps {
  props?: any
  slots?: any
  field?: string // 只用于组件间传值使用
  name: string
  items?: FormItemProps[] // 只有特殊组件需要传递此属性
}

export interface FormTabsProps {
  items: any[]
}
