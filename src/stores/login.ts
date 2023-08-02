import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useLoginStore = defineStore(
  'login-store',
  () => {
    const token = ref('')
    const bingCode = ref(0)
    const userInfo = ref({})

    return {
      token,
      bingCode,
      userInfo,
    }
  },
  {
    persistedState: {
      persist: true,
      storage: localStorage,
    },
  })
