// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Import Naive UI
import naive from 'naive-ui'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(naive)
app.use(router) // router

app.mount('#app')
