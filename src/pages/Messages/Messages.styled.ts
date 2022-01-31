import Flex from "@styled/components/Flex.styled";
import styled from "styled-components";

export const SContainer = styled(Flex).attrs(() => ({
    justify: "space-between",
}))`
    height: 100vh;
    & > * {
        height: 100%;
    }
`;

export const SConversatins = styled.div`
    width: 40%;
    border-right: 1px solid ${({ theme }) => theme.mode.divider};
`;

export const SConversation = styled.div`
    flex-grow: 1;
`;

export const SConversationsInner = styled.div`
    padding: 20px;
`;

export const SSeleectDialogContainer = styled(Flex).attrs(() => ({
    align: "center",
    justify: "center",
}))`
    border-right: 1px solid ${({ theme }) => theme.mode.divider};
    flex-grow: 1;
    & > ${SConversationsInner} {
        height: 80%;
    }
`;
