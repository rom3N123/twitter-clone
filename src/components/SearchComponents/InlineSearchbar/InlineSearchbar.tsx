import React from "react";
import * as S from "./InlineSearchbar.styled";
import { StylessInputProps } from "@components/FormControl/StylessInput/StylessInput";

export interface InlineSearchbar extends StylessInputProps {}

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
