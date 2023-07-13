import { defineStore } from 'pinia'
import { i18n } from '@/main'
import UserService from '../domain/service/UserService'
import UserRegistrationDTO from '../domain/dto/UserRegistration'
import useParams from '@/appModules/common/composable/Params'

const service = new UserService()
const params = useParams()

export const useUserRegistrationStore = defineStore({
  id: 'userRegistrationStore',
  state: () => ({
    userRegistrationDTO: new UserRegistrationDTO(),
    registrationSuccess: 0
  }),
  getters: {
    getUserRegistration: (state) => state.userRegistrationDTO,
    isRegistrationSuccess: (state) => state.registrationSuccess,
    getParams: () => params
  },
  actions: {
    async userRegistration() {
      params.isLoading.value = true

      service
        .create(this.userRegistrationDTO)
        .then(
          (success) => {
            if (success.status === 201) {
              this.registrationSuccess = 1
              this.userRegistrationDTO = new UserRegistrationDTO()
            }
          },
          (error) => {
            if (error.response) {
              if (error.response.status == 400) {
                this.registrationSuccess = 2
              }
            }
          }
        )
        .catch((exception) => {})
        .finally(() => {
          params.isLoading.value = false
        })
    },

    resetRegistrationParams() {
      this.userRegistrationDTO = new UserRegistrationDTO()
      this.registrationSuccess = 0
    }
  }
})
