import { styledScrollbar } from "@styled/styles";
import styled from "styled-components";
import Alert from "@mui/material/Alert";

export const SAlert = styled(Alert)`
    max-width: 50vw;

    .MuiAlert-message {
        ${styledScrollbar};
    }
`;
