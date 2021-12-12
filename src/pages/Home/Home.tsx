import React from "react";
import TweetForm from "@components/TweetForm";
import PageHeader from "@components/PageComponents/PageHeader";
import { STweetFormWrapper } from "./Home.styled";
import Tweet from "@components/Tweet";
import { Link } from "react-router-dom";

const arrayOfTweets = Array.from({ length: 20 });

const Home: React.FC = (): React.ReactElement => {
    return (
        <div>
            <Link to="/auth">TO AUTH</Link>
            <PageHeader title="Home" />
            <STweetFormWrapper>
                <TweetForm />
            </STweetFormWrapper>

            {arrayOfTweets.map(() => (
                <Tweet
                    tweet={{ publishDate: "2hr", text: "Hello world!" }}
                    author={{ id: 1, name: "romen", nickname: "rom3N123" }}
                />
            ))}
        </div>
    );
};

export default Home;
