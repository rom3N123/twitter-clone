import React from "react";
import SimpleTweet from "@components/SimpleTweet";
import { useQueryClient } from "react-query";
import { ListChildComponentProps } from "react-window";
import { ITweet } from "@interfaces/api/tweet";

export interface IHomeTweetProps
    extends ListChildComponentProps<{
        tweets: ITweet[];
        setRowHeight: (index: number, size: number) => void;
    }> {}

const HomeTweet: React.ComponentType<IHomeTweetProps> = ({
    index,
    style,
    data: { tweets, setRowHeight },
}): React.ReactElement => {
    const tweetRef = React.useRef<HTMLDivElement>(null);

    const queryClient = useQueryClient();

    const invalidateTweets = (): void => {
        queryClient.invalidateQueries("home");
    };

    React.useEffect(() => {
        if (tweetRef.current) {
            setRowHeight(index, tweetRef.current.clientHeight);
        }
    }, [tweetRef.current]);

    return (
        <SimpleTweet
            onDelete={invalidateTweets}
            onFavoriteClick={invalidateTweets}
            tweet={tweets[index]}
            style={style}
            ref={tweetRef}
        />
    );
};

export default HomeTweet;
