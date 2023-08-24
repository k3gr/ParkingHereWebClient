<template>
    <div class="bg-dark h-100 w-100 center-form d-flex align-items-center justify-content-center flex-column">
        <h2 class="fw-bold text-success">
            <font-awesome-icon :icon="['fa', 'face-frown']" class="icon me-3" size="2x" />{{
                $t('PageNotFound')
            }}
        </h2>
        <div>
            <span class="text-light">{{ $t('GoToHomePage') }}</span> <router-link
                class="text-decoration-none text-success d-block d-sm-inline" :to="{ name: 'home' }">{{ $t('ParkingHere')
                }}.</router-link>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>

<style scoped></style>
