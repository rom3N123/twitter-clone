import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowLeftIcon from "@mui/icons-material/ArrowBack";
import ArrowRightIcon from "@mui/icons-material/ArrowForward";

const arrowIcons = {
    left: ArrowLeftIcon,
    right: ArrowRightIcon,
};

interface IArrowBackButtonProps {
    direction?: keyof typeof arrowIcons;
    onClick: () => void;
}

const ArrowBackButton: React.FC<IArrowBackButtonProps> = ({
    direction = "left",
    onClick,
}): React.ReactElement => {
    const ArrowIcon = arrowIcons[direction];

    return (
        <IconButton onClick={onClick}>
            <ArrowIcon />
        </IconButton>
    );
};

export default ArrowBackButton;
