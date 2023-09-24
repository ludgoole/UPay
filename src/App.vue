<script lang="ts" setup>
const route = useRoute()
const isShowHeader = ref(false)
const isShowFooter = ref(false)
const isLoading = ref(true)

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
      <div v-if="isShowFooter" h-50px></div>
    </AppSkeleton>
    <AppFooter v-if="isShowFooter" />
  </div>
</template>
