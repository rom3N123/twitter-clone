import React from "react";
import TweetsService from "@services/TweetsService";
import Tweet from "@components/Tweet";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const ProfileTweets: React.FC = (): React.ReactElement => {
    const { userId } = useParams();

    const { data: tweets } = useQuery("tweets", () =>
        TweetsService.index(userId as string)
    );

    return (
        <div>
            {tweets?.map((tweet) => (
                <Tweet key={tweet._id} {...tweet} />
            ))}
        </div>
    );
};

export default ProfileTweets;
