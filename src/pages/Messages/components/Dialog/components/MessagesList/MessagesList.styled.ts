import styled from "styled-components";
import { styledScrollbar } from "@styled/styles";

export const SReversedElement = styled.div`
    transform: scaleY(-1);
    ${styledScrollbar};
`;

export const SReversedList = styled(SReversedElement)`
    padding-right: 10px;
`;
