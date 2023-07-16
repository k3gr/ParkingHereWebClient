import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/appModules/common/view/HomeView.vue'
import UserLoginView from '@/appModules/account/view/UserLoginView.vue'
import UserRegistrationView from '@/appModules/account/view/UserRegistrationView.vue'

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
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   var userRegistrationStore = useUserRegistrationStore()

//   if (to.meta.requiresAuth) {
//     if (userRegistrationStore.loggedIn) {
//       next()
//     } else {
//       next({ name: 'login' })
//     }
//   } else {
//     next()
//   }
// })

export default router
