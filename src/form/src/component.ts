import type { Component as VueComponent } from 'vue'
import { NAutoComplete, NCard, NColorPicker, NDatePicker, NDivider, NDynamicInput, NDynamicTags, NInput, NInputNumber, NRate, NSlider, NSwitch, NTimePicker } from 'naive-ui'
import type { FormComponentType, FormContainerType } from './interface'
import Cascader from './FormCascader.vue'
import Checkbox from './FormCheckbox.vue'
import Mention from './FormMention.vue'
import Radio from './FormRadio.vue'
import Select from './FormSelect.vue'
import Tabs from './FormTabs.vue'
import Text from './FormText.vue'
import Transfer from './FormTransfer.vue'
import TreeSelect from './FormTreeSelect.vue'

export const Component = new Map<FormComponentType, VueComponent>([
  ['AutoComplete', NAutoComplete],
  ['Cascader', Cascader],
  ['Checkbox', Checkbox],
  ['ColorPicker', NColorPicker],
  ['DatePicker', NDatePicker],
  ['DynamicInput', NDynamicInput],
  ['DynamicTags', NDynamicTags],
  ['Input', NInput],
  ['InputNumber', NInputNumber],
  ['Mention', Mention],
  ['Radio', Radio],
  ['Rate', NRate],
  ['Select', Select],
  ['Slider', NSlider],
  ['Switch', NSwitch],
  ['Text', Text],
  ['TimePicker', NTimePicker],
  ['Transfer', Transfer],
  ['TreeSelect', TreeSelect],
])

export const ContainerComponent = new Map<FormContainerType, VueComponent>([
  ['Card', NCard],
  ['Divider', NDivider],
  ['Tabs', Tabs],
])
