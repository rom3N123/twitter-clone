import styled from "styled-components";
import Grid from "@mui/material/Grid";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Divider from "@mui/material/Divider";
import { Form } from "formik";

export const SContainer = styled(Grid).attrs(() => ({
    container: true,
}))`
    padding: 10px 16px;
    gap: 16px;
`;

export const SFormWrapper = styled(Form)`
    flex-grow: 1;
`;

export const STextArea = styled(TextareaAutosize)`
    width: 100%;
    padding: 16px 0;
    max-height: 300px;

    &,
    &::placeholder {
        font-size: 20px;
    }

    &::placeholder {
        color: ${({ theme }) => theme.mode.palette.gray};
    }
`;

export const SDivider = styled(Divider)`
    margin-bottom: 10px;
`;

export const SFormActions = styled(Grid).attrs(() => ({
    container: true,
    justifyContent: "space-between",
    alignItems: "center",
}))``;

export const SButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const SButtonsDivider = styled(Divider).attrs(() => ({
    orientation: "vertical",
    flexItem: true,
}))`
    margin: 5px 10px;
`;
