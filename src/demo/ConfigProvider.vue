<script setup lang="ts">
import { NConfigProvider, darkTheme, zhCN, dateZhCN } from 'naive-ui'
import { useData } from 'vitepress'
import { computed, unref } from 'vue';

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
