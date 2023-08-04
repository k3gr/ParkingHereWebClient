<template>
  <div class="light-view">
    <div class="container-xxl p-0">
      <ReservationManagementComp class="my-4" />
    </div>
  </div>
</template>
<script setup lang="ts">
import ReservationManagementComp from '@/appModules/reservation/component/ReservationManagementComp.vue'
components: {
  ReservationManagementComp
}
</script>

<style scoped></style>
