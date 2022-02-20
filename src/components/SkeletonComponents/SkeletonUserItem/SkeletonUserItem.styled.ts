import Flex from "@styled/components/Flex.styled";
import styled from "styled-components";
import { SkeletonUserItemProps } from "./SkeletonUserItem";

type ContainerProps = Pick<SkeletonUserItemProps, "padding">;

export const SContainer = styled(Flex).attrs(() => ({
    gap: 10,
}))<ContainerProps>`
    padding: ${({ padding }) => padding};
`;
