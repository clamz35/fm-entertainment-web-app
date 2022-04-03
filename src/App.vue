<template>
	<div class="app">
		<header><HeaderLayout /></header>
		<main class="app__main">
			<RouterView />
		</main>
	</div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

import HeaderLayout from "@/layout/HeaderLayout.vue";
</script>

<style lang="scss">
@use "@/assets/styles.scss";

.app {
	display: grid;
	grid-template-columns: 16.4rem 1fr;
	grid-template-rows: 1fr;
	padding-block: 3.2rem;
	&__main {
		height: 100%;
		padding-block: 3.2rem;
	}
}
</style>
