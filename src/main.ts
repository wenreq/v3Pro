import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
// ts Notice: This is error message; it is must configure the tsconfig file "baseUrl" and "paths" properties
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.mount('#app')
