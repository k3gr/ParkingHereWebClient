<template>
    <div>
        <ResetPasswordStep1 v-if="getResetPasswordStep === 1" />
        <ResetPasswordStep2 v-else-if="getResetPasswordStep === 2" :token="token" />
        <OperationMessageComp v-else-if="getResetPasswordStep === 0 && isResetPasswordSuccess === 2"
            :isOperationSuccess="isResetPasswordSuccess" :operationType="$t('ResetPasswordOperation')"
            :additionalSuccessText="$t('YouCanNowSignInToYourAccount')"
            :additionalFailureText="$t('ResetPasswordTokenExpiredTryAgain')" />
        <OperationMessageComp v-else :isOperationSuccess="isResetPasswordSuccess"
            :operationType="$t('ResetPasswordOperation')" :additionalSuccessText="$t('YouCanNowSignInToYourAccount')"
            :additionalFailureText="$t('PleaseTryAgainLaterIfTheErrorReoccursContactYourAdministrator')" />
    </div>
</template>

<script setup lang="ts">
import { useUserRegistrationStore } from '@/appModules/account/store/UserRegistrationStore';
import ResetPasswordStep1 from '@/appModules/account/component/ResetPasswordStep1.vue';
import ResetPasswordStep2 from '@/appModules/account/component/ResetPasswordStep2.vue';
import OperationMessageComp from '@/appModules/common/component/OperationMessageComp.vue'
import { storeToRefs } from 'pinia';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

components: {
    ResetPasswordStep1
    ResetPasswordStep2
    OperationMessageComp
}

const store = useUserRegistrationStore()
const { verifyPasswordToken } = store
const { isResetPasswordSuccess, getResetPasswordStep } = storeToRefs(store)
const route = useRoute();
const token = ref()

watch(() => route.query.token, (newValue) => {
    if (route.query.token == undefined) {
        store.resetPasswordStep = 1
    }
})

onMounted(() => {
    if (route.query.token) {
        token.value = route.query.token
        verifyPasswordToken(token.value)
    }
    else {
        store.resetPasswordStep = 1
    }
});
</script>

<style scoped></style>