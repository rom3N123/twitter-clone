import styled, { css } from "styled-components";
import Flex from "@styled/components/Flex.styled";
import { IPageHeaderProps } from "./PageHeader";

export const SHeader = styled(Flex).attrs(() => ({
    align: "center",
    gap: 10,
}))<Pick<IPageHeaderProps, "borderless">>`
    height: 53px;
    padding: 0 16px;

    ${({ borderless }) =>
        !borderless &&
        css`
            border-bottom: 1px solid ${({ theme }) => theme.mode.divider};
        `}
`;
