<template>
  <div class="main-img">
    <HeaderComp />
    <RouterView />
    <FooterComp />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComp from '@/appModules/common/component/HeaderComp.vue'
import FooterComp from '@/appModules/common/component/FooterComp.vue'
import { onMounted } from 'vue';
import { useUserLoginStore } from '@/appModules/account/store/UserLoginStore';
components: {
  HeaderComp
  FooterComp
}
const userLoginStore = useUserLoginStore()
onMounted(() => {
  userLoginStore.logOutUserWhenTokenExpired()
})
</script>
<style scoped></style>
