import styled from "styled-components";
import Grid from "@mui/material/Grid";

const SideContent = styled(Grid).attrs(() => ({
    item: true,
}))`
    position: sticky;
    top: 0;
    height: 100vh;
    & > * {
        padding: 10px 0;
    }
`;

const MainContent = styled(Grid).attrs(() => ({
    item: true,
}))`
    border: 1px solid ${({ theme }) => theme.mode.divider};
    border-top: 0;
    border-bottom: 0;
`;

const styles = { SideContent, MainContent };

export default styles;
