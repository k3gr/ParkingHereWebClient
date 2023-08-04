import useParams from '@/appModules/common/composable/Params'
import { defineStore } from 'pinia'
import UpdateVehicleDto from '../../account/domain/dto/UpdateVehicleDto'
import VehicleService from '../domain/service/VehicleService'
import VehicleDto from '../domain/dto/Vehicle'

const service = new VehicleService()
const params = useParams()

export const useVehicleStore = defineStore({
  id: 'vehicleStore',
  state: () => ({
    vehicleDto: new VehicleDto(),
    updateVehicleDto: new UpdateVehicleDto()
  }),
  getters: {
    getVehicleDto: (state) => state.vehicleDto,
    getUpdateVehicleDto: (state) => state.updateVehicleDto,
    getParams: () => params
  },
  actions: {
    async saveVehicle(id: number) {
      params.isLoading.value = true
      this.updateVehicleDto = service.convertUserDTOToUpdateUserDto(this.vehicleDto)

      service
        .update(id, this.updateVehicleDto)
        .then(
          (success) => {
            if (success.status === 200) {
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
          this.updateVehicleDto = new UpdateVehicleDto()
        })
    },

    async findById(id: number) {
      service
        .findById(id)
        .then(
          (success) => {
            if (success.status === 200) {
              this.vehicleDto = success.data
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
        .finally(() => {})
    }
  }
})
