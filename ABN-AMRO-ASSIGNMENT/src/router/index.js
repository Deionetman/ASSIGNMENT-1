import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '../pages/DashBoard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard
    }
  ]
})

export default router
