import React from "react";
import ReplyForm from "@components/ReplyForm";
import useCurrentTweetContext from "@pages/TweetPage/contexts/CurrentTweetContext/useCurrentTweetContext";

const TweetPageReplyForm: React.FC = (): React.ReactElement | null => {
    const { tweet } = useCurrentTweetContext();

    if (!tweet) {
        return null;
    }

    return <ReplyForm tweetId={tweet._id} />;
};

export default TweetPageReplyForm;
