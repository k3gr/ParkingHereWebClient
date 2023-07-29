export default class UpdateVehicleDto {
  constructor(
    public brand: string = '',
    public model: string = '',
    public registrationPlate: string = ''
  ) {}
}
