import styled from "styled-components";
import Flex from "@styled/components/Flex.styled";
import Paper from "@mui/material/Paper";

export const SContainer = styled(Paper)`
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1000;
`;

export const SInner = styled(Flex).attrs(() => ({
    align: "center",
    justify: "center",
}))`
    height: 100%;
    width: 100%;
`;
