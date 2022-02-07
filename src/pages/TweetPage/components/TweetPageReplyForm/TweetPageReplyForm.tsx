import React from "react";
import ReplyForm from "@components/ReplyComponents/ReplyForm";
import useCurrentTweetContext from "@pages/TweetPage/contexts/CurrentTweetContext/useCurrentTweetContext";

const TweetPageReplyForm: React.FC = (): React.ReactElement | null => {
    const { tweet } = useCurrentTweetContext();

    if (!tweet) {
        return null;
    }

    return <ReplyForm userId={tweet.user._id} tweetId={tweet._id} />;
};

export default TweetPageReplyForm;
