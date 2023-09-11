<script setup lang="ts">
import { computed } from 'vue'
import { Component } from './component'
import type { DataTableComponentProps, DataTableComponentType } from './interface'

defineOptions({
  name: 'RTableComponent',
})

const props = withDefaults(defineProps<DataTableComponentProps>(), {})

// 默认为文本 Text 组件
const component = computed(() => Component.get((props.name || 'Text') as DataTableComponentType))
</script>

<template>
  <Component
    :is="component"
    v-bind="props.props"
  >
    <slot />
  </Component>
</template>
