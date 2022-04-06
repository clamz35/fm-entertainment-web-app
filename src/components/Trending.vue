<template>
	<h2 class="h1">Trending</h2>
	<div class="trending">
		<Thumbnail
			class="trending__thumbnail"
			v-for="movie in trendings"
			:key="movie.title"
			:title="movie.title"
			:subtitle="`${movie.year} - ${movie.category}`"
			:src="movie.thumbnail.trending?.large"
			:bookmarked="movie.isBookmarked"
			:is-trending="true"
		/>
	</div>
</template>

<script setup lang="ts">
import Thumbnail from "./Thumbnail.vue";
import { useMovieStore } from "@/stores/movie.store";

const { trendings } = useMovieStore();
</script>

<style scoped lang="scss">
.trending {
	display: flex;
	gap: 4rem;
}
</style>
