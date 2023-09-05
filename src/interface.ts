import type { ButtonProps } from 'naive-ui'

export interface CustomButtonProps extends ButtonProps {
  title?: string
}

export type DictType = {
  value: any
  label: any
  type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
}
