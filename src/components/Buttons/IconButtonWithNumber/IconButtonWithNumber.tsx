import React from "react";
import * as S from "./IconButtonWithNumber.styled";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export type IconButtonColorType = "success" | "warning";

export interface IIconButtonWithNumberProps {
    icon: React.ReactNode;
    onClick: (e: React.MouseEvent) => void;
    filledIcon?: React.ReactNode;
    isFilledIcon?: boolean;
    color?: IconButtonColorType;
    number?: number;
    tooltipTitle?: string;
}

const IconButtonWithNumber: React.FC<IIconButtonWithNumberProps> = ({
    color,
    icon,
    number,
    onClick,
    isFilledIcon,
    filledIcon,
    tooltipTitle = "",
}): React.ReactElement => {
    return (
        <S.SContainer className={isFilledIcon ? "filled" : ""} color={color}>
            <Tooltip title={tooltipTitle}>
                <IconButton onClick={onClick} color="inherit">
                    <S.SIconContainer>
                        {isFilledIcon ? filledIcon : icon}
                    </S.SIconContainer>
                </IconButton>
            </Tooltip>
            {typeof number !== "undefined" && number > 0 && (
                <S.SText color="inherit">{number}</S.SText>
            )}
        </S.SContainer>
    );
};

export default IconButtonWithNumber;
