import { computed, onMounted, ref, unref } from 'vue'
import { useToggle } from '@vueuse/core'
import { isBoolean } from 'lodash-es'

export function useLoad(props: any, config?: { init: boolean }) {
  const [loading, toggleLoading] = useToggle()

  const loadOptions = ref<any[]>([])
  const options = computed(() => {
    if (props.load)
      return unref(loadOptions)

    return props.options
  })

  async function load(params?: any) {
    if (!props.load)
      return

    try {
      toggleLoading(true)
      loadOptions.value = await props.load(params)
    }
    catch (err: any) {
      throw new Error(err)
    }
    finally {
      toggleLoading(false)
    }
  }

  onMounted(() => {
    (isBoolean(config?.init) ? config?.init : true) && load()
  })

  return {
    loading,
    toggleLoading,
    loadOptions,
    options,
    load,
  }
}
