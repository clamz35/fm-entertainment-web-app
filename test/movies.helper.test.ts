import { describe, it, expect } from "vitest";

import {
	getBookmarked,
	getMovies,
	getSeries,
	getTrendings,
} from "../src/helpers/movies.helper";

const mediasMock = [
	{
		title: "Beyond Earth",
		thumbnail: {
			trending: {
				small: "/images/thumbnails/beyond-earth/trending/small.jpg",
				large: "/images/thumbnails/beyond-earth/trending/large.jpg",
			},
			regular: {
				small: "/images/thumbnails/beyond-earth/regular/small.jpg",
				medium: "/images/thumbnails/beyond-earth/regular/medium.jpg",
				large: "/images/thumbnails/beyond-earth/regular/large.jpg",
			},
		},
		year: 2019,
		category: "Movie",
		rating: "PG",
		isBookmarked: false,
		isTrending: true,
	},
	{
		title: "The Diary",
		thumbnail: {
			regular: {
				small: "/images/thumbnails/the-diary/regular/small.jpg",
				medium: "/images/thumbnails/the-diary/regular/medium.jpg",
				large: "/images/thumbnails/the-diary/regular/large.jpg",
			},
		},
		year: 2019,
		category: "TV Series",
		rating: "PG",
		isBookmarked: true,
		isTrending: false,
	},
];

describe("Movies Helper", () => {
	describe("getTrendings", () => {
		it("should return an array of trendings", () => {
			expect(getTrendings(mediasMock)).toEqual([mediasMock[0]]);
		});
	});
	describe("getBookmarked", () => {
		it("should return an array of bookmarked", () => {
			expect(getBookmarked(mediasMock)).toEqual([mediasMock[1]]);
		});
	});

	describe("getSeries", () => {
		it("should return an array of series", () => {
			expect(getSeries(mediasMock)).toEqual([mediasMock[1]]);
		});
	});

	describe("getMovies", () => {
		it("should return an array of movies", () => {
			expect(getMovies(mediasMock)).toEqual([mediasMock[0]]);
		});
	});
});
