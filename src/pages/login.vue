<route lang="yaml">
meta:
  title: Login
  hideHeader: true
  hideFooter: true
</route>

<script setup lang="ts">
import localforage from 'localforage'
import { Toast } from 'vant'
import { login } from '@/apis/login'
import type { REQ } from '@/apis/login/data'
const router = useRouter()

// created
const title = 'Login to UPay'
const username = ref('')
const password = ref('')
const googleCode = ref('')

// method
const onSubmit = (values: REQ.Login) => {
  login(values).then((res) => {
    console.log('🚀 ~ file: login.vue:32 ~ login ~ res:', res)
    if (res.code === 200) {
      Toast('login success!')
      localforage.setItem('Authorization', res.data.token)
      localforage.setItem('bingCode', res.data.bingCode)
      router.push('/')
    }
    else {
      Toast(res.message)
    }
  })
}
</script>

<template>
  <div class="Login flex-center bg-gray-1 px-8">
    <section class="container box-base bg-white">
      <h1 mt-4 text-2xl text-center>
        {{ title }}
      </h1>
      <VanForm @submit="onSubmit">
        <VanField
          v-model="username"
          name="clientName"
          label="Login Username"
          placeholder="Login Username"
          :rules="[{ required: true, message: 'Please enter username' }]"
        >
          <template #label>
            <i i-ic:baseline-person-outline></i>
            Login Username
          </template>
        </VanField>
        <VanField
          v-model="password"
          type="password"
          name="password"
          label="Login Password"
          placeholder="Login password"
          :rules="[{ required: true, message: 'Please enter password' }]"
        >
          <template #label>
            <i i-ic:outline-lock></i>
            Login Password
          </template>
        </VanField>
        <VanField
          v-model="googleCode"
          type="tel"
          name="googleCode"
          label="Google Code"
          placeholder="Google Code"
          :rules="[{ required: true, message: 'Please enter Google Code' }]"
        >
          <template #label>
            <i i-gg:keyboard></i>
            Google Code
          </template>
        </VanField>
        <div style="margin: 16px;">
          <VanButton block type="primary" native-type="submit">
            login
          </VanButton>
        </div>
      </VanForm>
      <p pr-4 text-right color-gray-4 @click="router.push('/sign')">
        Sign up
      </p>
    </section>
  </div>
</template>

<style lang="less">
.Login {
  .container {
    width: 80vw;
  }
  .van-field {
    flex-direction: column;
    &__label {
      width: 100%;
    }
  }
}
</style>
/src/apis/login/login
../apis/login../apis/login/login../apis/login
