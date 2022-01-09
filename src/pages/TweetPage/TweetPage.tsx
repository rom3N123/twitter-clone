import React from "react";
import { useParams } from "react-router-dom";
import TweetPageHeader from "./components/TweetPageHeader";
import * as S from "./TweetPage.styled";
import CurrentTweetContextProvider from "./contexts/CurrentTweetContext";
import TweetInfo from "./components/TweetInfo";

const TweetPage: React.FC = (): React.ReactElement => {
    const { userId, tweetId } = useParams();

    return (
        <CurrentTweetContextProvider>
            <TweetPageHeader />

            <S.SContent>
                <TweetInfo />
            </S.SContent>
        </CurrentTweetContextProvider>
    );
};

export default TweetPage;
