<template>
	<button class="play-button h4">
		<img
			class="play-button__icon"
			src="/images/icon-play.svg"
			alt="Play icon"
		/>
		Play
	</button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.play-button {
	display: flex;
	gap: 1.9rem;
	padding: 0.9rem 2.4rem 0.9rem 0.9rem;
	border-radius: 2.9rem;

	color: var(--primary-color);
	background-color: rgba(255, 255, 255, 0.25);

	font-size: var(--fs-500);

	transition: background-color 0.3s ease;
	cursor: pointer;

	&:hover {
		background-color: rgba(255, 255, 255, 0.5);
	}
}
</style>
