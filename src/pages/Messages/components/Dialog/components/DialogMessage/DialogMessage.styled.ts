import styled from "styled-components";
import Flex from "@styled/components/Flex.styled";
import { DialogMessageProps } from "./DialogMessage";

export const SContainer = styled(Flex).attrs(() => ({
    align: "center",
}))<Pick<DialogMessageProps, "isMine">>`
    min-height: 43px;
    padding: 12px 16px;
    border-radius: 16px;
    color: ${({ theme }) => theme.mode.typography.primary};
    background-color: ${({ theme, isMine }) =>
        !isMine
            ? theme.mode.components.dialogMessage.background
            : theme.accentColor};
    word-break: break-word;
`;
