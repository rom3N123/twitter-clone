import styled, { css } from "styled-components";
import Flex from "@styled/components/Flex.styled";
import Text from "@components/Text";
import IconButton from "@mui/material/IconButton";
import { IconButtonColorType } from "./IconButtonWithNumber";
import { ThemeColorName } from "@interfaces/styled";

export const SContainer = styled(Flex).attrs(() => ({
    align: "center",
    gap: 3,
}))``;

export const SText = styled(Text).attrs(() => ({
    component: "span",
    fontWeight: 500,
    fontSize: 14,
}))`
    color: inherit;
`;

interface ISIconButtonProps {
    color: IconButtonColorType;
}

export const SIconButton = styled(IconButton)<ISIconButtonProps>`
    ${({ theme, color }) => {
        const colorValue =
            color in theme.colors
                ? theme.colors[color as ThemeColorName]
                : theme.accentColor;

        return css`
            & + * {
                color: ${colorValue};
            }
        `;
    }}
`;

export const SIconContainer = styled(Flex).attrs(() => ({
    justify: "center",
    align: "center",
}))`
    svg {
        color: inherit !important;
    }
`;
