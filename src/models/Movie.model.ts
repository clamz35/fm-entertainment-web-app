export interface IMovieThumbnailSizes {
	small: string;
	medium: string;
	large?: string;
}

export interface IMovieThumbnail {
	trending?: IMovieThumbnailSizes;
	regular: IMovieThumbnailSizes;
}

export interface IMovie {
	title: string;
	thumbnail: IMovieThumbnail;
	year: number;
	category: string;
	rating: string;
	isBookmarked: boolean;
	isTrending: boolean;
}
