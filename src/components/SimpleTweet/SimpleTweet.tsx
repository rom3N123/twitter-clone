import React from "react";
import Tweet, { ITweetProps } from "@components/Tweet/Tweet";
import { ITweet } from "@interfaces/api/tweet";
import TweetsService from "@services/TweetsService";

export interface ISimpleTweetProps extends Omit<ITweetProps, "onDeleteClick"> {
    onDelete?: (tweet: ITweet) => void;
}

const SimpleTweet: React.FC<ISimpleTweetProps> = ({
    tweet,
    onFavoriteClick,
    onDelete,
}): React.ReactElement => {
    const { user, _id } = tweet;

    const onDeleteClickHandler = async (): Promise<void> => {
        await TweetsService.delete(user._id, _id);
        if (onDelete) {
            onDelete(tweet);
        }
    };

    return (
        <Tweet
            tweet={tweet}
            onFavoriteClick={onFavoriteClick}
            onDeleteClick={onDeleteClickHandler}
        />
    );
};

export default SimpleTweet;
