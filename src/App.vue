<template>
	<div class="app">
		<header><HeaderLayout /></header>
		<main class="app__main">
			<RouterView v-slot="{ Component }">
				<Component :is="Component" />
			</RouterView>
		</main>
	</div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

import HeaderLayout from "@/layout/HeaderLayout.vue";
import { useMediaStore } from "./stores/media.store";
import { ref } from "vue";
const show = ref(false);

useMediaStore().loadMovies();
</script>

<style lang="scss">
@use "@/assets/styles.scss";

.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}

.fade-leave-to,
.fade-enter-from {
	opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: all 1s ease;
}
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
