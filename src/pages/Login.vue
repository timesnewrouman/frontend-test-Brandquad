<template>
	<div class="surface-card p-4 shadow-2 border-round w-full lg:w-6 customClass">
		<div class="text-center mb-5">
			<div class="text-900 text-3xl font-medium mb-3">Авторизация</div>
			<span class="text-600 font-medium line-height-3">Нет аккаунта?</span>
			<a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" href="/register">Зарегистрируйтесь!</a>
		</div>

		<div>
			<label for="userman1" class="block text-900 font-medium mb-2">Username</label>
			<InputText id="userman1" type="text" placeholder="Username" class="w-full mb-3" v-model="username"/>

			<label for="password1" class="block text-900 font-medium mb-2">Password</label>
			<InputText id="password1" type="password" placeholder="Password" class="w-full mb-3" v-model="password"/>
			<Button label="Авторизоваться" class="w-full" @click="loginStore.login(username, password)"></Button>
		</div>
	</div>
</template>

<script setup>
import {inject, ref} from "vue";

const loginStore = inject('store');

const username = ref(null);
const password = ref(null);

</script>

<style lang="scss" scoped>
.customClass {
	display: flex;
	flex-direction: column;
	margin: 250px auto 0 auto;
	max-width: 700px;
}
</style>