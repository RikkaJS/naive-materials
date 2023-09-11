<script setup lang="ts">
import ConfigProvider from '../../demo/ConfigProvider.vue'
import { RTable, type TableProps } from '@/index'

const table: TableProps = {
  props: {
    pagination: false,
    columns: [
      {
        key: 'text',
        title: '文本',
        component: {
          props: {
            italic: true,
            strong: true,
          },
        },
      },
      {
        key: 'tag',
        title: '标签',
        component: {
          name: 'Tag',
          props: {
            type: 'info',
          },
        },
      },
    ],
    load: (params: any) => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          list: [
            {
              text: '文本内容',
              tag: '标签',
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
