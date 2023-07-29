<template>
  <div class="container-xxl">
    <ParkingManagementComp />
  </div>
</template>

<script setup lang="ts">
import ParkingManagementComp from '@/appModules/parking/component/ParkingManagementComp.vue'
import LoadBarComp from '@/appModules/common/component/LoadBarComp.vue'
import OperationMessageComp from '@/appModules/common/component/OperationMessageComp.vue'

components: {
  ParkingManagementComp
}

import { useUserRegistrationStore } from '@/appModules/account/store/UserRegistrationStore'
import { storeToRefs } from 'pinia'
import { onUnmounted } from 'vue'

const store = useUserRegistrationStore()
const { resetRegistrationParams } = store

onUnmounted(() => {
  resetRegistrationParams()
})
</script>

<style scoped></style>
