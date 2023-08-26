<script lang="ts" setup>
interface Prop {
  show: boolean
  title: string
}

const props = withDefaults(defineProps<Prop>(), {
  show: false,
})
const emit = defineEmits(['cancel', 'confirm', 'update:show'])
const { show } = toRefs(props)

const close = () => {
  emit('update:show', false)
}

const onCancel = () => {
  close()
  emit('cancel')
}
const onConfirm = () => {
  close()
  emit('confirm')
}
</script>

<template>
  <VanOverlay :show="show" @click="close">
    <div class="wrapper flex-center" @click.stop>
      <div class="dialog pt-4 pt-3 relative">
        <header v-if="title" flex-center font-600 text-20px>
          {{ title }}
        </header>
        <section px-4 mt-4 mb-6>
          <slot></slot>
        </section>
        <footer flex-center text-center text-18px>
          <p flex-1 @click="onCancel">
            cancel
          </p>
          <div mx-2 class="line"></div>
          <p flex-1 color-primary @click="onConfirm">
            confirm
          </p>
        </footer>
      </div>
    </div>
  </VanOverlay>
</template>

<style lang="less" scoped>
.wrapper {
  height: 100vh;
  width: 100vw;
}

.dialog {
  border-radius: 16px;
  width: 320px;
  background-color: #fff;
}

footer {
  border-top: 1px solid var(--van-gray-3);
  .line {
    width: 1px;
    height: 48px;
    background: var(--van-gray-3);
  }
  p {
    line-height: 48px;
  }
}
</style>
