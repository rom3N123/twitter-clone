import React from "react";
import Button from "@mui/material/Button";
import PlaceIcon from "@mui/icons-material/PlaceOutlined";
import CalendarIcon from "@mui/icons-material/CalendarToday";
import * as S from "./ProfileHeader.styled";
import Content from "@styled/components/Content.styled";
import Tabs from "@components/Tabs";
import { ITab } from "@components/Tabs/components/Tab/Tab";
import { useNavigate } from "react-router-dom";
import useToggle from "@hooks/useToggle";
import EditProfileDialog from "../EditProfileDialog";
import ProfileUserAvatar from "../../../../components/ProfileUserAvatar";
import { IUser } from "@interfaces/api/user";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

interface IProfileHeaderProps {
    user?: IUser;
}

const ProfileHeader: React.FC<IProfileHeaderProps> = ({
    user,
}): React.ReactElement => {
    const navigate = useNavigate();
    const { isOpen, toggle } = useToggle();

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

    const {
        _id,
        name,
        followers,
        following,
        location,
        bio,
        avatar,
        background,
    } = user || {};

    return (
        <S.Container>
            <S.ProfileBackground src={background} />

            <Content>
                <S.ProfileInfo>
                    {!user ? (
                        <Skeleton variant="circular">
                            <ProfileUserAvatar src={avatar} withWrapper />
                        </Skeleton>
                    ) : (
                        <ProfileUserAvatar src={avatar} withWrapper />
                    )}

                    <S.SProfileNameContainer>
                        {!user ? (
                            <div>
                                <Skeleton>
                                    <S.ProfileName>{name}</S.ProfileName>
                                </Skeleton>
                                <Skeleton>
                                    <S.ProfileId>@{_id}</S.ProfileId>
                                </Skeleton>
                            </div>
                        ) : (
                            <div>
                                <S.ProfileName>{name}</S.ProfileName>
                                <S.ProfileId>@{_id}</S.ProfileId>
                            </div>
                        )}

                        <Button variant="outlined" onClick={toggle}>
                            Edit profile
                        </Button>
                    </S.SProfileNameContainer>

                    {!user ? (
                        <Skeleton height={50} width={150} />
                    ) : (
                        <S.SProfileBio>
                            <Typography>{bio}</Typography>
                        </S.SProfileBio>
                    )}

                    {!user ? (
                        <Skeleton height={70}>
                            <S.ProfileInfoItems margin="10px 0">
                                <S.ProfileInfoItem>
                                    <PlaceIcon />
                                    Russian Federation
                                </S.ProfileInfoItem>

                                <S.ProfileInfoItem>
                                    <CalendarIcon />
                                    Joined October 2021
                                </S.ProfileInfoItem>
                            </S.ProfileInfoItems>
                        </Skeleton>
                    ) : (
                        <>
                            <S.ProfileInfoItems margin="10px 0">
                                {location && (
                                    <S.ProfileInfoItem>
                                        <PlaceIcon />
                                        {location}
                                    </S.ProfileInfoItem>
                                )}

                                <S.ProfileInfoItem>
                                    <CalendarIcon />
                                    Joined October 2021
                                </S.ProfileInfoItem>
                            </S.ProfileInfoItems>
                        </>
                    )}

                    {!user ? (
                        <Skeleton height={35}>
                            <S.ProfileInfoItems>
                                <S.ProfileActivityLink to="/">
                                    <S.ProfileInfoItem>
                                        <S.ProifleActivityNumber>
                                            {followers?.length}
                                        </S.ProifleActivityNumber>
                                        Followers
                                    </S.ProfileInfoItem>
                                </S.ProfileActivityLink>

                                <S.ProfileActivityLink to="/">
                                    <S.ProfileInfoItem>
                                        <S.ProifleActivityNumber>
                                            {following?.length}
                                        </S.ProifleActivityNumber>
                                        Following
                                    </S.ProfileInfoItem>
                                </S.ProfileActivityLink>
                            </S.ProfileInfoItems>
                        </Skeleton>
                    ) : (
                        <S.ProfileInfoItems>
                            <S.ProfileActivityLink to="/">
                                <S.ProfileInfoItem>
                                    <S.ProifleActivityNumber>
                                        {followers?.length}
                                    </S.ProifleActivityNumber>
                                    Followers
                                </S.ProfileInfoItem>
                            </S.ProfileActivityLink>

                            <S.ProfileActivityLink to="/">
                                <S.ProfileInfoItem>
                                    <S.ProifleActivityNumber>
                                        {following?.length}
                                    </S.ProifleActivityNumber>
                                    Following
                                </S.ProfileInfoItem>
                            </S.ProfileActivityLink>
                        </S.ProfileInfoItems>
                    )}
                </S.ProfileInfo>
            </Content>

            <EditProfileDialog open={isOpen} onClose={toggle} />

            <Tabs tabs={tabs} />
        </S.Container>
    );
};

export default ProfileHeader;
