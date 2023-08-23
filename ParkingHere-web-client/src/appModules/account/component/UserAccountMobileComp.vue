<template>
  <div class="d-flex flex-column align-items-center">
    <div class="d-flex align-items-center">
      <span class="text-success fw-bold fs-3 me-3">{{ getUserFullName }}</span>
      <img src="@/assets/images/user.png" alt="user picture" width="48" height="48"
        class="rounded-circle border border-3 border-success" />
    </div>
    <div class="divider"></div>
    <div class="fs-2 d-flex flex-column">
      <div class="d-flex align-items-baseline" :class="[flexDirectionClass]">
        <div class=" d-flex flex-column">
          <span class="text-light me-3">{{ $t('ParkingHereBusiness') }}</span>
          <div class="d-flex flex-column" data-bs-dismiss="offcanvas">
            <router-link class="text-decoration-none text-secondary" :to="{ name: 'parkingManagement' }"><span href="#">{{
              $t('Parkings') }}</span></router-link>
            <router-link class="text-decoration-none text-secondary"
              :to="{ name: 'allParkingsReservationManagement' }"><span href="#">{{ $t('Reservations')
              }}</span></router-link>
          </div>
        </div>
        <div class="d-flex flex-column mt-3 me-3">
          <span class="text-light">{{ $t('MyParkingHere') }}</span>
          <div class="d-flex flex-column" data-bs-dismiss="offcanvas">
            <router-link class="text-decoration-none text-secondary" :to="{ name: 'reservationManagement' }"><span
                href="#">{{ $t('Reservations') }}</span></router-link>
          </div>
        </div>
        <div class="d-flex flex-column mt-3">
          <span class="text-light">{{ $t('Settings') }}</span>
          <div class="d-flex flex-column" data-bs-dismiss="offcanvas">
            <router-link class="text-decoration-none text-secondary" :to="{ name: 'userAccount' }"><span href="#">{{
              $t('MyAccount') }}</span></router-link>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <button class="btn btn-success text-center text-decoration-none my-2 fs-3" href="#" @click="logOutUser">
        {{ $t('SignOut') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserLoginStore } from '@/appModules/account/store/UserLoginStore'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue';

const userLoginStore = useUserLoginStore()
const { logOutUser } = userLoginStore
const { getUserFullName } = storeToRefs(userLoginStore)

const flexDirectionClass = ref("flex-row")

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

function handleResize() {
  flexDirectionClass.value = window.matchMedia('(max-width: 600px)').matches
    ? 'flex-column fs-3' : 'flex-row fs-5'
}
</script>

<style scoped></style>
