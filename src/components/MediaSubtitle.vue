<template>
	<span class="media-subtitle">
		<span>{{ media.year }}</span>
		<span class="media-subtitle__divider">•</span>
		<span class="media-subtitle__category">
			<img :src="mediaIcon" :alt="media.category" />{{ media.category }}
		</span>
		<span class="media-subtitle__divider">•</span>
		<span>{{ media.rating }}</span>
	</span>
</template>

<script setup lang="ts">
import type { IMedia } from "@/models/Media.model";
import { computed } from "vue";

interface MediasProps {
	media: IMedia;
}
const props = defineProps<MediasProps>();

const mediaIcon = computed(() => {
	if (props.media.category === "Movie") {
		return "/images/icon-category-movie.svg";
	} else if (props.media.category === "TV Series") {
		return "/images/icon-category-tv.svg";
	} else {
		return "";
	}
});
</script>

<style scoped lang="scss">
.media-subtitle {
	display: flex;
	align-items: center;
	line-height: 1;
	gap: 0.8rem;
	&__category {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}
}
</style>
