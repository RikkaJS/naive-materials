<script setup lang="ts">
import { NTreeSelect } from 'naive-ui'
import type { FormTreeSelectProps } from './interface'
import { useLoad } from './use-load'

defineOptions({
  name: 'RFormTreeSelect',
})

const props = withDefaults(defineProps<FormTreeSelectProps>(), {})

const { loading, options } = useLoad(props)
</script>

<template>
  <NTreeSelect
    v-bind="props"
    :loading="loading"
    :options="options"
  />
</template>
