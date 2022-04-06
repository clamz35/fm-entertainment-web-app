import { getRecommended, getTrendings } from "@/helpers/movies.helper";
import type { IMovie } from "@/models/Movie.model";
import { defineStore } from "pinia";
import data from "../data.json";

export type MovieState = {
	movies: IMovie[];
};

export const useMovieStore = defineStore("movieStore", {
	state: () =>
		({
			movies: [],
		} as MovieState),

	actions: {
		loadMovies() {
			this.movies = data as IMovie[];
		},
	},
	getters: {
		trendings: (state: MovieState): IMovie[] => {
			return getTrendings(state.movies);
		},

		recommendedMovies: (state: MovieState): IMovie[] => {
			return getRecommended(state.movies);
		},

		allMovies: (state: MovieState): IMovie[] => {
			return state.movies;
		},
	},
});
