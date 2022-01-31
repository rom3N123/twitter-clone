import React from "react";
import * as S from "./StylessInput.styled";

export interface StylessInputStyledProps {
    height?: number;
    fullWidth?: boolean;
}

export interface StylessInputProps
    extends React.FormHTMLAttributes<HTMLInputElement>,
        StylessInputStyledProps {}

const StylessInput: React.FC<StylessInputProps> = ({
    height = 30,
    fullWidth,
    ...otherProps
}): React.ReactElement => {
    return <S.SInput fullWidth={fullWidth} height={height} {...otherProps} />;
};

export default StylessInput;
