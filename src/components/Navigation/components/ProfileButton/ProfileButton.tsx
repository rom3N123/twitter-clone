import React from "react";
import * as S from "./ProfileButton.styled";
import usePopover from "@hooks/usePopover";
import ProfilePopover from "./components/ProfilePopover";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";

const ProfileButton = () => {
    const { anchor, openPopover, closePopover } = usePopover();

    const user = useAppSelector(selectUserState);

    return (
        <S.SWrapper onClick={openPopover}>
            <S.SContainer isButton>
                <S.SProfileUserAvatar size={40} user={user} />
                <S.STextWrapper>
                    <S.ProfileName>{user.name}</S.ProfileName>
                    <S.ProfileId>@{user._id}</S.ProfileId>
                </S.STextWrapper>
                <S.SMoreIcon />
            </S.SContainer>

            <ProfilePopover
                anchor={anchor}
                open={Boolean(anchor)}
                onClose={closePopover}
            />
        </S.SWrapper>
    );
};

export default ProfileButton;
