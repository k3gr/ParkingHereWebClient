import axios from 'axios'
import type UserRegistrationDTO from '../dto/UserRegistration'

const urlUser = '/api/account/'

export default class UserService {
  create(userRegistrationDTO: UserRegistrationDTO) {
    return axios.post(
      import.meta.env.VITE_APP_API_DOMAIN + urlUser + 'register',
      userRegistrationDTO
    )
  }
}
