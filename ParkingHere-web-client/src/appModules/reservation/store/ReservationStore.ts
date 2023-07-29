import { defineStore } from 'pinia'
import useParams from '@/appModules/common/composable/Params'
import ReservationService from '../domain/service/ReservationService'
import ReservationParams from '../domain/dto/ReservationParams'
import CreateReservationDto from '../domain/dto/CreateReservation'
import { SpotTypeEnum } from '../domain/enumerated/SpotTypeEnum'

const service = new ReservationService()
const params = useParams()

export const useReservationStore = defineStore({
  id: 'reservationStore',
  state: () => {
    return {
      reservationParams: new ReservationParams(),
      createReservationDto: new CreateReservationDto(),
      reservationSuccess: 0
    }
  },
  getters: {
    getReservationParams: (state) => state.reservationParams,
    getCreateReservation: (state) => state.createReservationDto,
    isReservationSuccess: (state) => state.reservationSuccess,
    getParams: () => params
  },
  actions: {
    async makeReservation() {
      params.isLoading.value = true
      this.reservationSuccess = 0

      service
        .create(this.createReservationDto)
        .then(
          (success) => {
            if (success.status === 201) {
              this.reservationSuccess = 1
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
          this.resetReservationParams()
        })
    },

    resetReservationParams() {
      this.reservationSuccess = 0
      this.reservationParams.type = SpotTypeEnum.Empty
    }
  }
})
