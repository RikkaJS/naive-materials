<script setup lang="ts">
import ConfigProvider from '@/demo/ConfigProvider.vue'
import { RTable } from '..'

const table = {
  props: {
    data: [
      { 
        title: 'Hello World!',
        content: 'First Table Demo.'
      },
    ],
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
  },
}
</script>

<template>
  <ConfigProvider>
    <RTable v-bind="table" />
  </ConfigProvider>
</template>
