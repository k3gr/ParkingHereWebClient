<template>
    <LoadBarComp :isLoading="getParams.isLoading.value" :isError="getParams.isError.value" />
    <div class="bg-dark h-lg-100">
        <div class="center-form mx-auto p-4 bg-dark col-12 col-sm-9 col-xl-5" data-bs-theme="dark">
            <form @submit.prevent="submitResetPasword">
                <div class="d-flex flex-wrap align-items-center justify-content-center mb-3">
                    <div class="circle-icon">
                        <font-awesome-icon :icon="['fa', 'key']"
                            class="icon text-light position-absolute top-50 start-50 translate-middle" size="2x" />
                    </div>
                    <h2 class="h3 ps-3 border-start text-light">{{ $t('ResetYourPassword') }}</h2>
                </div>
                <div class="row">
                    <div class="col-md-6 my-2">
                        <div class="form-floating">
                            <Field name="password" type="password" class="form-control required"
                                :class="{ 'is-invalid': errors.password }" id="password2" :placeholder="$t('Password')"
                                v-model="getUserResetPassStep2.password" />
                            <label class="text-secondary-emphasis" for="password">{{ $t('Password') }}</label>
                            <ErrorMessage name="password" class="invalid-feedback" />
                        </div>
                    </div>
                    <div class="col-md-6 my-2">
                        <div class="form-floating">
                            <Field name="confirmPassword" type="password" class="form-control required"
                                :class="{ 'is-invalid': errors.confirmPassword }" id="confirmPassword"
                                :placeholder="$t('ConfirmPassword')" v-model="getUserResetPassStep2.confirmPassword" />
                            <label class="text-secondary-emphasis" for="confirmPassword">{{
                                $t('ConfirmPassword')
                            }}</label>
                            <ErrorMessage name="confirmPassword" class="invalid-feedback" />
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center my-3">
                    <button class="btn btn-lg btn-success col-12 col-sm-5 col-xxl-4" type="submit">
                        {{ $t('ResetPassword') }}
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
import UserService from '@/appModules/account/domain/service/UserService'

const props = defineProps({
    token: {
        type: String,
        default: ''
    }
})

const store = useUserRegistrationStore()
const { resetPasswordStep2, getUserResetPassStep2 } = store
const { getParams } = storeToRefs(store)
const service = new UserService()

const { errors, validate } = useForm({
    validationSchema: yup.object().shape({
        password: yup
            .string()
            .required(i18n.global.t('FieldCanNotBeEmpty'))
            .matches(service.MASK_PASSWORD, i18n.global.t('IncorrectPasswordWithMask')),
        confirmPassword: yup
            .string()
            .required(i18n.global.t('FieldCanNotBeEmpty'))
            .test(
                'passwords-match',
                i18n.global.t('IncorrectPasswordConfirmedNotMatch'),
                function (value) {
                    return this.parent.password === value
                }
            ),
    }) as any
})

async function onValidate() {
    let rez = true
    const { valid } = await validate()

    rez = valid
    return rez
}
async function submitResetPasword() {
    if (await onValidate()) {
        resetPasswordStep2(props.token)
    }
}
</script>

<style scoped></style>