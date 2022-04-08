<template>
	<nav class="header-nav">
		<ul class="header-nav__menu">
			<li>
				<router-link :to="{ name: 'home' }" aria-label="Home">
					<MenuIcon src="icon-nav-home.svg" />
				</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'movies' }" aria-label="Movies">
					<MenuIcon src="icon-nav-movies.svg" />
				</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'series' }" aria-label="Series">
					<MenuIcon src="icon-nav-tv-series.svg" />
				</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'bookmarked-movies' }" aria-label="Bookmarks">
					<MenuIcon src="icon-nav-bookmark.svg" />
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
	&__menu {
		display: flex;
		flex-direction: column;
		gap: 4rem;
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
}
@media (max-width: 768px) {
	.header-nav {
		&__menu {
			flex-direction: row;
		}
	}
}
</style>

<style lang="scss">
.header-nav__menu {
	.router-link-active img {
		filter: brightness(0) invert(1);
	}
}
</style>
