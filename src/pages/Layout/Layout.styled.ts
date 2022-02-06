import styled from "styled-components";
import Flex from "@styled/components/Flex.styled";

export const SSideContent = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
    & > * {
        padding: 10px 0;
    }
    @media (min-width: 1100px) {
        padding: 0 20px;
    }
    @media (max-width: 1100px) {
        padding: 0 5px;
    }
`;

export const SNavigationContainer = styled(SSideContent)`
    border-right: 1px solid ${({ theme }) => theme.mode.divider};
`;

export const SRightSideContainer = styled(SSideContent)`
    width: 24%;
    border-left: 1px solid ${({ theme }) => theme.mode.divider};

    @media (max-width: 1100px) {
        display: none;
    }
`;

export const SMainContent = styled.div`
    flex: 1;
    height: 100vh;
    overflow-y: auto;
`;

export const SContainer = styled(Flex).attrs(() => ({
    justify: "space-between",
}))`
    width: 100%;
`;

export const SContentContainer = styled(Flex).attrs(() => ({}))`
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 auto;
    @media (max-width: 1100px) {
        padding: 0;
    }
`;
