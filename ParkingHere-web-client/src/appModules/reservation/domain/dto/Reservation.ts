import Parking from '@/appModules/parking/domain/dto/Parking'
import Spot from '@/appModules/parking/domain/dto/Spot'
import moment from 'moment'

export interface IReservation {
  parking: Parking
  spot: Spot
  startDate: string | null
  endDate: string | null
}

export class ReservationDTO implements IReservation {
  constructor(
    public parking: Parking = new Parking(),
    public spot: Spot = new Spot(),
    public startDate: string | null = null,
    public endDate: string | null = null
  ) {}
}

export default class Reservation extends ReservationDTO {
  constructor(dto?: ReservationDTO) {
    super()
    if (!dto) dto = new ReservationDTO()

    Object.assign(this, dto)

    const today = moment()

    this.startDate = today.toISOString().substring(0, 10)
    this.endDate = today.add(7, 'd').toISOString().substring(0, 10)
  }
}
