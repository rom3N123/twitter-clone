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
}

const Flex = styled.div<IFlexProps>`
    display: flex;

    ${({ justify }) =>
        justify &&
        css`
            justify-content: ${justify};
        `}

    ${({ align }) =>
        align &&
        css`
            align-items: ${align};
        `}

    ${({ gap }) =>
        gap &&
        css`
            gap: ${gap}px;
        `}

    ${({ direction }) =>
        direction &&
        css`
            flex-direction: ${direction};
        `}
`;

export default Flex;
