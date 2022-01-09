import TweetForm from "@components/TweetForm";
import { ITweet } from "@interfaces/api/tweet";
import RepliesService from "@services/RepliesService";
import React from "react";
import { useQueryClient } from "react-query";

export interface IReplyFormProps {
    tweetId: string;
    userId: string;
}

const ReplyForm: React.FC<IReplyFormProps> = ({
    userId,
    tweetId,
}): React.ReactElement => {
    const queryClient = useQueryClient();

    const onFormSubmitHandler = async (text: string): Promise<ITweet> => {
        const createdReply = await RepliesService.create(userId, tweetId, text);

        queryClient.invalidateQueries(["replies", tweetId]);
        queryClient.invalidateQueries(["tweet", tweetId]);

        return createdReply;
    };

    return (
        <TweetForm
            placeholder="Tweet your reply"
            buttonTitle="Reply"
            onSubmit={onFormSubmitHandler}
        />
    );
};

export default ReplyForm;
