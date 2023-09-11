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
      defaultValue: 'Rikka',
      component: {
        name: 'Input',
        props: {
          placeholder: '请输入姓名',
        },
        slots: {
          suffix: () => 'suffix',
        },
      },
    },
    {
      field: 'text',
      label: '文本',
      defaultValue: '默认文本展示',
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
