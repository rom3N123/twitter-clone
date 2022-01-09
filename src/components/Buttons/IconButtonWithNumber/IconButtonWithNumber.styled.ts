import styled, { css } from "styled-components";
import Flex from "@styled/components/Flex.styled";
import Text from "@components/Text";
import { IconButtonColorType } from "./IconButtonWithNumber";
import { ThemeColorName } from "@interfaces/styled";

interface SContainerProps {
    color?: ThemeColorName;
}

export const SContainer = styled(Flex).attrs(() => ({
    align: "center",
    gap: 3,
}))<SContainerProps>`
    ${({ theme, color }) => {
        const colorValue =
            typeof color !== "undefined"
                ? theme.colors[color]
                : theme.accentColor;

        return css`
            transition: all 0.1s ease;
            &:hover {
                color: ${colorValue};
            }

            /* &,
            & > * {
                color: ${theme.mode.typography.secondary};

                &:hover {
                    color: ${colorValue};
                }
            } */

            &.filled {
                color: ${colorValue};
            }
        `;
    }}
`;

export const SText = styled(Text).attrs(() => ({
    component: "span",
    fontWeight: 500,
    fontSize: 14,
}))`
    color: inherit;
`;

export const SIconContainer = styled(Flex).attrs(() => ({
    justify: "center",
    align: "center",
}))`
    svg {
        color: inherit !important;
    }
`;
