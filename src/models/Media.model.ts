export interface IMediaThumbnailSizes {
	small: string;
	medium: string;
	large?: string;
}

export interface IMediaThumbnail {
	trending?: IMediaThumbnailSizes;
	regular: IMediaThumbnailSizes;
}

export interface IMedia {
	title: string;
	thumbnail: IMediaThumbnail;
	year: number;
	category: string;
	rating: string;
	isBookmarked: boolean;
	isTrending: boolean;
}
