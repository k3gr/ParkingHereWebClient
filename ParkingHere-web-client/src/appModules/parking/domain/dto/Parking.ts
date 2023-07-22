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
  prices: number[]
  // user: UserDTO
  // address: AddressDTO
  spots: Array<SpotDto>
  // reservations: Array<ReservationDTO>
}

export default class ParkingDTO implements IParking {
  constructor(
    public id: number = 0,
    public name: string = '',
    public description: string = '',
    public type: string = '',
    public contactEmail: string = '',
    public contactNumber: string = '',
    public street: string = '',
    public city: string = '',
    public prices: number[] = [],
    // public user: UserDTO = new UserDTO(),
    // public address: AddressDTO = new AddressDTO(),
    public spots: Array<SpotDto> = new Array() // public reservations: Array<ReservationDTO> = new Array()
  ) {}
}
