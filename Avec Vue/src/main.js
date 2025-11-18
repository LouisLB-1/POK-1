import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'

const appState = reactive({
  compteur: 0
})

const app = createApp(App)
app.provide('appState', appState)
app.use(router)
app.mount('#app')
