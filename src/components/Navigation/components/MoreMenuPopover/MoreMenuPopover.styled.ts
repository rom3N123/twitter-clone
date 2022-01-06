import styled from "styled-components";
import Popover from "@mui/material/Popover";
import { ReactComponent as DisplayDot } from "@icons/more/displayDot.svg";

export const SPopover = styled(Popover)`
    .MuiPaper-root {
        border-radius: 4px;
        padding: 0;
        max-width: 250px;
        min-width: 0;
        width: 100%;
    }
`;

export const SDisplayIcon = styled.div`
    position: relative;
`;

export const SDisplayDot = styled(DisplayDot)`
    position: absolute;
    left: 0;
    fill: ${({ theme }) => theme.accentColor};
`;
