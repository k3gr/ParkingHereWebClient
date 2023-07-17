import { defineStore } from 'pinia'
import UserService from '../domain/service/UserService'
import useParams from '@/appModules/common/composable/Params'
import UserLoginDTO from '../domain/dto/UserLogin'
import ClientTokenDTO from '../domain/dto/ClientToken'
import { useRouter } from 'vue-router'

const service = new UserService()
const params = useParams()

export const useUserLoginStore = defineStore({
  id: 'userLoginStore',
  state: () => ({
    userLoginDto: new UserLoginDTO(),
    loggedIn: (service.getUserFromLocalStorage() ? true : false) as boolean,
    router: useRouter()
  }),
  getters: {
    getUserLogin: (state) => state.userLoginDto,
    getUserFullName() {
      if (this.loggedIn) {
        return (
          service.getUserFromLocalStorage().firstName +
          ' ' +
          service.getUserFromLocalStorage().lastName
        )
      }
      return null
    },
    isLoggedIn: (state) => state.loggedIn,
    getParams: () => params
  },
  actions: {
    async userSignIn() {
      params.isLoading.value = true

      service
        .signIn(this.userLoginDto)
        .then(
          (success) => {
            if (success.status === 200) {
              const clientToken = new ClientTokenDTO(success.data)
              service.setUserToLocalStorage(clientToken)
              this.loggedIn = true
              this.userLoginDto = new UserLoginDTO()
              this.router.push('/')
            }
          },
          (error) => {
            if (error.response) {
              if (error.response.status == 400) {
                this.loggedIn = false
              }
            }
          }
        )
        .catch((exception) => {})
        .finally(() => {
          params.isLoading.value = false
        })
    },

    resetLoginParams() {
      this.userLoginDto = new UserLoginDTO()
      this.loggedIn = false
    },

    logOutUser() {
      service.removeUserFromLocalStorage()
      this.loggedIn = false
      this.router.push('/')
    }
  }
})
