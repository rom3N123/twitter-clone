import React from "react";
import ButtonBase from "@mui/material/ButtonBase";
import Grid from "@mui/material/Grid";
import S from "./ProfileButton.styled";
import usePopover from "@hooks/usePopover";
import ProfilePopover from "./components/ProfilePopover";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";

const ProfileButton = () => {
    const { anchor, openPopover, closePopover } = usePopover();

    const { _id, name } = useAppSelector(selectUserState);

    return (
        <>
            <S.Container component={ButtonBase} onClick={openPopover}>
                <Grid item flexBasis="20%">
                    <S.SAvatar />
                </Grid>
                <Grid item component={S.TextWrapper} flexBasis="62%">
                    <S.ProfileName>{name}</S.ProfileName>
                    <S.ProfileId>@{_id}</S.ProfileId>
                </Grid>
                <Grid item component={S.MoreIcon} flexBasis="10%" />
            </S.Container>

            <ProfilePopover
                anchor={anchor}
                open={Boolean(anchor)}
                onClose={closePopover}
            />
        </>
    );
};

export default ProfileButton;
