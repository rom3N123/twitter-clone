import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CheckIcon from "@mui/icons-material/Check";

const Container = styled(
    ({ children, ...props }): React.ReactElement => (
        <Grid {...props}>{children}</Grid>
    )
).attrs(() => ({
    container: true,
    justifyContent: "space-between",
    alignItems: "center",
}))`
    border-radius: 9999px;
    gap: 6px;
    padding: 12px;
`;

const SAvatar = styled(Grid).attrs(() => ({
    item: true,
    component: Avatar,
}))``;

const TextWrapper = styled(Grid).attrs(() => ({ item: true }))`
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
`;

const Text = styled(Typography)`
    font-size: 15px;
`;

const ProfileName = styled(Text)`
    font-weight: 700;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const ProfileId = styled(Text)`
    font-weight: 400;
    color: ${({ theme }) => theme.mode.palette.gray};
    overflow: hidden;
    text-overflow: ellipsis;
`;

const MoreIcon = styled(Grid).attrs(() => ({
    item: true,
    component: MoreHorizIcon,
}))`
    font-size: 20px;
`;

const SCheckIcon = styled(CheckIcon)`
    color: ${({ theme }) => theme.accentColor};
    font-size: 20px;
`;

const styles = {
    Container,
    SAvatar,
    TextWrapper,
    Text,
    ProfileName,
    ProfileId,
    MoreIcon,
    SCheckIcon,
};

export default styles;
