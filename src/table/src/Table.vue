<script setup lang="ts">
import type { TableProps } from './interface'
import DataTable from './DataTable.vue'

defineOptions({
  name: 'RTable',
})

withDefaults(defineProps<TableProps>(), {})
</script>

<template>
  <div>
    <DataTable v-bind="props">
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
    </DataTable>
  </div>
</template>
