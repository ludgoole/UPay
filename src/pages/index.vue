<route lang="yaml">
meta:
  title: home
  hideHeader: true
</route>

<script lang="ts" setup>
import Cookies from 'js-cookie'
import { currentPrice, detail } from '/src/apis/home'
import { toMoney } from '@/utils'
const usdtBalance = ref(0)
const rupeeBalance = ref(0)
const todayRechargeUsdt = ref(0)
const todayWithdrawal = ref(0)
const router = useRouter()
const bingCode = Cookies.get('bingCode')
const desc = ref('')
const price = ref(0)

const toAuth = (type = 'recharge') => {
  console.log('🚀 ~ file: index.vue:17 ~ toAuth ~ bingCode:', bingCode)
  if (bingCode === '0')
    router.push('/auth')
  else
    router.push(type === 'recharge' ? '/recharge' : '/withdrawal')
}

onMounted(() => {
  detail().then((res) => {
    console.log('🚀 ~ file: index.vue:18 ~ detail ~ res:', res)
    usdtBalance.value = res.usdtBalance
    rupeeBalance.value = res.rupeeBalance
    todayRechargeUsdt.value = res.todayRechargeUsdt
    todayWithdrawal.value = res.todayWithdrawal
  })

  currentPrice().then((res) => {
    desc.value = res.desc
    price.value = res.price
  })
})
</script>

<template>
  <div class="Home p-4 bg-gray-1">
    <section class="cash p-4 rounded-md bg-slate-600 color-white">
      <header flex-justify>
        <div>
          <p>USDT Balance</p>
          <p>{{ toMoney(usdtBalance, 1) }}</p>
        </div>
        <div>
          <p>Withdrawal Balance</p>
          <p>{{ toMoney(rupeeBalance, 2) }}</p>
        </div>
      </header>

      <p flex text-center mt-8>
        <span flex-1 @click="toAuth('recharge')"><i i-material-symbols:download></i> Recharge</span>
        <span flex-1 @click="toAuth('withdrawal')"><i i-material-symbols:upload-rounded></i> Withdrawal</span>
      </p>
    </section>
    <section class="invite box-base">
      <img src="@/assets/images/invite.png" alt="" />
    </section>
    <section class="usdp box-base px-0 flex text-center color-slate-700">
      <div flex-1>
        <p text-sm>
          Today's recharge
        </p>
        <p pt-2>
          {{ toMoney(todayRechargeUsdt, 1) }}
        </p>
      </div>
      <div w-1px bg-gray-1>
      </div>
      <div flex-1>
        <p text-sm>
          Today's withdrawal
        </p>
        <p pt-2>
          {{ toMoney(todayWithdrawal, 2) }}
        </p>
      </div>
    </section>
    <section class="notice box-base flex-justify">
      <p>Notice</p>
      <p>more <i i-gg:more-o></i></p>
    </section>

    <section class="info box-base">
      <header>More Information</header>
      <p v-if="desc" flex-justify mt-2>
        {{ desc }}: <span color-gray-4>{{ toMoney(price, 2) }}</span>
      </p>
    </section>
  </div>
</template>

<style lang="less" scoped>
.Home {

  &-tag {
    line-height: 24px;
    font-size: 14px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
}
</style>
