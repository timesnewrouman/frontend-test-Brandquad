<template>
	123
</template>

<script setup>
import {ref} from "vue";
import {getInfo, authData, userData} from "@/composables/auth";

if (authData.value) {
	getInfo();
}

// const username = ref(null);
// const password = ref(null);

</script>

<style scoped>

</style>