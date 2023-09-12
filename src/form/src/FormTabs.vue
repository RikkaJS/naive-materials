<script setup lang="ts">
import { inject, ref } from 'vue'
import { NTabPane, NTabs } from 'naive-ui'
import type { FormTabsProps } from './interface'
import { formGridInjectionKey } from './config'
import FormGrid from './FormGrid.vue'

defineOptions({
  name: 'RFormTabs',
})

const props = withDefaults(defineProps<FormTabsProps>(), {})

const { gridProps } = inject(formGridInjectionKey)!

const active = ref(props.items?.[0]?.name ?? 0)
</script>

<template>
  <NTabs
    v-bind="props"
    v-model:value="active"
  >
    <template
      v-for="(slot, key) in $slots"
      :key="key"
      #[key]="slotProps"
    >
      <template v-if="key === 'default'">
        <NTabPane
          v-for="(item, index) in items"
          :key="index"
          :name="index"
          display-directive="show:lazy"
          v-bind="item"
        >
          <Component
            :is="item.slot"
            v-if="item.slot"
          />
          <FormGrid
            v-else-if="item.items && item.items.length"
            :grid-props="gridProps"
            :items="item.items"
          />
        </NTabPane>
      </template>
      <Component
        :is="slot as any"
        v-bind="slotProps"
      />
    </template>
  </NTabs>
</template>
