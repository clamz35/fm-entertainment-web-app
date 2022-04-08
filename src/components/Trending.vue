<template>
	<h2 class="h1">Trending</h2>
	<div class="trending" ref="trendingElt" @wheel.up.prevent="wheel">
		<Thumbnail
			class="trending__thumbnail"
			v-for="movie in store.trendings"
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
import { useMediaStore } from "@/stores/media.store";
import { ref } from "vue";

const store = useMediaStore();
const trendingElt: any = ref(null);
console.log(trendingElt);
const wheel = (z) => {
	console.log("wheel", z);
	if (trendingElt.value) {
		trendingElt.value.scrollLeft = trendingElt.value?.scrollLeft + z.deltaY;
	}
};
</script>

<style scoped lang="scss">
.trending {
	display: flex;
	gap: 4rem;
	overflow-x: hidden;
	max-width: calc(100vw - 18.6rem);
	&__thumbnail {
		min-width: 47rem;
	}
}
</style>
