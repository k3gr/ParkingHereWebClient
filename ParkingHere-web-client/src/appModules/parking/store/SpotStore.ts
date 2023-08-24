import { defineStore } from 'pinia'
import SpotService from '../domain/service/SpotService'
import SpotDto from '../domain/dto/Parking'
import useParams from '@/appModules/common/composable/Params'
import type ReservationParams from '@/appModules/reservation/domain/dto/ReservationParams'
import { i18n } from '@/main'
import { useToast } from 'vue-toastification'
import CreateSpotDto from '../domain/dto/CreateSpot'

const service = new SpotService()
const params = useParams()
const toast = useToast()

export const useSpotStore = defineStore({
  id: 'spotStore',
  state: () => ({
    spotDto: new SpotDto(),
    spots: [] as SpotDto[],
    createSpotDto: new CreateSpotDto()
  }),
  getters: {
    getSpot: (state) => state.spotDto,
    getSpots: (state) => state.spots,
    getCreateSpotDto: (state) => state.createSpotDto,

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
            } else {
              toast.error(i18n.global.t('ErrorConnectToServer'))
              params.isError.value = true
            }
          }
        )
        .catch((exception) => {})
        .finally(() => {
          params.isLoading.value = false
        })
    },

    async addSpot(parkingId: string | string[]) {
      service
        .create(parkingId.toString(), this.createSpotDto)
        .then(
          (success) => {
            if (success.status === 201) {
              toast.success(i18n.global.t('SpotWasCreated'))
            }
          },
          (error) => {
            if (error.response) {
              if (error.response.status == 400) {
              }
            } else {
              toast.error(i18n.global.t('ErrorConnectToServer'))
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
