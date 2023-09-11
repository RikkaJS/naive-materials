<script setup lang="ts">
import { computed, onMounted, ref, unref } from 'vue'
import { NCard } from 'naive-ui'
import ConfigProvider from '../../demo/ConfigProvider.vue'
import { type FormProps, RForm } from '@/index'

const form: FormProps = {
  props: {
    labelWidth: 80,
  },
  items: [
    {
      field: 'age',
      label: '年龄',
      component: {
        name: 'InputNumber',
        props: {
          placeholder: '请输入年龄',
        },
      },
      hook: {
        get: ({ model }) => {
          model.age = model.age?.toString()
        },
        set: ({ model }) => {
          model.age = Number(model.age)
        },
      },
    },
  ],
}

const formRef = ref()

const model = computed(() => unref(formRef)?.getModel())

onMounted(() => {
  unref(formRef).setModel({ age: 18 })
})
</script>

<template>
  <ConfigProvider>
    <NCard>
      <pre>类型：{{ typeof model?.age }}</pre>
      <RForm
        ref="formRef"
        v-bind="form"
      />
    </NCard>
  </ConfigProvider>
</template>
