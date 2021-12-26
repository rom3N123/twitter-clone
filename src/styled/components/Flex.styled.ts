import styled, { css } from "styled-components";

export type FlexAxisPositions =
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "end";

export type FlexDirections =
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse";

interface IFlexProps {
    align?: FlexAxisPositions;
    justify?: FlexAxisPositions;
    gap?: number;
    direction?: FlexDirections;
    basis?: string;
}

const Flex = styled.div<IFlexProps>`
    display: flex;

    ${({ justify, align, gap, direction, basis }) => css`
        justify-content: ${justify || "start"};
        align-items: ${align || "start"};
        gap: ${gap || 0}px;
        direction: ${direction || "row"};
        flex-basis: ${basis || "auto"};
    `}
`;

export default Flex;
