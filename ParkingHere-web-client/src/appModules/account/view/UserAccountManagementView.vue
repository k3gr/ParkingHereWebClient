<template>
  <div class="light-view">
    <div class="container-xxl p-0">
      <UserAccountManagementComp class="my-4" />
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
