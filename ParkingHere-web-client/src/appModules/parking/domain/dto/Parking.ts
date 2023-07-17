import ReservationDTO from '@/appModules/reservation/domain/dto/Reservation'
import SpotDto from './Spot'
import UserDTO from '@/appModules/account/domain/dto/User'
import AddressDTO from './Address'

export interface IParking {
  id: number
  name: string
  description: string
  type: string
  contactEmail: string
  contactNumber: string
  user: UserDTO
  address: AddressDTO
  spots: Array<SpotDto>
  reservations: Array<ReservationDTO>
}

export default class ParkingDTO implements IParking {
  constructor(
    public id: number = 0,
    public name: string = '',
    public description: string = '',
    public type: string = '',
    public contactEmail: string = '',
    public contactNumber: string = '',
    public user: UserDTO = new UserDTO(),
    public address: AddressDTO = new AddressDTO(),
    public spots: Array<SpotDto> = new Array(),
    public reservations: Array<ReservationDTO> = new Array()
  ) {}
}
