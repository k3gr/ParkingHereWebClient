import moment from 'moment'
import { SpotTypeEnum } from '../enumerated/SpotTypeEnum'

export interface IReservationParams {
  city: string
  startDate: string | null
  endDate: string | null
  type: SpotTypeEnum
}

export class ReservationParamsDTO implements IReservationParams {
  constructor(
    public city: string = '',
    public startDate: string | null = null,
    public endDate: string | null = null,
    public type: SpotTypeEnum = SpotTypeEnum.Standard
  ) {}
}

export default class ReservationParams extends ReservationParamsDTO {
  constructor(dto?: ReservationParamsDTO) {
    super()
    if (!dto) dto = new ReservationParamsDTO()

    Object.assign(this, dto)

    const today = moment()
    this.startDate = today.toISOString().substring(0, 10)
    this.endDate = today.add(1, 'd').toISOString().substring(0, 10)
  }
}
