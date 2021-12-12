import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

const SIconButton = styled(IconButton)`
    padding: 0;
    svg {
        fill: ${({ theme }) => theme.accentColor};
    }
`;

const styles = {
    SIconButton,
};

export default styles;
