export interface IVehicle {
  brand: string
  model: string
  registrationPlate: string
}

export default class VehicleDto implements IVehicle {
  constructor(
    public brand: string = '',
    public model: string = '',
    public registrationPlate: string = ''
  ) {}
}
