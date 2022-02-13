import styled from "styled-components";
import Flex from "@styled/components/Flex.styled";
import { styledScrollbar } from "@styled/styles";

export const SContainer = styled(Flex).attrs(() => ({
    direction: "column",
}))`
    height: 100%;
    width: 100%;
`;

export const SHeader = styled.header``;

export const SMessagesContainer = styled.div`
    overflow: auto;
    ${styledScrollbar};
    padding-right: 10px;
`;

export const SMessages = styled(Flex).attrs(() => ({
    direction: "column",
    justify: "end",
}))`
    flex-grow: 1;
    width: 100%;
    margin: 10px 0 20px;
    overflow: auto;
`;
