import styled, { css } from "styled-components";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { ColorName, ModeName } from "@interfaces/styled";
import accentColors from "@styles/accentColors";
import modes from "@styles/modes";
import Flex from "@styled/components/Flex.styled";
import CheckIcon from "@mui/icons-material/Check";

export const STypography = styled(Typography)`
    text-align: center;
`;

export const STitle = styled(STypography)`
    font-weight: 800;
    font-size: 23px;
    margin: 32px 0 12px;
`;

export const SDialogContent = styled(DialogContent)`
    padding: 0 32px 32px 32px;
`;

export const SContentLabel = styled(STypography)`
    color: ${({ theme }) => theme.mode.typography.secondary};
    font-size: 15px;
    font-weight: 400;
`;

export const SSettings = styled(Grid).attrs(() => ({
    container: true,
    direction: "column",
}))`
    gap: 12px;
`;

export const SOptionsLabel = styled(Typography)`
    font-size: 13px;
    margin-bottom: 4px;
    font-weight: 700;
    color: ${({ theme }) => theme.mode.typography.secondary};
`;

export const SOptions = styled(Flex).attrs(() => ({
    justify: "space-between",
    align: "center",
}))`
    background-color: ${({ theme }) => theme.mode.background.secondary};
    padding: 16px;
    border-radius: 16px;
    gap: 10px;
`;

export const SColorOptionWrapper = styled(Flex).attrs(() => ({
    justify: "center",
    alignItems: "center",
}))`
    position: relative;
`;

interface IColorOptionWrapperProps {
    visible: boolean;
}
export const SColorOptionCheckIcon = styled(
    CheckIcon
)<IColorOptionWrapperProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    color: #fff;
    opacity: 0;
    transition: all 0.2s ease;

    ${({ visible }) =>
        visible &&
        css`
            opacity: 1;
        `}
`;

interface IColorOptionProps {
    color: ColorName;
}
export const SColorOption = styled.div<IColorOptionProps>`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: ${({ color }) => accentColors[color]};
    cursor: pointer;
`;

interface IBackgroundOptionProps {
    mode: ModeName;
    onClick: () => void;
    active: boolean;
}
export const SBackgroundOption = styled(Flex).attrs(() => ({
    align: "center",
    gap: 8,
}))<IBackgroundOptionProps>`
    height: 62px;
    border: 2px solid ${({ mode }) => modes[mode].divider};
    cursor: pointer;
    padding: 0 20px;
    border-radius: 4px;
    background-color: ${({ mode }) => modes[mode].background.primary};
    flex: 1;

    .MuiTypography-root {
        color: ${({ mode }) => modes[mode].typography.primary};
    }

    ${({ active }) =>
        active &&
        css`
            border-color: ${({ theme }) => theme.accentColor};
        `}
`;
