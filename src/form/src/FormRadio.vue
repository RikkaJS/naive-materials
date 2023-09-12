<script setup lang="ts">
import { NRadio, NRadioButton, NRadioGroup, NSpace } from 'naive-ui'
import FormSpin from './FormSpin.vue'
import type { FormRadioProps } from './interface'
import { useLoad } from './use-load'

defineOptions({
  name: 'RFormRadio',
})

const props = withDefaults(defineProps<FormRadioProps>(), {})

const emits = defineEmits<{
  'update:value': [value: FormRadioProps['value']]
}>()

const { loading, options } = useLoad(props)

function handleUpdateValue(value: FormRadioProps['value']) {
  emits('update:value', value)
}
</script>

<template>
  <FormSpin :show="loading">
    <NRadioGroup
      v-bind="props"
      :value="props.value"
      @update:value="handleUpdateValue"
    >
      <template v-if="type === 'button'">
        <NRadioButton
          v-for="(opt, index) in options"
          :key="index"
          v-bind="opt"
        />
      </template>
      <NSpace v-else>
        <NRadio
          v-for="(opt, index) in options"
          :key="index"
          v-bind="opt"
        />
      </NSpace>
    </NRadioGroup>
  </FormSpin>
</template>
