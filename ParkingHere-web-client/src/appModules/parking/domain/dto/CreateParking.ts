export interface ICreateParking {
  name: string
  description: string
  type: string
  contactEmail: string
  contactNumber: string
  city: string
  street: string
  postalCode: string
}

export default class CreateParkingDto implements ICreateParking {
  constructor(
    public name: string = '',
    public description: string = '',
    public type: string = '',
    public contactEmail: string = '',
    public contactNumber: string = '',
    public city: string = '',
    public street: string = '',
    public postalCode: string = ''
  ) {}
}
