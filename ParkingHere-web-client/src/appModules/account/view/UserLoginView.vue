<template>
  <div class="container">
    <div
      class="position-absolute top-50 start-50 translate-middle p-3 bg-dark col-12 col-sm-8 col-lg-6 col-xl-4"
      data-bs-theme="dark"
    >
      <div class="d-flex flex-wrap align-items-center justify-content-center">
        <div
          class="person-icon position-relative rounded-circle border border-3 border-success m-3"
        >
          <font-awesome-icon
            :icon="['fa', 'user']"
            class="text-light position-absolute top-50 start-50 translate-middle"
            size="2x"
          />
        </div>
        <h2 class="h3 ps-3 border-start text-light">{{ $t('Login') }}</h2>
      </div>
      <UserLoginFormComp />
    </div>
  </div>
</template>

<script setup lang="ts">
import UserLoginFormComp from '@/appModules/account/component/UserLoginFormComp.vue'
import { useUserRegistrationStore } from '@/appModules/account/store/UserRegistrationStore'
import LoadBarComp from '@/appModules/common/component/LoadBarComp.vue'
import OperationMessageComp from '@/appModules/common/component/OperationMessageComp.vue'

components: {
  UserLoginFormComp
  LoadBarComp
  OperationMessageComp
}

import { storeToRefs } from 'pinia'
import { onUnmounted } from 'vue'

const store = useUserRegistrationStore()
const { resetRegistrationParams } = store
const { isRegistrationSuccess } = storeToRefs(store)

onUnmounted(() => {
  resetRegistrationParams()
})
</script>

<style scoped>
.person-icon {
  width: 80px;
  height: 80px;
}
</style>
