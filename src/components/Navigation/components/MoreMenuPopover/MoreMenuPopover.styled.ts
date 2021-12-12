import styled from "styled-components";
import Popover from "@mui/material/Popover";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
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

export const SListIcon = styled(ListItemIcon)`
    min-width: 32px;
    svg {
        width: 20px;
        height: 20px;
    }
`;

export const SListItemText = styled(ListItemText)`
    font-size: 15px;
`;

export const SDisplayIcon = styled.div`
    position: relative;
`;

export const SDisplayDot = styled(DisplayDot)`
    position: absolute;
    left: 0;
    fill: ${({ theme }) => theme.accentColor};
`;
