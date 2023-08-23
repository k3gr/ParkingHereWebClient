<template>
  <div class="light-view">
    <div class="container-xxl p-0">
      <nav aria-label="breadcrumb" class="container mt-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            {{ $t("ParkingHereBiznes") }}
          </li>
          <li class="breadcrumb-item fw-bold active text-success" aria-current="page">
            {{ $t('Reservations') }}
          </li>
        </ol>
      </nav>
      <ReservationManagementComp :pastReservation="getAllParkingsCurrentReservation"
        :currentReservation="getAllParkingsPastReservation" class="mt-4 mb-5" />
    </div>
  </div>
</template>
<script setup lang="ts">
import ReservationManagementComp from '@/appModules/reservation/component/ReservationManagementComp.vue'
import { useReservationStore } from '@/appModules/reservation/store/ReservationStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
components: {
  ReservationManagementComp
}
const reservationStore = useReservationStore()
const { findAllParkingsCurrentReservation, findAllParkingsPastReservation } = reservationStore
const { getAllParkingsCurrentReservation, getAllParkingsPastReservation, getParams } =
  storeToRefs(reservationStore)

onMounted(() => {
  findAllParkingsCurrentReservation()
  findAllParkingsPastReservation()
})
</script>

<style scoped></style>
