<route lang="yaml">
meta:
  title: order
  hideHeader: true
  hideFooter: true
</route>

<script lang="ts" setup>
import { capitalize, toMoney } from '@/utils'
import { rechargeHistory, totalDetail, withdrawalHistory } from '/src/apis/order'
const router = useRouter()
const route = useRoute()
const totalDetailData = ref({} as Response.TotalDetail)
const list = ref<Response.Record[]>([])
const loading = ref(false)
const finished = ref(false)
const pageNum = ref(1)
const pageSize = ref(10)
const total = ref(0)
const title = ref(String(route.query.title))

const showHeader = ref(false)
const showFooter = ref(true)
const tabs = [
  {
    title: 'Recharge Orders',
  },
  {
    title: 'Withdrawal Orders',
  },
]

const getList = () => {
  const detail = title.value === 'Recharge Orders' ? rechargeHistory : withdrawalHistory
  console.log('🚀 ~ file: address.vue:36 ~ getList ~ title.value:', title.value)
  detail({
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

const toDetail = (txnId: string) => {
  router.push({
    path: '/detail',
    query: {
      txnId,
    },
  })
}

onMounted(() => {
  totalDetail().then((res) => {
    totalDetailData.value = res
    console.log('🚀 ~ file: order.vue:66 ~ totalDetail ~ res:', res)
  })
  getList()
  showHeader.value = route.query.showHeader === '1'
  showFooter.value = route.query.showHeader !== '1'
})
</script>

<template>
  <VanNavBar
    v-if="showHeader"
    :title="title.split(' ')[0]"
    left-arrow
    @click-left="$router.go(-1)"
  />
  <div class="Order p-4 bg-gray-100 flex-1">
    <section v-if="showFooter" class="cash p-4 rounded-md bg-slate-600 color-white">
      <ul flex flex-wrap mt--4>
        <li class="basis-1\/2 mt-4">
          <p text-sm>
            Last 7 days Recharge
          </p>
          <p>{{ toMoney(totalDetailData.totalRechargeAmount, 1) }}</p>
        </li>
        <li class="basis-1\/2 mt-4">
          <p text-sm>
            Last 7 days Withdrawal
          </p>
          <p>{{ toMoney(totalDetailData.totalWithdrawalAmount, 2) }}</p>
        </li>
        <li class="basis-1\/2 mt-4">
          <p text-sm>
            Today Recharge
          </p>
          <p>{{ toMoney(totalDetailData.todayRechargeUsdt, 1) }}</p>
        </li>
        <li class="basis-1\/2 mt-4">
          <p text-sm>
            Today Withdrawa
          </p>
          <p>{{ toMoney(totalDetailData.todayWithdrawal, 2) }}</p>
        </li>
      </ul>
    </section>
    <section class="list box-base">
      <header v-if="showFooter" flex-justify>
        <p>Order List</p>
        <!-- <p><i i-material-symbols:play-circle-outline></i></p> -->
      </header>
      <VanTabs v-model:active="title" type="card" mt-4 pb-4 @change="getList">
        <VanTab v-for="tab in tabs" :key="tab.title" :name="tab.title" :title="tab.title">
          <VanList
            v-model:loading="loading"
            :finished="finished"
            finished-text=""
            @load="onLoad"
          >
            <ul v-if="list.length" flex flex-wrap mt-4 divide-y>
              <li></li>
              <li v-for="item in list" :key="item.id" py-4 w-full break-all>
                <template v-if="title === 'Recharge Orders'">
                  <!-- <p>Id: <span color-gray-4>{{ item.id }}</span></p>
                  <p>MyAddress: <span color-gray-4>{{ item.myAddress }}</span></p>
                  <p>SystemAddress: <span color-gray-4>{{ item.systemAddress }}</span></p>
                  <p>Amount: <span color-gray-4>{{ toMoney(Number(item.amount || 0)) }}</span></p>
                  <p>CreateTime: <span color-gray-4>{{ item.createTime }}</span></p> -->
                  <p v-for="(val, key) in item" :key="key">
                    {{ capitalize(key) }}:
                    <span color-gray-4>{{
                      key === 'amount' ? toMoney(Number(val)) : val || '--'
                    }}</span>
                  </p>
                </template>
                <template v-else>
                  <p>TnxId: <span color-gray-4>{{ item.txnId }}</span></p>
                  <p>BankAccount: <span color-gray-4>{{ item.bankAccount }}</span></p>
                  <p>IFSC: <span color-gray-4>{{ item.ifsc }}</span></p>
                  <p>OrderDesc: <span color-gray-4>{{ item.orderDesc || '--' }}</span></p>
                  <p>Amount: <span color-gray-4>{{ toMoney(Number(item.amount || 0), 2) }}</span></p>
                  <p>CreateTime: <span color-gray-4>{{ item.createTime }}</span></p>
                  <VanButton type="primary" block class="!mt-4" @click="toDetail(item.txnId || '')">
                    Detail
                  </VanButton>
                </template>
              </li>
              <li></li>
            </ul>
            <VanEmpty v-else description="no data" />
          </VanList>
        </VanTab>
      </VanTabs>
    </section>
    <div v-if="showFooter" h-50px></div>
  </div>
  <AppFooter v-if="showFooter" />
</template>
