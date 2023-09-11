<script setup lang="ts">
import { NCard } from 'naive-ui'
import ConfigProvider from '../../demo/ConfigProvider.vue'
import { type FormProps, RForm } from '@/index'

const form: FormProps = {
  props: {
    labelWidth: 80,
  },
  items: [
    {
      component: {
        name: 'Card',
        props: {
          title: '住址信息',
        },
      },
      items: [
        {
          field: 'address',
          label: '地址',
          component: {
            name: 'Input',
          },
        },
        {
          field: 'zip',
          label: '邮编',
          component: {
            name: 'Input',
          },
        },
      ],
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
