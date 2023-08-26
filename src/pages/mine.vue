<route lang="yaml">
meta:
  title: mine
  hideHeader: true
  </route>

<script lang="ts" setup>
import { generateQRCode } from '/src/apis/home'
import { getUserInfo } from '/src/apis/mine'
import { Dialog, Toast } from 'vant'
import financial from '@/assets/images/financial-flow.png'
import withdrawal from '@/assets/images/withdrawal-record.png'
import payment from '@/assets/images/payment-history.png'
// import collection from '@/assets/images/collection-history.png'
// import recharge from '@/assets/images/recharge-record.png'
import profit from '@/assets/images/profit.png'
import useClipboard from 'vue-clipboard3'

interface Form {
  bankName: string
  firstName: string
  lastName: string
  account: string
  password: string
}
const { toClipboard } = useClipboard()
const router = useRouter()
const userInfo = ref({} as Response.UserInfo)
const gridList = [
  {
    img: financial,
    text: 'Financial Flow',
  },
  {
    img: profit,
    text: 'Profit',
  },
  {
    img: withdrawal,
    text: 'Withdrawal Record',
  },
  {
    img: payment,
    text: 'Payment History',
  },
  // {
  //   img: collection,
  //   text: 'Collection History',
  // },
  // {
  //   img: recharge,
  //   text: 'Recharge Record',
  // },
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
          <img class="w-40%" crossorigin="anonymous" src="${`${res.imgBase64}.png`}" />
          <p class="text-left"><span class="font-bold">link:</span> ${res.secretKey}</p>
          <p class="text-left"><span class="font-bold">Invitation Code:</span> ${res.secretKey}</p>
        `,
      }),
    }).then(() => {
      // on close
    })
  })
}

getUserInfo().then((res) => {
  console.log('🚀 ~ file: mine.vue:86 ~ constgetUserInfo ~ res:', res)
  if (res)
    userInfo.value = res
})

window.onCopy = (text: string) => {
  toClipboard(text).then(() => {
    Toast('copy success!')
  }).catch(() => {
    Toast('copy fail!')
  })
}

// userId: number
//     username: string
//     mobileNo: string
//     inviteCode: string
//     bindCode: number

// UserInfo
const showUserInfo = () => {
  Dialog({
    title: 'UserInfo',
    confirmButtonText: 'confirm',
    confirmButtonColor: '#3b82f6',
    message: () => h('div', {
      class: 'flex-center flex-col ',
      innerHTML: `
        <ul ml-2 text-left>
          <li>UserId: ${userInfo.value.userId} </li>
          <li>Username: ${userInfo.value.username}</li>
          <li>Mobile: ${userInfo.value.mobileNo}</li>
          <li onclick="onCopy('${userInfo.value.inviteCode}')">Invitation Code: ${userInfo.value.inviteCode} <i translate-y--2px i-material-symbols:content-copy-outline></i></li>
          <li>BindCode: ${userInfo.value.bindCode === 1 ? 'bound' : 'unbound'}</li>
        </ul>
        `,
    }),
  }).then(() => {
    // on close
  })
}

const toAddress = (title: string) => {
  router.push({
    path: '/address',
    query: {
      title,
    },
  })
}

const toAuth = () => {
  router.push('/auth')
}
const toPassword = () => {
  router.push('/password')
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
      <img w-16 src="@/assets/images/logo.png" alt="" />
      <ul ml-2>
        <li>Mobile: {{ userInfo.mobileNo }}</li>
        <li>Invitation Code: {{ userInfo.inviteCode }}</li>
        <li>UID: {{ userInfo.userId }}</li>
      </ul>
      <VanIcon ml-auto name="arrow" @click="showUserInfo" />
    </section>
    <section class="grid box-base">
      <ul flex flex-wrap mt--4 text-xs text-center>
        <li v-for="grid in gridList" :key="grid.text" class="basis-1\/2 mt-4">
          <p flex-center>
            <img w-10 :src="grid.img" alt="icon" />
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
        <li class="flex-justify items-center p-4" @click="toAddress('USDT')">
          <p>
            <i i-mdi:tag-outline></i>
            USDT Address List
          </p>
          <VanIcon ml-auto name="arrow" />
        </li>
        <li class="flex-justify items-center p-4" @click="toAddress('BANK')">
          <p>
            <i i-ri:bank-card-line></i>
            Bank Card List
          </p>
          <VanIcon ml-auto name="arrow" />
        </li>
        <li class="flex-justify items-center p-4" @click="toPassword">
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
