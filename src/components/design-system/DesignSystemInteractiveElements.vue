<template>
	<div class="design-system-interactive-elements">
		<SearchInput />

		<input type="text" placeholder="Email adresss" />

		<button>Login to your account</button>

		<Thumbnail
			:src="'/src/assets/images/thumbnails/112/regular/large.jpg'"
			title="Movie title"
			subtitle="Movie subtitle"
		/>
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
}
</style>
