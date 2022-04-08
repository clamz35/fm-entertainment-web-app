import {
	filterMovies,
	getBookmarked,
	getMovies,
	getRecommended,
	getSeries,
	getTrendings,
} from "@/helpers/movies.helper";
import type { IMedia } from "@/models/Media.model";
import { defineStore } from "pinia";
import data from "../data.json";

export type MediaState = {
	medias: IMedia[];
	filter: string;
};

export const useMediaStore = defineStore("mediaStore", {
	state: () =>
		({
			medias: [],
			filter: "",
		} as MediaState),

	actions: {
		loadMovies() {
			this.medias = data as IMedia[];
		},
		setFilter(filter: string) {
			this.filter = filter;
		},
	},
	getters: {
		trendings: (state: MediaState): IMedia[] => {
			return getTrendings(state.medias);
		},

		recommendedMovies: (state: MediaState): IMedia[] => {
			return getRecommended(state.medias);
		},

		movies(state: MediaState): IMedia[] {
			return filterMovies(getMovies(state.medias), state.filter);
		},

		series(state: MediaState): IMedia[] {
			return filterMovies(getSeries(state.medias), state.filter);
		},

		bookmarkedMovies: (state: MediaState): IMedia[] => {
			return filterMovies(getBookmarked(state.medias), state.filter);
		},

		mediasFiltered: (state: MediaState): IMedia[] => {
			return filterMovies(state.medias, state.filter);
		},
	},
});
