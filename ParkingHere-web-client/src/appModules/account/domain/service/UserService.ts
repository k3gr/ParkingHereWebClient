import axios from 'axios'
import type UserRegistrationDto from '../dto/UserRegistration'
import type UserLoginDto from '../dto/UserLogin'
import type UserDto from '../dto/User'
import UpdateUserDto from '../dto/UpdateUserDto'
import UserToken, { UserTokenDto } from '../dto/UserToken'
import type UserResetPassStep1 from '../dto/UserResetPassStep1'
import type UserResetPassStep2 from '../dto/UserResetPassStep2'

const urlUser = '/api/account'
const keyUserLocalStorage = 'authUser'

export default class UserService {
  public readonly MASK_PASSWORD =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]{8,}$/
  public readonly MASK_POSTALCODE = /^[0-9]{2}-[0-9]{3}/
  public readonly MASK_PHONENUMBER = /^[+]?[(]?[0-9]{2,3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/

  create(userRegistrationDto: UserRegistrationDto) {
    return axios.post(
      import.meta.env.VITE_APP_API_DOMAIN + urlUser + '/register',
      userRegistrationDto
    )
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return axios.put(import.meta.env.VITE_APP_API_DOMAIN + urlUser + '/' + id, updateUserDto, {
      headers: this.getAuthHeader()
    })
  }

  findById(id: number) {
    return axios.get<UserDto>(import.meta.env.VITE_APP_API_DOMAIN + urlUser + '/' + id)
  }

  signIn(userLoginDto: UserLoginDto) {
    return axios.post(import.meta.env.VITE_APP_API_DOMAIN + urlUser + '/login', userLoginDto)
  }

  resetPassStep1(userResetPassStep1: UserResetPassStep1) {
    return axios.post(
      import.meta.env.VITE_APP_API_DOMAIN + urlUser + '/forgot-password',
      userResetPassStep1,
      {
        headers: this.getAuthHeader()
      }
    )
  }

  resetPassStep2(userResetPassStep2: UserResetPassStep2) {
    return axios.post(
      import.meta.env.VITE_APP_API_DOMAIN +
        urlUser +
        '/reset-password?token=' +
        userResetPassStep2.token,
      userResetPassStep2,
      {
        headers: this.getAuthHeader()
      }
    )
  }

  verifyPasswordToken(token: string) {
    return axios.post(
      import.meta.env.VITE_APP_API_DOMAIN + urlUser + '/verify-password-token?token=' + token,
      {
        headers: this.getAuthHeader()
      }
    )
  }

  activation(token: string) {
    return axios.post(
      import.meta.env.VITE_APP_API_DOMAIN + urlUser + '/activation?token=' + token,
      {
        headers: this.getAuthHeader()
      }
    )
  }

  setUserToLocalStorage(userToken: UserToken) {
    localStorage.setItem(keyUserLocalStorage, JSON.stringify(userToken))
  }

  getUserFromLocalStorage() {
    return JSON.parse(localStorage.getItem(keyUserLocalStorage) as string) as UserToken
  }

  removeUserFromLocalStorage() {
    localStorage.removeItem(keyUserLocalStorage)
  }

  getAuthHeader() {
    const user = this.getUserFromLocalStorage()
    if (user && user.token) {
      return {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + user.token
      }
    }
  }

  convertUserDTOToUpdateUserDto(userDto: UserDto) {
    let updateUserDto = new UpdateUserDto()

    if (userDto) {
      updateUserDto.firstName = userDto.firstName
      updateUserDto.lastName = userDto.lastName
      updateUserDto.email = userDto.email
    }
    return updateUserDto
  }

  convertUserDTOToUserTokenDto(userDto: UserDto) {
    let userToken = new UserTokenDto()

    if (userDto) {
      userToken.id = userDto.id
      userToken.firstName = userDto.firstName
      userToken.lastName = userDto.lastName
      userToken.email = userDto.email
    }
    return userToken
  }
}
