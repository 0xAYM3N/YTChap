import { createRouter, createWebHistory } from 'vue-router'

import Home from '../Pages/Home.vue'
import YTChap from '../Pages/YTChap.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/ytchap', component: YTChap }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
