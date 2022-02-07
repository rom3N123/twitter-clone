import React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CheckIcon from "@mui/icons-material/Check";
import ButtonBase from "@mui/material/ButtonBase";
import Flex from "@styled/components/Flex.styled";
import ProfileUserAvatar from "@components/UserComponents/ProfileUserAvatar";

export const SWrapper = styled.div`
    width: 100%;
`;

export const SContainer = styled(
    ({
        isButton = false,
        children,
        ...otherProps
    }: {
        isButton?: boolean;
        children: React.ReactNode;
    }): React.ReactElement => {
        return isButton ? (
            <ButtonBase {...otherProps}>{children}</ButtonBase>
        ) : (
            <Flex {...otherProps}>{children}</Flex>
        );
    }
)`
    border-radius: 9999px;
    gap: 6px;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const STextWrapper = styled.div`
    flex-basis: 62%;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
`;

export const Text = styled(Typography)`
    font-size: 15px;
`;

export const ProfileName = styled(Text)`
    font-weight: 700;
    text-align: left;
`;

export const ProfileId = styled(Text)`
    font-weight: 400;
    color: ${({ theme }) => theme.mode.typography.secondary};
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const SMoreIcon = styled(MoreHorizIcon)`
    font-size: 20px;
    flex-basis: 10%;
`;

export const SCheckIcon = styled(CheckIcon)`
    color: ${({ theme }) => theme.accentColor};
    font-size: 20px;
`;

export const SProfileUserAvatar = styled(ProfileUserAvatar)`
    flex-basis: 20%;
`;
