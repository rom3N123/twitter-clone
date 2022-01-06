import React from "react";
import Popover from "@mui/material/Popover";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import * as S from "../../ProfileButton.styled";
import { ICommonPopoverProps } from "@interfaces/components";
import { useDispatch } from "react-redux";
import { logoutAction } from "@redux/ducks/auth/actions";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";
import ProfileUserAvatar from "@components/ProfileUserAvatar";

interface IProfilePopoverProps extends ICommonPopoverProps<HTMLDivElement> {}

const ProfilePopover: React.FC<IProfilePopoverProps> = ({
    anchor,
    onClose,
    open,
}): React.ReactElement => {
    const dispatch = useDispatch();
    const user = useAppSelector(selectUserState);

    const onLogoutClickHandler = (): void => {
        dispatch(logoutAction());
    };

    return (
        <Popover
            anchorEl={anchor}
            open={open}
            onClose={onClose}
            sx={{
                ".MuiPaper-root": {
                    maxWidth: "300px",
                },
            }}
            anchorOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
            transformOrigin={{
                vertical: "bottom",
                horizontal: "center",
            }}
        >
            <Grid
                component={S.SContainer}
                alignItems="center"
                gap={"12px"}
                container
            >
                <Grid item flexBasis="15%">
                    <ProfileUserAvatar size={48} user={user} />
                </Grid>
                <Grid item component={S.STextWrapper} flexBasis="65%">
                    <S.ProfileName>{user.name}</S.ProfileName>
                    <S.ProfileId>@{user._id}</S.ProfileId>
                </Grid>

                <Grid item flexBasis="10%">
                    <S.SCheckIcon />
                </Grid>
            </Grid>
            <Divider />

            <List sx={{ padding: 0 }} dense>
                <ListItemButton>
                    <ListItem>
                        <ListItemText>Add an existing account</ListItemText>
                    </ListItem>
                </ListItemButton>
                <ListItemButton>
                    <ListItem>
                        <ListItemText onClick={onLogoutClickHandler}>
                            Log out @{user._id}
                        </ListItemText>
                    </ListItem>
                </ListItemButton>
            </List>
        </Popover>
    );
};

export default ProfilePopover;
