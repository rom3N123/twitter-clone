import React from "react";
import Tweet, { ITweetProps } from "@components/TweetComponents/Tweet/Tweet";
import { ITweet } from "@types/api/tweet";
import TweetsService from "@services/TweetsService";

export interface ISimpleTweetProps extends Omit<ITweetProps, "onDeleteClick"> {
    onDelete?: (tweet: ITweet) => void;
}

const SimpleTweet = React.forwardRef<HTMLDivElement, ISimpleTweetProps>(
    (
        { tweet, onFavoriteClick, onDelete, ...otherProps },
        ref
    ): React.ReactElement => {
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
                ref={ref}
                {...otherProps}
            />
        );
    }
);

export default SimpleTweet;
