<template>
	<h2 class="h1">Recommended for you</h2>
	<div class="recommended-movies">
		<Thumbnail
			class="recommended-movies__thumbnail"
			v-for="movie in recommendedMovies"
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
import { getRecommanded } from "@/helpers/movies.helper";
import { ref } from "vue";
import Thumbnail from "./Thumbnail.vue";

const recommendedMovies = ref(getRecommanded());
</script>

<style scoped lang="scss">
.recommended-movies {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 4rem;
}
</style>
