import React from "react";
import Button from "@mui/material/Button";
import PlaceIcon from "@mui/icons-material/PlaceOutlined";
import CalendarIcon from "@mui/icons-material/CalendarToday";
import * as S from "./ProfileHeader.styled";
import Content from "@styled/components/Content.styled";
import Tabs from "@components/Tabs";
import { ITab } from "@components/Tabs/components/Tab/Tab";
import useToggle from "@hooks/useToggle";
import EditProfileDialog from "../EditProfileDialog";
import ProfileUserAvatar from "@components/UserComponents/ProfileUserAvatar";
import Typography from "@mui/material/Typography";
import ProfileActivity from "../ProfileActivity";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";
import UserFollowButton from "@components/Buttons/UserFollowButton/UserFollowButton";
import useCurrentProfileContext from "@pages/Profile/contexts/CurrentProfileContext/useCurrentProfileContext";
import { format } from "date-fns";
import SkeletonWrapper from "@components/SkeletonWrapper";
import Skeleton from "@mui/material/Skeleton";

const tabs: ITab[] = [
    {
        label: "Tweets",
        onClick: () => {},
        value: "tweets",
    },
    {
        label: "Media",
        onClick: () => {},
        value: "media",
    },
    {
        label: "Likes",
        onClick: () => {},
        value: "likes",
    },
];

const ProfileHeader: React.FC = (): React.ReactElement => {
    const { isOpen, toggle } = useToggle();
    const { user } = useCurrentProfileContext();

    console.log(user);

    const authUser = useAppSelector(selectUserState);

    return (
        <S.Container>
            <S.ProfileBackground src={user?.background} />

            <Content>
                <S.ProfileInfo>
                    {!user ? (
                        <Skeleton variant="circular" width={133} height={133} />
                    ) : (
                        <ProfileUserAvatar
                            withWrapper
                            clickable={false}
                            user={user}
                        />
                    )}

                    <S.SProfileNameContainer>
                        <SkeletonWrapper visible={Boolean(user)}>
                            <div>
                                <S.ProfileName>{user?.name}</S.ProfileName>
                                <S.ProfileId>@{user?._id}</S.ProfileId>
                            </div>
                        </SkeletonWrapper>

                        {!user ? (
                            <Skeleton width={80} height={50} />
                        ) : authUser._id === user?._id ? (
                            <Button
                                sx={{ height: 36 }}
                                variant="outlined"
                                onClick={toggle}
                            >
                                Edit profile
                            </Button>
                        ) : (
                            user && <UserFollowButton user={user} />
                        )}
                    </S.SProfileNameContainer>

                    <SkeletonWrapper
                        visible={Boolean(user)}
                        height={50}
                        width={150}
                    >
                        <S.SProfileBio>
                            <Typography>{user?.bio}</Typography>
                        </S.SProfileBio>
                    </SkeletonWrapper>

                    <SkeletonWrapper visible={Boolean(user)} height={70}>
                        <S.ProfileInfoItems margin="10px 0">
                            {location && (
                                <S.ProfileInfoItem>
                                    <PlaceIcon />
                                    {location}
                                </S.ProfileInfoItem>
                            )}

                            <S.ProfileInfoItem>
                                <CalendarIcon />
                                {user?.registerTimestamp &&
                                    `Joined ${format(
                                        new Date(user.registerTimestamp),
                                        "PP"
                                    )}`}
                            </S.ProfileInfoItem>
                        </S.ProfileInfoItems>
                    </SkeletonWrapper>

                    <SkeletonWrapper visible={Boolean(user)} height={35}>
                        <S.ProfileInfoItems>
                            <ProfileActivity
                                to="/"
                                amount={0}
                                label="Following"
                            />

                            <ProfileActivity
                                to="/"
                                amount={0}
                                label="Followers"
                            />
                        </S.ProfileInfoItems>
                    </SkeletonWrapper>
                </S.ProfileInfo>
            </Content>

            <EditProfileDialog open={isOpen} onClose={toggle} />

            <Tabs tabs={tabs} />
        </S.Container>
    );
};

export default ProfileHeader;
