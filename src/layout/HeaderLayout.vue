<template>
	<div class="header">
		<router-link :to="{ name: 'home' }" class="header__logo">
			<img src="/images/logo.svg" alt="Entertainment web app logo" />
		</router-link>
		<HeaderNav class="header__nav" />
		<img
			class="header__avatar"
			src="/images/image-avatar.png"
			alt="User avatar"
		/>
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
	z-index: 1000;

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
		margin-bottom: 7.5rem;
	}

	&__nav {
		flex: 1;
		color: #5a698f;
	}

	&__avatar {
		width: 4rem;
	}
}

@media (max-width: 768px) {
	.header {
		top: 0;
		width: unset;
		bottom: unset;
		right: 0;
		left: 0;

		flex-direction: row;
		height: 5.6rem;
		padding-block: 0;
		padding-inline: 3.2rem;
		border-radius: 0;
		&__logo {
			margin-bottom: unset;
		}

		&__avatar {
			width: 3.2rem;
		}

		&__nav {
			flex: unset;
		}
	}
}

@media (max-width: 520px) {
	.header {
		&__avatar {
			width: 2.4rem;
		}
	}
}
</style>
