import moment from 'moment'
import { SpotTypeEnum } from '../enumerated/SpotTypeEnum'

export interface IReservation {
  parkingId: number
  spotId: number
  type: SpotTypeEnum
  startDate: string | null
  endDate: string | null
}

export default class ReservationDto implements IReservation {
  constructor(
    public parkingId: number = 0,
    public spotId: number = 0,
    public type: SpotTypeEnum = SpotTypeEnum.Standard,
    public startDate: string | null = null,
    public endDate: string | null = null
  ) {}
}
