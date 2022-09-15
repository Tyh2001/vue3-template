import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import FightingDesign from 'fighting-design'
import 'fighting-design/dist/index.css'

const app = createApp(App)
app.use(FightingDesign)
app.mount('#app')
