<template>
  <div class="bg-dark h-lg-100">
    <div class="center-form p-4 mx-auto bg-dark col-12 col-sm-9 col-xl-4" data-bs-theme="dark">
      <div class="d-flex flex-wrap align-items-center justify-content-center">
        <div class="circle-icon">
          <font-awesome-icon :icon="['fa', 'user']" class="text-light position-absolute top-50 start-50 translate-middle"
            size="2x" />
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
import { onUnmounted } from 'vue'

const store = useUserRegistrationStore()
const { resetRegistrationParams } = store

onUnmounted(() => {
  resetRegistrationParams()
})
</script>

<style></style>
