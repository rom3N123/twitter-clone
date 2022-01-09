import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { ITextProps } from "./Text";

export const SText = styled(Typography)<ITextProps>`
    ${({ theme, fontWeight, color, fontSize, lh }) => `
        font-weight: ${fontWeight || 400};
        color: ${
            color === "primary"
                ? theme.mode.typography.primary
                : color === "secondary"
                ? theme.mode.typography.secondary
                : color
        };
        font-size: ${fontSize || 15}px;
        line-height: ${lh || 20}px;
    `};

    overflow: hidden;
    text-overflow: ellipsis;
`;
