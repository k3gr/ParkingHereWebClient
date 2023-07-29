<template>
  <LoadBarComp :isLoading="getParams.isLoading.value" :isError="getParams.isError.value" />
  <div
    class="position-absolute container-xxl top-50 start-50 translate-middle p-3 bg-dark col-12 col-sm-9 col-lg-8 col-xl-5"
    data-bs-theme="dark"
  >
    <section class="d-flex justify-content-center flex-column gap-4">
      <div class="d-flex align-items-center justify-content-center mb-3">
        <div
          class="person-icon position-relative rounded-circle border border-3 border-success m-3"
        >
          <font-awesome-icon
            :icon="['fa', 'square-parking']"
            class="icon text-light position-absolute top-50 start-50 translate-middle"
            size="2x"
          />
        </div>
        <h2 class="h3 ps-3 border-start text-light">{{ $t('ParkingManagement') }}</h2>
      </div>
      <div class="d-grid gap-4 col-6 mx-auto text-light">
        <button class="btn btn-outline-success text-light" type="button">Moje parkingi</button>
        <button class="btn btn-outline-success text-light" type="button">Button</button>
        <button class="btn btn-outline-success text-light" type="button">Button</button>
        <button class="btn btn-outline-success text-light" type="button">Button</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import LoadBarComp from '@/appModules/common/component/LoadBarComp.vue'
components: {
  LoadBarComp
}
import { useUserRegistrationStore } from '@/appModules/account/store/UserRegistrationStore'
import { storeToRefs } from 'pinia'

const store = useUserRegistrationStore()
const { userRegistration, getUserRegistration } = store
const { getParams } = storeToRefs(store)

async function submitSave() {
  userRegistration()
}
</script>

<style scoped>
.person-icon {
  width: 80px;
  height: 80px;
}
</style>
