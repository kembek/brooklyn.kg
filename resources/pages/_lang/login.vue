<template>
<div class="login">
    <v-form ref="form" v-model="valid" class="login-form" lazy-validation @submit.prevent="submit">
        <h1>Авторизация</h1>
        <v-alert :value="alert" type="error" transition="scale-transition">
            Доступ не был предоставлен
        </v-alert>
        <v-text-field box color="info" :mask="'+ (###) ### ##-##-##'" v-model="phone" :rules="phoneRules" label="Номер телефона" required placeholder="+996 XXX YY-YY-YY" > </v-text-field>
        <v-text-field box color="info" v-model="password" :rules="passwordRules" type="password" label="Пароль" required></v-text-field>
        <v-btn type="submit" @click="submit" color="success" class="bt">Войти</v-btn>
    </v-form>
</div>
</template>

<script>
export default {
    layout: 'none',
    async fetch({
        app,
        redirect,
        params
    }) {
        await app.$axios.$get('/auth/').then(res => {
            if (res.status == 200) {
                redirect(`/${params.lang}/admin/`)
            }
        }).catch(error => {})
    },
    data() {
        return {
            alert: false,
            valid: false,
            password: "",
            passwordRules: [
                v => !!v || 'Пароль обезателен'
            ],
            phone: "",
            phoneRules: [
                v => !!v || "Укажите номер телефона",
                v =>
                /^(\+|\d)[0-9]{7,16}$/.test(v) ||
                "Ошибка в правельности телефонного номера"
            ]
        };
    },
    methods: {
        submit() {
            this.alert = false
            if (this.$refs.form.validate()) {
                this.$axios.$post('/auth/', {
                    password: this.password,
                    phone: this.phone
                }).then(res => {
                    this.$router.push(`/${this.$route.params.lang}/admin/`);
                }).catch(error => {
                    this.alert = true
                })
            }
        }
    }
}
</script>

<style lang="less">
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .login-form {
        width: 100%;
        max-width: 500px;
        h1 {
            text-align: center;
        }
        .bt {
            width: 100%;
        }
    }
}
</style>
