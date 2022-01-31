import React from "react";
import * as S from "./InlineSearchbar.styled";

export interface InlineSearchbar
    extends React.FormHTMLAttributes<HTMLInputElement> {}

const InlineSearchbar: React.FC<InlineSearchbar> = ({
    ...otherProps
}): React.ReactElement => {
    return (
        <S.SContainer>
            <S.SLoupeSvg />
            <S.SInput {...otherProps} />
        </S.SContainer>
    );
};

export default InlineSearchbar;
