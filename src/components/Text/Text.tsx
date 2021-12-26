import React from "react";
import { SText } from "./Text.styled";

export interface ITextProps {
    fontSize?: number;
    fontWeight?: number;
    color?: "gray" | string;
}

const Text: React.FC<ITextProps> = ({
    fontSize,
    color,
    fontWeight,
    children,
}): React.ReactElement => {
    return (
        <SText fontSize={fontSize} color={color} fontWeight={fontWeight}>
            {children}
        </SText>
    );
};

export default Text;
