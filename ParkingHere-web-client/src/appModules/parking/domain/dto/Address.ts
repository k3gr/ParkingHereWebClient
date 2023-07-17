export interface IAddress {
  id: number
  city: string
  street: string
  postalCode: string
}

export default class AddressDTO implements IAddress {
  constructor(
    public id: number = 0,
    public city: string = '',
    public street: string = '',
    public postalCode: string = ''
  ) {}
}
