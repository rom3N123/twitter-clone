import styled from "styled-components";
import Flex from "@styled/components/Flex.styled";
import TextField from "@mui/material/TextField";

export const SContainer = styled(Flex).attrs(() => ({
    align: "center",
    gap: 10,
}))`
    height: 50px;
    width: 100%;
`;

export const STextField = styled(TextField)`
    flex-grow: 1;

    fieldset {
        border-radius: 9999px;
    }

    input {
        padding: 4px 16px;
        height: 30px;
    }
`;
