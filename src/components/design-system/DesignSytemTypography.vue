<template>
	<div class="design-system-typoghraphy">
		<div class="design-system-typoghraphy__heading">
			<DesignSytemTypographyBlock label=" Heading (L) - Outfit Light - 32px">
				<h1>Lorem ipsum dolor sit amet</h1>
			</DesignSytemTypographyBlock>
			<DesignSytemTypographyBlock label=" Heading (M) - Outfit Light - 24px">
				<h2>Consectetuer adipiscing elit</h2>
			</DesignSytemTypographyBlock>
			<DesignSytemTypographyBlock label=" Heading (S) - Outfit Medium - 24px">
				<h3>Donec odio quisque volutpat mattis eros</h3>
			</DesignSytemTypographyBlock>
			<DesignSytemTypographyBlock label=" Heading (XS) - Outfit Medium - 18px">
				<h4>Nullam malesuada erat ut turpis</h4>
			</DesignSytemTypographyBlock>
		</div>

		<div class="design-system-typoghraphy__text">
			<DesignSytemTypographyBlock label="Body (M) - Outfit Light - 15px">
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
					hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
					vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
					laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
					eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
				</p>
			</DesignSytemTypographyBlock>

			<DesignSytemTypographyBlock label="Body (S) - Outfit Light - 13px">
				<p class="text--s">
					Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
					sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
					justo. Suspendisse potenti.
				</p>
			</DesignSytemTypographyBlock>
		</div>
	</div>
</template>

<script setup lang="ts">
import DesignSytemTypographyBlock from "@/components/design-system/DesignSytemTypographyBlock.vue";
</script>

<style scoped lang="scss">
.design-system-typoghraphy {
	display: flex;
	gap: 3rem;
	&__heading,
	&__text {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 3.2rem;
	}
}
</style>
