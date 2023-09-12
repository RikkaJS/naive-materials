<script setup lang="ts">
import { NCheckbox, NCheckboxGroup, NSpace } from 'naive-ui'
import FormSpin from './FormSpin.vue'
import type { FormCheckboxProps } from './interface'
import { useLoad } from './use-load'

defineOptions({
  name: 'RFormCheckbox',
})

const props = withDefaults(defineProps<FormCheckboxProps>(), {})

const emits = defineEmits<{
  'update:value': [value: FormCheckboxProps['value']]
}>()

const { loading, options } = useLoad(props)

function handleUpdateValue(value: FormCheckboxProps['value']) {
  emits('update:value', value)
}
</script>

<template>
  <FormSpin :show="loading">
    <NCheckboxGroup
      v-bind="props"
      :value="props.value"
      @update:value="handleUpdateValue"
    >
      <NSpace>
        <NCheckbox
          v-for="(opt, index) in options"
          :key="index"
          v-bind="opt"
        />
      </NSpace>
    </NCheckboxGroup>
  </FormSpin>
</template>
