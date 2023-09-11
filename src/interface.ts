import type { ButtonProps } from 'naive-ui'

export interface CustomButtonProps extends ButtonProps {
  title?: string
}

export interface DictType {
  value: string | number
  label: string | number
  type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
}
