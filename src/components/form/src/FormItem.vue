<script setup lang="ts">
import { NFormItem } from 'naive-ui'
import FormComponent from './FormComponent.vue'
import type { FormItemProps } from './interface'

defineOptions({
  name: 'RFormItem',
})

withDefaults(defineProps<FormItemProps>(), {})
</script>

<template>
  <NFormItem
    v-bind="props"
    :label="label"
    :path="field"
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
      v-bind="component"
      :field="field"
      :items="items"
    />
  </NFormItem>
</template>
