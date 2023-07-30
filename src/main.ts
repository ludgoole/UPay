import 'uno.css'
import '/src/assets/styles/reset.css'
import '/src/assets/styles/main.css'
import '/src/assets/styles/vant.less'
import '/src/assets/styles/vant.component'

import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import mitt from 'mitt'
import { store } from './stores'
import { router } from './router'
import App from './App.vue'

const head = createHead()

const emitter = mitt()

createApp(App)
  .use(head)
  .use(router)
  .use(store)
  .provide('emitter', emitter)
  .mount('#app')
