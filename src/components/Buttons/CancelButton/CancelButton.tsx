import React from "react";
import S from "./CancelButton.styled";
import ClearIcon from "@mui/icons-material/Clear";

interface ICancelButtonProps {
    onClick: () => void;
    width?: number;
}

const CancelButton: React.FC<ICancelButtonProps> = ({
    onClick,
    width,
}): React.ReactElement => {
    return (
        <S.SIconButton width={width} onClick={onClick}>
            <ClearIcon />
        </S.SIconButton>
    );
};

export default CancelButton;
