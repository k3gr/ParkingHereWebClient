import { defineStore } from 'pinia'
import SpotService from '../domain/service/SpotService'
import SpotDTO from '../domain/dto/Parking'
import useParams from '@/appModules/common/composable/Params'
import ReservationParamsDTO from '@/appModules/reservation/domain/dto/ReservationParams'

const service = new SpotService()
const params = useParams()

export const useSpotStore = defineStore({
  id: 'spotStore',
  state: () => ({
    spotDto: new SpotDTO(),
    spots: [] as SpotDTO[]
  }),
  getters: {
    getSpot: (state) => state.spotDto,
    getSpots: (state) => state.spots,
    getParams: () => params
  },
  actions: {
    async findSpots(parkingId: number, reservationParamsDTO: ReservationParamsDTO) {
      params.isLoading.value = true

      service
        .findAll(parkingId, reservationParamsDTO)
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
