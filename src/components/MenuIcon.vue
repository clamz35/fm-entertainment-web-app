<template>
	<img :src="imageSrc" :alt="alt" />
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
	src: {
		type: String,
		default: "",
	},
	alt: {
		type: String,
		default: "",
	},
});

const imageSrc = computed(
	() => new URL(`/src/assets/images/${props.src}`, import.meta.url).href
);
</script>

<style scoped lang="scss">
img {
	transition: filter 0.2s ease-in-out;
	cursor: pointer;
	&:hover {
		filter: brightness(0) invert(1);
	}
}
</style>
