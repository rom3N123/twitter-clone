import React from "react";
import TweetForm from "@components/TweetForm";
import PageHeader from "@components/PageComponents/PageHeader";
import S from "./Home.styled";
import Tweet from "@components/Tweet";

const arrayOfTweets = Array.from({ length: 20 });

const Home: React.FC = (): React.ReactElement => {
    return (
        <div>
            <PageHeader title="Home" />
            <S.TweetFormWrapper>
                <TweetForm />
            </S.TweetFormWrapper>

            {arrayOfTweets.map(() => (
                <Tweet
                    text={
                        "Python is better!! Javascript is better!! C# is better!! Java is better!! Honestly, I don't care, I use js to solve my problems but that doesn't mean it's the best solution. You wouldn't tell an unemployed person alcohol is the way to solve their problem."
                    }
                    createdAt={1}
                    activity={{ comments: [1, 2, 3], likes: [1], retweets: [] }}
                    user={{
                        avatarUrl: "",
                        name: "romen",
                        nickname: "rom3N123",
                    }}
                />
            ))}
        </div>
    );
};

export default Home;
