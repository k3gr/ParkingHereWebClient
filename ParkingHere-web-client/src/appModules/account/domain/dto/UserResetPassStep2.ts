export interface IUserResetPassStep2 {
  password: string
  confirmPassword: string
  token: string
}

export default class UserResetPassStep2Dto implements IUserResetPassStep2 {
  constructor(
    public password: string = '',
    public confirmPassword: string = '',
    public token: string = ''
  ) {}
}
