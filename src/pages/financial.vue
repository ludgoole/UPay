<route lang="yaml">
meta:
  title: financial
  leftArrow: true
  hideFooter: true
  </route>

<script lang="ts" setup>
import { financiaList } from '/src/apis/mine'
import { capitalize, toMoney } from '@/utils'
const list = ref<Response.Record[]>([])
const loading = ref(false)
const finished = ref(false)
const pageNum = ref(1)
const pageSize = ref(10)
const total = ref(0)

// RECHARGE_TYPE("recharge", 0),
// WITHDRAWAL_TYPE("withdrawal", 1),
// PROFIT_TYPE("profit", 2),
// CHARGE_BACK("chargeback", 3),
// REFUND("refund", 4),
const types = ['recharge', 'withdrawal', 'profit', 'chargeback', 'refund']

const getList = () => {
  financiaList({
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

onMounted(() => {
  getList()
})
</script>

<template>
  <VanList
    v-model:loading="loading"
    flex-1
    px-4
    :finished="finished"
    finished-text=""
    @load="onLoad"
  >
    <ul v-if="list.length" flex flex-wrap divide-y>
      <li v-for="item in list" :key="item.id" py-4 w-full break-all>
        <p v-for="(val, key) in item" :key="key">
          {{ key === 'ifsc' ? 'IFSC' : capitalize(key) }}:
          <span color-gray-4>{{
            key === 'amount'
              ? toMoney(Number(val), [1, 2, 4].includes(item.type || 0) ? 2 : 1)
              : key === 'type' ? types[Number(val)] : val || '--'
          }}</span>
        </p>
      </li>
      <li></li>
    </ul>
    <VanEmpty v-else description="no data" />
  </VanList>
</template>
