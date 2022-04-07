<template>
	<div>
		<SearchInput />

		<section>
			<Movies :movies="movies" />
		</section>
	</div>
</template>

<script setup lang="ts">
import SearchInput from "@/components/ui/SearchInput.vue";
import Movies from "../components/Movies.vue";
import { useMovieStore } from "@/stores/movie.store";

const { getMovies: movies } = useMovieStore();
</script>

<style scoped lang="scss"></style>
