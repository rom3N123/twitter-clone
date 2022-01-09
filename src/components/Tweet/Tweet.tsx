import React from "react";
import * as S from "./Tweet.styled";
import ProfileUserAvatar from "@components/ProfileUserAvatar";
import Text from "@components/Text";
import { useNavigate } from "react-router-dom";
import TweetButtons from "./components/TweetButtons";
import TweetThreeDotsButton from "./components/TweetThreeDotsButton";
import { ITweetThreeDotsButtonProps } from "./components/TweetThreeDotsButton/TweetThreeDotsButton";
import { ITweetButtonsProps } from "./components/TweetButtons/TweetButtons";

export interface ITweetProps
    extends ITweetThreeDotsButtonProps,
        ITweetButtonsProps {}

const Tweet: React.FC<ITweetProps> = ({
    tweet,
    onDeleteClick,
    onFavoriteClick,
}): React.ReactElement => {
    const { _id, publishTimestamp, text, user } = tweet;

    const navigate = useNavigate();

    const onTweetClickHandler = (): void => {
        navigate(`/${user._id}/tweet/${_id}`);
    };

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
                                onFavoriteClick={onFavoriteClick}
                                tweet={tweet}
                            />
                        </S.SButtons>
                    </S.STweetBodyInner>
                </S.STweetBody>

                <TweetThreeDotsButton
                    onDeleteClick={onDeleteClick}
                    tweet={tweet}
                />
            </S.SInner>
        </S.SContainer>
    );
};

export default Tweet;
