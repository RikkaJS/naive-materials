<script setup lang="ts">
import { NFormItem } from 'naive-ui'
import { inject } from 'vue'
import FormComponent from './FormComponent.vue'
import FormContainer from './FormContainer.vue'
import type { FormComponentProps, FormContainerType, FormItemProps } from './interface'
import { formModelInjectionKey } from './config'
import { ifFunction } from './utils'
import { ContainerComponent } from './component'

defineOptions({
  name: 'RFormItem',
})

const props = withDefaults(defineProps<FormItemProps>(), {})

const { model } = inject(formModelInjectionKey)!

function getProp(prop: any) {
  return ifFunction(prop, { model, field: props.field })
}

function isContainer(component?: FormComponentProps) {
  return component?.name ? !!ContainerComponent.get((component.name as FormContainerType)) : false
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

    <FormContainer
      v-if="isContainer(getProp(component))"
      v-bind="getProp(component)"
      :field="field"
      :items="items"
    />

    <FormComponent
      v-else
      v-bind="getProp(component)"
      :field="field"
      :items="items"
    />
  </NFormItem>
</template>
