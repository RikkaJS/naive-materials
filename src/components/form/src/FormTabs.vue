<script setup lang="ts">
import { ref } from 'vue'
import { NTabPane, NTabs } from 'naive-ui'
import type { FormTabsProps } from './interface'

defineOptions({
  name: 'RFormTabs',
})

const props = withDefaults(defineProps<FormTabsProps>(), {})

const active = ref(props.items?.[0]?.name ?? 0)
</script>

<template>
  <NTabs
    v-bind="$attrs"
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
