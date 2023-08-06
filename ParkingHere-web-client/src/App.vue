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
components: {
  HeaderComp
  FooterComp
}
</script>
<style scoped></style>
