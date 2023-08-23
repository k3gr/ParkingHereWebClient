<template>
  <div class="light-view">
    <div class="container-xxl p-0">
      <nav aria-label="breadcrumb" class="container mt-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            {{ $t("ParkingHereBiznes") }}
          </li>
          <li class="breadcrumb-item fw-bold active text-success" aria-current="page">
            {{ $t('ManageCarParks') }}
          </li>
        </ol>
      </nav>
      <ParkingManagementComp class="mt-4 mb-5" />
    </div>
  </div>
</template>
<script setup lang="ts">
import ParkingManagementComp from '@/appModules/parking/component/ParkingManagementComp.vue'
components: {
  ParkingManagementComp
}
</script>

<style scoped></style>
