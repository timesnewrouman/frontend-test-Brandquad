<template>
	123
</template>

<script setup>
import {inject, ref} from "vue";

const aboutStore = inject('store');

if (aboutStore.authData) {
	aboutStore.getInfo();
}

// const username = ref(null);
// const password = ref(null);

</script>

<style scoped>

</style>