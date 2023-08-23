import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/appModules/common/view/HomeView.vue'
import UserLoginView from '@/appModules/account/view/UserLoginView.vue'
import ResetPassword from '@/appModules/account/view/ResetPassword.vue'
import ActivationView from '@/appModules/account/view/ActivationView.vue'
import UserRegistrationView from '@/appModules/account/view/UserRegistrationView.vue'
import ParkingsView from '@/appModules/parking/view/ParkingsView.vue'
import AddParkingView from '@/appModules/parking/view/AddParkingView.vue'
import AddSpotView from '@/appModules/parking/view/AddSpotView.vue'
import UserAccountManagementView from '@/appModules/account/view/UserAccountManagementView.vue'
import ParkingManagementView from '@/appModules/parking/view/ParkingManagementView.vue'
import ReservationManagementView from '@/appModules/reservation/view/ReservationManagementView.vue'
import ReservationAllParkingsManagementView from '@/appModules/reservation/view/ReservationAllParkingsManagementView.vue'
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
      path: '/account',
      name: 'userAccount',
      component: UserAccountManagementView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/reset-password',
      name: 'resetPassword',
      component: ResetPassword
    },
    {
      path: '/activation',
      name: 'activation',
      component: ActivationView
    },
    {
      path: '/account/parking',
      name: 'parkingManagement',
      component: ParkingManagementView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/account/parking/new',
      name: 'addParking',
      component: AddParkingView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/account/parking/:id/spot/new',
      name: 'addSpot',
      component: AddSpotView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/account/reservation',
      name: 'reservationManagement',
      component: ReservationManagementView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/parkings',
      name: 'parkings',
      component: ParkingsView
    },
    {
      path: '/parking/reservation',
      name: 'allParkingsReservationManagement',
      component: ReservationAllParkingsManagementView,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userLoginStore = useUserLoginStore()
  if (to.meta.requiresAuth) {
    if (userLoginStore.loggedIn) {
      userLoginStore.logOutUserWhenTokenExpired()
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
