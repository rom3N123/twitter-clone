import React from "react";
import PageHeader from "@components/PageComponents/PageHeader";
import ProfileHeader from "./components/ProfileHeader";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import UsersService from "@services/UsersService";

import ProfileTweets from "./components/ProfileTweets";

const Profile: React.FC = (): React.ReactElement => {
    const { userId } = useParams();

    const { data: user } = useQuery("user", () =>
        UsersService.get(userId as string)
    );

    return (
        <section>
            <PageHeader title={user?.name} />
            <ProfileHeader user={user} />
            <ProfileTweets />
        </section>
    );
};

export default Profile;
