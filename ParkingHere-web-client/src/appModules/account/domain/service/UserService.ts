import axios from 'axios'
import type UserRegistrationDto from '../dto/UserRegistration'
import type UserLoginDto from '../dto/UserLogin'
import type UserDto from '../dto/User'
import UpdateUserDto from '../dto/UpdateUserDto'
import UserToken, { UserTokenDto } from '../dto/UserToken'

const urlUser = '/api/account'
const keyUserLocalStorage = 'authUser'

export default class UserService {
  public readonly MASK_PASSWORD =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]{8,}$/

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
