import styled from "styled-components";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import { NavLink } from "react-router-dom";
import Flex from "@styled/components/Flex.styled";

export const SContainer = styled(Flex).attrs(() => ({
    direction: "column",
    justify: "space-between",
    align: "center",
}))`
    width: 100%;
    max-width: 250px;
    height: 100vh;
`;

export const SNavigationList = styled(List)`
    @media (min-width: 1100px) {
        width: 100%;
        max-width: 225px;
    }
    @media (max-width: 1100px) {
        display: flex;
        flex-direction: column;
    }
`;

export const SNavigationItem = styled(({ children, ...props }) => (
    <ListItem dense {...props}>
        {children}
    </ListItem>
))`
    font-size: 20px;
    svg {
        width: 28px;
        height: 28px;
    }
    @media (max-width: 1100px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const SNavigationItemButton = styled(ListItemButton)`
    margin: 5px 0;
    border-radius: 9999px;
    flex-grow: 0;
    @media (max-width: 1100px) {
        border-radius: 50%;
        margin: 0;
        padding: 0;
    }
`;

export const SNavigationItemText = styled(ListItemText)`
    span {
        font-size: 20px;
    }
`;

export const SLink = styled(NavLink)`
    &.active {
        span {
            font-weight: 600;
        }
    }
`;

export const STweetButton = styled(Button).attrs(() => ({
    variant: "contained",
    fullWidth: true,
}))`
    height: 50px;
    margin-top: 16px;
    box-shadow: rgb(0 0 0 / 8%) 0px 8px 28px;
    padding: 12px;

    @media (max-width: 1100px) {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        min-width: 0;
    }
`;

export const SNavigationItemIcon = styled(ListItemIcon)`
    min-width: 45px;
    @media (max-width: 1100px) {
        min-width: 0;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const SNavigationIconButton = styled(IconButton)`
    svg {
        color: ${({ theme }) => theme.mode.svg.primary} !important;
    }
`;

export const STwitterIcon = styled(TwitterIcon)`
    font-size: 40px;
    @media (max-width: 1100px) {
        font-size: 28px;
    }
`;

export const STwitterIconLink = styled(SLink)`
    @media (min-width: 1100px) {
        margin-left: 12px;
    }
`;

export const STwitterIconButton = styled(SNavigationIconButton).attrs(() => ({
    color: "primary",
}))`
    padding-left: 0;
    @media (max-width: 1100px) {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: 0;
    }
`;
