import axios from 'axios'
import type ReservationDTO from '../dto/Reservation'

const urlReservation = '/api/parking/'

export default class ReservationService {
  create(reservationDTO: ReservationDTO) {
    return axios.post(
      import.meta.env.VITE_APP_API_DOMAIN +
        urlReservation +
        reservationDTO.parking.id +
        '/spot/' +
        reservationDTO.spot.id +
        'reservation',
      reservationDTO
    )
  }
}
