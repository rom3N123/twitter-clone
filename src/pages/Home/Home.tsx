import React from "react";
import TweetForm from "@components/TweetForm";
import PageHeader from "@components/PageComponents/PageHeader";
import { STweetFormWrapper } from "./Home.styled";

const Home: React.FC = (): React.ReactElement => {
    return (
        <div>
            <PageHeader title="Home" />
            <STweetFormWrapper>
                <TweetForm />
            </STweetFormWrapper>
        </div>
    );
};

export default Home;
