import { defineStore } from 'pinia'
import { i18n } from '@/main'
import UserService from '../domain/service/UserService'
import UserRegistrationDto from '../domain/dto/UserRegistration'
import useParams from '@/appModules/common/composable/Params'

const service = new UserService()
const params = useParams()

export const useUserRegistrationStore = defineStore({
  id: 'userRegistrationStore',
  state: () => ({
    userRegistrationDto: new UserRegistrationDto(),
    registrationSuccess: 0
  }),
  getters: {
    getUserRegistration: (state) => state.userRegistrationDto,
    isRegistrationSuccess: (state) => state.registrationSuccess,
    getParams: () => params
  },
  actions: {
    async userRegistration() {
      params.isLoading.value = true

      service
        .create(this.userRegistrationDto)
        .then(
          (success) => {
            if (success.status === 201) {
              this.registrationSuccess = 1
              this.userRegistrationDto = new UserRegistrationDto()
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
      this.userRegistrationDto = new UserRegistrationDto()
      this.registrationSuccess = 0
    }
  }
})
