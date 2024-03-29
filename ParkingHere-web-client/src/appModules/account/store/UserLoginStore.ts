import { defineStore } from 'pinia'
import UserService from '../domain/service/UserService'
import useParams from '@/appModules/common/composable/Params'
import UserLoginDto from '../domain/dto/UserLogin'
import UserTokenDto from '../domain/dto/UserToken'
import { useRouter } from 'vue-router'
import UserDto from '../domain/dto/User'
import UpdateUserDto from '../domain/dto/UpdateUserDto'
import { useToast } from 'vue-toastification'
import i18n from '@/plugins/i18n'
import moment from 'moment'

const service = new UserService()
const params = useParams()
const toast = useToast()

export const useUserLoginStore = defineStore({
  id: 'userLoginStore',
  state: () => ({
    userLoginDto: new UserLoginDto(),
    userDto: new UserDto(),
    updateUserDto: new UpdateUserDto(),
    loggedIn: (service.getUserFromLocalStorage() ? true : false) as boolean,
    router: useRouter()
  }),
  getters: {
    getUserLogin: (state) => state.userLoginDto,
    getUserDto: (state) => state.userDto,
    getUpdateUserDto: (state) => state.updateUserDto,
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
    getUserId() {
      if (this.loggedIn) {
        return service.getUserFromLocalStorage().id
      }
      return 0
    },
    getTokenExpiration() {
      if (this.loggedIn) {
        return service.getUserFromLocalStorage().expires
      }
      return 0
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
              const userToken = new UserTokenDto(success.data)
              service.setUserToLocalStorage(userToken)
              this.loggedIn = true
              this.userLoginDto = new UserLoginDto()
              toast.success(i18n.global.t('LoginSuccess'))
              this.router.push('/')
            }
          },
          (error) => {
            this.loggedIn = false
            if (error.response) {
              if (error.response.status == 401) {
                toast.error(i18n.global.t('IncorrectLoginOrPassword'))
              } else {
                toast.error(i18n.global.t('ErrorUnknown'))
              }
            } else {
              toast.error(i18n.global.t('ErrorConnectToServer'))
            }
          }
        )
        .catch((exception) => {})
        .finally(() => {
          params.isLoading.value = false
        })
    },

    async findUser(id: number) {
      service
        .findById(id)
        .then(
          (success) => {
            if (success.status === 200) {
              this.userDto = success.data
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
        .finally(() => {})
    },

    async saveUser(id: number) {
      params.isLoading.value = true
      this.updateUserDto = service.convertUserDTOToUpdateUserDto(this.userDto)

      service
        .update(id, this.updateUserDto)
        .then(
          (success) => {
            if (success.status === 200) {
              this.findUser(this.getUserId)
              const userToken = service.convertUserDTOToUserTokenDto(this.getUserDto)
              service.setUserToLocalStorage(userToken)
              toast.success(i18n.global.t('ChangesSaved'))
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
      this.userLoginDto = new UserLoginDto()
      this.loggedIn = false
    },

    logOutUser() {
      service.removeUserFromLocalStorage()
      this.loggedIn = false
      toast.success(i18n.global.t('LogoutSuccess'))
      this.router.push('/')
    },

    logOutUserWhenTokenExpired() {
      if (moment(this.getTokenExpiration).diff(moment(), 'minutes') < 0) {
        service.removeUserFromLocalStorage()
        this.loggedIn = false
        toast.success(i18n.global.t('TokenExpired'))
        this.router.push('/')
      }
    }
  }
})
