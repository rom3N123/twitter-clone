import React from "react";
import { useParams } from "react-router-dom";
import TweetsService from "@services/TweetsService";
import { useQuery, useQueryClient } from "react-query";
import { ITweet } from "@types/api/tweet";

export interface ICurrentTweetContextProviderProps {
    tweet?: ITweet;
    invalidateTweet: () => void;
}

export const CurrentTweetContext =
    React.createContext<ICurrentTweetContextProviderProps>({
        tweet: undefined,
        invalidateTweet: (): void => {},
    });

const CurrentTweetContextProvider: React.FC = ({
    children,
}): React.ReactElement => {
    const { userId, tweetId } = useParams();

    const queryClient = useQueryClient();

    const { data } = useQuery(["tweet", tweetId], () =>
        TweetsService.get(userId as string, tweetId as string)
    );

    const invalidateTweet = (): void => {
        queryClient.invalidateQueries(["tweet", tweetId]);
    };

    return (
        <CurrentTweetContext.Provider value={{ tweet: data, invalidateTweet }}>
            {children}
        </CurrentTweetContext.Provider>
    );
};

export default CurrentTweetContextProvider;
