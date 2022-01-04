import React from "react";
import Grid from "@mui/material/Grid";
import * as S from "./ProfileButton.styled";
import usePopover from "@hooks/usePopover";
import ProfilePopover from "./components/ProfilePopover";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";

const ProfileButton = () => {
    const { anchor, openPopover, closePopover } = usePopover();

    const { _id, name, avatar } = useAppSelector(selectUserState);

    return (
        <S.SWrapper onClick={openPopover}>
            <S.SContainer isButton>
                <S.SProfileUserAvatar size={40} src={avatar} />
                <S.STextWrapper>
                    <S.ProfileName>{name}</S.ProfileName>
                    <S.ProfileId>@{_id}</S.ProfileId>
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
