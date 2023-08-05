<route lang="yaml">
meta:
  title: blank
  leftArrow: true
  # hideTitle: true
  hideFooter: true
  </route>

<script lang="ts" setup>
const active = ref(0)
</script>

<template>
  <div class="Blank px-4 bg-gray-1 flex-1">
    <section>
      <VanTabs v-model:active="active" type="card" mt-4>
        <VanTab title="USDT">
          <VanEmpty description="no data" />
        </VanTab>
        <VanTab title="BANK">
          内容 2
        </VanTab>
      </VanTabs>
    </section>
  </div>
</template>
