import Parking from '@/appModules/parking/domain/dto/Parking'
import Spot from '@/appModules/parking/domain/dto/Spot'

export interface IReservation {
  parking: Parking
  spot: Spot
  startDate: string | null
  endDate: string | null
}

export default class ReservationDTO implements IReservation {
  constructor(
    public parking: Parking = new Parking(),
    public spot: Spot = new Spot(),
    public startDate: string | null = null,
    public endDate: string | null = null
  ) {}
}
