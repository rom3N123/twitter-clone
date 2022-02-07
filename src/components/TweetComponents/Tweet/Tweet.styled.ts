import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Flex from "@styled/components/Flex.styled";
import Text from "@components/TypographyComponents/Text";

export const SContainer = styled(Paper).attrs(() => ({
    variant: "outlined",
}))`
    border-left: 0;
    border-right: 0;
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.mode.background.secondary};
    }
`;

export const SInner = styled(Flex).attrs(() => ({
    gap: 12,
}))`
    padding: 16px 12px;
`;

export const STweetBody = styled(Flex).attrs(() => ({
    direction: "column",
}))`
    flex-grow: 1;
`;

export const STweetBodyInner = styled(Flex).attrs(() => ({
    direction: "column",
}))`
    width: 100%;
`;

export const SButtons = styled.footer`
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

export const SAuthorAvatar = styled(Avatar)`
    width: 48px;
    height: 48px;
`;

export const SUserLabel = styled(Typography).attrs(() => ({
    variant: "body2",
    component: "span",
}))`
    color: ${({ theme }) => theme.mode.typography.secondary};
`;

export const STweetText = styled(Text)`
    word-break: break-all;
`;
