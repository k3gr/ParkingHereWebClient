export interface IVehicle {
  id: number
  name: string
  RegistrationPlate: string
}

export class VehicleDTO implements IVehicle {
  constructor(
    public id: number = 0,
    public name: string = '',
    public RegistrationPlate: string = ''
  ) {}
}

export default class Vehicle extends VehicleDTO {
  constructor(dto?: VehicleDTO) {
    super()
    if (!dto) dto = new VehicleDTO()

    Object.assign(this, dto)
  }
}
