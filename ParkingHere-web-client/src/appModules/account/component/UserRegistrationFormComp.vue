<template>
  <LoadBarComp :isLoading="getParams.isLoading.value" :isError="getParams.isError.value" />
  <div
    class="position-absolute container-xxl top-50 start-50 translate-middle p-3 bg-dark col-12 col-sm-9 col-lg-8 col-xl-5"
    data-bs-theme="dark"
  >
    <form @submit.prevent="submitSave">
      <div class="d-flex align-items-center justify-content-center mb-3">
        <div
          class="person-icon position-relative rounded-circle border border-3 border-success m-3"
        >
          <font-awesome-icon
            :icon="['fa', 'user-plus']"
            class="icon text-light position-absolute top-50 start-50 translate-middle"
            size="2x"
          />
        </div>
        <h2 class="h3 ps-3 border-start text-light">{{ $t('Registration') }}</h2>
      </div>
      <div class="row g-3">
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="firstName"
              :placeholder="$t('FirstNamePlaceHolder')"
              v-model="getUserRegistration.firstName"
            />
            <label class="text-secondary-emphasis" for="firstName">{{ $t('FirstName') }}</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="lastName"
              :placeholder="$t('LastNamePlaceHolder')"
              v-model="getUserRegistration.lastName"
            />
            <label class="text-secondary-emphasis" for="lastName">{{ $t('LastName') }}</label>
          </div>
        </div>
      </div>
      <div class="col-md-12 my-3">
        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="email"
            :placeholder="$t('EmailAddress')"
            v-model="getUserRegistration.email"
          />
          <label class="text-secondary-emphasis" for="email">{{ $t('EmailAddress') }}</label>
        </div>
      </div>
      <div class="row g-3">
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password2"
              :placeholder="$t('Password')"
              v-model="getUserRegistration.password"
            />
            <label class="text-secondary-emphasis" for="password2">{{ $t('Password') }}</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="confirmPassword"
              :placeholder="$t('ConfirmPassword')"
              v-model="getUserRegistration.confirmPassword"
            />
            <label class="text-secondary-emphasis" for="confirmPassword">{{
              $t('ConfirmPassword')
            }}</label>
          </div>
        </div>
      </div>
      <div class="row g-3 mt-0">
        <span class="fs-6 ms-3 text-secondary">Dane pojazdu:</span>
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="vehicleName"
              :placeholder="$t('VehicleName')"
              v-model="getUserRegistration.vehicle.brand"
            />
            <label class="text-secondary-emphasis" for="vehicleName">{{ $t('VehicleName') }}</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="vehicleRegistrationPlate"
              :placeholder="$t('VehicleRegistrationPlate')"
              v-model="getUserRegistration.vehicle.model"
            />
            <label class="text-secondary-emphasis" for="vehicleRegistrationPlate">{{
              $t('VehicleRegistrationPlate')
            }}</label>
          </div>
        </div>
      </div>
      <div class="row g-3 mt-0">
        <span class="fs-6 ms-3 text-secondary">Dane pojazdu:</span>
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="vehicleRegistrationPlate"
              :placeholder="$t('VehicleRegistrationPlate')"
              v-model="getUserRegistration.vehicle.registrationPlate"
            />
            <label class="text-secondary-emphasis" for="vehicleRegistrationPlate">{{
              $t('VehicleRegistrationPlate')
            }}</label>
          </div>
        </div>
      </div>
      <div class="checkbox my-3">
        <div class="form-check">
          <input type="checkbox" class="form-check-input bg-success" id="checkbox" />
          <label class="form-check-label text-light" for="checkbox">{{
            $t('AcceptTermsAndConditions')
          }}</label>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-lg btn-success col-12 col-sm-5 col-xxl-4" type="submit">
          {{ $t('Register') }}
        </button>
      </div>
      <div class="mt-3">
        <span class="m-0 me-2 text-light">{{ $t('IAlreadyHaveAccount') }}.</span
        ><router-link
          class="text-decoration-none text-success d-block d-sm-inline"
          :to="{ name: 'login' }"
          >{{ $t('SignIn') }}.</router-link
        >
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import LoadBarComp from '@/appModules/common/component/LoadBarComp.vue'
components: {
  LoadBarComp
}
import { useUserRegistrationStore } from '@/appModules/account/store/UserRegistrationStore'
import { storeToRefs } from 'pinia'

const store = useUserRegistrationStore()
const { userRegistration, getUserRegistration } = store
const { getParams } = storeToRefs(store)

async function submitSave() {
  userRegistration()
}
</script>

<style scoped>
.person-icon {
  width: 80px;
  height: 80px;
}
</style>
