import styled, { css } from "styled-components";
import IconButton from "@mui/material/IconButton";

const SIconButton = styled(IconButton)`
    ${({ width }: { width?: number }) =>
        width &&
        css`
            svg {
                width: ${width}px;
                height: ${width}px;
            }
        `};

    svg {
        fill: ${({ theme }) => theme.accentColor};
    }
`;

const styles = {
    SIconButton,
};

export default styles;
