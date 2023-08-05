<route lang="yaml">
meta:
  title: address
  leftArrow: true
  # hideTitle: true
  hideFooter: true
  </route>

<script lang="ts" setup>
import { Toast } from 'vant'
import { addressDetail, addressSave, addressStatus, addressUpdate } from '/src/apis/mine'

const list = ref<Response.Record[]>([])
const addressId = ref(0)
const active = ref(0)

// Add address
const type = ref('Add')
const isShowAddressForm = ref(false)
const addressForm = reactive({
  address: '',
  googleCode: '',
})

const getList = () => {
  addressDetail().then((res) => {
    console.log('🚀 ~ file: address.vue:13 ~ addressDetail ~ res:', res)
    list.value = res.records.map((v) => {
      return {
        ...v,
        checked: !!v.status,
      }
    })
  })
}

const onAdd = () => {
  type.value = 'Add'
  isShowAddressForm.value = true
}
const onEdit = (item: Response.Record) => {
  addressId.value = item.id
  type.value = 'Edit'
  addressForm.address = item.address
  addressForm.googleCode = ''

  isShowAddressForm.value = true
}
const onSubmit = (values: Request.AddressSave) => {
  const submit = type.value === 'Add' ? addressSave(values) : addressUpdate({ ...values, addressId: addressId.value })
  submit.then(() => {
    isShowAddressForm.value = false
    Toast(type.value === 'Add' ? 'add success' : 'update success')
    getList()
  })
}
const onChange = (item: Response.Record) => {
  addressStatus({
    addressId: item.id,
    status: item.status === 0 ? 1 : 0,
  }).then(() => {
    Toast('change status success')
    getList()
  })
}

onMounted(() => {
  getList()
})
</script>

<template>
  <div class="Blank px-4 bg-gray-1 flex-1">
    <section>
      <VanTabs v-model:active="active" type="card" mt-4>
        <VanTab title="USDT">
          <ul v-if="list.length" mt-4 color-gray-4 divide-y>
            <li></li>
            <li v-for="item in list" :key="item.id" py-4>
              <p>Id: {{ item.id }}</p>
              <p>Address: {{ item.address }}</p>
              <p flex-middle flex-justify>
                <span>
                  Status: <VanSwitch v-model="item.checked" size="16" inactive-color="#dcdee0" ml-2 @change="onChange(item)" />
                </span>
                <VanButton type="primary" size="mini" class="!px-2" @click="onEdit(item)">
                  edit
                </VanButton>
              </p>
              <p>CreateTime: {{ item.createTime }}</p>
            </li>
            <li></li>
          </ul>
          <VanEmpty v-else description="no data" />
          <VanButton type="primary" block @click="onAdd">
            add
          </VanButton>
        </VanTab>
        <VanTab title="BANK">
          内容 2
        </VanTab>
      </VanTabs>
    </section>
  </div>

  <VanActionSheet v-model:show="isShowAddressForm" :title="`${type} USDT`">
    <VanForm @submit="onSubmit">
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

      <div style="margin: 16px;">
        <VanButton block type="primary" native-type="submit">
          submit
        </VanButton>
      </div>
    </VanForm>
  </VanActionSheet>
</template>
