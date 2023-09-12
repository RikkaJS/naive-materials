<script setup lang="ts">
import { NSpin } from 'naive-ui'
import type { FormSpinProps } from './interface'

defineOptions({
  name: 'RFormSpin',
})

const props = withDefaults(defineProps<FormSpinProps>(), {})
</script>

<template>
  <NSpin
    :size="12"
    :stroke-width="24"
    v-bind="props"
  >
    <slot />
  </NSpin>
</template>
