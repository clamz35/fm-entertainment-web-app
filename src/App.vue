<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
	<header>test</header>
	<main class="app__main">
		<RouterView />
	</main>
</template>

<style lang="scss">
@use "@/assets/styles.scss";

.app__main {
	padding-block: 12rem;
}
</style>
