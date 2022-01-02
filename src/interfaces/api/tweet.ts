import { ShortProfile } from "./shortUser";
import { IApiComment } from "./comment";

export interface ITweet {
    text: string;
    date: number;
    comments: IApiComment[];
    likes: number[];
    author: ShortProfile;
}

export interface IApiTweet extends ITweet {
    id: number;
}
