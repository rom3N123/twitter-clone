import React from "react";
import { useQueryClient } from "react-query";
import { ITweetProps } from "@components/TweetComponents/Tweet/Tweet";
import SimpleTweet from "@components/TweetComponents/SimpleTweet";
import { ITweet } from "@interfaces/api/tweet";

export interface IProfileTweetProps extends Pick<ITweetProps, "tweet"> {}

const ProfileTweet: React.FC<IProfileTweetProps> = ({
    tweet,
}): React.ReactElement => {
    const queryClient = useQueryClient();

    const invalidateQuery = (tweet: ITweet): void => {
        queryClient.invalidateQueries(["tweets", tweet.user._id]);
    };

    return (
        <SimpleTweet
            tweet={tweet}
            onFavoriteClick={invalidateQuery}
            onDelete={invalidateQuery}
        />
    );
};

export default ProfileTweet;
