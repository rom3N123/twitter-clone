import React from "react";
import TweetsService from "@services/TweetsService";
import Tweet from "@components/Tweet";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loader from "@pages/Layout/components/Loader";

const ProfileTweets: React.FC = (): React.ReactElement => {
    const { userId } = useParams();

    const { data: tweets, isLoading } = useQuery(["tweets", userId], () =>
        TweetsService.index(userId as string)
    );

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                tweets?.map((tweet) => <Tweet key={tweet._id} {...tweet} />)
            )}
        </div>
    );
};

export default ProfileTweets;
