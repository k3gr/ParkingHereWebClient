import type Reservation from '@/appModules/reservation/domain/dto/Reservation'
export interface ISpot {
  id: number
  price: number
  type: string
  isAvailable: boolean
  reservations: Array<Reservation>
}

export class SpotDTO implements ISpot {
  constructor(
    public id: number = 0,
    public price: number = 0,
    public type: string = '',
    public isAvailable: boolean = false,
    public reservations: Array<Reservation> = new Array()
  ) {}
}

// export class SaveSpotDTO implements ISpot {
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

export default class Spot extends SpotDTO {
  constructor(dto?: SpotDTO) {
    super()
    if (!dto) dto = new SpotDTO()

    Object.assign(this, dto)
  }
}
