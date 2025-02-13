import './assets/style.scss'
import axios from "axios";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// @ts-ignore
import App from './App.vue'
import router from './router'
axios.defaults.baseURL = 'https://api.rmmbr.io/';
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
