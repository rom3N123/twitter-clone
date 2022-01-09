import React from "react";
import TweetThreeDotsButton from "@components/Tweet/components/TweetThreeDotsButton";
import Text from "@components/Text";
import UserItem from "@components/UserItem";
import { format } from "date-fns";
import useCurrentTweetContext from "@pages/TweetPage/contexts/CurrentTweetContext/useCurrentTweetContext";
import * as S from "./TweetInfo.styled";
import TweetInfoButtons from "./components/TweetInfoButtons";

const TweetInfo: React.FC = (): React.ReactElement | null => {
    const { tweet } = useCurrentTweetContext();

    if (!tweet) {
        return null;
    }

    return (
        <>
            <UserItem
                avatarSize={48}
                user={tweet.user}
                endButton={
                    <TweetThreeDotsButton
                        user={tweet.user}
                        tweetId={tweet._id}
                    />
                }
            />

            <S.STextContainer>
                <Text fontSize={23} lh={28}>
                    {tweet.text}
                </Text>
            </S.STextContainer>

            <Text color="secondary">
                {format(new Date(tweet.publishTimestamp), "PPPp")}
            </Text>

            <TweetInfoButtons />
        </>
    );
};

export default TweetInfo;
