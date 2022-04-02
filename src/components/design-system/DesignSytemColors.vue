<script setup lang="ts">
import DesignSytemColor from "./DesignSytemColor.vue";
</script>

<template>
	<div class="design-system-colors">
		<DesignSytemColor
			class="design-system-colors__color design-system-colors__color--accent"
			hex="#FC4747"
			rgb="252, 71, 71"
			hsl="0°, 97%, 63%"
		/>
		<DesignSytemColor
			class="design-system-colors__color design-system-colors__color--secondary"
			hex="#10141E"
			rgb="16, 20, 30"
			hsl="223°, 30%, 9%"
		/>

		<DesignSytemColor
			class="design-system-colors__color design-system-colors__color--secondary-200"
			hex="#5A698F"
			rgb="90, 105, 143"
			hsl="223°, 23%, 46%"
		/>

		<DesignSytemColor
			class="design-system-colors__color design-system-colors__color--secondary-300"
			hex="#161D2F"
			rgb="22, 29, 47"
			hsl="223°, 36%, 14%"
		/>
		<DesignSytemColor hex="#FFFFFF" rgb="255, 255, 255" hsl="0°, 0%, 100%" />
	</div>
</template>

<style scoped lang="scss">
.design-system-colors {
	display: grid;
	gap: 3rem;
	grid-template-columns: repeat(3, 1fr);

	&__color {
		&--accent {
			--dsPreviewBgColor: var(--accent-color);
		}
		&--secondary {
			--dsPreviewBgColor: var(--secondary-color);
			--dsPreviewBorderColor: var(--secondary-color-200);
		}

		&--secondary-200 {
			--dsPreviewBgColor: var(--secondary-color-200);
		}

		&--secondary-300 {
			--dsPreviewBgColor: var(--secondary-color-300);
		}
	}
}
</style>
