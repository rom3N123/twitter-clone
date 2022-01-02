import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Flex from "@styled/components/Flex.styled";

export const SSideContent = styled(Grid).attrs(() => ({
    item: true,
}))`
    position: sticky;
    top: 0;
    height: 100vh;
    & > * {
        padding: 10px 0;
    }
`;

export const SMainContent = styled(Grid).attrs(() => ({
    item: true,
}))`
    border: 1px solid ${({ theme }) => theme.mode.divider};
    border-top: 0;
    border-bottom: 0;
`;

export const SLoadingContainer = styled(Flex).attrs(() => ({
    align: "center",
    justify: "center",
}))``;
