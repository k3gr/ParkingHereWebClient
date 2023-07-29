export interface IUserLogin {
  email: string
  password: string
}

export default class UserLoginDto implements IUserLogin {
  constructor(public email: string = '', public password: string = '') {}
}
