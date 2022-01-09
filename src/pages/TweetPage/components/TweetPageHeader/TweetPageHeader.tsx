import React from "react";
import ArrowBackButton from "@components/Buttons/ArrowBackButton";
import PageHeader from "@components/PageComponents/PageHeader";
import useCurrentTweetContext from "@pages/TweetPage/contexts/CurrentTweetContext/useCurrentTweetContext";
import { useNavigate, useParams } from "react-router-dom";

const TweetPageHeader: React.FC = (): React.ReactElement | null => {
    const navigate = useNavigate();
    const { userId } = useParams();

    const { tweet } = useCurrentTweetContext();

    if (!tweet) {
        return null;
    }

    const onArrowBackClickHandler = (): void => {
        const navigationUrl: string = tweet.replyTo
            ? `/${tweet.replyTo.user._id}/tweet/${tweet.replyTo._id}`
            : `/${userId}`;

        navigate(navigationUrl);
    };

    return (
        <PageHeader
            title="Tweet"
            borderless
            button={<ArrowBackButton onClick={onArrowBackClickHandler} />}
        />
    );
};

export default TweetPageHeader;
