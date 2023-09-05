<script setup lang="ts">
import { NCard } from 'naive-ui'
import ConfigProvider from '@/demo/ConfigProvider.vue'
import { type FormProps, RForm } from '..'

const form: FormProps = {
  props: {
    labelWidth: 80,
  },
  action: true,
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
