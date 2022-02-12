import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import ProfileTweets from "./components/ProfileTweets";
import CurrentProfileContextProvider from "./contexts/CurrentProfileContext";
import ProfilePageHeader from "./components/ProfilePageHeader";

const Profile: React.FC = (): React.ReactElement => {
    return (
        <CurrentProfileContextProvider>
            <ProfilePageHeader />
            <ProfileHeader />
            <ProfileTweets />
        </CurrentProfileContextProvider>
    );
};

export default Profile;
