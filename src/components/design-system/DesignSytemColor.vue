<template>
	<main>
		<div class="ds-color">
			<div class="ds-color__preview"></div>
			<div class="ds-color__description">
				<div class="ds-color__hex">
					<span class="ds-color__value">{{ hex }}</span>
				</div>
				<div class="ds-color__rgb">
					<span class="ds-color__label">RGB</span>
					<span class="ds-color__value">{{ rgb }}</span>
				</div>
				<div class="ds-color__hsl">
					<span class="ds-color__label">HSL</span>
					<span class="ds-color__value">{{ hsl }}</span>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
defineProps({
	hex: { type: String, required: true },
	rgb: { type: String, required: true },
	hsl: { type: String, required: true },
});
</script>

<style scoped lang="scss">
.ds-color {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&__preview {
		border-radius: 1rem;
		background-color: var(--dsPreviewBgColor, var(--primary-color));
		border: 1px solid var(--dsPreviewBorderColor, var(--dsPreviewBgColor));
		height: 9rem;
		width: 100%;
		min-width: 2rem;
	}
}
</style>
