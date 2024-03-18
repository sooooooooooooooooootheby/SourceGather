import '@/assets/css/main.scss'
import '@/assets/image/iconfont.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import i18n from '@/i18n/i18n.js'

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
