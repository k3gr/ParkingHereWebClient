<template>
    <div>
        <OperationMessageComp :isOperationSuccess="isActivationSuccess" :operationType="$t('ActivationOperation')"
            :additionalSuccessText="$t('YouCanNowSignInToYourAccount')"
            :additionalFailureText="$t('ActivationTokenExpiredTryAgain')" />
    </div>
</template>

<script setup lang="ts">
import { useUserRegistrationStore } from '@/appModules/account/store/UserRegistrationStore';
import OperationMessageComp from '@/appModules/common/component/OperationMessageComp.vue'
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

components: {
    OperationMessageComp
}

const store = useUserRegistrationStore()
const { activation } = store
const { isActivationSuccess } = storeToRefs(store)
const route = useRoute();
const token = ref()

onMounted(() => {
    if (route.query.token) {
        token.value = route.query.token
        activation(token.value)
    }
});
</script>

<style scoped></style>