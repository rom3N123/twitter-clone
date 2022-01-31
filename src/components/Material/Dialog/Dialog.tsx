import React from "react";
import MuiDialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IDialogCommonProps } from "@interfaces/components";

interface IDialogProps extends IDialogCommonProps {}

const Dialog: React.FC<IDialogProps> = ({
    open,
    onClose,
    children,
}): React.ReactElement => {
    const mobileMediaQuery = useMediaQuery("(max-width: 768px)");

    return (
        <MuiDialog fullScreen={mobileMediaQuery} open={open} onClose={onClose}>
            {children}
        </MuiDialog>
    );
};

export default Dialog;
