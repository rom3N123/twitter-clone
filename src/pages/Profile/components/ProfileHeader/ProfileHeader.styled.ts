import styled, { css } from "styled-components";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export const Container = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.mode.divider};
`;

export const ProfileBackground = styled.div`
    height: 200px;
    width: 100%;
    background-color: blue;
`;

export const ProfileInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    margin-top: -90px;
    font-size: 15px;
`;

export const ProfileInfoLeftSide = styled.div``;

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
export const ProfileInfoItems = styled.div<ProfileInfoItemsProps>`
    display: flex;
    align-items: center;
    ${({ justify }) =>
        justify &&
        css`
            justify-content: ${justify};
        `}
    ${({ margin }) =>
        margin &&
        css`
            margin: ${margin};
        `}
gap: ${({ gap }) => gap || 10}px;
`;

export const ProfileInfoItem = styled.div`
    display: flex;
    gap: 5px;
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
