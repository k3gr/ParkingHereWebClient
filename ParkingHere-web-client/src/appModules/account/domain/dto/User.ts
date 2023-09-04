export interface IUser {
  id: number
  firstName: string
  lastName: string
  email: string
  roleId: number
  vehicleId: number
}

export default class UserDto implements IUser {
  constructor(
    public id: number = 0,
    public firstName: string = '',
    public lastName: string = '',
    public email: string = '',
    public roleId: number = 0,
    public vehicleId: number = 0
  ) {}
}
