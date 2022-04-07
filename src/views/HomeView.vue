<template>
	<div>
		<SearchInput />

		<section class="home__section home__trending">
			<Trending />
		</section>

		<section class="home__section home__recommended-movies">
			<Movies :movies="recommendedMovies" title="Recommended Movies" />
		</section>
	</div>
</template>

<script setup lang="ts">
import SearchInput from "@/components/ui/SearchInput.vue";
import Trending from "../components/Trending.vue";
import Movies from "../components/Movies.vue";
import { useMovieStore } from "@/stores/movie.store";

const { recommendedMovies } = useMovieStore();
</script>

<style scoped lang="scss">
.home__section {
	& + & {
		margin-top: 4rem;
	}
}
</style>
