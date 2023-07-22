import { defineStore } from 'pinia'
import useParams from '@/appModules/common/composable/Params'
import ReservationService from '../domain/service/ReservationService'
import ReservationDTO from '../domain/dto/Reservation'

const service = new ReservationService()
const params = useParams()

export const useReservationStore = defineStore({
  id: 'reservationStore',
  state: () => ({
    reservationDTO: new ReservationDTO(),
    reservationSuccess: 0
  }),
  getters: {
    getReservationDTO: (state) => state.reservationDTO,
    isReservationSuccess: (state) => state.reservationSuccess,
    getParams: () => params
  },
  actions: {
    async makeReservation() {
      params.isLoading.value = true
      this.reservationDTO = new ReservationDTO()

      service
        .create(this.reservationDTO)
        .then(
          (success) => {
            if (success.status === 201) {
              this.reservationSuccess = 1
              this.reservationDTO = new ReservationDTO()
            }
          },
          (error) => {
            if (error.response) {
              if (error.response.status == 400) {
                this.reservationSuccess = 2
              }
            }
          }
        )
        .catch((exception) => {})
        .finally(() => {
          params.isLoading.value = false
        })
    },

    resetReservationParams() {
      this.reservationDTO = new ReservationDTO()
      this.reservationSuccess = 0
    }
  }
})
