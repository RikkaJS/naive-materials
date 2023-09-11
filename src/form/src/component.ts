import { NCard, NDivider, NInput, NInputNumber } from 'naive-ui'
import type { Component as VueComponent } from 'vue'
import Radio from './FormRadio.vue'
import Tabs from './FormTabs.vue'
import Text from './FormText.vue'
import type { FormComponentType } from './interface'

export const Component = new Map<FormComponentType, VueComponent>([
  ['Card', NCard],
  ['Divider', NDivider],
  ['Input', NInput],
  ['InputNumber', NInputNumber],
  ['Radio', Radio],
  ['Tabs', Tabs],
  ['Text', Text],
])
