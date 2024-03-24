<template>
	<div class="surface-card p-4 shadow-2 border-round w-full lg:w-6 customClass">
		<Toast/>
		<div class="text-center mb-5">
			<div class="text-900 text-3xl font-medium mb-3">Авторизация</div>
			<span class="text-600 font-medium line-height-3">Нет аккаунта?</span>
			<a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" href="/register">Зарегистрируйтесь!</a>
		</div>

		<div>
			<label for="userman1" class="block text-900 font-medium mb-2">Логин</label>
			<InputText id="userman1" type="text" placeholder="Username" class="w-full mb-3" v-model="username"/>

			<label for="password1" class="block text-900 font-medium mb-2">Пароль</label>
			<InputText id="password1" type="password" placeholder="Password" class="w-full mb-3" v-model="password"/>
			<Button label="Авторизоваться" class="w-full" @click="handleLoginClick()"></Button>
		</div>
	</div>
</template>

<script setup>
import {inject, ref} from "vue";
import {useToast} from "primevue/usetoast";

const toast = useToast();
const loginStore = inject('store');

const username = ref(null);
const password = ref(null);

function handleLoginClick() {
	try {
		loginStore.login(username.value, password.value)
			.then((response) => {
				if (!response?.success && response?.errorStatus == 401) {
					toast.add({
						severity: 'error',
						summary: 'Ошибка',
						detail: `Введите правильные имя пользователя/пароль`,
						life: 3000
					});
				}
			})
	} catch (error) {
		console.error(error);
	}
}

</script>

<style lang="scss" scoped>
.customClass {
	display: flex;
	flex-direction: column;
	margin: 250px auto 0 auto;
	max-width: 700px;
}
</style>