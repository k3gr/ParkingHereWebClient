<template>
    <LoadBarComp :isLoading="getParams.isLoading.value" :isError="getParams.isError.value" />
    <div class="bg-dark h-lg-100">
        <div class="center-form mx-auto p-4 bg-dark col-12 col-sm-9 col-lg-8 col-xl-4" data-bs-theme="dark">
            <form @submit.prevent="submitResetPasswordStep1">
                <div class="d-flex flex-wrap align-items-center justify-content-center mb-3">
                    <div class="circle-icon">
                        <font-awesome-icon :icon="['fa', 'key']"
                            class="icon text-light position-absolute top-50 start-50 translate-middle" size="2x" />
                    </div>
                    <h2 class="h3 ps-3 border-start text-light">{{ $t('ForgotYourPassword') }}</h2>
                </div>
                <div class="col-md-12 my-2">
                    <div class="form-floating">
                        <Field name="email" type="email" class="form-control required"
                            :class="{ 'is-invalid': errors.email }" id="regEmail" :placeholder="$t('EmailAddress')"
                            v-model="email" />
                        <label class="text-secondary-emphasis" for="regEmail">{{ $t('EmailAddress') }}</label>
                        <ErrorMessage name="email" class="invalid-feedback" />
                    </div>
                </div>
                <div class="d-flex justify-content-center my-3">
                    <button class="btn btn-lg btn-success col-12 col-sm-5 col-xxl-4" type="submit">
                        {{ $t('RemindMe') }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import LoadBarComp from '@/appModules/common/component/LoadBarComp.vue'
components: {
    LoadBarComp
}
import { useUserRegistrationStore } from '@/appModules/account/store/UserRegistrationStore'
import { storeToRefs } from 'pinia'
import { useForm, Form, Field, ErrorMessage } from 'vee-validate'
import i18n from '@/plugins/i18n'
import * as yup from 'yup'
import UserResetPassStep1 from '../domain/dto/UserResetPassStep1';
import { ref } from 'vue';

const store = useUserRegistrationStore()
const { resetPasswordStep1 } = store
const { getParams } = storeToRefs(store)
const email = ref("")

const { errors, validate } = useForm({
    validationSchema: yup.object().shape({
        email: yup
            .string()
            .required(i18n.global.t('FieldCanNotBeEmpty'))
            .email(i18n.global.t('IncorrectFormatEmail'))
            .max(50, i18n.global.t('TextMaxLength', ['50'])),
    }) as any
})

async function onValidate() {
    let rez = true
    const { valid } = await validate()

    rez = valid
    return rez
}
async function submitResetPasswordStep1() {
    if (await onValidate()) {
        resetPasswordStep1(new UserResetPassStep1(email.value))
    }
}
</script>

<style scoped></style>