import styled, { css } from "styled-components";
import Avatar from "@mui/material/Avatar";
import { alpha } from "@mui/material";
import { IProfileUserAvatarProps } from "./ProfileUserAvatar";

interface ISProfileAvatarProps
    extends Omit<IProfileUserAvatarProps, "withWrapper" | "user"> {
    clickable?: boolean;
}

const DEFAULT_SIZE = 133;

export const SProfileAvatar = styled(Avatar)`
    ${({ size }: ISProfileAvatarProps) => css`
        height: ${size || DEFAULT_SIZE}px;
        width: ${size || DEFAULT_SIZE}px;
    `}

    position: relative;
    z-index: 1;

    ${({ clickable }) =>
        clickable &&
        css`
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
        `}
`;

export const SProfileAvatarWrapper = styled.div`
    ${({ size }: ISProfileAvatarProps) => css`
        width: ${(size || DEFAULT_SIZE) + 7}px;
        height: ${(size || DEFAULT_SIZE) + 7}px;
    `}
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.mode.background.primary};
`;
