import styled, { css } from "styled-components";
import { alpha } from "@mui/system";
import Button from "@mui/material/Button";

export const SButton = styled(Button)`
    width: 100px;
    height: 36px;

    &:hover {
        ${({ theme }) => {
            const dangerColor = theme.mode.palette.danger;

            return css`
                border-color: ${dangerColor};
                background-color: ${alpha(dangerColor, 0.1)} !important;
                color: ${dangerColor};
                &:active {
                    background-color: ${alpha(dangerColor, 0.2)} !important;
                }
            `;
        }}
    }
`;
