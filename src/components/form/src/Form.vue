<script setup lang="ts">
import { provide, ref, unref } from 'vue'
import { NButton, NForm, NFormItem, NSpace } from 'naive-ui'
import type { FormActionProps, FormItemProps, FormProps } from './interface'
import FormGrid from './FormGrid.vue'
import { formModelInjectionKey } from './config'

defineOptions({
  name: 'RForm',
})

const props = withDefaults(defineProps<FormProps>(), {})

const emits = defineEmits<{
  submit: [value: any]
  reset: []
}>()

const slots = defineSlots<{
  action(): any
}>()

const formRef = ref()

const model = ref<any>({})

provide(formModelInjectionKey, {
  model,
})

function getFieldsValue() {
  return unref(model)
}

function restoreValidation() {
  unref(formRef).restoreValidation()
}

function handleSubmit() {
  emits('submit', getFieldsValue())
}

function handleReset() {
  restoreValidation()
  loopInitValue(props.items || [])
  emits('reset')
}

function loopInitValue(array: FormItemProps[]) {
  for (let i = 0; i < array.length; i++) {
    const { field, items } = array[i]
    if (field)
      model.value[field] = null

    if (items)
      loopInitValue(items)
  }
}

defineExpose({
  getFieldsValue,
  restoreValidation,
})
</script>

<template>
  <NForm
    ref="formRef"
    label-placement="left"
    require-mark-placement="left"
    v-bind="props.props"
    :model="model"
  >
    <FormGrid
      :grid-props="gridProps"
      :items="items"
    />
    <NFormItem
      v-if="action"
      label=" "
      :show-feedback="false"
    >
      <NSpace>
        <slot
          v-if="slots?.action?.()"
          name="action"
        />
        <template v-else>
          <NButton
            type="primary"
            v-bind="(action as FormActionProps)?.submit"
            @click="handleSubmit"
          >
            {{ (action as FormActionProps)?.submit?.title || '提交' }}
          </NButton>
          <NButton
            v-bind="(action as FormActionProps)?.reset"
            @click="handleReset"
          >
            {{ (action as FormActionProps)?.reset?.title || '重置' }}
          </NButton>
        </template>
      </NSpace>
    </NFormItem>
  </NForm>
</template>
