<script setup lang="ts">
import { NTransfer } from 'naive-ui'
import { useLoad } from './use-load'
import type { FormTransferProps } from './interface'
import FormSpin from './FormSpin.vue'

defineOptions({
  name: 'RFormTransfer',
})

const props = withDefaults(defineProps<FormTransferProps>(), {})

const emits = defineEmits<{
  'update:value': [value: FormTransferProps['value']]
}>()

const { loading, options } = useLoad(props)

function handleUpdateValue(value: FormTransferProps['value']) {
  emits('update:value', value)
}
</script>

<template>
  <FormSpin
    :show="loading"
    size="small"
    :stroke-width="16"
  >
    <NTransfer
      v-bind="props"
      :loading="loading"
      :options="options"
      @update:value="handleUpdateValue"
    />
  </FormSpin>
</template>
