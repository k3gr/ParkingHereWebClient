import axios from 'axios'
import type CreateParkingDto from '../dto/CreateParking'
import type ParkingDto from '../dto/Parking'
import type ReservationParams from '@/appModules/reservation/domain/dto/ReservationParams'

const urlParking = '/api/parking/'

export default class ParkingService {
  create(createParkingDto: CreateParkingDto) {
    return axios.post(import.meta.env.VITE_APP_API_DOMAIN + urlParking, createParkingDto)
  }

  findAll() {
    return axios.get<Array<ParkingDto>>(import.meta.env.VITE_APP_API_DOMAIN + urlParking)
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
}
