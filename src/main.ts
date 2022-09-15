import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import './style/index.scss'

import FightingDesign from 'fighting-design'
import 'fighting-design/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(FightingDesign)
app.mount('#app')
