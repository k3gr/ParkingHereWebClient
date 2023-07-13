import Role from './Role'
import Vehicle from './Vehicle'

export interface IUser {
  id: number
  firstName: string
  lastName: string
  email: string
  dateOfBirth: Date
  password: string
  confirmPassword: string
  role: Role
  vehicle: Vehicle
}

export default class UserDTO implements IUser {
  constructor(
    public id: number = 0,
    public firstName: string = '',
    public lastName: string = '',
    public email: string = '',
    public dateOfBirth: Date = new Date(),
    public password: string = '',
    public confirmPassword: string = '',
    public role: Role = new Role(),
    public vehicle: Vehicle = new Vehicle()
  ) {}
}
