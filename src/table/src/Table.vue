<script setup lang="ts">
import { NDataTable, type DataTableColumn, type DataTableFilterState, type DataTableBaseColumn, NTag } from 'naive-ui'
import type { TableProps } from './interface'
import { computed } from 'vue';
import type { DictType } from '@/interface';
import { clone } from 'lodash-es';
import { h } from 'vue';

defineOptions({
  name: 'RTable',
})

const props = withDefaults(defineProps<TableProps>(), {})

const tableColumns = computed(() => {
  if (!props.props?.columns) {
    return []
  }
  
  const columns = clone(props.props?.columns)

  for (let i = 0; i < columns.length; i++) {
    const column = columns[i]
    const { key, filter, filterOptions, type, tagProps } = column
    if (filter) {
      column.render = (row: any) => {
        const find = filterOptions?.find((item: DictType) => item.value === row[column.key])
        if (type === 'tag') {
          return h(NTag, { ...tagProps, type: find?.type }, () => find?.label)
        }
        return find?.label
      }
    } else {
      if (type === 'tag') {
        column.render = (row: any) => {
          return h(NTag, tagProps, () => row[key])
        }
      }
    }
  }

  return columns
})

function handleUpdateFilter(filters: DataTableFilterState, column: DataTableBaseColumn) {
  column.filterOptionValue = filters[column.key] as any
}
</script>

<template>
  <NDataTable
    v-bind="props.props"
    :columns="tableColumns"
    @update:filters="handleUpdateFilter"
  />
</template>
