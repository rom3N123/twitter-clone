import React from "react";
import ButtonBase from "@mui/material/ButtonBase";
import Grid from "@mui/material/Grid";
import S from "./ProfileButton.styled";
import usePopover from "@hooks/usePopover";
import ProfilePopover from "./components/ProfilePopover";

const ProfileButton = () => {
    const { anchor, openPopover, closePopover } = usePopover();

    return (
        <>
            <S.Container component={ButtonBase} onClick={openPopover}>
                <Grid item flexBasis="20%">
                    <S.SAvatar />
                </Grid>
                <Grid item component={S.TextWrapper} flexBasis="62%">
                    <S.ProfileName>romen</S.ProfileName>
                    <S.ProfileId>@uAa0KZ3MeJDFBafsdsdsdsdss</S.ProfileId>
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
