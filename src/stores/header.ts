import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderStore = defineStore(
  'header-store',
  () => {
    const title = ref('首页')
    const showFooter = ref(true)

    return {
      title,
      showFooter,
    }
  },
  {
    persistedState: {
      persist: true,
      storage: sessionStorage,
    },
  })
