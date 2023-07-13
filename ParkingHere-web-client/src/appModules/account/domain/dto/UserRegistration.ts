import Role from './Role'
import VehicleDTO from './Vehicle'

export interface IUserRegistration {
  firstName: string
  lastName: string
  email: string
  dateOfBirth: Date
  password: string
  confirmPassword: string
  role: Role
  vehicle: VehicleDTO
}

export default class UserRegistrationDTO implements IUserRegistration {
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public email: string = '',
    public dateOfBirth: Date = new Date(),
    public password: string = '',
    public confirmPassword: string = '',
    public role: Role = new Role(),
    public vehicle: VehicleDTO = new VehicleDTO()
  ) {}
}
