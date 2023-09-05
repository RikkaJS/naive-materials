import type { CustomButtonProps } from '@/interface'
import type { FormItemRule, GridItemProps, GridProps, FormItemProps as NFormItemProps, FormProps as NFormProps, RadioProps } from 'naive-ui'
import type { Ref } from 'vue'

export interface FormModelInjection {
  model: Ref<any>
}

export interface FormGridInjection {
  gridProps: Ref<GridProps>
}

export interface FormAction {
  submit?: CustomButtonProps
  reset?: CustomButtonProps
}

export interface FormProps {
  props?: NFormProps
  gridProps?: GridProps
  items?: FormItemProps[]
  action?: boolean | FormAction
}

export interface FormGridProps {
  gridProps?: GridProps
  items?: FormItemProps[]
}

export type FormItemVisible = boolean | 'visible' | 'none' | 'hidden' // 显示、隐藏、隐藏保留值

export type FormItemContext = {
  model: any
  field?: string
}

export interface FormItemHook {
  get?: ((ctx: FormItemContext) => void)
  set?: ((ctx: FormItemContext) => void)
}

export interface FormItemProps {
  props?: NFormItemProps | ((ctx: FormItemContext) => NFormItemProps)
  giProps?: GridItemProps | ((ctx: FormItemContext) => GridItemProps)
  slots?: any
  field?: string
  label?: string
  defaultValue?: any
  rule?: FormItemRule | Array<FormItemRule> | ((ctx: FormItemContext) => FormItemRule | Array<FormItemRule>)
  visible?: FormItemVisible | ((ctx: FormItemContext) => FormItemVisible)
  hook?: FormItemHook
  component?: FormComponentProps
  items?: FormItemProps[] // 只有嵌套组件需要传递此属性
}

export type FormComponentType = 'Card' | 'Divider' | 'Input' | 'InputNumber' | 'Radio' | 'Tabs'

export interface FormComponentProps {
  props?: any
  slots?: any
  field?: string // 只用于组件间传值使用，不提供给使用者
  name: string
  items?: FormItemProps[] // 只有特殊组件需要传递此属性
}

export interface FormTabsProps {
  items: any[]
}

export interface FormRadioProps {
  disabled?: RadioProps['disabled']
  name?: RadioProps['name']
  size?: RadioProps['size']
  value: RadioProps['value']
  options: RadioProps[]
  type?: 'button'
}
