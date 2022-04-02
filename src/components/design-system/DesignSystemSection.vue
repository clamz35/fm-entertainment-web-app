<template>
	<div class="design-system-section">
		<h2 class="design-system-section__title">{{ title }}</h2>
		<div class="design-system-section__content">
			<slot></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	title: { type: String, required: true },
});
</script>

<style scoped lang="scss">
.design-system-section {
	display: flex;

	&__title {
		width: 28.5rem;
	}

	&__content {
		flex: 1;
	}
}
</style>
