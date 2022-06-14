<template>
	<nav class="header-nav">
		<ul class="header-nav__menu">
			<li>
				<router-link
					:to="{ name: 'home' }"
					v-slot="{ isActive }"
					aria-label="Home"
				>
					<MenuIcon src="icon-nav-home.svg" :isActive="isActive" />
				</router-link>
			</li>
			<li>
				<router-link
					:to="{ name: 'movies' }"
					v-slot="{ isActive }"
					aria-label="Movies"
				>
					<MenuIcon src="icon-nav-movies.svg" :isActive="isActive" />
				</router-link>
			</li>
			<li>
				<router-link
					:to="{ name: 'series' }"
					v-slot="{ isActive }"
					aria-label="Series"
				>
					<MenuIcon src="icon-nav-tv-series.svg" :isActive="isActive" />
				</router-link>
			</li>
			<li>
				<router-link
					:to="{ name: 'bookmarked-movies' }"
					v-slot="{ isActive }"
					aria-label="Bookmarks"
				>
					<MenuIcon src="icon-nav-bookmark.svg" :isActive="isActive" />
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
import MenuIcon from "@/components/MenuIcon.vue";
</script>

<style scoped lang="scss">
.header-nav {
	--nav--gap: 4rem;
	--nav-direction: column;
	&__menu {
		display: flex;
		flex-direction: var(--nav-direction);
		gap: var(--nav--gap);
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
}
@media (max-width: 768px) {
	.header-nav {
		--nav-direction: row;
	}
}

@media (max-width: 520px) {
	.header-nav {
		--nav--gap: 2.4rem;
	}
}
</style>
