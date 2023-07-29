import type Reservation from '@/appModules/reservation/domain/dto/Reservation'
export interface ISpot {
  id: number
  price: number
  type: string
  isAvailable: boolean
  reservations: Array<Reservation>
}

export default class SpotDto implements ISpot {
  constructor(
    public id: number = 0,
    public price: number = 0,
    public type: string = '',
    public isAvailable: boolean = false,
    public reservations: Array<Reservation> = new Array()
  ) {}
}
