export interface IClientToken {
  firstName: string
  lastName: string
  email: string
  token: string
}

export class ClientTokenDTO implements IClientToken {
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public email: string = '',
    public token: string = ''
  ) {}
}

export default class ClientToken extends ClientTokenDTO {
  constructor(dto?: ClientTokenDTO) {
    super()
    if (!dto) dto = new ClientTokenDTO()

    this.firstName = dto.firstName
    this.lastName = dto.lastName
    this.email = dto.email
    this.token = dto.token
  }
}
