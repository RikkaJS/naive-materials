<script setup lang="ts">
import { NDataTable } from 'naive-ui'
import type { DataTableBaseColumn, DataTableColumn, DataTableFilterState, PaginationProps } from 'naive-ui'
import { computed, h, onMounted, ref, unref } from 'vue'
import { cloneDeep, isBoolean, isFunction } from 'lodash-es'
import { useToggle } from '@vueuse/core'
import type { RowData } from 'naive-ui/es/data-table/src/interface'
import dayjs from 'dayjs'
import TableComponent from './TableComponent.vue'
import type { DataTableProps } from './interface'
import type { DictType } from '@/interface'

defineOptions({
  name: 'RDataTable',
})

const props = withDefaults(defineProps<DataTableProps>(), {
  columns: () => [],
  pagination: true,
})

const [loading, toggleLoading] = useToggle()

const tableData = ref<RowData[]>([])

const tableColumns = computed<DataTableColumn[]>(() => {
  if (!props?.columns)
    return []

  const defaultColumns = cloneDeep(props.columns)
  const columns: DataTableColumn[] = []
  for (let i = 0; i < defaultColumns.length; i++) {
    let { key, title, props, component, format, render } = defaultColumns[i]
    const column = {
      key,
      title,
      render,
      ...props,
    }

    // 自定义 render 存在，则直接渲染
    if (!render && key) {
      if (!component)
        component = {}

      column.render = (row: any) => {
        let render = row[key!]
        // 如果可以筛选
        if (props?.filter) {
          const find = props?.filterOptions?.find((item: DictType) => item.value === row[key!])

          if (find) {
            component!.props = {
              ...component?.props,
              type: find.type,
            }
            render = find.label
          }
        }

        // 如果需要格式化
        if (format?.name) {
          if (isFunction(format?.rule))
            format.rule = format.rule()

          if (format.name === 'Time')
            render = row[key!] ? dayjs(row[key!]).format(format?.rule || 'YYYY-MM-DD HH:mm:ss') : ''
        }

        return h(TableComponent, { ...component, render }, () => render)
      }
    }

    columns.push(column)
  }

  return columns
})

const defaultPagination = ref<PaginationProps>({
  page: 1,
  pageSize: 10,
  pageCount: 0,
  showSizePicker: true,
  showQuickJumper: true,
  pageSizes: [10, 20, 50, 100, 200],
  onChange: (page: number) => {
    defaultPagination.value.page = page
    handleLoad()
  },
  onUpdatePageSize: (pageSize: number) => {
    defaultPagination.value.page = 1
    defaultPagination.value.pageSize = pageSize
    handleLoad()
  },
})

const configPagination = ref<PaginationProps>({})

const tablePagination = computed(() => {
  if (isBoolean(props.pagination)) {
    return props.pagination ? unref(defaultPagination) : false
  }
  else {
    // @ts-expect-error 暂时先这样解决
    return {
      ...unref(defaultPagination),
      ...props.pagination,
      ...unref(configPagination),
    }
  }
})

const tableFilter = ref<any>({
  page: computed(() => (unref(tablePagination) as any).page),
  size: computed(() => (unref(tablePagination) as any).pageSize),
})

function handleUpdateFilter(filters: DataTableFilterState, column: DataTableBaseColumn) {
  column.filterOptionValue = filters[column.key] as any
  tableFilter.value[column.key] = filters[column.key]
  handleLoad()
}

async function handleLoad() {
  try {
    toggleLoading(true)
    const { list, total } = await props.load?.({ ...unref(tableFilter) })
    tableData.value = list
    configPagination.value.pageCount = total
  }
  catch (err) {
    throw new Error('请求数据异常')
  }
  finally {
    toggleLoading(false)
  }
}

onMounted(() => {
  handleLoad()
})
</script>

<template>
  <NDataTable
    v-bind="props"
    :columns="tableColumns"
    :pagination="tablePagination"
    :data="tableData"
    :loading="loading"
    remote
    @update:filters="handleUpdateFilter"
  >
    <template
      v-for="(slot, key) in $slots"
      :key="key"
      #[key]="slotProps"
    >
      <Component
        :is="slot as any"
        v-bind="slotProps"
      />
    </template>
  </NDataTable>
</template>
