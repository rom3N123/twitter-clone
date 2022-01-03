import React from "react";
import PageHeader from "@components/PageComponents/PageHeader";
import ProfileHeader from "./components/ProfileHeader";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import UsersService from "@services/UsersService";

const Profile = () => {
    const { userId } = useParams();

    const { data, isLoading } = useQuery("user", () =>
        UsersService.findById(userId as string)
    );

    return (
        <section>
            <PageHeader title={data?.name} />

            <ProfileHeader user={data} />
        </section>
    );
};

export default Profile;
