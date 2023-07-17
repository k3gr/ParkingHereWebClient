export interface IUserLogin {
  email: string
  password: string
}

export default class UserLoginDTO implements IUserLogin {
  constructor(public email: string = '', public password: string = '') {}
}
