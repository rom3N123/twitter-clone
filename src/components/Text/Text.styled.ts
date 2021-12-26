import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { ITextProps } from "./Text";

export const SText = styled(Typography)<ITextProps>`
    ${({ theme, fontWeight, color, fontSize }) => `
        font-weight: ${fontWeight || 400};
        color: ${
            color === "gray" ? theme.mode.palette.gray : color || "initial"
        }
        font-size: ${fontSize ? `${fontSize}px` : "initial"}
    `}
`;
