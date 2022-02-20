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
    position: relative;
`;

export const SConversation = styled.div`
    flex-grow: 1;
`;

export const SConversationsInner = styled.div`
    padding: 20px;
    width: 100%;
    height: 100%;
`;

export const SSeleectDialogContainer = styled(Flex).attrs(() => ({
    align: "center",
    justify: "center",
}))`
    padding: 16px;
    border-right: 1px solid ${({ theme }) => theme.mode.divider};
    flex-grow: 1;
    & > ${SConversationsInner} {
        height: 80%;
    }
`;

export const SDialogContainer = styled.div`
    width: 100%;
    border-right: 1px solid ${({ theme }) => theme.mode.divider};
`;
