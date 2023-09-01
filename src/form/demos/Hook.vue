<script setup lang="ts">
import { NCard } from 'naive-ui'
import { type FormProps, type FormContext, RForm } from '..'
import { computed, onMounted, ref, unref } from 'vue';

const form: FormProps = {
  props: {
    labelWidth: 80,
  },
  action: true,
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
        get: ({ model }: FormContext) => {
          model.age = model.age.toString()
        },
        set: ({ model }: FormContext) => {
          model.age = Number(model.age)
        }
      }
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
  <NCard>
    <pre>{{ model }}</pre>
    <pre>类型：{{ typeof model?.age }}</pre>
    <RForm
      ref="formRef"
      v-bind="form"
    />
  </NCard>
</template>
