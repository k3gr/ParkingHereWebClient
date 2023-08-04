import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/appModules/common/view/HomeView.vue'
import UserLoginView from '@/appModules/account/view/UserLoginView.vue'
import UserRegistrationView from '@/appModules/account/view/UserRegistrationView.vue'
import ParkingsView from '@/appModules/parking/view/ParkingsView.vue'
import AddParkingView from '@/appModules/parking/view/AddParkingView.vue'
import UserAccountManagementView from '@/appModules/account/view/UserAccountManagementView.vue'
import ParkingManagementView from '@/appModules/parking/view/ParkingManagementView.vue'
import ReservationManagementView from '@/appModules/reservation/view/ReservationManagementView.vue'
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
    },
    {
      path: '/account',
      name: 'userAccount',
      component: UserAccountManagementView
    },
    {
      path: '/account/parking',
      name: 'parkingManagement',
      component: ParkingManagementView
    },
    {
      path: '/account/parking/new',
      name: 'addParking',
      component: AddParkingView
    },
    {
      path: '/account/reservation',
      name: 'reservationManagement',
      component: ReservationManagementView
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
