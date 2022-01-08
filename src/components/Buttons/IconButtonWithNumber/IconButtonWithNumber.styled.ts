import styled from "styled-components";
import Flex from "@styled/components/Flex.styled";
import Text from "@components/Text";
import IconButton from "@mui/material/IconButton";

export const SContainer = styled(Flex).attrs(() => ({
    align: "center",
    gap: 3,
}))``;

export const SText = styled(Text).attrs(() => ({
    component: "span",
    fontWeight: 500,
    fontSize: 14,
}))`
    color: inherit;
`;

export const SIconButton = styled(IconButton)`
    & + * {
        color: ${({ theme }) => theme.palette.warning};
    }
`;

export const SIconContainer = styled(Flex).attrs(() => ({
    justify: "center",
    align: "center",
}))`
    svg {
        color: inherit !important;
    }
`;
