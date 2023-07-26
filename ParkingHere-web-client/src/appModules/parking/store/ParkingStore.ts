import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import ParkingService from '../domain/service/ParkingService'
import ParkingDTO from '../domain/dto/Parking'
import useParams from '@/appModules/common/composable/Params'
import ReservationParamsDTO from '../../reservation/domain/dto/ReservationParams'
import { SpotTypeEnum } from '@/appModules/reservation/domain/enumerated/SpotTypeEnum'

const service = new ParkingService()
const params = useParams()

export const useParkingStore = defineStore({
  id: 'parkingStore',
  state: () => ({
    parkingDto: new ParkingDTO(),
    reservationParams: new ReservationParamsDTO(),
    parkings: [] as ParkingDTO[]
  }),
  getters: {
    getParking: (state) => state.parkingDto,
    getReservationParams: (state) => state.reservationParams,
    getParkings: (state) => state.parkings,
    getPrices: (state) => state.parkingDto.prices,
    getParams: () => params
  },
  actions: {
    async findAll() {
      params.isLoading.value = true

      service
        .findAll()
        .then(
          (success) => {
            if (success.status === 200) {
              this.parkings = success.data
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

    async findParkings() {
      params.isLoading.value = true
      service
        .findByParams(this.reservationParams)
        .then(
          (success) => {
            if (success.status === 200) {
              this.parkings = success.data
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

    async findParking(id: number) {
      this.reservationParams.type = SpotTypeEnum.Standard

      service
        .findById(id)
        .then(
          (success) => {
            if (success.status === 200) {
              this.parkingDto = success.data
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
    }
  }
})
