import styled, { css } from "styled-components";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { alpha } from "@mui/system";

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

export const ProfileAvatarWrapper = styled.div`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.mode.background.primary};
`;

export const ProfileAvatar = styled(Avatar)`
    width: 133px;
    height: 133px;
    position: relative;
    z-index: 1;
    cursor: pointer;
    &:hover {
        &::before {
            opacity: 1;
        }
    }
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        transition: all 0.2s ease;
        background-color: ${alpha("#000", 0.2)};
        opacity: 0;
    }
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
