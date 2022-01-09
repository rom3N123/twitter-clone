import React from "react";
import * as S from "./Tweet.styled";
import { ITweet } from "@interfaces/api/tweet";
import ProfileUserAvatar from "@components/ProfileUserAvatar";
import Text from "@components/Text";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import TweetButtons from "./components/TweetButtons";
import TweetThreeDotsButton from "./components/TweetThreeDotsButton";

interface ITweetProps {
    tweet: ITweet;
}

const Tweet: React.FC<ITweetProps> = ({ tweet }): React.ReactElement => {
    const { _id, publishTimestamp, text, user } = tweet;

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const onTweetClickHandler = (): void => {
        navigate(`/${user._id}/tweet/${_id}`);
    };

    const onFavoriteClickHandler = (): void => {
        queryClient.invalidateQueries(["tweets", user._id]);
        queryClient.invalidateQueries("home");
    };

    const onReplyClickHandler = (): void => {};

    const onShareClickHandler = (): void => {};

    return (
        <S.SContainer onClick={onTweetClickHandler}>
            <S.SInner>
                <ProfileUserAvatar user={user} isWithPopover size={48} />

                <S.STweetBody>
                    <Text fontWeight={600}>
                        {user.name}{" "}
                        <S.SUserLabel>@{publishTimestamp}</S.SUserLabel>
                    </Text>

                    <S.STweetBodyInner>
                        <Text>{text}</Text>

                        <S.SButtons>
                            <TweetButtons
                                onReplyClick={onReplyClickHandler}
                                onFavoriteClick={onFavoriteClickHandler}
                                onShareClick={onShareClickHandler}
                                tweet={tweet}
                            />
                        </S.SButtons>
                    </S.STweetBodyInner>
                </S.STweetBody>

                <TweetThreeDotsButton user={user} tweetId={_id} />
            </S.SInner>
        </S.SContainer>
    );
};

export default Tweet;
