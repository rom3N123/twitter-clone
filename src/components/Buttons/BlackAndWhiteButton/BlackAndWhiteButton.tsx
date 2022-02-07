import React from "react";
import useTheme from "@hooks/useTheme";
import { SButton } from "./BlackAndWhiteButton.styled";
import { ICommonButton } from "@types/components/shared";

export interface IBlackAndWhiteButtonProps extends ICommonButton {
    fullWidth?: boolean;
    height?: number;
}

const BlackAndWhiteButton: React.FC<IBlackAndWhiteButtonProps> = ({
    title,
    onClick,
    fullWidth,
    height,
    disabled,
    type,
}): React.ReactElement => {
    const { isDarkTheme } = useTheme();

    return (
        <SButton
            fullWidth={fullWidth}
            onClick={onClick}
            isDarkTheme={isDarkTheme}
            height={height}
            disabled={disabled}
            type={type}
        >
            {title}
        </SButton>
    );
};

export default BlackAndWhiteButton;
