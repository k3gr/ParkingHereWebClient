<template>
  <div class="container">
    <LoadBarComp :isLoading="getParams.isLoading.value" :isError="getParams.isError.value" />
    <div class="col-12 p-3 bg-success rounded-1 box-shadow">
      <h2 class="fw-bold text-center text-light m-0">
        {{ $t('MyAccount') }}
      </h2>
    </div>
    <div class="mt-4 p-3 bg-light rounded-1 box-shadow">
      <h2 class="mb-3 fw-bold">
        <font-awesome-icon :icon="['fa', 'user']" class="icon me-3" size="2x" />{{
          $t('PersonalData')
        }}
      </h2>
      <div class="divider-fluid col-12 col-sm-6"></div>
      <form @submit.prevent="saveUser(getUserId)">
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <label for="firstName">{{ $t('FirstName') }}:</label>
            <div class="input-group">
              <input type="text" class="form-control border-0 w-0 fw-medium" id="firstName" v-model="getUserDto.firstName"
                :readonly="!userChanged" :class="userChanged ? '' : 'bg-transparent'" />
              <button type="button" class="btn btn-link text-decoration-none text-success fs-6"
                @click="userChanged = !userChanged">
                <span v-if="!userChanged">{{ $t('Change').toUpperCase() }}</span>
                <span v-else>{{ $t('OK').toUpperCase() }}</span>
              </button>
            </div>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <label for="lastName">{{ $t('LastName') }}:</label>
            <div class="input-group">
              <input type="text" class="form-control border-0 w-50 fw-medium" id="lastName" v-model="getUserDto.lastName"
                :readonly="!userChanged" :class="userChanged ? '' : 'bg-transparent'" />
            </div>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <label for="email">{{ $t('Email') }}:</label>
            <div class="input-group">
              <input type="text" class="form-control border-0 w-50 fw-medium" id="email" v-model="getUserDto.email"
                :readonly="!userChanged" :class="userChanged ? '' : 'bg-transparent'" />
            </div>
          </div>
        </div>
        <div class="col-12 mt-3">
          <button type="submit" class="btn btn-outline-success" :disabled="userChanged">{{ $t('Save') }}</button>
        </div>
      </form>
    </div>
    <div class="mt-4 p-3 bg-light rounded-1 box-shadow">
      <h2 class="mb-3 fw-bold">
        <font-awesome-icon :icon="['fa', 'car']" class="icon me-3" size="2x" />{{ $t('MyVehicle') }}
      </h2>
      <div class="divider-fluid col-12 col-sm-6"></div>
      <form @submit.prevent="saveVehicle(getUserId)">
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <label for="vehicleName">{{ $t('VehicleBrand') }}:</label>
            <div class="input-group">
              <input type="text" class="form-control border-0 w-0 fw-medium" id="firstName" v-model="getVehicleDto.brand"
                :readonly="!vehicleChanged" :class="vehicleChanged ? '' : 'bg-transparent'" />
              <button type="button" class="btn btn-link text-decoration-none text-success fs-6"
                @click="vehicleChanged = !vehicleChanged">
                <span v-if="!vehicleChanged">{{ $t('Change').toUpperCase() }}</span>
                <span v-else>{{ $t('OK').toUpperCase() }}</span>
              </button>
            </div>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <label for="vehiclePlate">{{ $t('VehicleRegistrationPlate') }}:</label>
            <div class="input-group">
              <input type="text" class="form-control border-0 w-50 fw-medium" id="vehiclePlate"
                v-model="getVehicleDto.model" :readonly="!vehicleChanged"
                :class="vehicleChanged ? '' : 'bg-transparent'" />
            </div>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <label for="vehiclePlate">{{ $t('VehicleRegistrationPlate') }}:</label>
            <div class="input-group">
              <input type="text" class="form-control border-0 w-50 fw-medium" id="vehiclePlate"
                v-model="getVehicleDto.registrationPlate" :readonly="!vehicleChanged"
                :class="vehicleChanged ? '' : 'bg-transparent'" />
            </div>
          </div>
        </div>
        <div class="col-12 mt-3">
          <button type="submit" class="btn btn-outline-success" :disabled="vehicleChanged">{{ $t('Save') }}</button>
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
import { useVehicleStore } from '@/appModules/vehicle/store/VehicleStore'
components: {
  LoadBarComp
}

const userStore = useUserLoginStore()
const { findUser, saveUser } = userStore
const { getUserId, getUserDto } = storeToRefs(userStore)
const vehicleStore = useVehicleStore()
const { findById, saveVehicle, getParams } = vehicleStore
const { getVehicleDto } = storeToRefs(vehicleStore)
const userChanged = ref(false)
const vehicleChanged = ref(false)

onMounted(() => {
  if (getUserId.value) {
    findUser(getUserId.value)
    findById(getUserId.value)
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
