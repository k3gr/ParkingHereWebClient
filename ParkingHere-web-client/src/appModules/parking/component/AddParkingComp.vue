<template>
  <LoadBarComp :isLoading="getParams.isLoading.value" :isError="getParams.isError.value" />
  <!-- <div class="container"> -->
  <div class="center-form p-3 col-12 col-md-9 col-lg-8 col-xl-5">
    <form @submit.prevent="addParking(getUserId)">
      <div class="d-flex align-items-center justify-content-center mb-3">
        <div
          class="person-icon position-relative rounded-circle border border-3 border-success m-3"
        >
          <div class="position-absolute top-50 start-50 translate-middle d-flex align-items-center">
            <font-awesome-icon :icon="['fa', 'parking']" class="icon me-1" size="2x" />
            <font-awesome-icon :icon="['fa', 'plus']" class="icon fs-5" size="1x" />
          </div>
        </div>
        <h2 class="h3 ps-3 border-start border-dark">{{ $t('NewParking') }}</h2>
      </div>
      <div class="col-md-12 my-3">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="email"
            :placeholder="$t('Name')"
            v-model="getCreateParkingDto.name"
          />
          <label class="text-secondary-emphasis" for="email">{{ $t('Name') }}</label>
        </div>
      </div>
      <div class="row g-3 mb-3">
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="firstName"
              :placeholder="$t('Street')"
              v-model="getCreateParkingDto.street"
            />
            <label class="text-secondary-emphasis" for="firstName">{{ $t('Street') }}</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="lastName"
              :placeholder="$t('City')"
              v-model="getCreateParkingDto.city"
            />
            <label class="text-secondary-emphasis" for="lastName">{{ $t('City') }}</label>
          </div>
        </div>
      </div>
      <div class="row g-3">
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password2"
              :placeholder="$t('PostalCode')"
              v-model="getCreateParkingDto.postalCode"
            />
            <label class="text-secondary-emphasis" for="password2">{{ $t('PostalCode') }}</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="vehicleRegistrationPlate"
              :placeholder="$t('Type')"
              v-model="getCreateParkingDto.type"
            />
            <label class="text-secondary-emphasis" for="vehicleRegistrationPlate">{{
              $t('Type')
            }}</label>
          </div>
        </div>
      </div>
      <div class="row g-3 mt-0">
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="vehicleName"
              :placeholder="$t('MobileNumber')"
              v-model="getCreateParkingDto.contactNumber"
            />
            <label class="text-secondary-emphasis" for="vehicleName">{{
              $t('MobileNumber')
            }}</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="confirmPassword"
              :placeholder="$t('Email')"
              v-model="getCreateParkingDto.contactEmail"
            />
            <label class="text-secondary-emphasis" for="confirmPassword">{{ $t('Email') }}</label>
          </div>
        </div>
      </div>
      <div class="row g-3 mt-0">
        <div class="col-md-12">
          <div class="form-floating">
            <textarea
              type="text"
              class="form-control"
              id="vehicleRegistrationPlate"
              :placeholder="$t('Description')"
              v-model="getCreateParkingDto.description"
            ></textarea>
            <label class="text-secondary-emphasis" for="vehicleRegistrationPlate">{{
              $t('Description')
            }}</label>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-4">
        <button class="btn btn-lg btn-success col-12 col-sm-5 col-xxl-4" type="submit">
          {{ $t('Add') }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import LoadBarComp from '@/appModules/common/component/LoadBarComp.vue'
components: {
  LoadBarComp
}
import { storeToRefs } from 'pinia'
import { useParkingStore } from '@/appModules/parking/store/ParkingStore'
import { useUserLoginStore } from '@/appModules/account/store/UserLoginStore'

const userStore = useUserLoginStore()
const { getUserId } = storeToRefs(userStore)
const parkignStore = useParkingStore()
const { addParking } = parkignStore
const { getParams, getCreateParkingDto } = storeToRefs(parkignStore)
</script>

<style scoped>
input,
textarea {
  border: solid 1px rgb(175, 175, 175);
}
</style>
