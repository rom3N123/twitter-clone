import styled from "styled-components";
import Content from "@styled/components/Content.styled";
import Flex from "@styled/components/Flex.styled";

export const SContent = styled(Content)`
    padding-top: 10px;
`;

export const STextContainer = styled.div`
    margin: 10px 0;
`;

export const SButtonsContainer = styled(Flex).attrs(() => ({
    align: "center",
    justify: "space-around",
}))`
    border: 1px solid ${({ theme }) => theme.mode.divider};
    border-left: 0;
    border-right: 0;
    margin: 10px 0;
    padding: 5px 0;
`;
