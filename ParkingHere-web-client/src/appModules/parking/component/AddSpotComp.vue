<template>
    <LoadBarComp :isLoading="getParams.isLoading.value" :isError="getParams.isError.value" />
    <div class="h-lg-100">
        <div class="center-form mx-auto p-3 col-12 col-md-9 col-sm-9 col-xl-5">
            <form @submit.prevent="submitNewSpot()">
                <div class="d-flex flex-wrap align-items-center justify-content-center mb-3">
                    <div class="circle-icon">
                        <div class="position-absolute top-50 start-50 translate-middle d-flex align-items-center">
                            <font-awesome-icon :icon="['fa', 'parking']" class="icon me-1" size="2x" />
                            <font-awesome-icon :icon="['fa', 'plus']" class="icon fs-5" size="1x" />
                        </div>
                    </div>
                    <h2 class="h3 ps-3 border-start border-dark">{{ $t('NewSpot') }}</h2>
                </div>
                <div class="col-md-12 my-3">
                    <div class="form-floating">
                        <Field name="price" type="text" class="form-control required"
                            :class="{ 'is-invalid': errors.price }" id="price" :placeholder="$t('Price')"
                            v-model="getCreateSpotDto.price" />
                        <label class="text-secondary-emphasis" for="price">{{ $t('Price') }}</label>
                        <ErrorMessage name="price" class="invalid-feedback" />
                    </div>
                </div>
                <div class="col-md-12 my-3">
                    <div class="form-floating">
                        <Field as="select" name="type" class="form-select required" :class="{ 'is-invalid': errors.type }"
                            id="type" v-model="getCreateSpotDto.type">
                            <option value="" disabled selected hidden>{{ $t('SelectType') }}</option>
                            <option v-for="(type, index) in types" class="row table-body" :key="index" :value="type">
                                {{ type }}
                            </option>
                        </Field>
                        <label class="text-secondary-emphasis" for="type">{{ $t('Type') }}</label>
                        <ErrorMessage name="type" class="invalid-feedback" />
                    </div>
                </div>
                <div class="d-flex justify-content-center mt-4">
                    <button class="btn btn-lg btn-success col-12 col-sm-5 col-xxl-4" type="submit">
                        {{ $t('Add') }}
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
import { storeToRefs } from 'pinia'
import i18n from '@/plugins/i18n'
import * as yup from 'yup'
import { useForm, Form, Field, ErrorMessage } from 'vee-validate'
import { SpotTypeEnum } from '@/appModules/reservation/domain/enumerated/SpotTypeEnum';
import { useSpotStore } from '@/appModules/parking/store/SpotStore';
import { useRoute } from 'vue-router';

const { errors, validate } = useForm({
    validationSchema: yup.object().shape({
        price: yup
            .number()
            .required(i18n.global.t('FieldCanNotBeEmpty'))
            .typeError(i18n.global.t("ValueMustByNumber"))
            .min(1, i18n.global.t("ValueMin1", ["0"]))
            .max(1000, i18n.global.t("ValueMax1000", ["1000"])),
        type: yup
            .string()
            .required(i18n.global.t('FieldCanNotBeEmpty'))
            .max(25, i18n.global.t('TextMaxLength', ['25'])),
    }) as any
})

const spotStore = useSpotStore()
const { addSpot } = spotStore
const { getParams, getCreateSpotDto } = storeToRefs(spotStore)
const route = useRoute();

const types = [SpotTypeEnum.Standard, SpotTypeEnum.Bus, SpotTypeEnum.Vip]

async function onValidate() {
    let rez = true
    const { valid } = await validate()

    rez = valid
    return rez
}

async function submitNewSpot() {
    if (await onValidate()) {
        if (route.params.id) {
            let parkingId = route.params.id;
            addSpot(parkingId)
        }
    }
}
</script>

<style scoped>
input,
textarea {
    border: solid 1px rgb(175, 175, 175);
}
</style>
