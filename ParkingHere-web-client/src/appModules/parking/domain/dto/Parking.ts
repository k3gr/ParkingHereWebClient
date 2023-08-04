import SpotDto from './Spot'

export interface IParking {
  id: number
  name: string
  description: string
  type: string
  contactEmail: string
  contactNumber: string
  street: string
  city: string
  postalCode: string
  prices: number[]
  // user: UserDto
  // address: AddressDto
  spots: Array<SpotDto>
  // reservations: Array<ReservationDto>
  open: boolean
}

export default class ParkingDto implements IParking {
  constructor(
    public id: number = 0,
    public name: string = '',
    public description: string = '',
    public type: string = '',
    public contactEmail: string = '',
    public contactNumber: string = '',
    public street: string = '',
    public city: string = '',
    public postalCode: string = '',
    public prices: number[] = [],
    // public user: UserDto = new UserDto(),
    // public address: AddressDto = new AddressDto(),
    public spots: Array<SpotDto> = new Array(), // public reservations: Array<ReservationDto> = new Array()
    public open: boolean = false
  ) {}
}
