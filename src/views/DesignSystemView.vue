<script setup lang="ts">
import DesignSystemSection from "@/components/design-system/DesignSystemSection.vue";
import DesignSytemColors from "@/components/design-system/DesignSytemColors.vue";
import DesignSytemTypography from "@/components/design-system/DesignSytemTypography.vue";
</script>

<template>
	<main class="design-system">
		<DesignSystemSection title="Color">
			<DesignSytemColors />
		</DesignSystemSection>

		<DesignSystemSection title="Typography">
			<DesignSytemTypography />
		</DesignSystemSection>
	</main>
</template>

<style scoped lang="scss">
.design-system {
	display: flex;
	flex-direction: column;
	gap: 12rem;
	margin-inline: 16.5rem;
}
</style>
