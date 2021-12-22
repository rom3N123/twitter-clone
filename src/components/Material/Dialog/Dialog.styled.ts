import styled from "styled-components";
import Grid from "@mui/material/Grid";
import CancelButton from "@components/Buttons/CancelButton";

export const SDialogHeader = styled(Grid).attrs(() => ({
    container: true,
    justifyContent: "space-between",
    alignItems: "center",
}))`
    positon: relative;
    padding: 5px 10px 0;
`;

export const SDialogCloseButton = styled(CancelButton).attrs(() => ({
    width: 30,
}))``;
