import BasicLayout from '@/layouts/BasicLayout.vue'
import Analysis from '@/views/dashboard/Analysis.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: BasicLayout,
      children: [{ path: '/dashboard', component: Analysis }]
    }
  ]
})

export default router
