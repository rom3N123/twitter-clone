import React from "react";
import useTheme from "@hooks/useTheme";
import { SButton } from "./BlackAndWhiteButton.styled";

interface IBlackAndWhiteButtonProps {
    title: string;
}

const BlackAndWhiteButton: React.FC<IBlackAndWhiteButtonProps> = ({
    title,
}): React.ReactElement => {
    const { isDarkTheme } = useTheme();

    return <SButton isDarkTheme={isDarkTheme}>{title}</SButton>;
};

export default BlackAndWhiteButton;
