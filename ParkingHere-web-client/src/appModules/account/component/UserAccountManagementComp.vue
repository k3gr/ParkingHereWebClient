<template>
  <div class="container">
    <LoadBarComp :isLoading="getParams.isLoading.value" :isError="getParams.isError.value" />
    <div class="p-3 bg-light rounded-1">
      <h2 class="mb-3 fw-bold">{{ $t('MyAccount') }}</h2>
      <div class="divider-fluid col-12 col-sm-6"></div>
      <form @submit="saveUser(getUserId)">
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <label for="firstName">{{ $t('FirstName') }}:</label>
            <div class="input-group">
              <input
                type="text"
                class="form-control border-0 w-0 fw-medium"
                id="firstName"
                v-model="getUserDto.firstName"
                :readonly="!firstNameChanged"
                :class="firstNameChanged ? '' : 'bg-transparent'"
              />
              <button
                type="button"
                class="btn btn-link text-decoration-none text-success fs-6"
                @click="firstNameChanged = !firstNameChanged"
              >
                <span v-if="!firstNameChanged">{{ $t('Change').toUpperCase() }}</span>
                <span v-else>{{ $t('OK').toUpperCase() }}</span>
              </button>
            </div>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <label for="lastName">{{ $t('LastName') }}:</label>
            <div class="input-group">
              <input
                type="text"
                class="form-control border-0 w-50 fw-medium"
                id="lastName"
                v-model="getUserDto.lastName"
                :readonly="!lastNameChanged"
                :class="lastNameChanged ? '' : 'bg-transparent'"
              />
              <button
                type="button"
                class="btn btn-link text-decoration-none text-success fs-6"
                @click="lastNameChanged = !lastNameChanged"
              >
                <span v-if="!lastNameChanged">{{ $t('Change').toUpperCase() }}</span>
                <span v-else>{{ $t('OK').toUpperCase() }}</span>
              </button>
            </div>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <label for="email">{{ $t('Email') }}:</label>
            <div class="input-group">
              <input
                type="text"
                class="form-control border-0 w-50 fw-medium"
                id="email"
                v-model="getUserDto.email"
                :readonly="!emailNameChanged"
                :class="emailNameChanged ? '' : 'bg-transparent'"
              />
              <button
                type="button"
                class="btn btn-link text-decoration-none text-success fs-6"
                @click="emailNameChanged = !emailNameChanged"
              >
                <span v-if="!emailNameChanged">{{ $t('Change').toUpperCase() }}</span>
                <span v-else>{{ $t('OK').toUpperCase() }}</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 mt-3">
          <button type="submit" class="btn btn-outline-success">{{ $t('Save') }}</button>
        </div>
      </form>
    </div>
    <div class="mt-4 p-3 bg-light rounded-1">
      <h2 class="mb-3 fw-bold">{{ $t('MyVehicle') }}</h2>
      <div class="divider-fluid col-12 col-sm-6"></div>
      <form @submit.prevent="saveVehicle(getUserId)">
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <label for="vehicleName">{{ $t('VehicleName') }}:</label>
            <div class="input-group">
              <input
                type="text"
                class="form-control border-0 w-0 fw-medium"
                id="firstName"
                v-model="getVehicleDto.brand"
                :readonly="!vehicleBrandChanged"
                :class="vehicleBrandChanged ? '' : 'bg-transparent'"
              />
              <button
                type="button"
                class="btn btn-link text-decoration-none text-success fs-6"
                @click="vehicleBrandChanged = !vehicleBrandChanged"
              >
                <span v-if="!vehicleBrandChanged">{{ $t('Change').toUpperCase() }}</span>
                <span v-else>{{ $t('OK').toUpperCase() }}</span>
              </button>
            </div>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <label for="vehiclePlate">{{ $t('VehicleRegistrationPlate') }}:</label>
            <div class="input-group">
              <input
                type="text"
                class="form-control border-0 w-50 fw-medium"
                id="vehiclePlate"
                v-model="getVehicleDto.model"
                :readonly="!vehicleModelChanged"
                :class="vehicleModelChanged ? '' : 'bg-transparent'"
              />
              <button
                type="button"
                class="btn btn-link text-decoration-none text-success fs-6"
                @click="vehicleModelChanged = !vehicleModelChanged"
              >
                <span v-if="!vehicleModelChanged">{{ $t('Change').toUpperCase() }}</span>
                <span v-else>{{ $t('OK').toUpperCase() }}</span>
              </button>
            </div>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <label for="vehiclePlate">{{ $t('VehicleRegistrationPlate') }}:</label>
            <div class="input-group">
              <input
                type="text"
                class="form-control border-0 w-50 fw-medium"
                id="vehiclePlate"
                v-model="getVehicleDto.registrationPlate"
                :readonly="!vehiclePlateChanged"
                :class="vehiclePlateChanged ? '' : 'bg-transparent'"
              />
              <button
                type="button"
                class="btn btn-link text-decoration-none text-success fs-6"
                @click="vehiclePlateChanged = !vehiclePlateChanged"
              >
                <span v-if="!vehiclePlateChanged">{{ $t('Change').toUpperCase() }}</span>
                <span v-else>{{ $t('OK').toUpperCase() }}</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 mt-3">
          <button type="submit" class="btn btn-outline-success">{{ $t('Save') }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserLoginStore } from '@/appModules/account/store/UserLoginStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { onMounted } from 'vue'
import LoadBarComp from '@/appModules/common/component/LoadBarComp.vue'
import { useVehicleStore } from '../store/VehicleStore'
components: {
  LoadBarComp
}

const userStore = useUserLoginStore()
const { findUser, saveUser } = userStore
const { getUserId, getUserDto } = storeToRefs(userStore)
const vehicleStore = useVehicleStore()
const { findVehicle, saveVehicle, getParams } = vehicleStore
const { getVehicleDto } = storeToRefs(vehicleStore)
const firstNameChanged = ref(false)
const lastNameChanged = ref(false)
const emailNameChanged = ref(false)
const vehicleBrandChanged = ref(false)
const vehicleModelChanged = ref(false)
const vehiclePlateChanged = ref(false)

onMounted(() => {
  if (getUserId.value) {
    findUser(getUserId.value)
    findVehicle(getUserId.value)
  }
})
</script>

<style scoped>
.parking-img {
  object-fit: cover;
  height: 150px;
  width: 100%;
}

.parking {
  border-radius: 10px;
}

input:focus {
  border-color: none !important;
  box-shadow: none !important;
}

input {
  font-size: 1.25rem;
}
.border-1 {
  border-color: rgb(226, 226, 226);
  border-style: solid;
}
</style>
