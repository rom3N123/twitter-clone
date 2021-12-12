import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import S from "./CancelButton.styled";

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
            <CancelIcon />
        </S.SIconButton>
    );
};

export default CancelButton;
