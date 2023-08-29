<script lang="ts" setup>
import { useHeaderStore } from '@/stores/header'
const route = useRoute()
const isShowHeader = ref(false)
const isShowFooter = ref(false)
const isLoading = ref(true)

const { showFooter } = toRefs(useHeaderStore())

watch(() => route.meta, (meta) => {
  isShowHeader.value = !meta.hideHeader as boolean
  isShowFooter.value = !meta.hideFooter as boolean
})

onMounted(() => {
  isLoading.value = false
})
</script>

<template>
  <div flex="~ col" justify-between w-100vw h-100vh>
    <AppHeader v-if="isShowHeader" />
    <AppSkeleton :is-loading="isLoading">
      <RouterView class="RouterView" flex-1 overflow-auto />
    </AppSkeleton>
    <AppFooter v-if="showFooter && isShowFooter" />
  </div>
</template>
