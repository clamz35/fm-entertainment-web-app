<template>
	<div>
		<SearchInput />

		<section>
			<Movies :movies="bookmarkedMovies" title="Bookmarked Movies" />
		</section>
	</div>
</template>

<script setup lang="ts">
import SearchInput from "@/components/ui/SearchInput.vue";
import Movies from "../components/Movies.vue";
import { useMovieStore } from "@/stores/movie.store";

const { bookmarkedMovies } = useMovieStore();
</script>

<style scoped lang="scss"></style>
