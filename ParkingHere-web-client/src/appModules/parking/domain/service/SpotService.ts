import axios from 'axios'
import type SpotDto from '../dto/Parking'
import type ReservationParams from '@/appModules/reservation/domain/dto/ReservationParams'

const urlSpot = '/api/parking/'

export default class SpotService {
  findAll(parkingId: number, reservationParams: ReservationParams) {
    return axios.post<Array<SpotDto>>(
      import.meta.env.VITE_APP_API_DOMAIN + urlSpot + parkingId + '/spot/getall/',
      reservationParams
    )
  }
}