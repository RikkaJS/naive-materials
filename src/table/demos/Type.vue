<script setup lang="ts">
import ConfigProvider from '@/demo/ConfigProvider.vue'
import { RTable } from '..'

const table = {
  props: {
    data: [
      { 
        title: '工作日',
        datetime: '2023-09-05',
      },
    ],
    columns: [
      {
        key: 'title',
        title: '标题',
      },
      {
        key: 'datetime',
        title: '时间',
        type: 'tag',
        tagProps: {
          type: 'warning',
          bordered: false,
          round: true,
        },
      }
    ],
  },
}
</script>

<template>
  <ConfigProvider>
    <RTable v-bind="table" />
  </ConfigProvider>
</template>
