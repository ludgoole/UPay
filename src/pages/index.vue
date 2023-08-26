<route lang="yaml">
meta:
  title: home
  hideHeader: true
</route>

<script lang="ts" setup>
import CountUp from 'vue-countup-v3'
import Cookies from 'js-cookie'
import { detail } from '/src/apis/home'
const usdtBalance = ref(0)
const rupeeBalance = ref(0)
const router = useRouter()
const bingCode = Cookies.get('bingCode')

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
  })
})
</script>

<template>
  <div class="Home p-4 bg-gray-1">
    <section class="cash p-4 rounded-md bg-slate-600 color-white">
      <header flex-justify>
        <div>
          <p>USDT Balance</p>
          <p>${{ usdtBalance.toFixed(2) }}</p>
        </div>
        <div>
          <p>Withdrawal Balance</p>
          <p>₹{{ rupeeBalance.toFixed(2) }}</p>
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
          Today's order income
        </p>
        <p py-2>
          USDT
        </p>
        <p>2.89 USDT</p>
      </div>
      <div w-1px bg-gray-1>
      </div>
      <div flex-1>
        <p text-sm>
          Today's team earnings
        </p>
        <p py-2>
          USDT
        </p>
        <p>0.89 USDT</p>
      </div>
    </section>
    <section class="notice box-base flex-justify">
      <p>Notice</p>
      <p>more <i i-gg:more-o></i></p>
    </section>

    <section class="info box-base">
      <header>More Information</header>
      <ul mt-2>
        <li flex-justify mt-2>
          <p>BTC<span text-sm>/USDT</span></p>
          <p>29293.23</p>
          <p class="Home-tag" flex border-base px-2 bg-green-1 border-green-2 color-green>
            +<CountUp :start-val="0.001" :end-val="0.564" :decimal-places="3" loop />
          </p>
        </li>
        <li flex-justify mt-4>
          <p>BTC<span text-sm>/USDT</span></p>
          <p>2293.23</p>
          <p class="Home-tag" flex border-base px-2 bg-red-1 border-red-2 color-red>
            +<CountUp :start-val="0.002" :end-val="1" :decimal-places="3" loop />
          </p>
        </li>
        <li flex-justify mt-4>
          <p>BTC<span text-sm>/USDT</span></p>
          <p>2923.23</p>
          <p class="Home-tag" flex border-base px-2 bg-blue-1 border-blue-2 color-blue>
            +<CountUp :start-val="0.005" :end-val="0.298" :decimal-places="3" loop />
          </p>
        </li>
      </ul>
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
