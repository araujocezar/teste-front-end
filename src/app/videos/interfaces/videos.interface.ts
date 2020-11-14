export interface Videos {
    kind: string;
    etag: string;
    nextPageToken?: string;
    regionCode?: string;
    pageInfo: PageInfo;
    items: Item[];
}

export interface Item {
    kind: string;
    etag: string;
    id: Id;
    snippet: Snippet;
    statistics?: Statistics;
}

export interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime?: string;
    tags?: string[];
    categoryId?: string;
    defaultLanguage?: string;
    localized?: Localized;
    defaultAudioLanguage?: string;
}

export interface Thumbnails {
    default: Default;
    medium: Default;
    high: Default;
    standard?: Default;
    maxres?: Default;
}

export interface Default {
    url: string;
    width: number;
    height: number;
}

export interface Id {
    kind: string;
    videoId: string;
}

export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

interface Statistics {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
}

interface Localized {
    title: string;
    description: string;
}
