import axios from 'axios'
import type CreateParkingDto from '../dto/CreateParking'
import type ParkingDto from '../dto/Parking'
import type ReservationParams from '@/appModules/reservation/domain/dto/ReservationParams'
import UpdateParkingDto from '../dto/UpdateParking'
import UserService from '@/appModules/account/domain/service/UserService'

const urlParking = '/api/parking/'

export default class ParkingService {
  private userService = new UserService()

  create(createParkingDto: CreateParkingDto) {
    return axios.post(import.meta.env.VITE_APP_API_DOMAIN + urlParking, createParkingDto)
  }

  findAll() {
    return axios.get<Array<ParkingDto>>(import.meta.env.VITE_APP_API_DOMAIN + urlParking)
  }

  update(id: number, updateParkingDto: UpdateParkingDto) {
    return axios.put(import.meta.env.VITE_APP_API_DOMAIN + urlParking + id, updateParkingDto, {
      headers: this.userService.getAuthHeader()
    })
  }

  findMyParkings() {
    return axios.get<Array<ParkingDto>>(
      import.meta.env.VITE_APP_API_DOMAIN + urlParking + 'my-parkings',
      {
        headers: this.userService.getAuthHeader()
      }
    )
  }

  findByParams(reservationParams: ReservationParams) {
    return axios.post<Array<ParkingDto>>(
      import.meta.env.VITE_APP_API_DOMAIN + urlParking + 'city',
      reservationParams
    )
  }

  findById(id: number) {
    return axios.get<ParkingDto>(import.meta.env.VITE_APP_API_DOMAIN + urlParking + id)
  }

  convertParkingDTOToUpdateParkingDto(parkingDto: ParkingDto) {
    let updateParkingDto = new UpdateParkingDto()

    if (parkingDto) {
      updateParkingDto.name = parkingDto.name
      updateParkingDto.street = parkingDto.street
      updateParkingDto.city = parkingDto.city
      updateParkingDto.postalCode = parkingDto.postalCode
      updateParkingDto.description = parkingDto.description
      updateParkingDto.type = parkingDto.type
      updateParkingDto.contactEmail = parkingDto.contactEmail
      updateParkingDto.contactNumber = parkingDto.contactNumber
    }
    return updateParkingDto
  }
}
