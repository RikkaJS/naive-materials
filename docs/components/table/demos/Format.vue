<script setup lang="ts">
import ConfigProvider from '../../demo/ConfigProvider.vue'
import { RTable, type TableProps } from '@/index'

const table: TableProps = {
  props: {
    pagination: false,
    columns: [
      {
        key: 'date1',
        title: '时间1',
        format: {
          name: 'Time',
          rule: 'YYYY-MM-DD HH:mm',
        },
      },
      {
        key: 'date2',
        title: '时间2',
        format: {
          name: 'Time',
        },
      },
    ],
    load: (params: any) => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          list: [
            {
              date1: '2023-09-05',
              date2: '2023-09-11',
            },
          ],
          total: 1,
        })
      }, 500)
    }),
  },
}
</script>

<template>
  <ConfigProvider>
    <RTable v-bind="table" />
  </ConfigProvider>
</template>
