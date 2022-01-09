import React from "react";
import { SText } from "./Text.styled";

export interface ITextProps {
    fontSize?: number;
    fontWeight?: number;
    color?: "gray" | string;
    component?: React.ElementType<any>;
    lh?: number;
}

const Text: React.FC<ITextProps> = ({
    fontSize,
    color,
    fontWeight,
    component,
    lh,
    children,
}): React.ReactElement => {
    return (
        <SText
            component={component}
            fontSize={fontSize}
            color={color}
            fontWeight={fontWeight}
            lh={lh}
        >
            {children}
        </SText>
    );
};

export default Text;
