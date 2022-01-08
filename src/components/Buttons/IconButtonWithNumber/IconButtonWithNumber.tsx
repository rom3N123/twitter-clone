import React from "react";
import * as S from "./IconButtonWithNumber.styled";

export type IconButtonColorType =
    | "secondary"
    | "primary"
    | "success"
    | "warning";

export interface IIconButtonWithNumberProps {
    icon: React.ReactNode;
    onClick: () => void;
    filledIcon?: React.ReactNode;
    isFilledIcon?: boolean;
    color?: IconButtonColorType;
    number?: number;
}

const IconButtonWithNumber: React.FC<IIconButtonWithNumberProps> = ({
    color = "secondary",
    icon,
    number,
    onClick,
    isFilledIcon,
    filledIcon,
}): React.ReactElement => {
    return (
        <S.SContainer>
            <S.SIconButton onClick={onClick} color={color}>
                <S.SIconContainer isFilledIcon={isFilledIcon}>
                    {isFilledIcon ? filledIcon : icon}
                </S.SIconContainer>
            </S.SIconButton>

            {typeof number !== "undefined" && number > 0 && (
                <S.SText>{number}</S.SText>
            )}
        </S.SContainer>
    );
};

export default IconButtonWithNumber;
