<script setup lang="ts">
import { computed, inject, unref } from 'vue'
import { get, set } from 'lodash-es'
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

// 默认为文本 Text 组件
const component = computed(() => Component.get((props.name || 'Text') as FormComponentType))

const value = computed({
  get: () => get(unref(model), props.field!),
  set: (val: any) => {
    set(unref(model), props.field!, val)
  },
})
</script>

<template>
  <Component
    :is="component"
    v-bind="props.props"
    v-model:value="value"
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
