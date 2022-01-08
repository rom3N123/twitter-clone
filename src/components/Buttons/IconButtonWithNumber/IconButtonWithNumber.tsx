import React from "react";
import * as S from "./IconButtonWithNumber.styled";

export type IconButtonColorType =
    | "secondary"
    | "primary"
    | "success"
    | "warning";

export interface IIconButtonWithNumberProps {
    color?: IconButtonColorType;
    number?: number;
    icon: React.ReactNode;
    onClick: () => void;
}

const IconButtonWithNumber: React.FC<IIconButtonWithNumberProps> = ({
    color = "secondary",
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
