import React from "react";
import * as S from "./IconButtonWithNumber.styled";

export interface IIconButtonWithNumberProps {
    color?:
        | "default"
        | "inherit"
        | "secondary"
        | "primary"
        | "error"
        | "info"
        | "success"
        | "warning"
        | undefined;
    number?: number;
    icon: React.ReactNode;
    onClick: () => void;
}

const IconButtonWithNumber: React.FC<IIconButtonWithNumberProps> = ({
    color = "primary",
    icon,
    number,
    onClick,
}): React.ReactElement => {
    return (
        <S.SContainer>
            <S.SIconButton onClick={onClick} color={color}>
                <S.SIconContainer>{icon}</S.SIconContainer>
            </S.SIconButton>

            {typeof number !== "undefined" && <S.SText>{number}</S.SText>}
        </S.SContainer>
    );
};

export default IconButtonWithNumber;
