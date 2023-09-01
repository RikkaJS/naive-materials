<script setup lang="ts">
import { inject, provide, toRef } from 'vue'
import { NGi, NGrid } from 'naive-ui'
import type { FormGridProps, FormItemProps } from './interface'
import FormItem from './FormItem.vue'
import { formGridInjectionKey, formModelInjectionKey } from './config'
import { ifFunction, isVisible } from './utils'

defineOptions({
  name: 'RFormGrid',
})

const props = withDefaults(defineProps<FormGridProps>(), {})

provide(formGridInjectionKey, {
  gridProps: toRef(props, 'gridProps', {}),
})

const { model } = inject(formModelInjectionKey)!

function isShow(visible?: FormItemProps['visible']) {
  return isVisible(visible, { model })
}

function getProp(item: FormItemProps) {
  return ifFunction(item.giProps, { model, field: item.field })
}
</script>

<template>
  <NGrid
    responsive="screen"
    item-responsive
    v-bind="gridProps"
  >
    <template v-for="(item, index) in items">
      <NGi
        v-if="isShow(item.visible)"
        :key="index"
        :span="24"
        v-bind="getProp(item)"
      >
        <FormItem v-bind="item" />
      </NGi>
    </template>
  </NGrid>
</template>
