<route lang="yaml">
meta:
  title: password
  leftArrow: true
  # hideTitle: true
  hideFooter: true
    </route>

<script lang="ts" setup>
import { Toast } from 'vant'
import { router } from '../router'
import { modifyPassword } from '/src/apis/mine'
const tabs = [
  {
    title: 'login password',
    value: 1,
  },
  {
    title: 'payment password',
    value: 2,
  },
]

const passwordForm = reactive({
  newPassword: '',
  renewPassword: '',
  type: 1,
  googleCode: '',
})
const type = ref<'password' | 'text'>('password')
const type1 = ref<'password' | 'text'>('password')

const validator = (renewPassword: any) => {
  if (renewPassword !== passwordForm.newPassword)
    return 'renewPassword is not equal with newPassword'
}

const clear = () => {
  passwordForm.newPassword = ''
  passwordForm.renewPassword = ''
  passwordForm.googleCode = ''
}

const onChange = () => {
  clear()
}

const onModifyPasswordSubmit = () => {
  modifyPassword(passwordForm).then(() => {
    clear()
    Toast('modify success!')
    router.go(-1)
  })
}
</script>

<template>
  <div class="Blank px-4 bg-gray-1 flex-1">
    <section>
      <VanTabs v-model:active="passwordForm.type" type="card" mt-4 @change="onChange">
        <VanTab v-for="tab in tabs" :key="tab.title" :name="tab.value" :title="tab.title">
          <VanForm bg-white mt-4 py-4 box-base @submit="onModifyPasswordSubmit">
            <VanField
              v-model="passwordForm.newPassword"
              :type="type"
              name="newPassword"
              label="New Password"
              placeholder="Enter the new password"
              :rules="[{ required: true, message: 'Please enter the new password' }]"
              :right-icon="type === 'text' ? 'closed-eye' : 'eye-o'"
              @click-right-icon="type = type === 'text' ? 'password' : 'text'"
            >
              <template #label>
                <i i-ic:outline-lock></i>
                New Password
              </template>
            </VanField>
            <VanField
              v-model="passwordForm.renewPassword"
              mt-8
              :type="type1"
              name="renewPassword"
              label="Renew Password"
              placeholder="Enter the renew password"
              :rules="[{ required: true, message: 'Please enter the renew password' }, { validator }]"
              :right-icon="type1 === 'text' ? 'closed-eye' : 'eye-o'"
              @click-right-icon="type1 = type1 === 'text' ? 'password' : 'text'"
            >
              <template #label>
                <i i-ic:outline-lock></i>
                Renew Password
              </template>
            </VanField>
            <VanField
              v-model="passwordForm.googleCode"
              mt-8
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
            <div mt-16>
              <VanButton block type="primary" native-type="submit">
                submit
              </VanButton>
            </div>
          </VanForm>
        </VanTab>
      </VanTabs>
    </section>
  </div>
</template>
