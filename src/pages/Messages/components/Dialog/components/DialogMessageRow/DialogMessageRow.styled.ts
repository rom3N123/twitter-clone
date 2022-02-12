import styled, { css } from "styled-components";
import Flex from "@styled/components/Flex.styled";

export const SContainer = styled(Flex).attrs(() => ({
    gap: 10,
    align: "end",
}))<{ indent: number; alignEnd?: boolean }>`
    max-width: 50%;
    padding-top: ${({ indent }) => indent}px;
    ${({ alignEnd }) =>
        alignEnd &&
        css`
            align-self: flex-end;
        `};
`;
