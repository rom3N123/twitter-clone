import React from "react";
import TweetButtons from "@components/TweetComponents/Tweet/components/TweetButtons";
import useCurrentTweetContext from "@pages/TweetPage/contexts/CurrentTweetContext/useCurrentTweetContext";
import * as S from "./TweetInfoButtons.styled";

const TweetInfoButtons: React.FC = (): React.ReactElement => {
    const { tweet, invalidateTweet } = useCurrentTweetContext();

    return (
        <S.SButtonsContainer>
            {tweet && (
                <TweetButtons onFavoriteClick={invalidateTweet} tweet={tweet} />
            )}
        </S.SButtonsContainer>
    );
};

export default TweetInfoButtons;
