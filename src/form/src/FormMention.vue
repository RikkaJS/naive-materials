<script setup lang="ts">
import { NMention } from 'naive-ui'
import type { FormMentionProps } from './interface'
import { useLoad } from './use-load'

defineOptions({
  name: 'RFormMention',
})

const props = withDefaults(defineProps<FormMentionProps>(), {})

const { loading, options, load } = useLoad(props, { init: false })

function handleSearch(pattern: string, prefix: string) {
  load({ pattern })
}
</script>

<template>
  <NMention
    v-bind="props"
    :loading="loading"
    :options="options"
    @search="handleSearch"
  />
</template>
