<route lang="yaml">
meta:
  title: withdrawal
  leftArrow: true
  hideFooter: true
</route>

<script lang="ts" setup>
import { Toast } from 'vant'
import { bankDetail } from '/src/apis/mine'
import { withdrawal } from '/src/apis/home'
interface AddressItem {
  text: string
  value: string
  bankAccount: string
  ifsc: string
  id: number
}
type Filed = 'bankAccount' | 'ifsc'
const router = useRouter()
const bankList = ref<AddressItem[]>([])
const ifscList = ref<AddressItem[]>([])
const pickerFiled = ref<Filed>('bankAccount')
const form = reactive({
  amount: '',
  bankAccount: '',
  ifsc: '',
  googleCode: '',
})
const bankAccount = ref('')
const ifsc = ref('')

const isShowPicker = ref(false)
const columns = ref<AddressItem[]>([])

const isShowDialog = ref(false)

const toAddress = () => {
  isShowDialog.value = false
  router.push({
    path: '/address',
    query: {
      title: 'BANK',
    },
  })
}

const toOrder = () => {
  isShowDialog.value = false
  router.push({
    path: '/order',
    query: {
      title: 'Withdrawal Orders',
    },
  })
}

const onisShowPicker = (filed: Filed) => {
  if (filed === 'bankAccount' && bankList.value.length === 0) {
    isShowDialog.value = true
  }
  else if (filed === 'ifsc' && ifscList.value.length === 0) {
    isShowDialog.value = true
  }
  else {
    columns.value = filed === 'bankAccount' ? bankList.value : ifscList.value
    isShowPicker.value = true
    pickerFiled.value = filed
  }
}

const onConfirm = (res: AddressItem) => {
  console.log('🚀 ~ file: withdrawal.vue:70 ~ onConfirm ~ res:', res)
  isShowPicker.value = false

  form.bankAccount = res.bankAccount
  bankAccount.value = res.bankAccount
  form.ifsc = res.ifsc
  ifsc.value = res.ifsc
}

const onSubmit = (values: Request.Withdrawal) => {
  // const params = {
  //   ...values,
  //   bankAccount: bankAccount.value,
  //   ifsc: ifsc.value,
  // }

  withdrawal(values).then(() => {
    toOrder()
    Toast('rechange success')
  })
}

onMounted(() => {
  bankDetail({ pageSize: 1, pageNum: 999 }).then((res) => {
    console.log('🚀 ~ file: address.vue:13 ~ bankDetail ~ res:', res)
    bankList.value = res.records.map((record) => ({
      text: record.bankAccount || '',
      value: record.bankAccount || '',
      bankAccount: record.bankAccount || '',
      ifsc: record.ifsc || '',
      id: record.id,
    }))
    ifscList.value = res.records.map((record) => ({
      text: record.ifsc || '',
      value: record.ifsc || '',
      bankAccount: record.bankAccount || '',
      ifsc: record.ifsc || '',
      id: record.id,
    }))
  })
  // systemAddress().then((res) => {
  //   console.log('🚀 ~ file: recharge.vue:59 ~ ifsc ~ res:', res)
  //   ifscList.value = res.records.map((record) => ({
  //     text: record.address || '',
  //     value: record.id,
  //   }))
  // })
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
          v-model="form.bankAccount "
          readonly
          name="bankAccount"
          label="BankAccount"
          placeholder="Enter the bankAccount"
          :rules="[{ required: true, message: 'Please enter the bankAccount' }]"
          @click="onisShowPicker('bankAccount')"
        />
        <VanField
          v-model="form.ifsc"
          readonly
          name="ifsc"
          label="IFSC"
          placeholder="Enter the IFSC"
          :rules="[{ required: true, message: 'Please enter the IFSC' }]"
          @click="onisShowPicker('ifsc')"
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
    <section my-4 box-base rounded-0>
      <h3>Bind Google Code</h3>
      <hr my-2 />
      <p>1.lf there is no Google verification code bound, please go to the personal center tobind</p>
      <p>2. Be sure to carefully check whether the payment address is correct</p>
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
  </div>
</template>
