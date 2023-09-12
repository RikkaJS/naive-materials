import { isBoolean, isFunction, isString, isUndefined } from 'lodash-es'
import type { FormComponentType, FormItemProps } from './interface'

export function isVisible(visible?: FormItemProps['visible'], params?: any) {
  visible = ifFunction(visible, params)

  if (isUndefined(visible))
    return true
  else if (isBoolean(visible))
    return visible
  else if (isString(visible))
    return visible === 'visible'
  else
    return false
}

export function isVisibleOrHidden(visible?: FormItemProps['visible'], params?: any) {
  visible = ifFunction(visible, params)

  if (isUndefined(visible))
    return true
  else if (isBoolean(visible))
    return visible
  else if (isString(visible))
    return ['visible', 'hidden'].includes(visible)
  else
    return false
}

export function ifFunction(value: any, ctx?: any) {
  if (isFunction(value))
    value = value(ctx)
  return value
}

export function getDefaultValue(component: FormComponentType) {
  if (['DynamicTags'].includes(component))
    return []

  return null
}
