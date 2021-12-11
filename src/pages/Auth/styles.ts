import { Twitter } from "@mui/icons-material";
import { Grid, Button as MuiButton } from "@mui/material";
import styled from "styled-components";

export const AuthPage = styled(Grid).attrs(() => ({
    container: true,
}))`
    height: 100vh;
`;

export const LeftSide = styled(Grid).attrs(() => ({
    flexBasis: "55%",
}))`
    position: relative;
    background: url(https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png);
`;

export const TwitterIconBg = styled(Twitter)`
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
`;

export const RightSide = styled(Grid).attrs(() => ({
    flexBasis: "45%",
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
`;

export const RightSideContent = styled.div`
    width: 100%;
    padding: 20px;
`;

export const TwitterIcon = styled(Twitter)`
    width: 60px;
    height: 60px;
`;

export const Button = styled(MuiButton)`
    max-width: 300px;
    width: 100%;
`;
