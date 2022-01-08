import { Athlete } from "./athlete.interface";

export interface FeedElement {
    id: number;
    createdAt: string;
    createdBefore: string;
    author: {
        id: number;
        name: string;
    };
    sportGroup: {
        id: number;
        name: String;
    };
    video: {
        handler: string;
        url: string;
        poster: string;
        type: string;
        length: number;
    };
    description: string;
    athlete: Athlete;
    bookmarked: boolean;
    views: string;
}

