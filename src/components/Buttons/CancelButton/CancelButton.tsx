import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { SIconButton } from "./CancelButton.styled";

interface ICancelButtonProps {
    onClick: () => void;
}

const CancelButton: React.FC<ICancelButtonProps> = ({
    onClick,
}): React.ReactElement => {
    return (
        <SIconButton>
            <CancelIcon />
        </SIconButton>
    );
};

export default CancelButton;
