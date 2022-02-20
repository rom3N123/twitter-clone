import Flex from "@styled/components/Flex.styled";
import styled from "styled-components";
import { centerAbsoluteStyles } from "@styled/styles";

export const SContainer = styled(Flex).attrs(() => ({
    align: "center",
    justify: "center",
}))`
    ${centerAbsoluteStyles};
`;
