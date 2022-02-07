import { ShortProfile } from "./shortUser";

export interface IComment {
    text: string;
    date: number;
    tweetId: number;
    author: ShortProfile;
}

export interface IApiComment extends IComment {
    id: number;
}
