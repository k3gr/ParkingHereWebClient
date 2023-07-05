import { RoleEnum } from "../enumerated/RoleEnum"
import Role from "./Role"
import Vehicle from "./Vehicle"

        export interface IUserAccount {
            id: number
            firstName: string
            lastName: string
            email: string
            dateOfBirth: Date
            passwordHash: string
            role: Role
            vehicle: Vehicle
          }
          
          export class UserAccountDTO implements IUserAccount {
            constructor(
              public id: number = 0,
              public firstName: string = '',
              public lastName: string = '',
              public email: string = '',
              public dateOfBirth: Date = new Date(),
              public passwordHash: string = '',
              public role: Role = new Role(),
              public vehicle: Vehicle = new Vehicle(),
            ) {}
          }
          
          export default class User extends UserAccountDTO {
            constructor(dto?: UserAccountDTO) {
              super()
              if (!dto) dto = new UserAccountDTO()
          
              Object.assign(this, dto)
            }
          }
          