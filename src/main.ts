import { createApp } from 'vue'
import App from './App.vue'
import router from './modules/router.js'
import { createPinia } from 'pinia'
import 'element-plus/theme-chalk/index.css';

console.log(import.meta.env.VITE_APP_TITLE); // 输出：My App
console.log(import.meta.env.VITE_API_URL);   // 输出：https://api.example.com
const pinia = createPinia()

const app = createApp(App)
//app.config.devtools = true
app.use(pinia)
app.use(router)
app.mount('#app')
