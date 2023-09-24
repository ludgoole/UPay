<script lang="ts" setup>
import { Toast } from 'vant'
import useClipboard from 'vue-clipboard3'
const props = withDefaults(defineProps<{
  text: string
}>(), {
  text: '',
})

const { toClipboard } = useClipboard()

const onCopy = () => {
  toClipboard(props.text).then(() => {
    Toast('copy success!')
  }).catch(() => {
    Toast('copy fail!')
  })
}
</script>

<template>
  <p @click="onCopy">
    <slot>
      {{ props.text }}
      <i translate-y--2px i-material-symbols:content-copy-outline></i>
    </slot>
  </p>
</template>
