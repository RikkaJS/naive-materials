import type { CascaderOption, CascaderProps, CheckboxGroupProps, CheckboxProps, FormItemRule, GridItemProps, GridProps, MentionOption, MentionProps, FormItemProps as NFormItemProps, FormProps as NFormProps, RadioGroupProps, RadioProps, SelectOption, SelectProps, SpinProps, TabPaneProps, TabsProps, TextProps, TransferOption, TransferProps, TreeSelectOption, TreeSelectProps } from 'naive-ui'
import type { Ref } from 'vue'
import type { CustomButtonProps } from '@/interface'

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

export interface FormItemContext {
  model: any
  field?: string
}

export interface FormItemHook {
  get?: ((ctx: FormItemContext) => void)
  set?: ((ctx: FormItemContext) => void)
}

export interface FormTabProps extends /* @vue-ignore */ TabPaneProps {
  slot?: any
  items?: FormItemProps[]
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
  component?: FormComponentProps | FormContainerProps | ((ctx: FormItemContext) => FormComponentProps) | ((ctx: FormItemContext) => FormContainerProps)
  items?: FormItemProps[] | FormTabProps[] // 只有容器组件需要传递此属性
}

export type FormComponentType = 'AutoComplete' | 'Cascader' | 'Checkbox' | 'ColorPicker' |
'DatePicker' | 'DynamicInput' | 'DynamicTags' | 'Input' | 'InputNumber' | 'Mention' | 'Radio' |
'Rate' | 'Select' | 'Slider' | 'Switch' | 'Text' | 'TimePicker' | 'Transfer' | 'TreeSelect'

export type FormContainerType = 'Card' | 'Divider' | 'Tabs'

export interface FormComponentProps {
  props?: any
  slots?: any
  field?: string // 只用于组件间传值使用，不提供给使用者
  name?: FormComponentType
}

export interface FormContainerProps {
  props?: any
  slots?: any
  name?: FormContainerType
  items?: FormItemProps[] // 只有特殊组件需要传递此属性
}

export interface FormCascaderProps extends /* @vue-ignore */ CascaderProps {
  load?: () => Promise<CascaderOption[]>
}

export interface FormCheckboxProps extends /* @vue-ignore */ CheckboxGroupProps {
  value: CheckboxGroupProps['value']
  options?: RadioProps[]
  load?: () => Promise<CheckboxProps[]>
}

export interface FormMentionProps extends /* @vue-ignore */ MentionProps {
  load?: () => Promise<MentionOption[]>
}

export interface FormRadioProps extends /* @vue-ignore */ RadioGroupProps {
  value: RadioGroupProps['value']
  type?: 'button'
  options?: RadioProps[]
  load?: () => Promise<RadioProps[]>
}

export interface FormSelectProps extends /* @vue-ignore */ SelectProps {
  load?: () => Promise<SelectOption[]>
}

export interface FormSpinProps extends /* @vue-ignore */ SpinProps {}

export interface FormTabsProps extends /* @vue-ignore */ TabsProps {
  items: any[]
}

export interface FormTextProps extends /* @vue-ignore */ TextProps {
  value: any
}

export interface FormTransferProps extends /* @vue-ignore */ TransferProps {
  value: TransferProps['value']
  load?: () => Promise<TransferOption[]>
}

export interface FormTreeSelectProps extends /* @vue-ignore */ TreeSelectProps {
  load?: () => Promise<TreeSelectOption[]>
}
