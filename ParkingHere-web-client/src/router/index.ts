import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/appModules/common/view/HomeView.vue'
import UserLoginView from '@/appModules/account/view/UserLoginView.vue'
import UserRegistrationView from '@/appModules/account/view/UserRegistrationView.vue'
import ParkingsView from '@/appModules/parking/view/ParkingsView.vue'
import { useUserLoginStore } from '@/appModules/account/store/UserLoginStore'

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
      component: UserLoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: UserRegistrationView
    },
    {
      path: '/parkings',
      name: 'parkings',
      component: ParkingsView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userLoginStore = useUserLoginStore()

  if (to.meta.requiresAuth) {
    if (userLoginStore.loggedIn) {
      next()
      return
    } else {
      next('/')
    }
  }
  next()
  return
})

export default router
