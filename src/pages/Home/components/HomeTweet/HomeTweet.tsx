import SimpleTweet from "@components/SimpleTweet";
import { ITweetProps } from "@components/Tweet/Tweet";
import { ITweet } from "@interfaces/api/tweet";
import React from "react";
import { useQueryClient } from "react-query";

export interface IHomeTweetProps extends Pick<ITweetProps, "tweet"> {}

const HomeTweet: React.FC<IHomeTweetProps> = ({
    tweet,
}): React.ReactElement => {
    const queryClient = useQueryClient();

    const invalidateTweets = (tweet: ITweet): void => {
        queryClient.invalidateQueries("home");
    };

    return (
        <SimpleTweet
            onDelete={invalidateTweets}
            onFavoriteClick={invalidateTweets}
            tweet={tweet}
        />
    );
};

export default HomeTweet;
