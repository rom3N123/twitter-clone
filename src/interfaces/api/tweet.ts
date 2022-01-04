import { IUser } from "@interfaces/api/user";

export interface ITweet {
    _id: string;
    text: string;
    publishTimestamp: number;
    likes: string[];
    comments: string[];
    retweets: string[];
    userId: string;
    user: IUser;
}

export interface ITweetEditableFields extends Pick<ITweet, "text"> {}
