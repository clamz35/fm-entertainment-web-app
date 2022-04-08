<template>
	<div class="search-input">
		<img src="@/assets/images/icon-search.svg" alt="Search icon" />
		<input
			class="search-input__input h2"
			type="text"
			placeholder="Search for movies or TV series"
			:value="filter"
			@input="store.setFilter(($event.target as any).value)"
		/>
	</div>
</template>

<script setup lang="ts">
import { useMediaStore } from "@/stores/media.store";
const store = useMediaStore();
const { filter } = store;
</script>

<style scoped lang="scss">
.search-input {
	display: flex;

	align-items: flex-start;
	gap: 2.4rem;
	margin-bottom: 1.7rem;
	&__input {
		padding-inline: none;
	}
}
</style>
