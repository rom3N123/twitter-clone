import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import S from "./CancelButton.styled";

interface ICancelButtonProps {
    onClick: () => void;
}

const CancelButton: React.FC<ICancelButtonProps> = ({
    onClick,
}): React.ReactElement => {
    return (
        <S.SIconButton onClick={onClick}>
            <CancelIcon />
        </S.SIconButton>
    );
};

export default CancelButton;
