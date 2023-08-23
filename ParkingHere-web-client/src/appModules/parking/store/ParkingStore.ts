import { defineStore } from 'pinia'
import ParkingService from '../domain/service/ParkingService'
import ParkingDto from '../domain/dto/Parking'
import useParams from '@/appModules/common/composable/Params'
import type ReservationParams from '../../reservation/domain/dto/ReservationParams'
import UpdateParkingDto from '../domain/dto/UpdateParking'
import CreateParkingDto from '../domain/dto/CreateParking'
import { useToast } from 'vue-toastification'
import i18n from '@/plugins/i18n'
import CreateSpotDto from '../domain/dto/CreateSpot'

const service = new ParkingService()
const params = useParams()
const toast = useToast()

export const useParkingStore = defineStore({
  id: 'parkingStore',
  state: () => ({
    parkingDto: new ParkingDto(),
    updateParkingDto: new UpdateParkingDto(),
    createParkingDto: new CreateParkingDto(),
    parkings: [] as ParkingDto[],
    myParkings: [] as ParkingDto[]
  }),
  getters: {
    getParking: (state) => state.parkingDto,
    getUpdateParkingDto: (state) => state.updateParkingDto,
    getCreateParkingDto: (state) => state.createParkingDto,
    getParkings: (state) => state.parkings,
    getMyParkings: (state) => state.myParkings,
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
      params.isError.value = false
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

    async findMyParkings() {
      params.isLoading.value = true
      service
        .findMyParkings()
        .then(
          (success) => {
            if (success.status === 200) {
              this.myParkings = success.data
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
    },

    async addParking() {
      service
        .create(this.createParkingDto)
        .then(
          (success) => {
            if (success.status === 201) {
              toast.success(i18n.global.t('ParkingWasCreated'))
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

    async saveParking(parkingDto: ParkingDto) {
      params.isLoading.value = true
      this.updateParkingDto = service.convertParkingDTOToUpdateParkingDto(parkingDto)

      service
        .update(parkingDto.id, this.updateParkingDto)
        .then(
          (success) => {
            if (success.status === 200) {
              toast.success(i18n.global.t('ChangesSaved'))
            }
          },
          (error) => {
            if (error.response) {
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
