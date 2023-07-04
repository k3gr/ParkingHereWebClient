
        export interface IUserAccount {
            id: number
            firstName: string
            lastName: string
            email: string
            dateOfBirth: Date
            passwordHash: string
            // role: Role
            // vehicle: Vehicle
          }
          
          export class UserAccountDTO implements IUserAccount {
            constructor(
              public id: number = 0,
              public firstName: string = '',
              public lastName: string = '',
              public email: string = '',
              public dateOfBirth: Date = new Date(),
              public passwordHash: string = '',
              public role: string = '',
              public vehicle: string = '',
            ) {}
          }
          
          // export class SaveUserDTO implements IUser {
          //   public id: string = ''
          //   public plannedStartDate: string = ''
          //   public endDate: string = ''
          //   public comments: string = ''
          //   public eventStatus: EventStatusEnum = EventStatusEnum.New
          //   public eventCondition: EventConditionEnum = EventConditionEnum.New
          //   public eventType: EventTypeEnum = EventTypeEnum.General
          //   public policyId: string | null = null
          //   public vehicleId: string | null = null
          //   public thingId: string | null = null
          //   public customerId: string | null = null
          // }
          
          export default class User extends UserAccountDTO {
            constructor(dto?: UserAccountDTO) {
              super()
              if (!dto) dto = new UserAccountDTO()
          
              Object.assign(this, dto)
            }
          }
          