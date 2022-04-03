import type { IMovie } from "@/models/Movie.model";
import data from "../data.json";

export function getTrendings(): IMovie[] {
	return (data as unknown as IMovie[]).filter((movie) => movie.isTrending);
}

export function getRecommanded(): IMovie[] {
	return (data as unknown as IMovie[]).filter((movie) => !movie.isTrending);
}
