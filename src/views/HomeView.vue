<template>
	<div>
		<SearchInput />

		<section class="home__section home__trending">
			<Trending />
		</section>

		<section class="home__section home__recommended-movies">
			<RecommendedMovies />
		</section>
	</div>
</template>
<script setup lang="ts">
import SearchInput from "@/components/ui/SearchInput.vue";
import Trending from "../components/Trending.vue";
import RecommendedMovies from "../components/RecommendedMovies.vue";
</script>

<style scoped lang="scss">
.home__section {
	& + & {
		margin-top: 4rem;
	}
}
</style>
