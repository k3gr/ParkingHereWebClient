<template>
  <div class="light-view">
    <div class="container-xxl p-0">
      <ReservationManagementComp
        :pastReservation="getAllParkingsCurrentReservation"
        :currentReservation="getAllParkingsPastReservation"
        class="my-4"
      />
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
