import React from "react";
import TweetThreeDotsButton from "@components/TweetComponents/Tweet/components/TweetThreeDotsButton";
import Text from "@components/TypographyComponents/Text";
import UserItem from "@components/UserComponents/UserItem";
import { format } from "date-fns";
import useCurrentTweetContext from "@pages/TweetPage/contexts/CurrentTweetContext/useCurrentTweetContext";
import * as S from "./TweetInfo.styled";
import TweetInfoButtons from "./components/TweetInfoButtons";
import TweetsService from "@services/TweetsService";

const TweetInfo: React.FC = (): React.ReactElement | null => {
    const { tweet } = useCurrentTweetContext();

    if (!tweet) {
        return null;
    }

    const onDeleteTweetClickHandler = (): void => {
        TweetsService.delete(tweet.user._id, tweet._id);
    };

    return (
        <>
            <UserItem
                avatarSize={48}
                user={tweet.user}
                endButton={
                    <TweetThreeDotsButton
                        onDeleteClick={onDeleteTweetClickHandler}
                        tweet={tweet}
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
