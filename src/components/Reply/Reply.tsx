import React from "react";
import { ITweetProps } from "@components/Tweet/Tweet";
import Tweet from "@components/Tweet";
import RepliesService from "@services/RepliesService";
import { useQueryClient } from "react-query";

export interface IReplyProps extends Pick<ITweetProps, "tweet"> {}

const Reply: React.FC<IReplyProps> = ({ tweet }): React.ReactElement => {
    const queryClient = useQueryClient();

    const invalidateReplies = (): void => {
        queryClient.invalidateQueries(["replies", tweet.replyTo!._id]);
        queryClient.invalidateQueries(["tweet", tweet.replyTo!._id]);
    };

    const onReplyDeleteClickHandler = async (): Promise<void> => {
        await RepliesService.delete(
            tweet.user._id,
            tweet.replyTo!._id,
            tweet._id
        );

        invalidateReplies();
    };

    return (
        <Tweet
            onDeleteClick={onReplyDeleteClickHandler}
            onFavoriteClick={invalidateReplies}
            tweet={tweet}
        />
    );
};

export default Reply;
