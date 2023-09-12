<script setup lang="ts">
import { NSelect } from 'naive-ui'
import type { FormSelectProps } from './interface'
import { useLoad } from './use-load'

defineOptions({
  name: 'RFormSelect',
})

const props = withDefaults(defineProps<FormSelectProps>(), {})

const { loading, options } = useLoad(props)
</script>

<template>
  <NSelect
    v-bind="props"
    :loading="loading"
    :options="options"
  />
</template>
