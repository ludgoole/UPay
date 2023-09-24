<route lang="yaml">
meta:
  title: recharge
  leftArrow: true
  hideFooter: true
</route>

<script lang="ts" setup>
import { toMoney } from '@/utils'
import { addressDetail } from '/src/apis/mine'
import { recharge, systemAddress } from '/src/apis/home'
interface AddressItem {
  text: string
  value: number
}
type Filed = 'myAddress' | 'systemAddress'
const router = useRouter()
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

const isShowDialog = ref(false)
const isShowSubmit = ref(false)
const submitInfo = ref({} as Response.Recharge)

const clearFrom = () => {
  form.amount = ''
  form.myAddress = ''
  form.systemAddress = ''
  form.googleCode = ''
}

const toAddress = () => {
  isShowDialog.value = false
  router.push({
    path: '/address',
    query: {
      title: 'USDT',
    },
  })
}

const toOrder = () => {
  isShowDialog.value = false
  router.push({
    path: '/order',
    query: {
      title: 'Recharge Orders',
    },
  })
}

const onisShowPicker = (filed: Filed) => {
  if (filed === 'myAddress' && myAddressList.value.length === 0) {
    isShowDialog.value = true
  }
  else if (filed === 'systemAddress' && systemAddressList.value.length === 0) {
    isShowDialog.value = true
  }
  else {
    columns.value = filed === 'myAddress' ? myAddressList.value : systemAddressList.value
    isShowPicker.value = true
    pickerFiled.value = filed
  }
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

  recharge(params).then((res) => {
    console.log('🚀 ~ file: recharge.vue:92 ~ recharge ~ res:', res)
    clearFrom()
    isShowSubmit.value = true
    submitInfo.value = res
    // toOrder()
    // Toast('rechange success')
  })
}

onMounted(() => {
  addressDetail({ pageSize: 1, pageNum: 999 }).then((res) => {
    console.log('🚀 ~ file: address.vue:13 ~ addressDetail ~ res:', res)
    myAddressList.value = res.records.map((record) => ({
      text: record.address || '',
      value: record.id,
    }))
  })
  systemAddress().then((res) => {
    console.log('🚀 ~ file: recharge.vue:59 ~ systemAddress ~ res:', res)
    systemAddressList.value = res.records.map((record) => ({
      text: record.address || '',
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
          type="number"
          name="amount"
          label="Amount"
          placeholder="Enter the Amount"
          :rules="[{ required: true, message: 'Please enter the Amount' }]"
        />
        <VanField
          v-model="form.myAddress"
          readonly
          name="myAddressId"
          label="Address"
          placeholder="Enter my Address"
          :rules="[{ required: true, message: 'Please enter my Address' }]"
          @click="onisShowPicker('myAddress')"
        />
        <VanField
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
          >
            <template #option="option">
              <p v-if="pickerFiled === 'myAddress'">
                {{ option.text }}
              </p>
              <AppCopy v-else :text="option.text" />
            </template>
          </vanpicker>
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
    <section my-4 box-base rounded-0>
      <h3>Bind Google Code</h3>
      <hr my-2 />
      <p>1.lf there is no Google verification code bound, please go to the personal center tobind</p>
      <p>2. Be sure to carefully check whether thepayment address is correct</p>
      <p>3. Wrong payment address will result in failureto withdraw cash</p>
    </section>
    <AppDialog v-model:show="isShowDialog" title="Address">
      <div text-center>
        <p mb-2>
          no Address data
        </p>
        <VanButton type="primary" size="small" @click="toAddress">
          <p px-2>
            Add
          </p>
        </VanButton>
      </div>
    </AppDialog>
    <AppDialog v-model:show="isShowSubmit" title="Recharge" :need-cancel="false" @confirm="toOrder">
      <p>price: <span color-gray-4>{{ toMoney(Number(submitInfo.price || 0), 2) }}</span></p>
      <p>rupeeAmount: <span color-gray-4>{{ toMoney(Number(submitInfo.rupeeAmount || 0), 2) }}</span></p>
    </AppDialog>
  </div>
</template>
