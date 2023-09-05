<script setup lang="ts">
import { NCard } from 'naive-ui'
import ConfigProvider from '@/demo/ConfigProvider.vue'
import { computed, ref, unref } from 'vue'
import { type FormProps, RForm } from '..'

const form: FormProps = {
  props: {
    labelWidth: 80,
  },
  items: [
    {
      field: 'status',
      label: '状态',
      defaultValue: 'visible',
      component: {
        name: 'Radio',
        props: {
          options: [
            { value: 'visible', label: '显示' },
            { value: 'none', label: '隐藏' },
            { value: 'hidden', label: '隐藏但保留值' },
          ],
        },
      },
    },
    {
      field: 'name',
      label: '姓名',
      defaultValue: 'Rikka',
      component: {
        name: 'Input',
        props: {
          defaultValue: 'Rikka',
        },
      },
      visible: ({ model }: any) => unref(model).status,
    },
  ],
}

const formRef = ref()

const model = computed(() => unref(formRef)?.getModel())
</script>

<template>
  <ConfigProvider>
    <NCard>
      <pre>{{ model }}</pre>
      <RForm
        ref="formRef"
        v-bind="form"
      />
    </NCard>
  </ConfigProvider>
</template>
