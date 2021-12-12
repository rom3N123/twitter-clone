import styled from "styled-components";
import TextField from "@mui/material/TextField";
import CancelButton from "@components/Buttons/CancelButton";

const Field = styled(TextField).attrs(() => ({
    variant: "outlined",
    fullWidth: true,
}))`
    position: relative;
    z-index: 0;

    .Mui-focused {
        fieldset {
            background-color: ${({ theme }) => theme.mode.background.primary};
        }
    }
    & svg {
        fill: ${({ theme }) => theme.mode.palette.gray};
        width: 24px;
    }
    fieldset {
        z-index: -1;
        border: 1px solid transparent;
        background-color: ${({ theme }) => theme.mode.background.secondary};
        border-radius: 9999px;
        top: 0;
    }
    input {
        height: 42px;
        padding: 0 12px;
        &,
        &::placeholder {
            font-size: 14px;
            color: ${({ theme }) => theme.mode.typography};
        }
    }
`;

const ClearButton = styled(CancelButton)``;

const styles = {
    Field,
    ClearButton,
};

export default styles;
