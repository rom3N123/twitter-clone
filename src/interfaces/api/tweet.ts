import { IUser } from "@interfaces/api/user";

export interface ITweet {
    _id: string;
    text: string;
    publishTimestamp: number;
    likes: string[];
    replies: string[];
    retweets: string[];
    replyTo?: string;
    user: IUser;
}

export interface ITweetEditableFields extends Pick<ITweet, "text"> {}
