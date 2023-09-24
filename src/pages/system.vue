<route lang="yaml">
meta:
  title: system address
  leftArrow: true
  # hideTitle: true
  hideFooter: true
    </route>

<script lang="ts" setup>
import { systemAddressList } from '/src/apis/mine'
const list = ref<Response.Record[]>([])
const loading = ref(false)
const finished = ref(false)
const pageNum = ref(1)
const pageSize = ref(10)
const total = ref(0)

const getList = () => {
  systemAddressList({
    pageNum: pageNum.value,
    pageSize: pageSize.value,
  }).then((res) => {
    console.log('🚀 ~ file: address.vue:13 ~ addressDetail ~ res:', res)
    total.value = res.total
    list.value = res.records.map((v) => {
      return {
        ...v,
        checked: !!v.status,
      }
    })
  })
}

const onLoad = () => {
  console.log('🚀 ~ file: address.vue:57 ~ onLoad ~ pageNum:', pageNum)
  if (total.value > list.value.length) {
    pageNum.value++
    getList()
  }
  else {
    finished.value = true
  }
}

onMounted(() => {
  getList()
})
</script>

<template>
  <div class="Blank px-4 bg-gray-1 flex-1">
    <VanList
      v-model:loading="loading"
      :finished="finished"
      finished-text=""
      @load="onLoad"
    >
      <ul v-if="list.length" mt-4 color-gray-4 divide-y>
        <li></li>
        <li v-for="item in list" :key="item.id" py-4>
          <p>Id: {{ item.id }}</p>
          <AppCopy :text="item.address" />
          <p>Status: {{ item.status === 0 ? 'unactive' : 'active' }}</p>
          <p>CreateTime: {{ item.createTime }}</p>
        </li>
        <li></li>
      </ul>
      <VanEmpty v-else description="no data" />
    </VanList>
  </div>
</template>
