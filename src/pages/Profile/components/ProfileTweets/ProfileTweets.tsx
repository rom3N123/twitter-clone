import React from "react";
import TweetsService from "@services/TweetsService";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loader from "@pages/Layout/components/Loader";
import ProfileTweet from "../ProfileTweet";

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
                tweets?.map((tweet) => (
                    <ProfileTweet key={tweet._id} tweet={tweet} />
                ))
            )}
        </div>
    );
};

export default ProfileTweets;
