import { NCard, NDivider, NInput } from 'naive-ui'
import type { Component as VueComponent } from 'vue'
import Tabs from './FormTabs.vue'
import type { FormComponentType } from './interface'

export const Component = new Map<FormComponentType, VueComponent>([
  ['Card', NCard],
  ['Divider', NDivider],
  ['Input', NInput],
  ['Tabs', Tabs],
])