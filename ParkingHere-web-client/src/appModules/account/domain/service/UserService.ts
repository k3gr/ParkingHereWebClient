import axios from 'axios'
import type UserRegistrationDTO from '../dto/UserRegistration'
import type UserLoginDto from '../dto/UserLogin'
import type ClientTokenDTO from '../dto/ClientToken'
import type ClientToken from '../dto/ClientToken'

const urlUser = '/api/account/'
const keyUserLocalStorage = 'authUser'

export default class UserService {
  create(userRegistrationDTO: UserRegistrationDTO) {
    return axios.post(
      import.meta.env.VITE_APP_API_DOMAIN + urlUser + 'register',
      userRegistrationDTO
    )
  }

  signIn(userLoginDto: UserLoginDto) {
    return axios.post(import.meta.env.VITE_APP_API_DOMAIN + urlUser + 'login', userLoginDto)
  }

  setUserToLocalStorage(clientToken: ClientToken) {
    localStorage.setItem(keyUserLocalStorage, JSON.stringify(clientToken))
  }

  getUserFromLocalStorage() {
    return JSON.parse(localStorage.getItem(keyUserLocalStorage) as string) as ClientToken
  }

  removeUserFromLocalStorage() {
    localStorage.removeItem(keyUserLocalStorage)
  }
}
