import React from "react";
import TweetForm from "@components/TweetForm";
import PageHeader from "@components/PageComponents/PageHeader";
import { useQuery } from "react-query";
import HomeService from "@services/HomeService";
import Loader from "@pages/Layout/components/Loader";
import Tweet from "@components/Tweet";
import { STweetFormWrapper } from "./Home.styled";
import TweetsService from "@services/TweetsService";
import { IUser } from "@interfaces/api/user";
import { ITweet } from "@interfaces/api/tweet";

const Home: React.FC = (): React.ReactElement => {
    const { data, isLoading } = useQuery("home", HomeService.index);

    const onTweetFormSubmit = (text: string, user: IUser): Promise<ITweet> => {
        return TweetsService.create(user._id, { text });
    };

    return (
        <div>
            <PageHeader title="Home" />

            <STweetFormWrapper>
                <TweetForm onSubmit={onTweetFormSubmit} />
            </STweetFormWrapper>

            {isLoading ? (
                <Loader />
            ) : (
                data?.map((tweet) => <Tweet key={tweet._id} tweet={tweet} />)
            )}
        </div>
    );
};

export default Home;
