<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script setup>
import {storeData} from "@/store/store";
import {provide} from "vue";

const appStoreData = storeData();

provide('store', appStoreData)
</script>

<style scoped>

</style>
