import { alpha } from "@mui/system";
import styled, { css } from "styled-components";
import Button from "@mui/material/Button";
import { blackColors } from "@styles/blackAndWhiteColors";
import { whiteColors } from "@styles/blackAndWhiteColors";

interface IButtonProps {
    isDarkTheme: boolean;
    height?: number;
}

export const SButton = styled(Button).attrs(() => ({
    variant: "contained",
}))<IButtonProps>`
    height: 32px;
    min-width: 32px;

    ${({ height }) =>
        height &&
        css`
            height: ${height}px;
        `}

    ${({ isDarkTheme }) => {
        const backgroundColor: string = isDarkTheme
            ? whiteColors.background
            : blackColors.background;

        const typographyColor: string = isDarkTheme
            ? whiteColors.typography
            : blackColors.typography;

        return css`
            background-color: ${backgroundColor};
            color: ${typographyColor};
            &:hover {
                background-color: ${alpha(backgroundColor, 0.8)};
            }
            &:active {
                background-color: ${alpha(backgroundColor, 0.6)};
            }
        `;
    }}
`;
