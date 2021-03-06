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
    flex-grow: 1;
    height: 100%;
    width: 100%;
`;
