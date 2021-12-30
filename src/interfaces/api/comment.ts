import { ShortProfile } from "./shortProfile";

export interface IComment {
    text: string;
    date: number;
    tweetId: number;
    author: ShortProfile;
}

export interface IApiComment extends IComment {
    id: number;
}
