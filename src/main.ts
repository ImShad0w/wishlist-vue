import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import Router from "./router/router.ts"
import "@/assets/main.css"

const pinia = createPinia();
createApp(App).use(Router).use(pinia).mount('#app')
