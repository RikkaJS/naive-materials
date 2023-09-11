<script setup lang="ts">
import { h } from 'vue'
import ConfigProvider from '../../demo/ConfigProvider.vue'
import { RTable, type TableProps } from '@/index'

const table: TableProps = {
  props: {
    pagination: false,
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
      resolve({
        list: [],
        total: 0,
      })
    }),
  },
  slots: {
    empty: () => {
      return h('div', '自定义 Empty 插槽')
    },
  },
}
</script>

<template>
  <ConfigProvider>
    <RTable v-bind="table" />
  </ConfigProvider>
</template>
