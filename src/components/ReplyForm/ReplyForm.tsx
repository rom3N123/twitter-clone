import TweetForm from "@components/TweetForm";
import React from "react";

export interface IReplyFormProps {
    tweetId: string;
}

const ReplyForm: React.FC<IReplyFormProps> = ({
    tweetId,
}): React.ReactElement => {
    return (
        <TweetForm
            placeholder="Tweet your reply"
            buttonTitle="Reply"
            onSubmit={async () => {}}
        />
    );
};

export default ReplyForm;
