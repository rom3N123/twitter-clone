import React from "react";
import Popover from "@mui/material/Popover";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import S from "../../ProfileButton.styled";
import { IDialogCommonProps } from "@interfaces/components";
import { IUsePopoverValue } from "@hooks/usePopover";
import { useDispatch } from "react-redux";
import { logoutAction } from "@redux/ducks/auth/actions";

interface IProfilePopoverProps
    extends IDialogCommonProps,
        Pick<IUsePopoverValue, "anchor"> {}

const ProfilePopover: React.FC<IProfilePopoverProps> = ({
    anchor,
    open,
    onClose,
}): React.ReactElement => {
    const dispatch = useDispatch();

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
                component={S.Container}
                alignItems="center"
                gap={"12px"}
                container
            >
                <Grid item flexBasis="15%">
                    <S.SAvatar />
                </Grid>
                <Grid item component={S.TextWrapper} flexBasis="65%">
                    <S.ProfileName>
                        uAa0KZ3MeJDFBafsdsdsdsdssuAa0KZ3MeJDFBafsdsdsdsdssuAa0KZ3MeJDFBafsdsdsdsdss
                    </S.ProfileName>
                    <S.ProfileId>@uAa0KZ3MeJDFBafsdsdsdsdss</S.ProfileId>
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
                            Log out @uAa0KZ3MeJDFBaf
                        </ListItemText>
                    </ListItem>
                </ListItemButton>
            </List>
        </Popover>
    );
};

export default ProfilePopover;
