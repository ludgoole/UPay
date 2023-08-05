<script lang="ts" setup>
interface Prop {
  isLoading: boolean
}

const props = withDefaults(defineProps<Prop>(), {
  isLoading: true,
})
</script>

<template>
  <div v-if="props.isLoading" flex-1 flex flex-col justify-between my-8>
    <VanSkeleton v-for="n in 4" :key="n" title :row="3" />
  </div>
  <slot v-else></slot>
</template>
