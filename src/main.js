import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import routes from './routes/router'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(routes)
app.mount('#app')