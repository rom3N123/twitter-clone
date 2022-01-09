import { IUser } from "@interfaces/api/user";

export interface ITweet {
    _id: string;
    text: string;
    publishTimestamp: number;
    likes: string[];
    replies: string[];
    retweets: string[];
    replyTo?: ITweet;
    user: IUser;
}

export interface IReply extends Omit<ITweet, "replyTo"> {
    replyTo: string;
}

export interface ITweetEditableFields extends Pick<ITweet, "text"> {}
