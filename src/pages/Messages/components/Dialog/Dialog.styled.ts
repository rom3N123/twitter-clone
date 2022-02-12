import styled from "styled-components";
import Flex from "@styled/components/Flex.styled";

export const SContainer = styled(Flex).attrs(() => ({
    direction: "column",
}))`
    height: 100%;
    width: 100%;
`;

export const SHeader = styled.header``;

export const SMessagesContainer = styled(Flex).attrs(() => ({
    direction: "column",
    justify: "end",
}))`
    flex-grow: 1;
    width: 100%;
    overflow-y: auto;
    margin-top: 10px;
`;
