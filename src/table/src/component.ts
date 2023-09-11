import { NTag, NText } from 'naive-ui'
import type { Component as VueComponent } from 'vue'
import type { DataTableComponentType } from './interface'

export const Component = new Map<DataTableComponentType, VueComponent>([
  ['Tag', NTag],
  ['Text', NText],
])
