import styled from "styled-components";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import ListItem from "@mui/material/ListItem";

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

export const SListItem = styled(ListItem)``;
