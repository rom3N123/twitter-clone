import styled from "styled-components";
import Paper from "@mui/material/Paper";

const SPaper = styled(Paper)`
    box-shadow: ${({ theme }) => theme.mode.shadows.primary};
    padding: 12px 0;
    max-width: 360px;
    min-width: 260px;
    border-radius: 16px;
`;

export default SPaper;
