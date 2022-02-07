import Twitter from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

export const SContainer = styled(Grid).attrs(() => ({
    container: true,
}))`
    height: 100vh;
`;

export const SLeftSide = styled(Grid).attrs(() => ({
    flexBasis: "55%",
}))`
    position: relative;
    background: url(https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png);
`;

export const STwitterIconBg = styled(Twitter)`
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
`;

export const SRightSide = styled(Grid).attrs(() => ({
    flexBasis: "45%",
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
`;

export const SRightSideContent = styled.div`
    width: 100%;
    padding: 20px;
`;

export const STwitterIcon = styled(Twitter)`
    width: 60px;
    height: 60px;
`;

export const SButton = styled(Button)`
    max-width: 300px;
    width: 100%;
`;
