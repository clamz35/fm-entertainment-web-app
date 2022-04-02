<template>
	<div class="thumbnail">
		<img class="thumbnail__img" :src="src" :alt="title" />

		<div class="thumbnail__titles thumbnail-titles">
			<p class="text--s thumbnail-titles__subtitle">{{ subtitle }}</p>
			<h3 class="thumbnail-titles__title">{{ title }}</h3>
		</div>
	</div>
</template>

<script setup lang="ts">
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
});
</script>

<style scoped lang="scss">
.thumbnail {
	&__img {
		border-radius: 0.8rem;
	}
	&-titles {
		&__subtitle {
			color: rgba(#fff, 0.75);
		}
	}
}
</style>
