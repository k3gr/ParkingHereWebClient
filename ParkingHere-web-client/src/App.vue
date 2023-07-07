<template class="justify-content-center d-flex">
  <div class="main-img" alt="Main view">
    <HeaderComp />
    <RouterView />
    <FooterComp />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComp from '@/appModules/common/component/HeaderComp.vue'
import FooterComp from '@/appModules/common/component/FooterComp.vue'
components: {
  HeaderComp
  FooterComp
}
</script>
<style scoped></style>
