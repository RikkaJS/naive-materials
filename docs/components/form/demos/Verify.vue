<script setup lang="ts">
import { NCard } from 'naive-ui'
import ConfigProvider from '../../demo/ConfigProvider.vue'
import { type FormProps, RForm } from '@/index'

const form: FormProps = {
  action: true,
  props: {
    labelWidth: 80,
  },
  items: [
    {
      field: 'name',
      label: '姓名',
      component: {
        name: 'Input',
        props: {
          placeholder: '请输入姓名',
          clearable: true,
        },
      },
      rule: { required: true, message: '请输入姓名', trigger: ['blur', 'input', 'change'] },
    },
    {
      field: 'user.sex',
      label: '性别',
      component: {
        name: 'Radio',
        props: {
          options: [
            { value: 0, label: '男' },
            { value: 1, label: '女' },
            { value: 2, label: '未知' },
          ],
        },
      },
      rule: { required: true, type: 'number', message: '请选择性别', trigger: ['blur', 'input', 'change'] },
    },
  ],
}
</script>

<template>
  <ConfigProvider>
    <NCard>
      <RForm v-bind="form" />
    </NCard>
  </ConfigProvider>
</template>
