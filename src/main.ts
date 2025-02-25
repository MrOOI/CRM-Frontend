import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Import Vuetify CSS

const vuetify = createVuetify() // Initialize Vuetify
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$devtools = true
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.mount('#app')
