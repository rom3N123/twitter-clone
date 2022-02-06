import Content from "@styled/components/Content.styled";
import Flex from "@styled/components/Flex.styled";
import styled from "styled-components";

export const STweetFormWrapper = styled(Content)`
    border-bottom: 1px solid ${({ theme }) => theme.mode.divider};
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const SContainer = styled(Flex).attrs(() => ({
    direction: "column",
}))`
    height: 100%;
    width: 100%;
    &,
    & > * {
        width: 100%;
    }
`;

export const SListContainer = styled.div`
    flex-grow: 1;
`;
