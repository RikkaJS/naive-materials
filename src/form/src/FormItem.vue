<script setup lang="ts">
import { NFormItem } from 'naive-ui'
import { inject } from 'vue'
import FormComponent from './FormComponent.vue'
import type { FormItemProps } from './interface'
import { formModelInjectionKey } from './config'
import { ifFunction } from './utils'

defineOptions({
  name: 'RFormItem',
})

const props = withDefaults(defineProps<FormItemProps>(), {})

const { model } = inject(formModelInjectionKey)!

function getProp(prop: any) {
  return ifFunction(prop, { model, field: props.field })
}
</script>

<template>
  <NFormItem
    v-bind="props.props"
    :path="field"
    :label="getProp(label)"
    :rule="getProp(rule)"
  >
    <template
      v-for="(slot, key) in slots"
      :key="key"
      #[key]="slotProps"
    >
      <Component
        :is="slot"
        v-bind="slotProps"
      />
    </template>

    <FormComponent
      v-if="component"
      v-bind="getProp(component)"
      :field="field"
      :items="items"
    />
  </NFormItem>
</template>
