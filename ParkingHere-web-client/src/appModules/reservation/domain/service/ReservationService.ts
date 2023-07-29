import axios from 'axios'
import type CreateReservationDto from '../dto/CreateReservation'

const urlReservation = '/api/parking/'

export default class ReservationService {
  create(reservationDto: CreateReservationDto) {
    return axios.post(
      import.meta.env.VITE_APP_API_DOMAIN +
        urlReservation +
        reservationDto.parkingId +
        '/spot/reservation',
      reservationDto
    )
  }
}
