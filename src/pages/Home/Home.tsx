import React from "react";
import TweetForm from "@components/TweetForm";
import PageHeader from "@components/PageComponents/PageHeader";
import { useQuery } from "react-query";
import HomeService from "@services/HomeService";
import Loader from "@pages/Layout/components/Loader";
import Tweet from "@components/Tweet";
import { STweetFormWrapper } from "./Home.styled";

const Home: React.FC = (): React.ReactElement => {
    const { data, isLoading } = useQuery("home", HomeService.index);

    return (
        <div>
            <PageHeader title="Home" />

            <STweetFormWrapper>
                <TweetForm />
            </STweetFormWrapper>

            {isLoading ? (
                <Loader />
            ) : (
                data?.map((tweet) => <Tweet key={tweet._id} {...tweet} />)
            )}
        </div>
    );
};

export default Home;
