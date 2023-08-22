<script setup lang="ts">
import { provide, toRef } from 'vue'
import { NGi, NGrid } from 'naive-ui'
import type { FormGridProps } from './interface'
import FormItem from './FormItem.vue'
import { formGridInjectionKey } from './config'

defineOptions({
  name: 'RFormGrid',
})

const props = withDefaults(defineProps<FormGridProps>(), {})

provide(formGridInjectionKey, {
  gridProps: toRef(props, 'gridProps', {}),
})
</script>

<template>
  <NGrid
    responsive="screen"
    item-responsive
    v-bind="gridProps"
  >
    <NGi
      v-for="(item, index) in items"
      :key="index"
      :span="24"
      v-bind="item.giProps"
    >
      <FormItem v-bind="item" />
    </NGi>
  </NGrid>
</template>
