<script setup lang="ts">
import { computed, inject } from 'vue'
import { ContainerComponent } from './component'
import type { FormContainerProps, FormContainerType } from './interface'
import { formGridInjectionKey } from './config'
import FormGrid from './FormGrid.vue'

defineOptions({
  name: 'RFormContainer',
})

const props = withDefaults(defineProps<FormContainerProps>(), {})

const { gridProps } = inject(formGridInjectionKey)!

const component = computed(() => ContainerComponent.get((props.name) as FormContainerType))
</script>

<template>
  <Component
    :is="component"
    v-bind="props.props"
    :items="items"
    class="r-form-container"
  >
    <template
      v-for="(slot, key) in slots"
      :key="key"
      #[key]="slotProps"
    >
      <Component
        :is="slot"
        v-bind="slotProps"
      />
    </template>

    <FormGrid
      v-if="!slots?.default && items && items.length"
      :grid-props="gridProps"
      :items="items"
    />
  </Component>
</template>

<style lang="less" scoped>
.r-form-container {
  width: 100%;
}
</style>
