<route lang="yaml">
meta:
  title: recharge
  leftArrow: true
  hideFooter: true
</route>

<!--
  USDT Type
  Select a USDT node
  TRC-20
  Enter the TRC-20 Payment Address
  Verification Code
  Enter Google Verification Code
  You haven't bound GoogleAuthenticator
  To Bind

-->

<script lang="ts" setup>
import { Toast } from 'vant'
import { addressDetail } from '/src/apis/mine'
import { recharge, systemAddress } from '/src/apis/home'
interface AddressItem {
  text: string
  value: number
}
type Filed = 'myAddress' | 'systemAddress'

const myAddressList = ref<AddressItem[]>([])
const systemAddressList = ref<AddressItem[]>([])
const pickerFiled = ref<Filed>('myAddress')
const form = reactive({
  amount: '',
  myAddress: '',
  systemAddress: '',
  googleCode: '',
})
const myAddressId = ref(0)
const systemAddressId = ref(0)

const isShowPicker = ref(false)
const columns = ref<AddressItem[]>([])

const onisShowPicker = (filed: Filed) => {
  columns.value = filed === 'myAddress' ? myAddressList.value : systemAddressList.value
  isShowPicker.value = true
  pickerFiled.value = filed
}

const onConfirm = (res: AddressItem) => {
  isShowPicker.value = false

  if (pickerFiled.value === 'myAddress') {
    form.myAddress = res.text
    myAddressId.value = res.value
  }
  else {
    form.systemAddress = res.text
    systemAddressId.value = res.value
  }
}

const onSubmit = (values: Request.Recharge) => {
  const params = {
    ...values,
    myAddressId: myAddressId.value,
    systemAddressId: systemAddressId.value,
  }

  recharge(params).then(() => {
    Toast('rechange success')
  })
}

onMounted(() => {
  addressDetail().then((res) => {
    console.log('🚀 ~ file: address.vue:13 ~ addressDetail ~ res:', res)
    myAddressList.value = res.records.map((record) => ({
      text: record.address,
      value: record.id,
    }))
  })
  systemAddress().then((res) => {
    console.log('🚀 ~ file: recharge.vue:59 ~ systemAddress ~ res:', res)
    systemAddressList.value = res.records.map((record) => ({
      text: record.address,
      value: record.id,
    }))
  })
})
</script>

<template>
  <div class="Auth p-4 bg-gray-1 flex-1">
    <section my-4>
      <VanForm @submit="onSubmit">
        <VanField
          v-model="form.amount"
          name="amount"
          label="Amount"
          placeholder="Enter the Amount"
          :rules="[{ required: true, message: 'Please enter the Amount' }]"
        />
        <VanField
          v-if="myAddressList.length"
          v-model="form.myAddress"
          readonly
          name="myAddressId"
          label="Address"
          placeholder="Enter my Address"
          :rules="[{ required: true, message: 'Please enter my Address' }]"
          @click="onisShowPicker('myAddress')"
        />
        <VanField
          v-if="systemAddressList.length"
          v-model="form.systemAddress"
          readonly
          name="systemAddressId"
          label="SystemAddress"
          placeholder="Enter the System Address"
          :rules="[{ required: true, message: 'Please enter the System Address' }]"
          @click="onisShowPicker('systemAddress')"
        />
        <VanPopup v-model:show="isShowPicker" position="bottom">
          <VanPicker
            :columns="columns"
            @confirm="onConfirm"
            @cancel="isShowPicker = false"
          />
        </VanPopup>

        <VanField
          v-model="form.googleCode"
          name="googleCode"
          label="Google Code"
          placeholder="Enter the Google Code"
          :rules="[{ required: true, message: 'Please enter Google Code' }]"
        />

        <div mt-4>
          <VanButton block type="primary" native-type="submit">
            submit
          </VanButton>
        </div>
      </VanForm>
    </section>
    <section my-4>
      <p>1.lf there is no Google verification codebound, please go to the personal center tobind</p>
      <p>2. Be sure to carefully check whether thepayment address is correct</p>
      <p>3. Wrong payment address will result in failureto withdraw cash</p>
    </section>
  </div>
</template>
