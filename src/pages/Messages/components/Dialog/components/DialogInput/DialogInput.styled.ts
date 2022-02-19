import styled from "styled-components";
import Flex from "@styled/components/Flex.styled";
import TextField from "@mui/material/TextField";

export const SWrapper = styled(Flex).attrs(() => ({
    direction: "column",
}))`
    height: 80px;
    width: 100%;
`;

export const SContainer = styled(Flex).attrs(() => ({
    align: "center",
    gap: 10,
}))`
    width: 100%;
`;

export const STextField = styled(TextField)`
    flex-grow: 1;

    fieldset {
        border-radius: 9999px;
        top: 0;
    }

    input {
        padding: 4px 16px;
        height: 30px;
    }
`;

export const SWritingUsersContainer = styled.div`
    max-width: 50%;
    flex-grow: 1;
`;
