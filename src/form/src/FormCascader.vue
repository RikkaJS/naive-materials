<script setup lang="ts">
import { NCascader } from 'naive-ui'
import type { FormCascaderProps } from './interface'
import { useLoad } from './use-load'
import FormSpin from './FormSpin.vue'

defineOptions({
  name: 'RFormCascader',
})

const props = withDefaults(defineProps<FormCascaderProps>(), {})

const { loading, options } = useLoad(props)
</script>

<template>
  <NCascader
    v-bind="props"
    :options="options"
  >
    <template
      v-if="loading"
      #arrow
    >
      <div class="r-cascader-arrow">
        <FormSpin :show="loading" />
      </div>
    </template>
  </NCascader>
</template>

<style lang="less" scoped>
.r-cascader-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
