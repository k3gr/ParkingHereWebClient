import { RoleEnum } from '../enumerated/RoleEnum'

export interface IRole {
  id: number
  name: RoleEnum
}

export class RoleDto implements IRole {
  constructor(public id: number = 0, public name: RoleEnum = RoleEnum.User) {}
}

export default class Role extends RoleDto {
  constructor(dto?: RoleDto) {
    super()
    if (!dto) dto = new RoleDto()

    Object.assign(this, dto)
  }
}
