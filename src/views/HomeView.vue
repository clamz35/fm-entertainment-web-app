<template>
	<div>
		<SearchInput />

		<div v-if="!store.filter">
			<section class="home__section home__trending">
				<Trending />
			</section>
			<section class="home__section home__recommended-movies">
				<Medias :medias="store.recommendedMovies" title="Recommended Movies" />
			</section>
		</div>

		<div v-if="store.filter">
			<section>
				<Medias :medias="store.mediasFiltered" :title="title" />
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
import SearchInput from "@/components/ui/SearchInput.vue";
import Trending from "../components/Trending.vue";
import Medias from "../components/Medias.vue";
import { useMediaStore } from "@/stores/media.store";
import { useMediaTitle } from "@/composables/useMediaTitle";

const store = useMediaStore();

const { title } = useMediaTitle("Movies", () => store.mediasFiltered);
</script>

<style scoped lang="scss">
.home__section {
	& + & {
		margin-top: 4rem;
	}
}
</style>
