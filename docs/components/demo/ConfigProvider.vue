<script setup lang="ts">
import { useData } from 'vitepress'
import { computed, unref } from 'vue'
import { NConfigProvider, darkTheme, dateZhCN, zhCN } from 'naive-ui'

const { isDark } = useData()
const theme = computed(() => {
  return (unref(isDark) ? darkTheme : null)
})
</script>

<template>
  <NConfigProvider
    :theme="theme"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <slot />
  </NConfigProvider>
</template>
