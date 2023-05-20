<template class="justify-content-center d-flex">
  <HeaderComp />
  <RouterView />
  <FooterComp />
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComp from '@/appModules/common/component/HeaderComp.vue'
import FooterComp from '@/appModules/common/component/FooterComp.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    HeaderComp,
    FooterComp
  },
  setup() {}
})
</script>
<style scoped></style>
