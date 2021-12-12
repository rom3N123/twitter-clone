import styled, { css } from "styled-components";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

interface ITweetTypographyProps {
    grayTextColor?: boolean;
    userName?: boolean;
}

const TweetTypography: any = styled(Typography).attrs(() => ({
    variant: "body2",
}))`
    line-height: 20px;
    overflow-wrap: break-word;

    ${({ userName, grayTextColor }: ITweetTypographyProps) => `
        ${
            grayTextColor &&
            css`
                color: ${({ theme }) => theme.mode.palette.gray};
            `
        };

        ${
            userName &&
            css`
                & > ${TweetTypography}:first-child {
                    font-weight: 700;
                }
                &:hover {
                    & > ${TweetTypography}:first-child {
                        text-decoration: underline;
                    }
                }
            `
        }
    `}
`;

const TweetWrapper = styled(Paper).attrs(() => ({
    variant: "outlined",
    square: true,
}))`
    padding: 10px 16px;
    width: 600px;
    transition: all 0.3s ease-out;
    cursor: pointer;
    &:hover {
        background-color: rgba(255, 255, 255, 0.05);
    }
`;

const TweetInner = styled(Grid).attrs(() => ({
    container: true,
    gap: "12px",
}))``;

const AuthorAvatar = styled(Grid).attrs(() => ({
    item: true,
    component: Avatar,
    width: "48px",
    height: "48px",
}))`
    cursor: pointer;
`;

const TweetContent = styled(Grid).attrs(() => ({
    item: true,
}))`
    flex: 1 1;
`;

const AuthorInfo = styled.div`
    font-size: 15px;
`;

const styles = {
    TweetTypography,
    TweetWrapper,
    TweetInner,
    AuthorAvatar,
    TweetContent,
    AuthorInfo,
};

export default styles;