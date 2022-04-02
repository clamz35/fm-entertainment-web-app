<template>
	<div class="search-input">
		<img src="@/assets/images/icon-search.svg" alt="Search icon" />
		<input
			class="search-input__input h2"
			type="text"
			placeholder="Search for movies or TV series"
		/>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.search-input {
	display: flex;

	align-items: flex-start;
	gap: 2.4rem;
	&__input {
		padding-inline: none;
	}
}
</style>
