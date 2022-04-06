import type { IMovie } from "@/models/Movie.model";

export function getTrendings(movies: IMovie[]): IMovie[] {
	return movies?.filter((movie) => movie.isTrending);
}

export function getRecommended(movies: IMovie[]): IMovie[] {
	return movies?.filter((movie) => !movie.isTrending);
}
