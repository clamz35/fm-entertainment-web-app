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
import { useMediaStore } from "./stores/media.store";

useMediaStore().loadMovies();
</script>

<style lang="scss">
@use "@/assets/styles.scss";

.app {
	display: grid;
	grid-template-columns: 12.8rem 1fr;
	grid-template-rows: 1fr;
	padding-block: 3.2rem;
	&__main {
		height: 100%;
		padding-block: 3.2rem;
		padding-left: 3.6rem;
	}
}

@media (max-width: 768px) {
	.app {
		grid-template-columns: 1fr;
		grid-template-rows: 5.6rem 1fr;
		padding-block: 0;
		&__main {
			padding-block: 3.2rem;
			padding-left: 2.5rem;
		}
	}
}

@media (max-width: 520px) {
	.app {
		&__main {
			padding-left: 1.6rem;
		}
	}
}
</style>
