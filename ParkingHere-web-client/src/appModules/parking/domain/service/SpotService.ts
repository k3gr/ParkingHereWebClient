import axios from 'axios'
import type SpotDto from '../dto/Parking'
import type ReservationParams from '@/appModules/reservation/domain/dto/ReservationParams'
import type CreateSpotDto from '../dto/CreateSpot'
import UserService from '@/appModules/account/domain/service/UserService'

const urlSpot = '/api/parking/'

export default class SpotService {
  private userService = new UserService()

  findAll(parkingId: number, reservationParams: ReservationParams) {
    return axios.post<Array<SpotDto>>(
      import.meta.env.VITE_APP_API_DOMAIN + urlSpot + parkingId + '/spot/getall/',
      reservationParams
    )
  }

  create(parkingId: string, createSpotDto: CreateSpotDto) {
    return axios.post(
      import.meta.env.VITE_APP_API_DOMAIN + urlSpot + parkingId + '/spot',
      createSpotDto,
      {
        headers: this.userService.getAuthHeader()
      }
    )
  }
}
