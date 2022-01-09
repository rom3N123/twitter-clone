import React from "react";
import PageHeader from "@components/PageComponents/PageHeader";
import useCurrentProfileContext from "@pages/Profile/contexts/CurrentProfileContext/useCurrentProfileContext";

const ProfilePageHeader: React.FC = (): React.ReactElement => {
    const { user } = useCurrentProfileContext();

    return <PageHeader title={user?.name} />;
};

export default ProfilePageHeader;
