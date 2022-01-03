import styled, { css } from "styled-components";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Flex from "@styled/components/Flex.styled";

export const Container = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.mode.divider};
`;

interface IProfileBackgroundProps {
    src?: string;
}
export const ProfileBackground = styled.div<IProfileBackgroundProps>`
    height: 200px;
    width: 100%;
    ${({ theme, src }) =>
        src
            ? css`
                  background: url(${src}) center / cover no-repeat;
              `
            : css`
                  background-color: ${theme.mode.background.profile};
              `}
`;

export const ProfileInfo = styled.div`
    padding: 12px 0;
    margin-top: -90px;
    font-size: 15px;
`;

export const ProfileName = styled(Typography)`
    font-weight: 700;
    font-size: 20px;
`;

export const ProfileId = styled(Typography)`
    color: ${({ theme }) => theme.mode.palette.gray};
    font-size: inherit;
`;

interface ProfileInfoItemsProps {
    gap?: number;
    margin?: string;
    justify?: string;
}
export const ProfileInfoItems = styled(Flex).attrs(() => ({
    align: "center",
}))<ProfileInfoItemsProps>`
    ${({ margin }) =>
        margin &&
        css`
            margin: ${margin};
        `}
    gap: ${({ gap }) => gap || 10}px;
`;

export const ProfileInfoItem = styled(Flex).attrs(() => ({
    gap: 5,
}))`
    color: ${({ theme }) => theme.mode.palette.gray};
    .MuiSvgIcon-root {
        width: 20px;
        height: 20px;
        color: inherit;
    }
`;

export const ProifleActivityNumber = styled(Typography).attrs(() => ({
    component: "",
}))`
    font-weight: 700;
    font-size: 16px;
`;

export const ProfileActivityLink = styled(Link)`
    border-bottom: 2px solid transparent;
    transition: all 0.2s ease;
    &:hover {
        border-color: ${({ theme }) => theme.mode.typography};
    }
`;

export const SProfileBio = styled.div`
    overflow: hidden;
    word-break: break-all;
`;

export const SProfileNameContainer = styled(Flex).attrs(() => ({
    align: "center",
    justify: "space-between",
}))``;
