import ReservationDto from '@/appModules/reservation/domain/dto/Reservation'
import SpotDto from './Spot'
import UserDto from '@/appModules/account/domain/dto/User'
import AddressDto from './Address'

export interface ICreateParking {
  name: string
  description: string
  type: string
  contactEmail: string
  contactNumber: string
  user: UserDto
  address: AddressDto
  spots: Array<SpotDto>
  reservations: Array<ReservationDto>
}

export default class CreateParkingDto implements ICreateParking {
  constructor(
    public name: string = '',
    public description: string = '',
    public type: string = '',
    public contactEmail: string = '',
    public contactNumber: string = '',
    public user: UserDto = new UserDto(),
    public address: AddressDto = new AddressDto(),
    public spots: Array<SpotDto> = new Array(),
    public reservations: Array<ReservationDto> = new Array()
  ) {}
}
