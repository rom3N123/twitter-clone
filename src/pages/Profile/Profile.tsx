import React from "react";
import PageHeader from "@components/PageComponents/PageHeader";
import ProfileHeader from "./components/ProfileHeader";
import ProfileTweets from "./components/ProfileTweets";
import CurrentProfileContextProvider from "./contexts/CurrentProfileContext";

const Profile: React.FC = (): React.ReactElement => {
    return (
        <CurrentProfileContextProvider>
            {/* <PageHeader title={user?.name} /> */}
            <ProfileHeader />
            <ProfileTweets />
        </CurrentProfileContextProvider>
    );
};

export default Profile;
