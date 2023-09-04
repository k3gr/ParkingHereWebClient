import useParams from '@/appModules/common/composable/Params'
import { defineStore } from 'pinia'
import UpdateVehicleDto from '../../account/domain/dto/UpdateVehicleDto'
import VehicleService from '../domain/service/VehicleService'
import VehicleDto from '../domain/dto/Vehicle'
import { useToast } from 'vue-toastification'
import i18n from '@/plugins/i18n'

const service = new VehicleService()
const params = useParams()
const toast = useToast()

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
              toast.success(i18n.global.t('ChangesSaved'))
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

    async findVehicleByUserId(userId: number) {
      service
        .findById(userId)
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
