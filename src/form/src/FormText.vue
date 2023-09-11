<script setup lang="ts">
import { NText } from 'naive-ui'
import type { FormTextProps } from './interface'

defineOptions({
  name: 'RFormText',
})

const props = withDefaults(defineProps<FormTextProps>(), {})
</script>

<template>
  <NText v-bind="props">
    {{ props.value }}
  </NText>
</template>
