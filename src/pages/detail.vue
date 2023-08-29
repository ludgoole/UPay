<route lang="yaml">
meta:
  title: detail
  hideHeader: true
  hideFooter: true
  </route>

<script lang="ts" setup>
import { orderDetail } from '/src/apis/order'
import { capitalize, toMoney } from '@/utils'
const router = useRouter()
const route = useRoute()
const list = ref<Response.Record[]>([])
const loading = ref(false)
const finished = ref(false)
const pageNum = ref(1)
const pageSize = ref(10)
const total = ref(0)
const txnId = String(route.query.txnId)

const getList = () => {
  orderDetail({
    txnId,
    pageNum: pageNum.value,
    pageSize: pageSize.value,
  }).then((res) => {
    console.log('🚀 ~ file: address.vue:13 ~ addressDetail ~ res:', res)
    total.value = res.total
    list.value = res.records
  }).catch(() => {
    total.value = 0
    list.value = []
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

const toOrder = () => {
  router.push({
    path: '/order',
    query: {
      title: 'Withdrawal Orders',
    },
  })
}

onMounted(() => {
  getList()
})
</script>

<template>
  <VanNavBar
    title="detail"
    left-arrow
    @click-left="toOrder"
  />
  <VanList
    v-model:loading="loading"
    flex-1
    px-4
    :finished="finished"
    finished-text=""
    @load="onLoad"
  >
    <ul v-if="list.length" flex flex-wrap divide-y>
      <li v-for="item in list" :key="item.id" py-4 w-full>
        <p v-for="(val, key) in item" :key="key">
          {{ key === 'ifsc' ? 'IFSC' : capitalize(key) }}:
          <span color-gray-4>{{
            key === 'amount' ? toMoney(Number(val), 2) : val || '--'
          }}</span>
        </p>
      </li>
      <li></li>
    </ul>
    <VanEmpty v-else description="no data" />
  </VanList>
</template>
