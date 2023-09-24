<route lang="yaml">
meta:
  title: Login
  hideHeader: true
  hideFooter: true
</route>

<script setup lang="ts">
import { Toast } from 'vant'
import { login } from '/src/apis/login'
import Cookies from 'js-cookie'
const router = useRouter()

// created
const title = 'Login to UPay'
const username = ref('')
const password = ref('')
const googleCode = ref('')

// method
const onSubmit = (values: Request.Login) => {
  login(values).then((res) => {
    console.log('🚀 ~ file: login.vue:32 ~ login ~ res:', res)
    Toast('login success!')
    Cookies.set('token', res.token, { expires: 1 })
    Cookies.set('bingCode', (res.bingCode || 0).toString(), { expires: 1 })

    router.push('/')
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
          name="googleCode"
          label="Google Code"
          placeholder="Google Code"
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
}
</style>
