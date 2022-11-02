import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Index from '@/views/Index.vue'
import AddGoodVue from '@/views/AddGood.vue'

const router = createRouter({
  history: createWebHashHistory(), // hash 模式
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/add',
    name: 'add',
    component: AddGoodVue
  }]
})

export default router