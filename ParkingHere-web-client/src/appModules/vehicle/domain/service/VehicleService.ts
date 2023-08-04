import axios from 'axios'
import UpdateVehicleDto from '../../../account/domain/dto/UpdateVehicleDto'
import VehicleDto from '../dto/Vehicle'
import UserService from '@/appModules/account/domain/service/UserService'
const urlVehicle = '/api/vehicle'

export default class VehicleService {
  private userService = new UserService()

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return axios.put(
      import.meta.env.VITE_APP_API_DOMAIN + urlVehicle + '/' + id,
      updateVehicleDto,
      {
        headers: this.userService.getAuthHeader()
      }
    )
  }

  findById(id: number) {
    return axios.get<VehicleDto>(import.meta.env.VITE_APP_API_DOMAIN + urlVehicle + '/' + id, {
      headers: this.userService.getAuthHeader()
    })
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
