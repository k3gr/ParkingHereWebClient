<template>
  <!-- <div class="container-fluid"> -->
  <div class="container-xxl search-bar-view">
    <ReservationFormComp class="my-4" />
  </div>
  <!-- </div> -->
</template>

<script setup lang="ts">
import ReservationFormComp from '@/appModules/reservation/component/ReservationFormComp.vue'
components: {
  ReservationFormComp
}
</script>

<style scoped></style>
