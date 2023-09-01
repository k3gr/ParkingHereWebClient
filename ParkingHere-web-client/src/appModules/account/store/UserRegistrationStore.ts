import { defineStore } from 'pinia'
import UserService from '../domain/service/UserService'
import UserRegistrationDto from '../domain/dto/UserRegistration'
import useParams from '@/appModules/common/composable/Params'
import UserResetPassStep1 from '../domain/dto/UserResetPassStep1'
import { useToast } from 'vue-toastification'
import { i18n } from '@/main'
import UserResetPassStep2 from '../domain/dto/UserResetPassStep2'
import emailjs from '@emailjs/browser'
import EmailDto from '@/appModules/common/domain/dto/Email'

const service = new UserService()
const params = useParams()
const toast = useToast()

export const useUserRegistrationStore = defineStore({
  id: 'userRegistrationStore',
  state: () => ({
    userRegistrationDto: new UserRegistrationDto(),
    registrationSuccess: 0,
    resetPasswordSuccess: 0,
    activationSuccess: 0,
    resetPasswordStep: 0,
    userResetPassStep2: new UserResetPassStep2(),
    errors: []
  }),
  getters: {
    getUserRegistration: (state) => state.userRegistrationDto,
    isRegistrationSuccess: (state) => state.registrationSuccess,
    isResetPasswordSuccess: (state) => state.resetPasswordSuccess,
    isActivationSuccess: (state) => state.activationSuccess,
    getResetPasswordStep: (state) => state.resetPasswordStep,
    getUserResetPassStep2: (state) => state.userResetPassStep2,
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
              toast.success(i18n.global.t('RegistrationSuccess'))

              var token = success.data
              var message = new EmailDto(
                this.userRegistrationDto.firstName,
                this.userRegistrationDto.email,
                token
              )

              emailjs
                .send(
                  'service_phxfwwd',
                  'template_60eag6p',
                  message as any,
                  import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
                )
                .then(
                  (success) => {},
                  (error) => {}
                )
              this.userRegistrationDto = new UserRegistrationDto()
            }
          },
          (error) => {
            if (error.response) {
              if (error.response.status == 400) {
                if (error.response.data.errors['Email'].length > 0) {
                  toast.error(i18n.global.t('DuplicateEmail'))
                } else {
                  toast.error(i18n.global.t('ErrorUnknown'))
                  this.registrationSuccess = 2
                }
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

    async verifyPasswordToken(token: string) {
      params.isLoading.value = true
      service
        .verifyPasswordToken(token)
        .then(
          (success) => {
            if (success.status === 200) {
              this.resetPasswordStep = 2
            }
          },
          (error) => {
            if (error.response) {
              if (error.response.status == 400) {
                toast.error(i18n.global.t('IncorrectLoginOrPassword'))
                this.resetPasswordStep = 0
                this.resetPasswordSuccess = 2
              }
              if (error.response.status == 401) {
                this.resetPasswordStep = 0
                this.resetPasswordSuccess = 2
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

    async activation(token: string) {
      params.isLoading.value = true
      service
        .activation(token)
        .then(
          (success) => {
            if (success.status === 200) {
              this.activationSuccess = 1
            }
          },
          (error) => {
            if (error.response) {
              if (error.response.status == 401) {
                this.activationSuccess = 2
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

    async resetPasswordStep1(userResetPassStep1: UserResetPassStep1) {
      params.isLoading.value = true
      service
        .resetPassStep1(userResetPassStep1)
        .then(
          (success) => {
            if (success.status === 200) {
              toast.success(i18n.global.t('ForgotPasswordEmailSent'))
              var token = success.data
              var message = new EmailDto('', userResetPassStep1.email, token)

              emailjs
                .send(
                  'service_phxfwwd',
                  'template_x1uofhp',
                  message as any,
                  import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
                )
                .then(
                  (success) => {},
                  (error) => {}
                )
            }
          },
          (error) => {
            if (error.response) {
              if (error.response.status == 401) {
                toast.error(i18n.global.t('IncorrectEmail'))
              }
              if (error.response.status == 403) {
                toast.error(i18n.global.t('AccountNotActivated'))
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

    async resetPasswordStep2(token: string) {
      params.isLoading.value = true
      this.userResetPassStep2.token = token
      service
        .resetPassStep2(this.userResetPassStep2)
        .then(
          (success) => {
            if (success.status === 200) {
              this.resetPasswordSuccess = 1
              this.resetPasswordStep = 0
            }
          },
          (error) => {
            if (error.response) {
              toast.error(i18n.global.t('ErrorUnknown'))
              if (error.response.status == 400) {
                this.resetPasswordStep = 2
                this.resetPasswordSuccess = 2
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

    resetRegistrationParams() {
      this.userRegistrationDto = new UserRegistrationDto()
      this.registrationSuccess = 0
    }
  }
})
