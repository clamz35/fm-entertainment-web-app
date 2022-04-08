import type { IMedia } from "@/models/Media.model";

export function getTrendings(movies: IMedia[]): IMedia[] {
	return movies?.filter((movie) => movie.isTrending);
}

export function getRecommended(movies: IMedia[]): IMedia[] {
	return movies?.filter((movie) => !movie.isTrending);
}

export function getMovies(movies: IMedia[]): IMedia[] {
	return movies.filter((movie) => movie.category === "Movie");
}

export function getSeries(movies: IMedia[]): IMedia[] {
	return movies.filter((movie) => movie.category === "TV Series");
}

export function getBookmarked(movies: IMedia[]): IMedia[] {
	return movies.filter((movie) => movie.isBookmarked);
}

export function filterMovies(movies: IMedia[], filter: string): IMedia[] {
	return movies.filter((movie) =>
		movie.title.toLowerCase().includes(filter.toLowerCase())
	);
}
