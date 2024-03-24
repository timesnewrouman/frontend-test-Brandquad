<template>
	<div class="surface-card p-4 shadow-2 border-round w-full lg:w-6 customClass">
		<Toast/>
		<div class="text-center mb-5">
			<div class="text-900 text-3xl font-medium mb-3">Регистрация</div>
			<span class="text-600 font-medium line-height-3">Уже есть аккаунт?</span>
			<a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" href="/login">Авторизируйтесь!</a>
		</div>

		<div>
			<label for="userman1" class="block text-900 font-medium mb-2">Логин</label>
			<InputText id="userman1" type="text" placeholder="Username" class="w-full mb-3" v-model="username"/>

			<label for="password1" class="block text-900 font-medium mb-2">Пароль</label>
			<InputText id="password1" type="password" placeholder="Password" class="w-full mb-3" v-model="password"/>
			<Button label="Зарегистрироваться" class="w-full" @click="handleRegisterClick()"></Button>
		</div>
	</div>
</template>

<script setup>
import {inject, ref} from "vue";
import {useToast} from "primevue/usetoast";

const toast = useToast();
const registerStore = inject('store');

const username = ref(null);
const password = ref(null);

function errorCheck() {
	if (username?.value?.length < 3) {
		toast.add({severity: 'error', summary: 'Ошибка', detail: "Слишком короткое имя!", life: 3000});
		return false;
	} else if (password?.value?.length < 4) {
		toast.add({severity: 'error', summary: 'Ошибка', detail: "Слишком короткий пароль!", life: 3000});
		return false;
	} else if (username.value === null || password.value === null) {
		toast.add({severity: 'error', summary: 'Ошибка', detail: "Необходимо указать логин и пароль", life: 3000});
		return false;
	} else {
		return true;
	}
}

function handleRegisterClick() {
	try {
		if (errorCheck()) {
			registerStore.register(username.value, password.value)
				.then((response) => {
					if (!response?.success) {
						toast.add({
							severity: 'error',
							summary: 'Ошибка',
							detail: `${response.errorMessage}`,
							life: 3000
						});
					}
				})
		}
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