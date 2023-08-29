<route lang="yaml">
meta:
  title: address
  leftArrow: true
  # hideTitle: true
  hideFooter: true
  </route>

<script lang="ts" setup>
import { Toast } from 'vant'
import { addressDetail, addressSave, addressUpdate, bankDetail, bankSave } from '/src/apis/mine'
import { useHeaderStore } from '@/stores/header'
const { title: _title } = toRefs(useHeaderStore())
const route = useRoute()
const list = ref<Response.Record[]>([])
const loading = ref(false)
const finished = ref(false)
const pageNum = ref(1)
const pageSize = ref(10)
const total = ref(0)
const addressId = ref(0)
const title = ref(String(route.query.title))
const tabs = [
  {
    title: 'USDT',
  },
  {
    title: 'BANK',
  },
]
const isShowAddressForm = ref(false)
const addressType = ref('Add')
const addressForm = reactive({
  address: '',
  googleCode: '',
  beneName: '',
  account: '',
  ifsc: '',
})

const getList = () => {
  const detail = title.value === 'BANK' ? bankDetail : addressDetail
  console.log('🚀 ~ file: address.vue:36 ~ getList ~ title.value:', title.value)
  detail({
    pageNum: pageNum.value,
    pageSize: pageSize.value,
  }).then((res) => {
    console.log('🚀 ~ file: address.vue:13 ~ addressDetail ~ res:', res)
    total.value = res.total
    list.value = res.records.map((v) => {
      return {
        ...v,
        checked: !!v.status,
      }
    })
  })
}

const onLoad = () => {
  console.log('🚀 ~ file: address.vue:57 ~ onLoad ~ pageNum:', pageNum)
  if (total.value > list.value.length) {
    pageNum.value++
    getList()
  }
  else {
    finished.value = true
  }
}

const clear = () => {
  addressForm.address = ''
  addressForm.googleCode = ''
  addressForm.beneName = ''
  addressForm.account = ''
  addressForm.ifsc = ''
}

const onAdd = () => {
  clear()
  addressType.value = 'Add'
  isShowAddressForm.value = true
}
const onEdit = (item: Response.Record) => {
  addressId.value = item.id
  addressType.value = 'Edit'
  addressForm.address = item.address as string
  addressForm.googleCode = ''

  isShowAddressForm.value = true
}
const onSubmit = (values: Request.AddressSave & Request.BankSave) => {
  const add = title.value === 'BANK' ? bankSave : addressSave
  const submit = addressType.value === 'Add' ? add(values) : addressUpdate({ ...values, addressId: addressId.value })

  if (title.value === 'BANK')
    console.log('🚀 ~ file: address.vue:62 ~ onSubmit ~ values:', values)

  submit.then(() => {
    isShowAddressForm.value = false
    Toast(addressType.value === 'Add' ? 'add success' : 'update success')
    getList()
  })
}

watch(title, () => {
  _title.value = title.value === 'BANK' ? 'bankAccount' : 'address'
})

// const onChange = (item: Response.Record) => {
//   addressStatus({
//     addressId: item.id,
//     status: item.status === 0 ? 1 : 0,
//   }).then(() => {
//     Toast('change status success')
//     getList()
//   }).catch(() => {
//     total.value = 0
//     list.value = []
//   })
// }

onMounted(() => {
  getList()
})
</script>

<template>
  <div class="Blank px-4 bg-gray-1 flex-1">
    <section>
      <VanTabs v-model:active="title" type="card" mt-4 pb-4 @change="getList">
        <VanTab v-for="tab in tabs" :key="tab.title" :name="tab.title" :title="tab.title">
          <VanList
            v-model:loading="loading"
            :finished="finished"
            finished-text=""
            @load="onLoad"
          >
            <ul v-if="list.length" mt-4 color-gray-4 divide-y>
              <li></li>
              <li v-for="item in list" :key="item.id" py-4>
                <p>Id: {{ item.id }}</p>
                <template v-if="title === 'USDT'">
                  <p>Address: {{ item.address }}</p>
                </template>
                <template v-else>
                  <p>BankAccount: {{ item.bankAccount }}</p>
                  <p>BeneName: {{ item.beneName }}</p>
                  <p>IFSC: {{ item.ifsc }}</p>
                </template>
                <p flex-middle flex-justify>
                  <span flex-middle>
                    <!-- Status: <VanSwitch v-model="item.checked" size="16" inactive-color="#dcdee0" ml-2 @change="onChange(item)" /> -->
                    Status: {{ item.status === 0 ? 'unactive' : 'active' }}
                  </span>
                  <VanButton type="primary" round size="small" class="!px-4" @click="onEdit(item)">
                    edit
                  </VanButton>
                </p>
                <p>CreateTime: {{ item.createTime }}</p>
              </li>
              <li></li>
            </ul>
            <VanEmpty v-else description="no data" />
          </VanList>
          <VanButton type="primary" block @click="onAdd">
            add
          </VanButton>
        </VanTab>
      </VanTabs>
    </section>
  </div>

  <VanActionSheet v-model:show="isShowAddressForm" :title="`${addressType} ${title}`">
    <VanForm @submit="onSubmit">
      <template v-if="title === 'USDT'">
        <VanField
          v-model="addressForm.address"
          name="address"
          label="Address"
          placeholder="Enter the address"
          :rules="[{ required: true, message: 'Please enter the Address' }]"
        />
        <VanField
          v-model="addressForm.googleCode"
          name="googleCode"
          label="Google Code"
          placeholder="Enter the Google Code"
          :rules="[{ required: true, message: 'Please enter Google Code' }]"
        />
      </template>
      <template v-else>
        <VanField
          v-model="addressForm.beneName"
          name="beneName"
          label="Bene Name"
          placeholder="Enter the bene name"
          :rules="[{ required: true, message: 'Please enter the bene name' }]"
        />
        <VanField
          v-model="addressForm.account"
          name="bankAccount"
          label="Bank Account"
          placeholder="Enter the account"
          :rules="[{ required: true, message: 'Please enter the account' }]"
        />
        <VanField
          v-model="addressForm.ifsc"
          name="ifsc"
          label="IFSC"
          placeholder="Enter the ifsc"
          :rules="[{ required: true, message: 'Please enter the ifsc' }]"
        />
      </template>

      <div style="margin: 16px;" pb-4>
        <VanButton block type="primary" native-type="submit">
          submit
        </VanButton>
      </div>
    </VanForm>
  </VanActionSheet>
</template>
