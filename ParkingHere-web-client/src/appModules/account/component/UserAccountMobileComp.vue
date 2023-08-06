<template>
  <div class="d-flex flex-column align-items-center mt-3">
    <div class="d-flex align-items-center">
      <span class="text-success fw-bold fs-3 me-3">{{ getUserFullName }}</span>
      <img
        src="https://github.com/mdo.png"
        alt="mdo"
        width="48"
        height="48"
        class="rounded-circle border border-3 border-success"
      />
    </div>
    <div class="divider"></div>
    <div class="fs-2 d-flex flex-column">
      <div class="d-flex flex-column">
        <span class="text-light">{{ $t('ParkingHereBusiness') }}</span>
        <div class="d-flex flex-column" data-bs-dismiss="offcanvas">
          <router-link
            class="text-decoration-none text-secondary ms-3"
            :to="{ name: 'parkingManagement' }"
            ><span href="#">{{ $t('Parkings') }}</span></router-link
          >
          <router-link
            class="text-decoration-none text-secondary ms-3"
            :to="{ name: 'allParkingsReservationManagement' }"
            ><span href="#">{{ $t('Reservations') }}</span></router-link
          >
        </div>
      </div>
      <div class="d-flex flex-column mt-2">
        <span class="text-light">{{ $t('MyParkingHere') }}</span>
        <div class="d-flex flex-column" data-bs-dismiss="offcanvas">
          <router-link
            class="text-decoration-none text-secondary ms-3"
            :to="{ name: 'reservationManagement' }"
            ><span href="#">{{ $t('Reservations') }}</span></router-link
          >
        </div>
      </div>
      <div class="d-flex flex-column mt-2">
        <span class="text-light">{{ $t('Settings') }}</span>
        <div class="d-flex flex-column" data-bs-dismiss="offcanvas">
          <router-link
            class="text-decoration-none text-secondary ms-3"
            :to="{ name: 'userAccount' }"
            ><span href="#">{{ $t('MyAccount') }}</span></router-link
          >
        </div>
      </div>
      <div class="divider"></div>
      <button
        class="btn btn-success text-center text-decoration-none my-2 fs-3"
        href="#"
        @click="logOutUser"
      >
        {{ $t('SignOut') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserLoginStore } from '@/appModules/account/store/UserLoginStore'
import { storeToRefs } from 'pinia'

const userLoginStore = useUserLoginStore()
const { logOutUser } = userLoginStore
const { getUserFullName } = storeToRefs(userLoginStore)
</script>

<style scoped></style>
