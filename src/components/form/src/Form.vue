<script setup lang="ts">
import { provide, ref, unref, watch } from 'vue'
import { NButton, NForm, NFormItem, NSpace } from 'naive-ui'
import { clone, set } from 'lodash-es'
import type { FormActionProps, FormItemProps, FormProps } from './interface'
import FormGrid from './FormGrid.vue'
import { formModelInjectionKey } from './config'
import { isVisibleOrHidden } from './utils'

defineOptions({
  name: 'RForm',
})

const props = withDefaults(defineProps<FormProps>(), {})

const emits = defineEmits<{
  submit: [value: any]
  reset: []
  validateError: [err: any]
}>()

const slots = defineSlots<{
  action(): any
}>()

const formRef = ref()

const model = ref<any>({})
const levelItems = ref<FormItemProps[]>([])

provide(formModelInjectionKey, {
  model,
})

function initModel() {
  loopInitValue(props.items || [])
}

function getModel() {
  const cloneModel = clone(unref(model))

  for (let i = 0; i < unref(levelItems).length; i++) {
    const { visible, field } = unref(levelItems)[i]

    if (field && !isVisibleOrHidden(visible, { model, field })) {
      delete cloneModel[field]
      continue
    }
  }

  return unref(cloneModel)
}

function setModel(value: any) {
  for (const key in value)
    set(unref(model), key, value[key])
}

async function validate() {
  try {
    await unref(formRef).validate()
  }
  catch (error: any) {
    throw new Error(error)
  }
}

function restoreValidation() {
  unref(formRef).restoreValidation()
}

async function handleSubmit() {
  try {
    await validate()
    emits('submit', getModel())
  }
  catch (err) {
    emits('validateError', err)
  }
}

function handleReset() {
  restoreValidation()
  loopInitValue(props.items || [])
  emits('reset')
}

function loopInitValue(array: FormItemProps[]) {
  for (let i = 0; i < array.length; i++) {
    const { field, defaultValue, visible, items } = array[i]

    // @ts-expect-error
    levelItems.value.push(array[i])

    if (field && isVisibleOrHidden(visible, { model, field }))
      model.value[field] = defaultValue ?? null

    if (items)
      loopInitValue(items)
  }
}

watch(
  () => props.items,
  () => {
    initModel()
  },
  {
    immediate: true,
  },
)

defineExpose({
  getModel,
  setModel,
  validate,
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
