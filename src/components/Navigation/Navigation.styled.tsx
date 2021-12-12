import styled from "styled-components";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import { NavLink } from "react-router-dom";

const Container = styled(Grid).attrs(() => ({
    container: true,
    direction: "column",
    justifyContent: "space-between",
}))`
    position: sticky;
    top: 0;
    max-width: 250px;
    height: 100vh;
`;

const NavigationList = styled(List)`
    max-width: 225px;
    width: 100%;
`;

const NavigationItem = styled(({ children, ...props }) => (
    <ListItem dense {...props}>
        {children}
    </ListItem>
))`
    font-size: 20px;
    svg {
        width: 28px;
        height: 28px;
    }
`;

const NavigationItemButton = styled(ListItemButton)`
    margin: 5px 0;
    border-radius: 9999px;
    flex-grow: 0;
`;

const NavigationItemText = styled(ListItemText)`
    span {
        font-size: 20px;
    }
`;

const Link = styled(NavLink)`
    &.active {
        span {
            font-weight: 600;
        }
    }
`;

const TweetButton = styled(Button).attrs(() => ({
    variant: "contained",
    fullWidth: true,
}))`
    height: 50px;
    margin-top: 16px;
    box-shadow: rgb(0 0 0 / 8%) 0px 8px 28px;
    padding: 12px;
`;

const NavigationItemIcon = styled(ListItemIcon)`
    min-width: 45px;
`;

const NavigationIconButton = styled(IconButton)`
    svg {
        color: ${({ theme }) => theme.mode.svgColor} !important;
    }
    &:hover {
        background-color: transparent !important;
    }
`;

const STwitterIcon = styled(TwitterIcon)`
    font-size: 40px;
`;

const STwitterIconLink = styled(Link)`
    margin-left: 12px;
    margin-bottom: 20px;
`;

const STwitterIconButton = styled(NavigationIconButton).attrs(() => ({
    color: "primary",
}))`
    padding-left: 0;
`;

const styles = {
    Container,
    NavigationList,
    NavigationItem,
    NavigationItemButton,
    NavigationItemText,
    Link,
    TweetButton,
    NavigationItemIcon,
    NavigationIconButton,
    STwitterIcon,
    STwitterIconLink,
    STwitterIconButton,
};

export default styles;
