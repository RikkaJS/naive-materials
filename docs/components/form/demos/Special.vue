<script setup lang="ts">
import { NCard } from 'naive-ui'
import ConfigProvider from '../../demo/ConfigProvider.vue'
import { type FormProps, RForm } from '@/index'

const form: FormProps = {
  items: [
    {
      component: {
        name: 'Tabs',
        props: {
          type: 'card',
        },
      },
      items: [
        {
          name: '0',
          tab: '标签1',
          slot: () => '标签1的内容',
        },
        {
          name: '1',
          tab: '标签2',
          slot: () => '标签2的内容',
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
