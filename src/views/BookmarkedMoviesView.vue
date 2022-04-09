<template>
	<div>
		<SearchInput />

		<section>
			<Medias :medias="store.bookmarkedMovies" :title="title" />
		</section>
	</div>
</template>

<script setup lang="ts">
import SearchInput from "@/components/ui/SearchInput.vue";
import Medias from "../components/Medias.vue";
import { useMediaStore } from "@/stores/media.store";
import { useMediaTitle } from "@/composables/useMediaTitle";

const store = useMediaStore();

const { title } = useMediaTitle(
	"Bookmarked Movies",
	() => store.bookmarkedMovies
);
</script>

<style scoped lang="scss"></style>
