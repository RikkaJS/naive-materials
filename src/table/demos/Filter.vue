<script setup lang="ts">
import ConfigProvider from '@/demo/ConfigProvider.vue'
import { RTable } from '..'

const table = {
  props: {
    data: [
      { 
        name: '张三',
        sex: 1,
        dept: 1,
      },
      {
        name: '李四',
        sex: 2,
        dept: 2,
      },
      {
        name: '王五',
        sex: 3,
        dept: 3,
      },
    ],
    columns: [
      {
        key: 'name',
        title: '姓名',
      },
      {
        key: 'sex',
        title: '性别',
        type: 'tag',
        filter(value: any, row: any) {
          return row.sex === value
        },
        filterMultiple: true,
        filterOptions: [
          { value: 1, label: '未知', type: 'default' },
          { value: 2, label: '男', type: 'success' },
          { value: 3, label: '女', type: 'error' },
        ],
      },
      {
        key: 'dept',
        title: '部门',
        filter(value: any, row: any) {
          return row.dept === value
        },
        filterMultiple: false,
        filterOptions: [
          { value: 1, label: '经理' },
          { value: 2, label: '员工' },
        ],
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
