import moment from 'moment'
import { SpotTypeEnum } from '../enumerated/SpotTypeEnum'

export interface ICreateReservation {
  parkingId: number
  city: string
  startDate: string | null
  endDate: string | null
  type: SpotTypeEnum
}

export class CreateReservationDto implements ICreateReservation {
  constructor(
    public parkingId: number = 0,
    public city: string = '',
    public startDate: string | null = null,
    public endDate: string | null = null,
    public type: SpotTypeEnum = SpotTypeEnum.Empty
  ) {}
}

export default class CreateReservation extends CreateReservationDto {
  constructor(dto?: CreateReservationDto) {
    super()
    if (!dto) dto = new CreateReservationDto()

    Object.assign(this, dto)

    const today = moment()
    this.startDate = today.toISOString().substring(0, 10)
    this.endDate = today.add(1, 'd').toISOString().substring(0, 10)
  }
}
