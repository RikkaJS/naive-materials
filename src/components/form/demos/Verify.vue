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
          clearable: true,
        },
      },
      rule: { required: true, message: '请输入姓名', trigger: ['blur', 'input', 'change'] },
    },
  ],
}
</script>

<template>
  <NCard>
    <RForm v-bind="form" />
  </NCard>
</template>
