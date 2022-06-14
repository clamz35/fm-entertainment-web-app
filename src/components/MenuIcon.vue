<template>
	<img
		class="menu-icon"
		:src="`/images/${props.src}`"
		:alt="alt"
		:class="{ 'menu-icon--active': isActive }"
	/>
</template>

<script setup lang="ts">
const props = defineProps({
	src: {
		type: String,
		default: "",
	},
	alt: {
		type: String,
		default: "",
	},
	isActive: {
		type: Boolean,
		default: false,
	},
});
</script>

<style scoped lang="scss">
.menu-icon {
	transition: filter 0.2s ease-in-out;
	cursor: pointer;
	&:hover,
	&--active {
		filter: brightness(0) invert(1);
	}
}
</style>
