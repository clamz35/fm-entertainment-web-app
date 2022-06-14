<template>
	<h2 class="h1">{{ title ?? "Movies" }}</h2>
	<div class="recommended-movies">
		<TransitionGroup
			@beforeEnter="onBeforeEnter"
			@enter="onEnter"
			@leave="onLeave"
			:css="false"
			appear
		>
			<Thumbnail
				class="recommended-movies__thumbnail"
				v-for="(media, index) in medias"
				:key="media.title"
				:data-index="index"
				:data-count="medias.length"
				:title="media.title"
				:src="media.thumbnail.regular.large"
				:bookmarked="media.isBookmarked"
				:is-trending="false"
			>
				<template v-slot:subtitle>
					<MediaSubtitle :media="media" />
				</template>
			</Thumbnail>
		</TransitionGroup>
	</div>
</template>

<script setup lang="ts">
import type { IMedia } from "@/models/Media.model";
import Thumbnail from "./Thumbnail.vue";
import MediaSubtitle from "./MediaSubtitle.vue";
import { gsap } from "gsap";

export interface MediasProps {
	medias: IMedia[];
	title?: string;
}

defineProps<MediasProps>();
function onBeforeEnter(el: Element) {
	(el as HTMLElement).style.opacity = "0";
}
function onEnter(el: Element, done: (cancelled: boolean) => void) {
	const dataset = (el as HTMLElement)?.dataset;

	const index = dataset?.index ? +dataset.index : 1;
	gsap.to(el, {
		opacity: 1,
		duration: 0.25,
		delay: (index % 4) * 0.15 + (index / 4) * 0.15,
		onComplete: done,
	});
}
function onLeave(el: Element, done: (cancelled: boolean) => void) {
	const { dataset } = el as HTMLElement;
	const index = dataset?.index ? +dataset.index : 1;
	const count = dataset?.count ? +dataset.count : 1;
	gsap.to(el, {
		opacity: 0,
		duration: 0.15,
		delay: ((count - index) % 4) * 0.15,
		onComplete: done,
	});
}
</script>

<style scoped lang="scss">
.slide-leave-active,
.slide-enter-active {
	transition: transform 0.5s ease-in-out, opacity 0.3s ease;
}

.slide-leave-to,
.slide-enter-from {
	transform: translateX(100%);
	opacity: 0;
}
.slide-leave-from,
.slide-enter-to {
	transform: translateX(0);
}

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
