import React from "react";
import * as S from "./StylessInput.styled";

export interface StylessInputStyledProps {
    height?: number;
    fullWidth?: boolean;
}

export interface StylessInputProps
    extends React.FormHTMLAttributes<HTMLInputElement>,
        StylessInputStyledProps {
    value?: string;
}

const StylessInput: React.FC<StylessInputProps> = ({
    height = 30,
    fullWidth,
    value,
    ...otherProps
}): React.ReactElement => {
    return (
        <S.SInput
            value={value}
            fullWidth={fullWidth}
            height={height}
            {...otherProps}
        />
    );
};

export default StylessInput;
