import { defineStore } from 'pinia'
import useParams from '@/appModules/common/composable/Params'
import ReservationService from '../domain/service/ReservationService'
import ReservationParams from '../domain/dto/ReservationParams'
import CreateReservationDto from '../domain/dto/CreateReservation'
import { SpotTypeEnum } from '../domain/enumerated/SpotTypeEnum'
import ReservationDto from '../domain/dto/Reservation'

const service = new ReservationService()
const params = useParams()

export const useReservationStore = defineStore({
  id: 'reservationStore',
  state: () => {
    return {
      reservationParams: new ReservationParams(),
      createReservationDto: new CreateReservationDto(),
      myReservationDto: [] as ReservationDto[],
      myPastReservationDto: [] as ReservationDto[],
      allParkingsCurrentReservationDto: [] as ReservationDto[],
      allParkingsPastReservation: [] as ReservationDto[],
      reservationSuccess: 0,
      reservationFormFlag: 0
    }
  },
  getters: {
    getReservationParams: (state) => state.reservationParams,
    getCreateReservation: (state) => state.createReservationDto,
    getMyReservation: (state) => state.myReservationDto,
    getMyPastReservation: (state) => state.myPastReservationDto,
    getAllParkingsCurrentReservation: (state) => state.allParkingsCurrentReservationDto,
    getAllParkingsPastReservation: (state) => state.myReservationDto,
    isReservationSuccess: (state) => state.reservationSuccess,
    getReservationFormFlag: (state) => state.reservationFormFlag,
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

    async findMyReservation() {
      params.isLoading.value = true

      service
        .findMyCurrentReservation()
        .then(
          (success) => {
            if (success.status === 200) {
              this.myReservationDto = success.data
            }
          },
          (error) => {
            if (error.response) {
              if (error.response.status == 400) {
              }
            }
          }
        )
        .catch((exception) => {})
        .finally(() => {
          params.isLoading.value = false
        })
    },

    async findMyPastReservation() {
      params.isLoading.value = true

      service
        .findMyPastReservation()
        .then(
          (success) => {
            if (success.status === 200) {
              this.myPastReservationDto = success.data
            }
          },
          (error) => {
            if (error.response) {
              if (error.response.status == 400) {
              }
            }
          }
        )
        .catch((exception) => {})
        .finally(() => {
          params.isLoading.value = false
        })
    },

    async findAllParkingsCurrentReservation() {
      params.isLoading.value = true

      service
        .findAllParkingsCurrentReservation()
        .then(
          (success) => {
            if (success.status === 200) {
              this.allParkingsCurrentReservationDto = success.data
            }
          },
          (error) => {
            if (error.response) {
              if (error.response.status == 400) {
              }
            }
          }
        )
        .catch((exception) => {})
        .finally(() => {
          params.isLoading.value = false
        })
    },

    async findAllParkingsPastReservation() {
      params.isLoading.value = true

      service
        .findAllParkingsPastReservation()
        .then(
          (success) => {
            if (success.status === 200) {
              this.allParkingsPastReservation = success.data
            }
          },
          (error) => {
            if (error.response) {
              if (error.response.status == 400) {
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
      this.reservationSuccess = 0
      this.reservationParams.type = SpotTypeEnum.Empty
    }
  }
})
