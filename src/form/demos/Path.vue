<script setup lang="ts">
import { NCard } from 'naive-ui'
import ConfigProvider from '@/demo/ConfigProvider.vue'
import { type FormProps, RForm } from '..'
import { onMounted, ref, unref } from 'vue';

const form: FormProps = {
  props: {
    labelWidth: 80,
  },
  action: true,
  items: [
    {
      field: 'user.name',
      label: '姓名',
      component: {
        name: 'Input',
        props: {
          placeholder: '请输入姓名',
        },
      },
    },
  ],
}

const formRef = ref()

onMounted(() => {
  unref(formRef).setModel({
    user: {
      name: 'Rikka'
    }
  })
})
</script>

<template>
  <ConfigProvider>
    <NCard>
      <RForm 
        ref="formRef"
        v-bind="form" 
      />
    </NCard>
  </ConfigProvider>
</template>
