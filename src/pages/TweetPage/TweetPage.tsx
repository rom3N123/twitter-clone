import React from "react";
import TweetPageHeader from "./components/TweetPageHeader";
import * as S from "./TweetPage.styled";
import CurrentTweetContextProvider from "./contexts/CurrentTweetContext";
import TweetInfo from "./components/TweetInfo";
import TweetPageReplyForm from "./components/TweetPageReplyForm";
import TweetPageReplies from "./components/TweetPageReplies";

const TweetPage: React.FC = (): React.ReactElement => {
    return (
        <CurrentTweetContextProvider>
            <TweetPageHeader />

            <S.SContent>
                <TweetInfo />
                <TweetPageReplyForm />
            </S.SContent>

            <TweetPageReplies />
        </CurrentTweetContextProvider>
    );
};

export default TweetPage;
