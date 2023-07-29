import { defineStore } from 'pinia'
import ParkingService from '../domain/service/ParkingService'
import ParkingDto from '../domain/dto/Parking'
import useParams from '@/appModules/common/composable/Params'
import type ReservationParams from '../../reservation/domain/dto/ReservationParams'

const service = new ParkingService()
const params = useParams()

export const useParkingStore = defineStore({
  id: 'parkingStore',
  state: () => ({
    parkingDto: new ParkingDto(),
    parkings: [] as ParkingDto[]
  }),
  getters: {
    getParking: (state) => state.parkingDto,
    getParkings: (state) => state.parkings,
    getPrices: (state) => state.parkingDto.prices,
    getParams: () => params
  },
  actions: {
    async findAllParkings() {
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

    async findParkings(reservationParams: ReservationParams) {
      params.isLoading.value = true
      service
        .findByParams(reservationParams)
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
