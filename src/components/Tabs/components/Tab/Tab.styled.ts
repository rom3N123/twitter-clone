import styled from "styled-components";
import Tab from "@mui/material/Tab";

export const STab = styled(Tab)`
    flex: 1;
    color: ${({ theme }) => theme.mode.typography.primary};
    text-transform: none;
    font-weight: 600;
`;
