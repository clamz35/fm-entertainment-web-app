<template>
	<div class="design-system-interactive-elements">
		<SearchInput />

		<input type="text" placeholder="Email adresss" />

		<button class="btn">Login to your account</button>

		<div class="design-system-interactive-elements__thumbnails">
			<Thumbnail
				:src="'/src/assets/images/thumbnails/112/regular/large.jpg'"
				title="Movie title"
				subtitle="Movie subtitle"
			/>
			<Thumbnail
				:src="'/src/assets/images/thumbnails/112/regular/large.jpg'"
				:active="true"
				title="Movie title"
				subtitle="Movie subtitle"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import SearchInput from "@/components/ui/SearchInput.vue";
import Thumbnail from "@/components/Thumbnail.vue";
</script>

<style scoped lang="scss">
.design-system-interactive-elements {
	display: flex;
	flex-direction: column;
	gap: 5rem;
	max-width: 50rem;
	&__thumbnails {
		display: flex;
		gap: 3rem;
	}
}
</style>
