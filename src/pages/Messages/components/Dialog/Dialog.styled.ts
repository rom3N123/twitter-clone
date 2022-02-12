import styled from "styled-components";
import Flex from "@styled/components/Flex.styled";

export const SContainer = styled(Flex).attrs(() => ({
    direction: "column",
}))`
    height: 100%;
    width: 100%;
    overflow-y: scroll;
`;

export const SHeader = styled.header``;

export const SMessagesContainer = styled(Flex).attrs(() => ({
    direction: "column",
    justify: "end",
}))`
    flex-grow: 1;
    width: 100%;
    margin: 10px 0 20px;
`;
