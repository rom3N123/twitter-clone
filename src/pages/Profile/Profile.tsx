import React from "react";
import PageHeader from "@components/PageComponents/PageHeader";
import ProfileHeader from "./components/ProfileHeader";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import UsersService from "@services/UsersService";
import TweetsService from "@services/TweetsService";
import Tweet from "@components/Tweet";

const Profile = () => {
    const { userId } = useParams();

    const { data: user, isLoading } = useQuery(`user/${userId}`, () =>
        UsersService.get(userId as string)
    );

    const { data: tweets } = useQuery(`tweets/${userId}`, () =>
        TweetsService.index(userId as string)
    );

    return (
        <section>
            <PageHeader title={user?.name} />
            <ProfileHeader user={user} />

            {tweets?.map((tweet) => (
                <Tweet key={tweet._id} {...tweet} />
            ))}
        </section>
    );
};

export default Profile;
