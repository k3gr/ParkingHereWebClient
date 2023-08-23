export interface IUserToken {
  id: number
  firstName: string
  lastName: string
  email: string
  token: string
  expires: Date
}

export class UserTokenDto implements IUserToken {
  constructor(
    public id: number = 0,
    public firstName: string = '',
    public lastName: string = '',
    public email: string = '',
    public token: string = '',
    public expires: Date = new Date()
  ) {}
}

export default class UserToken extends UserTokenDto {
  constructor(dto?: UserTokenDto) {
    super()
    if (!dto) dto = new UserTokenDto()

    this.id = dto.id
    this.firstName = dto.firstName
    this.lastName = dto.lastName
    this.email = dto.email
    this.token = dto.token
    this.expires = dto.expires
  }
}
