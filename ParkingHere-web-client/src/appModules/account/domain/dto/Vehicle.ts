export interface IVehicle {
  name: string
  registrationPlate: string
}

export default class VehicleDTO implements IVehicle {
  constructor(public name: string = '', public registrationPlate: string = '') {}
}
