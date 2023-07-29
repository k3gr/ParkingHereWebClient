import axios from 'axios'
import UpdateVehicleDto from '../dto/UpdateVehicleDto'
import VehicleDto from '../dto/Vehicle'
const urlVehicle = '/api/vehicle/'

export default class VehicleService {
  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return axios.put(import.meta.env.VITE_APP_API_DOMAIN + urlVehicle + id, updateVehicleDto)
  }

  findById(id: number) {
    return axios.get<VehicleDto>(import.meta.env.VITE_APP_API_DOMAIN + urlVehicle + id)
  }

  convertUserDTOToUpdateUserDto(userDto: VehicleDto) {
    let updateVehicleDto = new UpdateVehicleDto()

    if (userDto) {
      updateVehicleDto.brand = userDto.brand
      updateVehicleDto.model = userDto.model
      updateVehicleDto.registrationPlate = userDto.registrationPlate
    }
    return updateVehicleDto
  }
}
