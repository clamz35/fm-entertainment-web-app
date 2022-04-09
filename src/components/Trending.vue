<template>
	<h2 class="h1">Trending</h2>
	<div class="trending" ref="trendingElt" @wheel.prevent="wheel">
		<Thumbnail
			class="trending__thumbnail"
			v-for="media in store.trendings"
			:key="media.title"
			:title="media.title"
			:src="media.thumbnail.trending?.large"
			:bookmarked="media.isBookmarked"
			:is-trending="true"
		>
			<template v-slot:subtitle>
				<MediaSubtitle :media="media" />
			</template>
		</Thumbnail>
	</div>
</template>

<script setup lang="ts">
import Thumbnail from "./Thumbnail.vue";
import { useMediaStore } from "@/stores/media.store";
import { ref } from "vue";
import MediaSubtitle from "./MediaSubtitle.vue";

const store = useMediaStore();
const trendingElt = ref<HTMLElement | null>(null);

const wheel = (wheelEvent: WheelEvent) => {
	if (trendingElt.value) {
		trendingElt.value.scrollLeft += wheelEvent.deltaY;
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
