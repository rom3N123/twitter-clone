import React from "react";
import TweetButtons from "@components/Tweet/components/TweetButtons";
import useCurrentTweetContext from "@pages/TweetPage/contexts/CurrentTweetContext/useCurrentTweetContext";
import * as S from "./TweetInfoButtons.styled";

const TweetInfoButtons: React.FC = (): React.ReactElement => {
    const { tweet, invalidateTweet } = useCurrentTweetContext();

    return (
        <S.SButtonsContainer>
            {tweet && (
                <TweetButtons
                    onFavoriteClick={invalidateTweet}
                    onReplyClick={() => {}}
                    onShareClick={() => {}}
                    tweet={tweet}
                />
            )}
        </S.SButtonsContainer>
    );
};

export default TweetInfoButtons;
