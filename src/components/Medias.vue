<template>
	<h2 class="h1">{{ title ?? "Movies" }}</h2>
	<div class="recommended-movies">
		<Thumbnail
			class="recommended-movies__thumbnail"
			v-for="media in medias"
			:key="media.title"
			:title="media.title"
			:src="media.thumbnail.regular.large"
			:bookmarked="media.isBookmarked"
			:is-trending="false"
		>
			<template v-slot:subtitle>
				<MediaSubtitle :media="media" />
			</template>
		</Thumbnail>
	</div>
</template>

<script setup lang="ts">
import type { IMedia } from "@/models/Media.model";
import Thumbnail from "./Thumbnail.vue";
import MediaSubtitle from "./MediaSubtitle.vue";

interface MediasProps {
	medias: IMedia[];
	title?: string;
}

defineProps<MediasProps>();
</script>

<style scoped lang="scss">
.recommended-movies {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 4rem;
	margin-right: 3.6rem;
}

@media (max-width: 768px) {
	.recommended-movies {
		grid-template-columns: repeat(3, 1fr);
		gap: 2.9rem;
		margin-right: 2.4rem;
	}
}

@media (max-width: 520px) {
	.recommended-movies {
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin-right: 1.6rem;
	}
}
</style>
