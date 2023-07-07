import Parking from '@/appModules/parking/domain/dto/Parking'
import Spot from '@/appModules/parking/domain/dto/Spot'

export interface IReservation {
  id: number
  parking: Parking
  spot: Spot
  startDate: string | null
  endDate: string | null
}

export class ReservationDTO implements IReservation {
  constructor(
    public id: number = 0,
    public parking: Parking = new Parking(),
    public spot: Spot = new Spot(),
    public startDate: string | null = null,
    public endDate: string | null = null
  ) {}
}

// export class SaveReservationDTO implements IReservation {
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
export default class Reservation extends ReservationDTO {
  constructor(dto?: ReservationDTO) {
    super()
    if (!dto) dto = new ReservationDTO()

    Object.assign(this, dto)
  }
}
