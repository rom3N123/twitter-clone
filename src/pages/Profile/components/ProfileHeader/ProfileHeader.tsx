import React from "react";
import Button from "@mui/material/Button";
import PlaceIcon from "@mui/icons-material/PlaceOutlined";
import CalendarIcon from "@mui/icons-material/CalendarToday";
import * as S from "./ProfileHeader.styled";

const ProfileHeader: React.FC = (): React.ReactElement => {
    return (
        <div>
            <S.ProfileBackground />

            <S.Content>
                <S.ProfileInfo>
                    <S.ProfileInfoLeftSide>
                        <S.ProfileAvatarWrapper>
                            <S.ProfileAvatar />
                        </S.ProfileAvatarWrapper>

                        <S.ProfileName>romen</S.ProfileName>
                        <S.ProfileId>@uAa0KZ3MeJDFBaf</S.ProfileId>

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

                        <S.ProfileInfoItems>
                            <S.ProfileActivityLink to="/">
                                <S.ProfileInfoItem>
                                    <S.ProifleActivityNumber>
                                        5
                                    </S.ProifleActivityNumber>
                                    Followers
                                </S.ProfileInfoItem>
                            </S.ProfileActivityLink>

                            <S.ProfileActivityLink to="/">
                                <S.ProfileInfoItem>
                                    <S.ProifleActivityNumber>
                                        5
                                    </S.ProifleActivityNumber>
                                    Following
                                </S.ProfileInfoItem>
                            </S.ProfileActivityLink>
                        </S.ProfileInfoItems>
                    </S.ProfileInfoLeftSide>

                    <Button variant="outlined">Edit profile</Button>
                </S.ProfileInfo>
            </S.Content>
        </div>
    );
};

export default ProfileHeader;
