import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Flex from "@styled/components/Flex.styled";

export const SHeader = styled(Flex).attrs(() => ({
    align: "center",
}))`
    height: 53px;
`;

export const SHeaderInner = styled(Flex).attrs(() => ({
    align: "center",
    justify: "space-between",
}))`
    width: 100%;
    padding: 0 20px;
`;

export const SDialogButtonContainer = styled(Flex).attrs(() => ({
    align: "center",
    gap: 30,
}))``;

export const STwitterLogoContainer = styled(Flex).attrs(() => ({
    justify: "center",
}))``;

export const SButtonsContainer = styled(Flex).attrs(() => ({
    justify: "end",
}))`
    flex-basis: 33%;
`;

export const STitle = styled(Typography)`
    font-size: 20px;
    font-weight: 700;
`;
