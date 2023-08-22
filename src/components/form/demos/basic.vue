<script setup lang="ts">
import { NCard } from 'naive-ui'
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
  onSubmit: (value: any) => {
    console.log('submit', value)
  },
  onReset: () => {
    console.log('reset')
  },
}
</script>

<template>
  <NCard>
    <RForm v-bind="form" />
  </NCard>
</template>
