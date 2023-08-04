export interface IUpdateParking {
  name: string
  street: string
  city: string
  postalCode: string
  description: string
  type: string
  contactEmail: string
  contactNumber: string
}

export default class UpdateParkingDto implements IUpdateParking {
  constructor(
    public name: string = '',
    public street: string = '',
    public city: string = '',
    public postalCode: string = '',
    public description: string = '',
    public type: string = '',
    public contactEmail: string = '',
    public contactNumber: string = ''
  ) {}
}
