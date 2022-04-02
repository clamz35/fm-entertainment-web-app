<template>
	<div class="ds-typography-block">
		<p class="ds-typography-block__label">{{ label }}</p>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
defineProps({
	label: { type: String, required: true },
});
</script>

<style scoped lang="scss">
.ds-typography-block {
	&__label {
		font-size: 1.5rem;
		font-weight: 300;
		color: rgba(#ffffff, 0.75);
	}
}
</style>
