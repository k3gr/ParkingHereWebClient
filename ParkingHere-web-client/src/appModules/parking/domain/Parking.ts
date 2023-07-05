import type Reservation from '@/appModules/reservation/domain/dto/Reservation'
import type Spot from './Spot'

export interface IParking {
  id: number
  name: string
  description: string
  type: string
  contactEmail: string
  contactNumber: string
  // user: User
  // address: Address
  spots: Array<Spot>
  reservations: Array<Reservation>
}

export class ParkingDTO implements IParking {
  constructor(
    public id: number = 0,
    public name: string = '',
    public description: string = '',
    public type: string = '',
    public contactEmail: string = '',
    public contactNumber: string = '',
    // public user: User = new user(),
    // public address: Address = new Address(),
    public spots: Array<Spot> = new Array(),
    public reservations: Array<Reservation> = new Array()
  ) {}
}

// export class SaveParkingDTO implements IParking {
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

export default class Parking extends ParkingDTO {
  constructor(dto?: ParkingDTO) {
    super()
    if (!dto) dto = new ParkingDTO()

    Object.assign(this, dto)
  }
}
