<template>
	<h2 class="h1">{{ title ?? "Movies" }}</h2>
	<div class="recommended-movies">
		<Thumbnail
			class="recommended-movies__thumbnail"
			v-for="movie in movies"
			:key="movie.title"
			:title="movie.title"
			:subtitle="`${movie.year} - ${movie.category}`"
			:src="movie.thumbnail.regular.large"
			:bookmarked="movie.isBookmarked"
			:is-trending="false"
		/>
	</div>
</template>

<script setup lang="ts">
import type { IMedia } from "@/models/Media.model";
import Thumbnail from "./Thumbnail.vue";

interface MoviesProps {
	movies: IMedia[];
	title?: string;
}

defineProps<MoviesProps>();
</script>

<style scoped lang="scss">
.recommended-movies {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 4rem;
}
</style>
