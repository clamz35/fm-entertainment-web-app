import type { IMovie } from "@/models/Movie.model";

export function getTrendings(movies: IMovie[]): IMovie[] {
	return movies?.filter((movie) => movie.isTrending);
}

export function getRecommended(movies: IMovie[]): IMovie[] {
	return movies?.filter((movie) => !movie.isTrending);
}

export function getMovies(movies: IMovie[]): IMovie[] {
	return movies.filter((movie) => movie.category === "Movie");
}

export function getSeries(movies: IMovie[]): IMovie[] {
	return movies.filter((movie) => movie.category === "TV Series");
}

export function getBookmarked(movies: IMovie[]): IMovie[] {
	return movies.filter((movie) => movie.isBookmarked);
}
