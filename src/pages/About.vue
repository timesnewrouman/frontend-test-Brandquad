<template>
	<div class="surface-card d-flex align-items-center p-4 shadow-2 border-round">
		<div class="text-2xl font-medium text-900 mb-2">
			{{ aboutStore?.userData?.username ? aboutStore.userData.username : "Карточка пользователя" }}
		</div>
		<div style="height: 150px" class="border-2 border-dashed surface-border">
			{{ aboutStore?.userData?.about ? aboutStore.userData.about : "Описание" }}
		</div>
	</div>
</template>

<script setup>
import {inject, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const aboutStore = inject('store');

if (aboutStore.authData) {
	aboutStore.getInfo();
} else {
	router.push({name: 'Login'})
}

</script>

<style scoped>

</style>