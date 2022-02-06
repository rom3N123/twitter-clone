import styled from "styled-components";
import Flex from "@styled/components/Flex.styled";
import StylessInput from "@components/FormControl/StylessInput";
import { ReactComponent as LoupeSvg } from "@icons/loupe.svg";

export const SContainer = styled(Flex).attrs(() => ({
    align: "center",
    gap: 15,
}))`
    width: 100%;
`;

export const SLoupeSvg = styled(LoupeSvg)`
    height: 24px;
    width: 24px;
`;

export const SInput = styled(StylessInput)`
    flex-grow: 1;
`;
