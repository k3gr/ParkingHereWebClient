import moment from 'moment'
import { SpotTypeEnum } from '../enumerated/SpotTypeEnum'

export interface IReservationParams {
  city: string
  startDate: string | null
  endDate: string | null
  type: SpotTypeEnum
}

export class ReservationParamsDto implements IReservationParams {
  constructor(
    public city: string = '',
    public startDate: string | null = null,
    public endDate: string | null = null,
    public type: SpotTypeEnum = SpotTypeEnum.Empty
  ) {}
}

export default class ReservationParams extends ReservationParamsDto {
  constructor(dto?: ReservationParamsDto) {
    super()
    if (!dto) dto = new ReservationParamsDto()

    Object.assign(this, dto)

    const today = moment()
    this.startDate = today.toISOString().substring(0, 10)
    this.endDate = today.add(1, 'd').toISOString().substring(0, 10)
  }
}
