import axios from 'axios'
import type CreateReservationDto from '../dto/CreateReservation'
import UserService from '@/appModules/account/domain/service/UserService'
import type ReservationDto from '../dto/Reservation'

const urlReservation = '/api/reservation'

export default class ReservationService {
  private userService = new UserService()

  create(reservationDto: CreateReservationDto) {
    return axios.post(
      import.meta.env.VITE_APP_API_DOMAIN +
        urlReservation +
        '/' +
        reservationDto.parkingId +
        '/spot/reservation',
      reservationDto,
      {
        headers: this.userService.getAuthHeader()
      }
    )
  }

  findMyReservation() {
    return axios.get<Array<ReservationDto>>(
      import.meta.env.VITE_APP_API_DOMAIN + urlReservation + '/my-reservations',
      {
        headers: this.userService.getAuthHeader()
      }
    )
  }

  findMyPastReservation() {
    return axios.get<Array<ReservationDto>>(
      import.meta.env.VITE_APP_API_DOMAIN + urlReservation + '/my-past-reservations',
      {
        headers: this.userService.getAuthHeader()
      }
    )
  }
}
