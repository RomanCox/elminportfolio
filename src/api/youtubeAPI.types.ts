interface VideoContentDetailsType {
    videoId: string;
    videoPublishedAt: string;
}

export interface VideoType {
    contentDetails: VideoContentDetailsType;
    etag: string;
    id: string;
    kind: string;
}

export interface VideosFromPLResponseType {
    etag: string;
    id: string;
    kind: string;
    items: VideoType[];
}

interface PageInfoType {
    totalResults: number;
    resultsPerPage: number;
}

interface ChannelType {
    contentDetails: {
        relatedPlaylists: {
            likes: string;
            uploads: string;
        },
    }
    etag: string;
    id: string;
    kind: string;
}

export interface PlaylistIDResponseType {
    etag: string;
    items: ChannelType[];
    kind: string;
    pageInfo: PageInfoType;
}

interface ThumbnailType {
    height: number;
    url: string;
    width: number;
}

interface ThumbnailsType {
    default: ThumbnailType;
    high: ThumbnailType;
    maxres: ThumbnailType;
    medium: ThumbnailType;
    standard: ThumbnailType;
    title: string;
}

interface SnippetType {
    categoryId: string;
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    localized: { title: string, description: string, };
    publishedAt: string;
    thumbnails: ThumbnailsType;
    title: string;
}

interface VideoSnippetType {
    etag: string;
    id: string;
    kind: string;
    snippet: SnippetType;
}

interface PlayerType {
    embedHtml: string;
}

export interface AllVideosFromChannelResponseType {
    etag: string;
    items: VideoSnippetType[];
    player: PlayerType;
    kind: string;
    pageInfo: PageInfoType;
}
