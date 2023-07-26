import axios from 'axios'
import type CreateReservationDTO from '../dto/CreateReservation'

const urlReservation = '/api/parking/'

export default class ReservationService {
  create(reservationDTO: CreateReservationDTO) {
    return axios.post(
      import.meta.env.VITE_APP_API_DOMAIN +
        urlReservation +
        reservationDTO.parkingId +
        '/spot/reservation',
      reservationDTO
    )
  }
}
