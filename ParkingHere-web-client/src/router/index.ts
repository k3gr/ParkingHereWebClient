import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/appModules/common/view/HomeView.vue'
import LoginView from '@/appModules/user/view/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
