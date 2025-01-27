import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useToolLandscapeStore } from './stores/toolLandscape'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// initialize the store
const toolLandscapeStore = useToolLandscapeStore()
toolLandscapeStore.initializeFromYaml()

app.mount('#app')
