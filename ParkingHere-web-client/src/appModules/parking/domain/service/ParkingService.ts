import axios from 'axios'
import type CreateParkingDTO from '../dto/CreateParking'
import type ParkingDTO from '../dto/Parking'
import type ReservationParams from '@/appModules/reservation/domain/dto/ReservationParams'

const urlParking = '/api/parking/'

export default class ParkingService {
  create(createParkingDTO: CreateParkingDTO) {
    return axios.post(import.meta.env.VITE_APP_API_DOMAIN + urlParking, createParkingDTO)
  }

  findAll() {
    return axios.get<Array<ParkingDTO>>(import.meta.env.VITE_APP_API_DOMAIN + urlParking)
  }

  findByParams(reservationParams: ReservationParams) {
    return axios.post<Array<ParkingDTO>>(
      import.meta.env.VITE_APP_API_DOMAIN + urlParking + 'city',
      reservationParams
    )
  }

  findById(id: number) {
    return axios.get<ParkingDTO>(import.meta.env.VITE_APP_API_DOMAIN + urlParking + id)
  }
}
