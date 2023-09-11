<script setup lang="ts">
import ConfigProvider from '../../demo/ConfigProvider.vue'
import { RTable, type TableProps } from '@/index'

const table: TableProps = {
  props: {
    columns: [
      {
        key: 'name',
        title: '姓名',
      },
      {
        key: 'sex',
        title: '性别',
        props: {
          filter: true,
          filterMultiple: true,
          filterOptions: [
            { value: 1, label: '未知', type: 'default' },
            { value: 2, label: '男', type: 'success' },
            { value: 3, label: '女', type: 'error' },
          ],
        },
        component: {
          name: 'Tag',
          props: {
            type: 'warning',
            bordered: false,
            round: true,
          },
        },
      },
      {
        key: 'dept',
        title: '部门',
        props: {
          filter: true,
          filterMultiple: false,
          filterOptions: [
            { value: 1, label: '经理' },
            { value: 2, label: '员工' },
          ],
        },
      },
    ],
    load: (params: any) => new Promise((resolve, reject) => {
      const data = [
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
      ]
      let list: any[] = data

      if (params.sex && params.sex.length)
        list = data.filter((item: any) => params.sex.includes(item.sex))

      if (params.dept)
        list = data.filter((item: any) => params.dept === item.dept)

      setTimeout(() => {
        resolve({
          list,
          total: 3,
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
