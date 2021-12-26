import styled, { css } from "styled-components";
import Twitter from "@mui/icons-material/Twitter";
import { ITwitterLogoProps } from "./TwitterLogo";

export const STwitterIcon = styled(Twitter)`
    font-size: ${({ size }: ITwitterLogoProps) => size || 40}px;
`;
