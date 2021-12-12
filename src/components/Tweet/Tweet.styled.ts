import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { alpha } from "@mui/system";
import IconButton from "@mui/material/IconButton";

const Container = styled(Paper).attrs(() => ({
    variant: "outlined",
}))`
    border-left: 0;
    border-right: 0;
    padding: 15px 20px;
    transition: all .2s ease;
    cursor: pointer;
    
    &:hover: {
        background-color: "rgb(245, 248, 250)";
    },
`;

const Buttons = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 450px;
    width: 100%;
    .muisvgicon-root: {
        fontsize: 20px;
    }
    span: {
        fontsize: 14px;
    }
    margin-top: 5px;
`;

const ButtonWrapper = styled.div`
    transition: all 0.1s ease;

    &:hover {
        color: ${({ theme }) => alpha(theme.mode.background.secondary, 0.2)};
    }
`;

const ButtonLabel = styled(Typography).attrs(() => ({
    component: "span",
}))`
    margin-left: 5px;
    font-weight: 500;
    font-size: 14px;
`;

const AuthorAvatar = styled(Avatar)`
    width: 48px;
    height: 48px;
`;

const UserLabel = styled(Typography).attrs(() => ({
    variant: "body2",
    component: "span",
}))`
    color: ${({ theme }) => theme.mode.palette.gray};
`;

const TweetButton = styled(IconButton).attrs(() => ({
    size: "small",
}))`
    svg {
        color: inherit !important;
    }
`;

const styles = {
    Container,
    Buttons,
    ButtonWrapper,
    ButtonLabel,
    AuthorAvatar,
    UserLabel,
    TweetButton,
};

export default styles;
