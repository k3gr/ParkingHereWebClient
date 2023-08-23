<template>
  <div class="d-flex align-items-center">
    <span class="text-success fw-bold me-3">{{ getUserFullName }}</span>
    <a href="#" class="d-block text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown"
      aria-expanded="false">
      <img src="@/assets/images/user.png" alt="user picture" width="48" height="48"
        class="rounded-circle border border-3 border-success" />
    </a>
    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownUser1" style="">
      <div>
        <span class="px-3 text-light dropdown-item">{{ $t('ParkingHereBusiness') }}</span>
        <hr class="dropdown-divider" />
        <div class="mx-2">
          <router-link class="text-decoration-none" :to="{ name: 'parkingManagement' }"><span class="dropdown-item"
              href="#">{{ $t('Parkings') }}</span></router-link>
          <router-link class="text-decoration-none text-success d-block d-sm-inline"
            :to="{ name: 'allParkingsReservationManagement' }"><span class="dropdown-item" href="#">{{ $t('Reservations')
            }}</span></router-link>
        </div>
      </div>
      <hr class="dropdown-divider" />
      <div>
        <span class="px-3 text-light">{{ $t('MyParkingHere') }}</span>
        <hr class="dropdown-divider" />
        <div class="mx-2">
          <router-link class="text-decoration-none text-success d-block d-sm-inline"
            :to="{ name: 'reservationManagement' }"><span class="dropdown-item" href="#">{{ $t('Reservations')
            }}</span></router-link>
        </div>
      </div>
      <hr class="dropdown-divider" />
      <div>
        <span class="px-3 text-light">{{ $t('Settings') }}</span>
        <hr class="dropdown-divider" />
        <div class="mx-2">
          <router-link class="text-decoration-none" :to="{ name: 'userAccount' }"><span class="dropdown-item" href="#">{{
            $t('MyAccount') }}</span></router-link>
        </div>
      </div>
      <hr class="dropdown-divider" />
      <div>
        <div class="mx-2">
          <a class="dropdown-item text-center text-success" href="#" @click="logOutUser">{{
            $t('SignOut')
          }}</a>
        </div>
      </div>
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
