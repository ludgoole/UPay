<script lang="ts" setup>
// import { Toast } from 'vant'
import { menus } from '@/consts'
const router = useRouter()
const route = useRoute()
const active = ref('/')

watch(() => route.path, (path) => {
  active.value = path
}, { immediate: true })

const onChange = (path: string) => {
  router.push(path)
}
</script>

<template>
  <VanTabbar v-model="active" @change="onChange">
    <VanTabbarItem
      v-for="item in menus"
      :key="item.icon"
      :icon="item.icon"
      :name="item.path"
    >
      {{ item.name }}
    </VanTabbarItem>
  </VanTabbar>
</template>
