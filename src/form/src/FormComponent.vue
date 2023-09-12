<script setup lang="ts">
import { computed, inject, unref } from 'vue'
import { get, set } from 'lodash-es'
import { Component } from './component'
import type { FormComponentProps, FormComponentType } from './interface'
import { formModelInjectionKey } from './config'
import { getDefaultValue } from './utils'

defineOptions({
  name: 'RFormComponent',
})

const props = withDefaults(defineProps<FormComponentProps>(), {})

const { model } = inject(formModelInjectionKey)!

// 默认为文本 Text 组件
const component = computed(() => Component.get((props.name || 'Text') as FormComponentType))

// 特殊处理样式
const isFullWidth = computed(() => !['Switch'].includes(props.name!))

const value = computed({
  get: () => props.field ? get(unref(model), props.field) : getDefaultValue(props.name!),
  set: (val: any) => {
    if (props.field)
      set(unref(model), props.field, val)
  },
})
</script>

<template>
  <Component
    :is="component"
    v-bind="props.props"
    v-model:value="value"
    :class="{ 'r-form-component': isFullWidth }"
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
  </Component>
</template>

<style lang="less" scoped>
.r-form-component {
  width: 100%;
}
</style>
