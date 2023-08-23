<template>
  <div class="light-view">
    <div class="container-xxl p-0">
      <nav aria-label="breadcrumb" class="container mt-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            {{ $t("Settings") }}
          </li>
          <li class="breadcrumb-item fw-bold active text-success" aria-current="page">
            {{ $t('MyAccount') }}
          </li>
        </ol>
      </nav>
      <UserAccountManagementComp class="mt-4 mb-5" />
    </div>
  </div>
</template>
<script setup lang="ts">
import UserAccountManagementComp from '@/appModules/account/component/UserAccountManagementComp.vue'
import { useUserLoginStore } from '@/appModules/account/store/UserLoginStore'
components: {
  UserAccountManagementComp
}
const store = useUserLoginStore
</script>

<style scoped>
.show {
  right: 0;
}

.spot-background {
  position: absolute;
  top: 80px;
  left: 0;
  width: 100vw;
}

.spot-comp {
  max-width: 400px;
  width: 100%;
}
</style>
