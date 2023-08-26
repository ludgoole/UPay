<route lang="yaml">
meta:
  title: Sign up
  hideHeader: true
  hideFooter: true
</route>

<script setup lang="ts">
import { Toast } from 'vant'
import { register } from '/src/apis/login'
import Cookies from 'js-cookie'
const route = useRoute()
const router = useRouter()

// created
const username = ref('')
const phone = ref('')
const email = ref('')
const password = ref('')
const repeatPassword = ref('')
const paymentPassword = ref('')
const repeatPaymentPassword = ref('')
const inviteCode = ref((route.query.inviteCode as string) || '')
const type1 = ref<'password' | 'text'>('password')
const type2 = ref<'password' | 'text'>('password')
const type3 = ref<'password' | 'text'>('password')
const type4 = ref<'password' | 'text'>('password')

const validator = (repeatPassword: any) => {
  if (repeatPassword !== password.value)
    return 'repeatPassword is not equal with password'
}
const validatorPaymentPassword = (repeatPaymentPassword: any) => {
  if (repeatPaymentPassword !== paymentPassword.value)
    return 'repeatPaymentPassword is not equal with paymentPassword'
}
// method
const onSubmit = (values: Request.Register) => {
  register(values).then((res) => {
    console.log('🚀 ~ file: login.vue:32 ~ login ~ res:', res)
    Toast('register success!')
    Cookies.set('token', res.token, { expires: 1 })
    Cookies.set('bingCode', (res.bingCode || 0).toString(), { expires: 1 })

    router.push('/')
  })
}
</script>

<template>
  <div class="Sign flex-center bg-gray-1 px-8">
    <section class="container box-base bg-white py-1 mt-0">
      <VanForm @submit="onSubmit">
        <VanField
          v-model="username"
          name="clientName"
          label="Sign Username"
          placeholder="Sign Username"
          :rules="[{ required: true, message: 'Please enter username' }]"
        >
          <template #label>
            <i i-ic:baseline-person-outline></i>
            Sign Username
          </template>
        </VanField>
        <VanField
          v-model="phone"
          name="phone"
          type="tel"
          label="Mobile Number"
          placeholder="Mobile Number"
          :rules="[{ required: true, message: 'Please enter mobile number' }]"
        >
          <template #label>
            <i i-ph:phone></i>
            Mobile Number
          </template>
        </VanField>
        <VanField
          v-model="email"
          name="email"
          type="email"
          label="Sign Email"
          placeholder="Sign Email"
          :rules="[{ required: true, message: 'Please enter Sign Email' }]"
        >
          <template #label>
            <i i-ph:phone></i>
            Sign Email
          </template>
        </VanField>
        <VanField
          v-model="password"
          :type="type1"
          name="password"
          label="Sign Password"
          placeholder="Sign Password"
          :right-icon="type1 === 'text' ? 'closed-eye' : 'eye-o'"
          :rules="[{ required: true, message: 'Please enter password' }]"
          @click-right-icon="type1 = type1 === 'text' ? 'password' : 'text'"
        >
          <template #label>
            <i i-ic:outline-lock></i>
            Sign Password
          </template>
        </VanField>
        <VanField
          v-model="repeatPassword"
          :type="type2"
          name="confirmPassword"
          label="Repeat Sign Password"
          placeholder="Repeat Sign Password"
          :right-icon="type2 === 'text' ? 'closed-eye' : 'eye-o'"
          :rules="[{ required: true, message: 'Please enter password again' }, { validator }]"
          @click-right-icon="type2 = type2 === 'text' ? 'password' : 'text'"
        >
          <template #label>
            <i i-ic:outline-lock></i>
            Repeat Sign Password
          </template>
        </VanField>
        <VanField
          v-model="paymentPassword"
          :type="type3"
          name="paymentPassword"
          label="Payment Password"
          placeholder="Payment Password"
          :right-icon="type3 === 'text' ? 'closed-eye' : 'eye-o'"
          :rules="[{ required: true, message: 'Please enter password again' }]"
          @click-right-icon="type3 = type3 === 'text' ? 'password' : 'text'"
        >
          <template #label>
            <i i-ic:outline-lock></i>
            Payment Password
          </template>
        </VanField>
        <VanField
          v-model="repeatPaymentPassword"
          :type="type4"
          name="confirmPaymentPassword"
          label="Repeat Payment Password"
          placeholder="Repeat Payment Password"
          :right-icon="type4 === 'text' ? 'closed-eye' : 'eye-o'"
          :rules="[{ required: true, message: 'Please enter paymentPassword again' }, { validator: validatorPaymentPassword }]"
          @click-right-icon="type4 = type4 === 'text' ? 'password' : 'text'"
        >
          <template #label>
            <i i-ic:outline-lock></i>
            Repeat Payment Password
          </template>
        </VanField>
        <VanField
          v-model="inviteCode"
          name="inviteCode"
          label="Invite Code"
          placeholder="Invite Code"
          :rules="[{ required: true, message: 'Please enter Invite Code' }]"
        >
          <template #label>
            <i i-gg:keyboard></i>
            Invite Code
          </template>
        </VanField>
        <div style="margin: 16px;">
          <VanButton block type="primary" native-type="submit">
            Sign up
          </VanButton>
        </div>
      </VanForm>
      <p pr-4 text-right color-gray-4 @click="router.push('/login')">
        Login
      </p>
    </section>
  </div>
</template>

<style lang="less">
.Sign {
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
