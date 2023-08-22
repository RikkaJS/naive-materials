<script setup lang="ts">
import { computed, inject } from 'vue'
import { Component } from './component'
import type { FormComponentProps, FormComponentType } from './interface'
import { formGridInjectionKey, formModelInjectionKey } from './config'
import FormGrid from './FormGrid.vue'

defineOptions({
  name: 'RFormComponent',
})

const props = withDefaults(defineProps<FormComponentProps>(), {})

const { model } = inject(formModelInjectionKey)!
const { gridProps } = inject(formGridInjectionKey)!

const component = computed(() => Component.get(props.name as FormComponentType))
</script>

<template>
  <Component
    :is="component"
    v-bind="props.props"
    v-model:value="model[field as string]"
  >
    <template
      v-for="(slot, key) in slots"
      :key="key"
      #[key]="slotProps"
    >
      <Component
        :is="slot"
        v-bind="slotProps"
        :items="items"
      />
    </template>

    <template v-if="items">
      <FormGrid
        :grid-props="gridProps"
        :items="items"
      />
    </template>
  </Component>
</template>
