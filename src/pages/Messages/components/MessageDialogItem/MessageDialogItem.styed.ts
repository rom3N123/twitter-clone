import styled from "styled-components";
import Flex from "@styled/components/Flex.styled";

export const SContainer = styled(Flex).attrs(() => ({
    gap: 10,
}))`
    padding: 16px;
    transition: all 0.2s ease;
    height: 70px;
    width: 100%;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.mode.background.secondary};
    }
`;

export const SInner = styled(Flex).attrs(() => ({
    direction: "column",
}))`
    flex-grow: 1;
    overflow: hidden;
`;

export const SUserName = styled(Flex).attrs(() => ({
    align: "center",
    gap: 10,
}))`
    word-wrap: nowrap;
    width: 100%;
    & > *:first-child {
        flex-grow: 1;
    }
`;

export const SMessageTextContainer = styled(Flex).attrs(() => ({
    align: "center",
    gap: 8,
}))``;

export const SMessageCircle = styled.div`
    background-color: ${({ theme }) => theme.accentColor};
    width: 8px;
    height: 8px;
    border-radius: 50%;
`;
