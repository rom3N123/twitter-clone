import styled, { css } from "styled-components";
import { StylessInputStyledProps } from "./StylessInput";

export const SInput = styled.input<StylessInputStyledProps>`
    outline: none;
    border: 0;
    font-size: 16px;
    height: ${({ height }) => height}px;
    ${({ fullWidth }) =>
        fullWidth &&
        css`
            width: 100%;
        `};
`;
