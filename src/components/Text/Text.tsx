import React from "react";
import { SText } from "./Text.styled";

export interface ITextProps {
    fontSize?: number;
    fontWeight?: number;
    color?: "primary" | "secondary" | string;
    component?: React.ElementType<any>;
    lh?: number;
    className?: string;
}

const Text: React.FC<ITextProps> = ({
    fontSize,
    color = "primary",
    fontWeight,
    component,
    lh,
    className,
    children,
}): React.ReactElement => {
    return (
        <SText
            component={component}
            fontSize={fontSize}
            color={color}
            fontWeight={fontWeight}
            lh={lh}
            className={className}
        >
            {children}
        </SText>
    );
};

export default Text;
