<template>
	<div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
		<div class="text-center mb-5">
			<div class="text-900 text-3xl font-medium mb-3">Регистрация</div>
			<span class="text-600 font-medium line-height-3">Уже есть аккаунт?</span>
			<a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" href="/login">Авторизируйтесь!</a>
		</div>

		<div>
			<label for="userman1" class="block text-900 font-medium mb-2">Username</label>
			<InputText id="userman1" type="text" placeholder="Username" class="w-full mb-3" v-model="username"/>

			<label for="password1" class="block text-900 font-medium mb-2">Password</label>
			<InputText id="password1" type="password" placeholder="Password" class="w-full mb-3" v-model="password"/>
			<Button label="Зарегистрироваться" class="w-full" @click="registerStore.register(username, password)"></Button>
		</div>
	</div>
</template>

<script setup>
import {inject, ref} from "vue";

const registerStore = inject('store');

const username = ref(null);
const password = ref(null);

</script>

<style scoped>

</style>