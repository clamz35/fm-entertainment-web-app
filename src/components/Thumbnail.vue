<template>
	<div class="thumbnail">
		<div
			class="thumbnail__card thumbnail-card"
			:class="{
				'thumbnail-card--bookmarked': bookmarked,
				'thumbnail-card--trending': isTrending,
			}"
		>
			<img class="thumbnail-card__img" :src="src" :alt="title" />
			<i class="thumbnail-card__bookmark"></i>

			<div class="thumbnail-card__play-btn">
				<PlayButton />
			</div>
			<div
				class="thumbnail__titles thumbnail-titles thumbnail-titles--trending"
				v-if="isTrending"
			>
				<p class="text--s thumbnail-titles__subtitle">{{ subtitle }}</p>
				<h3 class="thumbnail-titles__title">{{ title }}</h3>
			</div>
		</div>

		<div class="thumbnail__titles thumbnail-titles" v-if="!isTrending">
			<p class="text--s thumbnail-titles__subtitle">{{ subtitle }}</p>
			<h3 class="h4 thumbnail-titles__title">{{ title }}</h3>
		</div>
	</div>
</template>

<script setup lang="ts">
import PlayButton from "@/components/PlayButton.vue";
defineProps({
	src: {
		type: String,
		required: true,
		default: "",
	},
	title: {
		type: String,
		default: "",
	},
	subtitle: {
		type: String,
		default: "",
	},
	bookmarked: {
		type: Boolean,
		default: false,
	},
	isTrending: {
		type: Boolean,
		default: false,
	},
});
</script>

<style scoped lang="scss">
.thumbnail {
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
	&__card {
		position: relative;

		border-radius: 0.8rem;
		overflow: hidden;
	}

	&-card {
		$cardRef: &;

		&--trending::after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 0;

			width: 100%;
			height: 10rem;

			background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0.0001) 0%,
				rgba(0, 0, 0, 0.75) 100%
			);
		}

		&__img {
			width: 100%;
		}
		&__bookmark {
			position: absolute;
			top: 1.6rem;
			right: 1.6rem;
			z-index: 10;

			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			width: 3.2rem;
			aspect-ratio: 1;

			background-color: hsl(var(--secondary-color-hsl) / 0.5);

			transition: background-color 0.3s ease;
			cursor: pointer;

			#{$cardRef}--bookmarked & {
				&::after {
					background-image: url("/images/icon-bookmark-full.svg");
				}
			}
			&::after {
				content: "";
				background-image: url("/images/icon-bookmark-empty.svg");
				width: 12px;
				height: 14px;
				transition: filter 0.5s ease-in-out;
			}

			&:hover {
				background-color: var(--primary-color);
				&::after {
					filter: invert(1);
				}
			}
		}

		&__play-btn {
			position: absolute;
			top: 50%;
			left: 50%;

			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			transform: translate(-50%, -50%);

			opacity: 0;

			transition: opacity 0.3s ease, background-color 0.2s ease-in-out;
		}

		&:hover {
			#{$cardRef}__play-btn {
				background-color: rgba(0, 0, 0, 0.5);
				opacity: 1;
			}
		}
	}
	&-titles {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		&--trending {
			position: absolute;
			bottom: 2.4rem;
			left: 2.4rem;
			z-index: 10;
		}
		&__subtitle {
			color: rgba(#fff, 0.75);
		}

		&__title {
			line-height: 1;
		}
	}
}
</style>
