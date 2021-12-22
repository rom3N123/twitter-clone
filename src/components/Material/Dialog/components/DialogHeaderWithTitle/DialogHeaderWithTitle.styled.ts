import { SDialogHeader } from "./../../Dialog.styled";
import Flex from "@styled/components/Flex.styled";
import styled from "styled-components";
import Typography from "@mui/material/Typography";

export const SHeader = styled(SDialogHeader)`
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const STitleContainer = styled(Flex).attrs(() => ({
    align: "center",
    justify: "space-between",
    gap: 30,
}))``;

export const STitle = styled(Typography)`
    font-size: 20px;
    font-weight: 700;
`;
