<route lang="yaml">
meta:
  title: mine
  hideHeader: true
  </route>

<script lang="ts" setup>
import { generateQRCode } from '/src/apis/home'
import { Dialog } from 'vant'
interface Form {
  bankName: string
  firstName: string
  lastName: string
  account: string
  password: string
}

const router = useRouter()
const gridList = [
  {
    img: 'financial-flow.png',
    text: 'Financial Flow',
  },
  {
    img: 'withdrawal-record.png',
    text: 'Withdrawal Record',
  },
  {
    img: 'payment-history.png',
    text: 'Payment History',
  },
  {
    img: 'collection-history.png',
    text: 'Collection History',
  },
  {
    img: 'recharge-record.png',
    text: 'Recharge Record',
  },
  {
    img: 'profit.png',
    text: 'Profit',
  },
]

// Add Bank Card
const isShowForm = ref(false)
const form = reactive({
  bankName: '',
  firstName: '',
  lastName: '',
  account: '',
  password: '',
})
const type = ref<'password' | 'text'>('password')

// share to friends
const showShare = () => {
  generateQRCode().then((res) => {
    Dialog({
      title: 'share to friends',
      confirmButtonText: 'share',
      confirmButtonColor: '#3b82f6',
      message: () => h('div', {
        class: 'share flex-center flex-col ',
        innerHTML: `
          <img class="w-40%" crossorigin="anonymous" src="${`${res.qrUrl}.png`}" />
          <p class="text-left"><span class="font-bold">link:</span> ${res.secretKey}</p>
          <p class="text-left"><span class="font-bold">Invitation Code:</span> ${res.secretKey}</p>
        `,
      }),
    }).then(() => {
      // on close
    })
  })
}

const toAuth = () => {
  router.push('/auth')
}

const onSubmit = (v: Form) => {
  console.log('🚀 ~ file: mine.vue:45 ~ onSubmit ~ v:', v)
}
</script>

<template>
  <div class="Order p-4 bg-gray-100 color-gray-4">
    <header flex justify-end>
      <i i-material-symbols:share-outline @click="showShare"></i>
    </header>
    <section class="profile box-base flex items-center">
      <img src="@/assets/images/logo.png" alt="" />
      <ul ml-2>
        <li>Mobile: 180000000</li>
        <li>Invitation Code: 12</li>
        <li>UID: 11</li>
      </ul>
      <VanIcon ml-auto name="arrow" />
    </section>
    <section class="grid box-base">
      <ul flex flex-wrap mt--4 text-xs text-center>
        <li v-for="grid in gridList" :key="grid.text" class="basis-1\/3 mt-4">
          <p flex-center>
            <img w-10 :src="`/src/assets/images/${grid.img}`" alt="icon" />
          </p>
          <p>{{ grid.text }}</p>
        </li>
      </ul>
    </section>
    <section class="cell box-base p-0">
      <ul text-sm text-center divide-y>
        <li class="flex-justify items-center p-4">
          <p>
            <i i-ph:bag></i>
            Bind USDT
          </p>
          <VanIcon ml-auto name="arrow" />
        </li>
        <li class="flex-justify items-center p-4" @click="toAuth">
          <p>
            <i i-material-symbols:settings-outline></i>
            Google Auth
          </p>
          <VanIcon ml-auto name="arrow" />
        </li>
        <li class="flex-justify items-center p-4">
          <p>
            <i i-ant-design:team-outlined></i>
            My team
          </p>
          <VanIcon ml-auto name="arrow" />
        </li>
        <li class="flex-justify items-center p-4">
          <p>
            <i i-mdi:tag-outline></i>
            USDT Address List
          </p>
          <VanIcon ml-auto name="arrow" />
        </li>
        <li class="flex-justify items-center p-4" @click="isShowForm = true">
          <p>
            <i i-ri:bank-card-line></i>
            Bank Card List
          </p>
          <VanIcon ml-auto name="arrow" />
        </li>
        <li class="flex-justify items-center p-4">
          <p>
            <i i-ic:outline-lock></i>
            Password
          </p>
          <VanIcon ml-auto name="arrow" />
        </li>
        <li class="flex-justify items-center p-4">
          <p>
            <i i-ph:question></i>
            Help Center
          </p>
          <VanIcon ml-auto name="arrow" />
        </li>
      </ul>
    </section>
    <section mt-4>
      <VanButton type="primary" block>
        Sign Out
      </VanButton>
    </section>

    <VanActionSheet v-model:show="isShowForm" title="Add Bank Card">
      <VanForm @submit="onSubmit">
        <VanField
          v-model="form.bankName"
          name="bankName"
          label="Bank Name"
          placeholder="Enter the bank name"
          :rules="[{ required: true, message: 'Please enter the bank name' }]"
        />
        <VanField
          v-model="form.firstName"
          name="firstName"
          label="First Name"
          placeholder="Enter the first name"
          :rules="[{ required: true, message: 'Please enter the first name' }]"
        />
        <VanField
          v-model="form.lastName"
          name="lastName"
          label="Last name"
          placeholder="Enter the last name"
          :rules="[{ required: true, message: 'Please enter the last name' }]"
        />
        <VanField
          v-model="form.account"
          name="account"
          label="Account"
          placeholder="Enter the account"
          :rules="[{ required: true, message: 'Please enter the account' }]"
        />
        <VanField
          v-model="form.password"
          :type="type"
          name="password"
          label="Bank Card Password"
          placeholder="Enter the bank card password"
          :rules="[{ required: true, message: 'Please enter the bank card password' }]"
          :right-icon="type === 'text' ? 'closed-eye' : 'eye-o'"
          @click-right-icon="type = type === 'text' ? 'password' : 'text'"
        />
        <div style="margin: 16px;">
          <VanButton block type="primary" native-type="submit">
            submit
          </VanButton>
        </div>
      </VanForm>
    </VanActionSheet>
  </div>
</template>

  <style lang="less">
  .Order {
    --van-tabs-default-color: #3b82f6 !important;

    .van-tabs__nav--card {
      margin: 0;
    }
  }
  </style>
