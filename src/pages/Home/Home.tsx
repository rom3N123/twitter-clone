import React from "react";
import TweetForm from "@components/TweetForm";
import PageHeader from "@components/PageComponents/PageHeader";
import S from "./Home.styled";

const Home: React.FC = (): React.ReactElement => {
    return (
        <div>
            <PageHeader title="Home" />
            <S.TweetFormWrapper>
                <TweetForm />
            </S.TweetFormWrapper>
        </div>
    );
};

export default Home;
