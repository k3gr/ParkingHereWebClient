<template>
    <div class="login-form position-absolute top-50 start-50 translate-middle p-3 bg-dark col-12 col-sm-8 col-lg-6 col-xl-4" data-bs-theme="dark">
        <form>
            <div class="d-flex align-items-center justify-content-center">
                <div class="person-icon position-relative rounded-circle border border-3 border-success me-3">
                    <font-awesome-icon :icon="['fa', 'user']" class="icon text-success position-absolute top-50 start-50 translate-middle" size="3x"/>
                </div>
                <h2 class="h3 ps-3 border-start">{{ $t('Login') }}</h2>
            </div>
            <div class="form-floating my-3">
                <input type="email" class="form-control" id="floatingInput" :placeholder="$t('EmailAddress')">
                <label for="floatingInput">{{ $t('EmailAddress') }}</label>
            </div>
            <div class="form-floating my-3">
                <input type="password" class="form-control" id="floatingPassword" :placeholder="$t('Password')">
                <label for="floatingPassword">{{ $t('Password') }}</label>
            </div>
            <div class="checkbox mb-3">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input bg-success" id="submit" />
                    <label class="form-check-label" for="submit">{{ $t('RememberMe') }}</label>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <button class="w-50 btn btn-lg btn-success" type="submit">{{ $t('SignIn') }}</button>
            </div>
            <div class="mt-3">
                <span class="m-0 me-2">{{ $t('FirstTimeOnParkingHere') }}</span><router-link class="text-decoration-none text-success d-block d-sm-inline" :to="{name: 'login'}">{{ $t('SignUp') }}.</router-link>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.person-icon{
    width: 80px;
    height: 80px;
}
</style>