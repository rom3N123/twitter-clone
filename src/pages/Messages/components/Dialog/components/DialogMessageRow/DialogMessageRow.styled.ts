import styled, { css } from "styled-components";
import Flex from "@styled/components/Flex.styled";

export const SContainer = styled(Flex).attrs(() => ({
    gap: 10,
    align: "end",
}))<{ indent: number; justifyEnd?: boolean }>`
    max-width: 100%;
    padding-top: ${({ indent }) => indent}px;
    ${({ justifyEnd }) =>
        justifyEnd &&
        css`
            justify-content: end;
        `};
`;

export const SMessageContainer = styled.div`
    max-width: 50%;
`;
