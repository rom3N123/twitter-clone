import React from "react";
import useTheme from "@hooks/useTheme";
import { SButton } from "./BlackAndWhiteButton.styled";
import { ICommonButton } from "@interfaces/components";

export interface IBlackAndWhiteButtonProps extends ICommonButton {
    fullWidth?: boolean;
    height?: number;
}

const BlackAndWhiteButton: React.FC<IBlackAndWhiteButtonProps> = ({
    title,
    onClick,
    fullWidth,
    height,
}): React.ReactElement => {
    const { isDarkTheme } = useTheme();

    return (
        <SButton
            fullWidth={fullWidth}
            onClick={onClick}
            isDarkTheme={isDarkTheme}
            height={height}
        >
            {title}
        </SButton>
    );
};

export default BlackAndWhiteButton;
