<script setup lang="ts">
import { NRadio, NRadioButton, NRadioGroup, NSpace } from 'naive-ui'
import type { FormRadioProps } from './interface'

defineOptions({
  name: 'RFormRadio',
})

withDefaults(defineProps<FormRadioProps>(), {})

const emits = defineEmits<{
  'update:value': [value: FormRadioProps['value']]
}>()
</script>

<template>
  <NRadioGroup
    :disabled="disabled"
    :name="name"
    :size="size"
    :value="value"
    @update:value="(value: FormRadioProps['value']) => emits('update:value', value)"
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
</template>
