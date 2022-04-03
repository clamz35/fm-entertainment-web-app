<template>
	<div class="header">
		<router-link :to="{ name: 'home' }" class="header__logo">
			<img src="@/assets/images/logo.svg" alt="Entertainment web app logo" />
		</router-link>
		<HeaderNav class="header__nav" />
	</div>
</template>

<script setup lang="ts">
import HeaderNav from "@/layout/HeaderNav.vue";
</script>

<style scoped lang="scss">
.header {
	position: fixed;
	top: 3.2rem;
	bottom: 3.2rem;
	left: 3.2rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-block: 3.2rem;
	width: 9.6rem;
	border-radius: 2rem;

	background-color: var(--secondary-color-300);
	&__top {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	&__logo {
		flex: 0;
		margin-bottom: 7.5rem;
	}

	&__nav {
		flex: 1;
		color: #5a698f;
	}
}
</style>
