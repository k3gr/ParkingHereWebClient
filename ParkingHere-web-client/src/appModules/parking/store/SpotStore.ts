import { defineStore } from 'pinia'
import SpotService from '../domain/service/SpotService'
import SpotDto from '../domain/dto/Parking'
import useParams from '@/appModules/common/composable/Params'
import type ReservationParams from '@/appModules/reservation/domain/dto/ReservationParams'

const service = new SpotService()
const params = useParams()

export const useSpotStore = defineStore({
  id: 'spotStore',
  state: () => ({
    spotDto: new SpotDto(),
    spots: [] as SpotDto[]
  }),
  getters: {
    getSpot: (state) => state.spotDto,
    getSpots: (state) => state.spots,
    getParams: () => params
  },
  actions: {
    async findSpots(parkingId: number, reservationParams: ReservationParams) {
      params.isLoading.value = true

      service
        .findAll(parkingId, reservationParams)
        .then(
          (success) => {
            if (success.status === 200) {
              this.spots = success.data
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
