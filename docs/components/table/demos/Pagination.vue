<script setup lang="ts">
import ConfigProvider from '../../demo/ConfigProvider.vue'
import { RTable, type TableProps } from '@/index'

const table: TableProps = {
  props: {
    pagination: true,
    columns: [
      {
        key: 'title',
        title: '标题',
      },
      {
        key: 'content',
        title: '内容',
      },
    ],
    load: (params: any) => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          list: [
            {
              title: 'Hello World!',
              content: 'Pagination Table Demo.',
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
