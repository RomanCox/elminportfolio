interface VideoContentDetailsType {
    videoId: string;
    videoPublishedAt?: string;
}

export interface VideoType {
    id: string;
    contentDetails: VideoContentDetailsType;
    etag: string;
    kind: string;
}

export interface VideosFromPLResponseType {
    id: string;
    etag: string;
    kind: string;
    items: VideoType[];
}

interface PageInfoType {
    totalResults: number;
    resultsPerPage: number;
}

interface ChannelType {
    id: string;
    contentDetails: {
        relatedPlaylists: {
            likes: string;
            uploads: string;
        },
    }
    etag: string;
    kind: string;
}

export interface PlaylistIDResponseType {
    etag: string;
    items: ChannelType[];
    kind: string;
    pageInfo: PageInfoType;
}

interface ItemSnippetType {
    channelId: string;
    channelTitle: string;
    description: string;
    playlistId: string;
    position: number;
    publishedAt: string;
    resourceId: {
        kind: string;
        videoId: string;
    }
    thumbnails: ThumbnailsType;
    title: string;
    videoOwnerChannelId: string;
    videoOwnerChannelTitle: string;
}

export interface ItemType {
    id: string;
    etag: string;
    kind: string;
    contentDetails: VideoContentDetailsType;
    snippet: ItemSnippetType;
}

export interface PlaylistResponseType {
    etag: string;
    items: ItemType[];
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
    id: string;
    etag: string;
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
