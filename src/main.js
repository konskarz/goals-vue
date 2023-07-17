import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar, Notify } from 'quasar'
import VueApexCharts from 'vue3-apexcharts'
import { registerSW } from 'virtual:pwa-register'

import App from './App.vue'
import router from './router'

// https://vite-pwa-org.netlify.app/guide/auto-update.html#automatic-reload
registerSW({ immediate: true })

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(Quasar, { plugins: { Notify } })
app.use(VueApexCharts)

app.mount('#app')
